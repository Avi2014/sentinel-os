import { Bot } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import type { AIRecommendation } from "../../types";

import { AIRecommendationsSkeleton } from "./AIRecommendationsSkeleton";
import { RecommendationItem } from "./RecommendationItem";

interface AIRecommendationsProps {
  recommendations?: AIRecommendation[];
  isLoading?: boolean;
  className?: string;
  onViewAll?: () => void;
}

export function AIRecommendations({
  recommendations,
  isLoading = false,
  className,
  onViewAll,
}: AIRecommendationsProps) {
  if (isLoading) {
    return <AIRecommendationsSkeleton />;
  }

  if (!recommendations) {
    return null;
  }

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            AI Recommendations
          </CardTitle>

          <p className="text-muted-foreground mt-1 text-sm">
            {recommendations.length} recommendation
            {recommendations.length !== 1 ? "s" : ""}
          </p>
        </div>

        <Button variant="ghost" size="sm" onClick={onViewAll}>
          View All
        </Button>
      </CardHeader>

      <CardContent>
        {recommendations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <Bot className="text-muted-foreground mb-3 h-10 w-10" />

            <h3 className="font-medium">No Recommendations</h3>

            <p className="text-muted-foreground mt-1 text-sm">
              AI has no new recommendations at the moment.
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[420px] pr-4">
            <div className="space-y-3">
              {recommendations.map((recommendation) => (
                <RecommendationItem
                  key={recommendation.id}
                  recommendation={recommendation}
                />
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

AIRecommendations.displayName = "AIRecommendations";
