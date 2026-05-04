import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - next 16 allowedDevOrigins
  allowedDevOrigins: ['192.168.31.175', 'localhost'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
};

export default nextConfig;
