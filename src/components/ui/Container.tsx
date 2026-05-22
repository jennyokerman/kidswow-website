import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-content px-6 md:px-10 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
