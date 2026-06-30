import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { saveUploadedFile } from '@/lib/upload';

const DOC_TYPES = [
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
];
const DOC_EXT = ['.doc', '.docx', '.pdf'];

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/jpg'];
const IMAGE_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

const MAX_DOC_SIZE = 15 * 1024 * 1024;
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

function isImageFile(file: File, ext: string) {
  return IMAGE_TYPES.includes(file.type) || IMAGE_EXT.includes(ext);
}

function isDocumentFile(file: File, ext: string) {
  return DOC_TYPES.includes(file.type) || DOC_EXT.includes(ext);
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || (session.role !== 'Admin' && session.role !== 'Super Admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const ext = file.name.toLowerCase().slice(file.name.lastIndexOf('.'));
    const image = isImageFile(file, ext);
    const document = isDocumentFile(file, ext);

    if (!image && !document) {
      return NextResponse.json(
        { error: 'Only MS Word (.doc, .docx), PDF, or images (.jpg, .png, .webp, .gif) are allowed' },
        { status: 400 }
      );
    }

    const maxSize = image ? MAX_IMAGE_SIZE : MAX_DOC_SIZE;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: image ? 'Image must be under 5MB' : 'File must be under 15MB' },
        { status: 400 }
      );
    }

    const result = await saveUploadedFile(file, image ? 'images' : 'documents');
    return NextResponse.json({ success: true, ...result });
  } catch (error: any) {
    console.error('Document upload error:', error);
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
