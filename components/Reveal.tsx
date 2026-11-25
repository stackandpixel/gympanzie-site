"use client";

import { useEffect, useRef, useState } from "react";

/** Fades content in once it scrolls into view. Content stays visible if JS is off or motion is reduced. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      setShown(true);
      return;
    }
    setArmed(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${armed || shown ? "reveal" : ""} ${shown ? "in" : ""} ${className}`}
      style={{ ["--d" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
