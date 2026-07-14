import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { whyChoose } from "@/lib/data";

const blobColors = [
  "bg-lime text-ink",
  "bg-coral text-white",
  "bg-lilac text-white",
  "bg-leaf text-white",
];

/** "Built on Trust", four flat cards under a centered stickered headline. */
export default function WhyChoose() {
  return (
    <Section tone="cream">
      <Container>
        <SectionHeading
          title="Built on Trust"
          sticker="Verified"
          stickerColor="coral"
          description="Matching the right tutor to your child first, then following up month after month, until the marks move."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map(({ icon: Icon, title, body }, i) => (
            <StaggerItem key={title} className="h-full">
              <article className="group h-full rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span
                  aria-hidden="true"
                  className={`grid size-13 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110 ${blobColors[i % blobColors.length]}`}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-gray">{body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
