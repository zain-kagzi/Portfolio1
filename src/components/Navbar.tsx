import { useEffect, useState } from "react";
import { useApp } from "../context/useApp";
import { IconMenu, IconClose, IconArrowRight } from "./icons/Icons";

const Navbar = () => {
  const { portfolioData } = useApp();
  const { navLinks } = portfolioData;

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track scroll position for elevated shadow & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", ...navLinks.map((l) => l.toLowerCase())];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary navigation"
        className={`
          pointer-events-auto
          w-full max-w-4xl
          rounded-full
          transition-all duration-300
          flex items-center justify-between
          px-4 sm:px-6 py-2.5 sm:py-3
          ${
            scrolled
              ? "bg-[#12151B]/90 backdrop-blur-xl border border-[#242B38] shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
              : "bg-[#12151B]/75 backdrop-blur-md border border-[#242B38]/80 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
          }
        `}
      >
        {/* LOGO & STATUS */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F135] rounded-full px-2 py-1"
        >
          <div className="w-2 h-2 rounded-full bg-[#C8F135] shadow-[0_0_8px_#C8F135] animate-status-pulse" />
          <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-[#C8F135] transition-colors">
            ZAIN<span className="text-[#C8F135]">.</span>
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((l) => {
            const id = l.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={l}
                href={`#${id}`}
                className={`
                  relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide
                  transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F135]
                  ${
                    isActive
                      ? "text-white bg-[#181D26] border border-[#242B38] shadow-inner"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                  }
                `}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C8F135] mr-1.5 align-middle" />
                )}
                {l}
              </a>
            );
          })}
        </div>

        {/* RIGHT ACTION: GET IN TOUCH BUTTON & MOBILE HAMBURGER */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="
              hidden sm:inline-flex items-center gap-1.5
              bg-[#C8F135] text-[#0B0D10]
              px-4 py-1.5 rounded-full
              text-xs font-mono font-bold tracking-tight
              transition-all duration-200
              hover:bg-[#B5DC2B] hover:shadow-[0_0_15px_rgba(200,241,53,0.35)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
            "
          >
            <span>Let's Talk</span>
            <IconArrowRight size={13} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="
              md:hidden
              w-9 h-9 rounded-full
              flex items-center justify-center
              bg-[#181D26] border border-[#242B38]
              text-[#94A3B8] hover:text-white
              transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F135]
            "
          >
            {open ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`
          md:hidden pointer-events-auto
          fixed inset-x-4 top-20
          bg-[#12151B]/95 backdrop-blur-2xl
          border border-[#242B38]
          rounded-2xl p-6
          shadow-[0_20px_50px_rgba(0,0,0,0.8)]
          transition-all duration-300 ease-out
          flex flex-col gap-3
          ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"}
        `}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#242B38]">
          <span className="text-xs font-mono text-[#94A3B8] tracking-widest uppercase">
            Menu Navigation
          </span>
          <span className="text-[11px] font-mono text-[#C8F135] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8F135] animate-status-pulse" />
            Available
          </span>
        </div>

        {navLinks.map((l) => {
          const id = l.toLowerCase();
          const isActive = activeSection === id;
          return (
            <a
              key={l}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`
                px-4 py-3 rounded-xl text-sm font-mono font-medium
                flex items-center justify-between
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[#181D26] text-white border border-[#242B38]"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.03]"
                }
              `}
            >
              <span>{l}</span>
              {isActive ? (
                <span className="text-[#C8F135] text-xs">● Active</span>
              ) : (
                <IconArrowRight size={14} className="opacity-40" />
              )}
            </a>
          );
        })}

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="
            mt-3 w-full
            bg-[#C8F135] text-[#0B0D10]
            py-3 rounded-xl
            text-center text-xs font-mono font-bold
            flex items-center justify-center gap-2
          "
        >
          <span>Get In Touch</span>
          <IconArrowRight size={14} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;