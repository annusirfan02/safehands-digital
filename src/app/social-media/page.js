import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import SocialHero from '@/components/Social/SocialHero';
import SocialStats from '@/components/Social/SocialStats';
import SocialStrategy from '@/components/Social/SocialStrategy';
import SocialPlatforms from '@/components/Social/SocialPlatforms';
import SocialIncluded from '@/components/Social/SocialIncluded';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Social Media Marketing in Riyadh',
  description: 'Viral reels, UGC, influencer collabs and full-funnel Instagram & TikTok strategy that grows your brand across Saudi Arabia.',
  path: '/social-media',
});

export default function SocialMediaPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'Social Media Marketing',
        description: 'Viral reels, UGC, influencer collabs and full-funnel Instagram and TikTok strategy for brands across Saudi Arabia.',
        path: '/social-media',
        serviceType: 'Social Media Marketing',
      })} />
      <JsonLd data={breadcrumbJsonLd('Social Media Marketing', '/social-media')} />
      <SocialHero />
      <SocialStats />
      <SocialStrategy />
      <SocialPlatforms />
      <SocialIncluded />
      <CtaBuild
        kicker="READY TO START?"
        line1="YOUR SOCIAL JOURNEY"
        line2="WITH SAFEHANDS"
        ctaLabel="TALK TO US"
        ctaHref="/contact"
      />
      <Footer />
    </main>
  );
}
