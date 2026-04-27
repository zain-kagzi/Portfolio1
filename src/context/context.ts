import { createContext } from "react";

type Service = {
  icon: string;
  title: string;
  desc: string;
  accent: string;
};

type Skill = {
  name: string;
  pct: number;
  color: string;
};

type Project = {
  title: string;
  tags: string[];
  color: string;
  image: string; // ✅ add
  url: string;
};

type Testimonial = {
  stars: number;
  text: string;
  author: string;
  role: string;
  initials: string;
};

type FooterSocials = {
  text: string,
  url: string
}

type PortfolioData = {
  footerSocials: FooterSocials[];
  navLinks: string[];
  abilities: string[];
  services: Service[];
  skills: Skill[];
  toolIcons: { name: string; icon: string }[];
  projects: Project[];
  testimonial: Testimonial;
  clients: string[];
};

type AppContextType = {
  portfolioData: PortfolioData;
};

export const AppContext = createContext<AppContextType | null>(null);