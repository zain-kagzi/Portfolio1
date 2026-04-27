import SkillBar from "../assets/SkillBar";
import { useApp } from "../context/useApp"; 
import { useReveal } from "../hooks/useReveal";


const Skills = () => {
  const { portfolioData } = useApp();
const { skills, toolIcons } = portfolioData;
const { ref, visible } = useReveal();
  return (
    <section
      id="skills"
      ref={ref}
      className={`
        py-20!
        px-5! sm:px-8! md:px-12! lg:px-20!
        bg-bg2
        opacity-0 translate-y-10
        ${visible ? "animate-fadeUp opacity-100 translate-y-0" : ""}
      `}
    >
      <div
        className="
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-20
        items-center
      "
      >
        {/* LEFT - tools */}
        <div>
          <div
            className="
            grid grid-cols-2 sm:grid-cols-3
            gap-4
          "
          >
            {toolIcons.map((tool) => (
              <div
                key={tool.name}
                className="
                  group text-center
                  p-5! rounded-xl
                  border border-gray-800
                  bg-[#111]
                  transition-all duration-200
                  hover:border-accent
                  hover:-translate-y-1
                  font-display
                "
              >
                <div className="text-2xl mb-2!">{tool.icon}</div>
                <div
                  className="
                  text-xs font-bold
                  text-gray-400
                  group-hover:text-accent
                  transition
                "
                >
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="text-accent text-xs tracking-[3px] font-semibold mb-3! font-display">
            ✦ MY SKILLS
          </div>

          <h2 className="text-white font-extrabold text-[clamp(24px,3.5vw,42px)] mb-2! font-display">
            LET'S EXPLORE POPULAR
          </h2>

          <h2 className="text-accent font-bold italic text-[clamp(26px,4vw,48px)] mb-6! font-script">
            Skills and Experience
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8! max-w-lg">
            I build responsive and scalable web applications using modern tools
            like React, JavaScript, and Tailwind. I focus on performance, clean
            UI, and smooth user experience.
          </p>

          {/* skill bars */}
          <div className="space-y-4">
            {skills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>

          {/* button */}
          <a href="#contact">
          <button
            className="
              mt-6!
              bg-accent text-black
              px-6! py-3! rounded-full
              font-bold text-sm
              transition-all duration-200
              hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(198,241,53,0.5)]
              font-display
            "
          >
            
            GET IN TOUCH NOW →
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
