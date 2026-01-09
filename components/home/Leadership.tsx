import React from 'react';
import Section from '../SectionWrapper';
import ScrollReveal from '../ScrollReveal';
import { Quote, Linkedin } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <Section variant="dark" id="leadership" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 rounded-full pointer-events-none w-96 h-96 bg-blue-400/10 blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
            <ScrollReveal>
                <div className="mb-12 text-center">
                    <h2 className="mb-3 text-3xl font-bold text-white">Visionary Leadership</h2>
                    <div className="w-16 h-1 mx-auto bg-blue-500 rounded-full"></div>
                </div>
            </ScrollReveal>

            <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-12">
                
                {/* Unique Photo Frame Section */}
                <div className="relative md:col-span-5 group">
                    <ScrollReveal delay={0.1}>
                        <div className="relative w-full max-w-[300px] mx-auto md:ml-auto md:mr-0 aspect-[4/5] transform transition-transform duration-500 hover:scale-[1.02]">
                            {/* Abstract Geometric Decorations */}
                            <div className="absolute w-16 h-16 border-t-2 border-l-2 border-blue-500 -top-3 -left-3 rounded-tl-2xl"></div>
                            <div className="absolute w-16 h-16 border-b-2 border-r-2 border-blue-500 -bottom-3 -right-3 rounded-br-2xl"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl border border-slate-700 bg-[#1E293B]">
                                <img 
                                    src="/founder.jpg" 
                                    alt="Jesa Kodiyater - Founder" 
                                    className="object-cover w-full h-full transition-all duration-700 ease-in-out"
                                />
                                {/* Overlay Gradient removed for full color */}
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-lg shadow-lg">
                                <span className="block text-[10px] text-blue-400 font-bold tracking-wider uppercase mb-0.5">Founded in</span>
                                <span className="block text-lg font-bold text-white">2023</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Content Section */}
                <div className="space-y-6 md:col-span-7">
                     <ScrollReveal delay={0.2}>
                        <div className="flex items-center gap-3 mb-1">
                             <div className="flex-1 h-px bg-slate-700"></div>
                             <span className="text-xs font-medium tracking-wide text-blue-400 uppercase">Founder & CEO</span>
                             <div className="flex-1 h-px bg-slate-700"></div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <h3 className="text-3xl font-bold leading-tight text-white">
                            Jesa <span className="text-blue-400">Kodiyater</span>
                        </h3>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                         <div className="relative">
                            <Quote className="absolute w-10 h-10 transform -top-5 -left-1 text-slate-700/50 -scale-x-100" />
                            <p className="relative z-10 py-1 pl-5 text-lg italic font-light leading-relaxed border-l-2 border-blue-500 text-slate-300">
                                "Education should prioritize conceptual understanding over rote memorization. 
                                Vyoma's approach integrates visualization, structured practice, and real-world 
                                application to build long-term competency rather than short-term recall."
                            </p>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </div>
      </Section>
  );
};

export default Leadership;
