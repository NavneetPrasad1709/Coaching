import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { services } from "@/lib/data";
import { waLink, telLink, site } from "@/lib/site";

export default function Services() {
  return (
    <Section id="services" tone="paper">
      <Container>
        {/* ---- Header row ---- */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our services"
            title="Every way your child learns best"
            description="Home tuition, live online classes, or classroom coaching in Prayagraj and Varanasi — plus a placement desk for schools and families hiring verified teachers. Same standards, whichever format you choose."
          />
          <Reveal delay={0.2}>
            <Button
              href={waLink("Hello, I'd like to know more about your tuition services.")}
              variant="whatsapp"
              wa
              external
              ariaLabel="Chat on WhatsApp about our services"
            >
              Chat on WhatsApp
            </Button>
          </Reveal>
        </div>

        {/* ---- Services grid ---- */}
        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <article className="group h-full rounded-3xl border border-ink/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div
                  aria-hidden="true"
                  className="grid size-12 place-items-center rounded-2xl bg-board text-paper transition-transform duration-300 ease-out group-hover:scale-105"
                >
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-board">{service.title}</h3>
                <p className="mt-2.5 text-muted">{service.body}</p>
                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 font-mono text-[0.78rem] uppercase tracking-[0.14em] text-ink/70"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-marigold" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* ---- Mid-page CTA strip ---- */}
        <Reveal className="mt-16">
          <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-3xl bg-board p-8 text-paper md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-marigold/10 blur-2xl"
            />
            <div className="relative max-w-xl">
              <p className="font-display text-2xl md:text-3xl">
                Not sure which format fits? Ask us — it takes two minutes.
              </p>
              <p className="mt-1 text-sm text-mist">
                Tell us the class, board and subjects — we&apos;ll suggest the right format the
                same day.
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-3">
              <Button
                href={waLink("Hello, I need help choosing between home/online/group tuition.")}
                variant="whatsapp"
                wa
                external
                ariaLabel="Chat on WhatsApp to choose a tuition format"
              >
                Chat on WhatsApp
              </Button>
              <Button
                href={telLink}
                variant="outline-dark"
                ariaLabel={`Call ${site.phoneDisplay}`}
              >
                Call {site.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
