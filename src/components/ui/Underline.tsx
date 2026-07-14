"use client";

import { motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Hand-drawn marigold underline that draws itself in.
 * Signature flourish — use on at most one word per major moment (hero, final CTA).
 */
export default function Underline({
  children,
  className,
  delay = 0.7,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      {children}
      <svg
        viewBox="0 0 220 14"
        fill="none"
        preserveAspectRatio="none"
        className="absolute bottom-[-0.12em] left-0 h-[0.22em] w-full text-marigold"
        aria-hidden="true"
      >
        <motion.path
          d="M4 10.5C48 4.5 96 3.5 132 5.5C164 7.3 192 8.5 216 8"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay }}
        />
      </svg>
    </span>
  );
}
