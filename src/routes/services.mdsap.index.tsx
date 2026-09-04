import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  Layers,
  HelpCircle,
  Building2,
  Globe2,
  AlertTriangle,
  FileSearch,
  Users,
  PenTool,
  Factory,
  Activity,
  RefreshCw,
  FolderArchive,
  Headphones,
  Award,
  Clock,
  Target,
  Scale,
  Sparkles,
  Search,
  Check,
  ClipboardCheck,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/")({
  head: () => ({
    meta: [
      {
        title:
          "MDSAP Audit Readiness & Consulting for Medical Device Manufacturers | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Prepare your QMS for one audit across 5 regulatory jurisdictions: US FDA, Health Canada, ANVISA Brazil, MHLW/PMDA Japan, and TGA Australia. Comprehensive MDSAP readiness, gap assessment, mock audits, and CAPA remediation.",
      },
      {
        name: "keywords",
        content:
          "MDSAP Audit Readiness, MDSAP Consulting, Medical Device Single Audit Program, ISO 13485 MDSAP alignment, FDA QMSR MDSAP, Health Canada MDSAP, ANVISA MDSAP, TGA Australia MDSAP, PMDA Japan MDSAP, MDSAP Mock Audit, Auditing Organization AO support, NKB Regovanta",
      },
      {
        property: "og:title",
        content:
          "MDSAP Audit Readiness & Consulting | 5 Jurisdictions | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Prepared for 5 Jurisdictions. Trusted for Quality. One single QMS audit across US, Canada, Brazil, Japan, and Australia.",
      },
      {
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/mdsap",
      },
      {
        property: "og:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "MDSAP Audit Readiness & Consulting | 5 Jurisdictions | NKB Regovanta",
      },
      {
        name: "twitter:description",
        content:
          "Prepared for 5 Jurisdictions. Trusted for Quality. One single QMS audit across US, Canada, Brazil, Japan, and Australia.",
      },
      {
        name: "twitter:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/mdsap",
      },
    ],
  }),
  component: MdsapHubPage,
});

