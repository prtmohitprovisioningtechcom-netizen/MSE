import { unstable_noStore as noStore } from 'next/cache';
import dbConnect from '@/lib/db';

type WithDatabaseOptions<T> = {
  fallback?: T;
  retries?: number;
};

export async function withDatabase<T>(
  label: string,
  operation: () => Promise<T>,
  options?: WithDatabaseOptions<T>,
): Promise<T> {
  noStore();

  const retries = options?.retries ?? 3;
  let lastError: unknown;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await dbConnect();
      return await operation();
    } catch (error) {
      lastError = error;
      console.error(`[${label}] database query failed (attempt ${attempt}/${retries}):`, error);
      if (attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, attempt * 600));
      }
    }
  }

  if (options?.fallback !== undefined) {
    console.error(`[${label}] using fallback after ${retries} failed attempts`);
    return options.fallback;
  }

  throw lastError;
}
