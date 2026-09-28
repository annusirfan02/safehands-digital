import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import EngineeringPage from '@/components/Engineering/EngineeringPage';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'MEP Engineering Services in Saudi Arabia',
  description: 'Turnkey mechanical, electrical, plumbing and fire protection design and execution for complex, high-ambient facilities across Saudi Arabia.',
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
