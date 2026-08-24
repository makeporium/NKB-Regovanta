import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/technical-documentation")({
  head: () => ({
    meta: [
      { title: "Technical Documentation | Services | NKB Regovanta" },
      {
        name: "description",
        content: "End-to-end technical file writing (STED), risk management & compliance support.",
      },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/technical-documentation" },
  ],
  }),
  component: TechnicalDocumentationService,
});

const offerings = [
  {
    title: "Technical File / Technical Documentation",
    desc: "Structured documentation aligned with applicable regulatory requirements.",
  },
  {
    title: "Risk Management",
    desc: "Risk analysis, evaluation and documentation aligned with the product's risk profile.",
  },
  {
    title: "Clinical & Performance Evidence",
    desc: "Integration of clinical, scientific and performance evidence into the regulatory file.",
  },
  {
    title: "GSPR / Regulatory Requirements Mapping",
    desc: "Traceability between applicable requirements and supporting evidence.",
  },
  {
    title: "Labeling & IFU",
    desc: "Regulatory review of labeling, claims and instructions for use.",
  },
  {
    title: "Post-Market Documentation",
    desc: "PMS, PMCF/PMPF and lifecycle documentation support.",
  },
];

function TechnicalDocumentationService() {
  return (
    <>
      <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-4 pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
            <Link to="/services" className="hover:text-navy transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Technical Documentation</span>
          </div>
          <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            Technical Documentation
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            End-to-end technical file writing (STED), risk management & compliance support.
          </p>
        </div>
      </section>

      <section className="bg-white pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Evidence That Supports Regulatory Decisions</h2>
            <p className="text-[15px] text-navy/80 leading-relaxed mb-6">
              Regulatory documentation must do more than describe a product. It must demonstrate how safety, performance, risk and compliance requirements have been addressed.
            </p>
            <p className="text-[15px] text-navy/80 leading-relaxed mb-8">
              NKB Regovanta supports manufacturers in developing structured technical documentation aligned with applicable regulatory requirements and market pathways.
            </p>
            
            <h3 className="text-xl font-bold text-navy mb-6">Our Technical Documentation Support</h3>
            <div className="space-y-6">
              {offerings.map((offering, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy text-[15px]">{offering.title}</h4>
                    <p className="text-[14px] text-navy/70 leading-relaxed mt-1">
                      {offering.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[2rem] -z-10 transform rotate-3" />
            <img 
              src="/assets/brain/technical_documentation_hero_1786399660256.png" 
              alt="Technical Documentation structured files" 
              className="rounded-2xl shadow-xl border border-white/50 w-full object-cover" 
            />
          </div>
        </div>
      </section>

      <CTABand title="Ready to streamline your documentation?" description="Connect with our technical file experts" />
    </>
  );
}
