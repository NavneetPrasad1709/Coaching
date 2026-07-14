import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { reviews } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Parent voices from WhatsApp — the same themes repeat: punctuality, follow-up, marks. */
export default function ParentReviews() {
  return (
    <Section tone="paper">
      <Container>
        <SectionHeading
          eyebrow="Parent reviews"
          title="What parents tell us on WhatsApp"
          description="Punctuality, follow-up and marks — the three things parents mention most."
        />

        <StaggerGroup className="mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <StaggerItem
              key={review.name}
              className={cn(
                "rounded-3xl border border-ink/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
                i % 2 === 1 && "lg:mt-8"
              )}
            >
              <figure>
                <span
                  aria-hidden="true"
                  className="block select-none font-display text-6xl leading-none text-marigold/60"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2">
                  <p className="text-[1.02rem] leading-relaxed text-ink/85">{review.quote}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Avatar name={review.name} />
                  <div>
                    <h3 className="text-sm font-semibold text-board">{review.name}</h3>
                    <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                      {review.detail}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
