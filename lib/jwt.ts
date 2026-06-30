const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_change_me_in_production';
const encoder = new TextEncoder();

export async function signJWT(payload: Record<string, unknown>, expiresIn = 86400): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + expiresIn;
  const fullPayload = { ...payload, iat, exp };

  const header = { alg: 'HS256', typ: 'JWT' };
  const base64UrlHeader = btoa(JSON.stringify(header))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
  const base64UrlPayload = btoa(JSON.stringify(fullPayload))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(JWT_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(`${base64UrlHeader}.${base64UrlPayload}`)
  );

  const base64UrlSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${base64UrlHeader}.${base64UrlPayload}.${base64UrlSignature}`;
}

export async function verifyJWT(token: string): Promise<Record<string, unknown> | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    const [header, payload, signature] = parts;
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(JWT_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );

    const sigBytes = new Uint8Array(
      atob(signature.replace(/-/g, '+').replace(/_/g, '/'))
        .split('')
        .map((c) => c.charCodeAt(0))
    );

    const data = encoder.encode(`${header}.${payload}`);
    const isValid = await crypto.subtle.verify('HMAC', key, sigBytes, data);
    if (!isValid) return null;

    const decodedPayload = JSON.parse(
      atob(payload.replace(/-/g, '+').replace(/_/g, '/'))
    ) as Record<string, unknown>;

    if (decodedPayload.exp && Date.now() >= Number(decodedPayload.exp) * 1000) {
      return null;
    }

    return decodedPayload;
  } catch {
    return null;
  }
}

export function isAdminRole(role: unknown) {
  return role === 'Admin' || role === 'Super Admin';
}
