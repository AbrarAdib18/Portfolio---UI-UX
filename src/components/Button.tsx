import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-violet-400 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-violet-500 text-ink-950 hover:bg-violet-400 active:bg-violet-600 shadow-glow",
  secondary:
    "bg-transparent text-paper-100 border border-ink-500 hover:border-violet-400 hover:text-violet-200",
  ghost: "bg-transparent text-paper-300 hover:text-paper-100 hover:bg-ink-700",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/** Shared CTA control — renders a real <button> or a real <a>, never a dead `href="#"`. */
export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    className,
    children,
    as: _as,
    ...rest
  } = props;
  void _as;

  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorProps}>
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
