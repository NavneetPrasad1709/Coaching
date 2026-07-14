"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { steps } from "@/lib/data";
import { cn } from "@/lib/utils";

type Step = (typeof steps)[number];

/** One timeline row: numbered badge on the rail, mono index + title + body on the right. */
function StepRow({
  step,
  index,
  isLast = false,
}: {
  step: Step;
  index: number;
  isLast?: boolean;
}) {
  const Icon = step.icon;

  return (
    <Reveal
      delay={index * 0.07}
      className={cn("relative grid grid-cols-[auto_1fr] gap-6", isLast ? "pb-0" : "pb-14")}
    >
      {/* Rail badge — sits on top of the connecting line */}
      <div
        aria-hidden="true"
        className="relative z-10 grid size-12 place-items-center rounded-full border border-ink/15 bg-white"
      >
        <Icon className="size-5 text-board" />
      </div>

      <div>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-rule-deep">
          Step {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-1.5 font-display text-2xl text-board">{step.title}</h3>
        <p className="mt-2 max-w-xl leading-relaxed text-muted">{step.body}</p>
      </div>
    </Reveal>
  );
}

export default function HowItWorks() {
  const railRef = useRef<HTMLDivElement>(null);

  /*
    The rail wrapper holds every step except the last, so an absolute line from
    top-12 (below the first badge) to bottom-0 ends exactly at the top of the
    final badge. The line inks in as the timeline moves through the viewport.
  */
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const railSteps = steps.slice(0, -1);
  const finalStep = steps[steps.length - 1];

  return (
    <Section id="how-it-works" tone="paper" ruled marginRule>
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From enquiry to first class in 48 hours"
          description={"Four short steps — and you don’t pay a rupee until you’ve seen a full demo class."}
        />

        <div className="mt-16 max-w-3xl md:mt-20">
          <div ref={railRef} className="relative">
            {/* Static track */}
            <div aria-hidden="true" className="absolute bottom-0 left-6 top-12 w-px bg-ink/10" />
            {/* Scroll-linked ink that draws the line down the page */}
            <motion.div
              aria-hidden="true"
              style={{ scaleY }}
              className="absolute bottom-0 left-6 top-12 w-px origin-top bg-board/40"
            />

            {railSteps.map((step, i) => (
              <StepRow key={step.title} step={step} index={i} />
            ))}
          </div>

          {finalStep && (
            <StepRow step={finalStep} index={steps.length - 1} isLast />
          )}
        </div>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href="#enquiry" variant="primary" size="lg" arrow>
            Start step 1 — book the demo
          </Button>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            takes two minutes · no fee
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
