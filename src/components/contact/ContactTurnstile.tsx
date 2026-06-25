"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useEffect, useRef, useState } from "react";

export function ContactTurnstile({
  siteKey,
  onToken,
  onExpire,
}: {
  siteKey: string;
  onToken: (token: string) => void;
  onExpire: () => void;
}) {
  const ref = useRef<TurnstileInstance>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    ref.current?.execute();
  }, []);

  return (
    <>
      <Turnstile
        ref={ref}
        siteKey={siteKey}
        onSuccess={onToken}
        onExpire={() => {
          onExpire();
          ref.current?.reset();
          ref.current?.execute();
        }}
        onError={() => setLoadError(true)}
        onTimeout={() => setLoadError(true)}
        options={{ theme: "light", size: "invisible" }}
      />
      {loadError && (
        <p className="mt-3 text-sm leading-relaxed text-red-600" role="alert">
          Security check couldn&apos;t load. Add <strong>localhost</strong> to
          your Cloudflare Turnstile widget hostnames, then refresh.
        </p>
      )}
    </>
  );
}
