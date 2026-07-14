import { cn } from "@/lib/utils";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import Sticker from "./Sticker";

type Props = {
  title: string;
  /** Sticker word attached after the headline (template signature). */
  sticker?: string;
  stickerColor?: "coral" | "lilac" | "leaf" | "lime" | "ink";
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Big centered black headline with a playful sticker, template-style. */
export default function SectionHeading({
  title,
  sticker,
  stickerColor = "coral",
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "", className)}>
      <div className="relative inline-block">
        <TextReveal
          as="h2"
          text={title}
          className="text-balance font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        />
        {sticker && (
          <Sticker
            color={stickerColor}
            rotate={7}
            delay={0.45}
            className="absolute -right-6 -top-5 sm:-right-10 sm:-top-6"
          >
            {sticker}
          </Sticker>
        )}
      </div>
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed text-gray",
              align === "center" && "mx-auto max-w-xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
