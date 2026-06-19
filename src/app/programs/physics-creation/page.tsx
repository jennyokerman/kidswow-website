import { PhysicsCreationFinalCta } from "@/components/programs/physics-creation/PhysicsCreationFinalCta";
import { PhysicsCreationOtherPrograms } from "@/components/programs/physics-creation/PhysicsCreationOtherPrograms";
import { PhysicsCreationHero } from "@/components/programs/physics-creation/PhysicsCreationHero";
import { PhysicsCreationAtAGlance } from "@/components/programs/physics-creation/PhysicsCreationAtAGlance";
import { PhysicsCreationStory } from "@/components/programs/physics-creation/PhysicsCreationStory";
import { PhysicsCreationWhatWeTeach } from "@/components/programs/physics-creation/PhysicsCreationWhatWeTeach";

export default function PhysicsCreationPage() {
  return (
    <>
      <PhysicsCreationHero />
      <PhysicsCreationWhatWeTeach />
      <PhysicsCreationAtAGlance />
      <PhysicsCreationStory />
      <PhysicsCreationFinalCta />
      <PhysicsCreationOtherPrograms />
    </>
  );
}
