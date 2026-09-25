import React from "react";
import { useApp } from "../context/useApp";
import {
  IconGitHub,
  IconLinkedIn,
  IconInstagram,
  IconDiscord,
  IconSparkle,
} from "./icons/Icons";

const Newsletter: React.FC = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 px-4 sm:px-6 lg:px-12 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Colophon */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="font-display font-black text-lg text-white tracking-wider">
            ZAINUDDIN <span className="text-[var(--color-accent)]">KAGZI</span>
          </div>
          <p className="font-mono text-xs text-[var(--color-text-muted)]">
            Full-Stack Software Developer & UI/UX Specialist
          </p>
        </div>

        {/* Social Dock */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {footerSocials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[var(--radius-control)] bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-mono text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-elevated)] transition-all"
              aria-label={social.text}
            >
              {getSocialIcon(social.text)}
              <span>{social.text}</span>
            </a>
          ))}
        </div>

        {/* Back to Top & Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1.5">
          <button
            onClick={scrollToTop}
            className="font-mono text-xs text-[var(--color-accent)] hover:underline inline-flex items-center gap-1 focus-visible:outline-none"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
          <p className="font-mono text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Zainuddin Sharf Kagzi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Newsletter;