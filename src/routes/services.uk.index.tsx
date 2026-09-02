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
  BookOpen,
  Boxes,
} from "lucide-react";
import ukHero3dImg from "@/assets/uk-hero-3d.png";
import ukMapShieldImg from "@/assets/uk-map-shield.png";
import ukBigBenImg from "@/assets/uk-big-ben-bottom.png";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/")({
  head: () => ({
    meta: [
      {
        title:
          "UK MHRA Medical Device Registration & UK Responsible Person (UKRP) | CE Recognition & UKCA | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Senior UK MHRA regulatory consulting, UK Responsible Person (UKRP) representation, Great Britain & Northern Ireland pathways, CE recognition up to 2030, UKCA marking, DORS registration, and PMS compliance.",
      },
      {
        name: "keywords",
        content:
          "UK MHRA medical device registration, UK Responsible Person UKRP, UKCA marking medical devices, DORS portal registration MHRA, UK MDR 2002, Northern Ireland medical devices, CE recognition UK, NKB Regovanta",
      },
      {
        property: "og:title",
        content: "UK MHRA Medical Device Registration & UK Responsible Person (UKRP) | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Your Partner for UK Market Access. UKRP services, MHRA DORS registration, UKCA conformity, CE recognition strategy, and GB post-market compliance.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk" }],
  }),
  component: UKMarketCompletePage,
});

/* ── Static Data ── */

const heroChecklist = [
  "UKCA Marking & MHRA Registration",
  "UKRP Services (UK Responsible Person)",
  "Post-Market Compliance & Vigilance",
  "Regulatory Strategy to Market Access",
];

const trustBarItems = [
  {
    icon: ShieldCheck,
    title: "Authorised UK Representative",
    desc: "Acting as your UK Responsible Person",
  },
  {
    icon: UserCheck,
    title: "MHRA Recognition & Compliance",
    desc: "Recognition on MHRA Public Register",
  },
  {
    icon: FileText,
    title: "UKCA Marking Support",
    desc: "Technical documentation & conformity route",
  },
  {
    icon: Activity,
    title: "Vigilance & Reporting",
    desc: "Incident reporting & vigilance system",
  },
  {
    icon: Settings,
    title: "Regulatory Expertise",
    desc: "Deep domain knowledge across device classes",
  },
  {
    icon: Shield,
    title: "End-to-End UK Support",
    desc: "From strategy to post-market compliance",
  },
];

const services10 = [
  {
    num: "1",
    icon: UserCheck,
    title: "1. UKCA Marking\n& MHRA Registration",
    bullets: [
      "Determine conformity assessment route (Annex II UK MDR 2002)",
      "UKCA marking strategy & documentation support",
      "MHRA registration for GB market",
    ],
    to: "/services/uk/mhra-registration",
  },
  {
    num: "2",
    icon: Users,
    title: "2. UK Responsible Person\n(UKRP) Services",
    bullets: [
      "Act as your UK Responsible Person",
      "UK based point of contact for MHRA & authorities",
      "Obligations under UK MDR 2002 Regulation 40",
    ],
    to: "/services/uk/ukrp",
  },
  {
    num: "3",
    icon: FileText,
    title: "3. Technical Documentation\nReview & Gap Assessment",
    bullets: [
      "UK MDR Annex II compliance review",
      "GSPR mapping & evidence assessment",
      "Labeling, IFU & UDI alignment",
    ],
    to: "/services/uk/technical-file",
  },
  {
    num: "4",
    icon: BarChart3,
    title: "4. Vigilance & Incident\nReporting",
    bullets: [
      "Incident reporting to MHRA (Report of incident)",
      "Trend reporting",
      "Field Safety Corrective Actions (FSCAs)",
    ],
    to: "/services/uk/vigilance",
  },
  {
    num: "5",
    icon: Shield,
    title: "5. Post-Market Compliance\n& Obligations",
    bullets: [
      "PMS plan & PMS report support",
      "PSUR support (where applicable)",
      "Record retention & data protection",
    ],
    to: "/services/uk/pms",
  },
  {
    num: "6",
    icon: Landmark,
    title: "6. Change Control &\nLifecycle Support",
    bullets: [
      "Change impact assessment",
      "Determine need for new submission to MHRA",
      "Ongoing lifecycle compliance",
    ],
    to: "/services/uk/conformity-assurance",
  },
  {
    num: "7",
    icon: Network,
    title: "7. EUDAMED &\nUDI Support",
    bullets: [
      "UDI-DI submission in EUDAMED (when applicable)",
      "Actor registration support",
      "Data accuracy & consistency",
    ],
    to: "/services/uk/conformity-assurance",
  },
  {
    num: "8",
    icon: Factory,
    title: "8. Manufacturing & Import\nCompliance",
    bullets: [
      "Sterilization, packaging & labeling compliance",
      "Importer obligations",
      "Supply chain documentation review",
    ],
    to: "/services/uk/conformity-assurance",
  },
  {
    num: "9",
    icon: Monitor,
    title: "9. Software & Cybersecurity\nCompliance",
    bullets: [
      "Software as a Medical Device (SaMD) support",
      "IEC 62304 alignment",
      "Cybersecurity risk management support",
    ],
    to: "/services/uk/conformity-assurance",
  },
  {
    num: "10",
    icon: Pill,
    title: "10. Combination Products\n(Article 117) Support",
    bullets: [
      "Article 117 route assessment",
      "GSPR & technical documentation support",
      "Notified Body Opinion readiness",
    ],
    to: "/services/uk/conformity-assurance",
  },
];

