
import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Gamepad2, Users2, Laptop2, Briefcase, ChevronRight, Layers, Bot, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ecosystem: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <header className="py-16 md:py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-center md:text-left"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6">The <span className="text-[#06B6D4]">Vyoma</span> Universe</h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              We're building more than just tools; we're building a seamless bridge from your first day of 9th grade to your first day on the job.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Nova Section (9-10) */}
      <Section id="nova" className="relative px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="w-16 h-16 rounded-3xl bg-blue-100 text-[#1E3A8A] flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-sm">
              <Gamepad2 size={32} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold mb-4">COMING SOON</div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-6">Nova: Class 9–10 Foundations</h2>
            <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Early secondary education is where curiosity either flourishes or dies. Nova uses AR/VR and gamification to ensure students stay excited about science and math.
            </p>
            <ul className="space-y-4 mb-10 text-left max-w-xs mx-auto lg:mx-0">
              <li className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#06B6D4] flex items-center justify-center text-white shrink-0">
                  <ChevronRight size={14} />
                </div>
                AR-ready mobile modules
              </li>
              <li className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#06B6D4] flex items-center justify-center text-white shrink-0">
                  <ChevronRight size={14} />
                </div>
                Gamified daily challenges
              </li>
              <li className="flex items-center gap-3 text-[#1E3A8A] font-semibold">
                <div className="w-6 h-6 rounded-full bg-[#06B6D4] flex items-center justify-center text-white shrink-0">
                  <ChevronRight size={14} />
                </div>
                Foundational coding tracks
              </li>
            </ul>
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold hover:bg-[#1E3A8A] hover:text-white transition-all active:scale-95">
              Get Updates
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-[42px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <img 
                src="https://picsum.photos/800/800?random=15" 
                alt="Nova App" 
                className="relative rounded-[40px] shadow-2xl w-full object-cover aspect-square md:aspect-video lg:aspect-square" 
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Curio Section (11-12) - NEW INTEGRATION */}
      <Section id="curio" className="bg-[#1E3A8A] text-white px-4 sm:px-6 rounded-[40px] md:rounded-[60px] my-12 md:my-20 mx-4 sm:mx-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#06B6D4]/20 blur-[100px] pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img 
                src="https://picsum.photos/800/800?random=13" 
                alt="Curio Platform" 
                className="relative rounded-[30px] md:rounded-[40px] shadow-2xl w-full object-cover aspect-square md:aspect-video lg:aspect-square border border-white/10" 
              />
            </motion.div>
          </div>
          <div className="order-2 lg:order-2 text-center lg:text-left py-10 md:py-0">
            <div className="w-16 h-16 rounded-3xl bg-white/10 text-[#06B6D4] flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-sm border border-white/5">
              <Layers size={32} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/20 text-[#06B6D4] text-xs font-bold mb-4">ACTIVE PLATFORM</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Curio: Class 11–12 Science</h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Transforming abstract STEM concepts into immersive 3D experiences. Curio helps senior secondary students master complex topics through visualization and AI guidance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Bot size={20} className="text-[#06B6D4]" />
                </div>
                <span className="text-sm font-medium">AI Doubt Solving</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-[#06B6D4]" />
                </div>
                <span className="text-sm font-medium">Concept Visualizers</span>
              </div>
            </div>
            <Link to="/curio" className="inline-flex w-full sm:w-auto px-10 py-4 rounded-xl bg-white text-[#1E3A8A] font-bold hover:bg-[#06B6D4] hover:text-white transition-all text-center justify-center">
              Visit Curio Platform
            </Link>
          </div>
        </div>
      </Section>

      {/* Vibe Section (Skills) */}
      <Section id="vibe" className="bg-white px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#06B6D4] to-[#1E3A8A] rounded-[42px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <img 
                src="https://picsum.photos/800/800?random=16" 
                alt="Vibe Platform" 
                className="relative rounded-[40px] shadow-2xl w-full object-cover aspect-square md:aspect-video lg:aspect-square" 
              />
            </motion.div>
          </div>
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <div className="w-16 h-16 rounded-3xl bg-cyan-100 text-[#06B6D4] flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-sm">
              <Briefcase size={32} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-bold mb-4">BETA LIVE</div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-6">Vibe: Skills & Careers</h2>
            <p className="text-[#64748B] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Academics are only half the battle. Vibe focuses on practical skills—from Digital Marketing to Python—and connects you directly with MSMEs for internships.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-md mx-auto lg:mx-0 text-left">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-blue-200 transition-colors">
                <Users2 className="text-[#06B6D4] mb-3" size={24} />
                <h4 className="font-bold text-[#1E3A8A] mb-1">Micro-Tasks</h4>
                <p className="text-sm text-[#64748B]">Earn while you learn</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-blue-200 transition-colors">
                <Laptop2 className="text-[#06B6D4] mb-3" size={24} />
                <h4 className="font-bold text-[#1E3A8A] mb-1">MSME Internships</h4>
                <p className="text-sm text-[#64748B]">Real project experience</p>
              </div>
            </div>
            <button className="w-full sm:w-auto px-10 py-4 rounded-xl gradient-main text-white font-bold hover:shadow-xl transition-all active:scale-95">
              Join Vibe Community
            </button>
          </div>
        </div>
      </Section>

      {/* Optimized Timeline Section */}
      <Section className="px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E3A8A] mb-4">Your Path with Vyoma</h2>
          <p className="text-[#64748B] text-lg md:text-xl">A lifelong partnership for success.</p>
        </div>
        
        {/* Desktop Timeline Layout (lg and above) */}
        <div className="hidden lg:block relative max-w-4xl mx-auto space-y-16">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-transparent" />
          
          {[
            { year: 'Years 9–10', title: 'Conceptual Seeds', desc: 'Build logic with Nova AR tools.', side: 'left' },
            { year: 'Years 11–12', title: 'Specialised Mastery', desc: 'Cracking STEM exams with Curio 3D.', side: 'right' },
            { year: 'University', title: 'Industry Bridging', desc: 'Gaining skills and internships on Vibe.', side: 'left' },
            { year: 'Career', title: 'Lifelong Growth', desc: 'Advanced certifications and professional networking.', side: 'right' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex w-full ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${item.side === 'left' ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                <div className="p-8 rounded-[30px] bg-white shadow-lg border border-gray-50 relative hover:shadow-xl transition-shadow">
                  <div className={`absolute top-1/2 w-5 h-5 rounded-full bg-[#06B6D4] border-4 border-white shadow-sm ${item.side === 'left' ? '-right-[74px]' : '-left-[74px]'} -translate-y-1/2 z-10`} />
                  <span className="text-[#06B6D4] font-bold text-sm mb-2 block tracking-widest uppercase">{item.year}</span>
                  <h4 className="text-2xl font-bold text-[#1E3A8A] mb-3">{item.title}</h4>
                  <p className="text-[#64748B] text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Timeline Layout (below lg) */}
        <div className="lg:hidden relative max-w-md mx-auto space-y-10 pl-8 md:pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-transparent" />
          
          {[
            { year: 'Years 9–10', title: 'Conceptual Seeds', desc: 'Build logic with Nova AR tools.' },
            { year: 'Years 11–12', title: 'Specialised Mastery', desc: 'Cracking STEM exams with Curio 3D.' },
            { year: 'University', title: 'Industry Bridging', desc: 'Gaining skills and internships on Vibe.' },
            { year: 'Career', title: 'Lifelong Growth', desc: 'Advanced certifications and networking.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-[-37px] md:left-[-45px] top-8 w-4 h-4 rounded-full bg-[#06B6D4] border-2 border-white shadow-sm z-10" />
              <div className="p-6 md:p-8 rounded-[24px] bg-white shadow-md border border-gray-100">
                <span className="text-[#06B6D4] font-bold text-xs mb-1 block tracking-wider uppercase">{item.year}</span>
                <h4 className="text-xl font-bold text-[#1E3A8A] mb-2">{item.title}</h4>
                <p className="text-[#64748B] text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Ecosystem;
