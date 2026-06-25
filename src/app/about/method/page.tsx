import type { Metadata } from "next";
import { MethodFinalCta } from "@/components/method/MethodFinalCta";
import { MethodHero } from "@/components/method/MethodHero";
import { MethodNutshell } from "@/components/method/MethodNutshell";
import { MethodWhyMethod } from "@/components/method/MethodWhyMethod";
import { MethodWhyWow } from "@/components/method/MethodWhyWow";
import { MethodWowGallery } from "@/components/method/MethodWowGallery";
import { NaturalLearningPromotes } from "@/components/method/NaturalLearningPromotes";

export const metadata: Metadata = {
  title: "The KidsWow Method",
  description:
    "Learning the Natural Way — hands-on experiences that spark curiosity, joy, and lasting competence.",
};

export default function MethodPage() {
  return (
    <>
      <MethodHero />
      <MethodWhyWow />
      <MethodWowGallery />
      <MethodNutshell />
      <NaturalLearningPromotes />
      <MethodWhyMethod />
      <MethodFinalCta />
    </>
  );
}
