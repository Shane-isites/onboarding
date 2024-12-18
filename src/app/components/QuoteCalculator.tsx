"use client";

// Next.js Quote Calculator App using TypeScript
import { useState } from 'react';

// Tailwind CSS Structure

type Feature = {
  name: string;
  weeks: number;
};

const websiteTypes: Feature[] = [
  { name: 'Brochure Website', weeks: 2 },
  { name: 'Ecommerce Website', weeks: 4 },
  { name: 'LMS', weeks: 6 },
];

const extraFeatures: Feature[] = [
  { name: 'Booking Form', weeks: 0.5 },
  { name: 'Third-Party Integrations', weeks: 1 },
  { name: 'Live Chat', weeks: 0.5 },
  { name: 'Custom Forms', weeks: 0.5 },
  { name: 'SEO Optimization', weeks: 1 },
  { name: 'Analytics Setup', weeks: 0.5 },
  { name: 'Social Media Integration', weeks: 1 },
  { name: 'Payment Gateway Integration', weeks: 1.5 },
  { name: 'Multilingual Support', weeks: 2 },
  { name: 'Advanced Security Features', weeks: 1.5 },
  { name: 'Custom Animations', weeks: 1 },
  { name: 'User Management System', weeks: 2 },
];

const QuoteCalculator = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [isDesperate, setIsDesperate] = useState(false);

  const handleCheckboxChange = (feature: Feature) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature) 
        : [...prev, feature]
    );
  };

  const totalWeeks = selectedFeatures.reduce((sum, feature) => sum + feature.weeks, 0);
  let totalCost = totalWeeks * 520 * 1.2;

  if (isDesperate) {
    totalCost *= 0.5; // Apply 50% discount if desperate
  }

  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Project Quote Calculator</h1>
      <form className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Select Website Type</h2>
          {websiteTypes.map(feature => (
            <label key={feature.name} className="block mb-2">
              <input
                type="checkbox"
                className="mr-2 accent-blue-500"
                onChange={() => handleCheckboxChange(feature)}
              />
              {feature.name} - {feature.weeks} weeks
            </label>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Select Extra Features</h2>
          {extraFeatures.map(feature => (
            <label key={feature.name} className="block mb-2">
              <input
                type="checkbox"
                className="mr-2 accent-blue-500"
                onChange={() => handleCheckboxChange(feature)}
              />
              {feature.name} - {feature.weeks} weeks
            </label>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Special Pricing</h2>
          <label className="block mb-2">
            <input
              type="checkbox"
              className="mr-2 accent-red-500"
              checked={isDesperate}
              onChange={() => setIsDesperate(!isDesperate)}
            />
            Apply 50% Desperation Discount
          </label>
        </section>
      </form>

      <section className="mt-8 p-6 bg-white shadow rounded text-gray-900">
        <h2 className="text-2xl font-bold mb-4">Quote Summary</h2>
        <p className="text-lg">Total Time: {totalWeeks} weeks</p>
        <p className="text-lg">Total Cost: £{totalCost.toFixed(2)}</p>
      </section>
    </div>
  );
};

export default QuoteCalculator;
