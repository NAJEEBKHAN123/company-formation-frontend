import React from 'react';
import IndustryHero from '../components/industries/IndustryHero';
import IndustryGrid from '../components/industries/IndustryGrid';
import IndustryStats from '../components/industries/IndustryStats';
import IndustryCTA from '../components/industries/IndustryCTA';

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <IndustryHero />
      <IndustryGrid />
      <IndustryStats />
      <IndustryCTA />
    </div>
  );
};

export default IndustriesPage;