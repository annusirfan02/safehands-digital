/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  // Don't fail the production build on lint warnings (keeps the demo deploy green).
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Hidden pages: services no longer offered. The page files are kept, these
  // routes just send visitors home. Remove an entry to bring its page back.
  async redirects() {
    const toHome = ['/seo', '/web-development', '/social-media', '/paid-ads', '/solutions'].map((source) => ({
      source,
      destination: '/',
      permanent: false,
    }));
    return [
      ...toHome,
      // Hidden: AI Employees was replaced by the AI Assistant & Automation page.
      { source: '/ai-employees', destination: '/ai-automation', permanent: false },
    ];
  },
};

module.exports = nextConfig;
