import { cn } from "@/lib/utils";

const palettes = [
  "bg-board text-paper",
  "bg-board-soft text-paper",
  "bg-paper-deep text-board",
  "bg-board-deep text-paper",
] as const;

/** Initials avatar — deterministic color per name. Replace with photos when available. */
export default function Avatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const hash = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-12 shrink-0 place-items-center rounded-full font-display text-base font-semibold",
        palettes[hash % palettes.length],
        className
      )}
    >
      {initials}
    </span>
  );
}
