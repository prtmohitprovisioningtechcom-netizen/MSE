import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAdminRole, verifyJWT } from '@/lib/jwt';

const ADMIN_PUBLIC_ROUTES = [
  '/admin/login',
  '/admin/register',
  '/admin/forgot-password',
  '/admin/reset-password',
];

function isAdminPublicRoute(pathname: string) {
  return ADMIN_PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

function isAdminProtectedRoute(pathname: string) {
  return pathname === '/admin' || (pathname.startsWith('/admin/') && !isAdminPublicRoute(pathname));
}

async function getAdminSession(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token) return null;

  const session = await verifyJWT(token);
  if (!session || !isAdminRole(session.role)) return null;

  return session;
}

function redirectToLogin(request: NextRequest, pathname: string) {
  const loginUrl = new URL('/admin/login', request.url);
  loginUrl.searchParams.set('redirect', pathname);
  const response = NextResponse.redirect(loginUrl);
  response.cookies.delete('token');
  return response;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isRscRequest =
    request.headers.get('RSC') === '1' ||
    request.headers.get('Next-Router-Prefetch') === '1' ||
    request.nextUrl.searchParams.has('_rsc');

  const applyFreshCacheHeaders = (response: NextResponse) => {
    if (isRscRequest || pathname.startsWith('/initiatives')) {
      response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      response.headers.set('CDN-Cache-Control', 'no-store');
      response.headers.set('Pragma', 'no-cache');
    }
    return response;
  };

  const token = request.cookies.get('token')?.value;
  const adminSession = await getAdminSession(request);

  if (pathname.startsWith('/uploads/documents/') && !adminSession) {
    return applyFreshCacheHeaders(NextResponse.json({ error: 'Forbidden' }, { status: 403 }));
  }

  if (pathname === '/login' || pathname.startsWith('/login/')) {
    const url = new URL('/admin/login', request.url);
    const redirect = request.nextUrl.searchParams.get('redirect');
    if (redirect) {
      url.searchParams.set(
        'redirect',
        redirect.replace('/dashboard', '/admin').replace('/settings', '/admin/settings')
      );
    }
    return NextResponse.redirect(url);
  }

  if (pathname === '/register' || pathname.startsWith('/register/')) {
    return NextResponse.redirect(new URL('/admin/register', request.url));
  }

  if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
    return NextResponse.redirect(new URL(adminSession ? '/admin' : '/admin/login', request.url));
  }

  if (pathname === '/settings' || pathname.startsWith('/settings/')) {
    return NextResponse.redirect(new URL('/admin/settings', request.url));
  }

  if (pathname === '/forgot-password') {
    return NextResponse.redirect(new URL('/admin/forgot-password', request.url));
  }

  if (pathname === '/reset-password') {
    return NextResponse.redirect(new URL('/admin/reset-password', request.url));
  }

  if (isAdminProtectedRoute(pathname) && !adminSession) {
    return redirectToLogin(request, pathname);
  }

  if (isAdminPublicRoute(pathname) && adminSession) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Invalid or non-admin token on public admin pages — clear so login/register works
  if (isAdminPublicRoute(pathname) && token && !adminSession) {
    const response = NextResponse.next();
    response.cookies.delete('token');
    return response;
  }

  if (isRscRequest || pathname.startsWith('/initiatives')) {
    return applyFreshCacheHeaders(NextResponse.next());
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin',
    '/admin/:path*',
    '/login',
    '/register',
    '/dashboard',
    '/settings',
    '/forgot-password',
    '/reset-password',
    '/uploads/documents/:path*',
    '/initiatives/:path*',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
