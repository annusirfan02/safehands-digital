import './globals.css';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import {
  SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE, BUSINESS, SOCIAL_PROFILES, absUrl,
} from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Safe Hands Digital | AI-First Marketing Agency in Riyadh',
    template: '%s | Safe Hands Digital',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'digital marketing agency Riyadh',
    'AI marketing Saudi Arabia',
    'SEO agency Riyadh',
    'web development Saudi Arabia',
    'social media marketing Riyadh',
    'paid ads agency KSA',
    'ERP development Saudi Arabia',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'Safe Hands Digital | AI-First Marketing Agency in Riyadh',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: 'en_US',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safe Hands Digital | AI-First Marketing Agency in Riyadh',
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// ── Structured data: who this business is (Organization + LocalBusiness) ──
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  logo: absUrl('/logo-light.png'),
  image: absUrl(OG_IMAGE),
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  },
  areaServed: [{ '@type': 'Country', name: BUSINESS.countryName }],
  sameAs: SOCIAL_PROFILES,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en',
};

// Set the saved theme BEFORE hydration to avoid any flash of the wrong theme.
const themeInit = `
  try {
    var t = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
