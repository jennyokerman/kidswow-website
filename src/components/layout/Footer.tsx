import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/site";

const linkClass =
  "text-xs leading-snug text-cream/85 transition-colors hover:text-amber sm:text-sm sm:leading-normal";

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <p className="mb-3 border-b border-white/15 pb-2 text-[0.65rem] font-semibold uppercase tracking-wider text-cream/55">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-cream">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Brand & CTA */}
          <div className="max-w-lg shrink-0">
            <Link
              href="/"
              className="inline-block font-display text-2xl font-semibold text-cream hover:text-cream/90"
            >
              {SITE.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              {SITE.mission}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              We partner with Kansas City area schools, homeschool programs, and
              churches. We&apos;d love to hear from you.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" size="nav">
                Contact
              </ButtonLink>
            </div>
          </div>

          {/* Navigation — three columns, even on small screens */}
          <nav
            className="grid w-full grid-cols-3 gap-4 sm:gap-8 lg:max-w-xl lg:flex-1 lg:gap-10 xl:max-w-2xl xl:gap-12"
            aria-label="Footer navigation"
          >
            <FooterLinks title="Programs" links={NAV_LINKS.programs} />
            <FooterLinks title="About" links={NAV_LINKS.about} />
            <FooterLinks title="Resources" links={NAV_LINKS.resources} />
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 md:mt-14">
          <p className="text-center text-xs leading-relaxed text-cream/50">
            &copy; {new Date().getFullYear()} {SITE.name}. Founded by{" "}
            {SITE.founder}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
