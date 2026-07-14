import { cn } from "@/lib/utils";

const tones = {
  paper: "bg-paper text-ink",
  "paper-deep": "bg-paper-deep text-ink",
  white: "bg-white text-ink",
  board: "bg-board text-paper",
} as const;

type Props = {
  id?: string;
  tone?: keyof typeof tones;
  /** Faint notebook baseline rules in the background. */
  ruled?: boolean;
  /** Vertical red margin line on the left (desktop only). */
  marginRule?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  tone = "paper",
  ruled = false,
  marginRule = false,
  className,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        // overflow-clip (not hidden) so lg:sticky columns inside sections still work
        "relative scroll-mt-24 overflow-clip py-24 md:py-32",
        tones[tone],
        ruled && (tone === "board" ? "ruled-dark" : "ruled"),
        marginRule && "margin-rule",
        className
      )}
    >
      {children}
    </section>
  );
}
