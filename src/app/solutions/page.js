import { pageMeta } from '@/lib/site';
import SolutionsHero from '@/components/Solutions/SolutionsHero';
import SolutionsList from '@/components/Solutions/SolutionsList';
import Process from '@/components/Solutions/Process';
import Footer from '@/components/Footer';

export const metadata = pageMeta({
  title: 'Digital Marketing Solutions',
  description: 'Full-stack digital marketing solutions — AI SEO, paid ads, social media, web development, branding and PR, all under one roof in Riyadh.',
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
