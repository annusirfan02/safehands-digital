import VisionHero from '@/components/Vision/VisionHero';
import VisionContent from '@/components/Vision/VisionContent';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Vision 2030 Alignment, Safe Hands Digital',
  description: 'How SafeHands, a local Saudi company, aligns with Saudi Vision 2030, powering digital transformation through the National Transformation Program and the localization of work.',
};

export default function Vision2030Page() {
  return (
    <main>
      <VisionHero />
      <VisionContent />
      <CtaBuild />
      <Footer />
    </main>
  );
}
