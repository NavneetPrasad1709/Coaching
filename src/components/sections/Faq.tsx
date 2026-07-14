import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/lib/data";
import { site, waLink, telLink } from "@/lib/site";

/** FAQ — sticky heading + support card on the left, accordion on the right. */
export default function Faq() {
  return (
    <Section id="faq" tone="paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          {/* ---- Left: heading + support card (sticky on desktop) ---- */}
          <div className="self-start lg:sticky lg:top-28 lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers before you even ask"
              description="The questions parents ask us most — fees, demos, tutors and what happens if something isn't working."
            />

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-3xl bg-board p-7 text-paper">
                <h3 className="font-display text-xl">
                  Something specific to your child?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Every child&apos;s situation is a little different. Message us
                  directly and Santosh Sir or the team will reply the same day.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button
                    href={waLink("Hello, I have a question that is not in your FAQ.")}
                    variant="whatsapp"
                    size="md"
                    wa
                    external
                    ariaLabel="Ask your question on WhatsApp"
                  >
                    Ask on WhatsApp
                  </Button>
                  <Button
                    href={telLink}
                    variant="outline-dark"
                    size="md"
                    ariaLabel={`Call ${site.phoneDisplay}`}
                  >
                    Call {site.phoneDisplay}
                  </Button>
                </div>
                <p className="mt-5 border-t border-paper/10 pt-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mist/80">
                  {site.hours}
                </p>
              </div>
            </Reveal>
          </div>

          {/* ---- Right: the questions ---- */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Accordion items={faqs} defaultOpen={0} />
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
