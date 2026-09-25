import { useEffect, useState } from "react";
import { useApp } from "../context/useApp";  // make sure correct import

const Navbar = () => {
  const { portfolioData } = useApp();
  const { navLinks } = portfolioData;

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚫 Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6! md:px-[5%] h-17.5 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <div className="font-display font-black text-xl text-accent tracking-widest">
        <span className="text-accent">✦</span> PORTFOLIO
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        {navLinks.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-xs font-display font-semibold tracking-widest uppercase transition-colors duration-200 relative text-muted hover:text-accent after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
          >
            {l}
          </a>
        ))}
      </div>

      {/* HAMBURGER */}
      <button
        aria-label="Toggle menu"
        className="relative flex flex-col gap-1.25 cursor-pointer md:hidden z-50 right-5"
        onClick={() => setOpen((prev) => !prev)}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-0.5 w-7 bg-white rounded transition-all duration-300 block ${
              open && i === 0
                ? "rotate-45 translate-y-1.75"
                : open && i === 2
                ? "-rotate-45 -translate-y-1.75"
                : open && i === 1
                ? "scale-x-0"
                : ""
            }`}
          />
        ))}
      </button>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-17.5 left-0 right-0 bg-bg/98 backdrop-blur-xl border-b border-border flex flex-col items-center gap-6 py-8! md:hidden transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="text-muted hover:text-accent text-sm font-display font-semibold tracking-widest uppercase transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;