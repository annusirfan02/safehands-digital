import SeoHero from '@/components/Seo/SeoHero';
import SeoServices from '@/components/Seo/SeoServices';
import SeoPlan from '@/components/Seo/SeoPlan';
import SeoPlaybook from '@/components/Seo/SeoPlaybook';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AI SEO, Safe Hands Digital',
  description: 'Rank on Google and get cited by ChatGPT, Perplexity and AI Overviews, traditional SEO plus AI search optimization.',
};

export default function SeoPage() {
  return (
    <main>
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
