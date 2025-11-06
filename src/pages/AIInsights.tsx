import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Target,
  Calendar,
  RefreshCw,
} from "lucide-react";

const insights = [
  {
    id: 1,
    type: "warning",
    title: "Increased Dining Expenses",
    description:
      "You spent 18% more on dining this month compared to last month. This is ₹1,900 above your average.",
    impact: "high",
    icon: AlertTriangle,
    recommendations: [
      "Consider meal planning to reduce eating out",
      "Set a weekly dining budget of ₹2,500",
      "Track restaurant expenses separately",
    ],
  },
  {
    id: 2,
    type: "positive",
    title: "Excellent Savings Progress",
    description:
      "You're on track to save ₹38,000 this month, exceeding your goal by 12%. Keep up the great work!",
    impact: "high",
    icon: Target,
    recommendations: [
      "Consider investing the surplus in a mutual fund",
      "Build an emergency fund with 6 months of expenses",
      "Set a new stretch goal of ₹45,000",
    ],
  },
  {
    id: 3,
    type: "info",
    title: "Fuel Expenses Trending Down",
    description:
      "Your transportation costs have decreased by 12% this month. This could be due to reduced travel or better fuel efficiency.",
    impact: "medium",
    icon: TrendingDown,
    recommendations: [
      "Continue optimizing your commute routes",
      "Consider carpooling for additional savings",
      "Reallocate savings to other financial goals",
    ],
  },
  {
    id: 4,
    type: "suggestion",
    title: "Emergency Fund Opportunity",
    description:
      "You have consistent surplus each month. Consider building an emergency fund of ₹2,50,000 (6 months expenses).",
    impact: "high",
    icon: Lightbulb,
    recommendations: [
      "Automate ₹15,000 monthly to emergency fund",
      "Keep it in a high-yield savings account",
      "Achieve full funding in 12-16 months",
    ],
  },
  {
    id: 5,
    type: "info",
    title: "Weekend Spending Pattern",
    description:
      "Your expenses are 45% higher on weekends. Entertainment and dining are the main contributors.",
    impact: "medium",
    icon: Calendar,
    recommendations: [
      "Plan budget-friendly weekend activities",
      "Set a weekend spending cap of ₹5,000",
      "Look for free entertainment options",
    ],
  },
  {
    id: 6,
    type: "positive",
    title: "Consistent Income Stream",
    description:
      "Your income has been stable for the past 6 months. This provides a solid foundation for long-term planning.",
    impact: "medium",
    icon: TrendingUp,
    recommendations: [
      "Create a 5-year financial roadmap",
      "Consider diversifying income sources",
      "Invest in skill development for career growth",
    ],
  },
];

const AIInsights = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <div className="rounded-xl bg-gradient-primary p-2">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            AI Insights
          </h1>
          <p className="text-muted-foreground mt-1">
            Personalized financial recommendations powered by AI
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh Insights
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{insights.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Generated this month</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              High Priority
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-warning">
              {insights.filter((i) => i.impact === "high").length}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Require attention</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Positive Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-success">
              {insights.filter((i) => i.type === "positive").length}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Keep up the good work!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        {insights.map((insight) => {
          const Icon = insight.icon;
          const impactColor =
            insight.impact === "high"
              ? "text-warning"
              : insight.impact === "medium"
              ? "text-primary"
              : "text-muted-foreground";

          const typeColor =
            insight.type === "warning"
              ? "bg-warning/10 text-warning border-warning/20"
              : insight.type === "positive"
              ? "bg-success/10 text-success border-success/20"
              : insight.type === "suggestion"
              ? "bg-primary/10 text-primary border-primary/20"
              : "bg-secondary";

          return (
            <Card
              key={insight.id}
              className="border-border/50 shadow-soft transition-all hover:shadow-glow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="rounded-xl bg-gradient-primary p-3">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {insight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {insight.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge className={typeColor}>
                          {insight.type.charAt(0).toUpperCase() +
                            insight.type.slice(1)}
                        </Badge>
                        <Badge variant="outline" className={impactColor}>
                          {insight.impact} impact
                        </Badge>
                      </div>
                    </div>

                    <div className="rounded-lg bg-secondary/50 p-4 space-y-2">
                      <h4 className="font-semibold text-sm flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-primary" />
                        Recommendations
                      </h4>
                      <ul className="space-y-1.5">
                        {insight.recommendations.map((rec, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-glow">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-xl bg-gradient-primary p-3">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How AI Insights Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our AI analyzes your spending patterns, income trends, and financial
                goals to provide personalized recommendations. The insights are updated
                regularly based on your latest transactions and help you make smarter
                financial decisions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIInsights;
