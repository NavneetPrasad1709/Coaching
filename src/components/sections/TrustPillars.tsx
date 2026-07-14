import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { trustPoints } from "@/lib/data";

/** Six written promises — the trust contract, stated plainly. */
export default function TrustPillars() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why parents trust us"
          title="Six promises, in writing"
          description="The rules we hold ourselves to for every family, every month."
          className="max-w-2xl"
        />

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <StaggerItem
              key={point.title}
              className="group h-full rounded-3xl border border-ink/8 bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="grid size-12 place-items-center rounded-2xl border border-ink/8 bg-white text-board transition-colors duration-300 group-hover:border-marigold/30 group-hover:bg-marigold/10"
              >
                <point.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-board">{point.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{point.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center font-mono text-[0.75rem] uppercase tracking-[0.14em] text-muted">
            Every promise above is part of the written agreement you sign — nothing verbal.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#enquiry" variant="primary" size="lg" arrow>
              Book a free demo class
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
