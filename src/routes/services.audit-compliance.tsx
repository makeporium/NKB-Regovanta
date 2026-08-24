import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgPlaceholder from "@/assets/iso-cleanroom.jpg";

export const Route = createFileRoute("/services/audit-compliance")({
  head: () => ({
    meta: [
      { title: "Audit & Compliance Support | Services | NKB Regovanta" },
      {
        name: "description",
        content: "Internal audits, supplier audits, compliance & regulatory intelligence.",
      },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/audit-compliance" },
  ],
  }),
  component: AuditComplianceService,
});

const offerings = [
  {
    title: "Internal Audits",
    desc: "Independent assessment of QMS processes and regulatory compliance.",
  },
  {
    title: "Supplier Audits",
    desc: "Evaluate supplier controls, qualification and ongoing performance.",
  },
  {
    title: "Regulatory Gap Assessment",
    desc: "Identify gaps against applicable regulatory and quality requirements.",
  },
  {
    title: "Mock Audits",
    desc: "Simulate audit conditions and identify areas requiring attention.",
  },
  {
    title: "CAPA Support",
    desc: "Root-cause analysis, corrective action and effectiveness assessment.",
  }
];

function AuditComplianceService() {
  return (
    <>
      <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-4 pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
            <Link to="/services" className="hover:text-navy transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Audit & Compliance Support</span>
          </div>
          <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            Audit & Compliance Support
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            Internal audits, supplier audits, compliance & regulatory intelligence.
          </p>
        </div>
      </section>

      <section className="bg-white pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Prepare Before the Audit. Strengthen Before the Finding.</h2>
            <p className="text-[15px] text-navy/80 leading-relaxed mb-6">
              Regulatory readiness is built long before an auditor arrives.
            </p>
            <p className="text-[15px] text-navy/80 leading-relaxed mb-8">
              NKB Regovanta helps organizations identify compliance gaps, strengthen quality processes and prepare for internal, supplier and regulatory audits.
            </p>
            
            <h3 className="text-xl font-bold text-navy mb-6">Our Audit & Compliance Support</h3>
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
              src={imgPlaceholder}
              alt="Quality and Audit Compliance" 
              className="rounded-2xl shadow-xl border border-white/50 w-full object-cover" 
            />
          </div>
        </div>
      </section>

      <CTABand title="Ready to strengthen your compliance?" description="Connect with our audit experts today" />
    </>
  );
}
