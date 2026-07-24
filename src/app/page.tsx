import type { Metadata } from "next";
import { Benefits } from "@/components/home/Benefits";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { Method } from "@/components/home/Method";
import { Programs } from "@/components/home/Programs";
import { KidsWowStories } from "@/components/home/KidsWowStories";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "KidsWow | Inspiring kids to love learning",
  },
  description: `${SITE.mission} Hands-on STEM, Physics & Creation, and financial education for families and communities in the Kansas City Metro.`,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <Method />
      <Benefits />
      <KidsWowStories />
      <CtaBand />
      <WhoWeAre />
    </>
  );
}
