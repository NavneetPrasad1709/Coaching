import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/data";
import { waLink, telLink, site } from "@/lib/site";

/** Pill-row FAQ, template-style, with a WhatsApp escape hatch below. */
export default function Faq() {
  return (
    <Section id="faq" tone="cream">
      <Container>
        <SectionHeading
          title="Have Questions?"
          sticker="Ask Away"
          stickerColor="lime"
          description="The things parents ask before the demo class."
        />

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqs} defaultOpen={0} />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <p className="text-gray">Something specific to your child?</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button
                href={waLink("Hello, I have a question that is not in your FAQ.")}
                variant="whatsapp"
                size="md"
                wa
                external
              >
                Ask on WhatsApp
              </Button>
              <Button href={telLink} variant="outline" size="md">
                Call {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
