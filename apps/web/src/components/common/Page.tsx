import type { PropsWithChildren } from "react";

interface PageProps extends PropsWithChildren {
  className?: string;
}

export function Page({
  children,
  className = "",
}: PageProps) {
  return (
    <div
      className={[
        "flex flex-col gap-8",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}