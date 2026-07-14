import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ZoomImage from "@/components/ui/ZoomImage";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { steps } from "@/lib/data";

const numColors = ["bg-coral", "bg-lilac", "bg-leaf", "bg-ink"];

/** Daily-routine style rows: numbered blob, title, body. A true sequence. */
export default function HowItWorks() {
  return (
    <Section id="how-it-works" tone="soft">
      <Container>
        <SectionHeading
          title="From Enquiry to First Class"
          sticker="48 hrs"
          stickerColor="lime"
          description="Four steps, no fee until you're convinced."
        />

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="relative order-last lg:order-first lg:col-span-5 lg:sticky lg:top-28">
            <ZoomImage
              src="/images/writing.jpg"
              alt="A student working through practice questions at a desk"
              width={1600}
              height={1100}
              className="aspect-4/5 w-full rounded-3xl shadow-card sm:aspect-4/3 lg:aspect-4/5"
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-3.5 shadow-lift">
              <p className="font-display text-2xl font-semibold text-ink">48 hrs</p>
              <p className="text-xs font-medium text-gray">enquiry → first class</p>
            </div>
          </Reveal>

          <StaggerGroup className="lg:col-span-7">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <StaggerItem key={title}>
              <div className="flex gap-6 rounded-3xl p-6 transition-colors duration-300 hover:bg-white sm:gap-8 sm:p-8">
                <div className="flex flex-col items-center">
                  <span
                    className={`grid size-13 shrink-0 place-items-center rounded-full font-display text-lg font-bold text-white ${numColors[i]} ${i === 3 ? "text-cream" : ""}`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="flex items-center gap-2.5 font-display text-2xl font-bold text-ink">
                    <Icon className="size-5 text-gray" aria-hidden="true" />
                    {title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-gray">{body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <Button href="#enquiry" variant="primary" size="lg" plus>
              Start Step 1, Book the Demo
            </Button>
            <p className="mt-3 text-sm text-gray">Takes two minutes · no fee</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
