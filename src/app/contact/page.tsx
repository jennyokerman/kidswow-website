import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSocialLinks } from "@/components/contact/ContactSocialLinks";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with KidsWow about STEM, Physics & Creation, and other programs for your community.",
};

export default function ContactPage() {
  const turnstileSiteKey = process.env.TURNSTILE_SITE_KEY;

  return (
    <div className="bg-gradient-to-b from-cream via-white/40 to-cream">
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-semibold text-navy md:text-5xl">
              Let&apos;s Connect!
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
              Get in touch through social media
            </p>
            <div className="mt-8">
              <ContactSocialLinks />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ContactForm turnstileSiteKey={turnstileSiteKey} />
          </div>
        </Container>
      </section>
    </div>
  );
}
