import React from 'react';
import Section from '../components/SectionWrapper';
import ScrollReveal from '../components/ScrollReveal';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { CheckCircle2, Cuboid, BrainCircuit, BarChart3, Target } from 'lucide-react';

const Curio: React.FC = () => {
  return (
    <div className="pt-20">
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl">
            <div className="mb-16">
              <img 
                src="/CURIO TRANSPARENT.png" 
                alt="Curio" 
                className="w-auto h-64 md:h-64"
              />
            </div>
            <h1 className="mb-6 text-5xl font-light tracking-tight md:text-6xl text-slate-900">Curio Learning Platform</h1>
            <p className="text-xl font-light leading-relaxed md:text-2xl text-slate-600">
              A 3D visualization-based learning environment for Class 11–12 science students, 
              providing concept mastery tools for Physics, Chemistry, and Biology.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section dark>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="mb-6 text-3xl font-light text-white">Platform Overview</h2>
            <p className="mb-6 text-lg font-light leading-relaxed text-slate-400">
              Curio addresses the challenge of abstract scientific concepts by providing 
              interactive 3D models that students can manipulate and explore. The platform 
              combines visualization with structured practice and AI-driven support.
            </p>
            <p className="text-lg font-light leading-relaxed text-slate-400">
              Content aligns with CBSE, ICSE, and major state board curricula, covering 
              full syllabi for Classes 11 and 12 across science streams.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <h2 className="mb-12 text-3xl font-light text-slate-900">Core Features</h2>
        </ScrollReveal>
        <div className="grid max-w-4xl gap-8 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <Card className="h-full bg-white shadow-sm border-slate-100">
              <CardHeader>
                <Cuboid className="w-8 h-8 mb-2 text-blue-600" />
                <CardTitle className="text-xl font-medium text-slate-900">3D Concept Models</CardTitle>
                <CardDescription className="text-slate-500">
                  Interactive visualizations for molecular structures, physical systems, 
                  wave phenomena, and biological processes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>Rotate, zoom, and manipulate models</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>Step-by-step construction animations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>Cross-sectional and exploded views</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="h-full bg-white shadow-sm border-slate-100">
              <CardHeader>
                <BrainCircuit className="w-8 h-8 mb-2 text-purple-600" />
                <CardTitle className="text-xl font-medium text-slate-900">AI Doubt Engine</CardTitle>
                <CardDescription className="text-slate-500">
                  Natural language query processing with contextual explanations and 
                  worked problem solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>24/7 availability, no wait times</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>Step-by-step solution breakdowns</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>Related concept recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Card className="h-full bg-white shadow-sm border-slate-100">
              <CardHeader>
                <BarChart3 className="w-8 h-8 mb-2 text-emerald-600" />
                <CardTitle className="text-xl font-medium text-slate-900">Performance Analytics</CardTitle>
                <CardDescription className="text-slate-500">
                  Granular tracking of topic-level mastery with historical performance 
                  data and weakness identification.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Topic-wise strength analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Time-spent tracking per concept</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Improvement trend visualization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Card className="h-full bg-white shadow-sm border-slate-100">
              <CardHeader>
                <Target className="w-8 h-8 mb-2 text-orange-600" />
                <CardTitle className="text-xl font-medium text-slate-900">Practice Systems</CardTitle>
                <CardDescription className="text-slate-500">
                  Structured problem sets with adaptive difficulty based on demonstrated 
                  mastery levels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>Chapter-wise question banks</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>Board exam pattern practice</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    <span>Instant feedback and hints</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      <Section dark>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="mb-8 text-3xl font-light text-white">Curriculum Coverage</h2>
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Physics</h3>
                <p className="text-sm font-light text-slate-400">
                  Mechanics, Thermodynamics, Electromagnetism, Optics, Modern Physics, 
                  Waves, and Oscillations
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Chemistry</h3>
                <p className="text-sm font-light text-slate-400">
                  Physical Chemistry, Organic Chemistry, Inorganic Chemistry, Chemical 
                  Bonding, Thermochemistry, Electrochemistry
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Biology</h3>
                <p className="text-sm font-light text-slate-400">
                  Cell Biology, Genetics, Evolution, Plant Physiology, Human Physiology, 
                  Ecology, Biotechnology
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="mb-8 text-3xl font-light text-slate-900">Who Should Use Curio</h2>
            <div className="space-y-8">
              <div className="pb-8 border-b border-slate-100">
                <h3 className="mb-2 text-xl font-medium text-slate-900">Individual Students</h3>
                <p className="font-light leading-relaxed text-slate-600">
                  Class 11–12 students seeking concept clarity, doubt resolution, and 
                  structured practice for board exams and competitive tests.
                </p>
              </div>
              <div className="pb-8 border-b border-slate-100">
                <h3 className="mb-2 text-xl font-medium text-slate-900">Schools & Institutions</h3>
                <p className="font-light leading-relaxed text-slate-600">
                  Educational institutions looking to supplement classroom teaching with 
                  visualization tools and performance tracking systems.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-medium text-slate-900">Coaching Centers</h3>
                <p className="font-light leading-relaxed text-slate-600">
                  Tutoring and coaching organizations seeking scalable tools for concept 
                  reinforcement and student engagement.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section dark>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-light text-white">Access Curio</h2>
            <p className="mb-8 font-light leading-relaxed text-slate-400">
              The platform is available for individual students and institutional partners. 
              Visit the Curio website for registration and access details.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <a 
                  href="https://curio.vyoma.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Curio Platform →
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-slate-700 hover:bg-slate-800 hover:text-white" asChild>
                <Link to="/contact">
                  Institutional Licensing
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default Curio;
