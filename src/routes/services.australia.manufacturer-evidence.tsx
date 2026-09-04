import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Shield,
  FileText,
  Building2,
  Activity,
  Layers,
  FlaskConical,
  Award,
  RefreshCw,
  TrendingUp,
  Cpu,
  Sparkles,
  Check,
  Stethoscope,
  Microscope,
  Clock,
  HelpCircle,
  FileCheck2,
  AlertTriangle,
  Scale,
  Globe2,
  UserCheck,
  Package,
  Truck,
  FileCode,
  Syringe,
  Pill,
  BarChart3,
  Landmark,
  Network,
  Factory,
  Monitor,
  Target,
  Users,
  Settings,
  ShieldAlert,
  Handshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/australia/manufacturer-evidence")({
  head: () => ({
    meta: [
      {
        title:
          "TGA Manufacturer Evidence & Conformity Assessment | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "TGA Manufacturer Evidence application, certificate alignment, comparable overseas regulator evidence (EU MDR/IVDR, US FDA 510k/PMA, Health Canada MDSAP, Japan PMDA), and Declaration of Conformity review.",
      },
      { name: "keywords", content: "TGA Manufacturer Evidence & Conformity Assessment, services australia manufacturer evidence, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "TGA Manufacturer Evidence & Conformity Assessment | NKB Regovanta" },
      { property: "og:description", content: "TGA Manufacturer Evidence application, certificate alignment, comparable overseas regulator evidence (EU MDR/IVDR, US FDA 510k/PMA, Health Canada MDSAP, Japan PMDA), and Declaration of Conformity review." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/australia/manufacturer-evidence" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TGA Manufacturer Evidence & Conformity Assessment | NKB Regovanta" },
      { name: "twitter:description", content: "TGA Manufacturer Evidence application, certificate alignment, comparable overseas regulator evidence (EU MDR/IVDR, US FDA 510k/PMA, Health Canada MDSAP, Japan PMDA), and Declaration of Conformity review." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/manufacturer-evidence" }],
  }),
  component: AustraliaManufacturerEvidencePage,
});

function AustraliaManufacturerEvidencePage() {
  const triggers = [
    "Preparing a first Australian ARTG application",
    "Using EU, UK, US, Canadian or other overseas regulatory evidence to support Australia",
    "Changing certification body, conformity assessment certificate, manufacturing site or legal manufacturer",
    "Transitioning from older EU certificates to MDR / IVDR certificates",
    "Extending a product family or adding models under existing evidence",
    "Responding to a TGA question about the adequacy or scope of manufacturer evidence",
  ];

  const supportItems = [
    "Review of TGA Conformity Assessment Certificates where applicable",
    "Review of acceptable comparable overseas regulator / assessment body evidence (EU MDR/IVDR, US FDA, Health Canada, Japan PMDA)",
    "Manufacturer Evidence application and variation strategy in TGA Business Services",
    "QMS certificate and product-assessment evidence review",
    "Declaration of Conformity drafting and review",
    "Certificate scope, device family and classification alignment",
    "Manufacturer legal name, site address and corporate entity consistency",
    "Assessment of evidence validity, conditions of certification and transition status",
    "Identification of evidence gaps before ARTG inclusion application",
    "Strategy for certificate lapse, replacement, re-certification or variation",
  ];

  const challenges = [
    "Certificate scope narrower than the products proposed for ARTG inclusion",
    "Different manufacturer names, sites or legal entities across certificates and declarations",
    "Evidence that covers a related product but not the same design / intended purpose",
    "Expired, superseded or transition-dependent evidence",
    "Using overseas evidence without confirming it is acceptable for the Australian class and application type",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/australia" className="hover:text-navy transition-colors">Australia</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Manufacturer Evidence</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Conformity Assessment &amp; Overseas Evidence
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Manufacturer Evidence &amp; Conformity Assessment Strategy
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Manufacturer Evidence is a core gate in the Australian pathway. For most device and IVD applications, the Sponsor must hold an accepted Manufacturer Evidence identifier before the ARTG application can proceed. The evidence must be current, applicable to the manufacturer and appropriate for the risk class and product scope.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Manufacturer Evidence <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* When This Support Is Needed */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">When This Support Is Needed</h2>
              <div className="space-y-2.5">
                {triggers.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Challenge */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">What We Challenge Before Submission</h2>
              <div className="space-y-2.5">
                {challenges.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Support Includes */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                Can the Sponsor demonstrate, document by document, that the conformity assessment evidence applies to the same manufacturer, same device scope and same intended purpose being represented in Australia?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Secure Your TGA Manufacturer Evidence Acceptance"
        description="Our team verifies comparable overseas certificates, drafts Declarations of Conformity, and submits Manufacturer Evidence filings to TGA."
      />
    </>
  );
}
