import SolutionsHero from '@/components/Solutions/SolutionsHero';
import SolutionsList from '@/components/Solutions/SolutionsList';
import Process from '@/components/Solutions/Process';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Solutions, Safe Hands Digital',
  description: 'Full-stack marketing services, AI SEO, paid ads, social, web, branding, PR and more.',
};

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
