import { cn } from "@/lib/utils";

/** Small pill chip label (template's "2-3 Years" style). */
export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[0.8rem] font-semibold text-ink shadow-card",
        className
      )}
    >
      {children}
    </span>
  );
}
