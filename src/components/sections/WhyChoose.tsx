import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { whyChoose } from "@/lib/data";

/** Four quiet promises — the reasons parents stay after the demo class. */
export default function WhyChoose() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="Why Santosh Singh"
          title="Tuition that treats your child as the syllabus"
          description="Most tuition ends when the class does — ours is built on matching the right tutor to your child first, then following up month after month."
        />

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title} className="h-full">
              <article className="group relative h-full rounded-3xl border border-ink/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                {/* Marigold accent that draws in on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-7 right-7 top-0 h-px origin-left scale-x-0 bg-marigold transition-transform duration-300 group-hover:scale-x-100"
                />

                <div className="grid size-12 place-items-center rounded-2xl bg-paper-deep text-board">
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-board">{title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
