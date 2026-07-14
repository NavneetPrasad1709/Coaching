import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { teachers } from "@/lib/data";
import { waLink } from "@/lib/site";

// TODO(client): replace with real photos of each tutor.
const portraits = [
  "/images/santosh.jpg",
  "/images/tutor.jpg",
  "/images/arvind.jpg",
  "/images/neha.jpg",
];

/** Portrait cards. Photos are representative placeholders until the client supplies real ones. */
export default function Teachers() {
  return (
    <Section id="teachers" tone="cream">
      <Container>
        <SectionHeading
          title="Meet Our Teachers"
          sticker="Verified"
          stickerColor="leaf"
          description="Degrees checked, demos reviewed, references called, before they ever meet your child. Profiles shown are representative."
        />

        <StaggerGroup className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, i) => (
            <StaggerItem key={teacher.name}>
              <figure className="group text-center transition-transform duration-300 hover:-translate-y-1.5">
                <div className="overflow-hidden rounded-[28px]">
                  <Image
                    src={portraits[i]}
                    alt={`${teacher.name}, ${teacher.role}`}
                    width={640}
                    height={780}
                    className="aspect-4/5 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="font-display text-xl font-bold text-ink">{teacher.name}</p>
                  <p className="mt-0.5 text-sm font-medium text-gray">{teacher.role}</p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-gray/80">
                    {teacher.credentials} · {teacher.experience}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <Button
              href={waLink("Hello Santosh Sir, I would like to speak with you about tuition for my child.")}
              variant="whatsapp"
              size="lg"
              wa
              external
            >
              Talk to Santosh Sir
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
