import HeroHeader from '@/components/HeroHeader';
import AskAI from '@/components/AskAI';
import AgencyIntro from '@/components/AgencyIntro';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import PortfolioPod from '@/components/PortfolioPod';
import Delivered from '@/components/Delivered';
import LaunchSequence from '@/components/LaunchSequence';
import MayaSection from '@/components/MayaSection';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div id="top">
        <HeroHeader />
      </div>

      <AskAI />

      <AgencyIntro />

      <StatsBar />

      <Services />

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
