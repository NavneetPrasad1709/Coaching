import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { subjectGroups } from "@/lib/data";
import { waLink } from "@/lib/site";

export default function Subjects() {
  return (
    <Section id="subjects" tone="white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* ---- Sticky intro column ---- */}
          <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
            <SectionHeading
              eyebrow="Subjects"
              title="From long division to derivatives"
              description="Specialists for every subject, matched to your child's class and board — because CBSE and ICSE reward different preparation."
            />

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-3xl bg-paper-deep p-7">
                <h3 className="text-lg font-semibold text-board">
                  Don&apos;t see a subject?
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  We arrange tutors for any school subject.
                </p>
                <Button
                  href={waLink(
                    "Hello, I need a tutor for a subject not listed on your site."
                  )}
                  variant="dark"
                  size="md"
                  arrow
                  external
                  className="mt-5"
                >
                  Ask on WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ---- Subject groups ---- */}
          <div className="space-y-10 lg:col-span-8">
            {subjectGroups.map((group) => (
              <div key={group.group}>
                <Reveal y={12}>
                  <h3 className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-rule-deep">
                    {group.group}
                    <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
                  </h3>
                </Reveal>

                <StaggerGroup
                  staggerChildren={0.04}
                  className="mt-5 flex flex-wrap gap-2.5"
                >
                  {group.subjects.map((subject) => (
                    <StaggerItem
                      key={subject}
                      className="cursor-default rounded-full border border-ink/12 bg-white px-5 py-2.5 text-[0.95rem] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-marigold hover:bg-marigold/10"
                    >
                      {subject}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
