import { useState } from "react";
import { useApp } from "../context/useApp";
import { useReveal } from "../hooks/useReveal";

const Projects = () => {
  const { portfolioData } = useApp();
  const { projects } = portfolioData;
  const { ref, visible } = useReveal();

  // ✅ show 4 projects initially
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <section
      id="projects"
      ref={ref}
      className={`
        py-20!
        px-5! sm:px-8! md:px-12! lg:px-20!
        bg-bg2
        opacity-0 translate-y-10
        ${visible ? "animate-fadeUp opacity-100 translate-y-0" : ""}
      `}
    >
      {/* Heading */}
      <div className="text-center mb-14!">
        <div className="text-accent text-xs tracking-[3px] font-semibold mb-3! font-display">
          ✦ PROJECTS FEATURE
        </div>

        <h2 className="text-white font-extrabold text-[clamp(28px,4vw,48px)] font-display">
          OUR FEATURES{" "}
          <span className="text-accent italic font-script">Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <div
        className="
        grid gap-6 mb-10!
        grid-cols-1 sm:grid-cols-2
      "
      >
        {projects.slice(0, visibleCount).map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            className="
              group cursor-pointer
              rounded-2xl overflow-hidden
              bg-card 
              transition-all duration-300
              hover:-translate-y-1
              border  
              border-border
              relative
            "
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = p.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
            style={
              {
                "--accent": p.color,
              } as React.CSSProperties
            }
          >
            {/* Image */}
            <div
              className="h-48 flex items-center justify-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)`,
              }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span
                  className="text-5xl font-extrabold"
                  style={{ color: `${p.color}40` }}
                >
                  P{i + 1}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5!">
              <h3 className="text-white font-bold text-lg mb-3! group-hover:text-(--accent)">
                {p.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-3! py-1! rounded-full"
                    style={{
                      background: `${p.color}20`,
                      color: p.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Glow */}
            <div
              className="
                absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100
                transition duration-300
                pointer-events-none
              "
              style={{
                boxShadow: `0 0 20px ${p.color}40`,
              }}
            />
          </a>
        ))}
      </div>

      {/* Button */}
      {projects.length > 4 && visibleCount < projects.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="
              bg-accent text-black
              px-8! py-4! rounded-full
              font-bold text-sm
              transition-all duration-200
              hover:-translate-y-1
              animate-pulse-glow
            "
          >
            VIEW MORE PROJECT →
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;