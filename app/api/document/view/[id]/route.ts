import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import JobBusinessDocument from '@/models/JobBusinessDocument';
import { resolveStoredFile } from '@/lib/fileServe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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

    const { buffer, contentType } = await resolveStoredFile(doc.fileUrl);
    const mimeType = contentType || doc.mimeType || 'application/octet-stream';

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': 'inline',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load document';
    console.error('Document view error:', error);

    if (message.includes('not found') || message.includes('Invalid file') || message.includes('re-upload')) {
      return NextResponse.json({ error: message }, { status: 404 });
    }

    return NextResponse.json({ error: 'Failed to load document' }, { status: 500 });
  }
}
