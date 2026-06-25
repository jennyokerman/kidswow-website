import { AboutPageCta } from "@/components/about/AboutPageCta";
import { NAV_LINKS } from "@/lib/site";

export function MethodFinalCta() {
  return (
    <AboutPageCta
      title="Imagine what we could learn using a natural learning process."
      links={NAV_LINKS.programs.map((program) => ({
        href: program.href,
        label: program.label,
      }))}
    >
      <p>KidsWow STEM, physics, finance, language&hellip;</p>
    </AboutPageCta>
  );
}
