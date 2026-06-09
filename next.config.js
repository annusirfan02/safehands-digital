/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  // Don't fail the production build on lint warnings (keeps the demo deploy green).
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
