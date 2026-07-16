import type { PropsWithChildren } from "react";

export function PageContainer({ children }: PropsWithChildren) {
  return (
    <div
      className="
mx-auto
w-full
max-w-screen-2xl
px-8
py-8
"
    >
      {children}
    </div>
  );
}
