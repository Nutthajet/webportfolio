import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { 
  Code, Cpu, Globe, Terminal, Database, Layout, Wrench,
  BookOpen, Container, Workflow, TableProperties, Aperture,
  Figma, BrainCircuit, Activity
} from 'lucide-react';

const Skills: React.FC = () => {
  // Helper to filter skills
  const programming = SKILLS.filter(s => s.category === 'Programming');
  const frameworks = SKILLS.filter(s => s.category === 'Framework');
  const tools = SKILLS.filter(s => s.category === 'Tools');
  const languages = SKILLS.filter(s => s.category === 'Languages');

  const SkillCard = ({ title, icon: Icon, children, className = "" }: any) => (
    <div className={`glass-panel p-6 rounded-2xl border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group h-full ${className}`}>
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700/50 pb-3">
        <div className="p-2 rounded-lg bg-slate-800 text-primary-400 group-hover:text-white group-hover:bg-primary-600 transition-all duration-300">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{title}</h3>
      </div>
      {children}
    </div>
  );

  // Function to return specific icon and color for each tool
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Google Colab': 
        return <BookOpen size={28} className="text-[#F9AB00]" />; // Google Orange/Yellow
      case 'Docker': 
        return <Container size={28} className="text-[#2496ED]" />; // Docker Blue
      case 'n8n': 
        return <Workflow size={28} className="text-[#EA4B71]" />; // n8n Red/Pink
      case 'Figma': 
        return <Figma size={28} className="text-[#F24E1E]" />; // Figma Red-Orange
      case 'Pandas': 
        return <TableProperties size={28} className="text-[#2042a8] dark:text-indigo-400" />; // Pandas Blue
      case 'OpenCV': 
        return <Aperture size={28} className="text-green-500" />; // Vision Green (Symbolic)
      case 'Scikit-learn': 
        return <BrainCircuit size={28} className="text-orange-400" />;
      case 'TensorFlow': 
        return <Activity size={28} className="text-yellow-500" />;
      default: 
        return <Terminal size={28} className="text-slate-500 group-hover:text-slate-300" />;
    }
  };

  return (
    <Section id="skills" title="Technical Arsenal" subtitle="A breakdown of my technical proficiency across different domains.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* 1. Programming Languages - Progress Bars */}
        <div className="lg:col-span-1">
          <SkillCard title="Core Programming" icon={Code}>
            <div className="space-y-5">
              {programming.map((skill) => (
                <div key={skill.name} className="group/item">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300 font-medium group-hover/item:text-white transition-colors">{skill.name}</span>
                    <span className="text-slate-500 font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-600 to-accent-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.3)] transform origin-left transition-transform duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SkillCard>
        </div>

        {/* 2. Frameworks & AI - Tech Badges */}
        <div className="lg:col-span-1">
          <SkillCard title="AI & Frameworks" icon={Cpu}>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((skill) => (
                <div 
                  key={skill.name} 
                  className="relative group/tag cursor-default"
                >
                  <div className="px-3 py-2 bg-slate-800/80 border border-slate-700 text-slate-300 text-sm rounded-lg hover:border-accent-500 hover:text-white hover:bg-slate-800 transition-all duration-300 flex items-center justify-between gap-2">
                    <span>{skill.name}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500/50 group-hover/tag:bg-accent-400 group-hover/tag:shadow-[0_0_8px_rgba(45,212,191,0.6)] transition-all" />
                  </div>
                </div>
              ))}
            </div>
             <div className="mt-6 pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Focusing on Modern AI/ML pipelines, utilizing both classical Machine Learning algorithms and Deep Learning frameworks.
                </p>
             </div>
          </SkillCard>
        </div>

        {/* 3. Human Languages - Flags */}
        <div className="lg:col-span-1">
          <SkillCard title="Languages" icon={Globe}>
             <div className="space-y-4">
               {languages.map(lang => (
                 <div key={lang.name} className="flex items-center gap-4 bg-slate-800/40 p-3 rounded-xl border border-slate-700/30 hover:bg-slate-800 transition-colors group/lang">
                    <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-slate-600 group-hover/lang:border-primary-500 transition-colors shadow-lg">
                       <img 
                          src={lang.name.includes('Thai') ? "https://flagcdn.com/w160/th.png" : "https://flagcdn.com/w160/gb.png"}
                          alt={lang.name}
                          className="w-full h-full object-cover transform group-hover/lang:scale-110 transition-transform duration-500"
                       />
                    </div>
                    <div>
                      <div className="font-bold text-white">{lang.name.split(' ')[0]}</div>
                      <div className="text-xs text-slate-400 group-hover/lang:text-slate-300 transition-colors">
                        {lang.name.includes('TOEFL') ? 'Upper Intermediate (TOEFL-ITP 543)' : 'Native Proficiency'}
                      </div>
                    </div>
                 </div>
               ))}
             </div>
          </SkillCard>
        </div>

        {/* 4. Tools & Utilities - Full Width */}
        <div className="lg:col-span-3">
          <div className="glass-panel p-6 rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-2 mb-4">
               <Wrench size={18} className="text-accent-400" />
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Tools & Technologies</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tools.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-500 hover:bg-slate-700/80 transition-all group cursor-default hover:-translate-y-1 duration-200">
                  <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                     {getToolIcon(skill.name)}
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Skills;