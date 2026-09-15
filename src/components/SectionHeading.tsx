import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "../lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-paper-100 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-paper-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
