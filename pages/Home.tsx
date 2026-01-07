
import React from 'react';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import FeatureCard from '../components/FeatureCard';
import FAQAccordion from '../components/FAQAccordion';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, TrendingUp, Cpu, Database, PieChart, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const products = [
    {
      name: 'Nova',
      audience: 'Class 9–10',
      status: 'Launch Soon',
      description: 'Foundational learning with AR/VR visualization and gamified assessment modules.',
      link: '/ecosystem#nova'
    },
    {
      name: 'Curio',
      audience: 'Class 11–12',
      status: 'Active',
      description: 'Advanced 3D-visualisation science platform with AI-driven personalized learning paths.',
      link: '/ecosystem#curio'
    },
    {
      name: 'Vibe',
      audience: 'Undergrads & Professionals',
      status: 'Beta',
      description: 'Skill-centric ecosystem bridging academia and industry through MSME internships.',
      link: '/ecosystem#vibe'
    }
  ];

  const steps = [
    { title: 'Learn', icon: <BookOpen />, desc: 'Concept mastery through 3D interactive models.' },
    { title: 'Apply', icon: <Cpu />, desc: 'Simulations and real-world micro-projects.' },
    { title: 'Collaborate', icon: <Users />, desc: 'Peer learning and mentorship communities.' },
    { title: 'Grow', icon: <TrendingUp />, desc: 'Internships and career pathways.' }
  ];

  return (
    <div>
      <HeroSection />

      {/* About Ecosystem */}
      <Section className="bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">How It Works</h2>
          <p className="text-[#64748B] text-xl max-w-2xl mx-auto">Our four-pillar ecosystem ensures holistic development from school to career.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl bg-[#F8FAFC] border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg text-[#06B6D4] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-[#1E3A8A] mb-2">{step.title}</h4>
              <p className="text-[#64748B]">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Products Overview */}
      <Section className="bg-[#F8FAFC]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-6">Our Solutions</h2>
            <p className="text-[#64748B] text-xl">Tailored platforms designed for every stage of your educational journey.</p>
          </div>
          <Link to="/ecosystem" className="text-[#1E3A8A] font-bold border-b-2 border-[#1E3A8A] pb-1 hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all">
            Explore Full Ecosystem
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </Section>

      {/* Featured Curio Section */}
      <Section className="bg-[#0F172A] text-white rounded-[60px] my-20 mx-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E3A8A]/30 blur-[120px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#F59E0B] font-bold tracking-widest uppercase text-sm mb-6 block">Featured Product</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Master Science with <span className="text-[#06B6D4]">Curio</span></h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Curio is a powerful visualization tool for class 11th & 12th science students. We turn complex equations into interactive 3D experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4]">✓</div>
                <span>Interactive 3D Models</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4]">✓</div>
                <span>AI Doubt Solver</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4]">✓</div>
                <span>Smart Quizzes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4]">✓</div>
                <span>Performance Analytics</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/curio" className="px-8 py-4 rounded-2xl bg-white text-[#1E3A8A] font-bold hover:bg-[#06B6D4] hover:text-white transition-all">Visit Platform</Link>
              <Link to="/contact" className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all font-bold">Book Demo</Link>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-4 rounded-[40px] border border-white/10"
            >
              <img src="https://picsum.photos/800/600?random=2" alt="Curio Dashboard" className="rounded-[30px] w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            className="bg-white rounded-[40px] p-12 md:p-20 shadow-xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/10 rounded-full blur-2xl -mr-16 -mt-16" />
            <img src="https://picsum.photos/300/300?random=10" className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover shadow-2xl" alt="CEO" />
            <div>
              <p className="text-[#64748B] italic text-2xl mb-8 leading-relaxed">
                “Education should build thinkers, not memorisers. We are reimagining how India learns.”
              </p>
              <div>
                <h4 className="text-2xl font-bold text-[#1E3A8A]">Jesa Kodiyater</h4>
                <p className="text-[#06B6D4] font-medium">Founder & CEO, Vyoma Learning Systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-[#F8FAFC]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#64748B]">Everything you need to know about our ecosystem.</p>
        </div>
        <FAQAccordion items={[
          { question: "What exactly is Vyoma Learning Systems?", answer: "Vyoma is a comprehensive EdTech ecosystem integrating schools, skills, and industry exposure to provide students with a holistic path from secondary education to professional careers." },
          { question: "Who is Curio meant for?", answer: "Curio is specifically designed for 11th and 12th-grade science students, focusing on visualizing complex STEM concepts in 3D." },
          { question: "How does the Vibe platform help with careers?", answer: "Vibe connects students with MSMEs for real-world internships, micro-tasks, and skill-based learning projects, ensuring industry readiness." },
          { question: "Are your programs aligned with CBSE/ICSE boards?", answer: "Yes, our academic modules for Nova and Curio are mapped to major national boards to ensure relevance to school curriculums." },
          { question: "How can I partner as an institution?", answer: "Institutions can reach out via our contact page to explore B2B solutions and ecosystem integrations for their students." }
        ]} />
      </Section>
    </div>
  );
};

export default Home;
