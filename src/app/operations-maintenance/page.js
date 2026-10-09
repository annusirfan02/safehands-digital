import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import OmPage from '@/components/Engineering/OmPage';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'HVAC & Central Chiller Plant O&M in Saudi Arabia',
  description: 'Heavy-duty HVAC and central chiller plant O&M: chiller overhauls, tube descaling, water chemistry and air balancing to maximize COP and eliminate plant downtime.',
  path: '/operations-maintenance',
});

export default function OperationsMaintenancePage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'Mechanical Operation & Maintenance',
        description: 'Chiller plant overhauls, industrial and cold-chain refrigeration O&M, and 24/7 mission-critical dispatch.',
        path: '/operations-maintenance',
        serviceType: 'HVAC Operation and Maintenance',
      })} />
      <JsonLd data={breadcrumbJsonLd('O&M Services', '/operations-maintenance')} />
      <OmPage />
      <Footer />
    </main>
  );
}
