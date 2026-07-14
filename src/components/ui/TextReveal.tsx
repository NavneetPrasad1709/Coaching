"use client";

import { motion, type Variants } from "motion/react";
import { EASE, VIEWPORT } from "@/lib/motion";

const containerV: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: 0.05, delayChildren: delay },
  }),
};

const wordV: Variants = {
  hidden: { y: "115%" },
  visible: { y: 0, transition: { duration: 0.75, ease: EASE } },
};

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  /** Animate on mount instead of on scroll (use in the hero). */
  onMount?: boolean;
};

/**
 * Word-by-word masked text reveal for headlines. Reduced motion is handled
 * globally by MotionProvider — the transform simply doesn't animate.
 */
export default function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  onMount = false,
}: Props) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        className="inline"
        variants={containerV}
        custom={delay}
        initial="hidden"
        {...(onMount
          ? { animate: "visible" }
          : { whileInView: "visible", viewport: VIEWPORT })}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden pb-[0.08em] mb-[-0.08em] align-bottom"
          >
            <motion.span variants={wordV} className="inline-block">
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
