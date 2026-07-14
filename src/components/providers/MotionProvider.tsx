"use client";

import { MotionConfig } from "motion/react";

/**
 * Global motion policy: users with prefers-reduced-motion get transform/layout
 * animations disabled automatically. Components must NOT branch their rendered
 * tree on useReducedMotion (it hydrates differently on the server) — this
 * config is the single reduced-motion switch for variant-based animation.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
