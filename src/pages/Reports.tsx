import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  PieChart,
  BarChart3,
  FileSpreadsheet,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const reports = [
  {
    id: 1,
    title: "Monthly Summary Report",
    description: "Complete overview of income, expenses, and savings for the month",
    date: "November 2025",
    icon: FileText,
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "Category-wise Expense Analysis",
    description: "Detailed breakdown of spending across all categories",
    date: "November 2025",
    icon: PieChart,
    type: "PDF",
    size: "1.8 MB",
  },
  {
    id: 3,
    title: "Transaction Export",
    description: "All transactions with complete details in spreadsheet format",
    date: "November 2025",
    icon: FileSpreadsheet,
    type: "CSV",
    size: "156 KB",
  },
  {
    id: 4,
    title: "Quarterly Financial Report",
    description: "Comprehensive analysis of Q3 2025 financial performance",
    date: "Jul-Sep 2025",
    icon: BarChart3,
    type: "PDF",
    size: "3.2 MB",
  },
  {
    id: 5,
    title: "Budget Performance Report",
    description: "Tracking of budget adherence across all categories",
    date: "November 2025",
    icon: TrendingUp,
    type: "PDF",
    size: "1.5 MB",
  },
  {
    id: 6,
    title: "Year-to-Date Summary",
    description: "Complete financial overview from January to November 2025",
    date: "Jan-Nov 2025",
    icon: Calendar,
    type: "PDF",
    size: "4.1 MB",
  },
];

const quickReports = [
  {
    title: "This Month",
    description: "Generate current month report",
    icon: Calendar,
  },
  {
    title: "Last Month",
    description: "October 2025 report",
    icon: Calendar,
  },
  {
    title: "Last Quarter",
    description: "Q3 2025 summary",
    icon: BarChart3,
  },
  {
    title: "Year-to-Date",
    description: "2025 complete report",
    icon: TrendingUp,
  },
];

const Reports = () => {
  const { toast } = useToast();

  const handleDownload = (reportTitle: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${reportTitle}...`,
    });
  };

  const handleGenerate = (reportType: string) => {
    toast({
      title: "Report Generated",
      description: `${reportType} report has been generated successfully.`,
    });
  };

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground mt-1">
          Generate and download detailed financial reports
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickReports.map((report) => {
          const Icon = report.icon;
          return (
            <Card
              key={report.title}
              className="border-border/50 shadow-soft transition-all hover:shadow-glow cursor-pointer group"
              onClick={() => handleGenerate(report.title)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="rounded-xl bg-gradient-primary p-3 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{report.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {report.description}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  >
                    Generate
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-border/50 shadow-soft">
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {reports.map((report) => {
              const Icon = report.icon;
              return (
                <div
                  key={report.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-base mb-1">
                          {report.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {report.description}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {report.date}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {report.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {report.size}
                          </span>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => handleDownload(report.title)}
                        className="flex-shrink-0"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="rounded-xl bg-gradient-primary p-3">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Custom Report Generation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Need a specific report? You can generate custom reports by selecting
                date ranges, categories, and report types. All reports include detailed
                charts, summaries, and transaction lists.
              </p>
              <Button className="bg-gradient-primary hover:opacity-90">
                Create Custom Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
