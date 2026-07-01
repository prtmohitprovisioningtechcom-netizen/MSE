import mongoose from 'mongoose';

function getMongoUri(): string {
  const uri = process.env.MONGODB_URI?.trim();

  if (uri) {
    return uri;
  }

  // Vercel/serverless has no local MongoDB — require Atlas (or other hosted) URI
  if (process.env.VERCEL === '1' || process.env.NODE_ENV === 'production') {
    throw new Error(
      'MONGODB_URI is missing. In Vercel: Project → Settings → Environment Variables → add MONGODB_URI with your MongoDB Atlas connection string, then redeploy.'
    );
  }

  return 'mongodb://localhost:27017/MSE';
}

const MONGODB_URI = getMongoUri();

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
};

const cache: MongooseCache = globalWithMongoose.mongoose ?? { conn: null, promise: null };
globalWithMongoose.mongoose = cache;

async function dbConnect() {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      dbName: process.env.MONGODB_DB_NAME || 'mse',
    };

    cache.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('Connected to MongoDB database successfully');
      return mongooseInstance;
    });
  }

  try {
    cache.conn = await cache.promise;
  } catch (e) {
    cache.promise = null;
    console.error('Error connecting to MongoDB:', e);
    throw e;
  }

  return cache.conn;
}

export default dbConnect;
