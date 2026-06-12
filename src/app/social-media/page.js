import SocialHero from '@/components/Social/SocialHero';
import SocialStats from '@/components/Social/SocialStats';
import SocialStrategy from '@/components/Social/SocialStrategy';
import SocialPlatforms from '@/components/Social/SocialPlatforms';
import SocialIncluded from '@/components/Social/SocialIncluded';
import SocialPricing from '@/components/Social/SocialPricing';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Social Media Marketing — Safe Hands Digital',
  description: 'Viral reels, UGC, influencer collabs and full-funnel Instagram strategy that grows your brand online.',
};

export default function SocialMediaPage() {
  return (
    <main>
      <SocialHero />
      <SocialStats />
      <SocialStrategy />
      <SocialPlatforms />
      <SocialIncluded />
      <SocialPricing />
      <CtaBuild />
      <Footer />
    </main>
  );
}
