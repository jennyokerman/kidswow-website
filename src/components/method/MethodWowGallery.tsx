import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

const WOW_IMAGES = [
  "Wow moment — photo 1",
  "Wow moment — photo 2",
  "Wow moment — photo 3",
] as const;

export function MethodWowGallery() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-2 sm:gap-4 md:gap-5">
          {WOW_IMAGES.map((label) => (
            <MediaPlaceholder
              key={label}
              label={label}
              className="min-w-0 rounded-2xl text-[0.65rem] sm:text-sm"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
