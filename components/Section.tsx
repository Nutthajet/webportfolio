import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-28 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              {title}
            </span>
            <span className="text-primary-500">.</span>
          </h2>
          {subtitle && (
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-20 bg-primary-500 mt-6 rounded-full opacity-80"></div>
        </div>
        {children}
      </div>
      
      {/* Decorative background elements can go here if needed, keeping it clean for now */}
    </section>
  );
};

export default Section;