import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import ErpHero from '@/components/Erp/ErpHero';
import ErpSections from '@/components/Erp/ErpSections';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'ERP Services & Software Development',
  description: 'ERP implementation, custom software development and outsourcing — SAP, Qlik, Jaggaer and Salesforce solutions across Saudi Arabia and APAC.',
  path: '/erp-development',
});

export default function ErpDevelopmentPage() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'ERP Services & Software Development',
        description: 'ERP implementation, custom software development and outsourcing — SAP, Qlik, Jaggaer and Salesforce solutions.',
        path: '/erp-development',
        serviceType: 'ERP Software Development',
      })} />
      <JsonLd data={breadcrumbJsonLd('ERP Services & Development', '/erp-development')} />
      <ErpHero />
      <ErpSections />
      <CtaBuild
        kicker="READY TO START?"
        line1="YOUR ERP JOURNEY"
        line2="WITH SAFEHANDS"
        ctaLabel="TALK TO US"
        ctaHref="/contact"
      />
      <Footer />
    </main>
  );
}
