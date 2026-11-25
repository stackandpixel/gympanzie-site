"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up to a number such as "1,500+" when scrolled into view. Non-numeric values render as-is. */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;
  const suffix = match ? match[2] : "";
  const [n, setN] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
