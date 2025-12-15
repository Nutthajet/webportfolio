import { Experience, Paper, Skill, Education, SocialLink } from './types';

// PDF RESUME PATH
export const RESUME_URL = '/image/Resume.pdf'; 

// PROFILE INFO
export const PROFILE = {
  name: "Nutthajet Foythong",
  title: "CEDT Student",
  tagline: "Passionate about programming, AI/ML, Data Science, Data Engineering, and FinTech.",
  about: "A first-year Computer Engineering student at Chulalongkorn University. I have a strong foundation in Python and C++, with hands-on experience in building AI/ML models, RAG chatbots, and IoT solutions through various hackathons and internship.",
  email: "tin.nutthajet@gmail.com",
  phone: "065-441-4539",
  location: "Bangkok, Thailand"
};

// SKILLS
export const SKILLS: Skill[] = [
  { name: "Python", level: 75, category: "Programming" },
  { name: "C++", level: 85, category: "Programming" },
  { name: "Thai (Native)", level: 100, category: "Languages" },
  { name: "English (TOEFL-ITP 543)", level: 75, category: "Languages" },
  { name: "Google Colab", level: 90, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "n8n", level: 65, category: "Tools" },
  { name: "Figma", level: 80, category: "Tools" },
  { name: "Pandas", level: 85, category: "Tools" },
  { name: "OpenCV", level: 80, category: "Tools" },
  { name: "Scikit-learn", level: 80, category: "Framework" },
  { name: "TensorFlow", level: 75, category: "Framework" },
];

// EXPERIENCE
// TIP: To add your own images, place files with these names in the public folder (same folder as index.html)
export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "Regional Honorable Mention - SuperAI Innovator 2025",
    company: "Super AI Engineer Season 5",
    period: "2025",
    description: "Built an automated LINE OA (chatbot) for news summarization, Q&A and real-time news alerts using LLM-Deepseek, RAG, and Qdrant.",
    technologies: ["Deepseek", "RAG", "Qdrant", "LINE OA"],
    type: "Competition",
    image: "/image/superai.jpg" 
  },
  {
    id: "exp2",
    role: "Finalist (9th Place) - I-Squared Hackathon 2025",
    company: "Chula Engineering",
    period: "2025",
    description: "Developed image classification and object detection models for liver tumors using OpenCV and YOLOv8.",
    technologies: ["OpenCV", "YOLOv8", "Computer Vision"],
    type: "Competition",
    image: "/image/isquare.jpg" 
  },
  {
    id: "exp3",
    role: "Participated - AiHack 2025",
    company: "AIRA & AIFUL Company and Chulalongkorn University",
    period: "2025",
    description: "Developed machine learning models to predict customer loan default risk, leveraging both classical algorithms and tree-based ensemble methods.",
    technologies: ["Machine Learning", "Risk Prediction", "Ensemble Methods"],
    type: "Competition",
    image: "/image/aihack.jpg"
  },
  {
    id: "exp4",
    role: "Winner - Modchomphu Hackathon 2025",
    company: "Chula & KMUTT Engineering",
    period: "2025",
    description: "Heat Stress Alert - AI-powered livestock monitoring application using real-time THI from IoT sensors and meteorological data.",
    technologies: ["IoT", "AI", "Real-time Monitoring"],
    type: "Competition",
    image: "/image/modchomphu.jpg"
  },
  {
    id: "exp5",
    role: "3rd Place Digital Innovation Track - CP Cup 2025",
    company: "Charoen Pokphand Group Co., Ltd",
    period: "2025",
    description: "CP Retail Store Inter-branch Transfer DSS - a dashboard platform recommending optimal product transfers based on sales data.",
    technologies: ["Data Analysis", "Dashboard", "Optimization"],
    type: "Competition",
    image: "/image/cpcup.jpg"
  },
  {
    id: "exp6",
    role: "Research Internship Student",
    company: "NECTEC, NSTDA",
    period: "2024",
    description: "Conducted an independent research project from formulating the topic to publishing the final paper as a student researcher at the Language and Semantic Technology Lab (LST).",
    technologies: ["NLP", "Research", "Semantic Tech"],
    type: "Internship",
    image: "/image/nectec.jpg"
  },
  {
    id: "exp7",
    role: "Development of an Automated Delivery Robot Using Image Processing and Deep Learning",
    company: "High School Computer Project, Mahidol Wittayanusorn School",
    period: "2024",
    description: "Built an object-detection model to identify footpath for robotic navigation and obstacle detection.",
    technologies: ["Deep Learning", "Image Processing", "Robotics"],
    type: "Project",
    image: "/image/project.png"
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