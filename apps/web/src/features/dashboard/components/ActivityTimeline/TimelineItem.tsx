import { Clock3 } from "lucide-react";

import { cn } from "@/lib/utils";

import type { TimelineEvent } from "../../types";

interface TimelineItemProps {
  event: TimelineEvent;
  className?: string;
}

export function TimelineItem({ event, className }: TimelineItemProps) {
  return (
    <div
      className={cn(
        "hover:bg-muted/50 flex items-start gap-3 rounded-lg border p-4 transition-colors",
        className,
      )}
    >
      <Clock3 className="text-primary mt-0.5 h-5 w-5" />

      <div className="min-w-0 flex-1">
        <h4 className="font-medium">{event.title}</h4>

        <p className="text-muted-foreground mt-1 text-sm">
          {event.description}
        </p>

        <p className="text-muted-foreground mt-3 text-xs">
          {new Date(event.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

TimelineItem.displayName = "TimelineItem";
