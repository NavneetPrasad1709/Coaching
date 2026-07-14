"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";
import { EASE } from "@/lib/motion";

/** Show the button once the reader is past the hero. */
const SCROLL_THRESHOLD = 500;

/**
 * Floating WhatsApp button — the always-available fallback channel.
 * Appears after the hero, springs in, and stays out of the way.
 */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  /** The label pill introduces itself once, then stays quiet on later re-entries. */
  const [labelShown, setLabelShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-5 right-5 z-30 flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.5, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          {/* Label pill — lg+ only, fades in once */}
          <motion.span
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-card lg:block"
            initial={labelShown ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            onAnimationComplete={() => setLabelShown(true)}
          >
            Questions? Chat with us
          </motion.span>

          <span className="relative block">
            {/* Slow pulse ring — runs a few cycles, then rests */}
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-wa/40"
              style={{
                animationDuration: "2.5s",
                animationIterationCount: 4,
                animationFillMode: "forwards",
              }}
            />
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="relative grid size-14 place-items-center rounded-full bg-wa text-board-deep shadow-lift transition-transform duration-300 hover:scale-105"
            >
              <WhatsAppIcon className="size-7" />
            </a>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
