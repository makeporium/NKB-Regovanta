import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Search,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/notified-body")({
  head: () => ({
    meta: [
      { title: "EU Notified Body Strategy, Audit Readiness & Review Defense | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior Notified Body selection, application scope, pre-assessment audits, technical file review defense, and nonconformity CAPA resolution under EU MDR and IVDR.",
      },
      {
        name: "keywords",
        content:
          "Notified Body selection Europe, MDR Notified Body audit readiness, Stage 1 Stage 2 audit preparation, Notified Body deficiency response, CE mark technical review, NKB Regovanta",
      },
      { property: "og:title", content: "Notified Body Strategy & Audit Readiness | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We prepare manufacturers to defend their technical files and QMS before Notified Bodies, tracing audit findings to their regulatory root cause.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/notified-body" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/notified-body" }],
  }),
  component: EUNotifiedBodyPage,
});

function EUNotifiedBodyPage() {
  const nbSupportItems = [
    "Notified Body scope, designation code and suitability review",
    "Application readiness, scheduling and certification planning",
    "Pre-assessment and mock audit of Annex II/III technical documentation",
    "QMS readiness and objective-evidence verification across procedures",
    "Clinical evaluation (CER) / Performance evaluation (PER) audit readiness",
    "GSPR and ISO 14971 risk traceability deep-dive review",
    "Mock audits and technical staff / PRRC interview preparation",
    "Technical review question-response strategy and timeline management",
    "Nonconformity root-cause analysis and CAPA evidence preparation",
    "Certificate maintenance, unannounced audits and annual surveillance readiness",
  ];

  const deficiencyFramework = [
    { num: "01", label: "NB Finding" },
    { num: "02", label: "Underlying Regulatory Concern" },
    { num: "03", label: "Root Cause" },
    { num: "04", label: "Evidence / QMS Gap" },
    { num: "05", label: "Corrective Strategy" },
    { num: "06", label: "Revised File & CAPA" },
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
              name: "EU Notified Body Strategy & Audit Readiness",
              url: "https://www.nkbregovanta.com/services/eu/notified-body",
              description:
                "Notified Body selection, audit preparation, technical file defense, and deficiency response under EU MDR and IVDR.",
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
                { "@type": "ListItem", position: 4, name: "Notified Body", item: "https://www.nkbregovanta.com/services/eu/notified-body" },
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
            <span className="text-navy">Notified Body Strategy</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="h-3.5 w-3.5" /> Technical File Defense
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              MDR &amp; IVDR Notified Body Strategy &amp; Audit Readiness
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We prepare manufacturers to defend their files and quality systems — not just submit paperwork. We review evidence rationale, conduct mock audits, and draft root-cause deficiency responses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Prepare for Notified Body Review <ArrowRight className="h-4 w-4" />
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
              {/* Deficiency Analysis Framework */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  Deficiency Analysis &amp; Resolution Framework
                </h2>
                <p className="text-[13px] text-navy/75 leading-relaxed font-medium">
                  We resolve audit findings and nonconformities at their root cause rather than patching surface wording.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  {deficiencyFramework.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10 NB Readiness Support Areas */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  10 Key Notified Body Readiness Services
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {nbSupportItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Address the Regulatory Root Cause, Not Just the Question
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  When a Notified Body raises a question, we determine whether the issue is missing evidence, weak rationale, inconsistent documentation, inadequate implementation or a broader regulatory strategy gap. The response then addresses the root problem rather than only the wording of the finding.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Notified Body Support Scope
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>• Scope codes selection (TÜV SÜD, BSI, DEKRA, DNV, etc.)</p>
                  <p>• Pre-submission completeness screening</p>
                  <p>• Onsite &amp; remote audit representation support</p>
                  <p>• Formal AI / deficiency response matrices</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Facing an NB Nonconformity?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Turn around Notified Body findings within tight official response windows with our regulatory defense team.
                </p>
                <Link
                  to="/services/eu/deficiency-response"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Deficiency Support <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Secure and Defend Your European CE Mark Certification"
        description="Our seasoned consultants prepare your team and documentation for uncompromising Notified Body audits."
      />
    </>
  );
}
