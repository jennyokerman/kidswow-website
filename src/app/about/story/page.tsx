import type { Metadata } from "next";
import { StoryBegins } from "@/components/story/StoryBegins";
import { StoryExplorePrograms } from "@/components/story/StoryExplorePrograms";
import { StoryFounder } from "@/components/story/StoryFounder";
import { StoryHero } from "@/components/story/StoryHero";
import { StoryTimeline } from "@/components/story/StoryTimeline";
import { StoryWhyItMatters } from "@/components/story/StoryWhyItMatters";

export const metadata: Metadata = {
  title: "The KidsWow Story",
  description:
    "From KidsWow English in Japan to hands-on STEM and finance in Kansas City — the story of Learning the Natural Way.",
};

export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <StoryBegins />
      <StoryTimeline />
      <StoryWhyItMatters />
      <StoryFounder />
      <StoryExplorePrograms />
    </>
  );
}
