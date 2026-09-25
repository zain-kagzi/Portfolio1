import React from "react";
import {
  IconDesign,
  IconCode,
  IconDevices,
  IconGauge,
  IconLayers,
  IconCpu,
} from "../components/icons/Icons";

export interface ServiceCardProps {
  icon?: string;
  iconKey?: "design" | "code" | "devices" | "gauge" | "layers" | "cpu" | string;
  title: string;
  desc: string;
  accent?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconKey,
  title,
  desc,
}) => {
  const renderIcon = () => {
    switch (iconKey) {
      case "design":
        return <IconDesign size={24} className="text-[var(--color-accent)]" />;
      case "code":
        return <IconCode size={24} className="text-[var(--color-accent)]" />;
      case "devices":
        return <IconDevices size={24} className="text-[var(--color-accent)]" />;
      case "gauge":
        return <IconGauge size={24} className="text-[var(--color-accent)]" />;
      case "layers":
        return <IconLayers size={24} className="text-[var(--color-accent)]" />;
      case "cpu":
        return <IconCpu size={24} className="text-[var(--color-accent)]" />;
      default:
        return <IconCode size={24} className="text-[var(--color-accent)]" />;
    }
  };

  return (
    <div className="group relative rounded-[var(--radius-card)] p-7 bg-[var(--color-surface)] border border-[var(--color-border)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden">
      {/* Subtle Luminescence on Hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 w-36 h-36 rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.12)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
      />

      <div>
        {/* Vector Icon Badge */}
        <div className="w-12 h-12 rounded-[var(--radius-control)] bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent)]/50 group-hover:bg-[var(--color-surface)] transition-all duration-300">
          {renderIcon()}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-[var(--color-text-secondary)] text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--color-border)]/50 flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors">
          Production Standard
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)] group-hover:bg-[var(--color-accent)] transition-colors duration-300" />
      </div>
    </div>
  );
};

export default ServiceCard;