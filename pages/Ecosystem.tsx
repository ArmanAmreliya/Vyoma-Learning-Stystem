import React from 'react';
import Section from '../components/SectionWrapper';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const Ecosystem: React.FC = () => {
  return (
    <div className="pt-24 pb-8">
      <Section variant="white">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 text-slate-900">Education Ecosystem</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Vyoma operates three integrated platforms serving students from Grade 9 
              through professional career stages, each optimized for specific learning phases.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section variant="dark" id="nova">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Nova</h2>
              <p className="text-sm text-slate-400 mb-6 font-semibold uppercase tracking-wide">Grades 9–10</p>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                Nova provides foundational academic learning for secondary school students, 
                focusing on mathematics and science concept development through structured 
                curriculum pathways.
              </p>
              <div className="inline-block bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-700">Status: Under Development</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Card className="bg-[#1E293B] border-slate-700">
                <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-white">Platform Features</h3>
                    <ul className="space-y-4 text-slate-300">
                        {["Structured curriculum aligned with CBSE and state boards", "Interactive concept models for mathematics and science", "Practice modules with progressive difficulty scaling", "Assessment frameworks for concept mastery validation"].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-3 text-blue-500 mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="white" id="curio">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Curio</h2>
              <p className="text-sm text-slate-500 mb-6 font-semibold uppercase tracking-wide">Class 11–12 Science</p>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                An advanced visualization platform designed for complex scientific concepts 
                in Physics, Chemistry, and Biology, supporting high-stakes examination preparation.
              </p>
              <Button asChild className="bg-[#1E3A8A] hover:bg-[#162E6F]">
                 <a href="https://curio.vyoma.in" target="_blank" rel="noopener noreferrer">Explore Curio Platform</a>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
             <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6 text-slate-900">Core Capabilities</h3>
                <ul className="space-y-4 text-slate-600">
                    {["3D Concept Visualization of abstract phenomena", "AI-driven instantaneous doubt resolution", "Performance pattern analysis and feedback", "Integration with competitive exam frameworks"].map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="mr-3 text-[#1E3A8A] mt-1">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="dark" id="vibe">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Vibe</h2>
              <p className="text-sm text-slate-400 mb-6 font-semibold uppercase tracking-wide">Skills & Career</p>
              <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                A skill development ecosystem bridging the gap between academic theory and 
                industry application through project-based learning and structured internships.
              </p>
              <div className="inline-block bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-700">Status: In Development</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
             <Card className="bg-[#1E293B] border-slate-700">
                <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 text-white">Program Components</h3>
                    <ul className="space-y-4 text-slate-300">
                        {["Industry-designed technical skill modules", "MSME internship integration frameworks", "Professional competency assessments", "Career trajectory mapping and guidance"].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="mr-3 text-blue-500 mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      <Section variant="white">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Integration Philosophy</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              While each product serves a distinct educational phase, they share a common 
              data backbone and pedagogical approach. Insights from foundational learning (Nova) 
              inform advanced preparation (Curio), which in turn shapes skill development 
              pathways (Vibe).
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              This vertical integration allows Vyoma to support students continuously 
              through their formative academic and professional years.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section variant="dark">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">Institutional Access</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              Schools, colleges, and education organizations can access Vyoma platforms 
              through institutional licensing. Contact us for integration support and 
              program details.
            </p>
            <Button asChild size="lg" className="bg-white text-[#0F172A] hover:bg-slate-200 rounded-full px-8">
              <Link to="/contact">Contact for Partnerships</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default Ecosystem;
