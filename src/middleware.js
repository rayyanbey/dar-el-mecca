import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Allow CORS from localhost:3001 (or other specific origins)
  res.headers.append("Access-Control-Allow-Origin", "http://localhost:3001");
  res.headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    res.headers.append("Access-Control-Max-Age", "86400"); // Cache preflight response
    return new Response(null, { status: 204, headers: res.headers });
  }

  return res;
}

// Apply the middleware to all API routes
export const config = {
  matcher: "/api/:path*",
};
