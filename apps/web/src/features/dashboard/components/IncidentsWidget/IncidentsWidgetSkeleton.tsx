import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function IncidentsWidgetSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-52" />
      </CardHeader>

      <CardContent className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex gap-3 rounded-lg border p-4">
            <Skeleton className="mt-1 h-5 w-5 rounded-full" />

            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/5" />

              <Skeleton className="h-4 w-2/5" />

              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-24 rounded-full" />

                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

IncidentsWidgetSkeleton.displayName = "IncidentsWidgetSkeleton";
