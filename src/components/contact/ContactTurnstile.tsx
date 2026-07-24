"use client";

import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export type ContactTurnstileHandle = {
  refreshToken: () => Promise<string>;
};

export const ContactTurnstile = forwardRef<
  ContactTurnstileHandle,
  {
    siteKey: string;
    onToken: (token: string) => void;
    onExpire: () => void;
  }
>(function ContactTurnstile({ siteKey, onToken, onExpire }, ref) {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const pendingResolve = useRef<((token: string) => void) | null>(null);
  const pendingReject = useRef<((error: Error) => void) | null>(null);
  const [loadError, setLoadError] = useState(false);

  const clearPending = () => {
    pendingResolve.current = null;
    pendingReject.current = null;
  };

  const failPending = (message: string) => {
    pendingReject.current?.(new Error(message));
    clearPending();
  };

  useImperativeHandle(ref, () => ({
    refreshToken: () =>
      new Promise<string>((resolve, reject) => {
        pendingResolve.current = resolve;
        pendingReject.current = reject;
        setLoadError(false);
        turnstileRef.current?.reset();
        turnstileRef.current?.execute();

        window.setTimeout(() => {
          if (pendingReject.current) {
            failPending("Verification timed out. Please try again.");
          }
        }, 15_000);
      }),
  }));

  return (
    <>
      <Turnstile
        ref={turnstileRef}
        siteKey={siteKey}
        onSuccess={(token) => {
          onToken(token);
          pendingResolve.current?.(token);
          clearPending();
        }}
        onExpire={() => {
          onExpire();
          failPending("Verification expired. Please try again.");
          turnstileRef.current?.reset();
        }}
        onError={() => {
          setLoadError(true);
          failPending("Verification failed to load.");
        }}
        onTimeout={() => {
          setLoadError(true);
          failPending("Verification timed out. Please try again.");
        }}
        options={{
          theme: "light",
          size: "invisible",
          execution: "execute",
          appearance: "execute",
        }}
      />
      {loadError && (
        <p className="mt-3 text-sm leading-relaxed text-red-600" role="alert">
          Security check couldn&apos;t load. Confirm{" "}
          <strong>kidswow.com</strong> is in your Cloudflare Turnstile
          hostnames, then refresh.
        </p>
      )}
    </>
  );
});
