import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basePath: '/site1',
    images: {
      unoptimized: true,
    },
    trailingSlash: true   
};

export default nextConfig;
