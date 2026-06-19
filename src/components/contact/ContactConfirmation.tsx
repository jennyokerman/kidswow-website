import { ButtonLink } from "@/components/ui/Button";

export function ContactConfirmation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-confirmation-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-cream p-8 shadow-xl ring-1 ring-navy/10 md:p-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-charcoal/45 transition-colors hover:bg-navy/5 hover:text-charcoal"
          aria-label="Close confirmation and stay on contact page"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2
          id="contact-confirmation-title"
          className="pr-8 font-display text-2xl font-semibold text-navy md:text-3xl"
        >
          Thank you for contacting KidsWow Programs!
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          We will review the information you sent and respond as soon as
          possible.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" size="lg">
            Return to Home
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
