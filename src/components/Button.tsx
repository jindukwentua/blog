import Link from "next/link";
import { type CSSProperties, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  style?: CSSProperties;
};

type ButtonAsButtonProps = CommonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  title?: string;
};

type ButtonAsLinkProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  title?: string;
};

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function getVariantClasses(variant: Variant) {
  switch (variant) {
    case "primary":
      return cx(
        "text-white",
        "shadow-[0_10px_26px_rgba(26,35,126,0.22)]",
        "hover:-translate-y-[1px] hover:shadow-[0_14px_36px_rgba(66,165,245,0.22)]",
        "active:translate-y-0 active:shadow-[0_10px_26px_rgba(26,35,126,0.18)]"
      );
    case "secondary":
      return cx(
        "border",
        "bg-[var(--surface-2)]",
        "text-[var(--foreground)]",
        "hover:bg-[var(--surface-1)]"
      );
    case "ghost":
      return cx(
        "text-[var(--foreground)]",
        "hover:bg-[var(--surface-2)]"
      );
  }
}

const baseClasses = cx(
  "inline-flex items-center justify-center gap-2",
  "rounded-xl px-4 py-2",
  "text-sm font-semibold",
  "transition will-change-transform",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-accent)]",
  "ring-offset-[var(--background)]"
);

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";

  const classes = cx(
    baseClasses,
    variant === "primary" && "bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-accent)]",
    variant === "secondary" && "border-[var(--border)]",
    variant === "ghost" && "border border-transparent",
    getVariantClasses(variant),
    props.className
  );

  if ("href" in props) {
    const { href, children, target, rel, ariaLabel, title, style } = props;
    return (
      <Link
        href={href}
        className={classes}
        style={style}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        title={title}
      >
        {children}
      </Link>
    );
  }

  const { children, type = "button", onClick, disabled, ariaLabel, title, style } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(classes, disabled && "opacity-60 cursor-not-allowed")}
      style={style}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  );
}

