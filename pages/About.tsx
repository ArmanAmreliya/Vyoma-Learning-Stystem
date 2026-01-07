
import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <header className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-[#1E3A8A] mb-8"
          >
            Our Story & <span className="text-gradient">Vision</span>
          </motion.h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Vyoma was founded on a simple realization: Indian education often rewards memory over understanding. We're here to flip the script.
          </p>
        </div>
      </header>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">The Vyoma Journey</h2>
            <p className="text-[#64748B] text-lg mb-6 leading-relaxed">
              Started in 2023, Vyoma Learning Systems set out to create more than just another video-learning app. We envisioned a complete circle of growth—where learning a concept naturally leads to applying it, and applying it leads to professional opportunities.
            </p>
            <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
              By bringing together 3D visual technology, AI assistance, and industry collaboration, we bridge the gap between classroom theory and real-world execution.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-[#06B6D4] mb-2">50k+</h4>
                <p className="text-sm font-semibold text-[#1E3A8A] uppercase tracking-wider">Active Students</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-[#06B6D4] mb-2">200+</h4>
                <p className="text-sm font-semibold text-[#1E3A8A] uppercase tracking-wider">Partner Schools</p>
              </div>
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/800/1000?random=11" alt="About Vyoma" />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-12 rounded-[40px] bg-[#1E3A8A] text-white">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <Eye className="text-[#06B6D4]" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              To democratize high-quality, conceptual education and skills training, making India a global hub for innovation and skilled workforce.
            </p>
          </div>
          <div className="p-12 rounded-[40px] bg-[#06B6D4] text-white">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <Target className="text-[#1E3A8A]" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-100 text-lg leading-relaxed">
              To build an integrated ecosystem that provides 360-degree support to students through conceptual mastery, industry exposure, and personalized guidance.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Our Values</h2>
          <p className="text-[#64748B]">The pillars that hold our ecosystem together.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck size={32} />, title: "Integrity", desc: "Honesty in our curricula and transparency in our student progress reports." },
            { icon: <Target size={32} />, title: "Excellence", desc: "Pushing the boundaries of 3D visualization and AI to provide the best tools." },
            { icon: <Heart size={32} />, title: "Student-First", desc: "Every feature we build starts with a 'How does this help the student learn better?' mindset." }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[30px] bg-white border border-gray-100 shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1E3A8A] flex items-center justify-center mx-auto mb-6">
                {val.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#1E3A8A] mb-4">{val.title}</h4>
              <p className="text-[#64748B] leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
