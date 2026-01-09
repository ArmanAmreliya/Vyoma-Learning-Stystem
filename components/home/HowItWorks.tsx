import React from 'react';
import Section from '../SectionWrapper';
import ScrollReveal from '../ScrollReveal';
import { Box, Wrench, LineChart, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            id: 1,
            title: "Concept Foundation",
            desc: "Students engage with 3D models and structured content to build fundamental understanding.",
            icon: <Box className="w-7 h-7" />
        },
        {
            id: 2,
            title: "Active Application",
            desc: "Practice modules and simulations enable hands-on learning.",
            icon: <Wrench className="w-7 h-7" />
        },
        {
            id: 3,
            title: "Performance Tracking",
            desc: "Analytics identify mastery gaps and improvement areas.",
            icon: <LineChart className="w-7 h-7" />
        },
        {
            id: 4,
            title: "Industry Connection",
            desc: "Skill pathways connect academics to professional exposure.",
            icon: <Briefcase className="w-7 h-7" />
        }
    ];

  return (
    <Section variant="white" id="how-it-works" className="relative overflow-hidden bg-white">
         {/* Simple Light Background Decoration */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-slate-100 rounded-full blur-3xl opacity-80"></div>
        </div>

        <div className="relative z-10 flex flex-col w-full max-w-6xl gap-16 mx-auto">
            <ScrollReveal>
                <div className="flex flex-col items-center max-w-3xl gap-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl text-slate-900">
                        How Vyoma Works
                    </h2>
                    <p className="text-lg font-light leading-relaxed text-slate-600">
                        Our integrated learning methodology transforms traditional education into a dynamic, outcome-driven journey.
                    </p>
                </div>
            </ScrollReveal>

            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {/* Connecting Line - Desktop (Horizontal) */}
                 <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-[2px] -z-10">
                    <svg width="100%" height="2" className="overflow-visible">
                         <line x1="0" y1="1" x2="100%" y2="1" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                         <motion.path
                            d="M 0 1 L 1000 1" 
                            stroke="#1E3A8A" 
                            strokeWidth="2" 
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full"
                         />
                    </svg>
                 </div>

                 {/* Connecting Line - Mobile/Tablet (Vertical) */}
                 <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -ml-[1px] w-[2px] -z-10">
                    <svg width="2" height="100%" className="overflow-visible">
                        <line x1="1" y1="0" x2="1" y2="100%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                        <motion.line
                            x1="1" y1="0" x2="1" y2="100%"
                            stroke="#1E3A8A"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>
                 </div>

                 {steps.map((step, index) => (
                     <ScrollReveal key={step.id} delay={0.2 * (index + 1)}>
                        <div className="relative flex flex-col items-center gap-6 p-6 text-center transition-all duration-300 bg-white border shadow-sm group rounded-2xl border-slate-100 hover:shadow-xl hover:border-blue-100 hover:-translate-y-2">
                            {/* Icon Container */}
                            <div className="relative flex-shrink-0">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2 * index, type: "spring", stiffness: 200 }}
                                    className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-[#1E3A8A] border-4 border-white text-white shadow-xl shadow-blue-900/20 z-10 relative group-hover:bg-blue-800 transition-colors duration-300"
                                >
                                    {step.icon}
                                </motion.div>
                                
                                {/* Step Badge */}
                                <div className="absolute z-20 flex items-center justify-center w-8 h-8 text-xs font-bold text-white transition-all duration-300 border-2 border-white rounded-full shadow-md -top-1 -right-1 bg-slate-900 group-hover:scale-110 group-hover:bg-[#1E3A8A]">
                                    {step.id}
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold leading-tight text-slate-900 group-hover:text-[#1E3A8A] transition-colors duration-300">{step.title}</h3>
                                <p className="px-2 text-sm leading-relaxed text-slate-500 group-hover:text-slate-600">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                     </ScrollReveal>
                 ))}
            </div>
        </div>
      </Section>
  );
};

export default HowItWorks;
