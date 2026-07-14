"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

type Props = {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
};

/** Counts up from 0 when scrolled into view. Indian digit grouping. */
export default function Counter({ to, suffix = "", className, duration = 1.8 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    // Reduced motion: jump straight to the final value (async, so SSR markup
    // and the first client render stay identical — no hydration divergence).
    if (reduce) {
      const raf = requestAnimationFrame(() => setDisplay(to.toLocaleString("en-IN")));
      return () => cancelAnimationFrame(raf);
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-IN")),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
