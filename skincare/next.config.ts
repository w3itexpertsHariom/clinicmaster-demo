import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
	output: 'export',   
	basePath: '/site3',
	images: {
		unoptimized: true,  // Disable image optimization (use original images as-is)
	},
	trailingSlash: true 
};

export default nextConfig;
