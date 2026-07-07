import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import WebDevHero from '@/components/WebDev/WebDevHero';
import WebDevProjects from '@/components/WebDev/WebDevProjects';
import WebDevBuild from '@/components/WebDev/WebDevBuild';
import WebDevProcess from '@/components/WebDev/WebDevProcess';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Web Development & Design in Saudi Arabia',
  description: 'Custom, high-converting websites built with Next.js, Shopify and WordPress. Web design and development for brands across Saudi Arabia.',
  path: '/web-development',
});

export default function WebDevelopmentPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'Web Development & Design',
        description: 'Custom, high-converting websites built with Next.js, Shopify and WordPress for brands across Saudi Arabia.',
        path: '/web-development',
        serviceType: 'Web Development',
      })} />
      <JsonLd data={breadcrumbJsonLd('Web Development', '/web-development')} />
      <WebDevHero />
      <WebDevProjects />
      <WebDevBuild />
      <WebDevProcess />
      <CtaBuild
        kicker="READY TO START?"
        line1="YOUR WEB PROJECT"
        line2="WITH SAFEHANDS"
        ctaLabel="TALK TO US"
        ctaHref="/contact"
      />
      <Footer />
    </main>
  );
}
