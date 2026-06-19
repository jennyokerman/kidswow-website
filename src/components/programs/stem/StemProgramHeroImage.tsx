"use client";

import Image from "next/image";
import { useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function StemProgramHeroImage() {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  if (usePlaceholder) {
    return (
      <MediaPlaceholder
        label="Add hero1.png to the public folder"
        className="aspect-[4/3] w-full rounded-2xl"
      />
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sage/10 ring-1 ring-sage/25">
      <Image
        src="/hero1.png"
        alt="Student building a robotics project in the KidsWow STEM program"
        fill
        unoptimized
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 28rem"
        priority
        onError={() => setUsePlaceholder(true)}
      />
    </div>
  );
}
