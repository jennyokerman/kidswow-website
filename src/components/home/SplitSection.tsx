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
  const textColumn = <div className="min-w-0">{children}</div>;
  const mediaColumn = (
    <div className="min-w-0 max-[480px]:max-w-[19rem]">{media}</div>
  );

  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <Container>
        <div className="grid grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] items-center gap-6 max-[480px]:grid-cols-1 max-[480px]:gap-6 lg:gap-14">
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
