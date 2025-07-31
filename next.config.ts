import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // Allow any path from placehold.co
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5234',
        pathname: '/**', // Allow any path from placehold.co
      },
    ],
  },
};

export default nextConfig;
