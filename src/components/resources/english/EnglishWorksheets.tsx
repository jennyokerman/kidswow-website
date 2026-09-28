import {
  ENGLISH_WORKSHEET_GROUPS,
  type EnglishWorksheet,
} from "@/content/english-worksheets";
import {
  WorksheetThumbnail,
  thumbnailFromPdfHref,
} from "@/components/resources/english/WorksheetThumbnail";
import { Container } from "@/components/ui/Container";

function WorksheetCard({ worksheet }: { worksheet: EnglishWorksheet }) {
  if (worksheet.status === "ready" && worksheet.href) {
    const href = worksheet.href;
    const filename = href.split("/").pop() ?? "worksheet.pdf";
    const thumbnail = thumbnailFromPdfHref(href);

    return (
      <article className="min-w-0">
        <a
          href={href}
          download={filename}
          target="_blank"
          rel="noopener noreferrer"
          className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
          aria-label={`Download ${worksheet.title}`}
        >
          <WorksheetThumbnail src={thumbnail} title={worksheet.title} />
        </a>
        <a
          href={href}
          download={filename}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-sm font-semibold leading-snug text-sky underline-offset-2 transition-colors hover:text-navy hover:underline md:text-base"
        >
          {worksheet.title}
        </a>
      </article>
    );
  }

  return (
    <article className="min-w-0">
      <div className="relative flex aspect-[3/4] items-center justify-center rounded-xl bg-cream/80 ring-1 ring-navy/10">
        <span className="text-sm text-charcoal/50">Coming soon</span>
      </div>
      <p className="mt-3 text-center text-sm font-semibold leading-snug text-charcoal/60 md:text-base">
        {worksheet.title}
      </p>
    </article>
  );
}

export function EnglishWorksheets() {
  const hasAnyWorksheets = ENGLISH_WORKSHEET_GROUPS.some(
    (group) => group.worksheets.length > 0,
  );

  return (
    <section className="bg-sage/10 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
            Bonus Content: KidsWow English Worksheets
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-left text-base leading-relaxed text-charcoal/85 md:text-lg">
            This is a collection of worksheets to support the English learning
            process. These worksheets are specifically meant to accompany the
            ESL Launch curriculum. Click on the thumbnail to download a
            printable PDF.
          </p>

          {hasAnyWorksheets ? (
            <div className="mt-10 space-y-12 sm:mt-12">
              {ENGLISH_WORKSHEET_GROUPS.map((group) => (
                <div key={group.book}>
                  <h3 className="text-center font-display text-xl font-semibold text-navy md:text-2xl">
                    Worksheets for ESL Launch {group.book}
                  </h3>
                  {group.worksheets.length > 0 ? (
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:mt-8 md:grid-cols-4 md:gap-6">
                      {group.worksheets.map((worksheet) => (
                        <WorksheetCard
                          key={worksheet.title}
                          worksheet={worksheet}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-center text-base text-charcoal/70 md:text-lg">
                      Coming soon
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 space-y-6 sm:mt-12">
              {ENGLISH_WORKSHEET_GROUPS.map((group) => (
                <div key={group.book} className="text-center">
                  <h3 className="font-display text-xl font-semibold text-navy md:text-2xl">
                    Worksheets for ESL Launch {group.book}
                  </h3>
                  <p className="mt-2 text-base text-charcoal/70 md:text-lg">
                    Coming soon
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
