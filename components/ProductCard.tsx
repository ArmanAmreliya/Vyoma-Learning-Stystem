
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  name: string;
  audience: string;
  description: string;
  status: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, audience, description, status, link }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white border border-gray-100 rounded-[30px] p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
          {status}
        </span>
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
          <ArrowUpRight size={20} />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{name}</h3>
      <p className="text-[#06B6D4] font-semibold text-sm mb-4">{audience}</p>
      <p className="text-[#64748B] leading-relaxed mb-8">
        {description}
      </p>

      <Link to={link} className="inline-flex items-center gap-2 text-[#1E3A8A] font-bold text-sm group-hover:gap-4 transition-all">
        Learn More <ArrowUpRight size={16} />
      </Link>
    </motion.div>
  );
};

export default ProductCard;
