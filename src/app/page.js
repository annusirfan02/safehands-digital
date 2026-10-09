import { SITE_DESCRIPTION } from '@/lib/site';
// import HeroHeader from '@/components/HeroHeader'; // replaced by HeroSlider
import HeroSlider from '@/components/HeroSlider';
import AskAI from '@/components/AskAI';
import AgencyIntro from '@/components/AgencyIntro';
// import StatsBar from '@/components/StatsBar'; // hidden, see below
import ExdTransformation from '@/components/ExdTransformation';
import Services from '@/components/Services';
import SpiceSpotlight from '@/components/SpiceSpotlight';
import EngineeringShowcase from '@/components/EngineeringShowcase';
import { AI_ITEMS } from '@/components/EngineeringShowcase/EngineeringShowcase';
import PortfolioPod from '@/components/PortfolioPod';
// import Delivered from '@/components/Delivered'; // hidden: marketing results
import LaunchSequence from '@/components/LaunchSequence';
// import MayaSection from '@/components/MayaSection'; // hidden, see below
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  // `absolute` stops the layout's "%s | Safe Hands Digital" template from appending.
  title: { absolute: 'Safe Hands | Engineering Services & AI Automation in Riyadh' },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Safe Hands | Engineering Services & AI Automation in Riyadh',
    description: SITE_DESCRIPTION,
    url: '/',
  },
};

export default function Home() {
  return (
    <main>
      <div id="top">
        {/* Previous hero (client copy + service constellation): <HeroHeader /> */}
        <HeroSlider />
      </div>

      <AskAI />

      <AgencyIntro />

      <EngineeringShowcase />

      {/* Same design, AI side: keeps the two pillars 50/50 */}
      <EngineeringShowcase
        id="ai-automation"
        label="AI ASSISTANT & AUTOMATION"
        heading="Automated for real-world workflows."
        outline="Built for busy teams."
        helper="Custom AI assistants and automation systems that take repetitive work off your team, from sorting 100 daily emails to drafting the replies."
        items={AI_ITEMS}
      />

      {/* Hidden: stats bar (45°C+, 5,000 kWh, 24/7, AR + EN). Uncomment to bring it back. */}
      {/* <StatsBar /> */}

      <ExdTransformation />

      <Services />

      <SpiceSpotlight />

      <div id="portfolio">
        <PortfolioPod />
      </div>

      {/* Hidden: marketing results (followers, ROI). Bring back with real engineering / AI results. */}
      {/* <Delivered /> */}

      <div id="different">
        <LaunchSequence />
      </div>

      {/* Hidden: Meet Maya chat section. Uncomment to bring it back. */}
      {/* <MayaSection /> */}

      <CtaBuild />

      <Footer />
    </main>
  );
}
