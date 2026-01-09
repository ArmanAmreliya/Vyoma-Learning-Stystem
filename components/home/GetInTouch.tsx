import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../SectionWrapper';
import ScrollReveal from '../ScrollReveal';
import { Button } from "../ui/button";
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

const GetInTouch: React.FC = () => {
  return (
    <Section variant="white" id="contact" className="relative py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 rounded-full pointer-events-none w-80 h-80 bg-blue-50 blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 rounded-full pointer-events-none w-80 h-80 bg-indigo-50 blur-3xl opacity-60"></div>

        <ScrollReveal>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="relative p-8 overflow-hidden text-center text-white shadow-2xl bg-gradient-to-br bg-blue-900 rounded-3xl md:p-12 group">
                
                {/* Abstract overlay shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 duration-700 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-black/10 blur-2xl"></div>

                <div className="relative z-10 space-y-6">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center justify-center w-16 h-16 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
                            <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] tracking-tight">Ready to Transform Learning?</h2>
                    
                    <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed text-blue-100 md:text-xl">
                    For institutional partnerships, product inquiries, or just to say hello, our team is ready to help you build the future of education.
                    </p>
                    
                    <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                        <Button asChild size="lg" className="bg-white hover:bg-gray-50 text-blue-800 px-8 py-7 rounded-xl text-lg font-bold shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl min-w-[180px]">
                            <Link to="/contact">
                                Contact Sales
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-7 rounded-xl text-lg font-semibold min-w-[180px]">
                            <Link to="/contact" className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                <span>General Inquiry</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
  );
};

export default GetInTouch;
