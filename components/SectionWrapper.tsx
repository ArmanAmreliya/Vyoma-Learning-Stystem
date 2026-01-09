import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'dark';
}

const SectionWrapper: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  variant = 'white' 
}) => {
  const bgClass = variant === 'dark' ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-900';
  
  return (
    <section 
        id={id} 
        className={`${bgClass} py-24 w-full`} // Enforced vertical spacing padding: 96px => py-24
    >
      <div className={`container-custom ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
