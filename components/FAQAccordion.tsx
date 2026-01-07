
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-100 rounded-2xl bg-white overflow-hidden">
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-bold text-[#1E3A8A] md:text-lg">{item.question}</span>
            <div className="text-[#06B6D4]">
              {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-[#64748B] leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
