import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Pill, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  FileText, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  Layers, 
  Send, 
  Lock, 
  AlertCircle,
  FileCheck,
  Building2,
  Check,
  Award,
  Globe2,
  FlaskConical,
  Store,
  FileSignature,
  FileSpreadsheet
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/drug-licenses-for-importers")({
  head: () => ({
    meta: [
      { title: "Drug Import Licence Registration CDSCO India | Form 41, Form 10/10-A, DMF & PMF" },
      {
        name: "description",
        content:
          "Comprehensive pharmaceutical regulatory consulting for drug import in India. End-to-end support for Form 41 Registration Certificate, Form 10/10-A Import Licence, Form 40, Form 8/8-A, Form 11 Test Licence, Plant Master File (PMF), Drug Master File (DMF open part), API import and biologics registration.",
      },
      {
        name: "keywords",
        content:
          "Drug Import Licence India, Registration Certificate Form 41 CDSCO, Import Licence Form 10 / 10-A, Form 40 application support, Form 8 / 8-A support, Test Licence Form 11, Foreign manufacturer registration India, Overseas manufacturing site registration, Plant Master File (PMF) CDSCO, Drug Master File (DMF) open part, API import registration India, Phytopharmaceutical & biologics regulatory support, NKB Regovanta",
      },
      { property: "og:title", content: "Drug Import Licence Registration CDSCO India | Form 41, Form 10 | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "CDSCO pharmaceutical registration, overseas site inspection, Form 41 RC, Form 10 Import License, and DMF/PMF dossier filing in India.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/drug-licenses-for-importers" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/drug-licenses-for-importers" },
    ],
  }),
  component: DrugLicensesForImportersPage,
});

