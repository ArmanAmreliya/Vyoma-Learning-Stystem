import React, { useRef, useLayoutEffect } from 'react';
import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline for entrance
            const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

            // 1. Overlay fades in with background
            tl.fromTo(bgRef.current, 
                { opacity: 0, scale: 1.1 }, 
                { opacity: 0.65, scale: 1, duration: 1.5 }
            );

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const headingVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -40 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    return (
        <section ref={heroRef} className="relative w-full h-[calc(100vh-64px)] flex items-center overflow-hidden bg-[#0F172A]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHsIV8wozH4pWuBlbSbMsV1oW8G79lF-BpAxF7eYdePTM1r0awE8BQDoKVKnu8HK7xqfqQhrHnXOks1n7Scd-KgIJIFFwKoJgUyAcoZCARGi92AlwHJ0pq_7efmTVYZsvI_YMgYiqdXszqEztb0oEDPh0LGftC3BcN9fYyFKcNfHW8diBF4vQo-2Fbtz2eXQ5qsT_OkiyvqVd91hYJ--NMQgXjj3nCqTTtVRldqk4Ydch4PUV12oucc7Cr8exrbVpUa53Yz7_nANvS" 
                    alt="Students studying together in a modern library environment" 
                    className="object-cover w-full h-full"
                />
                {/* Dark Overlay - Opacity ~0.65 as requested */}
                <div ref={bgRef} className="absolute inset-0 bg-black opacity-65"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-0 flex flex-col items-start justify-center h-full">
                <div className="max-w-3xl space-y-8">
                    {/* Heading */}
                    <motion.h1 
                        initial="hidden"
                        animate="visible"
                        variants={headingVariants}
                        className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem] uppercase font-['Space_Grotesk'] perspective-1000"
                    >
                        {/* Word by word animation */}
                        <span className="inline-block mr-4">
                            <motion.span variants={wordVariants} className="inline-block">BETTER</motion.span>
                        </span>
                        <span className="inline-block mr-4">
                            <motion.span variants={wordVariants} className="inline-block">EDUCATION</motion.span>
                        </span>
                        <span className="inline-block mr-4">
                            <motion.span variants={wordVariants} className="inline-block">FOR</motion.span>
                        </span>
                        <br className="md:hidden" />
                        <span className="inline-block text-blue-800">
                             <span className="inline-block mr-4">
                                <motion.span variants={wordVariants} className="inline-block">BETTER</motion.span>
                            </span>
                            <span className="inline-block">
                                <motion.span variants={wordVariants} className="inline-block">WORLD</motion.span>
                            </span>
                        </span>
                    </motion.h1>
                    
                    {/* Paragraph */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="max-w-xl text-lg font-light leading-relaxed text-gray-200 md:text-xl font-['Space_Grotesk']"
                    >
                        Vyoma Learning Systems integrates academic foundations, skill development, and industry exposure for students from Class 9 through professional careers.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="pt-4"
                    >
                        <Button 
                            className="bg-blue-800 hover:bg-blue-900 hover:-translate-y-1 text-white px-8 py-7 text-base rounded-lg font-bold shadow-lg shadow-blue-500/25 transition-all duration-300 group font-['Space_Grotesk']"
                        >
                            <span>Get Started</span>
                            <span className="ml-1 transition-opacity opacity-70 group-hover:opacity-100">/curio</span>
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </motion.div>
                </div>
            </div>
             {/* Scroll Indicator */}
            <div className="absolute z-10 hidden -translate-x-1/2 bottom-8 left-1/2 text-white/50 animate-bounce md:block">
                <ChevronDown className="w-10 h-10" />
            </div>
        </section>
    );
};

export default HeroSection;
