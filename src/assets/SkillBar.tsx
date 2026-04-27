import { useEffect, useRef, useState } from "react";

type SkillBarProps = {
  name: string;
  pct: number;
  color: string;
};

const SkillBar = ({ name, pct, color }: SkillBarProps) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-5!">
      {/* top labels */}
      <div className="flex justify-between mb-2! text-xs sm:text-sm font-semibold">
        <span className="text-gray-300 font-display">{name}</span>
        <span style={{ color }} className="font-display">{pct}%</span>
      </div>

      {/* progress track */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        {/* progress fill */}
        <div
          className="
            h-full rounded-full
            transition-all duration-1200 ease-out
          "
          style={{
            width: animate ? `${pct}%` : "0%",
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}60`,
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;