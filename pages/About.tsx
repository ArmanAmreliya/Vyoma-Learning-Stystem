import React from 'react';
import Section from '../components/SectionWrapper';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-8">
      {/* Header */}
      <Section variant="white">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 text-slate-900">About Vyoma</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Vyoma Learning Systems is an education organization focused on building 
              comprehensive learning pathways that connect academic foundations with 
              professional competencies.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Mission */}
      <Section variant="dark">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              We develop integrated education platforms that prioritize conceptual understanding 
              over rote memorization. Our products serve students from Grade 9 through professional 
              career stages, providing structured pathways for academic excellence and skill acquisition.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Education should equip students with durable knowledge frameworks, not just 
              examination strategies. Vyoma's approach emphasizes visualization, practice, 
              and real-world application as core components of effective learning.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* What We Build */}
      <Section variant="white">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-slate-900">What We Build</h2>
        </ScrollReveal>
        <div className="space-y-12 max-w-3xl">
          <ScrollReveal delay={0.1}>
            <div className="pb-8 border-b border-slate-200">
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">Academic Platforms</h3>
              <p className="text-slate-600 text-lg">
                For Grades 9-12, Vyoma provides curriculum-aligned products (Nova, Curio) 
                that utilize visual models and AI feedback to strengthen concept retention 
                in science and mathematics.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="pb-8 border-b border-slate-200">
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">Skill Ecosystems</h3>
              <p className="text-slate-600 text-lg">
                For higher education, the Vibe platform connects academic theory with industrial 
                practice through structured internship modules and MSME partnerships.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-slate-900">Institutional Tools</h3>
              <p className="text-slate-600 text-lg">
                We provide schools and colleges with performance analytics and content integration 
                frameworks to support hybrid learning environments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
};

export default About;
