import mongoose from 'mongoose';
import { GridFSBucket, ObjectId } from 'mongodb';
import dbConnect from '@/lib/db';

export function getMongoDbName() {
  return process.env.MONGODB_DB_NAME || 'mse';
}

export async function getGridFsDb() {
  await dbConnect();

  if (mongoose.connection.readyState !== 1) {
    await mongoose.connection.asPromise();
  }

  const client = mongoose.connection.getClient();
  if (!client) {
    throw new Error('MongoDB client not available');
  }

  return client.db(getMongoDbName());
}

export async function getGridFSBucket() {
  const db = await getGridFsDb();
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

function parseGridFsId(fileId: string) {
  const clean = fileId.trim().split('?')[0];
  if (!ObjectId.isValid(clean)) {
    throw new Error('Invalid file reference');
  }
  return new ObjectId(clean);
}

export async function readFileFromGridFS(fileId: string) {
  const bucket = await getGridFSBucket();
  const _id = parseGridFsId(fileId);

  const files = await bucket.find({ _id }).toArray();
  if (!files.length) {
    throw new Error('File not found in storage');
  }

  const chunks: Buffer[] = [];
  const downloadStream = bucket.openDownloadStream(_id);

  const buffer = await new Promise<Buffer>((resolve, reject) => {
    downloadStream.on('data', (chunk: Buffer) => chunks.push(chunk));
    downloadStream.on('error', reject);
    downloadStream.on('end', () => resolve(Buffer.concat(chunks)));
  });

  const metadata = files[0].metadata as { contentType?: string } | undefined;

  return {
    buffer,
    contentType: metadata?.contentType || 'application/octet-stream',
    fileName: files[0].filename,
  };
}

export function gridFsIdFromUrl(url: string) {
  return url.replace(/^\/api\/files\//, '').split('?')[0].trim();
}
