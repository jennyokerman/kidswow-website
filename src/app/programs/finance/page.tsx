import type { Metadata } from "next";
import { FinanceFoundationsClosing } from "@/components/programs/finance/FinanceFoundationsClosing";
import { FinanceFoundationsHero } from "@/components/programs/finance/FinanceFoundationsHero";
import { FinanceFoundationsTopics } from "@/components/programs/finance/FinanceFoundationsTopics";
import { SITE } from "@/lib/site";

const title = "Finance Foundations";
const description =
  "Practical financial education for young adults—10th grade through college. Learn cashflow, emergency planning, and an entrepreneurial mindset with KidsWow in the Kansas City Metro.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | ${SITE.name}`,
    description,
    url: `${SITE.url}/programs/finance`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function FinancePage() {
  return (
    <>
      <FinanceFoundationsHero />
      <FinanceFoundationsTopics />
      <FinanceFoundationsClosing />
    </>
  );
}
