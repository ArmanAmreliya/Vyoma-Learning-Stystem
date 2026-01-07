
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ChevronRight, Brain, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Text
      gsap.from('.hero-text-item', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Floating Cards
      gsap.to('.floating-card', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F8FAFC]">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-[#1E3A8A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <div ref={textRef} className="relative z-10">
          <div className="hero-text-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
            </span>
            Next-Gen Learning
          </div>
          <h1 className="hero-text-item text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Building India’s First <span className="text-gradient">Complete</span> Learning Ecosystem
          </h1>
          <p className="hero-text-item text-xl text-[#64748B] mb-10 max-w-lg leading-relaxed">
            Vyoma Learning Systems integrates academics, skills, community, and industry exposure to prepare students from school to career.
          </p>
          <div className="hero-text-item flex flex-col sm:flex-row gap-4">
            <Link to="/curio" className="px-8 py-4 rounded-2xl gradient-main text-white font-bold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all active:scale-95">
              Explore Curio <ChevronRight size={20} />
            </Link>
            <Link to="/ecosystem" className="px-8 py-4 rounded-2xl border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold flex items-center justify-center gap-2 hover:bg-[#1E3A8A]/5 transition-all active:scale-95">
              View Ecosystem
            </Link>
          </div>
        </div>

        <div ref={cardsRef} className="relative hidden lg:block">
          <div className="relative aspect-square">
            {/* Main Illustration Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[40px] shadow-inner flex items-center justify-center">
              <img src="https://picsum.photos/600/600?random=1" className="w-[80%] h-[80%] object-cover rounded-3xl opacity-20 mix-blend-multiply" alt="Abstract" />
            </div>

            {/* Floating UI Cards */}
            <div className="floating-card absolute top-10 -left-10 w-64 glass-card p-6 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Layers size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A8A]">3D Learning</h4>
                <p className="text-xs text-[#64748B]">Visualise abstract concepts</p>
              </div>
            </div>

            <div className="floating-card absolute bottom-20 -right-12 w-64 glass-card p-6 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <Brain size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A8A]">AI Doubts</h4>
                <p className="text-xs text-[#64748B]">24/7 Intelligent assistance</p>
              </div>
            </div>

            <div className="floating-card absolute top-1/2 -translate-y-1/2 -right-6 w-64 glass-card p-6 rounded-3xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A8A]">Industry Exposure</h4>
                <p className="text-xs text-[#64748B]">Bridge to the real world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
