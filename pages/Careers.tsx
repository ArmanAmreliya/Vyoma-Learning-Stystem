import React from 'react';
import Section from '../components/SectionWrapper';
import ScrollReveal from '../components/ScrollReveal';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">Careers at Vyoma</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              We build education platforms that prioritize conceptual understanding over 
              rote learning. Join a team focused on long-term impact in the education sector.
            </p>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      <Section dark>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-light text-white mb-6">Who We Hire</h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg font-light">
              Vyoma seeks professionals with deep expertise in education technology, 
              software engineering, content development, and data science. We value 
              experience in building scalable systems and understanding of learning science.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Our team includes educators, engineers, designers, and researchers committed 
              to improving education outcomes through technology and pedagogy.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <h2 className="text-3xl font-light text-slate-900 mb-12">Current Openings</h2>
        </ScrollReveal>
        <div className="space-y-6 max-w-3xl">
          <ScrollReveal delay={0.1}>
            <Card>
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 pb-2">
                <CardTitle className="text-xl font-medium text-slate-900">Senior Software Engineer</CardTitle>
                <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit">Full-time • Remote</span>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Build and maintain backend systems for Curio platform. Requires 4+ years 
                  experience with Node.js, PostgreSQL, and distributed systems.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium" asChild>
                  <Link to="/contact">Apply <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card>
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 pb-2">
                <CardTitle className="text-xl font-medium text-slate-900">3D Content Developer</CardTitle>
                <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit">Full-time • Hybrid</span>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Create scientific concept visualizations for Curio. Experience with Blender, 
                  Unity, or similar 3D tools required. Background in science education preferred.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium" asChild>
                  <Link to="/contact">Apply <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Card>
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 pb-2">
                <CardTitle className="text-xl font-medium text-slate-900">Data Scientist</CardTitle>
                <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit">Full-time • Remote</span>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Analyze student performance data to improve learning outcomes. Experience 
                  with Python, statistical modeling, and education analytics required.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium" asChild>
                  <Link to="/contact">Apply <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Card>
              <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 pb-2">
                <CardTitle className="text-xl font-medium text-slate-900">Frontend Engineer</CardTitle>
                <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit">Full-time • Remote</span>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Develop user interfaces for Vyoma platforms. Strong React, TypeScript, and 
                  responsive design skills required. 3+ years professional experience.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium" asChild>
                  <Link to="/contact">Apply <ArrowRight className="ml-1 w-4 h-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      <Section dark>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-light text-white mb-6">Application Process</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-white mb-2 font-medium">1. Initial Application</h3>
                <p className="text-slate-400 font-light">
                  Submit resume and cover letter explaining relevant experience and interest 
                  in education technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2 font-medium">2. Technical Assessment</h3>
                <p className="text-slate-400 font-light">
                  Complete role-specific technical evaluation (coding challenge, portfolio 
                  review, or case study).
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2 font-medium">3. Team Interview</h3>
                <p className="text-slate-400 font-light">
                  Discussion with hiring manager and team members about technical approach, 
                  problem-solving, and cultural fit.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-white mb-2 font-medium">4. Offer & Onboarding</h3>
                <p className="text-slate-400 font-light">
                  Formal offer with compensation details, followed by structured onboarding 
                  process and team integration.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-slate-900 mb-6">Don't See Your Role?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed font-light">
              We're always interested in connecting with talented professionals in education 
              technology. Send your resume and areas of interest to our team.
            </p>
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800" asChild>
              <Link to="/contact">Contact Hiring Team</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

// Helper component for section wrapper to match other pages
const SectionWrapper = ({
  children,
  dark,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) => (
  <Section dark={dark} className={className}>
    {children}
  </Section>
);

export default Careers;
