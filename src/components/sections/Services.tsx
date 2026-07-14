import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { services } from "@/lib/data";
import { waLink, telLink, site } from "@/lib/site";

const blobColors = [
  "bg-coral text-white",
  "bg-lime text-ink",
  "bg-lilac text-white",
  "bg-leaf text-white",
  "bg-ink text-cream",
  "bg-coral text-white",
];

/** Six ways to learn, flat white cards with colored icon blobs. */
export default function Services() {
  return (
    <Section id="services" tone="soft">
      <Container>
        <SectionHeading
          title="Every Way Your Child Learns"
          sticker="6 Formats"
          stickerColor="lilac"
          description="Home, online or classroom, same verified tutors, same monthly reports."
        />

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, points }, i) => (
            <StaggerItem key={title} className="h-full">
              <article className="group h-full rounded-3xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span
                  aria-hidden="true"
                  className={`grid size-13 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110 ${blobColors[i % blobColors.length]}`}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-gray">{body}</p>
                <ul className="mt-5 space-y-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-medium text-ink/75">
                      <Check className="mt-0.5 size-4 shrink-0 text-leaf" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-ink p-8 md:p-10">
            <div>
              <p className="font-display text-2xl font-bold text-cream md:text-3xl">
                Not sure which format fits?
              </p>
              <p className="mt-1 text-sm text-cream/70">
                Ask us, it takes two minutes and costs nothing.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                href={waLink("Hello, I need help choosing between home, online and group tuition.")}
                variant="whatsapp"
                size="md"
                wa
                external
              >
                Chat on WhatsApp
              </Button>
              <Button href={telLink} variant="dark" size="md">
                Call {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
