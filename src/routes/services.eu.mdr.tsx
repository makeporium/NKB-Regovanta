import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Shield,
  FileText,
  Building2,
  Activity,
  Database,
  Search,
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
  Heart,
  Eye,
  Smile,
  Zap,
  Clock,
  Send,
  HelpCircle,
  FileCheck2,
  AlertTriangle,
  Scale,
  ArrowLeft,
} from "lucide-react";
import euMdrDeviceImg from "@/assets/eu-mdr-device.png";

export const Route = createFileRoute("/services/eu/mdr")({
  head: () => ({
    meta: [
      {
        title:
          "EU MDR 2017/745 Regulatory Consulting for Medical Devices | CE Marking & CER | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Specialized EU MDR 2017/745 regulatory consulting for Medical Devices across Class I, IIa, IIb, and III. Technical Documentation (Annex II/III), GSPR, Clinical Evaluation (CER), PMCF, Notified Body review defense, and CE marking.",
      },
      {
        name: "keywords",
        content:
          "EU MDR 2017/745 consultant, Medical Device Regulation Europe, MDR Technical Documentation, GSPR checklist, Clinical Evaluation Report CER, PMCF plan, Notified Body review, CE marking medical devices, NKB Regovanta",
      },
      {
        property: "og:title",
        content: "EU MDR 2017/745 Regulatory Consulting for Medical Devices | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "End-to-end EU MDR 2017/745 compliance support from classification and testing to Notified Body defense and CE certification.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/mdr" },
      { name: "keywords", content: "EU MDR consultant, CE marking medical devices, EU MDR 2017/745, clinical evaluation EU, Notified Body EU, technical documentation MDR" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR 2017/745 Regulatory Consulting for Medical Devices | CE Marking & CER | NKB Regovanta" },
      { name: "twitter:description", content: "Specialized EU MDR 2017/745 regulatory consulting for Medical Devices across Class I, IIa, IIb, and III. Technical Documentation (Annex II/III), GSPR, Clinical Evaluation (CER), PMCF, Notified Body review defense, and..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/mdr" }],
  }),
  component: EUMDRPage,
});

/* ── Static Data ── */

const mdrQuickStats = [
  { icon: Shield, title: "MDR Specialists", desc: "Deep regulatory expertise across all device classes" },
  { icon: RefreshCw, title: "End-to-End Support", desc: "From classification to post-market lifecycle" },
  { icon: Building2, title: "Notified Body Readiness", desc: "Pre-assessment, mock audit & deficiency defense" },
  { icon: FlaskConical, title: "Testing Strategy", desc: "V&V and laboratory coordination" },
  { icon: Activity, title: "Global Clients", desc: "Proven track record across medical technologies" },
];

const mdrCards = [
  {
    icon: Search,
    title: "MDR Classification &\nConformity Assessment",
    bullets: [
      "Classification (I, Is, Im, Ir, IIa, IIb, III)",
      "Conformity assessment route determination",
      "Notified Body involvement planning",
      "Borderline & combination product considerations",
    ],
    to: "/services/eu/classification",
  },
  {
    icon: FileText,
    title: "Technical Documentation\n(Annex II & III)",
    bullets: [
      "Annex II Technical Documentation compilation",
      "Annex III PMS documentation",
      "Device description, variants & design history",
      "GSPR mapping & evidence matrix",
      "Verification & validation summary",
    ],
    to: "/services/eu/technical-documentation",
  },
  {
    icon: Scale,
    title: "GSPR &\nRisk Management",
    bullets: [
      "GSPR applicability assessment",
      "Risk management aligned with ISO 14971",
      "Hazard analysis & risk control measures",
      "Benefit-risk determination & residual risk",
    ],
    to: "/services/eu/technical-documentation",
  },
  {
    icon: FlaskConical,
    title: "Testing Strategy &\nLab Coordination",
    bullets: [
      "Biocompatibility (ISO 10993) & Sterilization",
      "Electrical safety & EMC (IEC 60601)",
      "Software (IEC 62304) & Cybersecurity",
      "Usability (IEC 62366), Packaging & Shelf life",
      "Bench & mechanical performance testing",
    ],
    to: "/services/eu/testing-strategy",
  },
  {
    icon: Activity,
    title: "Clinical Evaluation\n& CER",
    bullets: [
      "Clinical Evaluation Plan (CEP)",
      "Clinical Evaluation Report (CER)",
      "Literature search protocol & documented appraisal",
      "Equivalence assessment across tech/bio/clinical",
      "Clinical evidence gap analysis & sufficiency",
    ],
    to: "/services/eu/clinical-evaluation",
  },
  {
    icon: Shield,
    title: "PMCF (Post-Market\nClinical Follow-up)",
    bullets: [
      "PMCF Plan targeted to residual uncertainties",
      "PMCF Evaluation Report compilation",
      "PMCF user survey & registry strategy",
      "Post-market clinical data collection governance",
    ],
    to: "/services/eu/pms-pmcf",
  },
  {
    icon: Building2,
    title: "Notified Body Strategy\n& Audit Readiness",
    bullets: [
      "NB selection, scope & application readiness",
      "QMS & technical file pre-assessment",
      "Mock audits & reviewer interview prep",
      "Deficiency response & root-cause analysis",
      "CAPA support & certificate maintenance",
    ],
    to: "/services/eu/notified-body",
  },
  {
    icon: Award,
    title: "CE Marking &\nDeclaration of Conformity",
    bullets: [
      "EU Declaration of Conformity preparation",
      "CE marking strategy & execution",
      "UDI assignment & labeling verification",
      "Economic operator obligations (EC REP, Importer)",
      "Registration & EUDAMED alignment",
    ],
    to: "/services/eu/ce-marking",
  },
  {
    icon: Activity,
    title: "PMS, PSUR &\nVigilance",
    bullets: [
      "PMS Plan & PMS Report compilation",
      "PSUR (Periodic Safety Update Report) for IIa/IIb/III",
      "Vigilance & serious incident trend reporting",
      "Field Safety Corrective Action (FSCA) support",
    ],
    to: "/services/eu/pms-pmcf",
  },
  {
    icon: Database,
    title: "EUDAMED &\nEconomic Operators",
    bullets: [
      "SRN & actor registration support",
      "Manufacturer & Authorized Representative data",
      "EC REP, Importer, Distributor mandates",
      "UDI-DI & Basic UDI-DI management",
    ],
    to: "/services/eu/eudamed",
  },
  {
    icon: RefreshCw,
    title: "MDD/AIMDD to\nMDR Transition",
    bullets: [
      "Legacy device gap assessment",
      "Technical file remediation to MDR standards",
      "Clinical evidence & CER upgrade",
      "QMS updates & Article 120 transition roadmap",
    ],
    to: "/services/eu/mdr-ivdr-transition",
  },
  {
    icon: Layers,
    title: "Change Assessment\n& Lifecycle Support",
    bullets: [
      "Design & manufacturing change impact assessment",
      "Notified Body notification trigger review",
      "Technical file & CER updates",
      "Annual renewal & ongoing compliance maintenance",
    ],
    to: "/services/eu/change-assessment",
  },
];

const mdrProcessSteps = [
  { num: "01", label: "Strategy & Intended Purpose" },
  { num: "02", label: "Classification & Conformity" },
  { num: "03", label: "Testing & Clinical Evidence" },
  { num: "04", label: "Technical Documentation" },
  { num: "05", label: "Notified Body Review & CE" },
  { num: "06", label: "Post-Market Surveillance" },
];

const whyChooseMdr = [
  "Regulatory strategy drives everything we do — no template filling",
  "Deep expertise across all MDR device risk classes (I, IIa, IIb, III)",
  "Testing strategy aligned directly with GSPR and clinical claims",
  "Clinical evidence that stands up to aggressive Notified Body scrutiny",
  "Strong working relationships with leading European Notified Bodies",
  "End-to-end lifecycle support beyond initial CE marking",
  "Global experience across diverse medical technologies",
];

const techExpertise = [
  { icon: Zap, label: "Active Implantable Devices" },
  { icon: Cpu, label: "Software as a Medical Device (SaMD)" },
  { icon: Shield, label: "Sterile & Reusable Devices" },
  { icon: Smile, label: "Orthopedic Devices" },
  { icon: Heart, label: "Cardiovascular Devices" },
  { icon: Stethoscope, label: "Medical Imaging Devices" },
];

function EUMDRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between EU MDR and the old EU MDD?","acceptedAnswer":{"@type":"Answer","text":"EU MDR 2017/745 replaced EU MDD 93/42/EEC with significantly more stringent requirements including mandatory clinical evidence, PMCF studies, EUDAMED registration, UDI labelling, QMS certification, and enhanced Notified Body scrutiny for high-risk devices."}},{"@type":"Question","name":"What clinical evidence is required for EU MDR CE marking?","acceptedAnswer":{"@type":"Answer","text":"EU MDR requires a Clinical Evaluation Report (CER) following MEDDEV 2.7/1 Rev 4 or MDCG guidance demonstrating clinical safety and performance. Class IIb and III devices often require direct clinical investigation data rather than literature equivalence alone."}},{"@type":"Question","name":"When must all legacy MDD-marked devices comply with EU MDR?","acceptedAnswer":{"@type":"Answer","text":"Under EU Regulation 2023/607, Class III and implantable Class IIb devices must comply by 31 December 2027. Other Class IIb, IIa, and Is/Im/Ir devices have a deadline of 31 December 2028, subject to meeting specific eligibility conditions."}},{"@type":"Question","name":"Do I need EUDAMED registration for CE marking?","acceptedAnswer":{"@type":"Answer","text":"Yes. EU MDR requires manufacturers to register in EUDAMED and obtain a Single Registration Number (SRN) before applying for CE certification. EUDAMED registration is mandatory for Notified Body submission and ongoing market surveillance reporting."}},{"@type":"Question","name":"What is the General Safety and Performance Requirements (GSPR) in EU MDR?","acceptedAnswer":{"@type":"Answer","text":"GSPR (Annex I of EU MDR) lists all safety and performance requirements a device must meet to obtain CE marking. Manufacturers must create a GSPR checklist demonstrating compliance with each applicable requirement, with supporting evidence."}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "EU MDR 2017/745 Regulatory Consulting for Medical Devices",
              url: "https://www.nkbregovanta.com/services/eu/mdr",
              description:
                "Specialized EU MDR 2017/745 regulatory consulting for medical device manufacturers seeking CE marking in the European Union.",
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
                { "@type": "ListItem", position: 4, name: "EU MDR 2017/745", item: "https://www.nkbregovanta.com/services/eu/mdr" },
              ],
            },
          ]),
        }}
      />

      {/* ── 1. HERO SECTION (Matching Pic 2 Left) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#05152e] via-[#092248] to-[#0d2e5e] text-white pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(37,99,235,0.25),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-blue-200/60 font-semibold mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu" className="hover:text-white transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#f5c754] font-bold text-[10px] uppercase tracking-wider">EU MDR 2017/745</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-blue-200/70 hover:text-white transition-colors mb-5 text-xs font-semibold"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to EU Services Hub
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f5c754] block mb-2">
                Regulation (EU) 2017/745
              </span>
              <h1
                className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-4"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
              >
                EU MDR 2017/745<br />Regulatory Consulting<br />for Medical Devices
              </h1>
              <p className="text-[13.5px] sm:text-[14.5px] text-blue-100/90 leading-relaxed font-normal mb-7 max-w-2xl">
                End-to-end regulatory support for Medical Devices across Class I, Is, Im, Ir, IIa, IIb and III under Regulation (EU) 2017/745. NKB Regovanta connects regulatory strategy, testing, clinical evidence, technical documentation and Notified Body readiness to help you achieve and maintain CE marking with confidence.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f5c754] hover:bg-[#ebd255] text-navy text-[13px] font-bold px-6 py-3.5 rounded-md transition-all shadow-lg shadow-amber-900/20"
                >
                  Discuss Your MDR Strategy <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-[#0e2a54] to-[#081832] p-4 text-center">
                <img
                  src={euMdrDeviceImg}
                  alt="EU MDR Medical Device Technology"
                  className="w-48 h-48 mx-auto object-contain mb-3 drop-shadow-xl"
                />
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-left">
                  <p className="text-[11px] font-bold text-[#f5c754] uppercase tracking-wider">MDR 2017/745 Evidence Sequence</p>
                  <p className="text-[11.5px] text-blue-100/90 font-medium mt-1">
                    Intended Purpose → GSPR → Risk → Clinical Evaluation → CER → Notified Body Review → CE Marking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STATS BAR ── */}
      <section className="bg-[#05152e] border-t border-white/10 text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mdrQuickStats.map((stat) => (
              <div key={stat.title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <stat.icon className="h-4 w-4 text-[#f5c754]" />
                </div>
                <div>
                  <p className="text-[12px] font-extrabold text-white leading-tight">{stat.title}</p>
                  <p className="text-[10.5px] text-blue-200/70 leading-tight mt-0.5">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR MDR REGULATORY SUPPORT (12 Cards Grid) ── */}
      <section className="py-16 bg-slate-50 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Our MDR Regulatory Support
            </h2>
            <p className="text-sm text-navy/70 mt-2 font-medium">
              Comprehensive technical and clinical consulting across all 12 areas of European medical device compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {mdrCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col p-5 rounded-2xl border border-gray-200/80 bg-white hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mb-3.5 group-hover:bg-navy group-hover:border-navy transition-all">
                  <card.icon className="h-5 w-5 text-[#0b3a96] group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="text-[13px] font-extrabold text-navy leading-snug whitespace-pre-line mb-3 group-hover:text-[#0b3a96] transition-colors">
                  {card.title}
                </h3>
                <ul className="space-y-1.5 text-[11.5px] text-navy/75 font-medium flex-1 mb-4">
                  {card.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#0b3a96] font-bold">•</span>
                      <span className="leading-tight">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={card.to}
                  className="inline-flex items-center gap-1 text-[11.5px] font-extrabold text-[#0b3a96] hover:text-[#082b70] pt-2 border-t border-gray-100 group/link"
                >
                  Learn more <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR MDR REGULATORY PROCESS ── */}
      <section className="py-14 bg-white border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
              Our MDR Regulatory Process
            </h3>
            <p className="text-xs sm:text-sm text-navy/65 mt-1 font-medium">
              A disciplined sequence connecting strategy, evidence, files, audits and lifecycle maintenance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {mdrProcessSteps.map((step, idx) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-gray-200/70 shadow-2xs relative"
              >
                {idx < mdrProcessSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-2 z-10">
                    <ArrowRight className="h-3 w-3 text-navy/30" />
                  </div>
                )}
                <div className="w-7 h-7 rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-[10px] font-extrabold mb-2">
                  {step.num}
                </div>
                <p className="text-[11.5px] font-extrabold text-navy leading-snug">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE NKB REGOVANTA FOR MDR? ── */}
      <section className="py-14 bg-slate-50 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-extrabold text-navy mb-6">
                Why Choose NKB Regovanta for MDR?
              </h3>
              <ul className="space-y-3.5 text-[13px] font-medium text-navy/85">
                {whyChooseMdr.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 rounded-3xl bg-[#0b274e] text-white shadow-xl">
                <span className="text-[10px] uppercase font-bold text-[#f5c754] tracking-widest block mb-2">
                  Notified Body Scrutiny Readiness
                </span>
                <h4 className="text-xl font-extrabold mb-3">
                  Defensible Evidence, Not Just Documentation
                </h4>
                <p className="text-xs sm:text-[13px] text-blue-100/90 leading-relaxed font-normal mb-6">
                  A technically complete report can still create major nonconformities if clinical claims, risk management and GSPR are not tightly harmonized. We ensure your submission file withstands the most rigorous Notified Body audit.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f5c754] text-navy text-xs font-bold px-5 py-3 rounded-md hover:bg-[#ebd255] transition-all"
                >
                  Schedule an MDR Review <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TECHNOLOGY EXPERTISE ── */}
      <section className="py-14 bg-white border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
              Technology Expertise
            </h3>
            <p className="text-xs sm:text-sm text-navy/65 mt-1 font-medium">
              Deep clinical and engineering understanding across complex medical device domains.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techExpertise.map((tech) => (
              <div
                key={tech.label}
                className="p-4 rounded-xl bg-slate-50 border border-gray-200/70 text-center flex flex-col items-center justify-center hover:bg-blue-50/50 transition-colors"
              >
                <tech.icon className="h-6 w-6 text-[#0b3a96] mb-2" />
                <span className="text-xs font-bold text-navy leading-tight">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM BANNER ── */}
      <section className="py-14 bg-gradient-to-r from-[#071b36] via-[#0b274e] to-[#0f3468] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold text-[#f5c754] tracking-widest block mb-1">
              Your Partner for EU Market Access
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Accelerate Your EU MDR 2017/745 Clearance?
            </h3>
            <p className="text-xs text-blue-100/80 mt-1">
              From early GSPR mapping to final CE certificate issuance, our consultants lead the way.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#f5c754] hover:bg-[#ebd255] text-navy text-[13px] font-bold px-6 py-3.5 rounded-md transition-all shrink-0"
          >
            Talk to Our EU MDR Experts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
