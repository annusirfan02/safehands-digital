import OnboardingFlow from '@/components/Onboarding/OnboardingFlow';

export const metadata = {
  title: 'Start Your Project',
  description: 'Answer five quick questions and get an AI-powered strategy built just for your brand.',
  // Funnel step — keep it out of search results.
  robots: { index: false, follow: true },
};

export default function OnboardingPage() {
  return (
    <main>
      <OnboardingFlow />
    </main>
  );
}
