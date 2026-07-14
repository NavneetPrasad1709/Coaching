"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";

/** Floating WhatsApp button, appears after the hero, our top conversion channel. */
export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [labelShown, setLabelShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 500;
      setShow(past);
      if (past) setLabelShown(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.6, opacity: 0, y: 16 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 z-30 hidden items-center gap-3 lg:flex"
        >
          {labelShown && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card lg:block"
            >
              Questions? Chat with us
            </motion.span>
          )}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative grid size-14 place-items-center rounded-full bg-wa text-white shadow-lift transition-transform duration-200 hover:scale-105"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-wa/40"
              style={{ animationDuration: "2.5s", animationIterationCount: 4, animationFillMode: "forwards" }}
            />
            <WhatsAppIcon className="relative size-7" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
