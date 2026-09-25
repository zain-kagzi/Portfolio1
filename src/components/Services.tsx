import React from "react";
import ServiceCard from "../assets/ServiceCard";
import { useApp } from "../context/useApp";
import { useReveal } from "../hooks/useReveal";
import { IconSparkle } from "./icons/Icons";

const Services: React.FC = () => {
  const { portfolioData } = useApp();
  const { services } = portfolioData;
  const { ref, visible } = useReveal();

  return (
    <section
      id="services"
      ref={ref}
      className={`py-24 px-4 sm:px-6 lg:px-12 bg-[var(--color-bg)] transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] font-mono text-xs uppercase tracking-widest mb-4">
            <IconSparkle size={12} />
            <span>Core Capabilities</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-2xl">
            Specialized Development &{" "}
            <span className="text-[var(--color-accent)]">UI/UX Services</span>
          </h2>

          <p className="font-sans text-[var(--color-text-secondary)] text-sm sm:text-base max-w-xl mt-4">
            End-to-end engineering from architectural design to performance tuning,
            ensuring your digital product is resilient and delightful.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;