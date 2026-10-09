import { SITE_URL } from '@/lib/site';

// Generates /sitemap.xml — the full list of indexable pages for search engines.
// `priority` hints relative importance; `changeFrequency` hints update cadence.
const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  // Hidden: services no longer offered (pages redirect to home, see next.config.js).
  // { path: '/seo', priority: 0.9, changeFrequency: 'monthly' },
  // { path: '/web-development', priority: 0.9, changeFrequency: 'monthly' },
  // { path: '/social-media', priority: 0.9, changeFrequency: 'monthly' },
  // { path: '/paid-ads', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/ai-automation', priority: 0.9, changeFrequency: 'monthly' },
  // { path: '/ai-employees', priority: 0.9, changeFrequency: 'monthly' }, // hidden page
  { path: '/ai-video', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/erp-development', priority: 0.8, changeFrequency: 'monthly' },
  // { path: '/solutions', priority: 0.8, changeFrequency: 'monthly' }, // hidden page
  { path: '/mep-engineering', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/operations-maintenance', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sp-ice-tes', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industrial-refrigeration', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/fire-life-safety', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vision-2030', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date('2026-07-07');
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
