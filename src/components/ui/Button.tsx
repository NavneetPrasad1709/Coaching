import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

const variants = {
  /** Marigold — the one primary action per view. */
  primary:
    "bg-marigold text-board-deep hover:bg-marigold-deep hover:shadow-glow",
  /** Board green — primary on light when marigold is already in use. */
  dark: "bg-board text-paper hover:bg-board-deep",
  /** Quiet secondary on light backgrounds. */
  outline:
    "border border-ink/20 bg-transparent text-ink hover:border-ink/45 hover:bg-white",
  /** Quiet secondary on dark backgrounds. */
  "outline-dark":
    "border border-paper/30 bg-transparent text-paper hover:border-paper/70 hover:bg-paper/10",
  /** WhatsApp-branded — use only for wa.me links. Dark text: white on #25D366 fails contrast. */
  whatsapp: "bg-wa text-board-deep hover:bg-wa-deep hover:text-paper",
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
  wa = false,
  external = false,
  type = "button",
  className,
  onClick,
  ariaLabel,
}: Props) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold",
    "transition-all duration-300 ease-out active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
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