function MdsapHubPage() {
  const jurisdictions = [
    {
      name: "AUSTRALIA",
      auth: "TGA",
      code: "au",
      desc: "Therapeutic Goods Administration",
    },
    {
      name: "BRAZIL",
      auth: "ANVISA",
      code: "br",
      desc: "Agência Nacional de Vigilância Sanitária",
    },
    {
      name: "CANADA",
      auth: "Health Canada",
      code: "ca",
      desc: "Mandatory for Class II, III & IV Licences",
    },
    {
      name: "JAPAN",
      auth: "MHLW / PMDA",
      code: "jp",
      desc: "Ministry of Health, Labour & Welfare",
    },
    {
      name: "UNITED STATES",
      auth: "FDA",
      code: "us",
      desc: "Accepts MDSAP in Lieu of Routine QSIT Inspections",
    },
  ];

  const processAreas = [
    { num: "01", title: "Management", desc: "Executive responsibility, quality policy, resource management, and management review effectiveness." },
    { num: "02", title: "Measurement, Analysis & Improvement", desc: "Internal audits, CAPA systems, nonconformity control, and statistical trending." },
    { num: "03", title: "Design & Development", desc: "User needs, design inputs, verification, validation, risk management, and DHF design transfer." },
    { num: "04", title: "Production & Service Controls", desc: "Process validation (IQ/OQ/PQ), DHR batch release, cleanroom controls, and equipment calibration." },
    { num: "05", title: "Purchasing & Supplier Controls", desc: "Critical supplier qualification, quality agreements, outsourced processes, and incoming verification." },
    { num: "06", title: "Device Marketing Authorization & Facility Registration", desc: "Market licensing maintenance, establishment listings, and national registration alignment across 5 markets." },
    { num: "07", title: "Adverse Events & Advisory Notices Reporting", desc: "Statutory adverse event reporting, vigilance timelines, and Field Safety Corrective Action (FSCA) execution." },
  ];

  const consultingServices = [
    {
      num: 1,
      title: "MDSAP Regulatory Strategy & Scope Assessment",
      desc: "Define audit scope, product categories, applicable jurisdictions, legal manufacturer boundaries, and regulatory expectations.",
      to: "/services/mdsap/strategy-scope",
      icon: Target,
    },
    {
      num: 2,
      title: "MDSAP QMS Gap Assessment",
      desc: "Detailed gap assessment against ISO 13485:2016 and MDSAP specific requirements across all 7 process areas.",
      to: "/services/mdsap/gap-assessment",
      icon: FileSearch,
    },
    {
      num: 3,
      title: "MDSAP Process-Based Audit Readiness",
      desc: "Evaluate readiness across all 7 MDSAP process areas with a risk-based, evidence-driven audit trail approach.",
      to: "/services/mdsap/process-readiness",
      icon: Workflow,
    },
    {
      num: 4,
      title: "ISO 13485 to MDSAP QMS Alignment",
      desc: "Align your QMS to MDSAP expectations beyond ISO 13485 including regulatory overlays of all 5 jurisdictions.",
      to: "/services/mdsap/qms-alignment",
      icon: Layers,
    },
    {
      num: 5,
      title: "Country-Specific Regulatory Requirements",
      desc: "Address additional regulatory requirements for Australia (TGA), Brazil (ANVISA), Canada (Health Canada), Japan (PMDA) & USA (FDA).",
      to: "/services/mdsap/jurisdiction-readiness",
      icon: Globe2,
    },
    {
      num: 6,
      title: "Mock MDSAP Audits & Interview Preparation",
      desc: "On-site or remote mock audits, detailed reporting, auditor-style interviews, record retrieval drills, and management briefings.",
      to: "/services/mdsap/mock-audits",
      icon: Users,
    },
    {
      num: 7,
      title: "Design & Development Control Readiness",
      desc: "Ensure design controls, risk management (ISO 14971), V&V, software lifecycles, and DHF are audit-ready and evidence-rich.",
      to: "/services/mdsap/design-controls",
      icon: PenTool,
    },
    {
      num: 8,
      title: "Production, Supplier & Process Validation",
      desc: "Strengthen manufacturing controls, critical supplier management, cleanliness, sterilization, and process validation evidence.",
      to: "/services/mdsap/production-supplier-validation",
      icon: Factory,
    },
    {
      num: 9,
      title: "Complaint, Vigilance & Post-Market Readiness",
      desc: "Build systems for complaint handling, trend analysis, statutory adverse event reporting, and multi-country FSCA readiness.",
      to: "/services/mdsap/complaint-vigilance",
      icon: ShieldCheck,
    },
    {
      num: 10,
      title: "Nonconformity, CAPA & Remediation Support",
      desc: "Root cause analysis, effective systemic CAPA, trend prevention, extent assessments, and remediation strategy until closure.",
      to: "/services/mdsap/capa-remediation",
      icon: RefreshCw,
    },
    {
      num: 11,
      title: "Audit Documentation & Evidence Preparation",
      desc: "Review and strengthen SOPs, records, forms, and objective evidence packages for seamless contemporaneous sampling.",
      to: "/services/mdsap/audit-documentation",
      icon: FolderArchive,
    },
    {
      num: 12,
      title: "Audit Response & Post-Certification Support",
      desc: "Support during audit, management of findings, response packages for Auditing Organizations, and continuous surveillance readiness.",
      to: "/services/mdsap/post-certification",
      icon: Headphones,
    },
  ];

  const auditJourney = [
    { step: 1, title: "Assess Scope & Strategy", icon: Target },
    { step: 2, title: "Gap Assessment", icon: FileSearch },
    { step: 3, title: "Readiness & Remediation", icon: TrendingUp },
    { step: 4, title: "Mock Audit & Management Review", icon: Users },
    { step: 5, title: "Certification Audit", icon: ClipboardCheck },
    { step: 6, title: "Surveillance & Continuous Improvement", icon: ShieldCheck },
  ];

  const whyChooseNkb = [
    "Deep regulatory & QMS expertise across all 5 MDSAP jurisdictions",
    "Led by senior ex-auditors and former medical device regulatory specialists",
    "Process-based, risk-focused approach mirroring Auditing Organization methodologies",
    "Practical, actionable, and sustainable QMS solutions without administrative bloat",
    "End-to-end support till certification grant, surveillance, and multi-year maintenance",
  ];

  const faqs = [
    {
      q: "Is MDSAP the same as ISO 13485 certification?",
      a: "No. ISO 13485 provides the core medical device quality management system framework, while MDSAP uses a defined audit approach that incorporates specific statutory and regulatory requirements from all five participating jurisdictions (Australia, Brazil, Canada, Japan, and the United States). A manufacturer can hold an ISO 13485 certificate and still require substantial MDSAP-specific readiness and documentation alignment.",
    },
    {
      q: "Does MDSAP certification authorize a device for sale in all five countries?",
      a: "No. MDSAP is a quality management system audit program. Product registrations, device marketing authorizations (e.g., US FDA 510(k)/PMA, Health Canada MDL, ANVISA Registro, TGA ARTG Inclusion, PMDA Shonin), establishment licensing, and local representation requirements remain subject to each jurisdiction’s distinct regulatory framework.",
    },
    {
      q: "Who conducts the MDSAP audit?",
      a: "MDSAP audits are conducted exclusively by recognized Auditing Organizations (AOs) — such as BSI, TÜV SÜD, DEKRA, DQS, Intertek, SGS, and UL. Participating Regulatory Authorities recognize and utilize the audit reports and certifications issued by these AOs in accordance with their own national laws and regulatory programs.",
    },
    {
      q: "Do we need all five countries in scope for our MDSAP audit?",
      a: "No. The applicable regulatory requirements depend entirely on the jurisdictions relevant to the manufacturer’s current and planned market commercialization activities. However, the audit scope must be defined precisely at the outset to ensure all relevant country-specific requirements are embedded into operational procedures.",
    },
    {
      q: "What is the biggest mistake companies make when preparing for MDSAP?",
      a: "The most frequent mistake is preparing documents rather than preparing the operating quality system. MDSAP auditors sample real operational records and follow evidence across interconnected processes (e.g., following a complaint through adverse event assessment, CAPA, risk file review, and design change). Procedures must be supported by consistent, traceable implementation evidence.",
    },
    {
      q: "Can you prepare us if we already have ISO 13485 certification?",
      a: "Yes. In this situation, NKB Regovanta focuses on MDSAP process logic, regulatory overlays, objective-evidence gaps, jurisdiction-specific controls (e.g., FDA 21 CFR 820 / QMSR, Health Canada licensing linkages, ANVISA Resolution RDC 665/2022, MHLW Ordinance 169), and audit behavior rather than rebuilding the entire foundational QMS.",
    },
    {
      q: "Can NKB Regovanta conduct a formal mock MDSAP audit?",
      a: "Yes. We conduct full-system or targeted mock audits simulating the exact MDSAP Audit Approach sequence. Our senior auditors challenge process owners, conduct live record retrieval drills, follow cross-process evidence chains, and provide a prioritized remediation roadmap before your recognized Auditing Organization arrives.",
    },
    {
      q: "Can you support nonconformity and CAPA responses after our MDSAP audit?",
      a: "Yes. We assist manufacturers in structuring robust nonconformity responses: containment, extent-of-condition assessment, root-cause analysis, systemic corrective action, implementation evidence packages, and effectiveness verification criteria to achieve full clearance with your Auditing Organization.",
    },
    {
      q: "How should we prepare process owners for MDSAP auditor interviews?",
      a: "Process owners should understand their process purpose, key risks, regulatory triggers, interfaces, and record retrieval paths. Memorized scripts fail during process-based audits; our interview coaching teaches process owners how to confidently explain workflows, demonstrate control, and retrieve objective evidence efficiently.",
    },
    {
      q: "How do we maintain continuous audit readiness after MDSAP certification?",
      a: "We help manufacturers integrate MDSAP requirements into internal audit schedules, management reviews, regulatory change monitoring, CAPA trending, and engineering change control. This ensures ongoing surveillance audit readiness without needing emergency remediation before annual visits.",
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION (MATCHING INFOGRAPHIC HEADER & 3D VISUALS) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-slate-100 pt-10 pb-14 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">MDSAP Consulting</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b3a96]">
                  NKB REGOVANTA
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-xs font-semibold text-navy/60">
                  Regulatory. Quality. Manufacturing. Market Access.
                </span>
              </div>
              
              <h1 className="font-display font-black text-navy leading-[1.06] mb-3 text-3xl sm:text-4xl lg:text-[46px] tracking-tight">
                MDSAP AUDIT READINESS &amp; CONSULTING
              </h1>

              <p className="text-lg sm:text-xl font-bold text-[#0b7261] mb-4">
                Prepared for 5 Jurisdictions. Trusted for Quality.
              </p>

              <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-6">
                We help medical device manufacturers build a robust QMS, prepare for MDSAP audits and achieve certification that opens doors to global markets.
              </p>

              {/* 5 Feature Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2 mb-8">
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 shadow-2xs text-center">
                  <ClipboardCheck className="h-5 w-5 text-[#0b3a96] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-navy leading-tight">MDSAP Readiness</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 shadow-2xs text-center">
                  <Workflow className="h-5 w-5 text-[#0b3a96] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-navy leading-tight">Process-Based Approach</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 shadow-2xs text-center">
                  <Globe2 className="h-5 w-5 text-[#0b3a96] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-navy leading-tight">5 Jurisdictions Aligned</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 shadow-2xs text-center">
                  <ShieldCheck className="h-5 w-5 text-[#0b3a96] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-navy leading-tight">Stronger QMS Outcomes</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-gray-200 shadow-2xs text-center col-span-2 sm:col-span-1">
                  <TrendingUp className="h-5 w-5 text-[#0b3a96] mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-navy leading-tight">Global Market Access</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
                >
                  Talk to Our MDSAP Experts <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#services-grid"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy text-[13px] font-semibold px-6 py-3.5 rounded-md border border-gray-300 transition-all shadow-xs"
                >
                  Explore 12 Consulting Services <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right 3D Visual Shield & Pedestal Mockup Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-6 rounded-3xl bg-gradient-to-b from-[#0b3a96] to-[#041d52] text-white shadow-2xl border-4 border-blue-200/20 relative overflow-hidden">
                {/* Visual Shield Badge */}
                <div className="text-center pt-2 pb-4">
                  <div className="inline-flex flex-col items-center justify-center p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner mb-3">
                    <ShieldCheck className="h-12 w-12 text-teal-300 mb-1" />
                    <h3 className="text-2xl font-black tracking-wider text-white">MDSAP</h3>
                    <p className="text-xs text-blue-100 font-semibold uppercase tracking-widest">
                      One Audit. Multiple Markets.
                    </p>
                  </div>
                </div>

                {/* Pedestal Layers */}
                <div className="space-y-1.5 text-center mb-6">
                  <div className="py-1.5 px-3 rounded-md bg-white/15 text-[11px] font-bold tracking-wide">
                    QUALITY MANAGEMENT SYSTEM (ISO 13485)
                  </div>
                  <div className="py-1.5 px-3 rounded-md bg-white/25 text-[11px] font-bold tracking-wide text-teal-200">
                    7 MDSAP PROCESS AREAS
                  </div>
                  <div className="py-1.5 px-3 rounded-md bg-white/35 text-[11px] font-bold tracking-wide text-amber-300">
                    5 REGULATORY AUTHORITIES
                  </div>
                </div>

                {/* Checklist & Cubes Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/15 text-xs font-semibold">
                  <div className="p-2.5 rounded-xl bg-white/10 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-300 shrink-0" />
                    <span>People &amp; Process</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/10 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-300 shrink-0" />
                    <span>Evidence &amp; Trace</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/10 flex items-center gap-2">
                    <Award className="h-4 w-4 text-amber-300 shrink-0" />
                    <span>Global Quality</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/10 flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-blue-300 shrink-0" />
                    <span>Market Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY PRINCIPLE CALLOUT BANNER */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="p-7 sm:p-9 rounded-3xl bg-slate-50 border border-gray-200/90 shadow-xs">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-3">
                Our Regulatory Principle
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy mb-3">
                Prepare Your QMS for One Connected Regulatory System Across Jurisdictions
              </h2>
              <p className="text-sm text-navy/80 leading-relaxed font-medium mb-3">
                MDSAP readiness is not achieved by adding five country names to an ISO 13485 procedure. A successful audit requires the manufacturer to demonstrate that its quality management system actually operates as one connected regulatory system — from management responsibility and design controls through supplier management, production, complaints, CAPA, adverse-event reporting, product registrations and post-market actions.
              </p>
              <p className="text-sm text-navy/80 leading-relaxed font-medium">
                The goal is not to make the QMS look compliant for audit week. The goal is to build a system in which an auditor can select a complaint, CAPA, design change, supplier issue or production record and follow the evidence across functions without finding contradictory decisions, missing regulatory assessments or weak ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 5 PARTICIPATING JURISDICTIONS (MATCHING POSTER ICONS & FLAGS) */}
      <section className="py-14 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              International Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3">
              5 Participating Regulatory Jurisdictions
            </h2>
            <p className="text-xs sm:text-sm text-navy/70 font-medium mt-2 max-w-2xl mx-auto">
              MDSAP audits are conducted by recognized Auditing Organizations (AOs). Participating Regulatory Authorities use MDSAP audit outputs according to their own national laws and regulatory programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {jurisdictions.map((j, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-200 text-center shadow-xs hover:border-[#0b3a96] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center mb-3">
                    <img
                      src={`https://flagcdn.com/w80/${j.code}.png`}
                      srcSet={`https://flagcdn.com/w160/${j.code}.png 2x`}
                      alt={`${j.name} Flag`}
                      className="w-13 h-8.5 object-cover rounded-md shadow-2xs border border-gray-200"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xs font-black text-navy uppercase tracking-wider mb-1">
                    {j.name}
                  </h3>
                  <div className="text-base font-extrabold text-[#0b3a96] mb-2">{j.auth}</div>
                </div>
                <p className="text-[11px] text-navy/70 font-medium leading-snug border-t border-gray-100 pt-2.5 mt-2">
                  {j.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 7 MDSAP PROCESS AREAS */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Audit Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3">
              The 7 MDSAP Process Areas
            </h2>
            <p className="text-sm text-navy/75 font-medium mt-2">
              A clause-by-clause ISO 13485 checklist can miss the most important audit risk: <strong>process interaction</strong>. MDSAP preparation tests whether evidence moves correctly between these seven process areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processAreas.map((pa, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  idx === 6
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-900 to-indigo-950 text-white border-blue-900"
                    : "bg-slate-50 border-gray-200 shadow-2xs hover:border-[#0b3a96]/40"
                }`}
              >
                <div
                  className={`text-xs font-black uppercase tracking-widest mb-2 ${
                    idx === 6 ? "text-teal-300" : "text-[#0b3a96]"
                  }`}
                >
                  PROCESS AREA {pa.num}
                </div>
                <h3
                  className={`text-base font-extrabold mb-2 leading-snug ${
                    idx === 6 ? "text-white" : "text-navy"
                  }`}
                >
                  {pa.title}
                </h3>
                <p
                  className={`text-xs font-medium leading-relaxed ${
                    idx === 6 ? "text-white/85" : "text-navy/75"
                  }`}
                >
                  {pa.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR MDSAP CONSULTING SERVICES (12 NUMBERED CARDS IN 4x3 GRID MATCHING POSTER) */}
      <section id="services-grid" className="py-16 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Complete End-to-End Suite
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              OUR MDSAP CONSULTING SERVICES
            </h2>
            <p className="text-sm text-navy/75 font-medium mt-3">
              Click on any consulting module below to access dedicated subpages detailing methodology, auditor expectations, and execution roadmaps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={srv.num}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs hover:border-[#0b3a96] hover:shadow-lg transition-all flex flex-col justify-between group relative"
                >
                  <div>
                    {/* Header with Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-8 w-8 rounded-full bg-[#0b7261] text-white flex items-center justify-center text-xs font-black shadow-xs">
                        {srv.num}
                      </div>
                      <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="text-[15px] font-extrabold text-navy mb-2 leading-snug group-hover:text-[#0b3a96] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-navy/75 font-medium leading-relaxed mb-4">
                      {srv.desc}
                    </p>
                  </div>

                  <Link
                    to={srv.to}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] group-hover:text-[#082b70] pt-3 border-t border-gray-100 transition-colors"
                  >
                    Learn More &amp; Scope Details <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. THE MDSAP AUDIT JOURNEY (HORIZONTAL 6-STEP MILESTONE FLOW) */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Proven Implementation Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3">
              THE MDSAP AUDIT JOURNEY
            </h2>
            <p className="text-xs sm:text-sm text-navy/70 font-medium mt-1">
              Structured step-by-step milestones from initial scoping to certification and ongoing surveillance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {auditJourney.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-gray-200/90 text-center flex flex-col items-center justify-between"
                >
                  <div className="h-12 w-12 rounded-full bg-white border-2 border-[#0b3a96] text-[#0b3a96] flex items-center justify-center mb-3 shadow-xs">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-black text-[#0b7261] mb-1">
                    STEP {step.step}
                  </div>
                  <h3 className="text-xs font-extrabold text-navy leading-snug">
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE NKB REGOVANTA? & RIGHT CTA CARD (MATCHING POSTER BOTTOM SECTION) */}
      <section className="py-16 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Why Choose Card */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                  Client Value &amp; Track Record
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3 mb-6">
                  WHY CHOOSE NKB REGOVANTA?
                </h2>
                <ul className="space-y-4">
                  {whyChooseNkb.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-teal-100 text-[#0b7261] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 stroke-[2.5]" />
                      </div>
                      <span className="text-sm text-navy/85 font-semibold leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100 text-xs text-navy/65 font-medium">
                NKB Regovanta approach: <strong>Scope &rarr; 7-Process Assessment &rarr; Jurisdiction Mapping &rarr; Evidence Testing &rarr; Remediation &rarr; Mock Audit &rarr; AO Audit Support &rarr; CAPA Closure &rarr; Surveillance Readiness</strong>
              </div>
            </div>

            {/* Right: Premium CTA Card matching Poster */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#061b40] via-[#092b6b] to-[#041636] text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                  Be Ready. Be Confident. <br />
                  <span className="text-teal-300">Be MDSAP Certified.</span>
                </h3>
                <p className="text-sm text-blue-100/90 leading-relaxed font-medium mb-6">
                  Prepare once. Get accepted across 5 major regulatory markets worldwide without repetitive audits.
                </p>
                <div className="space-y-2 mb-8 text-xs text-blue-100/80 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-300" />
                    <span>Single Quality Audit for US, Canada, Brazil, Japan &amp; Australia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-300" />
                    <span>Zero Repeat Findings with Evidence-Driven Linkages</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-6 py-4 rounded-xl transition-all shadow-md"
                >
                  Talk to Our MDSAP Experts <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHAT MAKES MDSAP DIFFICULT & SENIOR-CONSULTANT PERSPECTIVE */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                Audit Vulnerabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3 mb-6">
                What Makes an MDSAP Audit Difficult?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy/80 font-medium leading-relaxed">
                    An auditor can dynamically expand sampling when one single record suggests a broader quality process weakness.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy/80 font-medium leading-relaxed">
                    Country-specific statutory requirements are tested inside operational workflows, not as a separate regulatory matrix presentation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy/80 font-medium leading-relaxed">
                    Complaint and CAPA audit trails quickly expose design, supplier, manufacturing, vigilance, and management review gaps.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy/80 font-medium leading-relaxed">
                    Outsourced activities remain the legal manufacturer’s absolute responsibility and create significant audit exposure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy/80 font-medium leading-relaxed">
                    Inconsistent records across RA, QA, R&amp;D, manufacturing, and post-market functions are often far more damaging than a weak individual SOP.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-navy/80 font-medium leading-relaxed">
                    Remediation that corrects only the sampled example leads to repeat findings because the underlying control system remains broken.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-400/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
                Senior-Consultant Perspective
              </div>
              <h3 className="text-lg font-bold mb-3">
                The Single Question That Determines MDSAP Success
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium mb-4">
                “The strongest MDSAP preparation asks one question repeatedly: <strong>if an auditor selects this record and follows it upstream and downstream, will every linked process show the same controlled regulatory story?</strong> That is the rigorous standard we apply when preparing medical device manufacturers.”
              </p>
              <div className="text-[11px] text-teal-300/90 font-bold uppercase tracking-wider pt-3 border-t border-white/20">
                NKB REGOVANTA LEAD AUDIT PRACTICE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (10 DETAILED FAQS FROM PROMPT) */}
      <section className="py-16 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Expert Answers
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-[#0b3a96]/40 transition-colors"
              >
                <h3 className="text-[15px] sm:text-base font-extrabold text-navy mb-2 flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed pl-7.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. REGULATORY BASIS NOTICE & CTA */}
      <section className="py-8 bg-white border-b border-gray-200 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-xs text-navy/60 leading-relaxed font-medium">
            <strong>Regulatory Basis:</strong> Structured around ISO 13485:2016, the current MDSAP Audit Approach and associated MDSAP audit-program documents, together with the applicable medical-device regulatory requirements of Australia (TGA), Brazil (ANVISA), Canada (Health Canada), Japan (MHLW/PMDA), and the United States (FDA).
          </p>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is MDSAP and which countries participate?","acceptedAnswer":{"@type":"Answer","text":"MDSAP (Medical Device Single Audit Program) is a program that allows one audit to satisfy the regulatory requirements of five jurisdictions: US FDA (21 CFR Part 820/QMSR), Health Canada (CMDR), ANVISA Brazil (RDC 665), MHLW/PMDA Japan, and TGA Australia (MDSAP). Japan and Brazil mandate MDSAP; it is accepted but not required in the US, Canada, and Australia."}},{"@type":"Question","name":"Is MDSAP mandatory for medical device companies?","acceptedAnswer":{"@type":"Answer","text":"MDSAP is mandatory for Japan (required for PMDA registration) and Brazil (required for ANVISA registration). In Canada, Health Canada accepts MDSAP as an alternative to domestic QMS inspections. In the US and Australia, MDSAP is accepted but not required."}},{"@type":"Question","name":"What is an MDSAP gap assessment?","acceptedAnswer":{"@type":"Answer","text":"An MDSAP gap assessment is a pre-audit evaluation of your QMS against all five MDSAP jurisdictional requirements. It identifies non-conformities before the official audit, allowing time for CAPA remediation to achieve a clean first-time audit result."}},{"@type":"Question","name":"How long does it take to prepare for an MDSAP audit?","acceptedAnswer":{"@type":"Answer","text":"For companies with a mature ISO 13485 QMS, MDSAP readiness typically takes 3–9 months. Companies starting from scratch may need 12–18 months. Key activities include gap assessment, CAPA remediation, process documentation, and at least one successful internal audit cycle."}}]}) }}
        />
</div>
      </section>

      <CTABand
        title="Your MDSAP Regulatory &amp; QMS Readiness Partner"
        description="Whether preparing for initial certification, converting from ISO 13485, or preparing for surveillance audits, NKB Regovanta supports the complete MDSAP lifecycle."
      />
    </>
  );
}
