import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Search,
  ClipboardCheck,
  Building2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/qmsr-inspection")({
  head: () => ({
    meta: [
      { title: "FDA QMSR & FDA Inspection Preparation Consultant | 21 CFR 820 | NKB Regovanta" },
      {
        name: "description",
        content:
          "FDA Quality Management System Regulation (QMSR 21 CFR 820 / ISO 13485:2016) compliance, mock FDA inspections, QSIT audits, and FDA 483 remediation support.",
      },
      {
        name: "keywords",
        content:
          "FDA QMSR compliance, 21 CFR Part 820, FDA mock audit, QSIT inspection, FDA 483 response, FDA inspection preparation, NKB Regovanta",
      },
      { property: "og:title", content: "QMSR & FDA Inspection Preparation | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We test whether your quality system can produce objective evidence when an FDA investigator follows a real transaction through the organization.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/qmsr-inspection" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/qmsr-inspection" }],
  }),
  component: QMSRInspectionPage,
});

function QMSRInspectionPage() {
  const whenNeeded = [
    "Before an anticipated FDA inspection",
    "When transitioning an existing QMS to current QMSR expectations",
    "Before a new US manufacturing site becomes operational",
    "Following significant manufacturing, supplier or organizational changes",
    "When internal audits identify recurring quality-system weaknesses",
    "When the organization wants to test readiness before FDA scrutiny",
  ];

  const areasWeChallenge = [
    "Design and development controls",
    "Risk management (ISO 14971)",
    "CAPA (Corrective and Preventive Action)",
    "Complaints and vigilance interfaces (MDR 21 CFR 803)",
    "Supplier controls and purchasing data",
    "Production and process controls",
    "Process validation (IQ/OQ/PQ)",
    "Training and competence records",
    "Document and record controls",
    "Internal audits & audit schedules",
    "Management review effectiveness",
    "Nonconformity and escalation pathways",
    "Mock inspection and remediation planning",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "QMSR & FDA Inspection Preparation",
              url: "https://www.nkbregovanta.com/services/usa/qmsr-inspection",
              description:
                "US FDA Quality Management System Regulation (QMSR / 21 CFR Part 820) audit readiness, mock inspections, and compliance consulting.",
              provider: {
                "@type": "ProfessionalService",
                name: "NKB Regovanta Solutions Pvt. Ltd.",
                url: "https://www.nkbregovanta.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nkbregovanta.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://www.nkbregovanta.com/services" },
                { "@type": "ListItem", position: 3, name: "USA FDA", item: "https://www.nkbregovanta.com/services/usa" },
                { "@type": "ListItem", position: 4, name: "QMSR & Inspection", item: "https://www.nkbregovanta.com/services/usa/qmsr-inspection" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/usa" className="hover:text-navy transition-colors">USA FDA</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">QMSR &amp; FDA Inspection</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="h-3.5 w-3.5" /> 21 CFR Part 820 &amp; ISO 13485:2016
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              QMSR &amp; FDA Inspection Preparation
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We test whether the quality system can produce objective evidence when an FDA investigator follows a real transaction through the organization — not merely whether the required SOPs exist.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Assess FDA Inspection Readiness <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* What This Service Is */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <ClipboardCheck className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  FDA inspection readiness is demonstrated through implementation and objective evidence. Procedures, records, decisions and actions must connect logically when the investigator follows an actual complaint, CAPA, design change, supplier issue or process validation through the system.
                </p>
              </div>

              {/* When It Is Needed */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-5 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" /> When It Is Needed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whenNeeded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 border border-gray-200/70 hover:bg-blue-50/30 transition-colors"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13.5px] text-navy/80 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Assess Inspection Readiness */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  How We Assess Inspection Readiness
                </h3>
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200">
                  <p className="text-xs uppercase font-extrabold text-blue-700 tracking-wider mb-2">The Evidence Chain</p>
                  <p className="text-base font-extrabold text-navy">
                    Requirement → Procedure → Record → Objective Evidence → Implementation → Effectiveness
                  </p>
                </div>
                <p className="text-[14px] text-navy/75 leading-relaxed font-medium">
                  For example, a complaint may be traced into investigation, risk evaluation, reportability assessment, CAPA, effectiveness checks and management oversight. A design change may be traced into risk, verification, validation, approval, implementation and documentation.
                </p>
              </div>

              {/* Areas We Can Challenge */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  Areas We Can Challenge
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {areasWeChallenge.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0b3a96] shrink-0" />
                      <span className="text-[13px] font-bold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Testing Evidence, Not Just SOP Titles
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not prepare firms by checking SOP titles. We test whether the system can withstand an investigator following evidence from requirement to implementation and effectiveness.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  QMSR Transition Highlights
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Incorporates ISO 13485:2016 by reference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Aligns FDA terminology with international QMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Rigorous focus on Risk Management (ISO 14971)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Schedule a Mock Audit</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Identify system vulnerabilities before an FDA investigator arrives at your facility.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Assess Inspection Readiness <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Prepare Your Facility for FDA Scrutiny with Confidence"
        description="Our seasoned lead auditors conduct realistic mock FDA inspections and QMSR gap remediation."
      />
    </>
  );
}
