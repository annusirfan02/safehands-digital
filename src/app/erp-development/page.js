import ErpHero from '@/components/Erp/ErpHero';
import ErpSections from '@/components/Erp/ErpSections';
import CtaBuild from '@/components/CtaBuild';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ERP Services & Development, Safe Hands Digital',
  description: 'ERP implementation, custom software development, and outsourcing, SAP, ETM.Next, Qlik, Jaggaer and Salesforce solutions for clients across Saudi Arabia & APAC.',
};

export default function ErpDevelopmentPage() {
  return (
    <main>
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
