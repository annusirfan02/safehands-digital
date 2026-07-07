// ─── Central site / SEO config ────────────────────────────────────────────────
// Single source of truth for domain, business info and SEO defaults.
// ⚠️ If the live domain is not safehandsksa.com, change SITE_URL below only.

export const SITE_URL = 'https://safehandsksa.com';
export const SITE_NAME = 'Safe Hands Digital';
export const SITE_TAGLINE = 'AI-First Marketing Agency in Riyadh';
export const SITE_DESCRIPTION =
  'Safe Hands Digital is an AI-first marketing agency in Riyadh, Saudi Arabia. AI SEO, web development, paid ads, social media, ERP and AI video — real results, licensed experts.';

export const BUSINESS = {
  name: SITE_NAME,
  legalName: 'Safe Hands Digital',
  email: 'contact@safehandsksa.com',
  phone: '+966552762034',
  phoneDisplay: '+966 55 276 2034',
  city: 'Riyadh',
  region: 'Riyadh Province',
  country: 'SA',
  countryName: 'Saudi Arabia',
  streetAddress: 'Al Batha',
};

export const SOCIAL_PROFILES = [
  'https://www.instagram.com/safehandsksa/',
  'https://www.facebook.com/profile.php?id=61588593882261',
  'https://www.linkedin.com/company/111123146/',
  'https://snapchat.com/t/Gc5PeR5Q',
];

// Default social-share image (see the SEO report — swap for a 1200×630 image).
export const OG_IMAGE = '/logo-light.png';

// Absolute URL helper for canonicals, sitemap and JSON-LD.
export const absUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/**
 * Service structured data for a single service page. Links back to the
 * Organization defined in the root layout so Google connects them.
 */
export function serviceJsonLd({ name, description, path, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: serviceType || name,
    url: absUrl(path),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [{ '@type': 'Country', name: 'Saudi Arabia' }],
  };
}

/**
 * BreadcrumbList so search results show "Home › Page" breadcrumbs.
 */
export function breadcrumbJsonLd(name, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name, item: absUrl(path) },
    ],
  };
}

/**
 * Builds a page's metadata: title (brand appended by the layout template),
 * meta description, canonical URL and page-specific Open Graph / Twitter tags.
 */
export function pageMeta({ title, description, path }) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', title: fullTitle, description, url: path },
    twitter: { title: fullTitle, description },
  };
}
