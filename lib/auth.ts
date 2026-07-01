import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { isAdminRole, signJWT, verifyJWT } from '@/lib/jwt';

export { signJWT, verifyJWT, isAdminRole };

export interface SessionPayload {
  id: string;
  name: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

function parseSessionPayload(value: Record<string, unknown>): SessionPayload | null {
  if (
    typeof value.id !== 'string' ||
    typeof value.name !== 'string' ||
    typeof value.email !== 'string' ||
    typeof value.role !== 'string'
  ) {
    return null;
  }

  return {
    id: value.id,
    name: value.name,
    email: value.email,
    role: value.role,
    ...(typeof value.iat === 'number' ? { iat: value.iat } : {}),
    ...(typeof value.exp === 'number' ? { exp: value.exp } : {}),
  };
}

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;

  const payload = await verifyJWT(token);
  if (!payload) return null;

  return parseSessionPayload(payload);
}

export async function setSessionCookie(
  payload: Omit<SessionPayload, 'iat' | 'exp'>,
  expiresInSeconds = 86400,
) {
  const token = await signJWT(payload, expiresInSeconds);
  const cookieStore = await cookies();
  cookieStore.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: expiresInSeconds,
    path: '/',
  });
  return token;
}

export async function removeSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
}
