import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'bvgindia.com' },
      { protocol: 'https', hostname: 'tudip.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // add other domains you use
    ],
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
