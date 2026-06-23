// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during production builds to avoid lint errors breaking the build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // React strict mode
  reactStrictMode: true,
};

module.exports = nextConfig;
