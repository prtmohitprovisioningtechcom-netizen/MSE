import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { isAdminRole, signJWT, verifyJWT } from '@/lib/jwt';

export { signJWT, verifyJWT, isAdminRole };

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) return null;
  return verifyJWT(token);
}

export async function setSessionCookie(payload: Record<string, unknown>, expiresInSeconds = 86400) {
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
