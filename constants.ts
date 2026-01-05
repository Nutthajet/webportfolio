import { Experience, Paper, Skill, Education, SocialLink } from './types';

// PDF RESUME PATH
export const RESUME_URL = '/image/Resume.pdf'; 

// PROFILE INFO
export const PROFILE = {
  name: "Nutthajet Foythong",
  title: "CEDT Student",
  tagline: "Passionate about AI/ML, Data Science, and FinTech.",
  about: "A first-year Computer Engineering student passionate about AI/ML, Data Science, and FinTech. I have a strong foundation in Python and C++, with hands-on experience in building and optimizing AI/ML models, developing a RAG-based chatbot, and delivering tech-driven solutions through various projects, hackathons and a research internship at NECTEC.",
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
    description: "Developed an automated RAG-based LINE Official Account (LINE OA) system to summarize news from user-submitted links, featuring news summarization, question answering, and daily personalized news updates. The system scrapes and processes news content daily from 14 major Thai news websites.",
    technologies: ["n8n", "Qdrant", "Docker", "LLM: DeepSeek-R1-Distill-Llama-70b (via Groq)", "Embeddings: multilingual-e5-large (via Ollama)"],
    type: "Competition",
    image: "/image/superai.jpg" 
  },
  {
    id: "exp2",
    role: "Finalist (9th Place) - I-Squared Hackathon 2025",
    company: "Chula Engineering",
    period: "2025",
    description: "Built and optimized image classification and object detection pipelines for liver tumor analysis using OpenCV and YOLOv8, handling over 10,000 liver medical images, including data cleaning, preprocessing, training, and evaluation.",
    technologies: ["Computer Vision", "OpenCV", "YOLOv8"],
    type: "Competition",
    image: "/image/isquare.jpg" 
  },
  {
    id: "exp3",
    role: "Participated - AiHack 2025",
    company: "AIRA & AIFUL Company and Chulalongkorn University",
    period: "2025",
    description: "Implemented end-to-end ML pipelines for loan default risk prediction, combining linear and tree-based ensemble models (XGBoost, LightGBM, CatBoost), with data preprocessing, class imbalance mitigation, time-based cross-validation, and ensemble blending for performance optimization.",
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
    description: "Conducted an NLP research project at the Language and Semantic Technology Lab (LST) focused on optimizing statistical machine translation, covering topic formulation, experimentation, and evaluation, and resulting in one conference paper publication.",
    technologies: ["NLP", "Research", "Semantic Tech"],
    type: "Internship",
    image: "/image/nectec.jpg"
  },
  {
    id: "exp7",
    role: "Development of an Automated Delivery Robot Using Image Processing and Deep Learning",
    company: "High School Computer Project, Mahidol Wittayanusorn School",
    period: "2024",
    description: "Built a deep learning–based object detection model for footpath identification and obstacle detection in robotic navigation, deployed with TensorFlow Lite on a Raspberry Pi robot.",
    technologies: ["Deep Learning", "Image Processing", "Robotics"],
    type: "Project",
    image: "/image/project.png"
  },
  {
    id: "exp8",
    role: "Participated in the Robotics, AI, and Coding Camp (Talent RAC 2023)",
    company: "Sirindhorn Science Home",
    period: "2023",
    description: "Received training in core data science processes, including data preparation, modeling, and evaluation, with experience gained through project-based work and a conference paper publication.",
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