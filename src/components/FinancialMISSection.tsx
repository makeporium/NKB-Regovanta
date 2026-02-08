import { BarChart3, TrendingUp, FileText, PieChart } from "lucide-react";

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

const FinancialMISSection = () => {
  return (
    <section id="financial-mis" className="pt-8 md:pt-12 pb-12 md:pb-20 lg:pb-28 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        {/* Section Header - centered like About, Services */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Advisory Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Financial MIS &{" "}
            <span className="text-gradient">Management Reporting</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Structured, decision-ready financial visibility tailored for life sciences and pharmaceutical organizations operating within regulated, audit-driven environments.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            All services are delivered remotely and aligned with global pharma and life sciences operating standards.
          </p>
        </div>

        {/* What We Offer - centered */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              What We Offer
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We design and deliver structured monthly MIS packs that provide leadership with clear visibility into key financial dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="glass-card p-6 md:p-8 shadow-card hover:shadow-elevated transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 md:p-8 shadow-card">
            <p className="text-muted-foreground text-center">
              Reports are <strong className="text-foreground">concise, consistent, and suitable</strong> for management reviews and internal oversight — designed to support leadership decision-making in regulated environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialMISSection;
