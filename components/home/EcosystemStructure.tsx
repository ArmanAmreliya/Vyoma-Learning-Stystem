import React from 'react';
import Section from '../SectionWrapper';
import { Link } from 'react-router-dom';
import { School, FlaskConical, Handshake, Bell, ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface EcosystemCardProps {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    status: 'Live' | 'Under Development' | 'In Development';
    action?: {
        label: string;
        link?: string;
        onClick?: () => void;
    };
}

const Card: React.FC<EcosystemCardProps> = ({ title, subtitle, description, icon: Icon, status, action }) => {
    const isLive = status === 'Live';
    
    return (
        <motion.div 
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            className="group flex flex-col h-full bg-[#1E293B] border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10"
        >
            <div className="flex flex-col flex-1 p-6 items-center text-center md:items-stretch md:text-left">
                {/* Header with Icon */}
                <div className="flex flex-col items-center justify-between w-full mb-6 md:flex-row md:items-start">
                    <div className="p-3 mb-4 text-white rounded-lg bg-blue-400/10 ring-1 ring-blue-400/20 md:mb-0">
                        <Icon className="w-8 h-8" />
                    </div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
                        isLive 
                            ? 'bg-blue-400/10 text-blue-400 ring-blue-400/20' 
                            : 'bg-slate-700/50 text-slate-400 ring-slate-600'
                    }`}>
                        {isLive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5 animate-pulse"></span>}
                        {status}
                    </span>
                </div>

                {/* Content */}
                <div className="mb-2">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
                    <p className="text-blue-400 font-medium text-sm">{subtitle}</p>
                </div>
                
                <p className="flex-1 mb-6 text-sm leading-relaxed text-slate-400">
                    {description}
                </p>

                {/* Footer Action */}
                <div className="pt-4 mt-auto border-t border-slate-700/50">
                    {action?.link ? (
                        <Link to={action.link}>
                            <button className="flex items-center justify-center w-full h-10 gap-2 text-sm font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-500 shadow-lg shadow-blue-500/25">
                                <span>{action.label}</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    ) : (
                        <button className="flex items-center justify-center w-full h-10 gap-2 text-sm font-semibold text-white transition-colors border rounded-lg bg-slate-800 hover:bg-slate-700 border-slate-700 group-hover:border-blue-400/30">
                            <span>{action?.label || 'Notify Me'}</span>
                            <Bell className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const EcosystemStructure: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <Section variant="dark" id="ecosystem" className="py-20">
            <div className="flex flex-col items-center mb-12 text-center">
                <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">Our Platform</span>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">Ecosystem Structure</h2>
                <p className="max-w-2xl text-lg text-slate-400">
                    A comprehensive learning journey from foundational years to industry integration.
                </p>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid items-start grid-cols-1 gap-6 md:grid-cols-3"
            >
                <Card 
                    title="Nova"
                    subtitle="Grades 9–10 Foundational Learning"
                    description="Building strong academic roots with structured pathways and comprehensive assessment frameworks designed to prepare students for higher education."
                    icon={School}
                    status="Under Development"
                />

                <Card 
                    title="Curio"
                    subtitle="Class 11–12 Science"
                    description="Immersive 3D-based concept visualization paired with AI-driven doubt resolution and real-time performance tracking for science streams."
                    icon={FlaskConical}
                    status="Live"
                    action={{
                        label: "Explore Curio",
                        link: "https://curioteach.com/"
                    }}
                />

                <Card 
                    title="Vibe"
                    subtitle="Skills & Industry"
                    description="Bridging the gap between academia and career with industry-aligned skill development, MSME partnerships, and structured internships."
                    icon={Handshake}
                    status="In Development"
                />
            </motion.div>
        </Section>
    );
};

export default EcosystemStructure;
