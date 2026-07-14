"use client";

import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { EASE, VIEWPORT, stagger, item } from "@/lib/motion";
import { successStories } from "@/lib/data";
import { waLink } from "@/lib/site";

/**
 * Success stories — report-card numbers doing the persuading.
 * Each card is a before → after readout with the parent's own words beneath.
 */
export default function SuccessStories() {
  return (
    <Section id="results" tone="board">
      <Container>
        <SectionHeading
          dark
          eyebrow="Results"
          title="Marks move when the method is right"
          description="Method first, marks follow. Three journeys from recent terms."
        />

        <motion.div
          variants={stagger()}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {successStories.map((story) => (
            <motion.article
              key={story.student}
              variants={item}
              className="flex flex-col rounded-3xl border border-paper/10 bg-board-soft/50 p-7 transition-colors duration-300 hover:border-paper/25"
            >
              <h3 className="sr-only">
                {story.student} — {story.subject}, from {story.before} to {story.after} out of 100
              </h3>

              {/* Before → after readout (spoken by the h3 above) */}
              <div aria-hidden="true">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-sm text-mist">{story.before}</span>
                  <MoveRight className="size-4 text-marigold" />
                  <Counter
                    to={story.after}
                    className="font-display text-5xl font-semibold leading-none text-marigold"
                  />
                </div>
                <p className="mt-2.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mist">
                  /100 · {story.subject}
                </p>

                {/* Before and after, drawn as hairlines */}
                <div className="mt-5 space-y-1.5">
                  <div className="h-1 overflow-hidden rounded-full bg-paper/10">
                    <div
                      className="h-full rounded-full bg-paper/25"
                      style={{ width: `${story.before}%` }}
                    />
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-paper/10">
                    <motion.div
                      className="h-full rounded-full bg-marigold"
                      initial={{ width: `${story.before}%` }}
                      whileInView={{ width: `${story.after}%` }}
                      viewport={VIEWPORT}
                      transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
                    />
                  </div>
                </div>
              </div>

              <blockquote className="mt-6 flex-1 text-[0.95rem] leading-relaxed text-paper/90">
                <span aria-hidden="true" className="font-display text-xl italic text-paper/50">
                  &ldquo;
                </span>
                {story.quote}&rdquo;
              </blockquote>

              <footer className="mt-5 border-t border-paper/10 pt-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-mist">
                <p className="text-paper/80">{story.parent}</p>
                <p className="mt-1">{story.detail}</p>
              </footer>
            </motion.article>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-14 text-center">
          <p className="mx-auto max-w-2xl text-balance font-display text-2xl text-paper md:text-3xl">
            Your child&apos;s name could be here after one term.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="#enquiry" variant="primary" size="lg" arrow>
              Book the free demo
            </Button>
            <Button
              href={waLink(
                "Hello Santosh Sir, I saw the results on your website. I'd like to book a free demo class for my child."
              )}
              variant="outline-dark"
              size="lg"
              wa
              external
              ariaLabel="Chat on WhatsApp"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
