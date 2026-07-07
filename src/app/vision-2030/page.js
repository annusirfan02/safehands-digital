import { pageMeta } from '@/lib/site';
import VisionHero from '@/components/Vision/VisionHero';
import VisionContent from '@/components/Vision/VisionContent';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Saudi Vision 2030 Digital Alignment',
  description: 'How Safe Hands Digital, a local Saudi company, powers digital transformation aligned with Saudi Vision 2030 and the localization of work.',
  path: '/vision-2030',
});

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
