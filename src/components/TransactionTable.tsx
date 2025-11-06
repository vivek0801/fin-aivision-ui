import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Home, Car, Film, Utensils, CreditCard } from "lucide-react";

const transactions = [
  {
    id: 1,
    date: "Nov 05, 2025",
    category: "Food",
    description: "Restaurant dinner",
    amount: "-₹1,250",
    type: "expense",
    paymentMode: "Credit Card",
    status: "completed",
    icon: Utensils,
  },
  {
    id: 2,
    date: "Nov 04, 2025",
    category: "Salary",
    description: "Monthly salary",
    amount: "+₹85,000",
    type: "income",
    paymentMode: "Bank Transfer",
    status: "completed",
    icon: CreditCard,
  },
  {
    id: 3,
    date: "Nov 03, 2025",
    category: "Rent",
    description: "Apartment rent",
    amount: "-₹18,000",
    type: "expense",
    paymentMode: "UPI",
    status: "completed",
    icon: Home,
  },
  {
    id: 4,
    date: "Nov 02, 2025",
    category: "Transport",
    description: "Fuel",
    amount: "-₹2,500",
    type: "expense",
    paymentMode: "Debit Card",
    status: "completed",
    icon: Car,
  },
  {
    id: 5,
    date: "Nov 01, 2025",
    category: "Entertainment",
    description: "Movie tickets",
    amount: "-₹800",
    type: "expense",
    paymentMode: "Credit Card",
    status: "completed",
    icon: Film,
  },
  {
    id: 6,
    date: "Oct 31, 2025",
    category: "Shopping",
    description: "Groceries",
    amount: "-₹4,200",
    type: "expense",
    paymentMode: "UPI",
    status: "completed",
    icon: ShoppingCart,
  },
];

export const TransactionTable = () => {
  return (
    <div className="rounded-xl border border-border bg-card shadow-soft">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="font-semibold">Date</TableHead>
            <TableHead className="font-semibold">Category</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
            <TableHead className="font-semibold">Amount</TableHead>
            <TableHead className="font-semibold">Payment Mode</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <TableRow key={transaction.id} className="border-border hover:bg-secondary/50 transition-colors">
                <TableCell className="font-medium text-sm">
                  {transaction.date}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-secondary p-2">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{transaction.category}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {transaction.description}
                </TableCell>
                <TableCell>
                  <span
                    className={`text-sm font-semibold ${
                      transaction.type === "income"
                        ? "text-success"
                        : "text-foreground"
                    }`}
                  >
                    {transaction.amount}
                  </span>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {transaction.paymentMode}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
