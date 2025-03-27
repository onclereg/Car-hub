import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.imagin.studio"], // Add the image hostname here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
