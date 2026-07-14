import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { trustPoints } from "@/lib/data";

/** Six promises typeset like the printed agreement every family signs. */
export default function TrustPillars() {
  return (
    <Section tone="soft">
      <Container>
        <SectionHeading
          title="Six Promises, in Writing"
          sticker="Signed"
          stickerColor="lilac"
          description="Not marketing copy, the working rules of the agreement every family signs before classes begin."
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lift">
            <div className="flex items-center justify-between gap-4 border-b border-line px-7 py-5 sm:px-10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray">
                Written agreement, every family, every month
              </p>
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-lime font-display text-sm font-bold text-ink"
              >
                SS
              </span>
            </div>

            <StaggerGroup className="grid sm:grid-cols-2">
              {trustPoints.map((point, i) => (
                <StaggerItem
                  key={point.title}
                  className={
                    "border-line px-7 py-7 sm:px-10 " +
                    (i < trustPoints.length - 2 ? "border-b " : "") +
                    (i % 2 === 0 ? "sm:border-r " : "") +
                    (i >= trustPoints.length - 2 ? "max-sm:border-b max-sm:last:border-b-0 " : "")
                  }
                >
                  <div className="flex items-baseline gap-4">
                    <span aria-hidden="true" className="font-display text-sm font-extrabold text-coral">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{point.title}</h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-gray">{point.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-line bg-cream-soft px-7 py-6 sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray">
                Nothing verbal, every clause is on the paper you keep
              </p>
              <div className="text-right">
                <p className="font-display text-2xl font-bold italic text-ink">S. Singh</p>
                <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-gray">
                  On behalf of every tutor we place
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button href="#enquiry" variant="primary" size="lg" plus>
              Book a Free Demo Class
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
