import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TrendingUp, TrendingDown, Calendar, DollarSign } from "lucide-react";

const monthlyTrend = [
  { month: "Jan", income: 75000, expenses: 52000, savings: 23000 },
  { month: "Feb", income: 78000, expenses: 49000, savings: 29000 },
  { month: "Mar", income: 82000, expenses: 54000, savings: 28000 },
  { month: "Apr", income: 80000, expenses: 51000, savings: 29000 },
  { month: "May", income: 85000, expenses: 48000, savings: 37000 },
  { month: "Jun", income: 85000, expenses: 47000, savings: 38000 },
];

const categorySpending = [
  { category: "Food & Dining", amount: 12500, trend: 18 },
  { category: "Rent & Bills", amount: 20000, trend: 0 },
  { category: "Transport", amount: 5500, trend: -12 },
  { category: "Entertainment", amount: 3200, trend: 8 },
  { category: "Shopping", amount: 4800, trend: 22 },
  { category: "Others", amount: 1000, trend: -5 },
];

const weeklySpending = [
  { day: "Mon", amount: 2100 },
  { day: "Tue", amount: 1850 },
  { day: "Wed", amount: 3200 },
  { day: "Thu", amount: 1950 },
  { day: "Fri", amount: 4100 },
  { day: "Sat", amount: 5200 },
  { day: "Sun", amount: 3100 },
];

const paymentMethods = [
  { name: "Credit Card", value: 18500, color: "hsl(245, 70%, 60%)" },
  { name: "Debit Card", value: 12200, color: "hsl(260, 70%, 65%)" },
  { name: "UPI", value: 10800, color: "hsl(240, 60%, 70%)" },
  { name: "Cash", value: 5500, color: "hsl(250, 65%, 75%)" },
];

const Analytics = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Detailed insights into your financial patterns
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Avg. Daily Spend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹1,567</p>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Highest Expense
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₹20,000</p>
            <p className="text-xs text-muted-foreground mt-1">Rent & Bills</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Transaction Freq.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">8.5</p>
            <p className="text-xs text-muted-foreground mt-1">Per day average</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-soft">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingDown className="h-4 w-4" />
              Savings Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-success">44.7%</p>
            <p className="text-xs text-muted-foreground mt-1">Of total income</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trends" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-6">
          <Card className="border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle>6-Month Financial Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={monthlyTrend}>
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
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="hsl(142, 76%, 45%)"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="hsl(245, 70%, 60%)"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="hsl(260, 70%, 65%)"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card className="border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={categorySpending}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="amount" fill="hsl(245, 70%, 60%)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>

              <div className="mt-6 space-y-3">
                {categorySpending.map((cat) => (
                  <div
                    key={cat.category}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                  >
                    <span className="font-medium">{cat.category}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">₹{cat.amount.toLocaleString()}</span>
                      <span
                        className={`flex items-center gap-1 text-sm font-medium ${
                          cat.trend > 0
                            ? "text-destructive"
                            : cat.trend < 0
                            ? "text-success"
                            : "text-muted-foreground"
                        }`}
                      >
                        {cat.trend > 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : cat.trend < 0 ? (
                          <TrendingDown className="h-4 w-4" />
                        ) : null}
                        {Math.abs(cat.trend)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weekly" className="space-y-6">
          <Card className="border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle>Weekly Spending Pattern</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={weeklySpending}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="amount" fill="hsl(260, 70%, 65%)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card className="border-border/50 shadow-soft">
            <CardHeader>
              <CardTitle>Payment Method Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={paymentMethods}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {paymentMethods.map((entry, index) => (
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

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="flex items-center justify-between p-4 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-4 w-4 rounded"
                        style={{ backgroundColor: method.color }}
                      />
                      <span className="font-medium">{method.name}</span>
                    </div>
                    <span className="text-sm font-semibold">
                      ₹{method.value.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
