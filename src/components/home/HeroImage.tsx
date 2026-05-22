"use client";

import Image from "next/image";
import { useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

/** Intrinsic size for Next/Image; display is capped by max-w classes (larger on wide screens). */
const WIDTH = 560;
const HEIGHT = 420; // 4:3

const wrapperClass =
  "inline-block w-full max-w-[min(92vw,300px)] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[460px] xl:max-w-[520px]";

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
        sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 520px"
        onError={() => setUsePlaceholder(true)}
      />
    </div>
  );
}
