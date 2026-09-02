import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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
  Check,
  Microscope,
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
  BookOpen,
  Boxes,
  Languages,
  BadgePercent,
  CheckCircle,
  AlertCircle,
  Search,
  Sparkles,
} from "lucide-react";
import canadaHero3dImg from "@/assets/canada-hero-3d.png";
import canadaMapShieldImg from "@/assets/canada-map-shield.png";
import canadaMapleBottomImg from "@/assets/canada-maple-leaf-bottom.png";
import canadaMdsapLogoImg from "@/assets/canada-mdsap-logo.png";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/canada/")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada MDL & MDEL Registration Consultant | MDSAP Canada | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Senior Health Canada regulatory consulting: Medical Device Licence (MDL Class II-IV), Medical Device Establishment Licence (MDEL), MDSAP ISO 13485 QMS readiness, IMDRF Table of Contents dossiers, and bilingual French/English labelling.",
      },
      {
        name: "keywords",
        content:
          "Health Canada Medical Device Licence MDL, Medical Device Establishment Licence MDEL, MDSAP Canada consultant, SOR 98-282, Health Canada IVD registration, bilingual labelling Canada medical devices, NKB Regovanta",
      },
      {
        property: "og:title",
        content: "Health Canada MDL & MDEL Registration Consultant | MDSAP Canada | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Your Partner for Canadian Market Access. End-to-end regulatory, quality and compliance support for Medical Devices, IVDs and Combination Products in Canada.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/canada" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada" }],
  }),
  component: CanadaMarketCompletePage,
});

/* ── Static Data ── */

const heroChecklist = [
  "MDL & MDEL Registration",
  "MDSAP Canada Certification",
  "Regulatory Strategy & Compliance",
  "Post-Market & Vigilance",
  "Licence Maintenance & Changes",
  "Local Canadian Support",
];

const trustBarItems = [
  {
    icon: Award,
    title: "Health Canada Regulatory Expertise",
    desc: "Deep knowledge of Canada's requirements",
  },
  {
    icon: FileCheck2,
    title: "MDL & MDEL Registration Support",
    desc: "Complete registration from planning to approval",
  },
  {
    icon: ShieldCheck,
    title: "MDSAP Canada Certification",
    desc: "End-to-end support for single audit program",
  },
  {
    icon: Activity,
    title: "Post-Market Compliance",
    desc: "Vigilance, reporting & PMS support",
  },
  {
    icon: UserCheck,
    title: "Local Presence in Canada",
    desc: "Canadian regulatory and quality experts",
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
    to: "/services/canada/classification",
    icon: Target,
    title: "1. Regulatory Strategy &\nProduct Classification",
    bullets: [
      "Classify your device under MDR SOR/98-282",
      "Define licensing pathway (MDL, MDEL, IVD)",
      "Identify applicable standards & labelling requirements",
    ],
  },
  {
    num: "2",
    id: "sec-2",
    to: "/services/canada/mdl",
    icon: FileText,
    title: "2. MDL & MDEL\nRegistration",
    bullets: [
      "MDL (Medical Device Licence) applications",
      "MDEL (Medical Device Establishment Licence)",
      "Evidence summary, forms & cover letters",
    ],
  },
  {
    num: "3",
    id: "sec-3",
    to: "/services/canada/mdsap",
    icon: ShieldCheck,
    title: "3. MDSAP Canada\nCertification",
    bullets: [
      "Gap assessment to MDSAP (SOR/98-282 & ISO 13485)",
      "Audit readiness & CAPA support",
      "Coordination with MDSAP CABs",
    ],
  },
  {
    num: "4",
    id: "sec-4",
    to: "/services/canada/technical-documentation",
    icon: BookOpen,
    title: "4. Technical Documentation\nReview",
    bullets: [
      "Review of Essential Principles compliance",
      "Risk management (ISO 14971)",
      "V&V, clinical/performance evidence, labelling",
    ],
  },
  {
    num: "5",
    id: "sec-5",
    to: "/services/canada/testing-strategy",
    icon: FlaskConical,
    title: "5. Testing Strategy &\nLab Coordination",
    bullets: [
      "Test plan development",
      "Lab selection & coordination",
      "Protocol review & worst-case justification",
    ],
  },
  {
    num: "6",
    id: "sec-6",
    to: "/services/canada/labeling",
    icon: Languages,
    title: "6. Labelling & Bilingual\nRequirements",
    bullets: [
      "English & French labelling review",
      "Symbols, UDI, IFU & packaging compliance",
      "Label change filing support",
    ],
  },
  {
    num: "7",
    id: "sec-7",
    to: "/services/canada/pms",
    icon: RefreshCw,
    title: "7. Post-Market Surveillance\n& Vigilance",
    bullets: [
      "PMS plan development",
      "Adverse event reporting (SOR 98-282 Part 1, Div. 2)",
      "Trend analysis & CAPA support",
    ],
  },
  {
    num: "8",
    id: "sec-8",
    to: "/services/canada/change-management",
    icon: Layers,
    title: "8. Licence Maintenance\n& Changes",
    bullets: [
      "Licence renewals",
      "Site/address/ownership changes",
      "Class changes & scope expansions",
    ],
  },
  {
    num: "9",
    id: "sec-9",
    to: "/services/canada/supply-chain",
    icon: Factory,
    title: "9. Manufacturer & Importer\nObligations",
    bullets: [
      "Canadian importer obligations",
      "Quality management responsibilities",
      "Record retention & traceability",
    ],
  },
  {
    num: "10",
    id: "sec-10",
    to: "/services/canada/ivd",
    icon: Syringe,
    title: "10. IVD Registration\nSupport",
    bullets: [
      "IVD classification & licensing",
      "Analytical & clinical performance evidence",
      "Assay validation & labelling",
    ],
  },
  {
    num: "11",
    id: "sec-11",
    to: "/services/canada/software",
    icon: Monitor,
    title: "11. Software & Cybersecurity\nCompliance",
    bullets: [
      "SaMD classification",
      "IEC 62304 & cybersecurity risk management",
      "Software change & validation support",
    ],
  },
  {
    num: "12",
    id: "sec-12",
    to: "/services/canada/inspection",
    icon: Search,
    title: "12. Compliance Audits &\nInspection Support",
    bullets: [
      "Health Canada inspection readiness",
      "Mock audits & compliance assessments",
      "Response to findings support",
    ],
  },
];

