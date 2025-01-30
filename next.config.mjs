// next.config.js
//checking cors issue
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: "/pages/apis/:path*",
            headers: [
              { key: "Access-Control-Allow-Origin", value: "http://localhost:3001" },
              { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
              { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
            ],
          },
        ];
      },
}
export default nextConfig;
 