import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiDatabase,
  FiServer,
  FiTerminal,
  FiLayers,
  FiBox,
  FiCloud,
  FiTool,
} from "react-icons/fi";

export const PERSONAL_INFO = {
  name: "Edvin Mehaj",
  role: "Computer Engineer | Data & AI Systems",
  tagline: "Building scalable backend systems and data-driven applications",
  email: "edi.mehaj12@gmail.com",
  github: "https://github.com/Edi12M",
  linkedin: "https://www.linkedin.com/in/edvin-mehaj-08a926335",
};

export const ABOUT_TEXT = {
  title: "About Me",
  description: `I am a Computer Engineer with a strong foundation in backend development and a growing focus on data and AI systems. I build scalable backend architectures while leveraging data analysis and intelligent models to create reliable, real-world applications. My goal is to design systems that are both technically robust and data-driven.`,
  highlights: [
    "Designing scalable REST APIs and backend systems",
    "Data analysis and intelligent application development",
    "Database modeling, optimization, and SQL proficiency",
    "Clean architecture and maintainable code practices",
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Skin Cancer Classification System",
    description:
      "A machine learning-powered web application that classifies skin lesions as benign or malignant using a convolutional neural network trained on the HAM10000 dataset.",
    tech: [
      "Python",
      "TensorFlow",
      "ResNet50",
      "Rules-Based approach",
      "Keras",
      "Flask",
      "HTML/CSS/JavaScript",
    ],
    github: "https://github.com/Edi12M/skinClassiffier",
    demo: "https://skin-cancer-classifier04.streamlit.app/",
    featured: true,
    color: "purple",
  },
  {
    id: 2,
    title: "CampusMediaBackend",
    description:
      "A scalable REST API backend for a campus social media platform. Features secure authentication, file uploads, real-time notifications, and comprehensive API documentation.",
    tech: ["ASP.NET Core", "REST API", "JWT", "MySQL", "Swagger"],
    github: "https://github.com/Edi12M/CampusMediaBackend",
    demo: null,
    featured: true,
    color: "cyan",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with a .NET Core backend and React frontend.Username: Test Password: Test123 to login as admin and manage products, categories, and orders.  Integrated JWT for authentication.",
    tech: [".NET Core", "React", "MySQL", "Stripe API", "JWT Authentication"],
    github: "https://github.com/Edi12M/onlineShop",
    demo: "https://e-commerce-by-emehaj.netlify.app/",
    featured: true,
    color: "pink",
  },
];

export const SKILLS = {
  backend: {
    title: "Backend",
    icon: FiServer,
    items: [
      { name: "C# / .NET", icon: FiCode, level: 90 },
      { name: "ASP.NET Core", icon: FiLayers, level: 85 },
      { name: "REST APIs", icon: FiBox, level: 90 },
      {name: "Java", icon: FiCode, level: 80 },
      { name: "Node.js", icon: FiServer, level: 70 },
      { name: "Python", icon: FiTerminal, level: 80 },
    ],
  },
  frontend: {
    title: "Frontend",
    icon: FiCode,
    items: [
      { name: "React", icon: FiCode, level: 80 },
      { name: "JavaScript", icon: FiCode, level: 85 },
      { name: "TypeScript", icon: FiCode, level: 70 },
      { name: "Tailwind CSS", icon: FiLayers, level: 85 },
      {name: "Bootstrap", icon: FiLayers, level: 75 },
      {name: "Ajax/JQuery", icon: FiLayers, level: 80 },
    ],
  },
  dataAnalyst: {
    title: "Data & AI",
    icon: FiDatabase,
    items: [
      { name: "MySQL", icon: FiDatabase, level: 90 },
      { name: "Python", icon: FiTerminal, level: 80 },
      { name: "Supervised Learning", icon: FiDatabase, level: 85 },
      { name: "Clustering", icon: FiDatabase, level: 75 },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    icon: FiTool,
    items: [
      { name: "Git", icon: FiGithub, level: 90 },
      { name: "Docker", icon: FiBox, level: 70 },
      { name: "Azure", icon: FiCloud, level: 65 },
      { name: "VS Code", icon: FiTerminal, level: 95 },
      { name: "Postman", icon: FiTool, level: 85 },
    ],
  },
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", icon: FiGithub, href: PERSONAL_INFO.github },
  { name: "LinkedIn", icon: FiLinkedin, href: PERSONAL_INFO.linkedin },
  { name: "Email", icon: FiMail, href: `mailto:${PERSONAL_INFO.email}` },
];
