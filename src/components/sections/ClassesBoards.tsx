import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { classGroups, boards } from "@/lib/data";

/** Classes 5–12 stage cards + the two boards we teach, side by side. */
export default function ClassesBoards() {
  return (
    <Section tone="paper-deep">
      <Container>
        <SectionHeading
          eyebrow="Classes & boards"
          title="Class 5 to Class 12, both boards"
          description="From foundation years to final boards, every tutor is matched to your child’s exact class and board — because CBSE and ICSE ask for different preparation."
        />

        {/* ---- Class stages ---- */}
        <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
          {classGroups.map((group) => (
            <StaggerItem
              key={group.stage}
              className="h-full rounded-3xl border border-ink/8 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-rule-deep">
                {group.stage}
              </p>
              <h3 className="mt-3 font-display text-3xl text-board">{group.range}</h3>
              <p className="mt-3 leading-relaxed text-muted">{group.note}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.classes.map((cls) => (
                  <li
                    key={cls}
                    className="rounded-full bg-paper-deep px-3.5 py-1.5 font-mono text-sm text-board"
                  >
                    Class {cls}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* ---- Boards ---- */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {boards.map((board, i) => (
            <Reveal key={board.name} delay={0.1 + i * 0.15} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl bg-board p-8 text-paper">
                <h3 className="font-display text-5xl">{board.name}</h3>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mist">
                  {board.full}
                </p>
                <p className="mt-4 leading-relaxed text-mist">{board.note}</p>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-5 right-6 select-none font-display text-[8rem] leading-none text-paper/5"
                >
                  {board.name.charAt(0)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
