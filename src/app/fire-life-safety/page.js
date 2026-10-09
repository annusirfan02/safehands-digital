import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import ServicePage from '@/components/Engineering/ServicePage';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Firefighting & Life Safety Engineering in Saudi Arabia',
  description: 'Life safety and high-pressure firefighting engineering: fire pump networks, sprinkler systems, clean-agent suppression and smoke management, compliant with civil defense codes and NFPA.',
  path: '/fire-life-safety',
});

// Client copy: Page 5, Firefighting & Life Safety Services.
const DATA = {
  hero: {
    kicker: 'Firefighting & Life Safety Services',
    title: ['Life safety & high-pressure', 'firefighting engineering'],
    subtitle: 'Strict regulatory compliance and absolute asset protection.',
    glow:
      'radial-gradient(circle at 75% 35%, rgba(255, 92, 60, 0.28), transparent 45%), ' +
      'radial-gradient(circle at 92% 85%, rgba(245, 197, 24, 0.14), transparent 40%)',
    sys: 'SYS / FLS-05',
    badge: 'Civil Defense · NFPA · KSA',
  },
  intro: {
    kicker: 'No Room for Lag',
    heading: ['Compliance you', 'can count on'],
    text: 'When life safety systems are called to action, there is no room for lag or calibration errors. Our fire protection division ensures your facility complies fully with local civil defense codes, municipal laws, and stringent global NFPA frameworks.',
  },
  scope: {
    kicker: 'Our Comprehensive Safety Mandate',
    title: ['Comprehensive', 'safety mandate'],
    items: [
      { icon: 'gauge', title: 'High-Pressure Fire Pump Networks', text: 'Weekly testing and maintenance loops for diesel and electric fire pumps, jockey pumps, and pressure-relief bypass valves to ensure instant line pressurization.' },
      { icon: 'drop', title: 'Water-Based Fire Suppression', text: 'Visual testing, pipe flushing, and pressure testing of wet, dry, and complex double-interlock pre-action sprinkler systems for mission-critical data suites.' },
      { icon: 'flame', title: 'Clean Agent Gaseous Extinguishing Systems', text: 'Semi-annual mass weight verification, acoustic nozzle adjustments, and control module integration for server room protection arrays (FM-200 and Novec 1230).' },
      { icon: 'alarm', title: 'Containment, Smoke Management & Alarms', text: 'Laser-calibrated smoke sensitivity testing, strict drop-testing of dynamic HVAC fire dampers, and verification of stairwell air-pressurization fans.' },
    ],
  },
  cta: {
    title: ['Keep your facility', 'safe & compliant'],
    text: 'Bring rigorous fire protection testing and maintenance to your building.',
    label: 'Request a safety audit',
  },
};

export default function FireLifeSafetyPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'Firefighting & Life Safety Engineering',
        description: 'Fire pump, sprinkler, clean-agent suppression and smoke management testing and maintenance, compliant with civil defense and NFPA.',
        path: '/fire-life-safety',
        serviceType: 'Fire Protection Engineering',
      })} />
      <JsonLd data={breadcrumbJsonLd('Firefighting & Life Safety', '/fire-life-safety')} />
      <ServicePage data={DATA} />
      <Footer />
    </main>
  );
}
