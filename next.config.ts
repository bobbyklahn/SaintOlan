import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure trailing slashes are handled
  trailingSlash: false,
  // Skip trailing slash redirect
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
