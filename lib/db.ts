import mongoose from 'mongoose';

function getMongoUri(): string {
  const uri = process.env.MONGODB_URI?.trim();

  if (uri) {
    return uri;
  }

  if (process.env.VERCEL === '1' || process.env.NODE_ENV === 'production') {
    throw new Error(
      'MONGODB_URI is missing. Add your MongoDB Atlas connection string to environment variables and restart the app.',
    );
  }

  return 'mongodb://localhost:27017/MSE';
}

const MONGODB_URI = getMongoUri();

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose?: MongooseCache;
  mongooseHandlersRegistered?: boolean;
};

const cache: MongooseCache = globalWithMongoose.mongoose ?? { conn: null, promise: null };
globalWithMongoose.mongoose = cache;

const CONNECT_OPTIONS = {
  bufferCommands: false,
  serverSelectionTimeoutMS: 20000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 20000,
  heartbeatFrequencyMS: 10000,
  maxPoolSize: 5,
  minPoolSize: 1,
  maxIdleTimeMS: 30000,
  dbName: process.env.MONGODB_DB_NAME || 'mse',
};

const MAX_RETRIES = 3;

function resetCache() {
  cache.conn = null;
  cache.promise = null;
}

function isConnected() {
  return mongoose.connection.readyState === 1;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

if (!globalWithMongoose.mongooseHandlersRegistered) {
  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected — will reconnect on next request');
    resetCache();
  });

  mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
    resetCache();
  });

  globalWithMongoose.mongooseHandlersRegistered = true;
}

async function connectOnce(): Promise<typeof mongoose> {
  if (cache.conn && isConnected()) {
    return cache.conn;
  }

  if (cache.conn && !isConnected()) {
    resetCache();
  }

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI, CONNECT_OPTIONS).then((mongooseInstance) => {
      console.log('Connected to MongoDB database successfully');
      return mongooseInstance;
    });
  }

  try {
    cache.conn = await cache.promise;
    return cache.conn;
  } catch (error) {
    resetCache();
    throw error;
  }
}

async function dbConnect() {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await connectOnce();
    } catch (error) {
      lastError = error;
      console.error(`MongoDB connect attempt ${attempt}/${MAX_RETRIES} failed:`, error);
      if (attempt < MAX_RETRIES) {
        await sleep(attempt * 800);
      }
    }
  }

  console.error('MongoDB connection failed after all retries');
  throw lastError;
}

export default dbConnect;
