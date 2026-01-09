import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatWeDo from '../components/home/WhatWeDo';
import EcosystemStructure from '../components/home/EcosystemStructure';
import CurioPlatform from '../components/home/CurioPlatform';
import Leadership from '../components/home/Leadership';
import HowItWorks from '../components/home/HowItWorks';
import FAQ from '../components/home/FAQ';
import GetInTouch from '../components/home/GetInTouch';

const Home: React.FC = () => {
  return (
    <div className="pt-0">
      {/* Modern Hero */}
      <HeroSection />

      {/* What We Do - White */}
      <WhatWeDo />

      {/* Ecosystem Structure - Dark (Alternating) */}
      <EcosystemStructure />

      {/* Curio Platform - White (Alternating) */}
      <CurioPlatform />

      {/* Leadership - Dark (Alternating) */}
      <Leadership />

      {/* How it Works - White (Alternating) */}
      <HowItWorks />

      {/* FAQ - Dark (Alternating) */}
      <FAQ />

      {/* Contact CTA - White (Alternating) */}
      <GetInTouch />
    </div>
  );
};

export default Home;
