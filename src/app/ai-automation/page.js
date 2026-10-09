import { pageMeta, serviceJsonLd, breadcrumbJsonLd } from '@/lib/site';
import JsonLd from '@/components/JsonLd';
import AiAutomationPage from '@/components/Engineering/AiAutomationPage';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'AI Assistant & Automation in Saudi Arabia',
  description: 'Custom AI assistants and automation systems that filter, sort and reply to your emails, handle documents and sync your tools, built around your workflow in Riyadh.',
  path: '/ai-automation',
});

export default function AiAutomationRoute() {
  return (
    <main>
      <JsonLd data={serviceJsonLd({
        name: 'AI Assistant & Automation',
        description: 'Custom AI assistants and workflow automation: email triage, drafted replies, document processing, reports and CRM/ERP sync.',
        path: '/ai-automation',
        serviceType: 'Business Process Automation',
      })} />
      <JsonLd data={breadcrumbJsonLd('AI Assistant & Automation', '/ai-automation')} />
      <AiAutomationPage />
      <Footer />
    </main>
  );
}
