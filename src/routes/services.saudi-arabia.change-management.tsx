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

export const Route = createFileRoute("/services/saudi-arabia/change-management")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA Changes, Variations, MDMA Renewal & Lifecycle Support | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "SFDA change notification and regulatory variation management in Saudi Arabia. MDMA amendments, manufacturing site additions, renewal applications, and technical file updates.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/change-management" }],
  }),
  component: SaudiChangeManagementPage,
});

function SaudiChangeManagementPage() {
  const triggers = [
    "Design, raw material, or engineering specification changes planned for an MDMA-authorized device",
    "Manufacturing site transfer, contract sterilizer change, or critical component supplier replacement",
    "Releasing a software version update, cybersecurity patch, or new algorithmic capability",
    "Updating product labeling, packaging artwork, or expanding clinical intended use claims",
    "An MDMA marketing authorization or establishment license renewal date is approaching",
  ];

  const supportItems = [
    "Regulatory change impact assessment against SFDA regulations and guidance",
    "Change categorization and determination of notification vs formal variation requirements",
    "Technical file update strategy and verification/validation evidence gap closure",
    "Risk management file review and ISO 14971 benefit-risk re-evaluation",
    "Clinical evaluation and IVD performance evidence impact assessment",
    "Manufacturing site, sterilizer, and ISO 13485 QMS certificate change management",
    "Arabic/English label and IFU revision review and harmonization",
    "Saudi-DI UDI database update and trigger analysis",
    "MDMA marketing authorization renewal planning, drafting, and GHAD submission",
    "Authorized Representative mandate updates and commercial distributor amendments",
    "Post-market regulatory record and establishment license maintenance",
  ];

  const challenges = [
    "Does the planned engineering change alter the established SFDA risk classification or intended use?",
    "Does the change require formal SFDA pre-approval prior to commercial distribution in the Kingdom?",
    "Do existing pre-clinical bench, biocompatibility, and sterilization test reports still represent the modified device?",
    "Are changes to legal manufacturer corporate data or site addresses reflected across all certificates?",
    "Is the MDMA renewal application initiated well in advance of the statutory expiration deadline?",
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
            <Link to="/services/saudi-arabia" className="hover:text-navy transition-colors">Saudi Arabia</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Change Management</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Variations &amp; Renewals
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Changes, Renewal &amp; Lifecycle Support (SFDA)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              A Change Can Affect the Regulatory Basis of the MDMA. Design, software, manufacturing, supplier, sterilization, labeling and intended-purpose changes should be assessed before implementation because they may affect technical documentation, marketing authorization information, QMS controls or local regulatory records.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Assess a Saudi Device Change <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Lifecycle Change Management Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Lifecycle Assessment Rule:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We ask whether the change alters the regulatory basis on which safety, performance, classification or authorization was demonstrated. That determines whether the action is a technical-file update, validation requirement, notification, authorization amendment or another regulatory step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Manage SFDA MDMA Variations and Renewal Submissions"
        description="Our regulatory strategists assess change impact, submit variation applications via GHAD, and manage MDMA renewals."
      />
    </>
  );
}
