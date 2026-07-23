import { cn } from "@/lib/utils";

interface PlantHealthBarProps {
  value: number;
  className?: string;
}

export function PlantHealthBar({
  value,
  className,
}: PlantHealthBarProps) {
  const percentage = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("space-y-2", className)}>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percentage)}
          aria-label="Plant health"
        />
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Plant Availability</span>
        <span>{percentage.toFixed(1)}%</span>
      </div>
    </div>
  );
}

PlantHealthBar.displayName = "PlantHealthBar";