const process6 = [
  { num: 1, icon: Target, title: "Regulatory Strategy & Route Assessment" },
  { num: 2, icon: UserCheck, title: "UKRP Engagement (Where Required)" },
  { num: 3, icon: FileText, title: "Technical Documentation & Compliance Review" },
  { num: 4, icon: Monitor, title: "UKCA Marking & MHRA Registration" },
  { num: 5, icon: BarChart3, title: "Post-Market Compliance & Vigilance" },
  { num: 6, icon: RefreshCw, title: "Lifecycle Maintenance & Change Management" },
];

const whyChooseBullets = [
  "Deep expertise in UK MDR 2002, UKCA & MHRA requirements",
  "Experienced UKRP services with robust compliance processes",
  "End-to-end support from pre-market to post-market",
  "Strong vigilance & regulatory reporting capability",
  "Integrated global regulatory perspective for future expansion",
  "Practical, risk-based, and business-focused approach",
];

const ukrpBenefits = [
  { icon: Award, title: "Recognition on MHRA public register" },
  { icon: Shield, title: "Strengthen your market access readiness" },
  { icon: Users, title: "Ensure compliance with Regulation 40 obligations" },
  { icon: AlertTriangle, title: "Reduce regulatory risk & delays" },
  { icon: Settings, title: "Ongoing support for regulatory changes" },
  { icon: FileCheck2, title: "Certificate Compliance Management" },
];

const questionsWeResolve = [
  "Is the product a medical device, IVD, active implantable device, accessory, system/procedure pack or another regulated product?",
  "Will the product be placed on the Great Britain market, Northern Ireland market, or both?",
  "What classification and conformity-assessment route applies?",
  "Can the device rely on a currently accepted CE-marked route in Great Britain, or is a UKCA strategy appropriate?",
  "Is a UK Responsible Person required and what regulatory records must be maintained?",
  "What data must be registered with the MHRA before placement on the Great Britain market?",
  "What technical, clinical/performance, testing, labeling and post-market evidence supports the route?",
  "What obligations continue after registration, including PMS, vigilance, FSCA and change control?",
];

