import { MoveRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Sticker from "@/components/ui/Sticker";
import ZoomImage from "@/components/ui/ZoomImage";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { stats, successStories } from "@/lib/data";

/** "Trusted by Families", photo + counters, then real mark movements. */
export default function SuccessStories() {
  return (
    <Section id="results" tone="cream">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <ZoomImage
                src="/images/kids.jpg"
                alt="Students raising hands in a classroom"
                width={1600}
                height={1100}
                className="aspect-4/3 w-full rounded-3xl shadow-card"
              />
              <Sticker color="coral" delay={0.5} className="absolute -right-3 -top-4">
                Results
              </Sticker>
            </div>
          </Reveal>

          <div>
            <TextReveal
              as="h2"
              text="Trusted by Families"
              className="font-display text-[2.6rem] font-bold leading-[1.02] text-ink sm:text-5xl lg:text-6xl"
            />
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-md leading-relaxed text-gray">
                Method first, marks follow. Every figure below comes from a monthly report
                card a parent can check.
              </p>
            </Reveal>
            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-3">
          {successStories.map((story) => (
            <StaggerItem key={story.student} className="h-full">
              <article className="h-full rounded-3xl bg-white p-7 shadow-card">
                <p className="flex items-baseline gap-3 font-display">
                  <span className="text-2xl font-semibold text-gray/70">{story.before}</span>
                  <MoveRight className="size-5 self-center text-leaf" aria-hidden="true" />
                  <span className="text-5xl font-semibold text-ink">
                    <Counter to={story.after} />
                  </span>
                  <span className="text-sm font-semibold text-gray">/100 · {story.subject}</span>
                </p>
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-gray">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-gray/80">
                  {story.parent} · {story.detail}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <p className="font-display text-2xl font-bold text-ink sm:text-3xl">
              Your child&apos;s name could be here after one term.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3.5">
              <Button href="#enquiry" variant="primary" size="lg" plus>
                Book the Free Demo
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
