import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Factory,
  FileCheck2,
  FileText,
  FlaskConical,
  Globe2,
  HelpCircle,
  Layers,
  Monitor,
  Package,
  RefreshCw,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Activity,
  AlertTriangle,
  Scale,
  Languages,
  Clock,
  Landmark,
  Network,
  ShieldAlert,
  Handshake,
  Check,
  FileCode,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import sydneyHeroImg from "@/assets/australia-hero-sydney.png";
import australiaMapGraphic from "@/assets/australia-map-graphic.png";

export const Route = createFileRoute("/services/australia/")({
  head: () => ({
    meta: [
      {
        title:
          "Australia TGA ARTG Consultant | Australian Sponsor & Medical Device Registration | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Australia TGA regulatory consulting for Medical Devices, IVDs and SaMD. ARTG inclusion, Australian Sponsor, Manufacturer Evidence, testing, TGA audit, UDI and post-market support.",
      },
      { name: "keywords", content: "Australia TGA ARTG Consultant, Australian Sponsor & Medical Device Registration, services australia, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Australia TGA ARTG Consultant | Australian Sponsor & Medical Device Registration | NKB Regov..." },
      { property: "og:description", content: "Australia TGA regulatory consulting for Medical Devices, IVDs and SaMD. ARTG inclusion, Australian Sponsor, Manufacturer Evidence, testing, TGA audit, UDI and post-market support." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/australia" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Australia TGA ARTG Consultant | Australian Sponsor & Medical Device Registration | NKB Regov..." },
      { name: "twitter:description", content: "Australia TGA regulatory consulting for Medical Devices, IVDs and SaMD. ARTG inclusion, Australian Sponsor, Manufacturer Evidence, testing, TGA audit, UDI and post-market support." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia" }],
  }),
  component: AustraliaHubPage,
});

/* ─────────────────────────────────────────────────────────────
   DATA DEFINITIONS MATCHING MOCKUP & COMPREHENSIVE TEXT
───────────────────────────────────────────────────────────── */

const heroChecklist = [
  "TGA Regulatory Strategy & Classification",
  "Testing Strategy & Lab Coordination",
  "ARTG Inclusion & Application Support",
  "Post-Market Surveillance & Vigilance",
  "Australian Sponsor Services",
  "Change Management & Variations",
  "Technical Documentation & Essential Principles",
  "End-to-End Market Access Support",
];

const trustBarItems = [
  {
    icon: Target,
    title: "Deep TGA Regulatory Expertise",
    desc: "Specialized team with extensive TGA experience",
  },
  {
    icon: FileCheck2,
    title: "High Approval Success Rate",
    desc: "Proven strategies for faster market access",
  },
  {
    icon: Users,
    title: "Australian Sponsor You Can Rely On",
    desc: "Full compliance with ongoing Sponsor obligations",
  },
  {
    icon: Globe2,
    title: "Global Perspective, Local Execution",
    desc: "International experience with local Australia focus",
  },
  {
    icon: FlaskConical,
    title: "Strong Lab Network",
    desc: "Access to NATA-accredited testing laboratories",
  },
  {
    icon: Shield,
    title: "End-to-End Support",
    desc: "From strategy to ongoing compliance",
  },
];

const services12 = [
  {
    num: "1",
    id: "sec-1",
    to: "/services/australia/classification",
    icon: Target,
    title: "1. Australia Regulatory\nStrategy & Classification",
    bullets: [
      "Determine correct GMDN term and classification",
      "Classify under the right risk class: I, Is, Im, IIa, IIb, III",
      "Regulatory pathway assessment & roadmap",
    ],
  },
  {
    num: "2",
    id: "sec-2",
    to: "/services/australia/artg-inclusion",
    icon: FileText,
    title: "2. ARTG Inclusion\n& Application Support",
    bullets: [
      "Prepare and submit ARTG inclusion applications",
      "Justify 'kind of medical device'",
      "Respond to TGA audit & information requests",
    ],
  },
  {
    num: "3",
    id: "sec-3",
    to: "/services/australia/australian-sponsor",
    icon: UserCheck,
    title: "3. Australian\nSponsor Services",
    bullets: [
      "Provision of compliant Australian Sponsor",
      "Ongoing Sponsor obligations & governance",
      "Change management & licence maintenance",
    ],
  },
  {
    num: "4",
    id: "sec-4",
    to: "/services/australia/technical-documentation",
    icon: BookOpen,
    title: "4. Technical Documentation\n& Essential Principles",
    bullets: [
      "Review against Schedule 3 (Essential Principles)",
      "Technical File gap assessment & remediation",
      "IMDRF ToC structure alignment",
    ],
  },
  {
    num: "5",
    id: "sec-5",
    to: "/services/australia/testing-strategy",
    icon: FlaskConical,
    title: "5. Testing Strategy &\nLaboratory Coordination",
    bullets: [
      "Test plan development based on risk & device type",
      "Coordination with NATA-accredited labs",
      "Test report review & acceptability assessment",
    ],
  },
  {
    num: "6",
    id: "sec-6",
    to: "/services/australia/tga-audit",
    icon: Search,
    title: "6. TGA Application Audit\n& Submission Support",
    bullets: [
      "Application dossier review before submission",
      "TGA audit readiness & mock audit",
      "Information request management",
    ],
  },
  {
    num: "7",
    id: "sec-7",
    to: "/services/australia/ivd",
    icon: Syringe,
    title: "7. IVD Market Access\n& Performance Evidence",
    bullets: [
      "IVD classification (Class 1 to Class 4)",
      "Analytical & clinical performance studies",
      "Performance evaluation report (PER) support",
    ],
  },
  {
    num: "8",
    id: "sec-8",
    to: "/services/australia/software",
    icon: Monitor,
    title: "8. SaMD / Software\n& Cybersecurity Compliance",
    bullets: [
      "SaMD classification (MD vs IVDMD)",
      "IEC 62304, ISO 14971 & ISO 27001 alignment",
      "Cybersecurity risk management & SBOM",
    ],
  },
  {
    num: "9",
    id: "sec-9",
    to: "/services/australia/post-market",
    icon: RefreshCw,
    title: "9. Post-Market Surveillance\n& Vigilance (IRIS)",
    bullets: [
      "PMS plan development",
      "Incident reporting in IRIS database",
      "Field safety corrective actions (FSCA)",
    ],
  },
  {
    num: "10",
    id: "sec-10",
    to: "/services/australia/labeling",
    icon: Languages,
    title: "10. Labelling, IFU &\nAdvertising Compliance",
    bullets: [
      "Australian labelling requirements",
      "IFU in English (and other required languages)",
      "Advertising compliance under TGA guidelines",
    ],
  },
  {
    num: "11",
    id: "sec-11",
    to: "/services/australia/supply-chain",
    icon: Factory,
    title: "11. Manufacturer, Importer\n& Supply Chain Compliance",
    bullets: [
      "Manufacturer obligations under the Act",
      "Australian importer requirements",
      "Distributor & supply chain compliance",
    ],
  },
  {
    num: "12",
    id: "sec-12",
    to: "/services/australia/change-management",
    icon: Layers,
    title: "12. Change Management\n& Variations",
    bullets: [
      "Assess impact of changes on ARTG inclusion",
      "Submit variations (if required)",
      "Update technical docs, labelling & IFU",
    ],
  },
];

const processSteps = [
  { step: "1", title: "Strategy & Qualification", desc: "Confirm regulatory status, intended purpose, classification, UDI horizon and market-access pathway." },
  { step: "2", title: "Conformity & Evidence", desc: "Determine acceptable TGA or comparable overseas evidence and establish the Manufacturer Evidence strategy." },
  { step: "3", title: "Technical Evidence & Testing", desc: "Assess Essential Principles, risk, technical documentation, clinical/performance evidence and lab testing gaps." },
  { step: "4", title: "Sponsor & ARTG Application", desc: "Establish Sponsor readiness, GMDN/kind-of-device strategy, Manufacturer Evidence linkage and submit ARTG inclusion." },
  { step: "5", title: "TGA Review / Audit", desc: "Respond to audit or information requests with structured evidence and regulatory rationale." },
  { step: "6", title: "UDI, PMS & Lifecycle", desc: "Maintain UDI / AusUDID, vigilance, annual reporting where applicable, market actions, variations and change control." },
];

const faqs = [
  {
    q: "Do all medical devices need ARTG inclusion before supply in Australia?",
    a: "Most medical devices and IVDs must be included in the ARTG before lawful supply unless a valid exemption, exclusion or other specific pathway applies. Regulatory status should be confirmed before commercial supply.",
  },
  {
    q: "Does a foreign manufacturer need an Australian Sponsor?",
    a: "Yes. The Sponsor applying for ARTG inclusion must be an Australian-based legal entity and must maintain the regulatory interface with the TGA and the manufacturer.",
  },
  {
    q: "What is Manufacturer Evidence?",
    a: "Manufacturer Evidence is accepted conformity assessment evidence linked to the manufacturer and used to support ARTG inclusion. For most medical device and IVD applications, the Sponsor needs an accepted Manufacturer Evidence identifier before the ARTG application can proceed.",
  },
  {
    q: "Can EU, UK, US or other overseas regulatory evidence be used in Australia?",
    a: "Australia recognises certain evidence from comparable overseas regulators and assessment bodies. Whether it can support the Australian application depends on the device, risk class, evidence source, scope, intended purpose and current TGA requirements.",
  },
  {
    q: "Can an ARTG application be audited by TGA?",
    a: "Yes. TGA may select medical device and IVD applications for audit. The Sponsor may need to provide technical, clinical, performance, risk, labelling and conformity evidence before inclusion.",
  },
  {
    q: "When does Australian UDI apply?",
    a: "UDI is being implemented in phases. Mandatory requirements began for Class III and Class IIb devices on 1 July 2026, with later dates for other classes. Each portfolio should be assessed against the current TGA implementation timetable and any transitional provisions.",
  },
  {
    q: "What are the sponsor adverse-event reporting timelines?",
    a: "For sponsors, serious threats to public health are generally reportable within 48 hours, events that led to death or serious deterioration within 10 days, and events whose recurrence might lead to death or serious deterioration within 30 days.",
  },
  {
    q: "Which devices require annual reports after ARTG inclusion?",
    a: "Certain higher-risk devices — including implantable Class IIb devices, Class III devices and Class 4 IVDs — have annual-reporting obligations for the first three years of inclusion, subject to the applicable regulatory conditions.",
  },
  {
    q: "Can NKB Regovanta coordinate testing laboratories?",
    a: "Yes. Where external testing is required, we can help define the regulatory testing strategy, coordinate with established laboratories, review protocols and assess final reports for use in the Australian regulatory evidence package.",
  },
  {
    q: "Does an existing CE certificate automatically mean the device can be sold in Australia?",
    a: "No. Overseas evidence may be useful and, where accepted, can support Australian market authorisation. The Sponsor must still confirm Australian classification, acceptable evidence, Manufacturer Evidence requirements, ARTG inclusion, labelling and ongoing Sponsor obligations.",
  },
  {
    q: "What happens if the device changes after ARTG inclusion?",
    a: "The change should be assessed for impact on conformity evidence, Manufacturer Evidence, ARTG representation, UDI, labelling and post-market obligations. Depending on the change, a variation, new inclusion, additional validation or other regulatory action may be needed.",
  },
  {
    q: "Is Australian UDI the same as US FDA UDI or EU MDR UDI?",
    a: "Australia recognises aspects of global UDI implementation, but Australian UDI requirements and AusUDID data obligations must still be assessed separately. Existing identifiers may be reusable in some circumstances, but Australian compliance should not be assumed automatically.",
  },
];

function AustraliaHubPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Matching Picture Mockup with Sydney Graphic)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-8 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-semibold mb-4">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-navy font-bold">Australia</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#051833] tracking-tight leading-[1.12] mb-2">
                Australia TGA ARTG Inclusion &amp; Australian Sponsor Services
              </h1>
              <p className="text-[14.5px] sm:text-[16px] font-bold text-[#0b7261] mb-3">
                Your Partner for Successful Market Access in Australia
              </p>
              <p className="text-[12.5px] sm:text-[13px] text-gray-600 font-medium leading-relaxed mb-6 max-w-2xl">
                End-to-end regulatory, technical and compliance support for Medical Devices, IVDs and Software as Medical Devices to achieve TGA compliance, ARTG inclusion and long-term market access in Australia.
              </p>

              {/* 8 Checkmarks (2 columns of 4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                {heroChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11.5px] sm:text-[12px] text-gray-700 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0b7261] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* 2 Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all shadow-xs"
                >
                  Discuss Your Australia Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="#sec-1"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-gray-300 text-navy text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all"
                >
                  Our Australia Services <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Sydney Opera House, Harbour Bridge & Flag Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[430px] rounded-2xl overflow-hidden shadow-md border border-gray-200/80">
                <img
                  src={sydneyHeroImg}
                  alt="Australia TGA ARTG Inclusion Sydney Opera House"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. TRUST STATS BAR (6 Items with Circular Icons - Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200/80 py-4 shadow-2xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBarItems.map((item) => (
              <div key={item.title} className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full border border-gray-300 bg-slate-50 flex items-center justify-center shrink-0 text-navy mt-0.5 shadow-2xs">
                  <item.icon className="h-3.5 w-3.5 text-navy/80" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-navy leading-tight">{item.title}</p>
                  <p className="text-[9.5px] text-gray-500 leading-tight mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. OUR AUSTRALIA REGULATORY SERVICES (12 Cards Grid - Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[26px] font-extrabold text-navy tracking-tight">
              Our Australia Regulatory Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {services12.map((card) => (
              <div
                key={card.num}
                className="flex flex-col justify-between p-3.5 rounded-xl border border-gray-200/90 bg-white hover:shadow-md hover:border-teal-300 transition-all duration-200 shadow-2xs group"
              >
                <div>
                  <div className="w-7 h-7 rounded-full border border-gray-300 bg-slate-50 flex items-center justify-center mb-2.5 text-navy shadow-2xs">
                    <card.icon className="h-3.5 w-3.5 text-navy/80" strokeWidth={2} />
                  </div>
                  <h3 className="text-[11px] font-extrabold text-navy leading-snug whitespace-pre-line mb-2">
                    {card.title}
                  </h3>
                  <ul className="space-y-1 text-[10px] text-gray-600 font-medium leading-tight">
                    {card.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-gray-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-gray-100">
                  <Link
                    to={card.to}
                    className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#0b7261] hover:text-[#095c4e] group-hover:translate-x-0.5 transition-transform"
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. PROCESS FLOW & LICENSING PATHWAYS (Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-slate-50 border-t border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Top: 6-Step Process */}
          <div>
            <h3 className="text-center text-lg sm:text-xl font-extrabold text-navy mb-6">
              Our End-to-End Australia Regulatory Process
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {processSteps.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                  <div className="w-7 h-7 mx-auto rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-xs font-bold mb-2">
                    {step.step}
                  </div>
                  <h4 className="text-[11px] font-extrabold text-navy mb-1">{step.title}</h4>
                  <p className="text-[9.5px] text-gray-500 leading-tight">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Pathways Table (4 columns) */}
          <div>
            <h3 className="text-center text-lg sm:text-xl font-extrabold text-navy mb-6">
              Australian Medical Device Licensing Pathways
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-extrabold text-[#0b7261] uppercase tracking-wider block mb-1">
                  Class I, Is, Im
                </span>
                <p className="text-xs font-bold text-navy mb-2">(Low Risk)</p>
                <ul className="text-[10.5px] text-gray-600 space-y-1">
                  <li>• Self-assessment by manufacturer</li>
                  <li>• ARTG inclusion (No Conformity Assessment for Class I non-sterile non-measuring)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-extrabold text-[#0b7261] uppercase tracking-wider block mb-1">
                  Class IIa
                </span>
                <p className="text-xs font-bold text-navy mb-2">(Low-Moderate Risk)</p>
                <ul className="text-[10.5px] text-gray-600 space-y-1">
                  <li>• Conformity Assessment by a TGA-recognised CAB or overseas regulator</li>
                  <li>• Manufacturer Evidence + ARTG inclusion</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-extrabold text-[#0b7261] uppercase tracking-wider block mb-1">
                  Class IIb &amp; III
                </span>
                <p className="text-xs font-bold text-navy mb-2">(Moderate-High / High Risk)</p>
                <ul className="text-[10.5px] text-gray-600 space-y-1">
                  <li>• Conformity Assessment by a TGA-recognised CAB or overseas body</li>
                  <li>• Manufacturer Evidence + ARTG inclusion</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-extrabold text-[#0b7261] uppercase tracking-wider block mb-1">
                  IVD Class 1–4
                </span>
                <p className="text-xs font-bold text-navy mb-2">(Risk-Based IVD Rules)</p>
                <ul className="text-[10.5px] text-gray-600 space-y-1">
                  <li>• Risk-based approach (Class 1 to 4)</li>
                  <li>• Manufacturer Evidence + ARTG inclusion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. 5-COLUMN INFO BAR (Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* 1. About TGA */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-1.5">About TGA</h4>
              <p className="text-[10px] text-gray-600 leading-snug mb-2">
                The Therapeutic Goods Administration (TGA) regulates medical devices under the Therapeutic Goods Act 1989 and associated regulations. ARTG is the public register of medical devices included in Australia.
              </p>
              <a
                href="https://www.tga.gov.au"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0b7261] hover:underline"
              >
                tga.gov.au <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>

            {/* 2. Sponsor Obligations */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-1.5">Australian Sponsor Obligations</h4>
              <ul className="text-[10px] text-gray-600 space-y-1">
                <li>• Must be an Australian-based legal entity</li>
                <li>• Responsible for compliance with all sponsor obligations</li>
                <li>• Ensure devices comply with the Act and Regulations</li>
                <li>• Maintain records and make them available to TGA</li>
              </ul>
            </div>

            {/* 3. Post-Market Obligations */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-1.5">Post-Market Obligations</h4>
              <ul className="text-[10px] text-gray-600 space-y-1">
                <li>• Maintain a PMS system</li>
                <li>• Report incidents in IRIS (10/30 days)</li>
                <li>• Annual Report (for higher risk devices)</li>
                <li>• Conduct trend analysis &amp; CAPA</li>
                <li>• Support TGA recalls and FSCA</li>
              </ul>
            </div>

            {/* 4. Key Timelines */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-2">Key Timelines</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#0b7261] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    10
                  </div>
                  <p className="text-[9.5px] text-gray-600 leading-tight">
                    <strong>Serious Incident:</strong> Report to TGA within 10 days
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#051833] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    30
                  </div>
                  <p className="text-[9.5px] text-gray-600 leading-tight">
                    <strong>Other Incident:</strong> Report to TGA within 30 days
                  </p>
                </div>
              </div>
            </div>

            {/* 5. TGA May Audit */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-1.5">TGA May Audit Your Application</h4>
              <p className="text-[10px] text-gray-600 leading-snug">
                TGA may select applications for audit. Ensure your dossier is complete, accurate and audit-ready to avoid delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. WHY CHOOSE NKB (Dark Navy Box) + READY TO BRING (Map Card)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Why Choose NKB Regovanta for Australia? */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#051833] text-white shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-white mb-4">
                  Why Choose NKB Regovanta for Australia?
                </h3>
                <div className="space-y-2.5">
                  {[
                    "Deep and current knowledge of TGA requirements & processes",
                    "Strong approval track record for devices & IVDs",
                    "Full Australian Sponsor services with ongoing compliance support",
                    "Strong relationships with TGA-recognised CABs & NATA laboratories",
                    "Practical, risk-based and business-focused approach",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Ready to Bring Your Device to Australia? (Green CTA card with Map) */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-50 border border-gray-200 shadow-md flex items-center justify-between overflow-hidden relative">
              <div className="max-w-xs z-10">
                <h3 className="text-lg font-extrabold text-navy mb-2">
                  Ready to Bring Your Device to Australia?
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Partner with our Australia regulatory experts to achieve TGA compliance and ARTG inclusion with confidence.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shadow-xs"
                >
                  Talk to Our Australia Experts <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Map Graphic */}
              <div className="w-36 sm:w-44 shrink-0 opacity-90">
                <img
                  src={australiaMapGraphic}
                  alt="Australia Map"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* 4 Bottom Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100 text-center">
            <div className="flex flex-col items-center">
              <UserCheck className="h-5 w-5 text-[#0b7261] mb-1.5" />
              <p className="text-[11px] font-extrabold text-navy">Regulatory Experts</p>
              <p className="text-[9.5px] text-gray-500">with Local Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-5 w-5 text-[#0b7261] mb-1.5" />
              <p className="text-[11px] font-extrabold text-navy">Trusted by Medical Device</p>
              <p className="text-[9.5px] text-gray-500">IVD &amp; SaMD Companies</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-5 w-5 text-[#0b7261] mb-1.5" />
              <p className="text-[11px] font-extrabold text-navy">High Quality. On Time.</p>
              <p className="text-[9.5px] text-gray-500">Every Time.</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-5 w-5 text-[#0b7261] mb-1.5" />
              <p className="text-[11px] font-extrabold text-navy">Committed to Your</p>
              <p className="text-[9.5px] text-gray-500">Success in Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. DEEP-DIVE REGULATORY MODULES (Full Text Sections 1 to 14)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-slate-50/70 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Comprehensive Australia Regulatory &amp; TGA Compliance
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Explore our in-depth methodologies, strategic frameworks, and regulatory decision pathways for the Australian market.
            </p>
          </div>

          {/* Section 1: Classification */}
          <div id="sec-1" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 01
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              1. Australia Regulatory Strategy &amp; Product Classification
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              Classification is not an administrative label. It drives the minimum conformity evidence, ARTG pathway, application-audit exposure, UDI timing and post-market obligations. NKB Regovanta reviews the intended purpose and the device characteristics that actually trigger the Australian classification rules before the market-access plan is fixed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">When This Support Is Needed</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Launching a new device or IVD in Australia</li>
                  <li>• Changing intended purpose, indications, duration of use, anatomical site or user population</li>
                  <li>• Adding software functionality or converting a hardware feature into software</li>
                  <li>• Introducing sterile, measuring, implantable or active functionality</li>
                  <li>• Using an overseas classification as the starting point and needing to confirm whether Australian rules produce the same outcome</li>
                  <li>• Building a multi-market product family where Australian grouping and evidence must be aligned early</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Includes</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Product qualification as a medical device, IVD, software-based medical device or other therapeutic good</li>
                  <li>• Intended purpose and claims review</li>
                  <li>• Class I, Is, Im, IIa, IIb and III classification strategy for non-IVD medical devices</li>
                  <li>• IVD Class 1, 2, 3 and 4 classification strategy under the risk-based IVD rules</li>
                  <li>• Accessory, system and procedure pack considerations</li>
                  <li>• Software / SaMD classification and exemption / exclusion assessment</li>
                  <li>• GMDN term and “kind of medical device” assessment</li>
                  <li>• Conformity assessment route determination &amp; initial UDI timing</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
                <p className="text-xs text-navy/80 font-medium">
                  If the intended purpose changes, does the classification still hold — and does the existing conformity evidence still cover the Australian kind of device?
                </p>
              </div>
              <Link
                to="/services/australia/classification"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Define Your TGA Regulatory Pathway →
              </Link>
            </div>
          </div>

          {/* Section 2: Manufacturer Evidence */}
          <div id="sec-2" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 02
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              2. Manufacturer Evidence &amp; Conformity Assessment Strategy
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              Manufacturer Evidence is a core gate in the Australian pathway. For most device and IVD applications, the Sponsor must hold an accepted Manufacturer Evidence identifier before the ARTG application can proceed. The evidence must be current, applicable to the manufacturer and appropriate for the risk class and product scope.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">When This Support Is Needed</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Preparing a first Australian ARTG application</li>
                  <li>• Using EU, UK, US, Canadian or other overseas regulatory evidence to support Australia</li>
                  <li>• Changing certification body, conformity assessment certificate, manufacturing site or legal manufacturer</li>
                  <li>• Transitioning from older EU certificates to MDR / IVDR certificates</li>
                  <li>• Extending a product family or adding models under existing evidence</li>
                  <li>• Responding to a TGA question about the adequacy or scope of manufacturer evidence</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Includes</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Review of TGA Conformity Assessment Certificates where applicable</li>
                  <li>• Review of acceptable comparable overseas regulator / assessment body evidence</li>
                  <li>• Manufacturer Evidence application and variation strategy</li>
                  <li>• QMS certificate and product-assessment evidence review</li>
                  <li>• Declaration of Conformity review</li>
                  <li>• Certificate scope, device family and classification alignment</li>
                  <li>• Manufacturer legal name and site consistency</li>
                  <li>• Strategy for certificate lapse, replacement or variation</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
                <p className="text-xs text-navy/80 font-medium">
                  Can the Sponsor demonstrate, document by document, that the conformity assessment evidence applies to the same manufacturer, same device scope and same intended purpose being represented in Australia?
                </p>
              </div>
              <Link
                to="/services/australia/manufacturer-evidence"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Review Your Manufacturer Evidence →
              </Link>
            </div>
          </div>

          {/* Section 3: ARTG Inclusion Strategy */}
          <div id="sec-3" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 03
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              3. ARTG Inclusion Strategy &amp; Application Preparation
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              ARTG inclusion is not a simple product-by-product registration. The application is built around the Australian concept of a “kind of medical device”, with classification, GMDN, manufacturer, conformity assessment evidence and grouping logic determining how devices are represented in the ARTG.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Includes</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• ARTG inclusion pathway assessment</li>
                  <li>• Kind-of-device and grouping strategy</li>
                  <li>• GMDN assessment</li>
                  <li>• Manufacturer and Sponsor data alignment</li>
                  <li>• Manufacturer Evidence linkage review</li>
                  <li>• Declaration of Conformity review</li>
                  <li>• Intended purpose and classification consistency review</li>
                  <li>• TGA Business Services application support &amp; post-inclusion quality check</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">What We Challenge Before Submission</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Grouping products that do not meet the same kind-of-device criteria</li>
                  <li>• GMDN term that does not accurately represent intended purpose or technology</li>
                  <li>• Mismatch between ARTG application and Declaration of Conformity</li>
                  <li>• Manufacturer Evidence identifier that does not cover the proposed class / scope</li>
                  <li>• Claims or model information in Australian labelling that exceed the ARTG regulatory basis</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
                <p className="text-xs text-navy/80 font-medium">
                  If TGA asks for the Declaration of Conformity, conformity evidence and technical dossier today, will every document support the same device scope represented by the ARTG application?
                </p>
              </div>
              <Link
                to="/services/australia/artg-inclusion"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Prepare Your ARTG Inclusion →
              </Link>
            </div>
          </div>

          {/* Section 4: Australian Sponsor Services */}
          <div id="sec-4" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 04
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              4. Australian Sponsor Services &amp; Regulatory Governance
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              A foreign manufacturer needs an Australian-based Sponsor to interface with the TGA and hold the ARTG inclusion. The Sponsor role is regulatory and ongoing: it requires access to technical and safety information, control of regulatory communications, vigilance readiness and the ability to act when the manufacturer changes the device or a safety issue emerges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Includes</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Pre-market Sponsor readiness and ARTG coordination</li>
                  <li>• Manufacturer–Sponsor regulatory responsibilities</li>
                  <li>• Access to technical, clinical, performance and safety information</li>
                  <li>• Conditions of inclusion monitoring</li>
                  <li>• TGA information / sample request coordination</li>
                  <li>• Complaint and adverse-event escalation</li>
                  <li>• Medical Device Incident Reporting (MDIR) coordination</li>
                  <li>• Recall / product alert / product correction support under PRAC</li>
                  <li>• UDI / AusUDID responsibilities and data maintenance</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">What We Challenge Before Submission</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Manufacturer informs the Sponsor only after a change has already been implemented</li>
                  <li>• Sponsor cannot access current technical or post-market records</li>
                  <li>• Complaints reach distributors but not the Sponsor</li>
                  <li>• Overseas recall or regulator action is not assessed for Australian impact</li>
                  <li>• UDI, ARTG, labelling and technical-file changes are managed in separate silos</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
                <p className="text-xs text-navy/80 font-medium">
                  Could the Sponsor independently demonstrate to TGA why the device remains compliant, what changed, what incidents occurred and what corrective actions were taken?
                </p>
              </div>
              <Link
                to="/services/australia/australian-sponsor"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Discuss Australian Sponsor Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. FREQUENTLY ASKED QUESTIONS (12 Comprehensive FAQs)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Frequently Asked Questions (Australia &amp; TGA)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Key questions manufacturers ask when entering and maintaining medical devices on the Australian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-gray-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-navy mb-2 flex items-start gap-2">
                    <HelpCircle className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. CLOSING PARTNER CTA
      ══════════════════════════════════════════════════════════════════ */}
      <CTABand
        title="Your Regulatory Partner for Australian Market Access"
        description="Whether you are classifying a new device, validating overseas conformity evidence, preparing Manufacturer Evidence, applying for ARTG inclusion, appointing an Australian Sponsor, planning laboratory testing, preparing for TGA audit, implementing UDI or strengthening post-market compliance, NKB Regovanta supports the regulatory lifecycle from strategy through ongoing market maintenance."
      />
    </div>
  );
}
