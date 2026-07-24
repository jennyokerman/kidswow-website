import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export function StoryFounder() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          The Founder
        </h2>

        <div className="mx-auto mt-10 max-w-5xl lg:mt-12">
          <div className="float-right mb-3 ml-3 w-[36%] min-w-[5.5rem] max-w-[14rem] sm:mb-4 sm:ml-5 md:ml-8 md:max-w-[18rem] lg:max-w-[20rem]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-sage/10 ring-1 ring-sage/25 sm:rounded-2xl md:rounded-3xl">
              <Image
                src="/story/founder.jpg"
                alt={`Photo of ${SITE.founder}, founder of KidsWow`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 36vw, 20rem"
              />
            </div>
          </div>

          <div className="space-y-4 text-xs leading-relaxed text-charcoal/85 sm:space-y-5 sm:text-sm md:text-base lg:text-lg">
            <p>
              {SITE.founder} has loved learning since he was a kid. His mom would
              bring small machines home from work, and he became fascinated with
              taking them apart, discovering how they worked from the inside, and
              sometimes even figuring out how to fix them! That love of learning
              fueled him to study and graduate with a degree in Mechanical
              Engineering. Later he felt called to become a missionary and moved
              to Japan. He lived in Japan for almost four decades, where he and
              his family launched KidsWow.
            </p>
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
