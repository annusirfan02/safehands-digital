import { pageMeta } from '@/lib/site';
import SolutionsHero from '@/components/Solutions/SolutionsHero';
import SolutionsList from '@/components/Solutions/SolutionsList';
import Process from '@/components/Solutions/Process';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'AI & Business Solutions',
  description: 'AI assistants & automations, ERP services and AI video production, all under one roof in Riyadh.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <SolutionsList />
      <Process />
      <Footer />
    </main>
  );
}
