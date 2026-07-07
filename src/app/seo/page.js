import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import SeoHero from '@/components/Seo/SeoHero';
import SeoServices from '@/components/Seo/SeoServices';
import SeoPlan from '@/components/Seo/SeoPlan';
import SeoPlaybook from '@/components/Seo/SeoPlaybook';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'AI SEO Services in Riyadh',
  description: 'Rank on Google and get cited by ChatGPT, Perplexity & AI Overviews. Traditional plus AI search optimization for brands across Saudi Arabia.',
  path: '/seo',
});

export default function SeoPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'AI SEO Services',
        description: 'Traditional SEO plus AI search optimization — rank on Google and get cited by ChatGPT, Perplexity and AI Overviews.',
        path: '/seo',
        serviceType: 'Search Engine Optimization',
      })} />
      <JsonLd data={breadcrumbJsonLd('AI SEO', '/seo')} />
      <SeoHero />
      <SeoServices />
      <SeoPlan />
      <SeoPlaybook />
      <CtaBuild
        kicker="READY TO START?"
        line1="YOUR SEO JOURNEY"
        line2="WITH SAFEHANDS"
        ctaLabel="TALK TO US"
        ctaHref="/contact"
      />
      <Footer />
    </main>
  );
}
