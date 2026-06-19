"use client";

import Image from "next/image";
import { useState } from "react";

export function PhysicsCreationLightbulbImage() {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div
        className="flex aspect-square w-full max-w-[13rem] items-center justify-center rounded-2xl bg-sage/10 ring-1 ring-sage/25 sm:max-w-[15rem] md:max-w-[17rem]"
        role="img"
        aria-label="Illustration unavailable"
      >
        <span className="px-2 text-center text-xs font-medium text-sage">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[13rem] overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-sage/25 sm:max-w-[15rem] md:mx-0 md:max-w-[17rem]">
      <Image
        src="/color-lightbulb.png"
        alt="Colorful lightbulb illustration for the Let There Be Light experience"
        fill
        unoptimized
        className="object-contain object-center p-2"
        sizes="(max-width: 768px) 208px, 272px"
        onError={() => setImageFailed(true)}
      />
    </div>
  );
}
