import { useEffect, useRef, useState } from "react";

export default function FadeInUp({ children, delay = 1, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? `fade-in-up fade-in-up-${delay}` : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}
