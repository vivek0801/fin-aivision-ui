import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Utensils,
  Home,
  Car,
  Film,
  ShoppingBag,
  Zap,
  Plus,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const budgets = [
  {
    category: "Food & Dining",
    icon: Utensils,
    spent: 12500,
    budget: 15000,
    color: "hsl(245, 70%, 60%)",
  },
  {
    category: "Rent & Bills",
    icon: Home,
    spent: 20000,
    budget: 20000,
    color: "hsl(260, 70%, 65%)",
  },
  {
    category: "Transport",
    icon: Car,
    spent: 5500,
    budget: 8000,
    color: "hsl(240, 60%, 70%)",
  },
  {
    category: "Entertainment",
    icon: Film,
    spent: 3200,
    budget: 5000,
    color: "hsl(250, 65%, 75%)",
  },
  {
    category: "Shopping",
    icon: ShoppingBag,
    spent: 4800,
    budget: 6000,
    color: "hsl(235, 55%, 80%)",
  },
  {
    category: "Utilities",
    icon: Zap,
    spent: 3500,
    budget: 4000,
    color: "hsl(255, 50%, 85%)",
  },
];

const Budgets = () => {
  const totalBudget = budgets.reduce((sum, b) => sum + b.budget, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const totalPercentage = (totalSpent / totalBudget) * 100;

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Budgets</h1>
          <p className="text-muted-foreground mt-1">
            Set and track your spending limits
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow">
          <Plus className="mr-2 h-4 w-4" />
          Add Budget
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Budget
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">₹{totalBudget.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">For this month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">₹{totalSpent.toLocaleString()}</p>
            <p className="text-xs text-success mt-1">
              ₹{(totalBudget - totalSpent).toLocaleString()} remaining
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalPercentage.toFixed(1)}%</p>
            <Progress value={totalPercentage} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.budget) * 100;
          const remaining = budget.budget - budget.spent;
          const isOverBudget = percentage > 100;
          const isNearLimit = percentage > 80 && percentage <= 100;
          const Icon = budget.icon;

          return (
            <Card
              key={budget.category}
              className="border-border/50 shadow-soft transition-all hover:shadow-glow"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-xl p-3"
                      style={{ backgroundColor: `${budget.color}20` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: budget.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{budget.category}</h3>
                      <p className="text-sm text-muted-foreground">
                        {isOverBudget ? (
                          <span className="text-destructive font-medium">
                            ₹{Math.abs(remaining).toLocaleString()} over budget
                          </span>
                        ) : (
                          <span>₹{remaining.toLocaleString()} remaining</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      {isOverBudget && (
                        <AlertTriangle className="h-5 w-5 text-destructive" />
                      )}
                      {isNearLimit && !isOverBudget && (
                        <TrendingUp className="h-5 w-5 text-warning" />
                      )}
                      <Badge
                        variant={
                          isOverBudget
                            ? "destructive"
                            : isNearLimit
                            ? "secondary"
                            : "outline"
                        }
                        className={
                          isNearLimit && !isOverBudget
                            ? "bg-warning/10 text-warning border-warning/20"
                            : ""
                        }
                      >
                        {percentage.toFixed(0)}%
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">
                      ₹{budget.spent.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      of ₹{budget.budget.toLocaleString()}
                    </span>
                  </div>
                  <Progress
                    value={Math.min(percentage, 100)}
                    className="h-2"
                    style={
                      {
                        "--progress-background": budget.color,
                      } as React.CSSProperties
                    }
                  />
                </div>

                {isOverBudget && (
                  <div className="mt-4 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                    You've exceeded your budget limit. Consider reviewing your
                    spending in this category.
                  </div>
                )}

                {isNearLimit && !isOverBudget && (
                  <div className="mt-4 rounded-lg bg-warning/10 p-3 text-sm text-warning">
                    You're approaching your budget limit. Track your expenses
                    carefully.
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Budgets;
