import { Benefits } from "@/components/home/Benefits";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { Method } from "@/components/home/Method";
import { Programs } from "@/components/home/Programs";
import { KidsWowStories } from "@/components/home/KidsWowStories";
import { WhoWeAre } from "@/components/home/WhoWeAre";

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
