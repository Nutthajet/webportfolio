import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import {
  Activity,
  Aperture,
  BrainCircuit,
  Code,
  Container,
  Database,
  GitBranch,
  Languages,
  LineChart,
  Network,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

interface SkillGroup {
  label: string;
  icon: LucideIcon;
  items: string[];
}

const FOCUS_TAGS = ['RAG', 'CV', 'NLP', 'Dashboards'];

const capabilities: Array<{
  title: string;
  text: string;
  icon: LucideIcon;
  proof: string;
}> = [
  {
    title: 'Retrieval and automation',
    text: 'RAG, vector search, ingestion, and chatbot workflows.',
    icon: Network,
    proof: 'LINE OA news assistant',
  },
  {
    title: 'Vision model pipelines',
    text: 'Image cleaning, OpenCV, detection, and evaluation.',
    icon: Aperture,
    proof: '10,000+ medical images',
  },
  {
    title: 'Applied ML experiments',
    text: 'Features, validation, imbalance handling, and ensembles.',
    icon: LineChart,
    proof: 'Fintech hackathon models',
  },
  {
    title: 'Research communication',
    text: 'Experiment design, results, and technical writing.',
    icon: BrainCircuit,
    proof: 'IEEE-linked papers',
  },
];

const toolGroups: SkillGroup[] = [
  {
    label: 'Languages',
    icon: Code,
    items: SKILLS.filter((skill) => skill.category === 'Programming').map((skill) => skill.name),
  },
  {
    label: 'ML stack',
    icon: Activity,
    items: SKILLS.filter((skill) => skill.category === 'Framework').map((skill) => skill.name),
  },
  {
    label: 'Data and workflow',
    icon: Database,
    items: ['Pandas', 'OpenCV', 'n8n', 'Google Colab'],
  },
  {
    label: 'Shipping habits',
    icon: Container,
    items: ['Docker', 'VS Code', 'Experiment logs', 'Readable handoffs'],
  },
  {
    label: 'Working languages',
    icon: Languages,
    items: SKILLS.filter((skill) => skill.category === 'Languages').map((skill) => skill.name),
  },
];

const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="Engineering Range"
      subtitle="Tools tied to real projects."
      className="bg-[#f4f0e8] text-stone-950"
      dark={false}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
        <div className="border border-stone-300 bg-white p-6 md:p-7">
          <div className="flex items-center gap-3 text-stone-600">
            <Wrench size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">Intern-ready focus</span>
          </div>
          <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight text-stone-950">
            Models are only one part of the work.
          </h3>
          <p className="mt-4 leading-relaxed text-stone-600">
            I move between data prep, experiments, automation, and handoffs.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {FOCUS_TAGS.map((item) => (
              <div key={item} className="border border-stone-300 bg-stone-50 px-3 py-3 font-mono text-sm text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilities.map(({ title, text, icon: Icon, proof }) => (
            <article key={title} className="border border-stone-300 bg-white p-5 transition-colors hover:border-stone-500">
              <div className="flex items-start justify-between gap-4">
                <div className="bg-stone-950 p-2 text-amber-200">
                  <Icon size={20} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone-500">
                  {proof}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-3">
        {toolGroups.map(({ label, icon: Icon, items }) => (
          <div key={label} className="border border-stone-300 bg-white p-4">
            <div className="flex items-center gap-2 text-stone-900">
              <Icon size={16} />
              <h4 className="text-sm font-semibold">{label}</h4>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="border border-stone-200 bg-stone-50 px-2 py-1 text-xs text-stone-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs text-stone-500">
        <GitBranch size={14} />
        <span>Preference: small experiments, honest metrics, usable interfaces.</span>
      </div>
    </Section>
  );
};

export default Skills;