const process6 = [
  { num: 1, icon: Target, title: "Strategy & Classification" },
  { num: 2, icon: FileText, title: "Data & Documentation Preparation" },
  { num: 3, icon: FileCheck2, title: "MDL / MDEL Submission" },
  { num: 4, icon: Search, title: "Health Canada Review" },
  { num: 5, icon: Award, title: "Licence Issuance & Maintenance" },
  { num: 6, icon: Shield, title: "Post-Market Compliance" },
];

const whyChooseBullets = [
  "Regulatory & quality experts with deep Health Canada experience",
  "Proven track record for MDL, MDEL & MDSAP Canada",
  "Strong relationships with accredited test labs & MDSAP CABs",
  "Integrated approach – regulatory, quality, testing & compliance",
  "Local Canadian support with global regulatory perspective",
  "Practical, risk-based & business-focused solutions",
];

const faqs = [
  {
    q: "What is the difference between an MDL and an MDEL?",
    a: "An MDL (Medical Device Licence) is a device-specific licence issued to the manufacturer for Class II, III and IV medical devices before they can be sold in Canada. An MDEL (Medical Device Establishment Licence) is an operational licence issued to Class I manufacturers, importers, and distributors authorizing them to import or distribute medical devices in Canada.",
  },
  {
    q: "Does a Class I medical device require an MDL?",
    a: "Class I medical devices generally do not require a device-specific Medical Device Licence (MDL). However, the manufacturer, importer or distributor must hold a valid Medical Device Establishment Licence (MDEL) unless a specific regulatory exemption applies.",
  },
  {
    q: "Is MDSAP certification mandatory in Canada?",
    a: "Yes. Health Canada requires all manufacturers of Class II, III and IV medical devices to maintain ISO 13485 quality-system certification issued exclusively through a recognized Medical Device Single Audit Program (MDSAP) Auditing Organization.",
  },
  {
    q: "What information is required for Class III and IV applications?",
    a: "Higher-risk applications require structured technical evidence supporting safety and effectiveness. Health Canada uses an IMDRF Table of Contents-based structure with Canada-specific content requirements for comprehensive Class III and IV pre-market review (pre-clinical testing, risk management, biocompatibility, software V&V, and clinical evidence).",
  },
  {
    q: "Can NKB Regovanta coordinate medical device testing?",
    a: "Yes. Where external studies are needed (biocompatibility, electrical safety, usability, software verification, IVD performance), we help define the test strategy and coordinate with established, accredited laboratories. We also review protocols, worst-case selection, acceptance criteria, and final reports.",
  },
  {
    q: "Do medical device labels need to be bilingual in Canada?",
    a: "For devices sold to the general public, specified label information and directions for use must be available in both English and French. For professional-use devices, labelling may be in either official language, with the other official language made available upon request. Near-patient IVD requirements should be assessed separately.",
  },
  {
    q: "When must an incident be reported to Health Canada under Mandatory Problem Reporting?",
    a: "For reportable incidents occurring in Canada, a preliminary report is generally required within 10 calendar days when death or a serious deterioration in health has occurred, and within 30 calendar days when such an outcome did not occur but could occur if the incident recurred.",
  },
  {
    q: "Do changes to a licensed device require an MDL amendment?",
    a: "Certain changes to Class II, III and IV devices (such as intended use, design, material, software, manufacturing process, or labelling changes) require a significant change amendment application to Health Canada before marketing the modified device.",
  },
  {
    q: "Can NKB Regovanta support IVDs in Canada?",
    a: "Yes. We support Canadian IVD qualification, classification under Schedule 1 Part 2, licensing strategy, analytical and clinical performance evidence, study planning, laboratory coordination, bilingual labelling, MDSAP alignment, and post-market compliance.",
  },
  {
    q: "Can NKB Regovanta support software and AI-enabled medical devices (SaMD)?",
    a: "Yes. We support qualification, classification, software lifecycle evidence (IEC 62304), cybersecurity risk management, interoperability, clinical validation, and predetermined change control plans for machine-learning-enabled medical software.",
  },
];

