import { type ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export type AboutCtaLink = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function AboutPageCta({
  title,
  children,
  links,
}: {
  title?: string;
  children?: ReactNode;
  links: AboutCtaLink[];
}) {
  return (
    <section className="pb-14 md:pb-20 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl bg-navy px-6 py-10 text-center sm:px-8 md:px-12 md:py-14">
          {title ? (
            <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl md:text-4xl">
              {title}
            </h2>
          ) : null}
          {children ? (
            <div
              className={`space-y-4 text-base leading-relaxed text-cream/85 md:text-lg ${
                title ? "mt-5" : ""
              }`}
            >
              {children}
            </div>
          ) : null}
          <nav
            className={`flex flex-wrap items-center justify-center gap-3 md:gap-4 ${
              title || children ? "mt-8 md:mt-10" : ""
            }`}
            aria-label="Explore KidsWow"
          >
            {links.map((link) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant={link.variant ?? "primary"}
                size="lg"
                className={link.className}
              >
                {link.label}
              </ButtonLink>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
