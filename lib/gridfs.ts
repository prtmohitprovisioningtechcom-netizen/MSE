import mongoose from 'mongoose';
import { GridFSBucket, ObjectId } from 'mongodb';
import dbConnect from '@/lib/db';

export async function getGridFSBucket() {
  await dbConnect();
  const db = mongoose.connection.db;
  if (!db) {
    throw new Error('Database not connected');
  }
  return new GridFSBucket(db, { bucketName: 'mse_files' });
}

export async function saveFileToGridFS(
  buffer: Buffer,
  fileName: string,
  mimeType: string
): Promise<{ fileId: string; url: string }> {
  const bucket = await getGridFSBucket();

  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(fileName, {
      metadata: { contentType: mimeType || 'application/octet-stream' },
    });

    uploadStream.on('finish', () => {
      const fileId = uploadStream.id.toString();
      resolve({
        fileId,
        url: `/api/files/${fileId}`,
      });
    });
    uploadStream.on('error', reject);
    uploadStream.end(buffer);
  });
}

export async function readFileFromGridFS(fileId: string) {
  const bucket = await getGridFSBucket();
  const _id = new ObjectId(fileId);

  const files = await bucket.find({ _id }).toArray();
  if (!files.length) {
    throw new Error('File not found');
  }

  const chunks: Buffer[] = [];
  const downloadStream = bucket.openDownloadStream(_id);

  const buffer = await new Promise<Buffer>((resolve, reject) => {
    downloadStream.on('data', (chunk) => chunks.push(chunk));
    downloadStream.on('error', reject);
    downloadStream.on('end', () => resolve(Buffer.concat(chunks)));
  });

  return {
    buffer,
    contentType:
      (files[0].metadata as { contentType?: string } | undefined)?.contentType ||
      'application/octet-stream',
    fileName: files[0].filename,
  };
}

export function isGridFsUrl(url: string) {
  return url.startsWith('/api/files/');
}

export function gridFsIdFromUrl(url: string) {
  return url.replace(/^\/api\/files\//, '');
}
