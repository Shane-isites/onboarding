// src/app/page.tsx
import QuoteCalculator from './components/QuoteCalculator';
import OnboardingForm from './components/OnboardingForm';

export default function Page() {
  return (
    <div>
      <QuoteCalculator />

      <OnboardingForm />
    </div>
  );
}
