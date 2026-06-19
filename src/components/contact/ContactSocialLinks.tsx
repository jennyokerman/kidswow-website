const SOCIAL_LINKS = [
  {
    label: "YouTube",
    handle: "@KidswowSTEM",
    href: "https://www.youtube.com/@KidswowSTEM",
    iconBg: "bg-red-50",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="#FF0000"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.7 15.5V8.5L15.8 12l-6.1 3.5Z"
        />
        <path fill="#FFFFFF" d="M9.7 15.5V8.5L15.8 12l-6.1 3.5Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "KidsWow English Pro",
    href: "https://www.facebook.com/KidsWowEnglishPro",
    iconBg: "bg-[#1877F2]/10",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="#1877F2"
          d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.24 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.24 24 18.1 24 12.07Z"
        />
      </svg>
    ),
  },
] as const;

export function ContactSocialLinks() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full max-w-xs items-center gap-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-sm transition-all hover:border-sky/40 hover:shadow-md sm:w-auto"
        >
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${link.iconBg} transition-transform group-hover:scale-105`}
          >
            {link.icon}
          </span>
          <span className="min-w-0 text-left">
            <span className="block text-sm font-semibold text-navy">{link.label}</span>
            <span className="block truncate text-sm text-charcoal/70">{link.handle}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
