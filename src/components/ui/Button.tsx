import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky";

const variants = {
  primary: "bg-amber text-navy hover:bg-amber/90",
  secondary:
    "border-2 border-navy text-navy bg-transparent hover:bg-navy hover:text-cream",
  ghost: "text-sky hover:text-navy bg-transparent",
} as const;

const sizes = {
  nav: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base md:text-lg",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
} & ComponentPropsWithoutRef<"button">;

type LinkButtonProps = {
  variant?: Variant;
  size?: Size;
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

function classes(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} className={classes(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
