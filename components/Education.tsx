import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="My academic background and achievements.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="glass-panel p-6 rounded-2xl border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 relative flex flex-col h-full hover:-translate-y-1">
              
              <div className="flex items-start gap-4 mb-4">
                {/* School Image / Logo Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl bg-white p-2 overflow-hidden border-2 border-slate-600 group-hover:border-primary-500 transition-colors shadow-lg">
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
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 rounded-lg">
                      <Building2 className="text-slate-400 w-8 h-8" />
                    </div>
                  )}
                  {/* Fallback Icon (rendered if img hidden or no src) */}
                  <Building2 className="text-slate-800 w-8 h-8 hidden" /> 
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors leading-tight">
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                    <Calendar size={14} className="text-accent-400" />
                    <span className="font-mono">{edu.year}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-700/50 mt-auto">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-slate-800 rounded-lg text-primary-400 mt-0.5">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-200 block">Degree</span>
                    <span className="text-sm text-slate-400 leading-relaxed">{edu.degree}</span>
                    {edu.details && (
                      <span className="text-xs text-slate-500 block mt-1">{edu.details}</span>
                    )}
                  </div>
                </div>

                {edu.gpa && (
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-slate-800 rounded-lg text-yellow-400">
                      <Award size={16} />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-200 mr-2">Grade</span>
                      <span className="inline-block px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-mono rounded font-bold">
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