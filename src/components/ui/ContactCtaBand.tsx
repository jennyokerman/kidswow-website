import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ContactCtaBandProps = {
  title: string;
  body: ReactNode;
  tagline?: string;
  buttonLabel: string;
  buttonHref?: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: "left" | "right";
  fullWidthTitle?: boolean;
  imageObjectPosition?: string;
  imageWrapperClassName?: string;
};

export function ContactCtaBand({
  title,
  body,
  tagline,
  buttonLabel,
  buttonHref = "/contact",
  image,
  imageAlt,
  imagePosition = "right",
  fullWidthTitle = false,
  imageObjectPosition,
  imageWrapperClassName,
}: ContactCtaBandProps) {
  const imageWrapperClass =
    imageWrapperClassName ??
    (fullWidthTitle
      ? "relative min-h-0 w-full overflow-hidden rounded-2xl ring-2 ring-amber/70 ring-offset-2 ring-offset-sky max-[520px]:aspect-[4/3] min-[521px]:h-full min-[521px]:min-h-[12rem]"
      : "relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-2 ring-amber/70 ring-offset-2 ring-offset-sky");

  const imageBlock = (
    <div className={imageWrapperClass}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        style={
          imageObjectPosition
            ? { objectPosition: imageObjectPosition }
            : undefined
        }
        sizes="(max-width: 520px) 90vw, (max-width: 1024px) 40vw, 480px"
      />
    </div>
  );

  const titleBlock = (
    <>
      <h2 className="font-display text-xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-amber sm:mt-4 sm:w-16"
        aria-hidden
      />
    </>
  );

  const bodyBlock = (
    <div className="relative flex min-w-0 flex-col justify-center py-2 text-center sm:py-4 sm:text-left">
      <div className="text-left text-xs leading-relaxed text-white/95 sm:text-sm md:text-base lg:text-lg">
        {body}
      </div>
      {tagline ? (
        <p className="mt-3 text-left font-display text-sm font-semibold text-white sm:text-base md:text-lg">
          {tagline}
        </p>
      ) : null}
      <div className="mt-4 flex justify-center sm:mt-6 sm:justify-start md:mt-8">
        <ButtonLink
          href={buttonHref}
          size="md"
          className="px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
        >
          {buttonLabel}
        </ButtonLink>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-sky p-3 sm:rounded-3xl sm:p-6 md:p-10 lg:p-14">
          <div
            className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-amber/30 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-6 right-1/4 h-24 w-24 rounded-full bg-amber/20 blur-2xl"
            aria-hidden
          />

          {fullWidthTitle ? (
            <>
              <div className="relative px-2 py-3 text-center sm:px-4 sm:py-4 md:px-0 md:pb-6 lg:pb-8">
                {titleBlock}
              </div>

              <div className="relative mx-auto w-full max-w-5xl px-1 sm:px-2 lg:max-w-6xl">
                <div className="grid max-[520px]:grid-cols-1 max-[520px]:gap-4 min-[521px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[521px]:items-stretch min-[521px]:gap-5 md:gap-8">
                  {imagePosition === "left" ? imageBlock : null}
                  {bodyBlock}
                  {imagePosition === "right" ? imageBlock : null}
                </div>
              </div>
            </>
          ) : (
            <div className="relative grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center gap-3 sm:gap-6 md:grid-cols-2 md:gap-10 lg:gap-14">
              {imagePosition === "left" ? imageBlock : null}

              <div className="relative min-w-0 py-3 text-center sm:px-2 sm:py-6 md:px-0 md:py-8">
                {titleBlock}
                <div className="mx-auto mt-3 max-w-2xl text-left text-xs leading-relaxed text-white/95 sm:mt-6 sm:text-base md:mt-8 md:text-xl">
                  {body}
                </div>
                {tagline ? (
                  <p className="mx-auto mt-3 max-w-2xl font-display text-sm font-semibold text-white sm:mt-4 sm:text-lg md:text-xl">
                    {tagline}
                  </p>
                ) : null}
                <div className="mt-5 flex justify-center sm:mt-8 md:mt-12">
                  <ButtonLink
                    href={buttonHref}
                    size="md"
                    className="px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
                  >
                    {buttonLabel}
                  </ButtonLink>
                </div>
              </div>

              {imagePosition === "right" ? imageBlock : null}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
