export interface ServiceItem {
  icon: string;
  iconKey: "design" | "code" | "devices" | "gauge" | "layers" | "cpu";
  title: string;
  desc: string;
  accent: string;
}

export interface ToolItem {
  name: string;
  icon: string;
  iconKey: "react" | "javascript" | "tailwind" | "git" | "github" | "php";
}

export interface SkillItem {
  name: string;
  pct: number;
  color: string;
}

export interface ProjectItem {
  title: string;
  tags: string[];
  color: string;
  image: string;
  url: string;
  github?: string;
}

export interface SocialItem {
  text: string;
  url: string;
}

export interface PortfolioData {
  footerSocials: SocialItem[];
  navLinks: string[];
  abilities: string[];
  services: ServiceItem[];
  skills: SkillItem[];
  toolIcons: ToolItem[];
  projects: ProjectItem[];
  testimonial: {
    stars: number;
    text: string;
    author: string;
    role: string;
    initials: string;
  };
  clients: string[];
}

const portfolioData: PortfolioData = {
  footerSocials: [
    { text: "INSTAGRAM", url: "https://www.instagram.com/zain_kagzi/" },
    { text: "LINKEDIN", url: "https://www.linkedin.com/in/zain-kagzi/" },
    { text: "GITHUB", url: "https://github.com/zain-kagzi" },
    { text: "DISCORD", url: "https://discordapp.com/users/1495451111522566196" },
  ],
  navLinks: [
    "About",
    "Services",
    "Skills",
    "Projects",
    "Contact",
  ],
  abilities: [
    "FULL STACK DEVELOPMENT",
    "FRONTEND (React, JS, Tailwind)",
    "API INTEGRATION",
    "RESPONSIVE DESIGN",
  ],
  services: [
    {
      icon: "🎨",
      iconKey: "design",
      title: "UI/UX Design",
      desc: "Designing clean, user-friendly interfaces with a focus on usability, accessibility, and modern design trends.",
      accent: "#c8f135",
    },
    {
      icon: "💻",
      iconKey: "code",
      title: "Frontend Development",
      desc: "Building responsive and interactive web interfaces using modern technologies like React and Tailwind CSS.",
      accent: "#c8f135",
    },
    {
      icon: "⚡",
      iconKey: "devices",
      title: "Responsive Design",
      desc: "Creating layouts that work seamlessly across all devices, ensuring a consistent user experience.",
      accent: "#c8f135",
    },
    {
      icon: "🚀",
      iconKey: "gauge",
      title: "Web Performance",
      desc: "Optimizing websites for speed and performance to deliver smooth and efficient user experiences.",
      accent: "#c8f135",
    },
    {
      icon: "🧩",
      iconKey: "layers",
      title: "Component-Based UI",
      desc: "Developing reusable and scalable UI components for maintainable and efficient codebases.",
      accent: "#c8f135",
    },
    {
      icon: "🎯",
      iconKey: "cpu",
      title: "Problem Solving",
      desc: "Approaching development with a problem-solving mindset to create practical and effective solutions.",
      accent: "#c8f135",
    },
  ],
  skills: [
    { name: "HTML", pct: 90, color: "#c8f135" },
    { name: "CSS / Tailwind", pct: 85, color: "#c8f135" },
    { name: "JavaScript", pct: 80, color: "#c8f135" },
    { name: "React.js", pct: 75, color: "#c8f135" },
    { name: "API Integration", pct: 70, color: "#c8f135" },
  ],
  toolIcons: [
    { name: "React", icon: "⚛️", iconKey: "react" },
    { name: "JavaScript", icon: "🟨", iconKey: "javascript" },
    { name: "Tailwind CSS", icon: "💨", iconKey: "tailwind" },
    { name: "Git", icon: "🔧", iconKey: "git" },
    { name: "GitHub", icon: "🐙", iconKey: "github" },
    { name: "PHP & MySQL", icon: "🐘", iconKey: "php" },
  ],
  projects: [
    {
      title: "Restaurant Management System",
      tags: ["UI/UX", "Design", "PHP", "AJAX", "MySQL"],
      color: "#c8f135",
      image: "img/project1.png",
      url: "https://restauranters.infinityfree.me/",
      github: "https://github.com/zain-kagzi",
    },
    {
      title: "Responsive Car Showcase",
      tags: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive"],
      color: "#c8f135",
      image: "img/project2.png",
      url: "https://zain-kagzi.github.io/car/",
      github: "https://github.com/zain-kagzi/car",
    },
    {
      title: "Weather Detector App",
      tags: ["UI/UX", "API Integration", "JavaScript", "Weather API"],
      color: "#c8f135",
      image: "img/project3.png",
      url: "https://zain-kagzi.github.io/weather-app/",
      github: "https://github.com/zain-kagzi/weather-app",
    },
  ],
  testimonial: {
    stars: 5,
    text: "Working with Alex was an absolute pleasure! Their keen eye for detail and user-centric approach truly elevated our project. From start to finish, they guided us seamlessly through the design & development process, delivering results that exceeded our expectations.",
    author: "Oliver Giraud",
    role: "CEO, Lava Ltd",
    initials: "OG",
  },
  clients: ["Bchnvft", "Lightbox", "FeatheDev", "Spherule", "GlobalBank"],
};

export default portfolioData;
