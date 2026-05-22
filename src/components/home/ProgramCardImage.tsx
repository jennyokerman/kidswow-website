"use client";

import Image from "next/image";
import { useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function ProgramCardImage({
  src,
  alt,
  placeholderLabel,
}: {
  src: string;
  alt: string;
  placeholderLabel: string;
}) {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  if (usePlaceholder) {
    return (
      <MediaPlaceholder label={placeholderLabel} square className="rounded-2xl" />
    );
  }

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-sage/10">
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => setUsePlaceholder(true)}
      />
    </div>
  );
}
