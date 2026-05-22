import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function SplitSection({
  children,
  media,
  reverse = false,
  className = "",
  id,
}: {
  children: ReactNode;
  media: ReactNode;
  reverse?: boolean;
  className?: string;
  id?: string;
}) {
  const textColumn = <div>{children}</div>;
  const mediaColumn = <div>{media}</div>;

  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {reverse ? (
            <>
              {mediaColumn}
              {textColumn}
            </>
          ) : (
            <>
              {textColumn}
              {mediaColumn}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
