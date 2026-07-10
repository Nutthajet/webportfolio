import React from 'react';
import Section from './Section';
import { PAPERS } from '../constants';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <Section id="papers" title="Publications" subtitle="NLP and computer vision papers.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PAPERS.map((paper) => (
          <div key={paper.id} className="bg-[#171717] border border-stone-800 hover:border-stone-600 transition-colors flex flex-col h-full overflow-hidden group">
            
            {/* Paper Image / Thumbnail */}
            {paper.image && (
              <div className="h-48 overflow-hidden relative border-b border-stone-800 bg-stone-950">
                <div className="absolute top-4 left-4 z-10">
                  <div className="p-2 bg-stone-950/85 backdrop-blur text-amber-200 shadow-lg">
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
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            )}
            
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-start justify-between mb-3">
                  <div className="text-xs text-emerald-300 font-mono flex items-center gap-2 border border-stone-700 px-2 py-1">
                    <Calendar size={12} /> {paper.year}
                  </div>
                  {paper.link && paper.link !== '#' && (
                     <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-white transition-colors">
                       <ExternalLink size={20} />
                     </a>
                  )}
               </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {paper.title}
              </h3>
              
              <div className="text-sm text-stone-500 font-medium mb-4">
                <span className="text-stone-300">{paper.conference}</span>
              </div>
              
              <p className="text-stone-400 text-sm mb-6 flex-grow leading-relaxed">
                {paper.abstract}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-800 mt-auto">
                 {paper.tags.map(tag => (
                   <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-stone-400 bg-stone-950 px-2 py-1">
                     {tag}
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
