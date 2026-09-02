import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Database,
  Sparkles,
  ArrowRight,
  Building2,
  FileCheck2,
  Search,
  ShieldCheck,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/mhra-registration")({
  head: () => ({
    meta: [
      { title: "MHRA Medical Device Registration & DORS Readiness | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior UK MHRA medical device and IVD registration consulting via the Device Online Registration System (DORS). DORS data quality audits, UKRP linkage, and registration maintenance.",
      },
      {
        name: "keywords",
        content:
          "MHRA device registration, DORS registration MHRA, UK medical device register, UKRP MHRA registration, UKCA registration, IVD registration UK, NKB Regovanta",
      },
      { property: "og:title", content: "MHRA Medical Device Registration & DORS Readiness | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "MHRA registration should be the final expression of an already-established regulatory pathway. We quality-check your registration dataset against underlying evidence before filing.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/mhra-registration" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/mhra-registration" }],
  }),
  component: UKMHRARegistrationPage,
});

function UKMHRARegistrationPage() {
  const reviewBeforeItems = [
    "Legal manufacturer identity and establishment details",
    "UK Responsible Person (UKRP) appointment where required",
    "Device type and classification under UK MDR 2002",
    "Certification basis and conformity marking (CE or UKCA)",
    "Relevant certificate details, scopes and validity",
    "Device nomenclature (GMDN / EMDN) and product grouping",
    "Importer and supply-chain information where applicable",
    "Labeling and manufacturer / UKRP data consistency",
    "Registration data consistency with technical and certification records",
    "Existing MHRA records requiring amendment or lifecycle maintenance",
  ];

  const registrationSupport = [
    "New manufacturer registration & account setup in DORS",
    "General and active implantable medical device registrations",
    "In Vitro Diagnostic (IVD) category registrations",
    "Custom-made medical device registration support",
    "System and procedure pack registration support",
    "DORS dataset preparation, verification and quality review",
    "UKRP-linked registration submission on behalf of overseas manufacturers",
    "Registration amendments and legal manufacturer data changes",
    "Device additions, portfolio expansions and device de-listings",
    "Certificate updates, CE transition notifications and conformity data refreshes",
    "Annual registration record audit and continuous maintenance",
    "Formal regulatory correspondence support with MHRA officers",
  ];

  const readinessElements = [
    "Correct legal manufacturer name, address and corporate registration details",
    "Correct UKRP details, contact personnel and signed mandate where applicable",
    "Accurate product qualification, risk tier and classification rationale",
    "Verified conformity marking route (UKCA or recognized CE route)",
    "Current, unexpired certificate information from an Approved or Notified Body",
    "Standardized device nomenclature (GMDN / EMDN) and clear device grouping",
    "Exact brand, model, reference numbers and device identifiers",
    "Importer registration details where required in the distribution chain",
    "Harmonized labeling, packaging proofs and IFU identifiers",
    "Current UK Declaration of Conformity (DoC) or EU DoC under recognition",
    "Documented evidence that post-market surveillance responsibilities are assigned",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "MHRA Medical Device Registration & DORS Readiness",
              url: "https://www.nkbregovanta.com/services/uk/mhra-registration",
              description:
                "Medical device and IVD registration support with the UK Medicines and Healthcare products Regulatory Agency (MHRA) via the DORS portal.",
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
                { "@type": "ListItem", position: 4, name: "MHRA Registration", item: "https://www.nkbregovanta.com/services/uk/mhra-registration" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/uk" className="hover:text-navy transition-colors">United Kingdom</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">MHRA Registration</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Database className="h-3.5 w-3.5" /> MHRA DORS Portal Registration
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              MHRA Medical Device Registration &amp; DORS Readiness
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              MHRA registration is required before applicable medical devices and IVDs are placed on the Great Britain market. Registration should be the final expression of an already-established regulatory pathway—not the point at which classification, certification or manufacturer data issues are discovered.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Prepare Your MHRA Registration <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* Our MHRA Registration Support */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  12 Core MHRA Registration Services
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {registrationSupport.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Review Before Registration */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h3 className="text-lg font-extrabold text-navy">
                  What We Review Before Registration Filing
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {reviewBeforeItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-2.5"
                    >
                      <span className="text-xs font-bold text-[#0b3a96] bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[12.5px] font-medium text-navy/85 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MHRA Registration Readiness */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h3 className="text-lg font-extrabold text-navy">
                  MHRA Registration Readiness — Established Before Filing
                </h3>
                <p className="text-[13px] text-navy/75 font-medium leading-relaxed">
                  Before the device is entered into DORS, the manufacturer should demonstrate a coherent regulatory basis. The registration dataset must be traceable to the product's certification, legal manufacturer records and labeling.
                </p>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {readinessElements.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[12.5px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Approach</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Quality-Checking the Dataset Against Evidence
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We quality-check the registration dataset against the underlying regulatory evidence before submission. Inconsistent legal manufacturer details, device attributes, classification, certificate information or UKRP data can create avoidable regulatory problems later, particularly during authority correspondence, vigilance or change management.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  DORS Statutory Fee
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>MHRA assesses a statutory fee of £240 per registration application (covering up to 20,000 devices per GMDN group). We ensure your application is 100% error-free to prevent rejected filings.</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Register with MHRA</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Have our regulatory team verify your technical data and submit your DORS registration.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Start MHRA Registration <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Complete Your MHRA Medical Device &amp; IVD Registration with Total Confidence"
        description="Our regulatory informatics specialists verify your DORS dataset and secure your official MHRA public register listing."
      />
    </>
  );
}
