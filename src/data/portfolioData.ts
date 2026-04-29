const portfolioData = {
  footerSocials: [
    { text: "INSTAGRAM", url: "https://www.instagram.com/zain_kagzi/" },
    {text:"LINKEDIN", url: "https://www.linkedin.com/in/zain-kagzi/"},
    {text:"GITHUB", url: "https://github.com/zain-kagzi"},
    {text:"DISCORD", url: "https://discordapp.com/users/1495451111522566196"}
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
      title: "UI/UX Design",
      desc: "Designing clean, user-friendly interfaces with a focus on usability, accessibility, and modern design trends.",
      accent: "#c6f135",
    },
    {
      icon: "💻",
      title: "Frontend Development",
      desc: "Building responsive and interactive web interfaces using modern technologies like React and Tailwind CSS.",
      accent: "#7c6af1",
    },
    {
      icon: "⚡",
      title: "Responsive Design",
      desc: "Creating layouts that work seamlessly across all devices, ensuring a consistent user experience.",
      accent: "#f1c135",
    },
    {
      icon: "🚀",
      title: "Web Performance",
      desc: "Optimizing websites for speed and performance to deliver smooth and efficient user experiences.",
      accent: "#35c6f1",
    },
    {
      icon: "🧩",
      title: "Component-Based UI",
      desc: "Developing reusable and scalable UI components for maintainable and efficient codebases.",
      accent: "#c6f135",
    },
    {
      icon: "🎯",
      title: "Problem Solving",
      desc: "Approaching development with a problem-solving mindset to create practical and effective solutions.",
      accent: "#f18835",
    },
  ],
  skills: [
    { name: "HTML", pct: 90, color: "#c6f135" },
    { name: "CSS / Tailwind", pct: 85, color: "#7c6af1" },
    { name: "JavaScript", pct: 80, color: "#f1a135" },
    { name: "React.js", pct: 75, color: "#35c6f1" },
    { name: "API Integration", pct: 70, color: "#f18835" },
  ],
  toolIcons: [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
  ],
  projects: [
    // {
    //   title: "Restaurant Management System",
    //   tags: ["UI/UX", "Design", "PHP", "AJAX"],
    //   color: "#7c6af1",
    //   image: "img/project1.png",
    //   url: "https://restauranters.infinityfree.me/",
    // },
    {
      title: "Responsive Car Project",
      tags: ["HTML", "Tailwind CSS", "JavaScript"],
      color: "#c6f135",
      image: "img/project2.png",
      url: "https://zain-kagzi.github.io/car/",
    },
    {
      title: "Weather Detector App",
      tags: ["UI/UX", "API Integration"],
      color: "#f18835",
      image: "img/project3.png",
      url: "https://zain-kagzi.github.io/weather-app/",
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
