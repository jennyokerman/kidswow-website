"use client";

import Image from "next/image";
import { useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

/**
 * Place your photo in the project as: public/about.jpg
 * (You can rename About.jpg → about.jpg when copying into public/.)
 */
export function WhoWeAreImage() {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  if (usePlaceholder) {
    return (
      <div className="w-full max-[480px]:max-w-[17rem]">
        <MediaPlaceholder
          label="Add about.jpg to the public folder"
          className="rounded-3xl"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-sage/10 ring-1 ring-sage/25">
        <Image
          src="/about.jpg"
          alt="KidsWow — who we are"
          fill
          unoptimized
          className="object-cover object-top"
          sizes="(max-width: 480px) 272px, 42vw"
          onError={() => setUsePlaceholder(true)}
        />
      </div>
    </div>
  );
}
