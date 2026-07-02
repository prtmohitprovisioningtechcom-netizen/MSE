import dbConnect from '@/lib/db';
import mongoose from 'mongoose';

export const dynamic = 'force-dynamic';

export async function GET() {
  const startedAt = Date.now();

  try {
    await dbConnect();
    const ping = await mongoose.connection.db?.admin().ping();

    return Response.json({
      ok: true,
      database: ping?.ok ? 'connected' : 'unknown',
      readyState: mongoose.connection.readyState,
      latencyMs: Date.now() - startedAt,
      timestamp: new Date().toISOString(),
      buildTime: process.env.NEXT_PUBLIC_BUILD_TIME ?? 'unknown',
      nodeEnv: process.env.NODE_ENV ?? 'unknown',
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        database: 'disconnected',
        readyState: mongoose.connection.readyState,
        latencyMs: Date.now() - startedAt,
        error: error instanceof Error ? error.message : 'Database connection failed',
        timestamp: new Date().toISOString(),
      },
      { status: 503 },
    );
  }
}
