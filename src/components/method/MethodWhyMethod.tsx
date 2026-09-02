import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import girlWithMagnet from "../../../Kidswowpics1/KidswowMethod/girlwithmagnet.jpg";

export function MethodWhyMethod() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          Why KidsWow Method?
        </h2>

        <div className="mx-auto mt-10 max-w-5xl lg:mt-12">
          <div className="float-right mb-3 ml-3 w-[36%] min-w-[5.5rem] max-w-[14rem] sm:mb-4 sm:ml-5 md:ml-8 md:max-w-[18rem] lg:max-w-[20rem]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-sage/10 ring-1 ring-sage/25 sm:rounded-2xl">
              <Image
                src={girlWithMagnet}
                alt="A child exploring magnets during a KidsWow learning session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 36vw, 20rem"
              />
            </div>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-charcoal/85 sm:space-y-5 md:text-lg">
            <p>
              Kids like to learn until it becomes too scary, too risky, or too
              boring. Every person will experience criticism and fear. For some,
              this happens early and often. For others, not so much. Also, some
              kids have a ton of energy and can barely sit still. Some kids are
              loud. Some are quiet. There are kids that are artistic, or like
              sports, or like science, and some kids like all of these subjects
              and more.
            </p>
            <p>
              KidsWow is built for kids like this. It is not just a program, but
              a method, a style of learning, and an environment where children of
              all ages can know that they are safe to try and explore new things.
              Learning becomes fun again, and difficult subjects become
              understandable.
            </p>
          </div>

          <div className="mt-10 flex justify-center md:mt-12">
            <ButtonLink href="/#kidswow-stories" size="lg">
              Explore More KidsWow Inspiration
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
