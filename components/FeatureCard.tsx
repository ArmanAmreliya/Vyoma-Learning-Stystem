
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 rounded-[24px] bg-white hover:bg-[#F8FAFC] border border-transparent hover:border-blue-100 transition-all"
    >
      <div className="w-14 h-14 rounded-2xl gradient-main text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-[#1E3A8A] mb-3">{title}</h4>
      <p className="text-[#64748B] leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
