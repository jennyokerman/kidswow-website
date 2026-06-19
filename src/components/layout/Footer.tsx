import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/site";

const linkClass =
  "text-sm leading-snug text-cream/75 transition-colors hover:text-amber";

const FOOTER_SECTIONS = [
  { title: "Programs", links: NAV_LINKS.programs },
  { title: "About", links: NAV_LINKS.about },
  { title: "Resources", links: NAV_LINKS.resources },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-cream">
      <Container className="py-6 md:py-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-xs shrink-0 lg:max-w-sm">
            <Link
              href="/"
              className="font-display text-lg font-semibold text-cream transition-colors hover:text-cream/90"
            >
              {SITE.name}
            </Link>
            <p className="mt-1.5 text-sm leading-snug text-cream/70">
              {SITE.mission}
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium leading-snug text-cream/90 transition-colors hover:text-amber"
            >
              Contact us
            </Link>
          </div>

          <nav
            className="grid grid-cols-3 gap-x-4 gap-y-4 sm:gap-x-8 lg:gap-x-10"
            aria-label="Footer navigation"
          >
            {FOOTER_SECTIONS.map(({ title, links }) => (
              <div key={title}>
                <p className="mb-1.5 text-sm font-medium text-cream">{title}</p>
                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="text-xs leading-snug text-cream/50">
            &copy; {new Date().getFullYear()} {SITE.name}. Founded by{" "}
            {SITE.founder}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
