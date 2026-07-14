import { cn } from "@/lib/utils";

const tones = {
  cream: "bg-cream text-ink",
  soft: "bg-cream-soft text-ink",
  white: "bg-white text-ink",
} as const;

type Props = {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, tone = "cream", className, children }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-clip py-24 md:py-32",
        tones[tone],
        className
      )}
    >
      {children}
    </section>
  );
}
