import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import PaidHero from '@/components/Paid/PaidHero';
import PaidStats from '@/components/Paid/PaidStats';
import PaidProcess from '@/components/Paid/PaidProcess';
import PaidEdge from '@/components/Paid/PaidEdge';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Paid Ads: Meta, Google & TikTok Campaigns',
  description: 'ROI-focused Meta, Google and TikTok ad campaigns built on UGC-first creative and AI optimization. Paid advertising agency in Riyadh.',
  path: '/paid-ads',
});

export default function PaidAdsPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'Paid Advertising',
        description: 'ROI-focused Meta, Google and TikTok ad campaigns built on UGC-first creative and AI optimization.',
        path: '/paid-ads',
        serviceType: 'Pay Per Click Advertising',
      })} />
      <JsonLd data={breadcrumbJsonLd('Paid Ads', '/paid-ads')} />
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
