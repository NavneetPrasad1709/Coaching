import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import TextReveal from "./TextReveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Set true on `board` (dark green) sections. */
  dark?: boolean;
  className?: string;
};

/** Standard section opener: margin eyebrow → serif headline → lede. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal y={12}>
        <Eyebrow dark={dark} center={align === "center"}>
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        className={cn(
          "mt-5 text-balance font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]",
          dark ? "text-paper" : "text-board"
        )}
      />
      {description && (
        <Reveal delay={0.15}>
          <p className={cn("mt-6 text-lg leading-relaxed", dark ? "text-mist" : "text-muted")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
