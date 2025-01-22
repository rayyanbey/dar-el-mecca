import { NextResponse } from 'next/server';

export function middleware(req) {
    const res = NextResponse.next();
    
    res.headers.set('Access-Control-Allow-Credentials', 'true');
    res.headers.set('Access-Control-Allow-Origin', '*');  // Change * to specific origin if needed
    res.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,POST,DELETE');
    res.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Authorization, Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200 });
    }

    return res;
}

export const config = {
    matcher: '/api/:path*',  // Apply middleware only to API routes
};
