export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Programming' | 'Languages' | 'Tools' | 'Framework' | 'Concept';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'Internship' | 'Project' | 'Competition';
  image?: string; // New field for project image
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
  gpa?: string;
  image?: string; // Added image field for school logo/photo
}

export interface Paper {
  id: string;
  title: string;
  conference: string;
  year: string;
  abstract: string;
  link?: string;
  tags: string[];
  image?: string; // New field for paper image
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide icon name
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}