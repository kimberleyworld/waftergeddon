import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user has already authenticated
  const authCookie = request.cookies.get('authenticated');
  
  // If accessing the auth page, allow it
  if (request.nextUrl.pathname === '/auth') {
    return NextResponse.next();
  }
  
  // If not authenticated, redirect to auth page
  if (!authCookie || authCookie.value !== 'true') {
    return NextResponse.redirect(new URL('/auth', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (your image folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};