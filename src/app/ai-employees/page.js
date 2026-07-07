import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import AIEHero from '@/components/AIEmployees/AIEHero';
import Outcomes from '@/components/AIEmployees/Outcomes';
import Operators from '@/components/AIEmployees/Operators';
import Industries from '@/components/AIEmployees/Industries';
import FindEmployee from '@/components/AIEmployees/FindEmployee';
import Marquee from '@/components/AIEmployees/Marquee';
import MeetMaya from '@/components/AIEmployees/MeetMaya';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'AI Employees for Marketing Automation',
  description: 'AI employees that run your marketing 24/7 — trained on your business, managed by licensed experts. Marketing automation in Saudi Arabia.',
  path: '/ai-employees',
});

export default function AIEmployeesPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'AI Employees for Marketing',
        description: 'AI employees that run your marketing 24/7 — trained on your business and managed by licensed experts.',
        path: '/ai-employees',
        serviceType: 'Marketing Automation',
      })} />
      <JsonLd data={breadcrumbJsonLd('AI Employees', '/ai-employees')} />
      <AIEHero />
      <Outcomes />
      <Operators />
      <Industries />
      <FindEmployee />
      <Marquee />
      <MeetMaya />
      <CtaBuild />
      <Footer />
    </main>
  );
}
