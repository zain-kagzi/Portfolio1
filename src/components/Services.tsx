import ServiceCard from "../assets/ServiceCard";
import { useApp } from "../context/useApp";
import { useReveal } from "../hooks/useReveal";

const Services = () => {
   const { portfolioData } = useApp();
    const { services } = portfolioData;
    const { ref, visible } = useReveal();
  return (
    <section
      id="services"
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
          ✦ MY SERVICE PROVIDE
        </div>

        <h2 className="text-white font-extrabold text-[clamp(28px,4vw,48px)] font-display ">
          MY BEST QUALITY{" "}
          <span className="text-accent italic font-script">Service</span>
        </h2>
      </div>

      {/* Grid */}
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Services;