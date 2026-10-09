import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import ServicePage from '@/components/Engineering/ServicePage';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Industrial & Commercial Refrigeration O&M in Saudi Arabia',
  description: 'High-precision industrial refrigeration O&M protecting critical cold chains, cleanrooms and manufacturing environments: compressor rebuilds, leak detection, defrost calibration and thermal envelope inspection.',
  path: '/industrial-refrigeration',
});

// Client copy: Page 2, Industrial & Commercial Refrigeration O&M.
const DATA = {
  hero: {
    kicker: 'Industrial & Commercial Refrigeration O&M',
    title: ['High-precision industrial', 'refrigeration O&M'],
    subtitle: 'Protecting critical cold chains, cleanrooms, and manufacturing environments.',
    glow:
      'radial-gradient(circle at 75% 35%, rgba(79, 205, 238, 0.30), transparent 45%), ' +
      'radial-gradient(circle at 92% 85%, rgba(168, 120, 255, 0.14), transparent 40%)',
    sys: 'SYS / REF-02',
    badge: 'Sub-zero thermal management · KSA',
  },
  intro: {
    kicker: 'Zero-Margin Thermal Boundaries',
    heading: ['Precise sub-zero', 'thermal management'],
    text: 'Unlike comfort cooling, industrial refrigeration operates on strict, zero-margin thermal boundaries. A single-degree temperature fluctuation can ruin valuable stock or compromise strict chemical and pharmaceutical processes. Safe Hands delivers precise sub-zero thermal management.',
  },
  scope: {
    kicker: 'Our Specialized Engineering Scope',
    title: ['Specialized', 'engineering scope'],
    items: [
      { icon: 'gauge', title: 'Multi-Stage & Cascade Compression Systems', text: 'Complete field servicing and rebuilds of open-drive screw compressors, semi-hermetic units, and low-temperature booster pumps.' },
      { icon: 'shield', title: 'Refrigerant Containment & Leak Detection', text: 'Implementation of fixed automated leak detection arrays and electronic sniffing protocols covering ammonia (NH3), CO2, and eco-friendly HFC blends.' },
      { icon: 'snow', title: 'Evaporator Defrost Loop Calibration', text: 'Optimizing hot gas, electric, or water defrost cycles to prevent ice bridging on coils while avoiding heat bleed into the refrigerated space.' },
      { icon: 'door', title: 'Thermal Boundary Envelope Inspection', text: 'Testing the physical integrity of cold-storage doors, air curtains, and floor-heaving mitigation systems.' },
    ],
  },
  cta: {
    title: ['Protect your', 'cold chain'],
    text: 'Bring precise sub-zero engineering and maintenance to your refrigeration plant.',
    label: 'Request refrigeration O&M',
  },
};

export default function IndustrialRefrigerationPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'Industrial & Commercial Refrigeration O&M',
        description: 'High-precision industrial refrigeration operation and maintenance for cold chains, cleanrooms and manufacturing.',
        path: '/industrial-refrigeration',
        serviceType: 'Industrial Refrigeration Maintenance',
      })} />
      <JsonLd data={breadcrumbJsonLd('Industrial Refrigeration O&M', '/industrial-refrigeration')} />
      <ServicePage data={DATA} />
      <Footer />
    </main>
  );
}
