import { readFile } from 'fs/promises';
import path from 'path';
import { isGridFsUrl } from '@/lib/fileUrls';

export async function resolveStoredFile(fileUrl: string) {
  if (!fileUrl?.trim()) {
    throw new Error('Missing file reference');
  }

  if (fileUrl.startsWith('http://') || fileUrl.startsWith('https://')) {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error('Remote file not found');
    }
    return {
      buffer: Buffer.from(await response.arrayBuffer()),
      contentType: response.headers.get('content-type') || undefined,
    };
  }

  if (isGridFsUrl(fileUrl)) {
    const { readFileFromGridFS, gridFsIdFromUrl } = await import('@/lib/gridfs');
    const { buffer, contentType } = await readFileFromGridFS(gridFsIdFromUrl(fileUrl));
    return { buffer, contentType };
  }

  if (process.env.VERCEL === '1') {
    throw new Error('Local file not available on server — please re-upload from admin panel');
  }

  const relativePath = fileUrl.replace(/^\//, '');
  const filePath = path.join(process.cwd(), 'public', relativePath);
  const buffer = await readFile(filePath);
  return { buffer };
}