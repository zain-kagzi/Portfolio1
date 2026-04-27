import Star from "../assets/Star";
import { useApp } from "../context/useApp"; 
import cv from "../profile/cv.pdf"

const Hero = () => {
  const { portfolioData } = useApp();
  const { footerSocials } = portfolioData;
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        min-h-screen
        px-5! sm:px-8! md:px-12! lg:px-20!
        pt-24! pb-16!
        bg-linear-to-br from-bg via-[#111] to-[#0a0a0a]
        grid grid-cols-1 lg:grid-cols-2
        gap-10 lg:gap-16
        items-center
      "
    >
      {/* bg accent */}
      <div className="absolute top-[10%] right-[30%] w-62.5 sm:w-87.5 h-62.5 sm:h-87.5 rounded-full bg-[radial-gradient(circle,rgba(198,241,53,0.06)_0%,transparent_70%)]" />

      {/* LEFT */}
      <div className="animate-[fadeUp_0.8s_ease_both]">
        {/* badge */}
        <div className="inline-flex items-center gap-2 mb-5! px-4! py-1.5! rounded-full border border-[#c6f13533] bg-[#c6f13514]">
          <span className="text-l text-accent font-display">
            👋 Hi I'm Zainuddin Sharf Kagzi
          </span>
        </div>

        {/* heading */}
        <h1 className="font-bold text-white leading-tight mb-2! text-[clamp(36px,6vw,80px)] font-display">
          A UI/UX Designer
        </h1>

        <h1 className="flex items-center gap-3 font-bold text-accent leading-tight mb-6! text-[clamp(40px,7vw,90px)] font-script">
          & Developer
          <Star size={32} />
        </h1>

        {/* description */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mb-9!">
          Passionate about UI/UX design and development, I create engaging and user-centric digital experiences through modern web technologies.
        </p>

        {/* buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={cv}
            download="Zain_Kagzi_CV.pdf"
            className="
              flex items-center gap-2
              px-6! py-3! rounded-full
              bg-accent text-black
              font-bold text-sm
              transition-all duration-200
              hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(198,241,53,0.5)]
              font-display
              animate-pulse-glow 
            "
          >
            ↓ Download CV
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center items-center relative animate-[float_4s_ease-in-out_infinite]">
        {/* avatar blob */}
        <img src="img/IMG-20240611-WA0021.png" alt="" 
        className="
          relative flex items-end justify-center overflow-hidden
          w-65 h-70
          sm:w-[30
          0px] sm:h-90
          lg:w-85 lg:h-90
          rounded-[100%]
          border border-[#c5f135cd]
          bg-linear-to-br from-[#1e2a0e00] via-[#2d401071] to-[#1a1f0a18]
        "
        />
        

        {/* badge */}
        {/* <div className="absolute top-4 -right-2.5 bg-[#111] border border-gray-700 rounded-xl px-4! py-2! font-bold">
          <div className="text-lg text-accent">1</div>
          <div className="text-[10px] text-gray-400">Years Exp.</div>
        </div> */}

        {/* stars */}
        <div className="absolute bottom-8 -right-5 animate-spin [animation-duration:8s]">
          <Star size={28} />
        </div>

        <div className="absolute top-14 -left-2.5 animate-spin [animation-duration:6s] [animation-direction:reverse]">
          <Star size={20} />
        </div>
      </div>

      {/* SOCIAL STRIP */}
      <div
        className="
        hidden sm:flex
        absolute -left-25! sm:left-2 md:left-4 lg:left-6
        top-1/2 -translate-y-1/2 -rotate-90
        items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5
      "
      >
        {footerSocials.map((s,i) => (
          <a
            key={i}
            href={s.url}
            className="
              text-[10px] tracking-[2px] font-bold
              text-gray-500
              transition-colors duration-200
              hover:text-accent 
            "
          >
            {s.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
