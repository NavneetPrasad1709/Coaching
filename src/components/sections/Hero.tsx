"use client";

import { motion, type Variants } from "motion/react";
import { BadgeCheck, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Marquee from "@/components/ui/Marquee";
import Underline from "@/components/ui/Underline";
import Eyebrow from "@/components/ui/Eyebrow";
import { WhatsAppIcon } from "@/components/ui/icons";
import { EASE } from "@/lib/motion";
import { stats, allSubjects } from "@/lib/data";
import { waLink, telLink, site } from "@/lib/site";

const maskV: Variants = {
  hidden: { y: "115%" },
  visible: { y: 0, transition: { duration: 0.85, ease: EASE } },
};

const riseV: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
};

const HEADLINE_WORDS = ["The", "right", "tutor", "changes"];

/** Mini progress report — the trust artifact parents recognise instantly. */
const reportRows = [
  { subject: "Mathematics", marks: 92 },
  { subject: "Science", marks: 88 },
  { subject: "English", marks: 85 },
];

export default function Hero() {
  // Reduced motion is handled globally by MotionProvider — no tree branching.
  const anim = (delay = 0) =>
    ({
      variants: riseV,
      custom: delay,
      initial: "hidden",
      animate: "visible",
    }) as const;

  return (
    <section id="top" className="ruled margin-rule relative overflow-hidden bg-paper pt-32 pb-0 md:pt-40">
      {/* Soft ambient washes — radial gradients, not filter blur (cheap to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgb(232_164_40/0.12),transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-8%] size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgb(14_56_38/0.06),transparent_75%)]"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* ---- Copy column ---- */}
          <div className="lg:col-span-7">
            <motion.div {...anim(0)}>
              <Eyebrow>
                Prayagraj · Varanasi — Classes 5–12 · CBSE &amp; ICSE
              </Eyebrow>
            </motion.div>

            <h1
              aria-label="The right tutor changes everything."
              className="mt-6 font-display text-[2.9rem] font-medium leading-[1.04] tracking-tight text-board sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]"
            >
              <motion.span
                aria-hidden="true"
                className="inline"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                }}
              >
                {HEADLINE_WORDS.map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden pb-[0.08em] mb-[-0.08em] align-bottom"
                  >
                    <motion.span variants={maskV} className="inline-block">
                      {word}&nbsp;
                    </motion.span>
                  </span>
                ))}
                <span className="inline-block overflow-hidden pb-[0.18em] mb-[-0.18em] align-bottom">
                  <motion.span variants={maskV} className="inline-block">
                    <Underline delay={1.05}>
                      <em className="font-display italic text-board">everything.</em>
                    </Underline>
                  </motion.span>
                </span>
              </motion.span>
            </h1>

            <motion.p
              {...anim(0.55)}
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              {site.name} matches your child with verified, board-experienced tutors for
              Classes 5–12 — at home, online, or in the classroom. Serving families across
              Prayagraj and Varanasi.
            </motion.p>

            <motion.div {...anim(0.7)} className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#enquiry" variant="primary" size="lg" arrow>
                Book a free demo class
              </Button>
              <Button
                href={waLink()}
                variant="whatsapp"
                size="lg"
                wa
                external
                ariaLabel="Chat on WhatsApp"
              >
                Chat on WhatsApp
              </Button>
            </motion.div>

            <motion.p
              {...anim(0.85)}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-muted"
            >
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-board" aria-hidden="true" /> No joining fee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="size-4 text-board" aria-hidden="true" /> Demo before you decide
              </span>
              <a
                href={telLink}
                className="inline-flex min-h-11 items-center gap-1.5 hover:text-board"
              >
                <Phone className="size-4 text-board" aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </motion.p>
          </div>

          {/* ---- Artifact column: report card + WhatsApp proof ---- */}
          <div className="relative lg:col-span-5" aria-hidden="true">
            <motion.div {...anim(0.5)}>
              <div className="animate-float rounded-3xl border border-ink/8 bg-white p-7 shadow-lift sm:p-8">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                    Progress report — March
                  </p>
                  <span className="grid size-9 place-items-center rounded-full bg-board font-display text-sm font-semibold text-paper">
                    SS
                  </span>
                </div>
                <ul className="mt-5 space-y-5">
                  {reportRows.map((row, i) => (
                    <li key={row.subject}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm font-semibold text-ink">{row.subject}</span>
                        <span className="font-mono text-sm text-board">{row.marks}/100</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper-deep">
                        <motion.div
                          className="h-full rounded-full bg-marigold"
                          initial={{ width: 0 }}
                          animate={{ width: `${row.marks}%` }}
                          transition={{ duration: 1.1, ease: EASE, delay: 0.9 + i * 0.15 }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                    Next test · 14 April
                  </span>
                  <span className="font-display text-lg italic text-board">S. Singh</span>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp message card */}
            <motion.div
              {...anim(0.8)}
              className="absolute -top-10 right-0 hidden w-64 sm:block lg:-right-4"
            >
              <div
                className="animate-float rounded-2xl rounded-tr-sm border border-ink/8 bg-white p-4 shadow-card"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="grid size-7 place-items-center rounded-full bg-wa/15 text-wa">
                    <WhatsAppIcon className="size-4" />
                  </span>
                  <span className="text-xs font-semibold text-ink">Aarav&apos;s father</span>
                  <span className="ml-auto font-mono text-[0.65rem] text-muted">9:41 PM</span>
                </div>
                <p className="mt-2.5 text-sm leading-snug text-ink">
                  Sir, 92 in Maths! Thank you for the demo class that started it all 🙏
                </p>
              </div>
            </motion.div>

            {/* Demo badge */}
            <motion.div
              {...anim(0.95)}
              className="absolute -bottom-8 left-2 hidden sm:block lg:-left-8"
            >
              <div
                className="animate-float flex items-center gap-2.5 rounded-full border border-ink/8 bg-board px-5 py-3 shadow-lift"
                style={{ animationDelay: "0.6s" }}
              >
                <BadgeCheck className="size-5 text-marigold" />
                <span className="text-sm font-semibold text-paper">
                  First class free — always
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ---- Stats row ---- */}
        <motion.div
          {...anim(1.0)}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/10 pt-10 md:grid-cols-4 lg:mt-24"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-semibold text-board sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ---- Scroll cue ---- */}
        <motion.div
          {...anim(1.2)}
          className="mt-14 hidden justify-center pb-10 lg:flex"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted">
              Scroll
            </span>
            <span className="relative block h-12 w-px overflow-hidden bg-ink/15">
              <span className="animate-scroll-cue absolute left-0 top-0 h-4 w-px bg-board" />
            </span>
          </div>
        </motion.div>
        <div className="pb-16 lg:hidden" />
      </Container>

      {/* ---- Subjects strip ---- */}
      <div className="border-t border-ink/10 bg-white/70 py-4 backdrop-blur-sm">
        <Marquee duration={46}>
          {allSubjects.map((subject) => (
            <span
              key={subject}
              className="mx-5 inline-flex items-center gap-5 font-mono text-[0.78rem] uppercase tracking-[0.2em] text-muted"
            >
              {subject}
              <span className="text-board/30" aria-hidden="true">
                ✳
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
