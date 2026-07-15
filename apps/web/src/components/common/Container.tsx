import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-screen-2xl">{children}</div>;
}
