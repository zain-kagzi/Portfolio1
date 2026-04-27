import Star from "../assets/Star";
import { useApp } from "../context/useApp";
import { useReveal } from "../hooks/useReveal";
 
const About = () => {
  const { portfolioData } = useApp();
  const { abilities } = portfolioData;
  const { ref, visible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`
        py-20!
        px-5! sm:px-8! md:px-12! lg:px-20!
        bg-bg2
        opacity-0 translate-y-10
        ${visible ? "animate-fadeUp opacity-100 translate-y-0" : ""}
      `}
    >
      <div className="
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-20
        items-center
      ">
        
        {/* LEFT */}
        <div>
          <div className="text-accent text-xs tracking-[3px] font-semibold mb-3! font-display">
            ✦ ABOUT ME
          </div>

          <h2 className="
            text-white font-extrabold leading-tight
            text-[clamp(28px,4vw,48px)]
            mb-2!
            font-display
          ">
            BEST FULL STACK
            <br /> DEVELOPER
          </h2>

          <h2 className="
            text-accent font-bold italic
            text-[clamp(30px,4vw,52px)]
            mb-6!
            font-script
          ">
            & UI/UX ENTHUSIAST
          </h2>

          <p className="
            text-gray-400 leading-relaxed
            text-sm sm:text-base
            mb-8! max-w-lg
          ">
            I’m a motivated Full Stack Developer with hands-on experience in
            building responsive and scalable web applications using modern
            technologies like ReactJS, JavaScript, PHP, and MySQL. I focus on
            clean UI, performance, and real-world problem solving.
          </p>

          {/* skills */}
          <div className="flex flex-col gap-3 mb-8!">
            {abilities.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-accent text-sm">✓</span>
                <span className="text-sm font-semibold text-gray-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* button */}
          <button
            className="
              bg-accent text-black
              px-6! py-3! rounded-full
              font-bold text-sm
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(198,241,53,0.5)]
            "
          >
            <a href="#contact">GET IN TOUCH NOW →</a>
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="relative hidden lg:block">
          <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="
              relative h-87.5 sm:h-105 lg:h-120
              rounded-2xl
              border border-gray-700
              bg-linear-to-br from-[#1a2a08] to-[#253b0c]
              flex items-center justify-center
              overflow-hidden
            "
            />

            {/* star */}
            <div className="absolute top-6 right-6 animate-spin [animation-duration:10s]">
              <Star size={26} />
            </div>
          
        </div>

      </div>
    </section>
  );
};

export default About;