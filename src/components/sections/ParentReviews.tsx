import { Star } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { reviews } from "@/lib/data";

/** Big lime quote panel + three flat cards, the template's testimonial block. */
export default function ParentReviews() {
  const [featured, ...rest] = reviews;

  return (
    <Section tone="soft">
      <Container>
        <SectionHeading
          title="What Parents Tell Us"
          sticker="On WhatsApp"
          stickerColor="coral"
          description="Punctuality, follow-up and marks, the three things parents mention most."
        />

        <Reveal delay={0.1}>
          <figure className="mx-auto mt-14 max-w-4xl rounded-3xl bg-lime p-8 sm:p-12">
            <p className="mb-5 flex justify-center gap-1 text-leaf">
              <span className="sr-only">Rated 5 out of 5</span>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" aria-hidden="true" />
              ))}
            </p>
            <blockquote className="text-center font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-center">
              <p className="font-bold text-ink">{featured.name}</p>
              <p className="mt-0.5 text-sm text-ink/70">{featured.detail}</p>
            </figcaption>
          </figure>
        </Reveal>

        <StaggerGroup className="mt-6 grid gap-5 md:grid-cols-3">
          {rest.map((review) => (
            <StaggerItem key={review.name} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card">
                <blockquote className="flex-1 leading-relaxed text-ink/85">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <p className="text-sm font-bold text-ink">{review.name}</p>
                  <p className="mt-0.5 text-xs text-gray">{review.detail}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
