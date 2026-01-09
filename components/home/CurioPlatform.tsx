import React from 'react';
import Section from '../SectionWrapper';
import ScrollReveal from '../ScrollReveal';
import { Button } from "../ui/button";
import { Box, Brain, LineChart, GraduationCap, ArrowRight } from 'lucide-react';

const CurioPlatform: React.FC = () => {
  return (
    <Section variant="white" id="curio" className="relative overflow-hidden">
        {/* Background blobs simplified for light theme */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#1E3A8A] rounded-full blur-3xl pointer-events-none opacity-5"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 rounded-full opacity-50 pointer-events-none w-80 h-80 bg-slate-200 blur-3xl"></div>

        <div className="relative z-10 grid items-center grid-cols-1 gap-16 text-center lg:grid-cols-2 lg:text-left">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-8 lg:block">
                {/* Logo */}
                <div className="ml-0 overflow-visible lg:-ml-8">
                   <img 
                   src="/CURIO TRANSPARENT.png" 
                   alt="Curio Logo" 
                   className="object-contain w-auto h-40 origin-center scale-110 md:h-52 lg:origin-left"
                   />
                </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl text-slate-900">
                Experience the Future of Learning with <span className="text-blue-800">Curio</span>
              </h2>
              
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                The Curio Platform is a revolutionary ecosystem designed to bridge the gap between traditional teaching and modern cognitive learning. We empower institutions, engage students, and reassure parents through data-driven insights and immersive content.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="lg:pl-10">
                <div className="relative p-8 bg-white border shadow-xl border-slate-200 rounded-2xl md:p-10">
                    <h3 className="pb-4 mb-8 text-2xl font-semibold border-b text-slate-900 border-slate-100">Key Capabilities</h3>
                    
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 group">
                             <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#1E3A8A]/10 transition-colors">
                                <Box className="w-6 h-6 text-[#1E3A8A]" />
                            </div>
                            <div>
                                <h4 className="mb-1 text-lg font-medium text-slate-900">3D Concept Models</h4>
                                <p className="text-sm text-slate-500">Immersive visualizations that simplify complex theories into interactive, graspable realities.</p>
                            </div>
                        </li>

                         <li className="flex items-start gap-4 group">
                             <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#1E3A8A]/10 transition-colors">
                                <Brain className="w-6 h-6 text-[#1E3A8A]" />
                            </div>
                            <div>
                                <h4 className="mb-1 text-lg font-medium text-slate-900">AI Doubt Resolution</h4>
                                <p className="text-sm text-slate-500">Instant, 24/7 intelligent support that guides students through problems step-by-step.</p>
                            </div>
                        </li>
                        
                        <li className="flex items-start gap-4 group">
                             <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#1E3A8A]/10 transition-colors">
                                <LineChart className="w-6 h-6 text-[#1E3A8A]" />
                            </div>
                            <div>
                                <h4 className="mb-1 text-lg font-medium text-slate-900">Performance Analysis</h4>
                                <p className="text-sm text-slate-500">Deep analytics to track progress, identify weak spots, and optimize study patterns.</p>
                            </div>
                        </li>

                        <li className="flex items-start gap-4 group">
                             <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#1E3A8A]/10 transition-colors">
                                <GraduationCap className="w-6 h-6 text-[#1E3A8A]" />
                            </div>
                            <div>
                                <h4 className="mb-1 text-lg font-medium text-slate-900">Board Alignment</h4>
                                <p className="text-sm text-slate-500">Curriculum strictly mapped to CBSE, ICSE, and various State Board standards.</p>
                            </div>
                        </li>
                    </ul>

                    <div className="pt-6 mt-10 border-t border-slate-100">
                         <Button asChild className="w-full sm:w-auto bg-[#193cb8] hover:bg-[#162E6F] text-white font-semibold py-6 px-8 rounded-lg shadow-lg shadow-blue-900/10 transition-all transform hover:-translate-y-1 hover:shadow-xl h-auto">
                            <a 
                                href="https://curioteach.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                            >
                                <span>Explore Curio Platform</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>

                </div>
            </div>
          </ScrollReveal>
        </div>
    </Section>
  );
};

export default CurioPlatform;
