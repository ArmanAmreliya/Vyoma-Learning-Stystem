import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isDevCreditOpen, setIsDevCreditOpen] = useState(false);
    const devCreditRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (devCreditRef.current && !devCreditRef.current.contains(event.target as Node)) {
                setIsDevCreditOpen(false);
            }
        };

        if (isDevCreditOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDevCreditOpen]);

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 py-12">
      <div className="container px-4 mx-auto md:px-6 relative">
             {/* Developer Credit */}
             <div className="absolute top-0 right-4" ref={devCreditRef}>
            <AnimatePresence>
                {isDevCreditOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-full right-0 mb-3 w-max px-4 py-3 bg-[#0F172A] border border-slate-800 rounded-lg shadow-xl text-left z-50"
                    >
                        <p className="text-sm font-medium text-slate-200">Arman Amreliya</p>
                        <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">Developer</p>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                onClick={() => setIsDevCreditOpen(!isDevCreditOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 text-white bg-slate-800/50 hover:bg-slate-700 hover:border-slate-500 transition-all font-mono text-sm shadow-sm"
                aria-label="Developer information"
            >
                &lt;/&gt;
            </motion.button>
          </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 min-h-[200px] items-start">
          {/* Brand Column */}
          <div className="flex flex-col justify-between items-center text-center lg:col-span-4 lg:items-start lg:text-left">
            <div>
                <Link to="/" className="inline-block mb-2 ml-0 lg:-ml-8">
                    <img 
                    src="/vyoma-logo.png" 
                    alt="Vyoma Learning Systems" 
                    className="object-contain w-auto h-40 scale-110 brightness-0 invert origin-center lg:origin-left"
                    />
                </Link>
                <div className="max-w-sm space-y-3">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">Vyoma Learning Systems Pvt. Ltd.</h3>
                  <p className="text-base font-light leading-relaxed md:text-lg text-slate-300 text-pretty">
                        An education ecosystem integrating academics, skills, and industry exposure to shape the future of learning.
                    </p>
                </div>
            </div>
             <div className="flex justify-center gap-3 mt-6 lg:justify-start">
                <a href="#" className="p-2 transition-colors rounded-full bg-slate-800/50 text-slate-400 hover:bg-blue-600 hover:text-white">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="p-2 transition-colors rounded-full bg-slate-800/50 text-slate-400 hover:bg-blue-600 hover:text-white">
                    <Twitter size={18} />
                </a>
                 <a href="#" className="p-2 transition-colors rounded-full bg-slate-800/50 text-slate-400 hover:bg-blue-600 hover:text-white">
                    <Instagram size={18} />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-4 lg:col-span-2 lg:pl-4">
            <h4 className="mb-3 text-base font-semibold text-white md:text-lg">Explore</h4>
            <div className="p-3 border rounded-lg bg-slate-900/40 border-slate-800/50">
              <ul className="space-y-2 text-base md:text-lg text-slate-300">
                <li><button onClick={() => scrollToSection('#what-we-do')} className="w-full text-left hover:text-blue-400 hover:translate-x-1 transition-all duration-300">What We Do</button></li>
                <li><button onClick={() => scrollToSection('#ecosystem')} className="w-full text-left hover:text-blue-400 hover:translate-x-1 transition-all duration-300">Ecosystem</button></li>
                <li><button onClick={() => scrollToSection('#curio')} className="w-full text-left hover:text-blue-400 hover:translate-x-1 transition-all duration-300">Curio</button></li>
                <li><button onClick={() => scrollToSection('#how-it-works')} className="w-full text-left hover:text-blue-400 hover:translate-x-1 transition-all duration-300">How It Works</button></li>
              </ul>
            </div>
          </div>

           {/* Company */}
           <div className="pt-4 lg:col-span-2">
            <h4 className="mb-3 text-base font-semibold text-white md:text-lg">Company</h4>
            <div className="p-3 border rounded-lg bg-slate-900/40 border-slate-800/50">
              <ul className="space-y-2 text-base md:text-lg text-slate-300">
                  <li><button onClick={() => scrollToSection('#leadership')} className="w-full text-left hover:text-blue-400 hover:translate-x-1 transition-all duration-300">Leadership</button></li>
                 <li><Link to="/about" className="block hover:text-blue-400 hover:translate-x-1 transition-all duration-300">About Us</Link></li>
                 <li><Link to="/careers" className="block hover:text-blue-400 hover:translate-x-1 transition-all duration-300">Careers</Link></li>
                 <li><button onClick={() => scrollToSection('#contact')} className="w-full text-left hover:text-blue-400 hover:translate-x-1 transition-all duration-300">Contact</button></li>
               </ul>
            </div>
           </div>

          {/* Contact Info */}
            <div className="pt-4 lg:col-span-4">
            <h4 className="mb-3 text-base font-semibold text-white md:text-lg">Get in Touch</h4>
            <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 transition-colors rounded-lg bg-slate-900/50 border border-slate-800/50 hover:border-blue-400/30">
                    <MapPin className="shrink-0 text-blue-400 mt-0.5" size={18} />
                <span className="text-base font-light leading-relaxed md:text-lg text-slate-300">i-Hub, KCG Campus, University Area<br />Ahmedabad – 380015, India</span>
                </div>
                
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a href="tel:+918780375687" className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-slate-900/50 border border-slate-800/50 hover:border-blue-400/30 hover:bg-slate-900 group">
                        <Phone className="shrink-0 text-blue-400" size={18} />
                  <span className="text-base font-light transition-colors md:text-lg text-slate-300 group-hover:text-white">+91 87803 75687</span>
                    </a>
                    <a href="mailto:contact@vyoma.in" className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-slate-900/50 border border-slate-800/50 hover:border-blue-400/30 hover:bg-slate-900 group">
                        <Mail className="shrink-0 text-blue-400" size={18} />
                  <span className="text-base font-light transition-colors md:text-lg text-slate-300 group-hover:text-white">contact@vyoma.in</span>
                    </a>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-8 border-t border-slate-800/50 md:flex-row">
          <p className="text-sm font-light text-slate-500">
            © {new Date().getFullYear()} Vyoma Learning Systems Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-light text-slate-500">
            <Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
