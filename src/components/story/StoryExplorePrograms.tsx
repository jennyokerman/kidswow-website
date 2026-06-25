import { AboutPageCta } from "@/components/about/AboutPageCta";

export function StoryExplorePrograms() {
  return (
    <AboutPageCta
      title="Ready to Explore More?"
      links={[
        { href: "/contact", label: "Contact" },
        { href: "/resources/english", label: "KidsWow English" },
      ]}
    />
  );
}
