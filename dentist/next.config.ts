import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
    output: 'export',
    basePath: '/site2',
    images: {
      unoptimized: true,
    },
	trailingSlash: true   
};

export default nextConfig;
