import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import dbConnect from '@/lib/db';
import JobBusinessDocument from '@/models/JobBusinessDocument';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await dbConnect();

    const doc = await JobBusinessDocument.findOne({ _id: id, isPublished: true });
    if (!doc) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 });
    }

    const relativePath = doc.fileUrl.replace(/^\//, '');
    const filePath = path.join(process.cwd(), 'public', relativePath);

    const buffer = await readFile(filePath);
    const mimeType = doc.mimeType || 'application/octet-stream';

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': 'inline',
        'Cache-Control': 'private, no-store, no-cache, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Document view error:', error);
    return NextResponse.json({ error: 'Failed to load document' }, { status: 500 });
  }
}
