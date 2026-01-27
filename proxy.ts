import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Paths that are always accessible
    const isPublicPath =
        pathname === '/access' ||
        pathname.startsWith('/api/access') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/images') ||
        pathname.includes('.') || // Static files typically have a dot in the extension
        pathname === '/favicon.ico';

    if (isPublicPath) {
        return NextResponse.next();
    }

    const accessCookie = request.cookies.get('site-access-granted');

    if (!accessCookie || accessCookie.value !== 'true') {
        const url = request.nextUrl.clone();
        url.pathname = '/access';
        // Only set redirect if it's not the root path
        if (pathname !== '/') {
            url.searchParams.set('redirect', pathname);
        }
        return NextResponse.redirect(url);
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
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
