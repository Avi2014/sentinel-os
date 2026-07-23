import { History } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { TimelineEvent } from "../../types";

import { ActivityTimelineSkeleton } from "./ActivityTimelineSkeleton";
import { TimelineItem } from "./TimelineItem";

interface ActivityTimelineProps {
  timeline?: TimelineEvent[];
  isLoading?: boolean;
  className?: string;
  onViewAll?: () => void;
}

export function ActivityTimeline({
  timeline,
  isLoading = false,
  className,
  onViewAll,
}: ActivityTimelineProps) {
  if (isLoading) {
    return <ActivityTimelineSkeleton />;
  }

  if (!timeline) {
    return null;
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Activity Timeline
          </CardTitle>

          <p className="text-muted-foreground mt-1 text-sm">
            {timeline.length} event{timeline.length !== 1 ? "s" : ""}
          </p>
        </div>

        <Button variant="ghost" size="sm" onClick={onViewAll}>
          View All
        </Button>
      </CardHeader>

      <CardContent>
        {timeline.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <History className="text-muted-foreground mb-3 h-10 w-10" />

            <h3 className="font-medium">No Recent Activity</h3>

            <p className="text-muted-foreground mt-1 text-sm">
              Activity will appear here as events occur.
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[420px] pr-4">
            <div className="space-y-3">
              {timeline.map((event) => (
                <TimelineItem key={event.id} event={event} />
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

ActivityTimeline.displayName = "ActivityTimeline";
    