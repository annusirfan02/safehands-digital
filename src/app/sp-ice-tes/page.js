import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import SpIcePage from '@/components/Engineering/SpIcePage';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'sp.ICE Thermal Energy Storage in Saudi Arabia',
  description: 'sp.ICE thermal energy storage shifts heavy cooling loads from expensive daytime peaks to night-time operation, cutting peak demand across Saudi Arabia.',
  path: '/sp-ice-tes',
});

export default function SpIceTesPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'sp.ICE Thermal Energy Storage',
        description: 'Modular ice thermal energy storage that shifts cooling load to off-peak hours and reduces peak electrical demand.',
        path: '/sp-ice-tes',
        serviceType: 'Thermal Energy Storage',
      })} />
      <JsonLd data={breadcrumbJsonLd('sp.ICE TES', '/sp-ice-tes')} />
      <SpIcePage />
      <Footer />
    </main>
  );
}
