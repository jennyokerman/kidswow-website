"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/site";

type DropdownKey = "programs" | "about" | "resources";

const DROPDOWNS: { key: DropdownKey; label: string }[] = [
  { key: "programs", label: "Programs" },
  { key: "about", label: "About" },
  { key: "resources", label: "Resources" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-cream/90 transition-colors hover:bg-white/10 hover:text-cream"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <Chevron open={open} />
      </button>

      <div
        className={`absolute left-0 top-full z-50 pt-1 transition-all duration-150 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-w-[220px] rounded-2xl bg-white py-2 shadow-lg ring-1 ring-navy/10">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-charcoal transition-colors hover:bg-cream hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-12">
        <Link
          href="/"
          className="font-display text-xl font-semibold text-cream transition-opacity hover:opacity-90 md:text-2xl"
          onClick={closeAll}
        >
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-cream/90 transition-colors hover:bg-white/10 hover:text-cream"
          >
            Home
          </Link>

          {DROPDOWNS.map(({ key, label }) => (
            <NavDropdown key={key} label={label} items={NAV_LINKS[key]} />
          ))}

          <ButtonLink href="/contact" size="nav">
            Contact
          </ButtonLink>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-cream lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-t border-white/10 px-6 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-lg px-3 py-2.5 text-cream hover:bg-white/10"
              onClick={closeAll}
            >
              Home
            </Link>

            {DROPDOWNS.map(({ key, label }) => (
              <div key={key} className="py-1">
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream/50">
                  {label}
                </p>
                {NAV_LINKS[key].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-cream/90 hover:bg-white/10"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="mt-3 px-3">
              <ButtonLink href="/contact" size="nav" className="w-full text-center">
                Contact
              </ButtonLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
