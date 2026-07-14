"use client";

import { motion } from "motion/react";
import { EASE, VIEWPORT } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel in px. Set 0 for a pure fade. */
  y?: number;
  /** Adds a blur-to-sharp reveal. */
  blur?: boolean;
};

/**
 * Scroll-triggered fade-up. The default entrance for any block of content.
 * Reduced motion is handled globally by MotionProvider (MotionConfig
 * reducedMotion="user"), do not branch the rendered tree here, it would
 * hydrate differently on the server.
 */
export default function Reveal({ children, className, delay = 0, y = 28, blur = false }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, ...(blur ? { filter: "blur(8px)" } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }}
      viewport={VIEWPORT}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
