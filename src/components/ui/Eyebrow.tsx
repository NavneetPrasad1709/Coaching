import { cn } from "@/lib/utils";

/** Mono label with a short rule — sits "in the margin" of the page. */
export default function Eyebrow({
  children,
  dark = false,
  center = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.18em]",
        dark ? "text-marigold" : "text-rule-deep",
        center && "justify-center",
        className
      )}
    >
      <span className={cn("h-px w-8", dark ? "bg-marigold/60" : "bg-rule/50")} aria-hidden="true" />
      {children}
      {center && (
        <span className={cn("h-px w-8", dark ? "bg-marigold/60" : "bg-rule/50")} aria-hidden="true" />
      )}
    </span>
  );
}
