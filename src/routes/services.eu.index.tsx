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
} from "lucide-react";
import euHeroMapImg from "@/assets/eu-hero-map.png";
import euMdrDeviceImg from "@/assets/eu-mdr-device.png";
import euIvdrDeviceImg from "@/assets/eu-ivdr-device.png";

export const Route = createFileRoute("/services/eu/")({
  head: () => ({
    meta: [
      {
        title:
          "EU MDR 2017/745 & EU IVDR 2017/746 Regulatory Consulting | CE Marking & Technical Documentation | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Senior EU MDR 2017/745 & EU IVDR 2017/746 regulatory consultants. CE marking, Annex II & III technical documentation, GSPR compliance, Clinical Evaluation (CER), Performance Evaluation (PER), Notified Body strategy, EUDAMED, and PMS compliance.",
      },
      {
        name: "keywords",
        content:
          "EU MDR 2017/745 regulatory consultant, EU IVDR 2017/746 consulting, CE Marking medical devices, MDR technical documentation, GSPR compliance, CER clinical evaluation, IVDR PER performance evaluation, Notified Body strategy, EUDAMED UDI, NKB Regovanta",
      },
      {
        property: "og:title",
        content: "EU MDR & IVDR Regulatory Consulting | CE Marking & Technical Documentation | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Comprehensive European regulatory consulting across Medical Devices (MDR) and In Vitro Diagnostics (IVDR). One unified, defensible conformity package.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR 2017/745 & EU IVDR 2017/746 Regulatory Consulting | CE Marking & Technical Documentat..." },
      { name: "twitter:description", content: "Senior EU MDR 2017/745 & EU IVDR 2017/746 regulatory consultants. CE marking, Annex II & III technical documentation, GSPR compliance, Clinical Evaluation (CER), Performance Evaluation (PER), Notified Body strategy, E..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu" }],
  }),
  component: EUMarketHubPage,
});

/* ── Static Data ── */

const trustBadges = [
  { icon: Award, label: "CE Marking" },
  { icon: FileText, label: "Technical Documentation" },
  { icon: Building2, label: "Notified Body Strategy" },
  { icon: Activity, label: "Clinical & Performance Evidence" },
  { icon: Database, label: "EUDAMED Support" },
];

const mdrHighlights = [
  "Product Classification & Conformity Assessment",
  "GSPR Compliance & Risk Management",
  "Clinical Evaluation (CEP & CER) & PMCF",
  "Technical Documentation (Annex II & III)",
  "Notified Body Strategy & Audit Readiness",
  "PMS, Vigilance, PSUR & FSCA",
  "MDD/AIMDD to MDR Transition",
  "EUDAMED & Economic Operator Support",
];

const ivdrHighlights = [
  "IVDR Classification & Conformity Assessment",
  "Performance Evaluation Plan & Report (PER)",
  "Scientific Validity",
  "Analytical Performance",
  "Clinical Performance",
  "Performance Studies & Lab Strategy",
  "PMS, PMPF, PSUR & Vigilance",
  "IVDD to IVDR Transition & EUDAMED Support",
];

const coreServices = [
  {
    icon: Search,
    title: "Regulatory Strategy\n& Classification",
    desc: "Define regulatory pathway, classification, applicable rules and conformity assessment route under MDR or IVDR.",
    to: "/services/eu/classification",
    cta: "Define Your EU Regulatory Pathway",
  },
  {
    icon: FileText,
    title: "Technical Documentation\n& GSPR Compliance",
    desc: "Prepare and review technical documentation aligned with Annex II & III and applicable harmonised standards.",
    to: "/services/eu/technical-documentation",
    cta: "Strengthen Your Technical Documentation",
  },
  {
    icon: Activity,
    title: "Clinical Evaluation\n& MDR Evidence Strategy",
    desc: "CEP, CER, literature strategy, clinical evidence gap analysis and PMCF planning tailored to device risk and claims.",
    to: "/services/eu/clinical-evaluation",
    cta: "Review Your MDR Clinical Evidence",
  },
  {
    icon: FlaskConical,
    title: "IVDR Performance\nEvaluation",
    desc: "Scientific validity, analytical performance and clinical performance integrated into a robust PER and PMPF.",
    to: "/services/eu/ivdr-performance-evaluation",
    cta: "Build Your IVDR Evidence Strategy",
  },
  {
    icon: Building2,
    title: "Notified Body Strategy\n& Audit Readiness",
    desc: "NB selection, application readiness, QMS readiness, audit preparation and response to NB findings.",
    to: "/services/eu/notified-body",
    cta: "Prepare for Notified Body Review",
  },
  {
    icon: Award,
    title: "CE Marking &\nEU Registration",
    desc: "Conformity assessment support, EU Declaration of Conformity, CE marking and registration requirements.",
    to: "/services/eu/ce-marking",
    cta: "Plan Your CE Marking Strategy",
  },
  {
    icon: Shield,
    title: "PMS, PMCF/PMPF\n& Vigilance",
    desc: "PMS planning, PMCF/PMPF execution, PSUR, trend reporting, vigilance and FSCA support.",
    to: "/services/eu/pms-pmcf",
    cta: "Strengthen Your Post-Market System",
  },
  {
    icon: Database,
    title: "EUDAMED & Economic\nOperator Support",
    desc: "SRN, actor registration, EUDAMED modules, data submission and UDI support for devices & IVDs.",
    to: "/services/eu/eudamed",
    cta: "Prepare Your EU Registration Strategy",
  },
  {
    icon: RefreshCw,
    title: "Legacy Device /\nTransition Support",
    desc: "MDD to MDR and IVDD to IVDR transition, gap analysis, technical file update and NB re-certification.",
    to: "/services/eu/mdr-ivdr-transition",
    cta: "Assess a Regulatory Change",
  },
  {
    icon: Layers,
    title: "Change Assessment\n& Lifecycle Support",
    desc: "Impact assessment for changes, supplements, renewals and ongoing compliance strategy.",
    to: "/services/eu/change-assessment",
    cta: "Assess a Device Change",
  },
];

