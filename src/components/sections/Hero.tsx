"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Sticker from "@/components/ui/Sticker";
import Marquee from "@/components/ui/Marquee";
import { EASE } from "@/lib/motion";
import { allSubjects } from "@/lib/data";
import { waLink } from "@/lib/site";

const maskV: Variants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.8, ease: EASE } },
};

const riseV: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay },
  }),
};

const WORDS = ["Trusted", "Home", "Tuition"];

export default function Hero() {
  const anim = (delay = 0) =>
    ({ variants: riseV, custom: delay, initial: "hidden", animate: "visible" }) as const;

  // Apple-style scroll zoom: the photo starts inset and rounded, then expands
  // to full-bleed as it scrolls into view; the image itself drifts (parallax).
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: zoomProg } = useScroll({
    target: imgRef,
    offset: ["start 95%", "start 30%"],
  });
  const frameScale = useTransform(zoomProg, [0, 1], [0.93, 1]);
  const frameRadius = useTransform(zoomProg, [0, 1], [40, 0]);
  const { scrollYProgress: passProg } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(passProg, [0, 1], ["-6%", "6%"]);

  return (
    <section id="top" className="relative bg-cream pt-19">
      <Container className="pb-10 pt-12 text-center sm:pt-16">
        {/* Giant template-style headline with stickers pinned to it */}
        <h1
          aria-label="Trusted Home Tuition"
          className="relative mx-auto font-display text-[15vw] font-semibold leading-[0.98] tracking-[-0.03em] text-ink sm:text-[10.5vw] lg:text-[7.75rem] xl:text-[8.5rem]"
        >
          <motion.span
            aria-hidden="true"
            className="inline"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
            }}
          >
            {WORDS.map((word, i) => (
              <span key={i}>
                <span className="inline-block overflow-hidden pb-[0.06em] mb-[-0.06em] align-bottom">
                  <motion.span variants={maskV} className="inline-block">
                    {word}
                  </motion.span>
                </span>
                {i < WORDS.length - 1 ? " " : ""}
              </span>
            ))}
          </motion.span>

          <Sticker color="coral" rotate={-10} delay={0.7} className="absolute -top-2 left-[4%] sm:top-0">
            CBSE
          </Sticker>
          <Sticker color="leaf" rotate={9} delay={0.85} className="absolute -top-3 right-[3%] sm:top-0">
            ICSE
          </Sticker>
          <Sticker color="lilac" rotate={-6} delay={1.0} className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            Classes 5-12
          </Sticker>
        </h1>

        <motion.p {...anim(0.5)} className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gray">
          Verified, board-experienced tutors for your child, at home, online, or in the
          classroom. Serving families across Prayagraj &amp; Varanasi.
        </motion.p>

        <motion.div {...anim(0.65)} className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <Button href="#enquiry" variant="primary" size="lg" plus>
            Book a Free Demo Class
          </Button>
          <Button href={waLink()} variant="whatsapp" size="lg" wa external>
            Chat on WhatsApp
          </Button>
        </motion.div>

        {/* Social proof, the goal in one glance: trusted tutors, risk-free start */}
        <motion.div
          {...anim(0.8)}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <span className="flex -space-x-2.5" aria-hidden="true">
            {["/images/santosh.jpg", "/images/tutor.jpg", "/images/neha.jpg"].map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={72}
                height={72}
                className="size-9 rounded-full border-2 border-cream object-cover"
              />
            ))}
          </span>
          <span className="flex flex-col items-center gap-0.5 sm:items-start">
            <span className="flex items-center gap-0.5 text-leaf">
              <span className="sr-only">Rated 5 out of 5 by parents</span>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </span>
            <span className="text-sm font-medium text-gray">
              Trusted by <strong className="text-ink">1,200+ families</strong> · No joining fee
              · First class free
            </span>
          </span>
        </motion.div>
      </Container>

      {/* Full-bleed classroom photo, expands from an inset frame on scroll */}
      <motion.div
        ref={imgRef}
        style={{ scale: frameScale, borderRadius: frameRadius }}
        className="relative overflow-hidden"
      >
        <motion.div
          style={{ y: drift }}
          initial={{ scale: 1.16, opacity: 0 }}
          animate={{ scale: 1.08, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
        >
          {/* TODO(client): replace with a real photo of Santosh Sir teaching. */}
          <Image
            src="/images/hero.jpg"
            alt="A tutor teaching a small group of students in a classroom"
            width={2880}
            height={1800}
            priority
            className="h-[54vh] w-full object-cover sm:h-[62vh] lg:h-[70vh]"
          />
        </motion.div>
      </motion.div>

      {/* Subjects ticker */}
      <div className="border-b border-line bg-cream py-4">
        <Marquee duration={46}>
          {allSubjects.map((subject) => (
            <span
              key={subject}
              className="mx-4 inline-flex items-center gap-4 font-display text-lg font-semibold text-ink/70"
            >
              {subject}
              <span className="text-coral" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
