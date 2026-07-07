import { SITE_URL } from '@/lib/site';

// Generates /robots.txt — tells crawlers what to index and where the sitemap is.
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Onboarding is a distraction-free funnel step, not a page to rank.
        disallow: ['/onboarding'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
