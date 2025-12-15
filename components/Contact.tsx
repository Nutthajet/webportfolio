import React from 'react';
import Section from './Section';
import { PROFILE, SOCIALS } from '../constants';
import { Mail, MapPin, Github, Linkedin, BookOpen, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  BookOpen: <BookOpen size={20} />,
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Open for opportunities. Let's build something intelligent.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Info */}
        <div className="space-y-8">
           <div className="glass-panel p-8 rounded-2xl border-slate-800 space-y-6">
             <div className="flex items-start gap-4">
               <div className="p-3 bg-slate-800 rounded-lg text-primary-400">
                 <Mail size={24} />
               </div>
               <div>
                 <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                 <a href={`mailto:${PROFILE.email}`} className="text-xl text-white font-medium hover:text-primary-400 transition-colors break-all">
                   {PROFILE.email}
                 </a>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="p-3 bg-slate-800 rounded-lg text-accent-400">
                 <MapPin size={24} />
               </div>
               <div>
                 <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                 <p className="text-xl text-white font-medium">
                   {PROFILE.location}
                 </p>
               </div>
             </div>
           </div>

           <div className="flex gap-4">
             {SOCIALS.map(social => (
               <a 
                 key={social.platform}
                 href={social.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1 bg-slate-800 hover:bg-slate-700 py-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 transition-all group"
               >
                 <span className="text-slate-400 group-hover:text-white transition-colors">
                   {iconMap[social.icon] || <ArrowUpRight size={20} />}
                 </span>
                 <span className="text-sm font-medium text-slate-300">{social.platform}</span>
               </a>
             ))}
           </div>
        </div>

        {/* Footer/Note */}
        <div className="flex flex-col justify-between h-full space-y-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
             <h3 className="text-2xl font-bold text-white mb-4">Why Hire Me?</h3>
             <ul className="space-y-3 text-slate-300">
               <li className="flex items-start gap-2">
                 <span className="text-primary-500 mt-1">▹</span> Strong foundation in Data Science and AI/ML.
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-primary-500 mt-1">▹</span> Extensive experience from projects, hackathons, and internship.
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-primary-500 mt-1">▹</span> Passionate about the intersection of Business, Data, and Technology.
               </li>
             </ul>
          </div>
          
          <div className="text-center md:text-right pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Contact;