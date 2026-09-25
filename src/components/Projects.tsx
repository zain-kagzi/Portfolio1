import React, { useState } from "react";
import { useApp } from "../context/useApp";
import { useReveal } from "../hooks/useReveal";
import {
  IconExternalLink,
  IconGitHub,
  IconSparkle,
} from "./icons/Icons";

const Projects: React.FC = () => {
  const { portfolioData } = useApp();
  const { projects } = portfolioData;
  const { ref, visible } = useReveal();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-12 bg-[var(--color-bg)] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] font-mono text-xs uppercase tracking-widest mb-4">
              <IconSparkle size={12} />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Featured Engineering & <br className="hidden sm:inline" />
              <span className="text-[var(--color-accent)]">Web Deployments</span>
            </h2>
          </div>
          <p className="font-sans text-[var(--color-text-secondary)] text-sm sm:text-base max-w-md">
            Production-tested applications focusing on responsive layouts, clean database schemas, and intuitive user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={project.title}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isHovered
                    ? "border-[var(--color-border-hover)] -translate-y-1 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    : ""
                }`}
              >
                {/* Spotlight Radial Background */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.12)_0%,transparent_70%)] blur-2xl transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Project Image Viewport */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--color-surface-elevated)] border-b border-[var(--color-border)]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-4xl text-[var(--color-text-muted)]">
                      {project.title.substring(0, 2).toUpperCase()}
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-60"
                  />

                  {/* Project Index Badge */}
                  <div className="absolute top-4 left-4 font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] text-[var(--color-accent)]">
                    0{index + 1}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>

                  {/* Links and CTAs */}
                  <div className="pt-6 mt-4 border-t border-[var(--color-border)]/50 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[var(--radius-control)] bg-[var(--color-accent)] text-black font-semibold text-xs transition-all hover:brightness-110"
                        >
                          <span>Live Demo</span>
                          <IconExternalLink size={13} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-white hover:text-[var(--color-accent)] hover:border-[var(--color-border-hover)] font-mono text-xs transition-colors"
                        >
                          <IconGitHub size={13} />
                          <span>Code Repository</span>
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-xs text-[var(--color-text-muted)]">
                      Verified Deployment
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;