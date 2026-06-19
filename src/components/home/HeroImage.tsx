"use client";

import Image from "next/image";
import { useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

/** Intrinsic size for Next/Image; display is capped by max-w classes (larger on wide screens). */
const WIDTH = 560;
const HEIGHT = 420; // 4:3

const wrapperClass =
  "block w-full max-w-[min(92vw,22rem)] sm:max-w-[26rem] md:max-w-none";

export function HeroImage() {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  if (usePlaceholder) {
    return (
      <div className={wrapperClass}>
        <MediaPlaceholder label="Hero image — add public/hero.png" className="rounded-2xl" />
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <Image
        src="/hero.png"
        alt="KidsWow — inspiring hands-on learning"
        width={WIDTH}
        height={HEIGHT}
        unoptimized
        className="h-auto w-full rounded-2xl object-cover ring-1 ring-navy/10"
        sizes="(max-width: 768px) 416px, 50vw"
        onError={() => setUsePlaceholder(true)}
      />
    </div>
  );
}
