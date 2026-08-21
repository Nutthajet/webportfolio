import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, Code, FlaskConical, Trophy, type LucideIcon } from 'lucide-react';
import type { Experience as ExperienceItem } from '../types';

const EXPERIENCE_ICONS: Record<ExperienceItem['type'], LucideIcon> = {
  Competition: Trophy,
  Internship: Briefcase,
  Project: FlaskConical,
};

const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      title="All Experience"
      subtitle="Additional projects, competitions, and research experience."
      className="bg-[#111111]"
    >
      <div className="space-y-5">
        {EXPERIENCES.map((exp, index) => {
          const Icon = EXPERIENCE_ICONS[exp.type];

          return (
            <article
              key={exp.id}
              className="grid grid-cols-1 lg:grid-cols-[220px_1fr] border border-stone-800 bg-[#171717] transition-colors hover:border-stone-600"
            >
              <div className="border-b border-stone-800 lg:border-b-0 lg:border-r p-5 flex lg:flex-col gap-4 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-200">
                    <Icon size={18} />
                    <span className="font-mono text-xs uppercase tracking-[0.18em]">{exp.type}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-stone-400">
                    <Calendar size={14} />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                </div>
                <div className="font-mono text-4xl text-stone-800">0{index + 1}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_260px]">
                <div className="p-5 md:p-7">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-stone-50">
                      {exp.role}
                    </h3>
                    <p className="text-sm md:text-base text-emerald-300">{exp.company}</p>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-stone-300">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 border border-stone-700 bg-stone-950 px-2.5 py-1 text-xs text-stone-300"
                      >
                        <Code size={11} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {exp.image && (
                  <div className="min-h-48 border-t border-stone-800 md:border-t-0 md:border-l bg-stone-950">
                    <img
                      src={exp.image}
                      alt={exp.role}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800';
                      }}
                      className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100"
                    />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
