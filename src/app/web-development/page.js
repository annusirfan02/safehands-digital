import WebDevHero from '@/components/WebDev/WebDevHero';
import WebDevBuild from '@/components/WebDev/WebDevBuild';
import WebDevProcess from '@/components/WebDev/WebDevProcess';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Web Development, Safe Hands Digital',
  description: 'Shopify, WordPress, Next.js and custom builds, high-converting websites for brands across the US and Europe.',
};

export default function WebDevelopmentPage() {
  return (
    <main>
      <WebDevHero />
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
