import React from "react";
import { useApp } from "../context/useApp";
import { useReveal } from "../hooks/useReveal";
import {
  IconCheck,
  IconSparkle,
  IconArrowRight,
  IconLayers,
  IconGauge,
  IconCpu,
} from "./icons/Icons";

const About: React.FC = () => {
  const { portfolioData } = useApp();
  const { abilities } = portfolioData;
  const { ref, visible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-12 bg-[var(--color-bg)] relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <IconSparkle size={12} />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Crafting Scalable Systems & <br className="hidden sm:inline" />
            <span className="text-[var(--color-accent)]">Intuitive User Interfaces</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Bento Tile 1: Main Overview (8 cols on lg) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--color-border-hover)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                  01 / Core Profile
                </span>
                <span className="p-2 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-accent)]">
                  <IconLayers size={18} />
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
                Full-Stack Developer with a Designer's Eye
              </h3>
              <p className="font-sans text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed mb-6">
                I build responsive, robust web applications using React, modern JavaScript, PHP, and MySQL.
                My engineering ethos centers on clean component architectures, robust state workflows, and
                obsessive attention to visual hierarchy and micro-interactions.
              </p>

              {/* Verified Abilities List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--color-border)]/60">
                {abilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-[var(--color-accent)] mt-0.5 shrink-0">
                      <IconCheck size={14} />
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[var(--color-border)]/40 flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--color-text-muted)]">
                Location: Surat, Gujarat, India (Open to Remote)
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--color-accent)] hover:underline"
              >
                <span>Initiate Contact</span>
                <IconArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Bento Tile 2: Architecture & Clean Code (4 cols on lg) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--color-border-hover)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                  02 / Architecture
                </span>
                <span className="p-2 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-accent)]">
                  <IconCpu size={18} />
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3">
                Modular Codebases
              </h3>
              <p className="font-sans text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                Structured with predictable component lifecycles, typed state, and strict separation of concerns.
              </p>

              {/* Code Preview Box */}
              <div className="p-3.5 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-secondary)] overflow-x-auto">
                <div className="text-[var(--color-text-muted)]">// System Architecture</div>
                <div><span className="text-[var(--color-accent)]">const</span> dev = &#123;</div>
                <div className="pl-3">framework: <span className="text-[#61DAFB]">'React 19'</span>,</div>
                <div className="pl-3">backend: <span className="text-[#777BB4]">'PHP / MySQL'</span>,</div>
                <div className="pl-3">styling: <span className="text-[#38BDF8]">'Tailwind CSS'</span>,</div>
                <div className="pl-3">performance: <span className="text-[var(--color-accent)]">'Sub-100ms'</span></div>
                <div>&#125;;</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/40 font-mono text-xs text-[var(--color-text-muted)]">
              Deterministic, testable code
            </div>
          </div>

          {/* Bento Tile 3: Performance & Optimization (5 cols on lg) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--color-border-hover)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                  03 / Performance
                </span>
                <span className="p-2 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-accent)]">
                  <IconGauge size={18} />
                </span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-3">
                Speed & Responsiveness First
              </h3>
              <p className="font-sans text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                Every layout is precision-tested across mobile viewports (375px+), ensuring fast paint times, smooth 60fps transitions, and accessible touch targets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--color-border)]/40">
              <div className="p-3 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
                <div className="font-display font-extrabold text-xl text-[var(--color-accent)]">100%</div>
                <div className="font-mono text-xs text-[var(--color-text-secondary)]">Responsive Layouts</div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
                <div className="font-display font-extrabold text-xl text-[var(--color-accent)]">Clean</div>
                <div className="font-mono text-xs text-[var(--color-text-secondary)]">Semantic HTML5</div>
              </div>
            </div>
          </div>

          {/* Bento Tile 4: Collaborative Delivery (7 cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-[var(--radius-card)] bg-gradient-to-br from-[var(--color-surface-elevated)] to-[var(--color-surface)] border border-[var(--color-border)] flex flex-col justify-between hover:border-[var(--color-border-hover)] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                  04 / Collaboration
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                  Ready to Build
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                Ready to transform ideas into tangible software?
              </h3>
              <p className="font-sans text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 max-w-xl">
                Whether creating bespoke client portfolios, web management portals, or interactive web applications, I bring disciplined execution and high design standards.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-control)] bg-[var(--color-accent)] text-black font-semibold text-xs transition-all hover:brightness-110"
              >
                <span>Start a Project Conversation</span>
                <IconArrowRight size={14} />
              </a>
              <span className="font-mono text-xs text-[var(--color-text-muted)]">
                Direct response within 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;