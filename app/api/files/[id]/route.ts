import { NextRequest, NextResponse } from 'next/server';
import { readFileFromGridFS } from '@/lib/gridfs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { buffer, contentType, fileName } = await readFileFromGridFS(id);

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${fileName.replace(/"/g, '')}"`,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'File not found';
    console.error('GridFS file serve error:', error);
    return NextResponse.json({ error: message }, { status: 404 });
  }
}
