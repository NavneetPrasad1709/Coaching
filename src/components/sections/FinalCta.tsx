"use client";

import { motion, type Variants } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Underline from "@/components/ui/Underline";
import { EASE, VIEWPORT } from "@/lib/motion";
import { waLink, telLink, site } from "@/lib/site";

const maskV: Variants = {
  hidden: { y: "115%" },
  visible: { y: 0, transition: { duration: 0.85, ease: EASE } },
};

const staggerV: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const LINE_ONE = ["Give", "your", "child", "the", "teacher"];

export default function FinalCta() {
  return (
    <Section tone="board" ruled className="text-center">
      {/* Soft ambient washes — radial gradients, not filter blur (cheap to paint) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-[-12%] size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(232_164_40/0.12),transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25%] right-[-10%] size-[26rem] rounded-full bg-[radial-gradient(closest-side,rgb(246_245_238/0.05),transparent_75%)]"
      />

      <Container className="max-w-4xl">
        <Reveal>
          <Eyebrow dark center>
            Admissions open — Prayagraj &amp; Varanasi
          </Eyebrow>
        </Reveal>

        <h2
          aria-label="Give your child the teacher they deserve."
          className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-[4.5rem]"
        >
          <motion.span
            aria-hidden="true"
            className="inline"
            variants={staggerV}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <span className="block">
              {LINE_ONE.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden pb-[0.08em] mb-[-0.08em] align-bottom"
                >
                  <motion.span variants={maskV} className="inline-block">
                    {word}
                    {i < LINE_ONE.length - 1 ? " " : ""}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block">
              <span className="inline-block overflow-hidden pb-[0.08em] mb-[-0.08em] align-bottom">
                <motion.span variants={maskV} className="inline-block">
                  they&nbsp;
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden pb-[0.18em] mb-[-0.18em] align-bottom">
                <motion.span variants={maskV} className="inline-block">
                  <Underline delay={0.5}>
                    <em className="font-display italic">deserve</em>
                  </Underline>
                  .
                </motion.span>
              </span>
            </span>
          </motion.span>
        </h2>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-mist">
            One free demo class is all it takes to know. Book it today — if it&apos;s not a
            fit, you owe nothing.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#enquiry" variant="primary" size="lg" arrow>
              Book the free demo class
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
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-mist">
            <span>No joining fee</span>
            <span aria-hidden="true" className="text-mist/50">
              ·
            </span>
            <span>Verified tutors</span>
            <span aria-hidden="true" className="text-mist/50">
              ·
            </span>
            <span>Free replacement</span>
            <span aria-hidden="true" className="text-mist/50">
              ·
            </span>
            <a
              href={telLink}
              className="inline-flex min-h-11 items-center transition-colors duration-300 hover:text-marigold"
            >
              {site.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
