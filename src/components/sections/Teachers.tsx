import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { teachers } from "@/lib/data";
import { waLink } from "@/lib/site";

/** The people behind the results — founder first, then the subject leads. */
export default function Teachers() {
  const featured = teachers.find((t) => t.featured);
  const others = teachers.filter((t) => !t.featured);

  return (
    <Section id="teachers" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Meet the teachers"
          title="Taught by people who love the subject"
          description="Every tutor’s degree is verified and every teaching demo is reviewed before they meet a student. The profiles shown here are representative — you’ll meet your child’s shortlisted tutor at the free demo."
        />

        {/* ---- Featured: Santosh Singh ---- */}
        {featured && (
          <Reveal className="mt-14">
            <article className="grid items-start gap-7 rounded-3xl border border-ink/8 bg-paper p-8 shadow-card md:grid-cols-[auto_1fr]">
              <Avatar name={featured.name} className="size-24 text-3xl" />

              <div>
                <h3 className="font-display text-3xl font-medium tracking-tight text-board">
                  {featured.name}
                </h3>
                <p className="mt-1 font-medium text-muted">{featured.role}</p>
                <p className="mt-4 max-w-xl leading-relaxed text-ink/80">{featured.note}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Qualifications">
                  {[featured.credentials, featured.experience].map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-ink/12 bg-white px-3.5 py-1.5 font-mono text-xs text-ink"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>

                <Button
                  href={waLink(
                    "Hello Santosh Sir, I would like to speak with you about tuition for my child."
                  )}
                  variant="whatsapp"
                  size="md"
                  wa
                  external
                  className="mt-6"
                >
                  Talk to Santosh Sir
                </Button>
              </div>
            </article>
          </Reveal>
        )}

        {/* ---- Subject leads ---- */}
        <StaggerGroup className="mt-5 grid gap-5 md:grid-cols-3">
          {others.map((teacher) => (
            <StaggerItem
              key={teacher.name}
              className="rounded-3xl border border-ink/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <Avatar name={teacher.name} className="size-16 text-xl" />

              <h3 className="mt-5 font-display text-2xl font-medium text-board">
                {teacher.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{teacher.role}</p>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">{teacher.note}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Qualifications">
                {[teacher.credentials, teacher.experience].map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-ink/12 bg-paper-deep px-3.5 py-1.5 font-mono text-xs text-ink"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
