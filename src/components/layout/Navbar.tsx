"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { EASE, item, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { site, telLink, waLink } from "@/lib/site";

/** Flat cream header, template-style: wordmark · links · Call Us · lime CTA. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 16);
    // Hide when scrolling down past the hero copy, reappear on any scroll up.
    setHidden(y > prev && y > 400);
  });

  useEffect(() => {
    const raf = requestAnimationFrame(() => setScrolled(window.scrollY > 16));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.querySelector("main")?.setAttribute("inert", "");
    firstLinkRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);

    const toggle = toggleRef.current;
    return () => {
      document.body.style.overflow = previous;
      document.querySelector("main")?.removeAttribute("inert");
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: hidden && !open ? "-110%" : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-cream transition-shadow duration-300",
          (scrolled || open) && "shadow-[0_1px_0_0_rgb(22_23_27/0.08)]"
        )}
      >
        {/* Reading progress */}
        <motion.span
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 top-0 block h-0.5 origin-left bg-leaf"
        />
        <Container className="flex h-19 items-center justify-between gap-6">
          <a
            href="#top"
            onClick={close}
            className="font-display text-2xl font-bold tracking-tight text-ink"
            aria-label={`${site.brand}, back to top`}
          >
            Santosh&nbsp;Singh
            <span className="text-leaf">.</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-[0.95rem] font-medium text-ink/75 transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={telLink} className="group block text-right leading-tight">
              <span className="block text-sm font-bold text-ink">Call Us</span>
              <span className="block text-[0.82rem] text-gray transition-colors group-hover:text-ink">
                {site.phoneDisplay}
              </span>
            </a>
            <Button href="#enquiry" variant="primary" size="md" plus>
              Book Free Demo
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full bg-white text-ink shadow-card lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </Container>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 overflow-y-auto bg-cream lg:hidden"
          >
            <motion.div
              className="flex min-h-full flex-col px-5 pb-10 pt-28 sm:px-8"
              variants={stagger(0.06, 0.08)}
              initial="hidden"
              animate="visible"
            >
              <nav aria-label="Mobile" className="flex flex-col">
                {site.nav.map((link, i) => (
                  <motion.a
                    key={link.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={close}
                    variants={item}
                    className="border-b border-line py-4 font-display text-3xl font-bold text-ink sm:text-4xl"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div variants={item} className="mt-8 flex flex-col gap-3">
                <div onClick={close}>
                  <Button href="#enquiry" variant="primary" size="lg" plus className="w-full">
                    Book Free Demo
                  </Button>
                </div>
                <Button href={waLink()} variant="whatsapp" size="lg" wa external className="w-full">
                  Chat on WhatsApp
                </Button>
                <Button href={telLink} variant="outline" size="lg" className="w-full">
                  <Phone className="size-4" aria-hidden="true" /> Call {site.phoneDisplay}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
