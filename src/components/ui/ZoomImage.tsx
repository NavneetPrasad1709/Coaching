"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Parallax travel in % of height while scrolling past. */
  parallax?: number;
};

/** Photo with a slow zoom-settle reveal and subtle scroll parallax. */
export default function ZoomImage({ src, alt, width, height, className, parallax = 5 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        style={{ y }}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1.12 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 1.3, ease: EASE }}
        className="h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
