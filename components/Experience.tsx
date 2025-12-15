import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, Trophy, Code } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My journey through hackathons, competitions, and internships.">
      <div className="space-y-12 relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-slate-800" />

        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="relative pl-12 md:pl-20 group">
            {/* Timeline Dot */}
            <div className="absolute left-2 md:left-6 top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary-500 group-hover:bg-primary-500 transition-colors z-10" />
            
            <div className="glass-panel rounded-2xl border-slate-800 hover:border-slate-600 transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
              
              {/* Image Section */}
              {exp.image && (
                <div className="w-full md:w-1/3 h-48 md:h-auto relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={exp.image} 
                    alt={exp.role} 
                    onError={(e) => {
                      // Fallback image if local file is not found
                      e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800";
                    }}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Content Section */}
              <div className={`p-6 md:p-8 flex-1 ${!exp.image ? 'w-full' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                       {exp.role} 
                    </h3>
                    <div className="flex items-center gap-2 text-primary-400 font-medium mt-1">
                      {exp.type === 'Competition' ? <Trophy size={16} /> : <Briefcase size={16} />}
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-mono bg-slate-900/50 px-3 py-1 rounded self-start">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1">
                      <Code size={10} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;