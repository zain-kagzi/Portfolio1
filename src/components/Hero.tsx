import React from "react";
import { useApp } from "../context/useApp";
import cv from "../profile/cv.pdf";
import {
  IconDownload,
  IconArrowRight,
  IconSparkle,
  IconReact,
  IconTailwind,
  IconJavaScript,
  IconPhp,
  IconGitHub,
  IconLinkedIn,
  IconInstagram,
  IconDiscord,
} from "./icons/Icons";

const Hero: React.FC = () => {
  const { portfolioData } = useApp();
  const { footerSocials } = portfolioData;

  const getSocialIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("github")) return <IconGitHub size={16} />;
    if (lower.includes("linkedin")) return <IconLinkedIn size={16} />;
    if (lower.includes("instagram")) return <IconInstagram size={16} />;
    if (lower.includes("discord")) return <IconDiscord size={16} />;
    return <IconSparkle size={14} />;
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-28 pb-16 overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Ambient Spotlight Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] sm:w-[850px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,241,53,0.12)_0%,rgba(18,21,27,0.05)_50%,transparent_75%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.04)_0%,transparent_70%)] blur-2xl"
      />

      {/* Grid Pattern Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#242b3815_1px,transparent_1px),linear-gradient(to_bottom,#242b3815_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Intro & Headline */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md mb-6 transition-all hover:border-[var(--color-border-hover)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
            </span>
            <span className="font-mono text-xs text-[var(--color-text-secondary)] tracking-wide">
              Available for full-time & contract roles
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 mb-6">
            <p className="font-mono text-xs sm:text-sm tracking-wider uppercase text-[var(--color-accent)] font-semibold">
              Software Developer & UI/UX Specialist
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-white">Zainuddin </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#e4ff73]">
                Kagzi
              </span>
            </h1>
          </div>

          {/* Supporting Bio */}
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-8 font-sans">
            Crafting high-performance web systems and cinematic digital interfaces.
            Specializing in modern React ecosystems, scalable architectures, and pixel-precise,
            accessible user experiences.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[var(--radius-control)] bg-[var(--color-accent)] text-black font-medium text-sm transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_24px_rgba(200,241,53,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <span>Explore Selected Work</span>
              <IconArrowRight size={16} />
            </a>

            <a
              href={cv}
              download="Zainuddin_Sharf_Kagzi_CV.pdf"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[var(--radius-control)] border border-[var(--color-border)] bg-[var(--color-surface)] text-white font-medium text-sm transition-all duration-200 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <IconDownload size={16} />
              <span>Resume / CV</span>
            </a>
          </div>

          {/* Core Tech Stack Mini-Bar */}
          <div className="pt-6 border-t border-[var(--color-border)]/60 w-full flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
              Core Stack
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-secondary)]">
                <IconReact size={14} className="text-[#61DAFB]" /> React
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-secondary)]">
                <IconJavaScript size={14} className="text-[#F7DF1E]" /> JavaScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-secondary)]">
                <IconTailwind size={14} className="text-[#38BDF8]" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-secondary)]">
                <IconPhp size={14} className="text-[#777BB4]" /> PHP
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[24px] p-2 bg-gradient-to-b from-[var(--color-border-hover)] via-[var(--color-border)] to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Inner Surface Card */}
            <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] flex items-end justify-center group">
              {/* Backlight Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent z-10 opacity-80"
              />

              {/* Portrait Image */}
              <img
                src="img/IMG-20240611-WA0021.png"
                alt="Zainuddin Sharf Kagzi"
                className="relative z-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Floating Engineering Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)]/90 backdrop-blur-md border border-[var(--color-border)] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    Zainuddin Sharf Kagzi
                  </div>
                  <div className="font-mono text-xs text-[var(--color-accent)]">
                    Full-Stack & UI/UX
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {footerSocials.slice(0, 3).map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] transition-colors"
                      aria-label={social.text}
                    >
                      {getSocialIcon(social.text)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