const faqs = [
  {
    q: "Do all medical devices need MHRA registration before being sold in Great Britain?",
    a: "Yes. All medical devices, IVDs, custom-made devices and systems or procedure packs falling within applicable UK registration requirements must be registered with the MHRA via the DORS portal before being placed on the Great Britain market.",
  },
  {
    q: "When does an overseas manufacturer need a UK Responsible Person (UKRP)?",
    a: "Any manufacturer established outside the United Kingdom wishing to place medical devices or IVDs on the Great Britain market must appoint a single UK Responsible Person (UKRP) based in the UK to act on its behalf.",
  },
  {
    q: "Is UKCA marking mandatory for every medical device in Great Britain today?",
    a: "No. Eligible CE-marked medical devices continue to be accepted in Great Britain under current transitional arrangements. Devices compliant with EU MDR or EU IVDR may currently be placed on the GB market up to 30 June 2030, while Directive-based devices follow their applicable transition periods.",
  },
  {
    q: "Can the same regulatory strategy be used for Great Britain and Northern Ireland?",
    a: "No. Great Britain operates under the UK Medical Devices Regulations 2002 (as amended), whereas Northern Ireland continues to follow the EU MDR 2017/745 and EU IVDR 2017/746 frameworks under the Northern Ireland Protocol. Manufacturers must assess the two routes separately.",
  },
  {
    q: "Can NKB Regovanta help coordinate laboratory testing for UK submissions?",
    a: "Yes. Where third-party studies are required (biocompatibility, electrical safety, software V&V, IVD performance), NKB Regovanta defines the regulatory testing protocol and coordinates with established, accredited laboratories.",
  },
  {
    q: "Can NKB Regovanta support In Vitro Diagnostic (IVD) devices in the UK?",
    a: "Yes. We support IVD regulatory category assessment, analytical and clinical performance evidence planning, laboratory coordination, UKRP appointment, MHRA registration, and post-market compliance.",
  },
  {
    q: "What ongoing obligations exist after MHRA registration?",
    a: "Registration is not the end of compliance. Manufacturers and their UKRPs must maintain active Post-Market Surveillance (PMS), vigilance and serious incident reporting via MORE, periodic registration updates, and regulatory assessment of all design and manufacturing changes.",
  },
  {
    q: "Can NKB Regovanta review an existing UK registration or UKRP setup?",
    a: "Yes. We frequently conduct independent audits of existing MHRA registrations, UKRP mandate agreements, technical dossiers, labeling, and PMS procedures to identify and remediate regulatory gaps.",
  },
];

