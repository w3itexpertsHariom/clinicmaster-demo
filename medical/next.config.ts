import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
    basePath: '/site3',
    images: {
      unoptimized: true,
    },
	trailingSlash: true   
};

export default nextConfig;
