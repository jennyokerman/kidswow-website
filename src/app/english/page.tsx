import type { Metadata } from "next";
import { EnglishBackground } from "@/components/resources/english/EnglishBackground";
import { EnglishHero } from "@/components/resources/english/EnglishHero";
import { EnglishLegacy } from "@/components/resources/english/EnglishLegacy";
import { EnglishWorksheets } from "@/components/resources/english/EnglishWorksheets";
import { SITE } from "@/lib/site";

const title = "KidsWow English";
const description =
  "The legacy of KidsWow EnglishPro in Japan—and where to find ESL Launch and original YouTube video resources today.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: `${SITE.url}/english`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function EnglishPage() {
  return (
    <>
      <EnglishHero />
      <EnglishBackground />
      <EnglishLegacy />
      <EnglishWorksheets />
    </>
  );
}
