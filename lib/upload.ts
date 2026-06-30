import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

export async function saveUploadedFile(
  file: File,
  subdir: 'images' | 'documents'
): Promise<{ url: string; fileName: string; fileSize: number; mimeType: string }> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const originalExt = path.extname(file.name).toLowerCase();
  const ext = originalExt || (subdir === 'images' ? '.jpg' : '.docx');
  const safeName = `${randomUUID()}${ext}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads', subdir);

  await mkdir(uploadDir, { recursive: true });
  await writeFile(path.join(uploadDir, safeName), buffer);

  return {
    url: `/uploads/${subdir}/${safeName}`,
    fileName: file.name,
    fileSize: file.size,
    mimeType: file.type || 'application/octet-stream',
  };
}
