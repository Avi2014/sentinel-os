import { Bot, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { AIRecommendation } from "../../types";

interface RecommendationItemProps {
  recommendation: AIRecommendation;
  className?: string;
}

function getConfidenceVariant(confidence: number) {
  if (confidence >= 90) return "default";
  if (confidence >= 75) return "secondary";
  return "outline";
}

export function RecommendationItem({
  recommendation,
  className,
}: RecommendationItemProps) {
  return (
    <div
      className={cn(
        "hover:bg-muted/50 flex items-start gap-3 rounded-lg border p-4 transition-colors",
        className,
      )}
    >
      <Sparkles className="text-primary mt-0.5 h-5 w-5" />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="truncate font-medium">{recommendation.title}</h4>

            <p className="text-muted-foreground mt-1 text-sm">
              {recommendation.description}
            </p>
          </div>

          <Badge variant={getConfidenceVariant(recommendation.confidence)}>
            {recommendation.confidence}%
          </Badge>
        </div>

        <div className="text-muted-foreground mt-3 flex items-center gap-2 text-xs">
          <Bot className="h-3.5 w-3.5" />
          AI Recommendation
        </div>
      </div>
    </div>
  );
}

RecommendationItem.displayName = "RecommendationItem";
