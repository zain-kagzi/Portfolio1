import React from "react";
import SkillBar from "../assets/SkillBar";
import { useApp } from "../context/useApp";
import { useReveal } from "../hooks/useReveal";
import {
  IconReact,
  IconJavaScript,
  IconTailwind,
  IconGit,
  IconGitHub,
  IconPhp,
  IconSparkle,
  IconArrowRight,
} from "./icons/Icons";

const Skills: React.FC = () => {
  const { portfolioData } = useApp();
  const { skills, toolIcons } = portfolioData;
  const { ref, visible } = useReveal();

  const renderToolIcon = (key?: string) => {
    switch (key) {
      case "react":
        return <IconReact size={26} className="text-[#61DAFB]" />;
      case "javascript":
        return <IconJavaScript size={26} className="text-[#F7DF1E]" />;
      case "tailwind":
        return <IconTailwind size={26} className="text-[#38BDF8]" />;
      case "git":
        return <IconGit size={26} className="text-[#F05032]" />;
      case "github":
        return <IconGitHub size={26} className="text-white" />;
      case "php":
        return <IconPhp size={26} className="text-[#777BB4]" />;
      default:
        return <IconSparkle size={24} className="text-[var(--color-accent)]" />;
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-12 bg-[var(--color-bg)] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Tooling & Ecosystem Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)]">
              <span className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider block mb-4">
                Primary Development Stack
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Tools & Frameworks
              </h3>

              {/* 3x2 Tool Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {toolIcons.map((tool) => (
                  <div
                    key={tool.name}
                    className="group p-4 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex flex-col items-center justify-center text-center transition-all duration-200 hover:border-[var(--color-border-hover)] hover:-translate-y-0.5 hover:bg-[var(--color-surface)]"
                  >
                    <div className="mb-2.5 transition-transform duration-200 group-hover:scale-110">
                      {renderToolIcon(tool.iconKey)}
                    </div>
                    <span className="font-mono text-xs text-[var(--color-text-secondary)] group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--color-border)]/50 font-mono text-xs text-[var(--color-text-muted)] flex items-center justify-between">
                <span>Version Control: Git/GitHub</span>
                <span className="text-[var(--color-accent)]">Active Workflow</span>
              </div>
            </div>
          </div>

          {/* Right Column: Proficiency Metrics & Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] font-mono text-xs uppercase tracking-widest mb-4">
                <IconSparkle size={12} />
                <span>Technical Proficiency</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
                Engineered for Reliability &{" "}
                <span className="text-[var(--color-accent)]">User Precision</span>
              </h2>

              <p className="font-sans text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed">
                Specialized in architecting performant React web interfaces, state management patterns, and full-stack integration with PHP/MySQL backend endpoints.
              </p>
            </div>

            {/* Proficiency Bars Container */}
            <div className="p-6 sm:p-8 rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-border)] space-y-5">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  pct={skill.pct}
                  color={skill.color}
                />
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="font-mono text-xs text-[var(--color-text-muted)]">
                Have a specialized technical requirement?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-control)] bg-[var(--color-accent)] text-black font-semibold text-xs transition-all hover:brightness-110"
              >
                <span>Discuss Stack & Project</span>
                <IconArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
