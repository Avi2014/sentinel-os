import type { PropsWithChildren } from "react";

export function Main({ children }: PropsWithChildren) {
  return (
    <main
      className="
        flex-1
        overflow-auto
        bg-(--background)
      "
    >
      {children}
    </main>
  );
}
