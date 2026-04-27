import { useEffect, useRef, useState } from "react";

export const useReveal = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // 👈 ek baar hi trigger
        }
      },
      { threshold: 0.3 } // 20% visible hone par trigger
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};