import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Sticker from "@/components/ui/Sticker";
import ZoomImage from "@/components/ui/ZoomImage";
import { waLink } from "@/lib/site";

/** "Our Story", photo beside the story of Santosh Sir, template-style. */
export default function About() {
  return (
    <Section tone="soft">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {/* TODO(client): replace with a real photo of Santosh Sir with students. */}
            <div className="relative">
              <ZoomImage
                src="/images/class2.jpg"
                alt="Students studying together with their tutor"
                width={1600}
                height={1100}
                className="aspect-4/3 w-full rounded-3xl shadow-card"
              />
              <Sticker color="leaf" delay={0.5} className="absolute -left-3 -top-4">
                Since 2014
              </Sticker>
            </div>
          </Reveal>

          <div>
            <div className="relative inline-block">
              <TextReveal
                as="h2"
                text="Our Story"
                className="font-display text-[2.6rem] font-bold leading-[1.02] text-ink sm:text-5xl lg:text-6xl"
              />
              <Sticker color="lilac" rotate={8} delay={0.4} className="absolute -right-14 -top-4 sm:-right-20">
                Personal
              </Sticker>
            </div>
            <Reveal delay={0.15}>
              <p className="mt-6 leading-relaxed text-gray">
                Santosh Singh started teaching mathematics in 2014 with five students in a
                single room in Prayagraj. The method was simple: understand the child before
                teaching the chapter, test every month, and talk to parents honestly.
              </p>
              <p className="mt-4 leading-relaxed text-gray">
                Today the same method runs across Prayagraj and Varanasi with a team of
                verified tutors, home tuition, online classes and small classroom batches
                for Classes 5-12, CBSE and ICSE. The first class is still always free.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href="#teachers" variant="dark" size="md" arrow>
                  Meet the Teachers
                </Button>
                <Button
                  href={waLink("Hello Santosh Sir, I would like to know more about your tuition.")}
                  variant="whatsapp"
                  size="md"
                  wa
                  external
                >
                  Talk to Santosh Sir
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
