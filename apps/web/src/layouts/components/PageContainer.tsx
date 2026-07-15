import type { PropsWithChildren } from "react";

export function PageContainer({
  children,
}: PropsWithChildren) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-screen-2xl
        p-6
      "
    >
      {children}
    </div>
  );
}