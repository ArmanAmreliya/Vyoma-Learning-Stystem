
import React from 'react';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import { motion } from 'framer-motion';
import { Box, Bot, Clock, BarChart3, GraduationCap, ChevronRight } from 'lucide-react';

const Curio: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero */}
      <header className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#1E3A8A]/5 -skew-x-12 transform origin-top-right" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-xs font-bold uppercase tracking-widest mb-6">
              Class 11 & 12 Specialized
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1E3A8A] leading-tight mb-8">
              Learn Science Through <span className="text-gradient">3D Visualization</span>
            </h1>
            <p className="text-xl text-[#64748B] leading-relaxed mb-10">
              Don't just read about Physics and Chemistry—interact with them. Curio brings complex STEM concepts to life with immersive 3D models.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 rounded-2xl gradient-main text-white font-bold hover:shadow-2xl transition-all">Get Started Free</button>
              <button className="px-10 py-5 rounded-2xl bg-white border-2 border-gray-200 text-[#1E3A8A] font-bold hover:bg-gray-50 transition-all">Watch Demo</button>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img src="https://picsum.photos/1000/1000?random=13" alt="Curio Visualization" className="rounded-[40px] shadow-2xl" />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#F59E0B] rounded-full blur-[100px] opacity-20" />
          </div>
        </div>
      </header>

      {/* Feature Grid */}
      <Section>
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Built for Deep Understanding</h2>
          <p className="text-[#64748B] text-xl max-w-2xl mx-auto">Five core features that make Curio India's preferred science companion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={<Box />} title="3D Models" description="Explore biological cells, molecular structures, and engine parts in full 360-degree interactives." />
          <FeatureCard icon={<Bot />} title="AI Assistant" description="Get instant answers to 'Why?' and 'How?' with our 24/7 intelligent doubt-solving bot." />
          <FeatureCard icon={<Clock />} title="Time Tracking" description="Stay productive with built-in Pomodoro timers and session management." />
          <FeatureCard icon={<BarChart3 />} title="Performance Analytics" description="Identify your weak spots with granular data insights on your quiz results." />
          <FeatureCard icon={<GraduationCap />} title="Quiz Engine" description="Gamified adaptive testing that gets harder as you get smarter." />
          <div className="p-8 rounded-[24px] bg-gradient-to-br from-[#1E3A8A] to-[#06B6D4] text-white flex flex-col justify-center items-center text-center">
            <h4 className="text-2xl font-bold mb-4">And Much More</h4>
            <p className="mb-6 opacity-80">We release new 3D modules every single month.</p>
            <button className="text-white font-bold flex items-center gap-2">Explore All <ChevronRight size={18} /></button>
          </div>
        </div>
      </Section>

      {/* CTA Form */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-[50px] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-16 bg-[#1E3A8A] text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to transform your grades?</h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join 50,000+ students already mastering science with Curio. Sign up for a free demo session today.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">✓</div>
                <span>Free 7-day trial</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">✓</div>
                <span>Full access to 3D library</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">✓</div>
                <span>1-on-1 counselor call</span>
              </div>
            </div>
          </div>
          <div className="p-12 md:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-[#1E3A8A] mb-2">Full Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1E3A8A] mb-2">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1E3A8A] mb-2">Current Class</label>
                <select className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] transition-all bg-white">
                  <option>Class 11</option>
                  <option>Class 12</option>
                  <option>Dropper</option>
                </select>
              </div>
              <button className="w-full py-5 rounded-xl gradient-main text-white font-bold text-lg hover:shadow-xl transition-all shadow-blue-500/20 active:scale-[0.98]">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Curio;
