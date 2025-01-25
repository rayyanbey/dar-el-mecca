import { NextResponse } from "next/server";

export function middleware(){
    const res = NextResponse.next()

    res.headers.append("Access-Control-Allow-Origin", "http://localhost:3001");
    res.headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.headers.append("Access-Control-Allow-Credentials", "true");

    return res
}


export const config = {
    matcher: "/pages/apis/:path*",
}