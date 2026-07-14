"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const dots = {
  coral: "bg-coral",
  lilac: "bg-lilac",
  leaf: "bg-leaf",
  lime: "bg-leaf",
  ink: "bg-ink",
} as const;

type Props = {
  children: React.ReactNode;
  color?: keyof typeof dots;
  /** Kept for API compatibility; premium chips sit almost straight. */
  rotate?: number;
  className?: string;
  delay?: number;
};

/** Quiet glass chip with a colored dot, replaces the playful sticker. */
export default function Sticker({
  children,
  color = "leaf",
  rotate = 0,
  className,
  delay = 0.4,
}: Props) {
  const tilt = Math.max(-2, Math.min(2, rotate / 4));
  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0, y: 8, rotate: tilt }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white/85 px-3.5 py-1.5",
        "text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink shadow-card backdrop-blur-sm",
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", dots[color])} />
      {children}
    </motion.span>
  );
}
