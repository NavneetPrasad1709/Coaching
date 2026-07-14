"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { EASE, item, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { site, telLink, waLink } from "@/lib/site";

/**
 * Fixed site header. Transparent over the hero, glass after ~24px of scroll.
 * Desktop: anchor links + phone + primary CTA. Mobile: full-screen ruled menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Catch pages restored mid-scroll (anchor loads, back navigation).
  useEffect(() => {
    const raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    return () => cancelAnimationFrame(raf);
  }, []);

  // While the mobile menu is open: lock body scroll, make the page behind it
  // inert, move focus into the dialog, close on Escape, and auto-close if the
  // viewport crosses to desktop. Cleanup restores focus to the toggle.
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
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-ink/8 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-[76px] items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#top"
            onClick={close}
            className="flex items-center gap-3"
            aria-label={`${site.brand} — back to top`}
          >
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-xl bg-board font-display text-lg font-semibold text-paper"
            >
              SS
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg font-semibold leading-tight text-board">
                {site.name}
              </span>
              <span className="font-mono text-[0.6rem] uppercase leading-tight tracking-[0.2em] text-muted">
                Academy · Prayagraj &amp; Varanasi
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-3 text-sm font-medium text-ink/80 transition-colors duration-300 hover:text-board"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-board transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={telLink}
              aria-label={`Call ${site.brand} at ${site.phoneDisplay}`}
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-board transition-colors duration-300 hover:border-ink/40 hover:bg-white"
            >
              <Phone className="size-[1.1rem]" aria-hidden="true" />
            </a>
            <Button href="#enquiry" variant="primary" size="md" arrow>
              Book free demo
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-ink/15 text-board transition-colors duration-300 hover:border-ink/40 lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </Container>
      </motion.header>

      {/* Mobile overlay menu */}
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
            transition={{ duration: 0.4, ease: EASE }}
            className="ruled fixed inset-0 z-40 overflow-y-auto bg-paper lg:hidden"
          >
            <motion.div
              className="flex min-h-full flex-col px-5 pb-10 pt-28 sm:px-8"
              variants={stagger(0.07, 0.1)}
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
                    className="group flex items-baseline gap-4 border-b border-ink/8 py-4"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-[0.65rem] tracking-[0.2em] text-rule-deep"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl font-medium text-board transition-colors duration-300 group-hover:text-board-deep sm:text-4xl">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                variants={item}
                className="mt-8 flex flex-col gap-3"
                onClick={close}
              >
                <Button href="#enquiry" variant="primary" size="lg" arrow className="w-full">
                  Book free demo
                </Button>
                <Button
                  href={waLink()}
                  variant="whatsapp"
                  size="lg"
                  wa
                  external
                  className="w-full"
                  ariaLabel="Chat on WhatsApp"
                >
                  Chat on WhatsApp
                </Button>
                <a
                  href={telLink}
                  className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-board"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
              </motion.div>

              <motion.p
                variants={item}
                className="mt-auto pt-10 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted"
              >
                {site.hours}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
