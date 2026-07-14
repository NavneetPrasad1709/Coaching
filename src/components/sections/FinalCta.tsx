import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Sticker from "@/components/ui/Sticker";
import { waLink, telLink, site } from "@/lib/site";

/** Big lime panel, template-style: "Ready to Get Started!" */
export default function FinalCta() {
  return (
    <Section tone="cream" className="pt-0 md:pt-0">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-lime px-6 py-16 text-center sm:px-12 sm:py-20">
            <span className="animate-float absolute left-[8%] top-8" aria-hidden="true">
              <Sticker color="coral" delay={0.5}>
                Free Demo
              </Sticker>
            </span>
            <span
              className="animate-float absolute right-[8%] top-8"
              style={{ animationDelay: "1.1s" }}
              aria-hidden="true"
            >
              <Sticker color="leaf" delay={0.65}>
                No Joining Fee
              </Sticker>
            </span>

            <TextReveal
              as="h2"
              text="Ready to Get Started?"
              className="mx-auto max-w-3xl text-balance font-display text-[2.8rem] font-semibold tracking-tight leading-none text-ink sm:text-6xl lg:text-7xl"
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
                One free demo class is all it takes to know. If it&apos;s not a fit, you owe
                nothing.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-coral">
                Admissions open for the new session · limited home-tuition slots per locality
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Button href="#enquiry" variant="primary" size="lg" plus>
                  Book the Free Demo Class
                </Button>
                <Button href={waLink()} variant="whatsapp" size="lg" wa external>
                  Chat on WhatsApp
                </Button>
              </div>
              <p className="mt-6 text-sm font-semibold text-ink/70">
                Prefer to talk?{" "}
                <a href={telLink} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-ink">
                  Call {site.phoneDisplay}
                </a>
              </p>
            </Reveal>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