function CanadaMarketCompletePage() {
  return (
    <div className="bg-white min-h-screen font-sans text-navy selection:bg-[#e03131] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Health Canada MDL & MDEL Registration Consultant | MDSAP Canada",
              url: "https://www.nkbregovanta.com/services/canada",
              description:
                "Health Canada Medical Device Licence (MDL), Medical Device Establishment Licence (MDEL), MDSAP ISO 13485 QMS compliance, and pre-market dossiers.",
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
                { "@type": "ListItem", position: 3, name: "Canada", item: "https://www.nkbregovanta.com/services/canada" },
              ],
            },
          ]),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Identical to Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#03152d] via-[#071f43] to-[#0c2a57] text-white pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-border/20">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(224,49,49,0.3),transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7">
              <h1 className="font-display font-extrabold text-white text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] leading-[1.12] mb-2 tracking-tight">
                Health Canada MDL &amp; MDEL<br />
                Registration Consultant<br />
                <span className="text-[#e03131]">MDSAP Canada</span> | Your Partner for<br className="hidden sm:inline" />
                Canadian Market Access
              </h1>
              <p className="text-xs sm:text-[13.5px] text-blue-100/90 font-medium mb-6 leading-relaxed max-w-2xl">
                End-to-end regulatory, quality and compliance support for Medical Devices, IVDs and Combination Products in Canada.
              </p>

              {/* 6 Checkmark Bullets (2 cols x 3 rows) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                {heroChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[12px] sm:text-[12.5px] text-white/90 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#e03131] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* 2 Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all shadow-md"
                >
                  Discuss Your Canada Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="#sec-1"
                  className="inline-flex items-center gap-2 bg-[#0c2a57]/70 hover:bg-[#0c2a57] border border-white/30 text-white text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all backdrop-blur-xs"
                >
                  Our Canada Services <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right 3D Visual with Parliament, MDSAP Medal, Health Canada Binder & Maple Leaf */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[430px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={canadaHero3dImg}
                  alt="Health Canada MDL MDEL MDSAP Canada"
                  className="w-full h-auto object-contain rounded-xl"
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
          3. OUR HEALTH CANADA REGULATORY SERVICES (12 Cards Grid - Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[26px] font-extrabold text-navy tracking-tight">
              Our Health Canada Regulatory Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {services12.map((card) => (
              <div
                key={card.num}
                className="flex flex-col justify-between p-3.5 rounded-xl border border-gray-200/90 bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200 shadow-2xs group"
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
                    className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#e03131] hover:text-[#c92a2a] group-hover:translate-x-0.5 transition-transform"
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
          4. PROCESS FLOW & WHY CHOOSE NKB (Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-2 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left Box: Our End-to-End Canada Regulatory Process */}
            <div className="lg:col-span-7 bg-[#f0f4f9] rounded-2xl p-6 border border-gray-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="text-base font-extrabold text-navy text-center mb-6 tracking-tight">
                  Our End-to-End Canada Regulatory Process
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 items-center">
                  {process6.map((step, idx) => (
                    <div key={step.num} className="flex items-center">
                      <div className="flex-1 flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200/90 shadow-2xs flex items-center justify-center mb-1.5">
                          <step.icon className="h-4 w-4 text-navy" strokeWidth={1.75} />
                        </div>

                        <div className="flex items-start gap-1 justify-center">
                          <span className="w-3.5 h-3.5 rounded-full bg-[#e03131] text-white text-[8.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {step.num}
                          </span>
                          <p className="text-[9.5px] font-extrabold text-navy leading-tight text-left">
                            {step.title}
                          </p>
                        </div>
                      </div>

                      {idx < process6.length - 1 && (
                        <div className="hidden lg:block px-0.5">
                          <ArrowRight className="h-3 w-3 text-navy/40" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Box: Why Choose NKB Regovanta for Canada? */}
            <div className="lg:col-span-5 bg-[#071d3d] text-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-md">
              <div className="relative z-10">
                <h3 className="text-base font-extrabold text-white mb-4 tracking-tight">
                  Why Choose NKB Regovanta for Canada?
                </h3>
                <div className="space-y-2 max-w-sm">
                  {whyChooseBullets.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-white/90 font-medium leading-snug">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#e03131] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute right-2 bottom-3 w-28 sm:w-36 opacity-90 pointer-events-none hidden sm:block">
                <img
                  src={canadaMapShieldImg}
                  alt="Canada Map with Maple Leaf Shield"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. LICENSING PATHWAYS & DEVICE CLASSES (Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Box: Health Canada Licensing Pathways (3 Cards) */}
            <div className="lg:col-span-8 bg-[#f8fafc] rounded-2xl p-5 border border-gray-200/80 shadow-2xs">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy mb-3">
                Health Canada Licensing Pathways
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <FlaskConical className="h-4 w-4 text-navy" />
                    <h5 className="text-[11.5px] font-extrabold text-navy">Medical Devices (MDL)</h5>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                    Required for Class II, III &amp; IV devices. Sold, leased, advertised or imported into Canada. Licence issued to the device (brand/model).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Building2 className="h-4 w-4 text-navy" />
                    <h5 className="text-[11.5px] font-extrabold text-navy">Establishment Licence (MDEL)</h5>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                    Required for manufacturers, sterilizers, packagers, importers &amp; exporters. Demonstrates compliance with Quality Management System requirements.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Microscope className="h-4 w-4 text-navy" />
                    <h5 className="text-[11.5px] font-extrabold text-navy">In Vitro Diagnostics (IVD)</h5>
                  </div>
                  <p className="text-[10px] text-gray-600 leading-relaxed font-medium">
                    IVD licensing pathway based on risk classification. Includes assay validation, performance evidence &amp; labelling.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Box: Devices Classes in Canada (SOR/98-282) */}
            <div className="lg:col-span-4 bg-[#f8fafc] rounded-2xl p-5 border border-gray-200/80 shadow-2xs flex flex-col justify-between">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy mb-3">
                Devices Classes in Canada (SOR/98-282)
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center mb-2">
                <div className="p-2 rounded-lg bg-white border border-gray-200 shadow-2xs">
                  <span className="text-[11px] font-extrabold text-navy block">Class I</span>
                  <span className="text-[9.5px] text-gray-500 font-medium">Low risk</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-gray-200 shadow-2xs">
                  <span className="text-[11px] font-extrabold text-navy block">Class II</span>
                  <span className="text-[9.5px] text-gray-500 font-medium">Moderate risk</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-gray-200 shadow-2xs">
                  <span className="text-[11px] font-extrabold text-navy block">Class III</span>
                  <span className="text-[9.5px] text-gray-500 font-medium">High risk</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-white border border-gray-200 shadow-2xs text-center">
                <span className="text-[11px] font-extrabold text-navy block">Class IV</span>
                <span className="text-[9.5px] text-gray-500 font-medium">Highest risk</span>
              </div>
            </div>
          </div>

          {/* 5-Column Info Bar (Matching Picture) */}
          <div className="p-4 rounded-2xl bg-[#f8fafc] border border-gray-200/80 shadow-2xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <p className="text-[10.5px] font-extrabold text-navy mb-1">MDSAP – Single Audit Program</p>
              <p className="text-[9.5px] text-gray-600 leading-tight font-medium mb-1.5">
                Canada is a participating country in MDSAP. A single MDSAP audit can satisfy the QMS requirements for Canada along with other MDSAP countries.
              </p>
              <img src={canadaMdsapLogoImg} alt="MDSAP Logo" className="h-3.5 w-auto object-contain opacity-80" />
            </div>

            <div>
              <p className="text-[10.5px] font-extrabold text-navy mb-1">Regulations</p>
              <ul className="text-[9.5px] text-gray-600 font-medium space-y-0.5">
                <li>• Medical Devices Regulations (SOR/98-282)</li>
                <li>• Food and Drugs Act</li>
                <li>• Guidance &amp; Policies</li>
              </ul>
            </div>

            <div>
              <p className="text-[10.5px] font-extrabold text-navy mb-1">Standards</p>
              <ul className="text-[9.5px] text-gray-600 font-medium space-y-0.5">
                <li>• ISO 13485, ISO 14971</li>
                <li>• IEC 62304, IEC 62366-1</li>
                <li>• Risk-based standards</li>
              </ul>
            </div>

            <div>
              <p className="text-[10.5px] font-extrabold text-navy mb-1">Reporting Timelines</p>
              <ul className="text-[9.5px] text-gray-600 font-medium space-y-0.5">
                <li>• Serious adverse reaction: 10 days</li>
                <li>• Death: 10 days</li>
                <li>• Malfunction: 15 days</li>
                <li>• Complaint: 30 days</li>
              </ul>
            </div>

            <div>
              <p className="text-[10.5px] font-extrabold text-navy mb-1">Marketed Health Products Database (MHPD)</p>
              <p className="text-[9.5px] text-gray-600 leading-tight font-medium">
                All MDL, MDEL &amp; licensed products are publicly listed in the MHPD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. COMPLETE 13 IN-DEPTH REGULATORY MODULES (All Technical Content)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-t border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Framework Intro */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Regulatory Architecture
            </span>
            <h2 className="text-2xl font-extrabold text-navy tracking-tight mt-3 mb-2">
              Understanding the Canadian Medical Device Licensing Framework
            </h2>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed mb-6">
              Health Canada regulates medical devices under the <strong>Food and Drugs Act</strong> and the <strong>Medical Devices Regulations (SOR/98-282)</strong>. Devices are classified from Class I to Class IV according to risk. The regulatory route changes substantially with the class of the device and the role of the establishment in the Canadian supply chain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200/80">
                <span className="text-xs font-extrabold text-navy block mb-1">Class I</span>
                <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                  Lowest-risk devices. A device-specific MDL is generally not required, but establishment licensing (MDEL) applies to manufacturers, importers and distributors.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200/80">
                <span className="text-xs font-extrabold text-navy block mb-1">Class II, III &amp; IV</span>
                <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                  Manufacturers require a valid Medical Device Licence (MDL) issued to the manufacturer before the device may be imported or sold in Canada.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200/80">
                <span className="text-xs font-extrabold text-navy block mb-1">MDEL Establishment</span>
                <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                  Operational licence tied to regulated activities such as manufacturing Class I devices, importing or distributing medical devices across all classes.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200/80">
                <span className="text-xs font-extrabold text-navy block mb-1">MDSAP Canada</span>
                <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                  Manufacturers of Class II, III and IV devices must maintain ISO 13485 certification issued through a recognized MDSAP auditing organization.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-red-50/70 border border-red-200 mt-5">
              <p className="text-xs font-bold text-red-900">Critical Distinction:</p>
              <p className="text-[11.5px] text-red-900/85 font-medium leading-relaxed mt-0.5">
                MDL and MDEL are not interchangeable. An MDL is a device licence issued to the manufacturer for Class II, III or IV devices. An MDEL is an establishment licence tied to regulated activities such as manufacturing Class I devices, importing or distributing medical devices.
              </p>
            </div>
          </div>

          {/* SECTION 1 */}
          <div id="sec-1" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 01
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              1. Regulatory Strategy &amp; Product Classification
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              Classification is the first regulatory decision because it determines the licensing route, submission depth, quality-system expectations and the level of evidence Health Canada will review.
            </p>
            <div className="pt-2">
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">How NKB Approaches Classification:</h4>
              <p className="text-xs text-navy/75 font-medium mb-3">
                We begin with the device definition and intended use rather than selecting a class based on a superficially similar product. We assess the regulatory characteristics that drive classification and document the rationale so the downstream licensing strategy is built on a defensible basis.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-700 font-medium">
                <li className="flex items-start gap-2">• Confirm whether the product meets the Canadian definition of a medical device or IVD.</li>
                <li className="flex items-start gap-2">• Review intended use, indications, target population and user environment.</li>
                <li className="flex items-start gap-2">• Apply the non-IVD or IVD classification rules under Schedule 1 of the Medical Devices Regulations.</li>
                <li className="flex items-start gap-2">• Assess invasiveness, duration of contact, active functions, energy transfer, monitoring functions and consequences of device failure for non-IVDs.</li>
                <li className="flex items-start gap-2">• For IVDs, assess the analyte, intended purpose, testing context, donor/transfusion implications, disease significance and consequences of an incorrect result.</li>
                <li className="flex items-start gap-2">• Determine Class I, II, III or IV and the resulting MDL/MDEL/MDSAP route.</li>
                <li className="flex items-start gap-2">• Identify applicable standards, labelling requirements and evidence expectations.</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200 mt-3">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                The question is not simply “What class is this device?” It is “What regulatory obligations are triggered by this classification, and what evidence will Health Canada expect for this risk profile?”
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Define Your Health Canada Regulatory Pathway →
              </Link>
            </div>
          </div>

          {/* SECTION 2 */}
          <div id="sec-2" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 02
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              2. Medical Device Licence (MDL) - Class II, III &amp; IV
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              A Medical Device Licence is required for Class II, III and IV medical devices before they may be imported or sold in Canada. The licence is issued to the manufacturer and is tied to the licensed device or device family/grouping.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
                <p className="text-xs font-bold text-navy mb-1">Class II Applications</p>
                <p className="text-[11px] text-gray-600">Generally a more streamlined licence application, but classification, device identifiers, labelling and MDSAP quality-system evidence must still align.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
                <p className="text-xs font-bold text-navy mb-1">Class III Applications</p>
                <p className="text-[11px] text-gray-600">Requires a more substantive pre-market review and a structured technical evidence package supporting safety and effectiveness.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
                <p className="text-xs font-bold text-navy mb-1">Class IV Applications</p>
                <p className="text-[11px] text-gray-600">Highest-risk devices require the most comprehensive evidence package, including detailed safety and effectiveness data and clinical evidence.</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Our MDL Support Includes:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• Licence pathway and application-type assessment</li>
                <li>• Device grouping strategy: single device, family, group or group family</li>
                <li>• Manufacturer and device information review</li>
                <li>• MDSAP certificate and scope alignment</li>
                <li>• Health Canada Regulatory Enrolment Process (REP) data preparation</li>
                <li>• Class-specific application forms and supporting documentation</li>
                <li>• IMDRF Table of Contents dossier planning for Class III and IV submissions</li>
                <li>• Health Canada-specific evidence requirements and regional content</li>
                <li>• Application quality review before submission</li>
                <li>• Response strategy for screening deficiencies or requests for additional info</li>
                <li>• Licence issuance review and post-approval maintenance planning</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                A technically strong dossier is not created by filling every available folder. The evidence must be proportionate to the device class, linked to the safety and effectiveness requirements and presented in a way that allows Health Canada to trace the claim to the supporting data.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Prepare Your Health Canada MDL Submission →
              </Link>
            </div>
          </div>

          {/* SECTION 3 */}
          <div id="sec-3" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 03
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              3. Medical Device Establishment Licence (MDEL)
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              An MDEL authorizes an establishment to conduct regulated activities involving medical devices in Canada. It commonly applies to Class I manufacturers and to importers and distributors of medical devices across all classes, subject to regulatory exemptions.
            </p>
            <div>
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">MDEL Is an Operational Compliance Licence:</h4>
              <p className="text-xs text-navy/75 font-medium mb-3">An MDEL is not simply a company registration. The establishment must have procedures and controls capable of supporting the regulated activities listed on the licence.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• Determine whether the establishment requires an MDEL and which activities must be included</li>
                <li>• Confirm establishment name, address and regulatory activity information</li>
                <li>• Identify device classes and categories handled by the establishment</li>
                <li>• Review procedures for distribution records and traceability</li>
                <li>• Review complaint handling and escalation procedures</li>
                <li>• Review mandatory problem reporting procedures</li>
                <li>• Review recall procedures and responsibilities</li>
                <li>• Review storage, handling and distribution controls where relevant</li>
                <li>• Assess importer/distributor responsibilities for verifying device licensing and labelling</li>
                <li>• Support annual licence review requirements and licence amendments/notifications</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Inspection-Readiness Perspective:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                For an MDEL holder, Health Canada may look beyond the existence of procedures and examine whether the establishment can demonstrate effective implementation through records, complaint files, distribution data, recall capability and licensing controls.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Assess Your MDEL Requirements →
              </Link>
            </div>
          </div>

          {/* SECTION 4 */}
          <div id="sec-4" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 04
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              4. MDSAP Canada &amp; ISO 13485 Quality-System Readiness
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              For manufacturers of Class II, III and IV devices, quality-system certification is a core part of the Canadian licensing framework. Health Canada relies on ISO 13485 certification issued through a recognized Medical Device Single Audit Program (MDSAP) auditing organization.
            </p>
            <div>
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Our MDSAP Support Goes Beyond Certificate Collection:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• MDSAP gap assessment against ISO 13485 and Health Canada regulatory requirements</li>
                <li>• QMS scope and certificate alignment with the legal manufacturer and licensed devices</li>
                <li>• Design and development controls for applicable device classes</li>
                <li>• Risk-management integration (ISO 14971)</li>
                <li>• Supplier and outsourced-process controls</li>
                <li>• Complaint handling and mandatory reporting</li>
                <li>• Recall and advisory notice processes</li>
                <li>• CAPA and nonconformity controls</li>
                <li>• Change control and licence-impact assessment</li>
                <li>• Post-market surveillance and regulatory reporting interfaces</li>
                <li>• MDSAP audit preparation and response to audit nonconformities</li>
                <li>• Coordination of regulatory evidence with the QMS and technical dossier</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                The MDSAP certificate, the technical dossier and the Health Canada licence should not tell three different stories. The legal manufacturer, device scope, manufacturing controls, design responsibilities and post-market processes must remain aligned.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Assess Your MDSAP Canada Readiness →
              </Link>
            </div>
          </div>

          {/* SECTION 5 */}
          <div id="sec-5" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 05
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              5. Technical Documentation &amp; Health Canada Evidence Strategy
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              The level of technical evidence required increases with device risk. For Class III and IV devices, Health Canada uses a structured application framework based on the IMDRF Table of Contents, together with Canada-specific content requirements.
            </p>
            <div>
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Evidence Architecture We Review:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• Device description, principles of operation and variants/configurations</li>
                <li>• Intended use, indications, contraindications and target population</li>
                <li>• Device classification and regulatory history</li>
                <li>• Essential principles / Canadian safety and effectiveness requirements</li>
                <li>• Risk-management documentation and benefit-risk reasoning</li>
                <li>• Design verification and validation</li>
                <li>• Bench and functional performance testing</li>
                <li>• Biocompatibility and chemical characterization</li>
                <li>• Sterilization, packaging and shelf-life evidence</li>
                <li>• Electrical safety and EMC where applicable</li>
                <li>• Software verification and validation and cybersecurity where applicable</li>
                <li>• Usability/human factors evidence</li>
                <li>• Clinical evidence for higher-risk devices where required</li>
                <li>• IVD analytical and clinical performance evidence</li>
                <li>• Labelling, IFU and promotional consistency</li>
                <li>• Post-market history and supporting regulatory information</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                We challenge whether each performance claim is actually supported by the evidence submitted, whether the tested configuration represents the marketed device, and whether risk, testing, clinical evidence and labelling remain internally consistent.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Review Your Health Canada Technical Evidence →
              </Link>
            </div>
          </div>

          {/* SECTION 6 */}
          <div id="sec-6" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 06
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              6. Testing Strategy &amp; Laboratory Coordination
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              Testing should be designed around the regulatory question the evidence must answer. NKB Regovanta helps manufacturers define the evidence strategy before studies are initiated and can coordinate testing with established laboratories where external testing is required.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Testing Areas We Can Support:</h4>
                <ul className="space-y-1 text-xs text-gray-700 font-medium">
                  <li>• Bench and functional performance testing</li>
                  <li>• Biocompatibility and chemical characterization</li>
                  <li>• Sterilization validation</li>
                  <li>• Packaging and transportation validation</li>
                  <li>• Shelf-life and ageing studies</li>
                  <li>• Electrical safety and EMC</li>
                  <li>• Software verification and validation</li>
                  <li>• Cybersecurity testing and documentation</li>
                  <li>• Human factors and usability</li>
                  <li>• Mechanical and durability testing</li>
                  <li>• IVD analytical and clinical performance studies</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">How NKB Approaches Testing:</h4>
                <ul className="space-y-1 text-xs text-gray-700 font-medium">
                  <li>• Define what regulatory question the test must answer</li>
                  <li>• Confirm applicable recognized or relevant standards</li>
                  <li>• Challenge sample selection and device configuration</li>
                  <li>• Identify appropriate worst-case rationale</li>
                  <li>• Review comparator/reference method selection</li>
                  <li>• Review acceptance criteria before study execution</li>
                  <li>• Review protocols for regulatory adequacy</li>
                  <li>• Review deviations and impact on interpretability</li>
                  <li>• Review reports before dossier integration</li>
                  <li>• Trace evidence back to licence application</li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Our Difference:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                We do not simply refer the client to a laboratory. We sit between the manufacturer, laboratory and Health Canada dossier so the generated evidence is fit for regulatory review and does not have to be recreated later.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Build Your Canada Testing Strategy →
              </Link>
            </div>
          </div>

          {/* SECTION 7 */}
          <div id="sec-7" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 07
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              7. Canadian Labelling, French/English &amp; IFU Compliance
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              Canadian labelling requirements are not a translation exercise. The label, package, instructions for use and promotional claims must remain consistent with the licensed device, intended use and performance evidence.
            </p>
            <div>
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Our Labelling Review Includes:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• Device name and manufacturer identity</li>
                <li>• Device identifier and catalogue/model information</li>
                <li>• Intended use and directions for use</li>
                <li>• Warnings, precautions, contraindications and limitations</li>
                <li>• Sterility, storage and expiry information</li>
                <li>• Primary and secondary packaging</li>
                <li>• IFU and package inserts</li>
                <li>• IVD performance specifications</li>
                <li>• Near-patient IVD labelling considerations</li>
                <li>• Electronic labelling strategy where eligible</li>
                <li>• Alignment of claims with licensed indications and evidence</li>
                <li>• English/French language requirements based on sales channel</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Language Requirement:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                For devices sold to the general public, specified label information and directions for use must be available in both English and French. For other devices, labelling may be in either official language, with the other official language made available on request. Near-patient IVD requirements should be assessed separately.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Review Your Canadian Labelling →
              </Link>
            </div>
          </div>

          {/* SECTION 8 */}
          <div id="sec-8" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 08
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              8. Health Canada IVD Registration &amp; Performance Evidence
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              IVDs are classified under a separate Canadian classification framework because risk is driven not only by the assay technology but by how the result will be used and the consequences of an incorrect result.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Our IVD Strategy Includes:</h4>
                <ul className="space-y-1 text-xs text-gray-700 font-medium">
                  <li>• IVD qualification and classification</li>
                  <li>• Intended-use and specimen-type review</li>
                  <li>• Analyte and clinical-use assessment</li>
                  <li>• Near-patient / point-of-care considerations</li>
                  <li>• MDL pathway for Class II, III or IV IVDs</li>
                  <li>• MDSAP and QMS alignment</li>
                  <li>• Analytical &amp; clinical performance evidence strategy</li>
                  <li>• Reference method/comparator strategy</li>
                  <li>• Labelling and performance-claim review</li>
                  <li>• Laboratory study coordination</li>
                  <li>• IMDRF ToC dossier development</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Analytical Performance Studies:</h4>
                <ul className="space-y-1 text-xs text-gray-700 font-medium">
                  <li>• Precision, repeatability and reproducibility</li>
                  <li>• Analytical sensitivity / limit of detection</li>
                  <li>• Analytical specificity</li>
                  <li>• Linearity and measuring range</li>
                  <li>• Interference and cross-reactivity</li>
                  <li>• Cut-off determination where relevant</li>
                  <li>• Specimen stability and handling</li>
                  <li>• Reagent and calibration considerations</li>
                  <li>• Clinical sensitivity and specificity</li>
                  <li>• Comparison with reference/comparator method</li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                A performance claim should never be stronger than the study design that supports it. We map intended use and performance claims to the analytical and clinical evidence before the dossier is finalized.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Build Your Health Canada IVD Strategy →
              </Link>
            </div>
          </div>

          {/* SECTION 9 */}
          <div id="sec-9" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 09
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              9. Medical Device Software, SaMD &amp; Cybersecurity
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              Software-enabled medical devices and standalone software require a regulatory strategy that connects intended use, classification, software functions, risk controls, verification and validation, cybersecurity and lifecycle change management.
            </p>
            <div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• Determine whether the software qualifies as a medical device</li>
                <li>• Assess classification under the Canadian framework</li>
                <li>• Define software architecture and system boundaries</li>
                <li>• Review software development lifecycle evidence (IEC 62304)</li>
                <li>• Review software verification and validation</li>
                <li>• Review SOUP / third-party software controls</li>
                <li>• Cybersecurity risk management and threat considerations</li>
                <li>• Interoperability and interface evidence</li>
                <li>• Usability and human factors where relevant</li>
                <li>• Clinical/performance evidence for software-driven claims</li>
                <li>• Predetermined change control strategy for AI/ML functions</li>
                <li>• Post-market monitoring and update controls</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                For software, the licensing question is not only whether the code works. Health Canada must be able to understand what the software does clinically, how failure could affect the user or patient, and how the manufacturer controls changes after licensing.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Review Your Canada Software Strategy →
              </Link>
            </div>
          </div>

          {/* SECTION 10 */}
          <div id="sec-10" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 10
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              10. Post-Market Surveillance, Complaints &amp; Mandatory Problem Reporting
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              Canadian market access continues after licensing. Manufacturers, importers and distributors must maintain complaint, reporting, recall and corrective-action systems capable of identifying and responding to device risks.
            </p>
            <div>
              <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Our Post-Market Support Includes:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• Complaint handling procedures and escalation logic</li>
                <li>• Reportability assessment under the Medical Devices Regulations</li>
                <li>• Preliminary and final incident reporting support</li>
                <li>• 10-day and 30-day mandatory reporting assessment</li>
                <li>• Foreign incident / corrective-action assessment where applicable</li>
                <li>• Trend review and signal assessment</li>
                <li>• Recall strategy and Health Canada communication support</li>
                <li>• Corrective and preventive action (CAPA)</li>
                <li>• Risk-management updates</li>
                <li>• Labelling and IFU updates</li>
                <li>• Licence-impact and change assessment</li>
                <li>• Post-market documentation and regulatory record maintenance</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
                <p className="text-xs font-bold text-navy">Reporting Logic:</p>
                <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                  For incidents occurring in Canada, a preliminary report is generally due within <strong>10 calendar days</strong> when death or serious deterioration in health has occurred, and within <strong>30 calendar days</strong> when such an outcome did not occur but could occur if the incident recurred.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
                <p className="text-xs font-bold text-navy">Expert Focus:</p>
                <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                  We do not treat complaints as isolated quality records. We connect complaint data to reportability, risk, CAPA, recall decisions, licence impact and the technical evidence supporting the device.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Strengthen Your Canada Post-Market System →
              </Link>
            </div>
          </div>

          {/* SECTION 11 */}
          <div id="sec-11" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 11
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              11. Licence Amendments, Significant Changes &amp; Lifecycle Maintenance
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              A Health Canada licence must remain aligned with the device that is actually manufactured and sold. Certain changes to Class II, III and IV devices require a new or amended MDL, while other changes may be documented internally or handled through a different regulatory mechanism.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Changes We Assess:</h4>
                <ul className="space-y-1 text-xs text-gray-700 font-medium">
                  <li>• Intended use or indications changes</li>
                  <li>• Design and performance changes</li>
                  <li>• Material changes</li>
                  <li>• Software and cybersecurity changes</li>
                  <li>• Manufacturing-site and process changes</li>
                  <li>• Supplier changes</li>
                  <li>• Sterilization changes</li>
                  <li>• Packaging and shelf-life changes</li>
                  <li>• Labelling changes</li>
                  <li>• Device family/grouping changes</li>
                  <li>• Changes to identifiers or model configurations</li>
                  <li>• Private label changes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Our Lifecycle Assessment:</h4>
                <ul className="space-y-1 text-xs text-gray-700 font-medium">
                  <li>• Determine whether the change affects safety or effectiveness</li>
                  <li>• Determine whether the change is significant for MDL purposes</li>
                  <li>• Identify required verification/validation</li>
                  <li>• Assess whether additional clinical/performance evidence is required</li>
                  <li>• Assess impact on risk management and labelling</li>
                  <li>• Assess MDSAP/QMS documentation impact</li>
                  <li>• Determine whether an amendment or minor-change route is appropriate</li>
                  <li>• Update technical dossier and regulatory records</li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                The question is not simply “Did the device change?” It is “Does the change alter the basis on which Health Canada accepted the device’s safety, effectiveness, quality or licensed indications?”
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Assess a Canadian Device Change →
              </Link>
            </div>
          </div>

          {/* SECTION 12 */}
          <div id="sec-12" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 12
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              12. Manufacturer, Importer &amp; Supply-Chain Compliance
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              Canadian market access depends on more than the manufacturer’s device licence. The roles of the importer and distributor, MDEL status, traceability, complaint routing and regulatory responsibilities must be clear across the supply chain.
            </p>
            <div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• Legal manufacturer and establishment-role assessment</li>
                <li>• Importer and distributor MDEL requirements</li>
                <li>• Verification of device licensing before import or sale</li>
                <li>• Distribution records and traceability</li>
                <li>• Complaint communication between Canadian partners and the manufacturer</li>
                <li>• Mandatory reporting responsibilities</li>
                <li>• Recall responsibilities and effectiveness checks</li>
                <li>• Storage, handling and transport controls</li>
                <li>• Regulatory agreements and responsibility mapping</li>
                <li>• Change notification and licence maintenance interfaces</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                A compliant supply chain requires clear ownership of the regulatory decisions: who verifies licence status, who receives complaints, who assesses reportability, who communicates recalls and who maintains the records Health Canada may request.
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Review Your Canadian Supply-Chain Compliance →
              </Link>
            </div>
          </div>

          {/* SECTION 13 */}
          <div id="sec-13" className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Module 13
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              13. Health Canada Inspection &amp; Compliance Readiness
            </h3>
            <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
              Health Canada inspections focus on the activities an establishment actually performs. A mature compliance system must demonstrate implementation through records, not only the existence of procedures.
            </p>
            <div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-700 font-medium">
                <li>• MDEL inspection readiness assessment</li>
                <li>• Complaint-file review</li>
                <li>• Distribution-record and traceability review</li>
                <li>• Recall procedure and mock-recall readiness</li>
                <li>• Mandatory problem-reporting controls</li>
                <li>• Labelling and licence verification controls</li>
                <li>• Importer/distributor controls</li>
                <li>• Corrective-action and CAPA evidence</li>
                <li>• Training and responsibility records</li>
                <li>• Response strategy for inspection observations and compliance gaps</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
              <p className="text-xs font-bold text-navy">Inspection Lens:</p>
              <p className="text-[11.5px] font-extrabold text-[#0b3a96] mt-0.5">
                Procedure → Record → Regulatory Decision → Evidence of Implementation → Effectiveness
              </p>
            </div>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-xs font-bold px-4 py-2 rounded-md shadow-xs">
                Prepare for Health Canada Inspection →
              </Link>
            </div>
          </div>

          {/* Section: Canadian Device Classes & Market-Access Pathways Table */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-5">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Pathways Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-3">
                Canadian Device Classes &amp; Market-Access Pathways
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-navy border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-slate-50">
                    <th className="py-3 px-4 font-extrabold text-navy">Class</th>
                    <th className="py-3 px-4 font-extrabold text-navy">Risk Level</th>
                    <th className="py-3 px-4 font-extrabold text-navy">Primary Device Licence Route</th>
                    <th className="py-3 px-4 font-extrabold text-navy">Typical Regulatory Depth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium">
                  <tr>
                    <td className="py-3 px-4 font-bold text-navy">Class I</td>
                    <td className="py-3 px-4 text-gray-600">Lowest</td>
                    <td className="py-3 px-4 text-gray-600">No device-specific MDL; MDEL pathway applies based on role</td>
                    <td className="py-3 px-4 text-gray-600">Classification, labelling, establishment controls, post-market obligations</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-navy">Class II</td>
                    <td className="py-3 px-4 text-gray-600">Moderate</td>
                    <td className="py-3 px-4 text-gray-600">MDL</td>
                    <td className="py-3 px-4 text-gray-600">Class II application, MDSAP certificate, labelling, device identifiers, attestation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-navy">Class III</td>
                    <td className="py-3 px-4 text-gray-600">Higher</td>
                    <td className="py-3 px-4 text-gray-600">MDL with substantive pre-market review</td>
                    <td className="py-3 px-4 text-gray-600">IMDRF ToC dossier, safety/effectiveness evidence, risk, V&amp;V, clinical data</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-navy">Class IV</td>
                    <td className="py-3 px-4 text-gray-600">Highest</td>
                    <td className="py-3 px-4 text-gray-600">MDL with comprehensive pre-market review</td>
                    <td className="py-3 px-4 text-gray-600">Most extensive technical, clinical &amp; risk evidence; high scrutiny of benefit-risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Why Manufacturers Choose NKB Regovanta for Canada */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e03131] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
              Why NKB Regovanta
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-2">
              Why Manufacturers Choose NKB Regovanta for Canada
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-700 font-medium">
              <li className="flex items-start gap-2">• Regulatory strategy before application preparation</li>
              <li className="flex items-start gap-2">• Deep understanding of the difference between MDL, MDEL and MDSAP obligations</li>
              <li className="flex items-start gap-2">• Class-specific evidence strategy rather than one template for every device</li>
              <li className="flex items-start gap-2">• Technical dossier review from a Health Canada reviewer perspective</li>
              <li className="flex items-start gap-2">• Testing strategy integrated with the final regulatory submission</li>
              <li className="flex items-start gap-2">• Coordination with established laboratories for required studies</li>
              <li className="flex items-start gap-2">• Medical Device and IVD regulatory capability across Classes I to IV</li>
              <li className="flex items-start gap-2">• Software, cybersecurity and higher-risk technology support</li>
              <li className="flex items-start gap-2">• Post-market, inspection and lifecycle compliance beyond initial licensing</li>
              <li className="flex items-start gap-2">• Multi-market perspective that aligns evidence across Canada, US, EU and global frameworks</li>
            </ul>
            <div className="p-4 rounded-xl bg-slate-50 border border-gray-200 mt-2">
              <p className="text-xs font-bold text-navy">Our Difference:</p>
              <p className="text-[11.5px] text-gray-600 font-medium mt-0.5">
                We connect Classification → Licence Route → MDSAP → Evidence → Testing → Submission → Health Canada Review → Post-Market Compliance. The objective is not simply to obtain a licence, but to build and maintain a defensible Canadian regulatory position.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. FREQUENTLY ASKED QUESTIONS (10 Complete Q&As)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Frequently Asked Questions - Health Canada Medical Devices
            </h2>
            <p className="text-sm text-navy/70 mt-2 font-medium">
              Key regulatory answers regarding MDL licences, MDEL establishment requirements, MDSAP certification, and bilingual labelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-gray-200/80 shadow-2xs"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-[11px] font-extrabold shrink-0 mt-0.5">
                    Q
                  </div>
                  <div>
                    <h3 className="text-[13.5px] font-extrabold text-navy leading-snug mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-xs text-navy/75 leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. BOTTOM PARTNER BANNER WITH MAPLE LEAF & 4 RED BADGES (Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#05152e] text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Left Maple Leaf + Text */}
            <div className="flex items-center gap-4 lg:gap-6 z-10">
              <img
                src={canadaMapleBottomImg}
                alt="Canada Maple Leaf"
                className="w-10 sm:w-12 h-auto object-contain shrink-0 drop-shadow-md hidden sm:block"
              />
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-white mb-1">
                  Your Trusted Partner for Health Canada Market Access
                </h3>
                <p className="text-[11.5px] sm:text-[12px] text-blue-100/80 max-w-xl leading-relaxed mb-3">
                  From regulatory strategy and licensing to post-market compliance, NKB Regovanta ensures your devices reach the Canadian market with confidence and compliance.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[12px] font-bold px-4 py-2 rounded-md transition-all shadow-md"
                >
                  Talk to Our Canada Experts <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 4 Circular Red Outline Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 z-10 border-t lg:border-t-0 lg:border-l border-white/15 pt-4 lg:pt-0 lg:pl-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#e03131] flex items-center justify-center shrink-0">
                  <Settings className="h-4 w-4 text-[#e03131]" />
                </div>
                <span className="text-[10px] font-bold text-white leading-tight">Strategic Regulatory Thinking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#e03131] flex items-center justify-center shrink-0">
                  <Handshake className="h-4 w-4 text-[#e03131]" />
                </div>
                <span className="text-[10px] font-bold text-white leading-tight">Reliable Expert Partnership</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#e03131] flex items-center justify-center shrink-0">
                  <Award className="h-4 w-4 text-[#e03131]" />
                </div>
                <span className="text-[10px] font-bold text-white leading-tight">Scientific &amp; Regulatory Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-[#e03131] flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-4 w-4 text-[#e03131]" />
                </div>
                <span className="text-[10px] font-bold text-white leading-tight">Committed to Your Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Accelerate Your Health Canada MDL &amp; MDEL Market Authorizations"
        description="Our Canadian regulatory strategists prepare audit-proof submissions, align MDSAP quality systems, and navigate pre-market reviews."
      />
    </div>
  );
}
