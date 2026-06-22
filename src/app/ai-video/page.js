import AiVideoHero from '@/components/AiVideo/AiVideoHero';
import AiVideoContent from '@/components/AiVideo/AiVideoContent';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AI Video Production | Safe Hands Digital',
  description: 'AI-produced corporate intros, presentations, explainers, AI presenters and social videos, in Arabic and English. Polished, on-brand and fast.',
};

export default function AiVideoPage() {
  return (
    <main>
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
