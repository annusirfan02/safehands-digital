import AIEHero from '@/components/AIEmployees/AIEHero';
import Outcomes from '@/components/AIEmployees/Outcomes';
import Operators from '@/components/AIEmployees/Operators';
import Industries from '@/components/AIEmployees/Industries';
import FindEmployee from '@/components/AIEmployees/FindEmployee';
import Marquee from '@/components/AIEmployees/Marquee';
import MeetMaya from '@/components/AIEmployees/MeetMaya';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'AI Employees, Safe Hands Digital',
  description: 'AI employees that run your marketing 24/7, trained on your business, managed by licensed experts.',
};

export default function AIEmployeesPage() {
  return (
    <main>
      <AIEHero />
      <Outcomes />
      <Operators />
      <Industries />
      <FindEmployee />
      <Marquee />
      <MeetMaya />
      <CtaBuild
        kicker="READY TO START?"
        line1="YOUR AI TEAM"
        line2="WITH SAFEHANDS"
        ctaLabel="TALK TO US"
        ctaHref="/contact"
      />
      <Footer />
    </main>
  );
}
