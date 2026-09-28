export type EnglishWorksheet = {
  title: string;
  href?: string;
  status: "ready" | "coming-soon";
};

export type EnglishWorksheetGroup = {
  book: "Book 1" | "Book 2";
  worksheets: EnglishWorksheet[];
};

/**
 * Worksheets that support the ESL Launch curriculum.
 * PDFs live under public/resources/english/book-1 and book-2.
 */
export const ENGLISH_WORKSHEET_GROUPS: EnglishWorksheetGroup[] = [
  {
    book: "Book 1",
    worksheets: [
      {
        title: "Aa Zz Worksheet",
        href: "/resources/english/book-1/aa-zz-worksheet-book-1.pdf",
        status: "ready",
      },
      {
        title: "ABC abc Worksheet",
        href: "/resources/english/book-1/abc-abc-worksheet-book-1.pdf",
        status: "ready",
      },
      {
        title: "Matching ABC to abcs Worksheet 1",
        href: "/resources/english/book-1/matching-abc-to-abcs-worksheet-1.pdf",
        status: "ready",
      },
      {
        title: "Matching ABC to abcs Worksheet 2",
        href: "/resources/english/book-1/matching-abc-to-abcs-worksheet-2.pdf",
        status: "ready",
      },
      {
        title: "Matching ABC to abcs Worksheet 3",
        href: "/resources/english/book-1/matching-abc-to-abcs-worksheet-3.pdf",
        status: "ready",
      },
      {
        title: "Matching ABC to abcs Worksheet 4",
        href: "/resources/english/book-1/matching-abc-to-abcs-worksheet-4.pdf",
        status: "ready",
      },
      {
        title: "Matching Capital ABC's Worksheet 1",
        href: "/resources/english/book-1/matching-capital-abcs-worksheet-1.pdf",
        status: "ready",
      },
      {
        title: "Matching Capital ABC's Worksheet 2",
        href: "/resources/english/book-1/matching-capital-abcs-worksheet-2.pdf",
        status: "ready",
      },
      {
        title: "Matching Capital ABC's Worksheet 3",
        href: "/resources/english/book-1/matching-capital-abcs-worksheet-3.pdf",
        status: "ready",
      },
      {
        title: "Matching Capital ABC's Worksheet 4",
        href: "/resources/english/book-1/matching-capital-abcs-worksheet-4.pdf",
        status: "ready",
      },
      {
        title: "Matching Small abcs Worksheet 2",
        href: "/resources/english/book-1/matching-small-abcs-worksheet-2.pdf",
        status: "ready",
      },
      {
        title: "Matching Small abcs Worksheet 3",
        href: "/resources/english/book-1/matching-small-abcs-worksheet-3.pdf",
        status: "ready",
      },
      {
        title: "Matching Small abcs Worksheet 4",
        href: "/resources/english/book-1/matching-small-abcs-worksheet-4.pdf",
        status: "ready",
      },
    ],
  },
  {
    book: "Book 2",
    worksheets: [
      {
        title: "Is the Car Fast Worksheet 1",
        href: "/resources/english/book-2/is-the-car-fast-worksheet-1.pdf",
        status: "ready",
      },
      {
        title: "Is the Car Slow Worksheet 2",
        href: "/resources/english/book-2/is-the-car-slow-worksheet-2.pdf",
        status: "ready",
      },
      {
        title: "What is the Boy Doing Worksheet 1",
        href: "/resources/english/book-2/what-is-the-boy-doing-worksheet-1.pdf",
        status: "ready",
      },
      {
        title: "What is the Boy Doing Worksheet 2",
        href: "/resources/english/book-2/what-is-the-boy-doing-worksheet-2.pdf",
        status: "ready",
      },
      {
        title: "What is the Caveman Doing Worksheet 1",
        href: "/resources/english/book-2/what-is-the-caveman-doing-worksheet-1.pdf",
        status: "ready",
      },
      {
        title: "What is the Caveman Doing Worksheet 2",
        href: "/resources/english/book-2/what-is-the-caveman-doing-worksheet-2.pdf",
        status: "ready",
      },
    ],
  },
];
