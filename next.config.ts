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
      // add other domains you use
    ],
  },
};

export default nextConfig;
