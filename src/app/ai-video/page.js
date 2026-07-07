import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import AiVideoHero from '@/components/AiVideo/AiVideoHero';
import AiVideoContent from '@/components/AiVideo/AiVideoContent';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'AI Video Production in Arabic & English',
  description: 'AI-produced corporate intros, explainers, AI presenters and social videos in Arabic and English. Polished, on-brand and fast.',
  path: '/ai-video',
});

export default function AiVideoPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'AI Video Production',
        description: 'AI-produced corporate intros, explainers, AI presenters and social videos in Arabic and English.',
        path: '/ai-video',
        serviceType: 'Video Production',
      })} />
      <JsonLd data={breadcrumbJsonLd('AI Video Production', '/ai-video')} />
      <AiVideoHero />
      <AiVideoContent />
      <CtaBuild
        kicker="READY TO START?"
        line1="YOUR AI VIDEO"
        line2="WITH SAFEHANDS"
        ctaLabel="TALK TO US"
        ctaHref="/contact"
      />
      <Footer />
    </main>
  );
}
