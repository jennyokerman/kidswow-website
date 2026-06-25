import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";

const FOUNDER_IMAGE = "/story/founder.jpg";

export function StoryFounder() {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          The Founder
        </h2>

        <div className="mx-auto mt-10 max-w-5xl lg:mt-12">
          <div className="flex items-start gap-5 max-[480px]:flex-col max-[480px]:gap-6 sm:gap-6 md:gap-8">
            <p className="min-w-0 flex-1 text-base leading-relaxed text-charcoal/85 md:text-lg">
              {SITE.founder} has loved learning since he was a kid. His mom would
              bring small machines home from work, and he became fascinated with
              taking them apart, discovering how they worked from the inside, and
              sometimes even figuring out how to fix them! That love of learning
              fueled him to study and graduate with a degree in Mechanical
              Engineering. Later he felt called to become a missionary and moved
              to Japan. He lived in Japan for almost four decades, where he and
              his family launched KidsWow.
            </p>

            <div className="w-[9.5rem] shrink-0 max-[480px]:mx-auto sm:w-[10.5rem] md:w-[11.5rem] lg:w-[12.5rem]">
              <Image
                src={FOUNDER_IMAGE}
                alt={`Photo of ${SITE.founder}, founder of KidsWow`}
                width={500}
                height={500}
                unoptimized
                className="aspect-square w-full rounded-3xl bg-sage/10 object-cover object-top ring-1 ring-sage/25"
              />
            </div>
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/85 md:mt-10 md:text-lg">
            <p>
              When he returned to the United States in 2021, Warren was
              determined to continue to encourage and equip kids. He connected
              with teachers, schools, and homeschool groups in Kansas City. He
              heard and experienced firsthand the challenges educators face to
              teach kids in a world of fast-paced, online entertainment and social
              media. He saw parents and young people alike wondering what they
              could do to compete in a world where advancements in AI and
              technology cause the economic landscape to shift daily.
            </p>
            <p>
              His conclusion is that we are in a pivotal time. Kids need
              encouragement and space for real, hands-on learning more than
              ever. Skills like problem solving, creativity, and a commitment to
              learning are crucial to equip kids to resiliently face the
              challenges and opportunities ahead of them. Let&apos;s give our kids
              the opportunity to do just that.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
