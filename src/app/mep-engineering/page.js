import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import EngineeringPage from '@/components/Engineering/EngineeringPage';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Comprehensive MEP Services in Saudi Arabia',
  description: 'Comprehensive mechanical, electrical & plumbing (MEP) services: LV switchgear, hydronic balancing, building automation (BMS) and DWV networks, managed by senior field engineers.',
  path: '/mep-engineering',
});

export default function MepEngineeringPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'MEP Engineering Services',
        description: 'Integrated mechanical, electrical, plumbing and fire protection engineering, procurement, installation and commissioning.',
        path: '/mep-engineering',
        serviceType: 'MEP Engineering',
      })} />
      <JsonLd data={breadcrumbJsonLd('MEP Engineering', '/mep-engineering')} />
      <EngineeringPage />
      <Footer />
    </main>
  );
}
