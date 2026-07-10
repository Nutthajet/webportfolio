import React from 'react';
import Section from './Section';
import { PROFILE, SOCIALS } from '../constants';
import { ArrowUpRight, BookOpen, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  BookOpen: <BookOpen size={20} />,
  Mail: <Mail size={20} />,
};

const CONTACT_TOPICS = [
  'RAG news assistant',
  'Medical image pipelines',
  'Risk prediction models',
];

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to AI/ML internship roles."
      className="bg-[#f4f0e8] text-stone-950"
      dark={false}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8">
        <div className="border border-stone-300 bg-white p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500">Best way to reach me</p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-4 inline-flex max-w-full items-center gap-3 text-2xl md:text-4xl font-semibold tracking-tight text-stone-950 hover:text-emerald-700"
          >
            <Mail className="hidden sm:block flex-shrink-0" size={28} />
            <span className="break-all">{PROFILE.email}</span>
          </a>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-stone-300 bg-stone-50 p-4">
              <div className="flex items-center gap-2 text-stone-500">
                <MapPin size={16} />
                <span className="font-mono text-xs uppercase tracking-[0.16em]">Location</span>
              </div>
              <p className="mt-2 text-stone-900">{PROFILE.location}</p>
            </div>
            <div className="border border-stone-300 bg-stone-50 p-4">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-stone-500">Working style</div>
              <p className="mt-2 text-stone-900">Experiment-driven. Clear handoffs.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-stone-300 bg-white p-6">
            <h3 className="text-xl font-semibold text-stone-950">Ask me about</h3>
            <ul className="mt-5 space-y-3 text-stone-700">
              {CONTACT_TOPICS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-stone-300 bg-white p-4 text-stone-700 transition-colors hover:border-stone-500 hover:text-stone-950"
                aria-label={social.platform}
              >
                <span className="block">{iconMap[social.icon] || <ArrowUpRight size={20} />}</span>
                <span className="mt-3 block text-sm font-medium">{social.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-stone-300 pt-5 text-sm text-stone-500">
        &copy; {new Date().getFullYear()} {PROFILE.name}. Built with React, TypeScript, and Tailwind.
      </div>
    </Section>
  );
};

export default Contact;
