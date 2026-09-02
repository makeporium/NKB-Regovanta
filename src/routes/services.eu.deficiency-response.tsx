import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  FileText,
  Search,
  Check,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/deficiency-response")({
  head: () => ({
    meta: [
      { title: "EU Notified Body Deficiency Response & Technical Review Defense | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior regulatory defense against Notified Body nonconformities, technical file deficiencies, clinical evaluation (CER) pushbacks, and audit findings under EU MDR & IVDR.",
      },
      {
        name: "keywords",
        content:
          "Notified Body deficiency response, MDR nonconformity response matrix, Notified Body audit findings resolution, CER deficiency response, IVDR review questions, NKB Regovanta",
      },
      { property: "og:title", content: "Notified Body Technical Review & Deficiency Response | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We do not answer audit findings in isolation. We trace reviewer questions to their root regulatory cause and deliver an unassailable response package.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/deficiency-response" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/deficiency-response" }],
  }),
  component: EUDeficiencyResponsePage,
});

function EUDeficiencyResponsePage() {
  const rootCauses = [
    "Missing or incomplete test evidence",
    "Insufficient clinical / performance justification",
    "Weak or ambiguous classification rationale",
    "GSPR evidence inconsistency across Annex II files",
    "Risk-control traceability gap in ISO 14971 matrix",
    "Labeling, IFU or intended-purpose mismatch",
    "Inadequate validation protocol or unjustified acceptance criteria",
    "Clinical equivalence weakness (technical / biological / clinical gap)",
    "PER / CER conclusions not substantiated by clinical datasets",
    "QMS implementation gap during on-site or remote audit",
    "Change-control or lifecycle documentation inconsistency",
  ];

  const methodSteps = [
    { num: "01", label: "Reviewer Comment" },
    { num: "02", label: "Regulatory Concern" },
    { num: "03", label: "Root Cause" },
    { num: "04", label: "Evidence Needed" },
    { num: "05", label: "Corrective Strategy" },
    { num: "06", label: "Response + Updated File" },
  ];

  const deliverables = [
    "Comment-by-comment response matrix (Question, Rationale, Evidence, Document Changes)",
    "Senior regulatory rationale and technical justification memo",
    "Identification and design of supplementary testing or clinical appraisal",
    "Complete revision and version-tracking of affected technical documentation",
    "Cross-document consistency audit (GSPR, Risk, V&V, Clinical, Labeling)",
    "CAPA and quality-system procedure linkage where the finding is systemic",
    "Pre-submission internal peer-review challenge of the full response dossier",
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
              name: "Notified Body Technical Review & Deficiency Response",
              url: "https://www.nkbregovanta.com/services/eu/deficiency-response",
              description:
                "Strategic root-cause analysis, response matrix authoring, and technical file remediation for Notified Body audit nonconformities under EU MDR and IVDR.",
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
                { "@type": "ListItem", position: 3, name: "European Union", item: "https://www.nkbregovanta.com/services/eu" },
                { "@type": "ListItem", position: 4, name: "Deficiency Response", item: "https://www.nkbregovanta.com/services/eu/deficiency-response" },
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
            <Link to="/services/eu" className="hover:text-navy transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Deficiency Response</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldAlert className="h-3.5 w-3.5" /> Rapid Turnaround Defense
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Notified Body Technical Review &amp; Deficiency Response
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We position deficiency resolution as active regulatory defense. We diagnose the root cause of Notified Body questions, author comment-by-comment response matrices, and remediate technical files to protect your certification timeline.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Review Your Notified Body Findings <ArrowRight className="h-4 w-4" />
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
              {/* Response Method */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  Our 6-Step Response Method
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  {methodSteps.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-red-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 11 Root Causes */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  11 Root-Cause Categories We Assess
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {rootCauses.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                      <span className="text-[12.5px] font-medium text-navy/90 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Deliver */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h3 className="text-lg font-extrabold text-navy">
                  What NKB Delivers in the Defense Package
                </h3>
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <Check className="h-4.5 w-4.5 text-emerald-600 mt-0.5 shrink-0" strokeWidth={3} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NKB Position */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">NKB Position</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Trace the Visible Symptom to the Regulatory Root Cause
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not answer findings in isolation. A reviewer question is often the visible symptom of a deeper inconsistency across intended purpose, risk, testing, clinical/performance evidence and labeling. We trace the issue to its origin before drafting the response.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Critical Clock Management
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>Notified Bodies enforce strict round limits (often max 2 rounds) and rigid 30–60 day deadlines. Our rapid response team mobilizes immediately to ensure zero clock expirations.</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Have Active Findings?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Send us your Notified Body deficiency report under strict NDA for an immediate root-cause evaluation.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Submit Findings <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Overcome Notified Body Objections with Precision Regulatory Defense"
        description="Our senior strategists resolve complex technical nonconformities and safeguard your European market clearance."
      />
    </>
  );
}
