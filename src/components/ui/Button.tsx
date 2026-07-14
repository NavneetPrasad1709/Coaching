import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

const variants = {
  /** Charcoal pill, the primary action, Apple-style. */
  primary: "bg-ink text-white shadow-card hover:bg-ink/85",
  /** White pill on tinted surfaces. */
  dark: "bg-white text-ink shadow-card hover:shadow-lift",
  /** Quiet outline. */
  outline: "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-white",
  /** WhatsApp-branded, wa.me links only. */
  whatsapp: "bg-wa text-ink hover:bg-wa-deep hover:text-white",
} as const;

const sizes = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base sm:px-8 sm:py-4",
} as const;

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Appends an arrow that nudges right on hover. */
  arrow?: boolean;
  /** Prepends a plus glyph (template's "Schedule a Tour" style). */
  plus?: boolean;
  /** Prepends the WhatsApp glyph. */
  wa?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  plus = false,
  wa = false,
  external = false,
  type = "button",
  className,
  onClick,
  ariaLabel,
}: Props) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold",
    "transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {plus && <Plus className="size-[1.1em] shrink-0" aria-hidden="true" />}
      {wa && <WhatsAppIcon className="size-[1.15em] shrink-0" />}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="size-[1.05em] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
