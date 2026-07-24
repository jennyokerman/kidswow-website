import type { Metadata } from "next";
import { StemProgramClosing } from "@/components/programs/stem/StemProgramClosing";
import { StemProgramCorePillars } from "@/components/programs/stem/StemProgramCorePillars";
import { StemProgramExperience } from "@/components/programs/stem/StemProgramExperience";
import { StemProgramHero } from "@/components/programs/stem/StemProgramHero";
import { StemProgramHowItWorksSection } from "@/components/programs/stem/StemProgramHowItWorksSection";

export const metadata: Metadata = {
  title: "KidsWow STEM",
  description:
    "Hands-on STEM for ages 7–14 in the Kansas City Metro. Real projects, genuine curriculum, and the engineering method—so kids build, test, and want to learn more.",
};

export default function StemPage() {
  return (
    <>
      <StemProgramHero />
      <StemProgramExperience />
      <StemProgramHowItWorksSection />
      <StemProgramCorePillars />
      <StemProgramClosing />
    </>
  );
}
