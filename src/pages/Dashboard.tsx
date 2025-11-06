import { StatCard } from "@/components/StatCard";
import { InsightCard } from "@/components/InsightCard";
import { TransactionTable } from "@/components/TransactionTable";
import { Wallet, TrendingUp, TrendingDown, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const incomeExpenseData = [
  { month: "Jun", income: 75000, expenses: 45000 },
  { month: "Jul", income: 82000, expenses: 52000 },
  { month: "Aug", income: 78000, expenses: 48000 },
  { month: "Sep", income: 85000, expenses: 54000 },
  { month: "Oct", income: 85000, expenses: 51000 },
  { month: "Nov", income: 85000, expenses: 47000 },
];

const expenseDistribution = [
  { name: "Food & Dining", value: 12500, color: "hsl(245, 70%, 60%)" },
  { name: "Rent & Bills", value: 20000, color: "hsl(260, 70%, 65%)" },
  { name: "Transport", value: 5500, color: "hsl(240, 60%, 70%)" },
  { name: "Entertainment", value: 3200, color: "hsl(250, 65%, 75%)" },
  { name: "Shopping", value: 4800, color: "hsl(235, 55%, 80%)" },
  { name: "Others", value: 1000, color: "hsl(255, 50%, 85%)" },
];

const insights = [
  "You spent 18% more on dining this month than last month.",
  "Consider saving ₹5,000 to reach your emergency fund goal.",
  "Your fuel expenses are trending down — great job!",
  "You're on track to save ₹38,000 this month, exceeding your goal by 12%.",
];

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's your financial overview.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Balance"
          value="₹2,45,350"
          change="+12.5% from last month"
          changeType="positive"
          icon={Wallet}
          iconBg="bg-primary/10 text-primary"
        />
        <StatCard
          title="Monthly Income"
          value="₹85,000"
          change="Same as last month"
          changeType="neutral"
          icon={TrendingUp}
          iconBg="bg-success/10 text-success"
        />
        <StatCard
          title="Monthly Expenses"
          value="₹47,000"
          change="-8% from last month"
          changeType="positive"
          icon={TrendingDown}
          iconBg="bg-warning/10 text-warning"
        />
        <StatCard
          title="Savings Goal"
          value="76%"
          change="₹38,000 / ₹50,000"
          changeType="positive"
          icon={Target}
          iconBg="bg-accent/10 text-accent"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={incomeExpenseData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(142, 76%, 45%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(142, 76%, 45%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(245, 70%, 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(245, 70%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="hsl(142, 76%, 45%)"
                  strokeWidth={2}
                  fill="url(#colorIncome)"
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="hsl(245, 70%, 60%)"
                  strokeWidth={2}
                  fill="url(#colorExpenses)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader>
            <CardTitle>Expense Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-glow">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-primary p-2">
              <span className="text-xl">💡</span>
            </div>
            <CardTitle>Smart AI Insights</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((insight, index) => (
              <InsightCard key={index} message={insight} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
