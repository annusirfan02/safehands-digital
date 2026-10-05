import { SITE_DESCRIPTION } from '@/lib/site';
import HeroHeader from '@/components/HeroHeader';
import AskAI from '@/components/AskAI';
import AgencyIntro from '@/components/AgencyIntro';
import StatsBar from '@/components/StatsBar';
import ExdTransformation from '@/components/ExdTransformation';
import Services from '@/components/Services';
import EngineeringShowcase from '@/components/EngineeringShowcase';
import PortfolioPod from '@/components/PortfolioPod';
import Delivered from '@/components/Delivered';
import LaunchSequence from '@/components/LaunchSequence';
import MayaSection from '@/components/MayaSection';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  // `absolute` stops the layout's "%s | Safe Hands Digital" template from appending.
  title: { absolute: 'Safe Hands Digital | AI-First Marketing Agency in Riyadh' },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Safe Hands Digital | AI-First Marketing Agency in Riyadh',
    description: SITE_DESCRIPTION,
    url: '/',
  },
};

export default function Home() {
  return (
    <main>
      <div id="top">
        <HeroHeader />
      </div>

      <AskAI />

      <AgencyIntro />

      <StatsBar />

      <ExdTransformation />

      <Services />

      <EngineeringShowcase />

      <div id="portfolio">
        <PortfolioPod />
      </div>

      <Delivered />

      <div id="different">
        <LaunchSequence />
      </div>

      <MayaSection />

      <CtaBuild />

      <Footer />
    </main>
  );
}
