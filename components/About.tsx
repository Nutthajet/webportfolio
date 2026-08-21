import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { PROFILE, SOCIALS } from '../constants';
import ResumeModal from './ResumeModal';

const HERO_STATS = [
  { value: '5', label: 'AI hackathons' },
  { value: '2', label: 'IEEE-linked papers' },
];

const About: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const getSocialUrl = (platform: string) => SOCIALS.find((social) => social.platform === platform)?.url || '#';

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#work');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden bg-[linear-gradient(180deg,#111111_0%,#16140f_56%,#111827_100%)]">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-stone-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-16 items-center z-10">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 border border-stone-700 bg-stone-950/70 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-stone-300">
              <span className="h-2 w-2 bg-emerald-400" />
              Open to AI engineering internships
            </div>
            <div className="space-y-3">
              <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-stone-50 leading-[0.95]">
                Nutthajet Foythong
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-stone-300 leading-relaxed">
                {PROFILE.title} focused on RAG, CV, NLP, and data products.
              </p>
            </div>
          </div>

          <div className="max-w-2xl border-l border-amber-300/50 pl-5 space-y-4">
            <p className="text-stone-300 text-base md:text-lg leading-relaxed">
              {PROFILE.about}
            </p>
            <p className="text-stone-400 leading-relaxed">
              {PROFILE.tagline}
            </p>
          </div>

          <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            {HERO_STATS.map(({ value, label }) => (
              <div key={label} className="border border-stone-800 bg-stone-950/45 p-4">
                <div className="font-mono text-2xl text-amber-200">{value}</div>
                <div className="mt-1 text-xs leading-relaxed text-stone-400">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a 
              href="#work" 
              onClick={scrollToWork}
              className="px-5 py-3 bg-amber-200 hover:bg-amber-100 text-stone-950 font-semibold transition-all flex items-center gap-2 cursor-pointer"
            >
              View selected work <ArrowRight size={18} />
            </a>
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-5 py-3 bg-transparent hover:bg-stone-900 text-stone-100 font-medium border border-stone-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              View resume <Download size={18} />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-2 text-stone-400">
            <span className="inline-flex items-center gap-2 text-sm">
              <MapPin size={16} />
              {PROFILE.location}
            </span>
            <a 
              href={getSocialUrl('GitHub')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href={getSocialUrl('LinkedIn')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-amber-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href={`mailto:${PROFILE.email}`} 
              className="hover:text-emerald-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[420px]">
            <div className="absolute -left-4 top-8 h-full w-full border border-stone-700" />
            <div className="relative border border-stone-700 bg-stone-950 p-3 shadow-2xl shadow-black/30">
              <img 
                src="/image/profile.jpg" 
                alt="Nutthajet Foythong" 
                className="aspect-[4/5] w-full object-cover grayscale-[18%] contrast-105"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/420/520?grayscale";
                }}
              />
              <div className="mt-3 flex items-start justify-between gap-4 border-t border-stone-800 pt-3">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">Current signal</div>
                  <div className="mt-1 text-stone-100">RAG + CV + NLP research</div>
                </div>
                <Sparkles className="mt-1 text-amber-200" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default About;
