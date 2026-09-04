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
  Beaker,
  TestTubes,
  Dna,
  Pipette,
} from "lucide-react";
import euIvdrDeviceImg from "@/assets/eu-ivdr-device.png";

export const Route = createFileRoute("/services/eu/ivdr")({
  head: () => ({
    meta: [
      {
        title:
          "EU IVDR 2017/746 Regulatory Consulting for In Vitro Diagnostic Devices | PER & CE Marking | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Specialized EU IVDR 2017/746 regulatory consultants. Performance Evaluation Plan & Report (PEP / PER), Scientific Validity, Analytical & Clinical Performance studies, Class D EURL strategy, Notified Body review, and CE marking.",
      },
      {
        name: "keywords",
        content:
          "EU IVDR 2017/746 consultant, In Vitro Diagnostic Regulation Europe, IVDR Performance Evaluation Report PER, Scientific Validity, Analytical Performance IVD, Clinical Performance Studies, Class D EURL, IVDR Notified Body, NKB Regovanta",
      },
      {
        property: "og:title",
        content: "EU IVDR 2017/746 Regulatory Consulting for IVDs | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Senior IVDR regulatory consultants connecting scientific validity, analytical performance, clinical performance, and Notified Body defense for Class A, B, C, and D assays.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/ivdr" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU IVDR 2017/746 Regulatory Consulting for In Vitro Diagnostic Devices | PER & CE Marking | ..." },
      { name: "twitter:description", content: "Specialized EU IVDR 2017/746 regulatory consultants. Performance Evaluation Plan & Report (PEP / PER), Scientific Validity, Analytical & Clinical Performance studies, Class D EURL strategy, Notified Body review, and C..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ivdr" }],
  }),
  component: EUIVDRPage,
});

/* ── Static Data ── */

const ivdrQuickStats = [
  { icon: FlaskConical, title: "IVDR Specialists", desc: "Expertise across Class A to D under Rules 1–7" },
  { icon: Activity, title: "Performance Evaluation", desc: "Excellence in PEP, PER & PMPF evidence design" },
  { icon: Beaker, title: "Lab Coordination", desc: "Analytical protocol review & study strategy" },
  { icon: Building2, title: "Notified Body Readiness", desc: "Pre-assessment & deficiency resolution" },
  { icon: RefreshCw, title: "Lifecycle Compliance", desc: "PMS, PMPF, PSUR & EUDAMED maintenance" },
];

const ivdrCards = [
  {
    icon: Search,
    title: "IVDR Classification\n(Class A, B, C & D)",
    bullets: [
      "Classification under IVDR Rules 1–7",
      "Intended purpose assessment & analyte review",
      "Risk & public health impact evaluation",
      "Conformity assessment route planning",
    ],
    to: "/services/eu/ivdr-classification",
  },
  {
    icon: FileText,
    title: "Technical Documentation\n(Annex II & III)",
    bullets: [
      "Annex II Technical Documentation compilation",
      "Annex III PMS documentation",
      "GSPR mapping & evidence matrix",
      "Device description & design information",
    ],
    to: "/services/eu/technical-documentation",
  },
  {
    icon: Scale,
    title: "GSPR &\nRisk Management",
    bullets: [
      "GSPR applicability assessment",
      "Risk management aligned with ISO 14971",
      "Risk mitigation & verification records",
      "Benefit-risk evaluation & residual risk",
    ],
    to: "/services/eu/technical-documentation",
  },
  {
    icon: FileCheck2,
    title: "Performance Evaluation\nPlan (PEP)",
    bullets: [
      "PEP development per Annex XIII",
      "Performance claims mapping to state of the art",
      "Evidence requirements & study identification",
      "Study strategy & acceptance criteria",
    ],
    to: "/services/eu/ivdr-performance-evaluation",
  },
  {
    icon: Dna,
    title: "Scientific\nValidity",
    bullets: [
      "Association with clinical condition/marker",
      "State-of-the-art literature review",
      "Scientific validity report compilation",
      "Evidence adequacy & rationale",
    ],
    to: "/services/eu/ivdr-analytical-performance",
  },
  {
    icon: FlaskConical,
    title: "Analytical\nPerformance",
    bullets: [
      "Precision, repeatability, reproducibility",
      "Analytical sensitivity & analytical specificity",
      "Interference, cross-reactivity & carry-over",
      "Measuring range, cut-off, specimen stability",
    ],
    to: "/services/eu/ivdr-analytical-performance",
  },
  {
    icon: Activity,
    title: "Clinical\nPerformance",
    bullets: [
      "Clinical performance strategy & diagnostic endpoints",
      "Clinical performance studies & target population",
      "Study protocol support & comparator selection",
      "Clinical performance data evaluation & statistics",
    ],
    to: "/services/eu/ivdr-clinical-performance",
  },
  {
    icon: Award,
    title: "Performance Evaluation\nReport (PER)",
    bullets: [
      "PER development integrating 3 evidence pillars",
      "Integration of all scientific & clinical evidence",
      "Performance claims substantiation",
      "Lifecycle updates & PMPF triggers",
    ],
    to: "/services/eu/ivdr-performance-evaluation",
  },
  {
    icon: Beaker,
    title: "Performance Studies &\nLab Coordination",
    bullets: [
      "Analytical & clinical study design",
      "Lab selection & protocol review",
      "Data review & report alignment",
      "GLP / GCP & regulatory considerations",
    ],
    to: "/services/eu/ivdr-clinical-performance",
  },
  {
    icon: Shield,
    title: "PMPF (Post-Market\nPerformance Follow-up)",
    bullets: [
      "PMPF Plan linked to residual uncertainties",
      "PMPF Evaluation Report compilation",
      "Continuous performance monitoring",
      "Benefit-risk updates across lifecycle",
    ],
    to: "/services/eu/ivdr-pmpf",
  },
  {
    icon: RefreshCw,
    title: "PMS, PSUR &\nVigilance",
    bullets: [
      "PMS Plan & PMS Report for Class A/B",
      "PSUR compilation for Class C/D",
      "Vigilance & trend reporting systems",
      "Field Safety Corrective Actions (FSCA)",
    ],
    to: "/services/eu/ivdr-pmpf",
  },
  {
    icon: AlertTriangle,
    title: "Class D IVD Strategy\n& EURL Scrutiny",
    bullets: [
      "Class D regulatory pathway rationale",
      "Reference lab (EURL) & batch testing considerations",
      "Common Specifications (CS) compliance",
      "Notified Body strategy for Class D",
    ],
    to: "/services/eu/class-d-ivdr",
  },
  {
    icon: Building2,
    title: "Notified Body Strategy\n& Audit Readiness",
    bullets: [
      "NB selection & application scope",
      "Technical file pre-assessment",
      "Mock audits & interview preparation",
      "NB findings response & CAPA support",
    ],
    to: "/services/eu/notified-body",
  },
  {
    icon: Database,
    title: "EUDAMED &\nEconomic Operators",
    bullets: [
      "SRN & actor registration support",
      "Manufacturer & EC REP registration",
      "EC REP, Importer, Distributor mandates",
      "UDI-DI & Basic UDI-DI management",
    ],
    to: "/services/eu/eudamed",
  },
  {
    icon: RefreshCw,
    title: "IVDD to IVDR\nTransition",
    bullets: [
      "Gap assessment against IVDR requirements",
      "Classification changes (85%+ need NB review)",
      "Technical file remediation & PER build",
      "Transition roadmap & Article 110 compliance",
    ],
    to: "/services/eu/mdr-ivdr-transition",
  },
  {
    icon: Layers,
    title: "Change Assessment\n& Lifecycle Support",
    bullets: [
      "Change impact assessment for reagents & assays",
      "Performance claim impact evaluation",
      "NB notification assessment",
      "Technical file & PER updates",
    ],
    to: "/services/eu/change-assessment",
  },
];

const ivdrProcessSteps = [
  { num: "01", label: "Strategy & Intended Purpose" },
  { num: "02", label: "Classification (Rules 1–7)" },
  { num: "03", label: "Scientific Validity" },
  { num: "04", label: "Analytical Performance" },
  { num: "05", label: "Clinical Performance (PER)" },
  { num: "06", label: "Notified Body Review & CE" },
];

const whyChooseIvdr = [
  "Deep expertise across Class A to Class D IVDs under Regulation (EU) 2017/746",
  "Evidence matrix linking each performance claim directly to laboratory data",
  "Specialized understanding of Common Specifications (CS) and designated EURL scopes",
  "Seamless connection of Scientific Validity → Analytical → Clinical Performance",
  "Laboratory protocol review from the Notified Body technical review perspective",
  "Rigorous PMPF and post-market surveillance systems to safeguard CE certificates",
];

const ivdTechExpertise = [
  { icon: Pipette, label: "Immunoassays (ELISA / CLIA)" },
  { icon: Dna, label: "Molecular Diagnostics (PCR / NGS)" },
  { icon: Microscope, label: "Microbiology & Culture" },
  { icon: Beaker, label: "Clinical Chemistry" },
  { icon: TestTubes, label: "POCT Devices & Self-Tests" },
  { icon: Shield, label: "Companion Diagnostics (CDx)" },
];

function EUIVDRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is EU IVDR and who does it affect?","acceptedAnswer":{"@type":"Answer","text":"EU IVDR 2017/746 is the In Vitro Diagnostic Regulation that applies to all in vitro diagnostic medical devices sold in Europe, replacing EU IVDD 98/79/EC. It significantly expands the scope of devices requiring Notified Body review — from ~20% to ~80% of IVDs."}},{"@type":"Question","name":"What is a Performance Evaluation Report (PER) under EU IVDR?","acceptedAnswer":{"@type":"Answer","text":"A PER is the EU IVDR equivalent of the Clinical Evaluation Report for medical devices. It documents the analytical performance (accuracy, precision, sensitivity, specificity) and clinical performance (diagnostic sensitivity, specificity, predictive values) of an IVD."}},{"@type":"Question","name":"Are there IVDR transition deadlines for legacy IVDD devices?","acceptedAnswer":{"@type":"Answer","text":"Yes. Class D IVDR devices had a deadline of 26 May 2025. Class C devices: 26 May 2026. Class B and Class A sterile devices: 26 May 2027. Legacy IVDD certificates remain valid only if specific eligibility conditions (MDCG 2022-18) are met."}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "EU IVDR 2017/746 Regulatory Consulting for In Vitro Diagnostic Devices",
              url: "https://www.nkbregovanta.com/services/eu/ivdr",
              description:
                "Specialized EU IVDR 2017/746 regulatory consulting for IVD manufacturers, performance evaluation, PER compilation, and CE marking.",
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
                { "@type": "ListItem", position: 4, name: "EU IVDR 2017/746", item: "https://www.nkbregovanta.com/services/eu/ivdr" },
              ],
            },
          ]),
        }}
      />

      {/* ── 1. HERO SECTION (Matching Pic 2 Right) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b2416] via-[#123820] to-[#17482a] text-white pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(16,185,129,0.2),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-200/60 font-semibold mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu" className="hover:text-white transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#f5c754] font-bold text-[10px] uppercase tracking-wider">EU IVDR 2017/746</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-emerald-200/70 hover:text-white transition-colors mb-5 text-xs font-semibold"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to EU Services Hub
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f5c754] block mb-2">
                Regulation (EU) 2017/746
              </span>
              <h1
                className="font-display font-extrabold text-white leading-[1.08] tracking-tight mb-4"
                style={{ fontSize: "clamp(26px, 3.5vw, 44px)" }}
              >
                EU IVDR 2017/746<br />Regulatory Consulting<br />for In Vitro Diagnostics
              </h1>
              <p className="text-[13.5px] sm:text-[14.5px] text-emerald-100/90 leading-relaxed font-normal mb-7 max-w-2xl">
                Specialized regulatory support for IVD manufacturers across Class A, B, C and D under Regulation (EU) 2017/746. NKB Regovanta connects scientific validity, analytical performance, clinical performance and performance evaluation into a robust compliance pathway.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f5c754] hover:bg-[#ebd255] text-navy text-[13px] font-bold px-6 py-3.5 rounded-md transition-all shadow-lg shadow-amber-900/20"
                >
                  Discuss Your IVDR Strategy <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-[#133d23] to-[#0a2012] p-4 text-center">
                <img
                  src={euIvdrDeviceImg}
                  alt="EU IVDR Laboratory Technology"
                  className="w-48 h-48 mx-auto object-contain mb-3 drop-shadow-xl"
                />
                <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-left">
                  <p className="text-[11px] font-bold text-[#f5c754] uppercase tracking-wider">IVDR 2017/746 Evidence Sequence</p>
                  <p className="text-[11.5px] text-emerald-100/90 font-medium mt-1">
                    Intended Purpose → Rule 1–7 → Scientific Validity → Analytical → Clinical → PER → PMPF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STATS BAR ── */}
      <section className="bg-[#0b2416] border-t border-white/10 text-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ivdrQuickStats.map((stat) => (
              <div key={stat.title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <stat.icon className="h-4 w-4 text-[#f5c754]" />
                </div>
                <div>
                  <p className="text-[12px] font-extrabold text-white leading-tight">{stat.title}</p>
                  <p className="text-[10.5px] text-emerald-200/70 leading-tight mt-0.5">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR IVDR REGULATORY SUPPORT (16 Cards Grid) ── */}
      <section className="py-16 bg-slate-50 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Our IVDR Regulatory Support
            </h2>
            <p className="text-sm text-navy/70 mt-2 font-medium">
              Comprehensive performance evaluation, analytical testing strategy and technical documentation under IVDR 2017/746.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ivdrCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col p-5 rounded-2xl border border-gray-200/80 bg-white hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mb-3.5 group-hover:bg-[#123820] group-hover:border-[#123820] transition-all">
                  <card.icon className="h-5 w-5 text-[#059669] group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="text-[13px] font-extrabold text-navy leading-snug whitespace-pre-line mb-3 group-hover:text-[#059669] transition-colors">
                  {card.title}
                </h3>
                <ul className="space-y-1.5 text-[11.5px] text-navy/75 font-medium flex-1 mb-4">
                  {card.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#059669] font-bold">•</span>
                      <span className="leading-tight">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={card.to}
                  className="inline-flex items-center gap-1 text-[11.5px] font-extrabold text-[#059669] hover:text-[#047857] pt-2 border-t border-gray-100 group/link"
                >
                  Learn more <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR IVDR REGULATORY PROCESS ── */}
      <section className="py-14 bg-white border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
              Our IVDR Regulatory Process
            </h3>
            <p className="text-xs sm:text-sm text-navy/65 mt-1 font-medium">
              The 3-pillar evidence model: Scientific Validity → Analytical Performance → Clinical Performance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {ivdrProcessSteps.map((step, idx) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-gray-200/70 shadow-2xs relative"
              >
                {idx < ivdrProcessSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-2 z-10">
                    <ArrowRight className="h-3.5 w-3.5 text-navy/30" />
                  </div>
                )}
                <div className="w-7 h-7 rounded-full bg-[#123820] text-[#f5c754] flex items-center justify-center text-[10px] font-extrabold mb-2">
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

      {/* ── 5. WHY CHOOSE NKB REGOVANTA FOR IVDR? ── */}
      <section className="py-14 bg-slate-50 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-extrabold text-navy mb-6">
                Why Choose NKB Regovanta for IVDR?
              </h3>
              <ul className="space-y-3.5 text-[13px] font-medium text-navy/85">
                {whyChooseIvdr.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#059669] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 rounded-3xl bg-[#123820] text-white shadow-xl">
                <span className="text-[10px] uppercase font-bold text-[#f5c754] tracking-widest block mb-2">
                  Annex XIII Performance Evidence
                </span>
                <h4 className="text-xl font-extrabold mb-3">
                  Evidence-Driven PER &amp; Study Protocols
                </h4>
                <p className="text-xs sm:text-[13px] text-emerald-100/90 leading-relaxed font-normal mb-6">
                  Under IVDR, over 85% of IVDs require Notified Body certification. We build the evidence matrix linking each performance claim directly to laboratory data, ensuring effortless Notified Body approval.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f5c754] text-navy text-xs font-bold px-5 py-3 rounded-md hover:bg-[#ebd255] transition-all"
                >
                  Schedule an IVDR Review <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. IVD TECHNOLOGY EXPERTISE ── */}
      <section className="py-14 bg-white border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
              IVD Technology Expertise
            </h3>
            <p className="text-xs sm:text-sm text-navy/65 mt-1 font-medium">
              Proven analytical and clinical track record across advanced assay formats.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {ivdTechExpertise.map((tech) => (
              <div
                key={tech.label}
                className="p-4 rounded-xl bg-slate-50 border border-gray-200/70 text-center flex flex-col items-center justify-center hover:bg-emerald-50/50 transition-colors"
              >
                <tech.icon className="h-6 w-6 text-[#059669] mb-2" />
                <span className="text-xs font-bold text-navy leading-tight">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM BANNER ── */}
      <section className="py-14 bg-gradient-to-r from-[#0b2416] via-[#123820] to-[#17482a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold text-[#f5c754] tracking-widest block mb-1">
              Your Partner for EU IVD Market Access
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Master EU IVDR 2017/746 Compliance?
            </h3>
            <p className="text-xs text-emerald-100/80 mt-1">
              We guide IVD manufacturers from early classification to Notified Body defense and CE mark issuance.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#f5c754] hover:bg-[#ebd255] text-navy text-[13px] font-bold px-6 py-3.5 rounded-md transition-all shrink-0"
          >
            Talk to Our IVDR Experts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
