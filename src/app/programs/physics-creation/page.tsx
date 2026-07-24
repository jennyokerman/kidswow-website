import type { Metadata } from "next";
import { PhysicsCreationAtAGlance } from "@/components/programs/physics-creation/PhysicsCreationAtAGlance";
import { PhysicsCreationClosing } from "@/components/programs/physics-creation/PhysicsCreationClosing";
import { PhysicsCreationHero } from "@/components/programs/physics-creation/PhysicsCreationHero";
import { PhysicsCreationStory } from "@/components/programs/physics-creation/PhysicsCreationStory";
import { PhysicsCreationWhatWeTeach } from "@/components/programs/physics-creation/PhysicsCreationWhatWeTeach";

export const metadata: Metadata = {
  title: "Physics & Creation",
  description:
    "The “Let There Be Light” experience—biblical foundation and modern physics brought to life through light, waves, and motion for groups in the Kansas City area.",
};

export default function PhysicsCreationPage() {
  return (
    <>
      <PhysicsCreationHero />
      <PhysicsCreationWhatWeTeach />
      <PhysicsCreationAtAGlance />
      <PhysicsCreationStory />
      <PhysicsCreationClosing />
    </>
  );
}
