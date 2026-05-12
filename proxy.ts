import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // In a full production scenario with Google Sheets, you might fetch redirects here
  // Note: Edge middleware does not support some node APIs, so `googleapis` directly might fail.
  // Often it's better to use next.config.js for static redirects, OR fetch a simple JSON cache here.
  
  // For now, let's pass it through. The redirects tab logic can also be handled in the catch-all route 
  // [slug]/page.tsx by checking if the page type is "Redirect" and calling `redirect(url)` from next/navigation.

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
