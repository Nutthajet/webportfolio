import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="Academic background." className="bg-[#111111]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="group relative">
            <div className="bg-[#171717] p-6 border border-stone-800 hover:border-stone-600 transition-colors relative flex flex-col h-full">
              
              <div className="flex items-start gap-4 mb-4">
                {/* School Image / Logo Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white p-2 overflow-hidden border border-stone-700 transition-colors shadow-lg">
                  {edu.image ? (
                    <img 
                      src={edu.image} 
                      alt={edu.institution}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                         // Fallback icon if image fails
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-800');
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-100">
                      <Building2 className="text-slate-400 w-8 h-8" />
                    </div>
                  )}
                  {/* Fallback Icon (rendered if img hidden or no src) */}
                  <Building2 className="text-slate-800 w-8 h-8 hidden" /> 
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-200 transition-colors leading-tight">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-stone-400 mt-2">
                    <Calendar size={14} className="text-emerald-300" />
                    <span className="font-mono">{edu.year}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-800 mt-auto">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-stone-950 text-amber-200 mt-0.5">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-stone-200 block">Degree</span>
                    <span className="text-sm text-stone-400 leading-relaxed">{edu.degree}</span>
                    {edu.details && (
                      <span className="text-xs text-stone-500 block mt-1">{edu.details}</span>
                    )}
                  </div>
                </div>

                {edu.gpa && (
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-stone-950 text-amber-200">
                      <Award size={16} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-stone-200 mr-2">Grade</span>
                      <span className="inline-block px-2 py-0.5 bg-amber-200/10 border border-amber-200/30 text-amber-200 text-xs font-mono font-bold">
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
