import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import SpIcePage from '@/components/Engineering/SpIcePage';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'SP.ICE Encapsulated Thermal Storage Systems in Saudi Arabia',
  description: 'German-engineered SP.ICE encapsulated thermal storage shifts peak cooling load to off-peak night hours, lowering peak demand charges by up to 40%.',
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
