import OnboardingFlow from '@/components/Onboarding/OnboardingFlow';

export const metadata = {
  title: 'Start Your Project — Safe Hands Digital',
  description: 'Answer five quick questions and get an AI-powered strategy built just for your brand.',
};

export default function OnboardingPage() {
  return (
    <main>
      <OnboardingFlow />
    </main>
  );
}
