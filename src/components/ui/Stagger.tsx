"use client";

import { motion } from "motion/react";
import { stagger, item, VIEWPORT } from "@/lib/motion";

/**
 * Client boundary for staggered scroll reveals. Sections stay server
 * components and pass their (server-rendered) cards through as children:
 *
 *   <StaggerGroup className="grid ...">
 *     {things.map(t => <StaggerItem key={t.id}>...</StaggerItem>)}
 *   </StaggerGroup>
 */
export function StaggerGroup({
  children,
  className,
  staggerChildren = 0.09,
  delayChildren = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