const lifecycleSteps = [
  { num: "01", label: "Strategy & Intended Purpose", desc: "Define intended purpose, device qualification & regulatory roadmap" },
  { num: "02", label: "Classification & Conformity", desc: "MDR rules / IVDR Rules 1–7 & conformity assessment route" },
  { num: "03", label: "Evidence & Testing Strategy", desc: "V&V, GSPR mapping, clinical evaluation (CER) & performance studies" },
  { num: "04", label: "Technical Documentation", desc: "Annex II & III dossier compilation, risk management & labeling" },
  { num: "05", label: "Notified Body Review & CE", desc: "Audit defense, deficiency resolution, DoC & CE marking" },
  { num: "06", label: "Post-Market Compliance", desc: "PMS, PMCF / PMPF, PSUR, vigilance & EUDAMED maintenance" },
];

const whyChoose = [
  "Regulatory strategy before dossier preparation",
  "Technical documentation built for regulatory scrutiny",
  "Deep MDR & IVDR expertise across all risk classes",
  "Evidence-driven approach for MDR & IVDR success",
  "Strong relationships with leading Notified Bodies",
  "Lifecycle support beyond initial CE marking",
];

const industriesSupported = [
  { icon: Stethoscope, label: "Medical Devices" },
  { icon: Microscope, label: "In Vitro Diagnostics" },
  { icon: Zap, label: "Active Implantable Devices" },
  { icon: Cpu, label: "Software as a Medical Device" },
  { icon: Shield, label: "Combination Products" },
  { icon: Smile, label: "Dental & Orthodontics" },
  { icon: Heart, label: "Cardiovascular & Implants" },
  { icon: Eye, label: "Ophthalmic & Optics" },
];

function EUMarketHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "EU MDR 2017/745 & EU IVDR 2017/746 Regulatory Consulting",
              url: "https://www.nkbregovanta.com/services/eu",
              description:
                "Comprehensive European medical device and in vitro diagnostic regulatory consulting, CE marking, technical documentation, CER, PER, and Notified Body support.",
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
              ],
            },
          ]),
        }}
      />

      {/* ── 1. HERO SECTION (Dark Navy / Gradient Theme matching Pic 1) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#05152e] via-[#092248] to-[#0d2e5e] text-white pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(37,99,235,0.25),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-blue-200/60 font-semibold mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#f5c754] font-bold uppercase tracking-widest text-[10px]">European Union</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#f5c754] block mb-2">
                European Union
              </span>
              <h1
                className="font-display font-extrabold text-white leading-[1.05] tracking-tight mb-3"
                style={{ fontSize: "clamp(28px, 3.8vw, 48px)" }}
              >
                EU MDR 2017/745 &amp;<br />EU IVDR 2017/746
              </h1>
              <p className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-blue-200 mb-5">
                Regulatory Consulting
              </p>

              {/* Trust Badges Bar */}
              <div className="flex flex-wrap gap-2.5 mb-6 text-[11px] font-semibold text-blue-100/80">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 border border-white/15 backdrop-blur-xs"
                  >
                    <badge.icon className="h-3.5 w-3.5 text-[#f5c754]" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-[13.5px] sm:text-[14.5px] text-blue-100/90 leading-relaxed font-normal mb-8 max-w-2xl">
                NKB Regovanta supports Medical Device and IVD manufacturers across the complete European regulatory lifecycle — from intended purpose, classification and conformity assessment through testing strategy, technical documentation, clinical or performance evidence, Notified Body readiness, CE marking and post-market compliance.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#f5c754] hover:bg-[#ebd255] text-navy text-[13px] font-bold px-6 py-3.5 rounded-md transition-all shadow-lg shadow-amber-900/20"
                >
                  Discuss Your EU Regulatory Strategy <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Graphic: 3D EU Map & MDR / IVDR Badges */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-[#0e2a54] to-[#081832] p-2">
                <img
                  src={euHeroMapImg}
                  alt="European Union 3D Map with EU MDR 2017/745 & EU IVDR 2017/746"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TWO DISTINCT REGULATORY SYSTEMS (MDR vs IVDR Big Dual Cards) ── */}
      <section className="py-14 bg-[#f8fafc] border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: MEDICAL DEVICES – EU MDR 2017/745 */}
            <div className="flex flex-col rounded-3xl border-2 border-[#103a71]/30 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
              {/* Card Header */}
              <div className="bg-[#0b274e] text-white px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <Shield className="h-4.5 w-4.5 text-[#f5c754]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">Regulation (EU) 2017/745</span>
                  <h2 className="text-base sm:text-lg font-extrabold text-white">
                    MEDICAL DEVICES – EU MDR 2017/745
                  </h2>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="text-[12.5px] text-navy/75 font-medium leading-relaxed">
                      Support across Class I, Is, Im, Ir, IIa, IIb and III Medical Devices, including implantable, active, software and custom-made devices.
                    </p>
                    <div className="w-20 h-20 shrink-0 hidden sm:block">
                      <img
                        src={euMdrDeviceImg}
                        alt="Medical Device Cart"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[12px] font-medium text-navy/80">
                    {mdrHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Positioning Line */}
                  <div className="mt-5 p-3 rounded-lg bg-blue-50/70 border border-blue-100 text-[11px] font-semibold text-navy/85">
                    <span className="text-blue-700 font-bold uppercase tracking-wider block mb-1">MDR Evidence Logic</span>
                    Intended Purpose → Classification → GSPR → Risk → V&amp;V → Clinical Evidence → CER → PMCF → PMS
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to="/services/eu/mdr"
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0b3a96] hover:text-[#082b70] transition-colors group"
                  >
                    Learn more about MDR Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: IN VITRO DIAGNOSTICS – EU IVDR 2017/746 */}
            <div className="flex flex-col rounded-3xl border-2 border-[#b45309]/30 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
              {/* Card Header */}
              <div className="bg-[#b45309] text-white px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-300/30 flex items-center justify-center shrink-0">
                  <FlaskConical className="h-4.5 w-4.5 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-100 block">Regulation (EU) 2017/746</span>
                  <h2 className="text-base sm:text-lg font-extrabold text-white">
                    IN VITRO DIAGNOSTICS – EU IVDR 2017/746
                  </h2>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <p className="text-[12.5px] text-navy/75 font-medium leading-relaxed">
                      Support across Class A, B, C and D IVDs under Rules 1–7, with deep expertise in scientific validity, analytical performance and higher-risk scrutiny.
                    </p>
                    <div className="w-20 h-20 shrink-0 hidden sm:block">
                      <img
                        src={euIvdrDeviceImg}
                        alt="IVD Microscope"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[12px] font-medium text-navy/80">
                    {ivdrHighlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#b45309] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Positioning Line */}
                  <div className="mt-5 p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-[11px] font-semibold text-navy/85">
                    <span className="text-[#b45309] font-bold uppercase tracking-wider block mb-1">IVDR Evidence Logic</span>
                    Intended Purpose → Rule 1–7 → Scientific Validity → Analytical → Clinical → PER → PMPF → PMS
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to="/services/eu/ivdr"
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#b45309] hover:text-[#92400e] transition-colors group"
                  >
                    Learn more about IVDR Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR CORE SERVICES (10 Cards from Section 22) ── */}
      <section className="py-16 bg-white border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              European Regulatory Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mt-3">
              Our Core EU Services
            </h2>
            <p className="text-sm text-navy/70 mt-2 font-medium">
              End-to-end guidance across every phase of qualification, testing, technical documentation, CE marking and post-market compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4.5">
            {coreServices.map((card) => (
              <div
                key={card.title}
                className="flex flex-col p-5 rounded-2xl border border-gray-200/80 bg-white hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mb-3.5 group-hover:bg-navy group-hover:border-navy transition-all">
                  <card.icon className="h-5 w-5 text-[#0b3a96] group-hover:text-white transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="text-[13px] font-extrabold text-navy leading-snug whitespace-pre-line mb-2 group-hover:text-[#0b3a96] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[11.5px] text-navy/70 leading-relaxed flex-1 mb-4 font-medium">
                  {card.desc}
                </p>
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

      {/* ── 4. THE REGULATORY DECISION CHAIN (6-Step Lifecycle Process Flow) ── */}
      <section className="py-16 bg-slate-50 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-navy/70">
              Conformity Architecture
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-1">
              End-to-End Support Across the Product Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-navy/65 mt-1 font-medium">
              The Regulatory Decision Chain: How strategy, evidence, files and Notified Bodies connect.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {lifecycleSteps.map((step, idx) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-200/80 shadow-2xs relative"
              >
                {idx < lifecycleSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-2.5 z-10">
                    <ArrowRight className="h-3.5 w-3.5 text-navy/30" />
                  </div>
                )}
                <div className="w-8 h-8 rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-[11px] font-extrabold mb-2.5 shadow-2xs">
                  {step.num}
                </div>
                <h4 className="text-[12px] font-extrabold text-navy leading-snug mb-1">
                  {step.label}
                </h4>
                <p className="text-[10.5px] text-navy/65 leading-tight font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY NKB REGOVANTA? + OUR REGULATORY EXPERTISE ── */}
      <section className="py-16 bg-white border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Why NKB */}
            <div className="lg:col-span-4 p-7 rounded-3xl bg-slate-50 border border-gray-200/80 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-navy mb-5">
                  Why Choose NKB Regovanta?
                </h3>
                <ul className="space-y-3 text-[12.5px] font-medium text-navy/80">
                  {whyChoose.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-5 border-t border-gray-200">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] hover:text-navy"
                >
                  Explore our consulting approach <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Regulatory Expertise breakdown */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-lg font-extrabold text-navy">
                Our Regulatory Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* MDR Classes */}
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-4.5 w-4.5 text-[#0b3a96]" />
                    <h4 className="text-sm font-extrabold text-navy">Medical Devices (MDR)</h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-navy/75 font-medium">
                    <li>• Class I, Is, Im, Ir</li>
                    <li>• Class IIa &amp; Class IIb</li>
                    <li>• Class III &amp; Implantable Devices</li>
                    <li>• Software as a Medical Device (Rule 11)</li>
                    <li>• Custom-Made &amp; System/Procedure Packs</li>
                  </ul>
                </div>

                {/* IVDR Classes */}
                <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200">
                  <div className="flex items-center gap-2 mb-3">
                    <FlaskConical className="h-4.5 w-4.5 text-[#b45309]" />
                    <h4 className="text-sm font-extrabold text-navy">In Vitro Diagnostics (IVDR)</h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-navy/75 font-medium">
                    <li>• Class A (Non-sterile &amp; Sterile)</li>
                    <li>• Class B &amp; Class C Assays</li>
                    <li>• Class D High-Risk (EURL / Common Specs)</li>
                    <li>• Companion Diagnostics (CDx)</li>
                    <li>• Self-Testing &amp; Near-Patient Testing</li>
                  </ul>
                </div>
              </div>

              {/* Industries We Support */}
              <div className="pt-4">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-navy/60 mb-3">
                  Industries We Support
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {industriesSupported.map((ind) => (
                    <div
                      key={ind.label}
                      className="p-3 rounded-xl bg-slate-50 border border-gray-200/70 flex items-center gap-2.5 text-xs font-semibold text-navy hover:bg-blue-50/50 transition-colors"
                    >
                      <ind.icon className="h-4 w-4 text-[#0b3a96] shrink-0" />
                      <span className="truncate">{ind.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM PARTNER BANNER + CTA ── */}
      <section className="py-14 bg-gradient-to-r from-[#071b36] via-[#0b274e] to-[#0f3468] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase font-bold text-[#f5c754] tracking-widest block mb-1">
                Your Partner for EU Market Access
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Build a Defensible EU MDR &amp; IVDR Conformity Roadmap
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/80 max-w-2xl leading-relaxed">
                We build regulatory strategies and technical documentation that drive CE Marking success and ensure long-term compliance in the European market.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#f5c754] hover:bg-[#ebd255] text-navy text-[13px] font-bold px-6 py-3.5 rounded-md transition-all shadow-lg"
              >
                Talk to Our EU Experts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
