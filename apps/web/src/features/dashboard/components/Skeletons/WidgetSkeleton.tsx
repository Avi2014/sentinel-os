import { Skeleton } from "@/components/ui/skeleton";

import { Widget } from "../Widget";

export function WidgetSkeleton() {
  return (
    <Widget>
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-64" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-5/6" />
        </div>
      </div>
    </Widget>
  );
}

WidgetSkeleton.displayName = "WidgetSkeleton";