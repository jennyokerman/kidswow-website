import { StemProgramCorePillars } from "@/components/programs/stem/StemProgramCorePillars";
import { StemProgramExperience } from "@/components/programs/stem/StemProgramExperience";
import { StemProgramOutcomes } from "@/components/programs/stem/StemProgramOutcomes";
import { StemProgramFinalCta } from "@/components/programs/stem/StemProgramFinalCta";
import { StemProgramPhysicsTeaser } from "@/components/programs/stem/StemProgramPhysicsTeaser";
import { StemProgramHero } from "@/components/programs/stem/StemProgramHero";
import { StemProgramProblemSolution } from "@/components/programs/stem/StemProgramProblemSolution";
import { StemProgramDetails } from "@/components/programs/stem/StemProgramDetails";

export default function StemPage() {
  return (
    <>
      <StemProgramHero />
      <StemProgramDetails />
      <StemProgramProblemSolution />
      <StemProgramCorePillars />
      <StemProgramExperience />
      <StemProgramOutcomes />
      <StemProgramFinalCta />
      <StemProgramPhysicsTeaser />
    </>
  );
}
