import { MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { parentPromises, localities } from "@/lib/data";
import { waLink } from "@/lib/site";

/** The assurances Indian parents ask about first: safety, medium, fees, updates. */
export default function ParentPromises() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          title="Made for Indian Families"
          sticker="Peace of Mind"
          stickerColor="leaf"
          description="The things you would ask us on a call anyway, answered upfront."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {parentPromises.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title} className="h-full">
              <article className="group flex h-full gap-4 rounded-3xl bg-cream-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-2xl bg-lime text-leaf transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-gray">{body}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Localities strip */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-line bg-white p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-leaf" aria-hidden="true" />
                <div className="space-y-1.5 text-[0.95rem]">
                  <p>
                    <strong className="text-ink">Prayagraj:</strong>{" "}
                    <span className="text-gray">
                      {localities.Prayagraj.join(" · ")} &amp; nearby areas
                    </span>
                  </p>
                  <p>
                    <strong className="text-ink">Varanasi:</strong>{" "}
                    <span className="text-gray">
                      {localities.Varanasi.join(" · ")} &amp; nearby areas
                    </span>
                  </p>
                </div>
              </div>
              <Button
                href={waLink("Hello, is a home tutor available in my locality?")}
                variant="whatsapp"
                size="md"
                wa
                external
              >
                Ask About Your Locality
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
