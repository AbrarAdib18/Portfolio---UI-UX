import { cn } from "../lib/utils";

interface TagProps {
  children: string;
  variant?: "default" | "accent";
  className?: string;
}

export default function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium font-mono",
        variant === "default" &&
          "border-ink-500 bg-ink-800 text-paper-400",
        variant === "accent" &&
          "border-ember-500/40 bg-ember-500/10 text-ember-400",
        className
      )}
    >
      {children}
    </span>
  );
}
