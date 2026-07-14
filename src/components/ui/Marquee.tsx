import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Seconds per loop. */
  duration?: number;
  reverse?: boolean;
};

/**
 * CSS-driven infinite marquee. Children are rendered twice for a seamless
 * loop; globals.css disables the animation under prefers-reduced-motion.
 */
export default function Marquee({ children, className, duration = 42, reverse = false }: Props) {
  return (
    <div className={cn("mask-fade-x overflow-hidden", className)}>
      <div
        className={cn("flex w-max animate-marquee", reverse && "[animation-direction:reverse]")}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
