import { CONTACT_STEPS } from "@/lib/contact-form";

export function ContactProgressBar({ currentStep }: { currentStep: number }) {
  const progress = (currentStep / CONTACT_STEPS.length) * 100;

  return (
    <div className="mb-8 md:mb-10">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {CONTACT_STEPS.map((step) => {
          const isActive = step.id === currentStep;
          const isComplete = step.id < currentStep;

          return (
            <div key={step.id} className="min-w-0 text-center">
              <div
                className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors sm:h-9 sm:w-9 ${
                  isActive
                    ? "bg-amber text-navy"
                    : isComplete
                      ? "bg-sage text-white"
                      : "bg-navy/10 text-navy/50"
                }`}
              >
                {step.id}
              </div>
              <p
                className={`text-xs font-bold leading-snug sm:text-sm ${
                  isActive ? "text-navy" : "text-charcoal/60"
                }`}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-navy/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky via-sage to-amber transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Step ${currentStep} of ${CONTACT_STEPS.length}`}
        />
      </div>
    </div>
  );
}
