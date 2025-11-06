import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface InsightCardProps {
  message: string;
}

export const InsightCard = ({ message }: InsightCardProps) => {
  return (
    <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 transition-all hover:shadow-glow hover:border-primary/40">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="rounded-lg bg-gradient-primary p-2">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
          <p className="text-sm font-medium leading-relaxed">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
};
