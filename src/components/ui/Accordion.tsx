"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Item = { q: string; a: string };

type Props = {
  items: readonly Item[];
  className?: string;
  defaultOpen?: number;
};

/** Pill-row accordion, template-style: soft rounded bars with a + toggle. */
export default function Accordion({ items, className, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className={cn("space-y-3.5", className)}>
      {items.map((entry, i) => {
        const isOpen = open === i;
        const headerId = `${baseId}-h-${i}`;
        const panelId = `${baseId}-p-${i}`;
        return (
          <div
            key={entry.q}
            className={cn(
              "rounded-3xl border transition-colors duration-300",
              isOpen ? "border-ink/15 bg-white shadow-card" : "border-transparent bg-cream-soft"
            )}
          >
            <h3>
              <button
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
              >
                <span className="font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                  {entry.q}
                </span>
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                    isOpen ? "rotate-45 bg-lime text-ink" : "bg-white text-ink shadow-card"
                  )}
                  aria-hidden="true"
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl px-6 pb-6 leading-relaxed text-gray sm:px-8">
                    {entry.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
