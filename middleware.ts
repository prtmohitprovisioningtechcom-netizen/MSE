import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_PUBLIC_ROUTES = [
  '/admin/login',
  '/admin/forgot-password',
  '/admin/reset-password',
];

function isAdminPublicRoute(pathname: string) {
  return ADMIN_PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

function isAdminProtectedRoute(pathname: string) {
  return pathname.startsWith('/admin') && !isAdminPublicRoute(pathname);
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/uploads/documents/') && !token) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Redirect old member routes to admin routes
  if (pathname === '/login' || pathname.startsWith('/login/')) {
    const url = new URL('/admin/login', request.url);
    const redirect = request.nextUrl.searchParams.get('redirect');
    if (redirect) url.searchParams.set('redirect', redirect.replace('/dashboard', '/admin').replace('/settings', '/admin/settings'));
    return NextResponse.redirect(url);
  }
  if (pathname === '/register' || pathname.startsWith('/register/')) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  if (pathname === '/admin/register' || pathname.startsWith('/admin/register/')) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
    return NextResponse.redirect(new URL(token ? '/admin' : '/admin/login', request.url));
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

  if (isAdminProtectedRoute(pathname) && !token) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminPublicRoute(pathname) && token) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/login',
    '/register',
    '/dashboard',
    '/settings',
    '/forgot-password',
    '/reset-password',
    '/uploads/documents/:path*',
  ],
};
