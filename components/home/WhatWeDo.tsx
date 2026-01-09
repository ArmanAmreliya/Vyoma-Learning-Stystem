import React from 'react';
import Section from '../SectionWrapper';
import ScrollReveal from '../ScrollReveal';
import { School, FlaskConical, Rocket, Sparkles } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <Section variant="white" id="what-we-do">
        <ScrollReveal>
          <div className="max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 md:gap-20">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[#1E3A8A] font-semibold tracking-wide uppercase text-sm mb-2 block">Our Mission</span>
                  <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">What We Do</h2>
                </div>
                <p className="text-lg font-light leading-relaxed text-slate-600 md:text-xl">
                  Vyoma Learning Systems operates a vertically integrated education platform 
                  that addresses concept clarity, skill acquisition, and real-world application 
                  across critical learning stages.
                </p>
                <p className="text-lg font-light leading-relaxed text-slate-600 md:text-xl">
                   Our ecosystem includes three products serving distinct educational phases: 
                   foundational academics (Nova), advanced science education (Curio), and 
                   industry-aligned skill development (Vibe).
                </p>
              </div>
              
              <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A]/10 to-transparent rounded-3xl -rotate-3 transform"></div>
                <div className="absolute inset-0 border border-[#1E3A8A]/20 rounded-3xl rotate-3 transform"></div>
                <div className="relative flex flex-col items-center justify-center w-full max-w-md gap-6 p-8 mx-auto bg-white border shadow-xl rounded-2xl border-slate-100 aspect-square">
                  <div className="grid w-full grid-cols-2 gap-6">
                    <div className="flex flex-col items-center justify-center p-6 transition-all border shadow-sm bg-slate-50 rounded-xl border-slate-100 aspect-square hover:scale-105">
                      <School className="w-10 h-10 text-[#1E3A8A] mb-2" />
                      <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Learn</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 transition-all border shadow-sm bg-slate-50 rounded-xl border-slate-100 aspect-square hover:scale-105">
                      <FlaskConical className="w-10 h-10 text-[#1E3A8A] mb-2" />
                      <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Explore</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 transition-all border shadow-sm bg-slate-50 rounded-xl border-slate-100 aspect-square hover:scale-105">
                      <Rocket className="w-10 h-10 text-[#1E3A8A] mb-2" />
                      <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">Grow</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-6 text-white transition-all bg-blue-800 shadow-md rounded-xl aspect-square hover:scale-105">
                      <Sparkles className="w-10 h-10 mb-2 text-white" />
                      <span className="text-xs font-semibold tracking-wider uppercase text-white/90">Excel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
  );
};

export default WhatWeDo;
