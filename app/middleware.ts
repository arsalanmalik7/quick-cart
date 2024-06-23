import { NextRequest } from "next/server";


export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/api')) {
        return new Response('API not found', { status: 404 });
    }
    return;
}

export const config = {
    matcher: ['/api/:path*']
}