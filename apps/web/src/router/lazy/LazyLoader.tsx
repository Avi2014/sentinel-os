import { FullScreenLoader } from "@components/feedback";
import { type PropsWithChildren,Suspense } from "react";

export function LazyLoader({
  children,
}: PropsWithChildren) {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      {children}
    </Suspense>
  );
}