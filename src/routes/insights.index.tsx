import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

// Updated images for insights
const imgFDA = "/assets/brain/insight_fda_qmsr_1786440932587.png";
const imgEU = "/assets/brain/insight_eu_mdr_1786440985783.png";
const imgInsp = "/assets/brain/insight_fda_inspections_1786440998246.png";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Regulatory Insights & Industry Intelligence | NKB Regovanta" },
      {
        name: "description",
        content:
          "Expert insights, regulatory updates, and compliance guides on US FDA, EU MDR, CDSCO, and global medical device regulations from NKB Regovanta.",
      },
      {
        name: "keywords",
        content: "medical device insights, EU MDR 2026, FDA QMSR, FDA inspections, CDSCO updates, regulatory consulting intelligence, NKB Regovanta",
      },
      { property: "og:title", content: "Regulatory Insights & Industry Intelligence | NKB Regovanta" },
      {
        property: "og:description",
        content: "Latest regulatory news, updates, and best practices for the medical device and IVD industry from NKB Regovanta.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/insights" },
    ],
  }),
  component: Insights,
});

const articles = [
  {
    id: "01",
    category: "REGULATORY NEWS",
    title: "FDA QMSR 2026: What Medical Device Manufacturers Need to Know",
    desc: "QMSR is now effective. Understand the key changes, ISO 13485 alignment, record expectations and practical actions manufacturers should take for ongoing FDA compliance.",
    img: imgFDA,
    route: "/insights/fda-qmsr-2026",
  },
  {
    id: "02",
    category: "EU MDR UPDATE",
    title: "EU MDR 2026: EUDAMED, Classification & Compliance Priorities",
    desc: "EUDAMED’s first four modules are now mandatory. Review the registration, UDI/device, certificate and market-surveillance implications manufacturers should address now.",
    img: imgEU,
    route: "/insights/eu-mdr-2026",
  },
  {
    id: "03",
    category: "BEST PRACTICES",
    title: "FDA Medical Device Inspections in 2026: Preparing for the New QMSR Framework",
    desc: "FDA has moved away from QSIT to the QMSR-aligned inspection process. Learn what investigators may review and how to strengthen inspection readiness.",
    img: imgInsp,
    route: "/insights/fda-inspections-2026",
  },
];

function Insights() {
  return (
    <>
      <section className="bg-surface pt-4 pb-16 lg:pt-6 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
           <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Insights</p>
           <h1 className="mt-4 text-3xl font-extrabold text-navy sm:text-5xl leading-tight">
             Regulatory News & Best Practices
           </h1>
           <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
             Stay updated on the latest compliance trends, regulatory shifts, and practical guidance for medical device manufacturers.
           </p>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <div key={article.id} className="card-elevated overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-shadow bg-white rounded-md border border-border/50">
                <Link to={article.route} className="block overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-navy text-white text-[10px] font-bold px-2.5 py-1 rounded-sm shadow-sm z-10">
                    {article.category}
                  </div>
                  <img src={article.img} alt={article.title} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <Link to={article.route}>
                    <h2 className="text-xl font-bold text-navy leading-snug hover:text-accent transition-colors">{article.title}</h2>
                  </Link>
                  <p className="mt-4 text-[14px] leading-relaxed text-navy/70 flex-1">{article.desc}</p>
                  <Link to={article.route} className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-navy hover:text-accent transition-colors uppercase tracking-wide">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Need expert guidance on regulatory changes?" description="Contact Us Today" />
    </>
  );
}