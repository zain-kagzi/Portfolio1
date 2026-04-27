import { useApp } from "../context/useApp";

const Newsletter = () => {
  const { portfolioData } = useApp();
const { footerSocials } = portfolioData;

  return (
    <section
      className="
        py-16!
        px-5! sm:px-8! md:px-12! lg:px-20!
        bg-[#080808]
        text-center
        border-t border-border
      "
    >
      {/* Social Links */}
      <div className="
        flex flex-wrap justify-center
        gap-4 sm:gap-6 md:gap-8
        mb-8!
      ">
        {footerSocials.map((s,i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            className="relative text-xs font-bold tracking-wide text-muted hover:text-accent after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
          >
            {s.text}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-border pt-6!">
        <p className="
          text-xs sm:text-sm
          text-muted
        ">
          © 2026 Zain Kagzi. All Rights Reserved 
        </p>
      </div>
    </section>
  );
};

export default Newsletter;