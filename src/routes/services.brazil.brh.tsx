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

export const Route = createFileRoute("/services/brazil/brh")({
  head: () => ({
    meta: [
      {
        title:
          "Brazil Registration Holder (BRH) & Local Regulatory Interface | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Brazil Registration Holder (BRH) representation, ANVISA regulatory interface, Operating Authorization (AFE) verification, dossier ownership governance, tecnovigilância reporting, and recall coordination.",
      },
      { name: "keywords", content: "Brazil Registration Holder (BRH) & Local Regulatory Interface, services brazil brh, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Brazil Registration Holder (BRH) & Local Regulatory Interface | NKB Regovanta" },
      { property: "og:description", content: "Brazil Registration Holder (BRH) representation, ANVISA regulatory interface, Operating Authorization (AFE) verification, dossier ownership governance, tecnovigilância reporting, and recall coordination." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/brazil/brh" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Brazil Registration Holder (BRH) & Local Regulatory Interface | NKB Regovanta" },
      { name: "twitter:description", content: "Brazil Registration Holder (BRH) representation, ANVISA regulatory interface, Operating Authorization (AFE) verification, dossier ownership governance, tecnovigilância reporting, and recall coordination." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/brh" }],
  }),
  component: BrazilBRHPage,
});

function BrazilBRHPage() {
  const triggers = [
    "The foreign manufacturer has no established commercial or legal entity in Brazil",
    "A new Brazilian importer or registration holder is being appointed for market entry",
    "The manufacturer seeks stronger governance over regulatory data, technical files, complaints, and changes",
    "A transfer of registration ownership (transferência de titularidade) or local partner change is being planned",
  ];

  const supportItems = [
    "Brazilian Registration Holder (BRH) readiness assessment and legal qualification",
    "Manufacturer-Holder Quality and Regulatory Interface Agreement drafting",
    "Legal authorization documentation, consularization/apostille, and Power of Attorney (Procuração) coordination",
    "Company Operating Authorization (AFE) and activity-scope alignment checks with ANVISA",
    "Submission, petition, and variation communication pathway governance",
    "Technical documentation and dossier access protocol establishment",
    "Complaint, adverse-event, and tecnovigilância escalation workflows",
    "Field-action, safety alert, and recall communication pathways under ANVISA rules",
    "Lifecycle change-notification governance between manufacturer and Brazilian holder",
    "Import, customs clearance, and distribution regulatory interface support",
  ];

  const challenges = [
    "Who legally and commercially owns the master regulatory data and approved Brazilian labeling?",
    "How quickly must the manufacturer notify the holder of design, supplier, manufacturing site, or software changes?",
    "Can the holder independently access investigation and safety information when ANVISA requests it during an audit?",
    "Are complaint, tecnovigilância, and field-action responsibilities contractually and operationally clear?",
    "Does the holder legal identity match the Portuguese labeling, packaging artwork, and ANVISA database records?",
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
            <Link to="/services/brazil" className="hover:text-navy transition-colors">Brazil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Registration Holder (BRH)</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Detentor do Registro &amp; Governance
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Brazil Registration Holder &amp; Local Regulatory Interface
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Foreign manufacturers require a legally established Brazilian entity to hold the ANVISA notification or registration and interface with the Agency. The local holder is more than an address: it is central to submissions, changes, importation coordination, post-market reporting, field actions and access to the technical documentation that supports the product.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Discuss Brazil Registration Holder Support <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our BRH Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Regulatory Governance Model:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We establish a governance model between the manufacturer and the Brazilian holder. The key question is not only who submits the dossier, but whether the holder can access the information and decisions needed to meet ANVISA obligations throughout the lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish Independent Brazil Registration Holder Governance"
        description="Our Brazilian regulatory consultants coordinate local representative agreements, maintain AFE alignments, and manage ANVISA communications."
      />
    </>
  );
}
