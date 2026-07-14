import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { classGroups } from "@/lib/data";

const photos = ["/images/online.jpg", "/images/class1.jpg", "/images/class3.jpg"];
const alts = [
  "Young students writing at their desks",
  "A classroom with a green chalkboard",
  "A senior student in a library",
];

/** "Our Programs", three photo cards for the three stages, CBSE & ICSE below. */
export default function ClassesBoards() {
  return (
    <Section tone="cream">
      <Container>
        <SectionHeading
          title="Class 5 to Class 12"
          sticker="Both Boards"
          stickerColor="leaf"
          description="Tutors are matched by class AND board, CBSE and ICSE demand different preparation."
        />

        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {classGroups.map((group, i) => (
            <StaggerItem key={group.range} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="overflow-hidden">
                  <Image
                    src={photos[i]}
                    alt={alts[i]}
                    width={800}
                    height={520}
                    className="aspect-3/2 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <Eyebrow className="bg-cream">{group.range}</Eyebrow>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">{group.stage}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-gray">{group.note}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15}>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="rounded-full bg-ink px-5 py-2.5 font-display text-lg font-bold text-cream">
              CBSE
            </span>
            <span className="rounded-full bg-ink px-5 py-2.5 font-display text-lg font-bold text-cream">
              ICSE
            </span>
            <span className="ml-2 text-gray">
              NCERT-first practice for CBSE · detail-heavy coverage for ICSE
            </span>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
