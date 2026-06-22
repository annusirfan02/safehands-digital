import PaidHero from '@/components/Paid/PaidHero';
import PaidStats from '@/components/Paid/PaidStats';
import PaidProcess from '@/components/Paid/PaidProcess';
import PaidEdge from '@/components/Paid/PaidEdge';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Paid Advertising, Safe Hands Digital',
  description: 'Meta, TikTok & Google ad campaigns built on UGC-first creative, AI optimization and full-funnel strategy.',
};

export default function PaidAdsPage() {
  return (
    <main>
      <PaidHero />
      <PaidStats />
      <PaidProcess />
      <PaidEdge />
      <CtaBuild
        kicker="READY TO START?"
        line1="YOUR PAID ADS JOURNEY"
        line2="WITH SAFEHANDS"
        ctaLabel="TALK TO US"
        ctaHref="/contact"
      />
      <Footer />
    </main>
  );
}
