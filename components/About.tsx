import React, { useState } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE, SOCIALS } from '../constants';
import ResumeModal from './ResumeModal';

const About: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const getSocialUrl = (platform: string) => SOCIALS.find(s => s.platform === platform)?.url || '#';

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-2">
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/80 border border-slate-700 text-primary-400 text-sm font-medium font-mono">
              Available for Internship 2025
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              Hello, I'm <br />
              <span className="gradient-text">{PROFILE.name.split(' ')[0]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              {PROFILE.title}
            </p>
          </div>

          <div className="space-y-4 max-w-xl">
            <p className="text-slate-300 text-lg leading-relaxed">
              {PROFILE.about}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              {PROFILE.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-primary-500/20 cursor-pointer"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
            >
              Download Resume <Download size={18} />
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-slate-400">
            <a 
              href={getSocialUrl('GitHub')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href={getSocialUrl('LinkedIn')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${PROFILE.email}`} 
              className="hover:text-primary-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Visual/Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Abstract Tech Shapes */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-[2rem] rotate-6 opacity-20 blur-lg animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-slate-700 rounded-[2rem] -rotate-3 bg-slate-900/50 backdrop-blur-sm"></div>
            
            {/* User Profile Image */}
            <img 
              src="/image/profile.jpg" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover rounded-[2rem] border border-slate-600 shadow-2xl rotate-0 transition-transform hover:rotate-2 duration-500"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/400/400?grayscale"; // Fallback if file not found
              }}
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
               <span className="text-sm font-mono font-bold text-white">AI/ML & Data Enthusiast</span>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default About;