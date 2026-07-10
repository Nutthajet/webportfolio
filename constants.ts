import { Experience, Paper, Skill, Education, SocialLink } from './types';

// PDF RESUME PATH
export const RESUME_URL = '/image/Resume.pdf'; 

// PROFILE INFO
export const PROFILE = {
  name: "Nutthajet Foythong",
  title: "AI Engineering Intern Candidate",
  tagline: "Applied AI, from data prep to usable systems.",
  about: "CEDT student at Chulalongkorn University working on RAG, computer vision, NLP, and decision-support tools.",
  email: "tin.nutthajet@gmail.com",
  phone: "065-441-4539",
  location: "Bangkok, Thailand"
};

// SKILLS
export const SKILLS: Skill[] = [
  { name: "Python", level: 80, category: "Programming" },
  { name: "C++", level: 85, category: "Programming" },
  { name: "Thai (Native)", level: 100, category: "Languages" },
  { name: "English (TOEFL-ITP 543)", level: 75, category: "Languages" },
  { name: "Pandas", level: 85, category: "Tools" },
  { name: "OpenCV", level: 80, category: "Tools" },
  { name: "Visual Studio Code", level: 80, category: "Tools" },
  { name: "Google Colab", level: 90, category: "Tools" },
  { name: "Docker", level: 80, category: "Tools" },
  { name: "n8n", level: 80, category: "Tools" },
  { name: "Scikit-learn", level: 80, category: "Framework" },
  { name: "TensorFlow", level: 75, category: "Framework" },
];

// EXPERIENCE
// TIP: To add your own images, place files with these names in the public folder (same folder as index.html)
export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Regional Honorable Mention - SuperAI Engineer Season 5",
    company: "Track AI Innovator",
    period: "2025",
    description: "Built a RAG-based LINE OA for news summaries, Q&A, and daily updates from 14 Thai news sites.",
    technologies: ["n8n", "Qdrant", "Docker", "LLM: DeepSeek-R1-Distill-Llama-70b (via Groq)", "Embeddings: multilingual-e5-large (via Ollama)"],
    type: "Competition",
    image: "/image/superai.jpg" 
  },
  {
    id: "exp2",
    role: "Finalist (9th Place) - I-Squared Hackathon 2025",
    company: "Chula Engineering",
    period: "2025",
    description: "Built CV pipelines for liver tumor analysis across 10,000+ medical images.",
    technologies: ["Computer Vision", "OpenCV", "YOLOv8"],
    type: "Competition",
    image: "/image/isquare.jpg" 
  },
  {
    id: "exp3",
    role: "Participated - AiHack 2025",
    company: "AIRA & AIFUL Company and Chulalongkorn University",
    period: "2025",
    description: "Built loan-default risk models with preprocessing, validation, imbalance handling, and ensembles.",
    technologies: ["Machine Learning", "Risk Prediction", "Ensemble Methods"],
    type: "Competition",
    image: "/image/aihack.jpg"
  },
  {
    id: "exp4",
    role: "Winner - Modchomphu Hackathon 2025",
    company: "Chula & KMUTT Engineering",
    period: "2025",
    description: "Built a heat-stress alert app using IoT and weather-based THI signals.",
    technologies: ["IoT", "AI", "Real-time Monitoring"],
    type: "Competition",
    image: "/image/modchomphu.jpg"
  },
  {
    id: "exp5",
    role: "3rd Place Digital Innovation Track - CP Cup 2025",
    company: "Charoen Pokphand Group Co., Ltd",
    period: "2025",
    description: "Built a dashboard recommending inter-branch retail product transfers.",
    technologies: ["Data Analysis", "Dashboard", "Optimization"],
    type: "Competition",
    image: "/image/cpcup.jpg"
  },
  {
    id: "exp6",
    role: "Research Internship Student",
    company: "NECTEC, NSTDA",
    period: "2024",
    description: "Researched Isarn-Thai statistical machine translation at NECTEC LST.",
    technologies: ["NLP", "Research", "Semantic Tech"],
    type: "Internship",
    image: "/image/nectec.jpg"
  },
  {
    id: "exp7",
    role: "Development of an Automated Delivery Robot Using Image Processing and Deep Learning",
    company: "High School Computer Project, Mahidol Wittayanusorn School",
    period: "2024",
    description: "Built footpath and obstacle detection for a Raspberry Pi delivery robot.",
    technologies: ["Deep Learning", "Image Processing", "Robotics"],
    type: "Project",
    image: "/image/project.png"
  },
  {
    id: "exp8",
    role: "Participated in the Robotics, AI, and Coding Camp (Talent RAC 2023)",
    company: "Sirindhorn Science Home",
    period: "2023",
    description: "Practiced data preparation, modeling, evaluation, and technical writing.",
    technologies: ["Data Science", "Project", "Conference Paper"],
    type: "Project",
    image: "/image/rac.jpg"
  }
];

// EDUCATION
export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "B.Eng. in Computer Engineering and Digital Technology",
    institution: "Chulalongkorn University",
    year: "2025 - Present",
    details: "Faculty of Engineering",
    image: "/image/Chula-logo.png" // Placeholder path
  },
  {
    id: "edu2",
    degree: "High School",
    institution: "Mahidol Wittayanusorn School",
    year: "2022 - 2025",
    gpa: "GPAX: 3.90",
    image: "/image/Mwit-logo.png" // Placeholder path
  }
];

// PAPERS
export const PAPERS: Paper[] = [
  {
    id: "paper1",
    title: "Optimizing Isarn-Thai SMT: Word-Based Alignment Adjustment through Linguistic Knowledge",
    conference: "IEEE | iSAI-NLP 2024",
    year: "2024",
    abstract: "A study on optimizing Machine Translation for Isarn-Thai language pairs using semantic similarity and linguistic knowledge.",
    tags: ["Machine Translation", "Word Embedding", "NLP"],
    link: "#",
    image: "/image/paper_smt.png"
  },
  {
    id: "paper2",
    title: "PharmaDetect: Drug Identification and Guidance through Visual Recognition",
    conference: "IEEE | ICCI 2024",
    year: "2024",
    abstract: "Drug identification system using Feature Extraction, OpenCV, and Random Forest algorithms to assist in visual recognition of pharmaceuticals.",
    tags: ["Feature Extraction", "OpenCV", "Random Forest"],
    link: "#",
    image: "/image/paper_drug.png"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Nutthajet", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/Nutthajet", icon: "Linkedin" },
  { platform: "Email", url: "mailto:tin.nutthajet@gmail.com", icon: "Mail" },
];
