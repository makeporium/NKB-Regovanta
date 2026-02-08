import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, TrendingUp, FileText, PieChart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const offerings = [
  {
    icon: BarChart3,
    title: "Revenue, Cost & Margin Performance",
    description:
      "Detailed tracking of revenue streams, cost centers, and margin analysis across business units and product lines.",
  },
  {
    icon: TrendingUp,
    title: "R&D, Manufacturing & Overhead Cost Tracking",
    description:
      "Granular visibility into research, manufacturing, quality assurance, and administrative overhead expenditure.",
  },
  {
    icon: FileText,
    title: "Variance Analysis",
    description:
      "Comprehensive variance reporting versus budget and prior periods, highlighting key deviations and their root causes.",
  },
  {
    icon: PieChart,
    title: "Key Financial & Operational Drivers",
    description:
      "Identification and monitoring of the financial and operational KPIs impacting overall business performance.",
  },
];

const FinancialMIS = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-36 md:pt-44">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Advisory Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl">
              Financial MIS &{" "}
              <span className="text-gradient">Management Reporting</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
              Structured, decision-ready financial visibility tailored for life sciences and pharmaceutical organizations operating within regulated, audit-driven environments.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl">
              All services are delivered remotely and aligned with global pharma and life sciences operating standards.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We design and deliver structured monthly MIS packs that provide leadership with clear visibility into key financial dimensions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {offerings.map((item) => (
                <div
                  key={item.title}
                  className="glass-card p-6 md:p-8 shadow-card hover:shadow-elevated transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 glass-card p-6 md:p-8 max-w-4xl mx-auto shadow-card">
              <p className="text-muted-foreground text-center">
                Reports are <strong className="text-foreground">concise, consistent, and suitable</strong> for management reviews and internal oversight — designed to support leadership decision-making in regulated environments.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="btn-gradient">
                <a href="/#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialMIS;