const drugLicenseTypes = [
  {
    icon: FileCheck,
    title: "Registration Certificate (Form 41)",
    category: "Site & Product Registration",
    description:
      "Mandatory statutory registration issued by CDSCO confirming that the overseas drug manufacturing facility and products comply with Indian GMP and quality benchmarks. Filed via Form 40 on the SUGAM portal.",
    details: [
      "Covers foreign manufacturing sites & specific drug formulations",
      "Application filed in statutory Form 40 with Plant Master File",
      "Valid for 3 years with simplified renewal pathways",
      "Prerequisite before obtaining Form 10 Import Licenses",
    ],
  },
  {
    icon: Pill,
    title: "Drug Import License (Form 10 / 10-A)",
    category: "Commercial Importation Permit",
    description:
      "Statutory license authorizing the commercial importation of bulk active pharmaceutical ingredients (APIs), finished formulations, and biological products into Indian territory.",
    details: [
      "Form 10 for general drugs, OTC products, and non-Schedule X items",
      "Form 10-A for Schedule X psychotropic and narcotic substances",
      "Issued against valid Form 41 Registration Certificate & Form 9",
      "Renewable every 3 years under CDSCO guidelines",
    ],
  },
  {
    icon: FlaskConical,
    title: "Test License for Importers (Form 11)",
    category: "R&D & Quality Testing",
    description:
      "Special permit granted under Form 11 (applied via Form 12) allowing the import of small trial quantities of drugs for examination, laboratory testing, clinical batch evaluation, or regulatory analysis.",
    details: [
      "Applied via Form 12 on the SUGAM portal",
      "Fast-track processing for analytical laboratory validation",
      "Permits importation of unapproved or clinical trial batches",
      "Strict customs reconciliation and end-use logging",
    ],
  },
  {
    icon: Store,
    title: "Wholesale Drug License (Form 20-B / 21-B)",
    category: "State FDA Distribution License",
    description:
      "Mandatory prerequisite license granted by the State Licensing Authority (SLA) enabling the importer or local entity to store, warehouse, sell, and distribute pharmaceutical products across India.",
    details: [
      "Form 20-B for non-Schedule C/C1 drugs & Form 21-B for biologicals",
      "Requires registered qualified pharmacist (RP) supervision",
      "Mandates compliant storage, temperature logging & GxP premises",
      "Essential credential before CDSCO Form 8/10 submission",
    ],
  },
  {
    icon: Globe2,
    title: "Authorized Indian Agent (AIR) Support",
    category: "Legal Regulatory Representation",
    description:
      "Legal representation and registration holding service for overseas pharmaceutical manufacturers without an established physical subsidiary in India.",
    details: [
      "Holds wholesale drug licenses (20B/21B) & SUGAM corporate account",
      "Issues statutory Form 9 undertaking to authorized importers",
      "Acts as official liaison for CDSCO audits & technical notices",
      "Manages post-approval changes, site variations & pharmacovigilance",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Rule 37 & Post-Approval Lifecycle",
    category: "Packaging & Variation Advisory",
    description:
      "Statutory approvals for patent or proprietary medicines imported in bulk for retail packaging, shelf-life extensions, batch release tracking, and label adaptations under Indian Rules.",
    details: [
      "Rule 37 permissions for bulk import & local secondary packaging",
      "Shelf-life extension & accelerated stability filings",
      "Post-approval site variation & manufacturer transfer filings",
      "Pharmacovigilance (PvPI) & Periodic Safety Update Reports (PSUR)",
    ],
  },
];

const drugCategories = [
  {
    title: "New Chemical Entities (NCE) & New Drugs",
    desc: "Active ingredients or pharmaceutical formulations not previously approved in India, requiring specialized clinical dossier review and Subject Expert Committee (SEC) presentations.",
  },
  {
    title: "Active Pharmaceutical Ingredients (APIs)",
    desc: "Bulk drug substances intended for domestic finished formulation manufacturing, requiring complete Drug Master File (DMF) and Open Part submissions.",
  },
  {
    title: "Fixed Dose Combinations (FDCs)",
    desc: "Formulations containing two or more therapeutic active ingredients in a fixed ratio, evaluated for medical rationale, synergy, and Indian therapeutic justification.",
  },
  {
    title: "Phytopharmaceuticals & Biologics",
    desc: "Plant-derived purified botanical drugs, biosimilars, vaccines, recombinant therapeutics, and blood products with specialized cold-chain and central lab testing mandates.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Wholesale License & Entity Setup",
    desc: "Securing State FDA Wholesale Licenses (Form 20B/21B) with registered pharmacist appointment and SUGAM corporate account configuration.",
  },
  {
    step: "02",
    title: "Registration Certificate (Form 40 → Form 41)",
    desc: "Dossier compilation (Plant Master File, GMP, DMF, COPP) and submission to CDSCO Central Licensing Authority for foreign site & product approval.",
  },
  {
    step: "03",
    title: "Form 9 Undertaking & Import License (Form 8 → Form 10)",
    desc: "Execution of statutory Form 9 authorization and filing Form 8 application to obtain the commercial Form 10 Import License.",
  },
  {
    step: "04",
    title: "Customs Clearance & Post-Import Governance",
    desc: "Facilitating Port Health Officer (PHO) sampling, central lab release, and ongoing compliance with pharmacovigilance and renewal calendars.",
  },
];

const faqs = [
  {
    q: "Who is eligible to apply for a Drug Import License in India?",
    a: "Any entity holding a valid wholesale drug license (Form 20B/21B/21C) issued by a State Drugs Licensing Authority, or a licensed domestic pharmaceutical manufacturer (Form 25/28), can apply for a CDSCO Drug Import License. Foreign manufacturers must appoint an Authorized Indian Agent holding these credentials.",
  },
  {
    q: "What is the function of Form 9 in the drug import process?",
    a: "Form 9 is a statutory undertaking issued either by the overseas manufacturer or by the Authorized Indian Agent confirming that the imported drug batches comply with the specifications approved in the Registration Certificate (Form 41). If issued directly by the foreign manufacturer, it must be apostilled or attested by the Indian Embassy in the country of origin.",
  },
  {
    q: "What is the validity period of Form 41 (Registration Certificate) and Form 10 (Import License)?",
    a: "Both the Registration Certificate (Form 41) and the Drug Import License (Form 10) are valid for a period of 3 years from the date of issuance, after which renewal applications must be submitted.",
  },
  {
    q: "Is an India-specific label mandatory for imported pharmaceutical drugs?",
    a: "Yes. In accordance with the Drugs and Cosmetics Rules, imported drug packaging must feature India-specific labeling details, including the Import License number (Form 10), Registration Certificate number (Form 41), name and address of the importer/Authorized Agent, and storage conditions.",
  },
  {
    q: "What is the procedure for importing small trial quantities for testing or analysis?",
    a: "For analytical testing, research, or clinical trial batches, importers can apply for a Test License under Form 11 by submitting an application in Form 12 on the CDSCO SUGAM portal. This allows swift customs clearance without requiring a full commercial Form 10 license.",
  },
  {
    q: "What is Rule 37 permission under the Drugs and Cosmetics Rules?",
    a: "Rule 37 governs the importation of proprietary medicines in bulk containers intended for repacking and retail packaging in India. Importers must secure explicit prior permission from the licensing authority before importing bulk drugs under this provision.",
  },
  {
    q: "How does NKB Regovanta assist foreign pharmaceutical exporters?",
    a: "NKB Regovanta acts as your end-to-end regulatory partner and Authorized Indian Representative. We handle State wholesale licensing, Plant Master File audits, SUGAM portal filings, Form 41/Form 10 approvals, laboratory liaison, and ongoing pharmacovigilance (PvPI/PSURs).",
  },
];

function DrugLicensesForImportersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    drugType: "Finished Pharmaceutical Formulations",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "52b40877-c175-4aca-852e-bb2a7e62a86a",
          subject: `Drug Import License Inquiry from ${formState.name} (${formState.company})`,
          from_name: "NKB Regovanta Website",
          ...formState,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          drugType: "Finished Pharmaceutical Formulations",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0b1f3a] via-[#102d54] to-[#1a447a] text-white overflow-hidden pt-8 pb-16 lg:pb-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5C754_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#F5C754]">Drug Licenses for Importers</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5C754] text-xs font-bold tracking-wide uppercase">
                <Pill className="h-3.5 w-3.5" />
                CDSCO Pharmaceutical Import Regulations
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-white">
                Drug Licenses for Importers in India
                <span className="block text-[#F5C754] mt-2">
                  Form 10, Form 41 & Wholesale Authorizations
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl font-normal">
                End-to-end CDSCO regulatory licensing for pharmaceutical importers and global manufacturers. We manage Form 41 Registration Certificates, Form 10 Import Licenses, Form 11 Test Licenses, and Authorized Indian Agent (AIR) representation under the Drugs and Cosmetics Act.
              </p>

              {/* Badges */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Form 41 Registration Certificate (Form 40 Filing)",
                  "Form 10 & 10-A Drug Import Licenses (Form 8)",
                  "Form 11 Test Licenses for Clinical Batches & R&D",
                  "Authorized Indian Representative (AIR / Form 9)",
                  "State FDA Wholesale Drug Licenses (Form 20B/21B)",
                  "Rule 37 Bulk Repackaging & Post-Approval Lifecycle",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#license-grid"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F5C754] hover:bg-[#eab336] text-[#0b1f3a] font-bold text-sm shadow-lg shadow-black/20 transition-all"
                >
                  View Drug License Pathways
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm transition-all"
                >
                  Request Import Strategy
                </Link>
              </div>
            </div>

            {/* Right Col: Consultation Form */}
            <div id="drug-form" className="lg:col-span-5">
              <div className="bg-white text-[#0f2340] rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20">
                <div className="mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-2.5 py-1 rounded">
                    Pharma Import Licensing
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0f2340] mt-2">
                    Obtain Your Drug Import License
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Connect with our CDSCO pharmaceutical regulatory experts for dossier scoping and timeline roadmaps.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-3">
                    <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                    <h4 className="font-bold text-green-900 text-lg">Inquiry Received!</h4>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Thank you. A senior pharmaceutical regulatory consultant will review your molecule portfolio and contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 text-xs font-bold text-[#0b3a96] underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Person Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Mr. / Ms. Full Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Business Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 / Country Code"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          placeholder="Manufacturer / Importer"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Product Classification</label>
                        <select
                          value={formState.drugType}
                          onChange={(e) => setFormState({ ...formState, drugType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96] bg-white"
                        >
                          <option value="Finished Pharmaceutical Formulations">Finished Formulations (Form 10)</option>
                          <option value="Active Pharmaceutical Ingredients (APIs)">Active Pharmaceutical Ingredients (APIs)</option>
                          <option value="Schedule X Prescription Drugs">Schedule X Drugs (Form 10-A)</option>
                          <option value="Biologics / Biosimilars / Vaccines">Biologics / Biosimilars / Vaccines</option>
                          <option value="Test License (Form 11 / R&D)">Test License (Form 11 / R&D)</option>
                          <option value="Wholesale License (Form 20B/21B)">Wholesale License (Form 20B/21B)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Molecule & Regulatory Requirements</label>
                      <textarea
                        rows={2}
                        placeholder="Provide details on active molecules, dosage forms, foreign manufacturing country, and desired launch timeline..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-600 font-medium">
                        An error occurred while submitting. Please contact us directly at contact@nkbregovanta.com.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#0b3a96] hover:bg-[#082b70] text-white font-bold text-sm shadow-md transition-colors disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        "Evaluating Strategy..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Request Drug Import Strategy
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3" />
                      Strict NDA & Confidentiality Protection Assured.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGULATORY FRAMEWORK OVERVIEW */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
                Regulatory Governance
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] leading-tight">
                How Drug Imports are Regulated in India
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                The importation of pharmaceutical products into India is governed by the <strong>Drugs and Cosmetics Act, 1940</strong> and the <strong>Drugs and Cosmetics Rules, 1945</strong>, enforced by the Central Drugs Standard Control Organisation (CDSCO) under the Ministry of Health and Family Welfare.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                To distribute imported pharmaceuticals lawfully in India, importers and foreign OEMs must complete a dual-layered regulatory process: first securing a <strong>Registration Certificate (Form 41)</strong> for the overseas manufacturing site and products, followed by obtaining a commercial <strong>Drug Import License (Form 10 or Form 10-A)</strong>.
              </p>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-[#0b3a96] text-sm uppercase tracking-wider mb-2">
                  Prerequisite: Wholesale License & Authorized Agent
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Foreign manufacturers without an Indian office must appoint an <strong>Authorized Indian Agent</strong> who holds valid Wholesale Drug Licenses (Form 20B/21B) from the State FDA to act as the legal registration holder and commercial liaison.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="font-bold text-[#0f2340] text-lg border-b border-gray-100 pb-3">
                  Therapeutic & Regulatory Classes Governed:
                </h3>
                <div className="space-y-3">
                  {drugCategories.map((cat, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-xl">
                      <h4 className="font-bold text-xs text-gray-900 mb-1">{cat.title}</h4>
                      <p className="text-[11px] text-gray-600 leading-relaxed">{cat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 CORE DRUG LICENSES & APPROVAL PATHWAYS */}
      <section id="license-grid" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Full Spectrum Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              Drug Import Licensing & Approvals Portfolio
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              NKB Regovanta delivers 360-degree regulatory execution across pre-market authorizations, import licenses, and post-market compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drugLicenseTypes.map((license, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-7 border border-gray-200 flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0b3a96] text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <license.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96]">
                    {license.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0f2340] mt-1 mb-3">
                    {license.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-5">
                    {license.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-200">
                    {license.details.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="h-3.5 w-3.5 text-[#0b3a96] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP PROCESS */}
      <section className="py-16 lg:py-20 bg-[#0f2340] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F5C754]">
              Systematic Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The 4-Stage Drug Import Approval Process
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              From corporate credentialing to final customs clearance, NKB Regovanta streamlines every step of your drug import licensing journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between hover:bg-white/10 transition-all">
                <span className="font-black text-4xl text-[#F5C754]/40 mb-4 block">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Expert Clarifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              Frequently Asked Questions on Drug Import Licensing
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Key insights into CDSCO procedures, Form 9 undertakings, wholesale licenses, and statutory timelines in India.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0f2340] hover:text-[#0b3a96] transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#0b3a96]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <CTABand
        title="Planning to import pharmaceutical drugs or APIs into India?"
        description="Connect with NKB Regovanta’s pharmaceutical regulatory consultants for expert guidance on Form 41 site registration and Form 10 import licensing."
        action="Consult a Pharmaceutical Specialist"
      />
    </div>
  );
}
