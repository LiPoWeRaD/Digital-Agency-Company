import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? '/Digital-Agency-Company' : '',
  assetPrefix: isProd ? '/Digital-Agency-Company' : '',
  output: "export", 
  reactStrictMode: true,
};

export default nextConfig;
