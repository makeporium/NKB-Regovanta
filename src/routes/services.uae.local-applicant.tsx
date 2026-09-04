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

export const Route = createFileRoute("/services/uae/local-applicant")({
  head: () => ({
    meta: [
      {
        title:
          "UAE Local Applicant, Marketing Authorization Holder (MAH) & AR Services | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Licensed UAE medical warehouse and marketing office representation for MOHAP medical device registration. MAH corporate setup, regulatory agreements, MOHAP liaison, and lifecycle governance.",
      },
      { name: "keywords", content: "UAE Local Applicant, Marketing Authorization Holder (MAH) & AR Services, services uae local applicant, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UAE Local Applicant, Marketing Authorization Holder (MAH) & AR Services | NKB Regovanta" },
      { property: "og:description", content: "Licensed UAE medical warehouse and marketing office representation for MOHAP medical device registration. MAH corporate setup, regulatory agreements, MOHAP liaison, and lifecycle governance." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae/local-applicant" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAE Local Applicant, Marketing Authorization Holder (MAH) & AR Services | NKB Regovanta" },
      { name: "twitter:description", content: "Licensed UAE medical warehouse and marketing office representation for MOHAP medical device registration. MAH corporate setup, regulatory agreements, MOHAP liaison, and lifecycle governance." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/local-applicant" }],
  }),
  component: UAELocalApplicantPage,
});

function UAELocalApplicantPage() {
  const triggers = [
    "A foreign manufacturer without a commercial presence in the UAE requires an authorized local applicant",
    "Selecting and qualifying a licensed medical warehouse or marketing office to submit MOHAP registrations",
    "Establishing regulatory governance between the overseas manufacturer, MAH, and local distributors",
    "Restructuring or transferring MOHAP product registrations between commercial agents in the UAE",
  ];

  const supportItems = [
    "Local applicant / Marketing Authorization Holder (MAH) eligibility and readiness assessment",
    "MOHAP company registration and manufacturing-site registration coordination",
    "Licensed medical warehouse and marketing office operating scope review",
    "Manufacturer-Local Applicant authorization agreement and regulatory mandate alignment",
    "Controlled access protocols for technical files, clinical evaluations, and quality documentation",
    "MOHAP official correspondence and technical query coordination",
    "Customer complaint intake, adverse event vigilance, and market-action escalation pathways",
    "Lifecycle variation, regulatory amendment, and 5-year registration renewal communication",
    "Control of local product records, manufacturer data, and commercial importation permissions",
    "Regulatory handover and transfer planning when commercial distribution arrangements change",
  ];

  const challenges = [
    "Does the local applicant hold an active MOHAP license for a medical warehouse or marketing office?",
    "Does the regulatory agreement protect manufacturer IP while fulfilling statutory reporting duties?",
    "Can the local applicant produce technical files immediately upon official MOHAP inspector request?",
    "How quickly must the manufacturer notify the local applicant of design changes, safety alerts, or global recalls?",
    "Are commercial distributor arrangements kept distinct from regulatory registration ownership?",
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
            <Link to="/services/uae" className="hover:text-navy transition-colors">United Arab Emirates</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Local Applicant &amp; MAH</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Licensed UAE Representation
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              UAE Local Applicant, Marketing Authorization Holder &amp; Regulatory Interface
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Local Representation Is a Regulatory Control Point — Not Only an Address. MOHAP requires the Marketing Authorization Holder company and product manufacturing sites to be registered before product registration, and the applicant for medical-equipment registration must be an appropriately licensed medical warehouse or marketing office. This makes the local regulatory interface central to both submission and lifecycle compliance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your UAE Local Regulatory Interface <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* When This Is Needed */}
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Local MAH &amp; Representation Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Governance Philosophy:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We establish who owns each regulatory action, what information must be available locally, how quickly safety or change information must flow, and how local records remain synchronized with the manufacturer's controlled technical documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish Independent UAE Local Applicant & MAH Governance"
        description="Our In-Kingdom specialists coordinate licensed medical warehouse interfaces, manage MOHAP communications, and safeguard product registrations."
      />
    </>
  );
}
