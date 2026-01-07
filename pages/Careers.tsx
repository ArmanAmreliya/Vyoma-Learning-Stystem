
import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Sparkles, Code, PenTool, Layout } from 'lucide-react';

const Careers: React.FC = () => {
  const roles = [
    { title: 'Frontend Intern', icon: <Layout />, duration: '3 Months', desc: 'Build immersive UI for Curio using React and GSAP.' },
    { title: '3D Content Creator', icon: <PenTool />, duration: '3 Months', desc: 'Help visualize complex physics concepts in Blender.' },
    { title: 'Fullstack Dev (Node.js)', icon: <Code />, duration: '6 Months', desc: 'Work on our core learning management systems.' }
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <header className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-[#1E3A8A] mb-8"
          >
            Join the <span className="text-gradient">Team</span>
          </motion.h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            We don't just offer internships; we offer career-defining experiences. Our learning-first philosophy means you build real products from day one.
          </p>
        </div>
      </header>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-[#1E3A8A] mb-6">Our Philosophy</h2>
            <p className="text-[#64748B] text-lg mb-6 leading-relaxed">
              We believe the best way to learn is by doing. At Vyoma, interns are treated like founders. You take ownership of a feature, learn the stack, and see your code live in front of thousands of students.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <Calendar className="text-[#1E3A8A]" />
                <span className="font-bold text-[#1E3A8A]">Duration: 3-6 Months</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <Sparkles className="text-orange-600" />
                <span className="font-bold text-orange-600">Performance-based stipends</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/800/600?random=20" alt="Office Culture" className="rounded-[40px] shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 max-w-[200px]">
              <h4 className="font-bold text-[#1E3A8A] text-3xl mb-1">100%</h4>
              <p className="text-xs text-[#64748B]">Intern-to-full-time conversion rate in 2023</p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-[#1E3A8A] mb-12 text-center">Open Internship Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-[30px] shadow-lg border border-gray-50 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center mb-6">
                {role.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#1E3A8A] mb-2">{role.title}</h4>
              <div className="flex items-center gap-2 text-sm text-[#64748B] mb-4">
                <Calendar size={14} /> {role.duration}
              </div>
              <p className="text-[#64748B] mb-8 flex-grow">{role.desc}</p>
              <button className="w-full py-4 rounded-xl border-2 border-[#1E3A8A] text-[#1E3A8A] font-bold hover:bg-[#1E3A8A] hover:text-white transition-all">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Careers;
