import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface KPICardSkeletonProps {
  className?: string;
}

export function KPICardSkeleton({
  className,
}: KPICardSkeletonProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-28" />

        <Skeleton className="h-8 w-8 rounded-md" />
      </CardHeader>

      <CardContent>
        <Skeleton className="mb-2 h-9 w-24" />

        <Skeleton className="h-4 w-36" />
      </CardContent>
    </Card>
  );
}