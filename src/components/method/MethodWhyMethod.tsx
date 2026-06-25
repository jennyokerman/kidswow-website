import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function MethodWhyMethod() {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          Why KidsWow Method?
        </h2>

        <div className="mx-auto mt-10 max-w-5xl lg:mt-12">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-6 max-[520px]:grid-cols-1 max-[520px]:gap-8 lg:gap-10">
            <p className="min-w-0 text-base leading-relaxed text-charcoal/85 md:text-lg">
              Kids like to learn until it becomes too scary, too risky, or too
              boring. Every person will experience criticism and fear. For some,
              this happens early and often. For others, not so much. Also, some
              kids have a ton of energy and can barely sit still. Some kids are
              loud. Some are quiet. There are kids that are artistic, or like
              sports, or like science, and some kids like all of these subjects
              and more.
            </p>

            <div className="min-w-0 max-[520px]:mx-auto max-[520px]:max-w-sm">
              <MediaPlaceholder
                label="KidsWow Method — add photo to public/"
                className="rounded-3xl"
              />
            </div>
          </div>

          <p className="mt-8 text-base leading-relaxed text-charcoal/85 md:mt-10 md:text-lg">
            KidsWow is built for kids like this. It is not just a program, but
            a method, a style of learning, and an environment where children of
            all ages can know that they are safe to try and explore new things.
            Learning becomes fun again, and difficult subjects become
            understandable.
          </p>
        </div>
      </Container>
    </section>
  );
}
