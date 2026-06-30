import { NextRequest, NextResponse } from 'next/server';
import { readFileFromGridFS } from '@/lib/gridfs';

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
    console.error('GridFS file serve error:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
