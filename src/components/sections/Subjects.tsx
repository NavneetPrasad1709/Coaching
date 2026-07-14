import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { subjectGroups } from "@/lib/data";
import { waLink } from "@/lib/site";

/** All subjects as friendly pills, grouped by stage. */
export default function Subjects() {
  return (
    <Section id="subjects" tone="cream">
      <Container>
        <SectionHeading
          title="Every Subject Covered"
          sticker="12+"
          stickerColor="coral"
          description="From long division to derivatives, specialists per subject, matched by board."
        />

        <div className="mx-auto mt-14 max-w-4xl space-y-10">
          {subjectGroups.map((group) => (
            <div key={group.group}>
              <Reveal>
                <p className="mb-4 text-center text-sm font-bold uppercase tracking-wide text-gray">
                  {group.group}
                </p>
              </Reveal>
              <StaggerGroup
                staggerChildren={0.04}
                className="flex flex-wrap justify-center gap-2.5"
              >
                {group.subjects.map((subject) => (
                  <StaggerItem key={subject}>
                    <span className="inline-block cursor-default rounded-full bg-white px-5 py-2.5 font-display text-base font-semibold text-ink shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime">
                      {subject}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 text-center">
            <p className="text-gray">
              Don&apos;t see a subject? We arrange tutors for any school subject.
            </p>
            <Button
              href={waLink("Hello, I need a tutor for a subject not listed on your site.")}
              variant="dark"
              size="md"
              wa
              external
              className="mt-4"
            >
              Ask on WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
