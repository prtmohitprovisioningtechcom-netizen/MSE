import { readFile } from 'fs/promises';
import path from 'path';
import { gridFsIdFromUrl, isGridFsUrl, readFileFromGridFS } from '@/lib/gridfs';

export async function resolveStoredFile(fileUrl: string) {
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
    const { buffer, contentType } = await readFileFromGridFS(gridFsIdFromUrl(fileUrl));
    return { buffer, contentType };
  }

  const relativePath = fileUrl.replace(/^\//, '');
  const filePath = path.join(process.cwd(), 'public', relativePath);
  const buffer = await readFile(filePath);
  return { buffer };
}