function UKMarketCompletePage() {
  return (
    <div className="bg-white min-h-screen font-sans text-navy selection:bg-[#e03131] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "UK MHRA Medical Device Registration & UK Responsible Person (UKRP)",
              url: "https://www.nkbregovanta.com/services/uk",
              description:
                "Official UK Responsible Person (UKRP) representation and UK MHRA medical device and IVD registration services under UK MDR 2002.",
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
                { "@type": "ListItem", position: 3, name: "United Kingdom", item: "https://www.nkbregovanta.com/services/uk" },
              ],
            },
          ]),
        }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Identical to Picture 1)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#03152d] via-[#071f43] to-[#0c2a57] text-white pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-border/20">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(224,49,49,0.3),transparent_70%)] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7">
              <h1 className="font-display font-extrabold text-white text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] leading-[1.12] mb-2 tracking-tight">
                UK MHRA Medical Device<br />
                Registration &amp;<br />
                <span className="text-[#e03131]">UK Responsible Person (UKRP)</span>
              </h1>
              <p className="text-base sm:text-lg font-bold text-white/95 mb-5 tracking-tight">
                Your Partner for UK Market Access
              </p>

              {/* 4 Checkmark Bullets */}
              <div className="space-y-2 mb-7">
                {heroChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[12.5px] sm:text-[13px] text-white/90 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#e03131] shrink-0" />
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
                  Discuss Your UK Market Access Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/services/uk/ukrp"
                  className="inline-flex items-center gap-2 bg-[#0c2a57]/70 hover:bg-[#0c2a57] border border-white/30 text-white text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all backdrop-blur-xs"
                >
                  Our UKRP Services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 3D Visual with Big Ben, UKRP Shield, MHRA Book & UKCA */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[430px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ukHero3dImg}
                  alt="UK MHRA Medical Device Registration & UK Responsible Person (UKRP)"
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
          3. OUR UK REGULATORY SERVICES (10 Cards Grid - Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[26px] font-extrabold text-navy tracking-tight">
              Our <span className="text-[#e03131]">UK</span> Regulatory Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {services10.map((card) => (
              <div
                key={card.num}
                className="flex flex-col justify-between p-4 rounded-xl border border-gray-200/90 bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200 shadow-2xs group"
              >
                <div>
                  <div className="w-7 h-7 rounded-full border border-gray-300 bg-slate-50 flex items-center justify-center mb-2.5 text-navy shadow-2xs">
                    <card.icon className="h-3.5 w-3.5 text-navy/80" strokeWidth={2} />
                  </div>
                  <h3 className="text-[11.5px] font-extrabold text-navy leading-snug whitespace-pre-line mb-2">
                    {card.title}
                  </h3>
                  <ul className="space-y-1 text-[10.5px] text-gray-600 font-medium leading-tight">
                    {card.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-gray-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-100">
                  <Link
                    to={card.to}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e03131] hover:text-[#c92a2a] group-hover:translate-x-0.5 transition-transform"
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
          4. OUR UK REGULATORY PROCESS (6-Step Flow - Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-2 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f0f4f9] rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-2xs">
            <h3 className="text-xl font-extrabold text-navy text-center mb-8 tracking-tight">
              Our UK Regulatory Process
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
              {process6.map((step, idx) => (
                <div key={step.num} className="flex items-center">
                  <div className="flex-1 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200/90 shadow-2xs flex items-center justify-center mb-2">
                      <step.icon className="h-5 w-5 text-navy" strokeWidth={1.75} />
                    </div>

                    <div className="flex items-start gap-1.5 justify-center">
                      <span className="w-4 h-4 rounded-full bg-[#e03131] text-white text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {step.num}
                      </span>
                      <p className="text-[10.5px] font-extrabold text-navy leading-tight text-left">
                        {step.title}
                      </p>
                    </div>
                  </div>

                  {idx < process6.length - 1 && (
                    <div className="hidden lg:block px-1">
                      <ArrowRight className="h-3.5 w-3.5 text-navy/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. WHY CHOOSE NKB & BENEFITS OF OUR UKRP SERVICES (Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Box: Dark Navy with UK Map & Shield */}
            <div className="lg:col-span-6 bg-[#071d3d] text-white rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-md">
              <div className="relative z-10">
                <h3 className="text-lg font-extrabold text-white mb-5 tracking-tight">
                  Why Choose NKB Regovanta for the UK?
                </h3>
                <div className="space-y-2.5 max-w-md">
                  {whyChooseBullets.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[12px] text-white/90 font-medium leading-snug">
                      <CheckCircle2 className="h-4 w-4 text-[#e03131] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute right-3 bottom-4 w-36 sm:w-44 opacity-90 pointer-events-none hidden sm:block">
                <img
                  src={ukMapShieldImg}
                  alt="UK Regulatory Shield"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right Box: Benefits of Our UKRP Services */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-navy mb-5 tracking-tight">
                  Benefits of Our UKRP Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  {ukrpBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="text-[#e03131] mt-0.5 shrink-0">
                        <b.icon className="h-4 w-4" strokeWidth={2} />
                      </div>
                      <p className="text-[11px] font-bold text-navy leading-snug">
                        {b.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. 4-COLUMN AUDIENCE & SCOPE GRID (Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-6 bg-white border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Col 1: About UK Market Access */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200/80 shadow-2xs flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-extrabold text-navy mb-2">About UK Market Access</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed font-medium mb-3">
                  Since Brexit, the UK has its own regulatory framework for medical devices – UK MDR 2002. Manufacturers must comply with UKCA marking requirements and, for many cases, appoint a UK Responsible Person (UKRP) to act as their local representative and regulatory contact.
                </p>
              </div>
              <Link
                to="/services/uk/conformity-assurance"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e03131] hover:text-[#c92a2a]"
              >
                Learn more about UK MDR 2002 →
              </Link>
            </div>

            {/* Col 2: Who Needs a UKRP? */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200/80 shadow-2xs">
              <h4 className="text-sm font-extrabold text-navy mb-1">Who Needs a UKRP?</h4>
              <p className="text-[10.5px] text-gray-500 font-medium mb-2">You need a UKRP if you:</p>
              <ul className="space-y-1.5 text-[11px] text-gray-700 font-medium">
                <li className="flex items-start gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#e03131] shrink-0 mt-0.5" strokeWidth={3} />
                  <span>Are not established in Great Britain</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#e03131] shrink-0 mt-0.5" strokeWidth={3} />
                  <span>Place medical devices on the GB market</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#e03131] shrink-0 mt-0.5" strokeWidth={3} />
                  <span>Need a local representative to meet Regulation 40 obligations</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#e03131] shrink-0 mt-0.5" strokeWidth={3} />
                  <span>Need support with MHRA communications and vigilance reporting</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Who We Work With */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200/80 shadow-2xs">
              <h4 className="text-sm font-extrabold text-navy mb-3">Who We Work With</h4>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <Stethoscope className="h-4 w-4 mx-auto text-navy mb-1" />
                  <span className="text-[9.5px] font-bold text-navy block leading-tight">Medical Device Manufacturers</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <Microscope className="h-4 w-4 mx-auto text-navy mb-1" />
                  <span className="text-[9.5px] font-bold text-navy block leading-tight">IVD Manufacturers</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <Globe2 className="h-4 w-4 mx-auto text-navy mb-1" />
                  <span className="text-[9.5px] font-bold text-navy block leading-tight">Global Companies</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-gray-200 shadow-2xs">
                  <Users className="h-4 w-4 mx-auto text-navy mb-1" />
                  <span className="text-[9.5px] font-bold text-navy block leading-tight">Startups &amp; Emerging Companies</span>
                </div>
              </div>
            </div>

            {/* Col 4: Device Classes We Support */}
            <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-200/80 shadow-2xs">
              <h4 className="text-sm font-extrabold text-navy mb-3">Device Classes We Support</h4>
              <div className="flex flex-wrap gap-1 mb-2">
                {["Class I", "Class Is", "Class Im", "Class Ir"].map((c) => (
                  <span key={c} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-navy border border-gray-200 shadow-2xs">
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {["Class IIa", "Class IIb", "Class III"].map((c) => (
                  <span key={c} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-navy border border-gray-200 shadow-2xs">
                    {c}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-gray-500 font-medium">
                Including Custom-Made &amp; Implantable Devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. COMPLETE REGULATORY ARCHITECTURE & DEEP DIVES (All User Text)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section: The Regulatory Questions We Resolve First */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                Foundational Strategy
              </span>
              <h2 className="text-2xl font-extrabold text-navy tracking-tight mt-3">
                The Regulatory Questions We Resolve First
              </h2>
              <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed mt-2">
                UK market access is a regulatory decision pathway—not an administrative registration exercise. Before touching an application form, we address the critical structural questions that govern your product:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {questionsWeResolve.map((q, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-gray-200/80 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs font-medium text-navy/90 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Great Britain & Northern Ireland Two Routes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* GB Details */}
            <div className="p-7 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#0b3a96] border border-blue-200 uppercase tracking-wider">
                Great Britain Route
              </span>
              <h3 className="text-xl font-extrabold text-navy">
                Great Britain — England, Wales and Scotland
              </h3>
              <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
                For Great Britain, medical devices and IVDs are regulated under the <strong>UK Medical Devices Regulations 2002, as amended</strong>. All medical devices, IVDs, custom-made devices and systems or procedure packs that fall within applicable registration requirements must be registered with the MHRA before placement on the Great Britain market.
              </p>
              <p className="text-xs text-navy/75 font-medium leading-relaxed">
                A manufacturer established outside the UK must appoint a single UK Responsible Person for its devices placed on the Great Britain market. The UKRP acts on the manufacturer’s behalf for specified regulatory tasks, including MHRA registration and cooperation with the authority.
              </p>
              <div className="pt-2">
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Our Great Britain Pathway Assessment Covers:</h4>
                <ul className="space-y-1.5 text-xs text-navy/75 font-medium">
                  <li>• Product qualification and device type</li>
                  <li>• Classification under the applicable UK framework</li>
                  <li>• CE-recognition versus UKCA route</li>
                  <li>• Conformity-assessment requirements</li>
                  <li>• UK Approved Body involvement where applicable</li>
                  <li>• UKRP appointment and mandate</li>
                  <li>• MHRA registration and DORS data</li>
                  <li>• Labeling and UKRP identification requirements</li>
                  <li>• Technical documentation and evidence readiness</li>
                  <li>• GB PMS, vigilance and FSCA obligations</li>
                  <li>• Lifecycle changes and registration maintenance</li>
                </ul>
              </div>
            </div>

            {/* NI Details */}
            <div className="p-7 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-[#b45309] border border-amber-200 uppercase tracking-wider">
                Northern Ireland Route
              </span>
              <h3 className="text-xl font-extrabold text-navy">
                Northern Ireland — Separate EU-Based Route
              </h3>
              <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed">
                Northern Ireland follows a different regulatory pathway. <strong>EU MDR 2017/745</strong> and <strong>EU IVDR 2017/746</strong> apply to devices placed on the Northern Ireland market. CE marking remains central, and UKNI may apply where a UK Notified Body is used for mandatory third-party conformity assessment under the Northern Ireland route.
              </p>
              <p className="text-xs text-navy/75 font-medium leading-relaxed">
                NKB Regovanta helps manufacturers avoid treating Northern Ireland as an extension of Great Britain registration. We assess the correct EU regulatory pathway, economic-operator requirements, CE / UKNI implications, registration obligations and the interaction between the NI and GB commercial strategy.
              </p>
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 mt-4">
                <p className="text-xs font-bold text-amber-900 mb-1">Dual Market Strategy</p>
                <p className="text-[11.5px] text-amber-900/80 leading-relaxed font-medium">
                  We structure labeling, packaging, and regulatory dossiers to allow seamless commercialization across both Great Britain and Northern Ireland without duplicated compliance friction.
                </p>
              </div>
            </div>
          </div>

          {/* Special Deep-Dive: A Strong Manufacturer-UKRP Interface */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e03131] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
                UKRP Governance Framework
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mt-3">
                UK Responsible Person — More Than Regulatory Representation
              </h3>
              <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed mt-2">
                The effectiveness of the UKRP relationship depends on access to accurate and current information. A strong manufacturer–UKRP interface should clearly define:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                "Who provides and approves registration data",
                "How technical documentation is made available",
                "How complaints and incidents are escalated",
                "Who performs reportability assessment",
                "How FSCA decisions are communicated",
                "How regulatory authority questions are managed",
                "How device or manufacturer changes are notified",
                "How certificate changes are tracked",
                "How labeling updates are controlled",
                "How records are retained and made accessible",
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#e03131] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. FREQUENTLY ASKED QUESTIONS (8 Complete Q&As)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-navy/70 mt-2 font-medium">
              Key regulatory answers regarding UK MHRA registration, UKRP representation, and CE recognition.
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
          9. BOTTOM PARTNER BANNER WITH BIG BEN & 4 RED BADGES (Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#05152e] text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Left Big Ben tower + Text */}
            <div className="flex items-center gap-4 lg:gap-6 z-10">
              <img
                src={ukBigBenImg}
                alt="Big Ben London"
                className="w-10 sm:w-12 h-auto object-contain shrink-0 drop-shadow-md hidden sm:block"
              />
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-white mb-1">
                  Your Trusted Partner for UK Market Access
                </h3>
                <p className="text-[11.5px] sm:text-[12px] text-blue-100/80 max-w-xl leading-relaxed mb-3">
                  From UKRP services to MHRA registration and ongoing compliance, NKB Regovanta ensures your devices reach the UK market with confidence and compliance.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[12px] font-bold px-4 py-2 rounded-md transition-all shadow-md"
                >
                  Talk to Our UK Experts <ArrowRight className="h-3.5 w-3.5" />
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
        title="Launch and Maintain Your Medical Devices &amp; IVDs Across the UK"
        description="Our senior regulatory team coordinates UKRP mandates, MHRA DORS registrations, UKCA marking, and post-market compliance."
      />
    </div>
  );
}
