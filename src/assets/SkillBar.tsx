import React, { useEffect, useRef, useState } from "react";

export interface SkillBarProps {
  name: string;
  pct: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, pct, color = "#c8f135" }) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-2">
      {/* Label and Percentage */}
      <div className="flex justify-between items-center text-xs font-mono">
        <span className="text-white font-medium tracking-wide">{name}</span>
        <span className="text-[var(--color-accent)] font-semibold">{pct}%</span>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] p-[1px] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${pct}%` : "0%",
            backgroundColor: color,
            boxShadow: animate ? `0 0 12px ${color}66` : "none",
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;