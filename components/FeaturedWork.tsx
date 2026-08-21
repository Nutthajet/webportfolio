import React from 'react';
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react';
import Section from './Section';
import { EXPERIENCES } from '../constants';

const FEATURED_IDS = ['exp1', 'exp2', 'exp6'];

const FeaturedWork: React.FC = () => {
  const featuredExperiences = FEATURED_IDS
    .map((id) => EXPERIENCES.find((experience) => experience.id === id))
    .filter((experience): experience is NonNullable<typeof experience> => Boolean(experience));

  return (
    <Section
      id="work"
      title="Selected Work"
      subtitle="A quick look at the work I would want to discuss in an interview."
      className="bg-[#171717]"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 border border-stone-800 bg-stone-950/60 p-5 md:flex-row md:items-center md:p-6">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 flex-shrink-0 text-amber-200" size={19} />
          <p className="max-w-2xl text-sm leading-relaxed text-stone-300">
            These projects show the range I enjoy most: turning messy data, experiments, and research into practical AI work.
          </p>
        </div>
        <a href="#experience" className="inline-flex flex-shrink-0 items-center gap-2 text-sm font-medium text-amber-200 transition-colors hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200">
          Browse all experience <ArrowDownRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {featuredExperiences.map((experience, index) => (
          <article key={experience.id} className="group flex min-h-[360px] flex-col border border-stone-800 bg-[#111111] p-6 transition-colors hover:border-stone-600">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.17em] text-amber-200">Featured / 0{index + 1}</span>
              <span className="font-mono text-xs text-stone-500">{experience.period}</span>
            </div>
            <p className="mt-8 text-sm font-medium text-emerald-300">{experience.company}</p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-stone-50">{experience.role}</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">{experience.description}</p>
            <div className="mt-auto flex items-end justify-between gap-4 border-t border-stone-800 pt-5">
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.slice(0, 3).map((technology) => (
                  <span key={technology} className="border border-stone-800 bg-stone-950 px-2 py-1 text-[11px] text-stone-400">{technology}</span>
                ))}
              </div>
              <a href="#experience" aria-label={`Read more about ${experience.role}`} className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-stone-700 text-stone-300 transition-colors hover:border-amber-200 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200">
                <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedWork;
