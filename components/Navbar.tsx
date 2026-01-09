import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const navItems = [
    { name: "What We Do", href: "#what-we-do" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Curio", href: "#curio" },
    { name: "Leadership", href: "#leadership" },
    { name: "How It Works", href: "#how-it-works" }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            
            // Scroll Spy Logic
            const sections = navItems.map(item => item.href.substring(1));
            let current = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigation = (href: string) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            // Small timeout to allow navigation to complete before scrolling
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
             const element = document.querySelector(href);
             if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
             }
        }
    };

    const scrollToTop = () => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                 window.scrollTo(0, 0);
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 py-0 border-b shadow-sm bg-white/90 backdrop-blur-md border-blue-100/50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container px-4 mx-auto md:px-6">
                <div className="relative flex items-center justify-between h-[100px]">
                    {/* Logo */}
                    <button onClick={scrollToTop} className="absolute top-0 flex items-center h-full -translate-x-1/2 left-1/2 group focus:outline-none md:static md:translate-x-0 md:-ml-8">
                        <img 
                            src="/vyoma-logo.png" 
                            alt="Vyoma Logo" 
                            className="h-[140%] w-auto object-contain cursor-pointer -translate-y-1"
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="items-center hidden gap-2 md:flex lg:gap-6">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavigation(item.href)}
                                    className={cn(
                                        "relative px-2 py-2 text-sm lg:text-base font-medium transition-colors group hover:text-[#1E3A8A]",
                                        isActive ? "text-[#1E3A8A]" : "text-slate-600"
                                    )}
                                >
                                    {item.name}
                                    <span className={cn(
                                        "absolute bottom-0 left-0 w-full h-0.5 transition-transform duration-300 origin-left bg-[#1E3A8A]",
                                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    )} />
                                </button>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <div className="items-center hidden md:flex">
                         <Button 
                            onClick={() => handleNavigation("#contact")}
                            className="rounded-full px-6 font-medium shadow-lg transition-all bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white shadow-blue-900/10 hover:shadow-blue-900/20"
                         >
                            Get in Touch
                         </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="p-2 ml-auto transition-colors md:hidden text-slate-800"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-b md:hidden bg-white/95 backdrop-blur-xl border-border"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item.href)}
                                        className={cn(
                                            "px-4 py-3 text-left text-lg font-medium hover:text-[#1E3A8A] hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 last:border-0",
                                            isActive ? "text-[#1E3A8A] bg-slate-50" : "text-slate-700"
                                        )}
                                    >
                                        {item.name}
                                    </button>
                                );
                            })}
                             <Button 
                                onClick={() => handleNavigation("#contact")}
                                className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white rounded-lg mt-4 py-6 text-lg"
                             >
                                Get in Touch
                             </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
