import React from 'react';
import Section from './Section';
import { PAPERS } from '../constants';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <Section id="papers" title="Publications" subtitle="Academic research and technical papers.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PAPERS.map((paper) => (
          <div key={paper.id} className="glass-panel rounded-xl border-slate-800 hover:border-primary-500/30 transition-all hover:-translate-y-1 duration-300 flex flex-col h-full overflow-hidden group">
            
            {/* Paper Image / Thumbnail */}
            {paper.image && (
              <div className="h-48 overflow-hidden relative border-b border-slate-800 bg-slate-800">
                <div className="absolute top-4 left-4 z-10">
                  <div className="p-2 bg-slate-900/80 backdrop-blur rounded-lg text-primary-400 shadow-lg">
                    <FileText size={20} />
                  </div>
                </div>
                <img 
                  src={paper.image} 
                  alt={paper.title} 
                  onError={(e) => {
                    // Fallback image if local file is not found
                    e.currentTarget.src = "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=800";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
            )}
            
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-start justify-between mb-3">
                  <div className="text-xs text-accent-400 font-mono flex items-center gap-2 bg-accent-500/10 px-2 py-1 rounded">
                    <Calendar size={12} /> {paper.year}
                  </div>
                  {paper.link && paper.link !== '#' && (
                     <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                       <ExternalLink size={20} />
                     </a>
                  )}
               </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {paper.title}
              </h3>
              
              <div className="text-sm text-slate-500 font-medium mb-4">
                Publisher: <span className="text-slate-300">{paper.conference}</span>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {paper.abstract}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50 mt-auto">
                 {paper.tags.map(tag => (
                   <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">
                     #{tag}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;