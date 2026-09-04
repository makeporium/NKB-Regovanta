import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building2,
  Globe2,
  Layers,
  ArrowRight,
  Sparkles,
  Activity,
  AlertCircle,
  HelpCircle,
  Stethoscope,
  Cpu,
  Microscope,
  Award,
  Send,
  Loader2,
  CheckCircle,
  ChevronRight,
  Sliders,
  FileCheck2,
  Workflow,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/services/india/medical-devices")({
  head: () => ({
        meta: [
            { title: "CDSCO Medical Device Import & Manufacturing Licence India | MD-14, MD-15, MD-3 to MD-9" },
            {
                name: "description",
                content: "Expert CDSCO medical device regulatory consulting in India. Import Licence (MD-14/MD-15), Class A GSR 777(E), Manufacturing Licences (MD-3/5, MD-7/9), Loan Licences (MD-4/6, MD-8/10), Test Licences (MD-12/13, MD-16/17), Investigational Import (MD-18/19, MD-24/25, MD-26/27), Indian Authorized Agent (AIR/IAA), SUGAM portal support and predicate strategy.",
            },
            {
                name: "keywords",
                content: "CDSCO Medical Device Import Licence, MD-14 application, MD-15 import licence, Class A GSR 777(E) registration, Investigational Device Import MD-18 MD-19, Clinical evaluation import permission MD-24 MD-25, Novel medical device import MD-26 MD-27, IVD test licence MD-16 MD-17, Class A & B manufacturing licence MD-3 MD-5, Class C & D manufacturing licence MD-7 MD-9, Loan manufacturing licence MD-4 MD-6 / MD-8 MD-10, Test licence for manufacturing MD-12 MD-13, Indian Authorized Agent (AIR / IAA), SUGAM portal registration support, CDSCO product classification & predicate strategy, Medical device regulatory consultant India, NKB Regovanta",
            },
            { property: "og:title", content: "CDSCO Medical Device Import & Manufacturing Licence India | NKB Regovanta" },
            {
                property: "og:description",
                content: "Complete CDSCO medical device licensing support: MD-14/15 import licences, MD-3 to MD-9 manufacturing, Class A GSR 777(E), and Indian Authorized Agent services.",
            },
            { property: "og:url", content: "https://www.nkbregovanta.com/services/india/medical-devices" },
{ property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CDSCO Medical Device Import & Manufacturing Licence India | MD-14, MD-15, MD-3 to MD-9" },
      { name: "twitter:description", content: "Expert CDSCO medical device regulatory consulting in India. Import Licences (MD-14/MD-15), Class A GSR 777(E) registration, Manufacturing Licences (MD-3/5/7/9), Loan Licences (MD-4/6/8/10), Investigational Devices (MD..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
        ],
        links: [
            { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/medical-devices" },
        ],
    }),
    component: MedicalDevicesIndiaPage,
});

function MedicalDevicesIndiaPage() {
  const [activeImporterTab, setActiveImporterTab] = useState<"air" | "import" | "test">("air");
  const [activeMfgTab, setActiveMfgTab] = useState<"ab" | "cd" | "test">("ab");
  const [activeNewDeviceTab, setActiveNewDeviceTab] = useState<"investigation" | "no-predicate">("investigation");

  // Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    deviceClass: "Class B",
    serviceType: "Import License (MD-14/15)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "52b40877-c175-4aca-852e-bb2a7e62a86a",
          subject: `New Medical Device Regulatory Inquiry - ${formState.name} (${formState.company})`,
          from_name: "NKB Regovanta Inquiries",
          ...formState,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError("Submission failed. Please email us directly at contact@nkbregovanta.com");
      }
    } catch {
      setSubmitError("Network error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-navy selection:bg-[#0b3a96] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#071b36] via-[#0b274e] to-[#0f3468] text-white pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#F5C754]" />
              <span>MDR 2017 & CDSCO Comprehensive Regulatory Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Medical Device <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-amber-200">Regulatory Services</span> in India
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-blue-100/80 leading-relaxed max-w-3xl">
              From risk-based Class A–D classification and SUGAM online portal filings to Authorized Indian Representative (AIR) representation, Central & State FDA manufacturing licenses, and clinical investigation permissions—NKB Regovanta delivers seamless market access across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry-form"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C754] to-[#e5b53e] px-7 py-3.5 text-sm font-bold text-navy-deep shadow-lg shadow-amber-500/20 hover:brightness-105 transition-all"
              >
                Request CDSCO Regulatory Assessment
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#forms-overview"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all"
              >
                View Statutory Forms & Flowcharts
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F5C754]">100%</div>
                <div className="text-xs text-blue-200/70 mt-1">CDSCO Statutory Compliance</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F5C754]">Class A–D</div>
                <div className="text-xs text-blue-200/70 mt-1">Full Scope Spectrum Coverage</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F5C754]">MDR 2017</div>
                <div className="text-xs text-blue-200/70 mt-1">GSR Notified Rules Alignment</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F5C754]">AIR & Form 9</div>
                <div className="text-xs text-blue-200/70 mt-1">In-Country Legal Representation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGULATORY OVERVIEW & NEW DEVICE CONCEPTS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                <ShieldCheck className="h-4 w-4" />
                Statutory Governance & Standards
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] leading-tight">
                Navigating the Modern Medical Device Landscape in India
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Medical devices in India are governed under the <strong>Drugs and Cosmetics Act, 1940</strong> and the comprehensive <strong>Medical Devices Rules, 2017 (MDR 2017)</strong>. With progressive regulatory transitions and the mandatory registration of all medical devices under CDSCO notifications, India enforces stringent risk-based controls to ensure safety, quality, and clinical performance.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Under the MDR 2017 framework, products are classified into four risk categories: <strong>Class A, B, C, and D</strong>. Approvals are distributed between the State Licensing Authorities (SLA) for Class A and B manufacturing, and the Central Licensing Authority (CDSCO Headquarters, New Delhi) for Class C and D manufacturing, clinical trials, and all import licensing.
              </p>
              <div className="p-5 rounded-2xl bg-[#f0f6ff] border border-blue-100 space-y-2">
                <h3 className="text-sm font-bold text-[#0b3a96] flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  What is a "New Device – First Time in India"?
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  As per CDSCO MDR 2017 rules, a medical device is designated as a <em>"New Device"</em> if neither the device itself nor a substantially equivalent predicate device is currently approved and registered in India. Additionally, approved devices introducing new therapeutic indications, altered raw materials, modified energy mechanisms, or novel software algorithms are also classified as new devices requiring specialized technical evaluation and clinical investigation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#0f2340] to-[#1a3a6b] rounded-3xl p-7 text-white shadow-xl space-y-6">
                <h3 className="text-xl font-bold border-b border-white/15 pb-4">
                  Why NKB Regovanta?
                </h3>
                <ul className="space-y-4 text-sm text-blue-100/90">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>End-to-End SUGAM Management:</strong> Complete digital dossier preparation, upload, and fee optimization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>Authorized Indian Representative:</strong> Holding active wholesale drug and medical device distribution licenses (Form 20B/21B).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>Technical File & Gap Audit:</strong> ISO 13485 QMS alignment, Device Master File (DMF), and Plant Master File (PMF) curation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>Subject Expert Committee (SEC) Defense:</strong> Dedicated technical liaison for novel device clinical investigations and MDAC panels.</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="block w-full text-center py-3 rounded-xl bg-white font-bold text-[#0f2340] hover:bg-blue-50 transition-colors text-sm"
                  >
                    Speak with a CDSCO Specialist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RISK-BASED CLASSIFICATION SECTION */}
      <section className="py-16 sm:py-20 bg-[#f1f5f9] border-t border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-white px-3 py-1 rounded-md border border-gray-200 shadow-xs">
              Risk Hierarchy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
              Classification of Medical Devices in India
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              CDSCO classifies medical devices into four risk parameters, dictating whether licensing authority lies with State FDAs or Central CDSCO Headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Class A */}
            <div className="bg-white rounded-2xl p-6 border-t-4 border-emerald-500 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase">
                  Class A
                </span>
                <span className="text-xs font-bold text-emerald-600">Low Risk</span>
              </div>
              <h3 className="text-lg font-bold text-[#0f2340] mb-2">Non-Invasive / Diagnostic</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Simple devices with minimal direct biological risk. Most Class A non-sterile devices follow an expedited self-declaration / online registration pathway.
              </p>
              <div className="text-xs space-y-1.5 text-gray-700 border-t border-gray-100 pt-3">
                <div className="font-semibold text-gray-900">Examples:</div>
                <p>• Surgical dressings, alcohol swabs, cotton wool</p>
                <p>• Digital & infrared thermometers</p>
                <p>• Examination gloves & manual wheelchairs</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                <span>Authority: State SLA / CLA</span>
                <Link to="/services/india/class-a-import" className="hover:underline flex items-center gap-1">
                  View Form <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Class B */}
            <div className="bg-white rounded-2xl p-6 border-t-4 border-blue-500 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold uppercase">
                  Class B
                </span>
                <span className="text-xs font-bold text-blue-600">Low-to-Moderate</span>
              </div>
              <h3 className="text-lg font-bold text-[#0f2340] mb-2">Invasive / Short-Term Use</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Devices interacting with body cavities or skin barriers for limited duration. Requires Notified Body audit verification.
              </p>
              <div className="text-xs space-y-1.5 text-gray-700 border-t border-gray-100 pt-3">
                <div className="font-semibold text-gray-900">Examples:</div>
                <p>• Hypodermic needles & blood transfusion sets</p>
                <p>• Suction pumps & anesthesia breathing circuits</p>
                <p>• Dental filling materials & surgical drapes</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
                <span>Authority: State FDA (Mfg)</span>
                <Link to="/services/india/mfg-class-a-b" className="hover:underline flex items-center gap-1">
                  View Form <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Class C */}
            <div className="bg-white rounded-2xl p-6 border-t-4 border-amber-500 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-extrabold uppercase">
                  Class C
                </span>
                <span className="text-xs font-bold text-amber-600">Moderate-to-High</span>
              </div>
              <h3 className="text-lg font-bold text-[#0f2340] mb-2">Implantable / Active Systems</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Surgically invasive devices or active diagnostic hardware requiring extensive clinical evidence and CLA inspection.
              </p>
              <div className="text-xs space-y-1.5 text-gray-700 border-t border-gray-100 pt-3">
                <div className="font-semibold text-gray-900">Examples:</div>
                <p>• Hemodialysis machines & dialyzers</p>
                <p>• Mechanical lung ventilators</p>
                <p>• Orthopedic bone fixation plates & screws</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-amber-700 font-semibold">
                <span>Authority: CDSCO CLA Central</span>
                <Link to="/services/india/mfg-class-c-d" className="hover:underline flex items-center gap-1">
                  View Form <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Class D */}
            <div className="bg-white rounded-2xl p-6 border-t-4 border-rose-600 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-extrabold uppercase">
                  Class D
                </span>
                <span className="text-xs font-bold text-rose-600">High Risk</span>
              </div>
              <h3 className="text-lg font-bold text-[#0f2340] mb-2">Life-Supporting / Critical</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Permanent implants, cardiovascular, neurological, or life-sustaining technologies subject to supreme regulatory scrutiny.
              </p>
              <div className="text-xs space-y-1.5 text-gray-700 border-t border-gray-100 pt-3">
                <div className="font-semibold text-gray-900">Examples:</div>
                <p>• Coronary drug-eluting stents & heart valves</p>
                <p>• Implantable cardiac pacemakers & ICDs</p>
                <p>• Neurological deep brain stimulators & vascular grafts</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-rose-700 font-semibold">
                <span>Authority: CDSCO CLA Central</span>
                <Link to="/services/india/mfg-class-c-d" className="hover:underline flex items-center gap-1">
                  View Form <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATUTORY FORMS MASTER MATRIX */}
      <section id="forms-overview" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Form Reference Index
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
              Overview of Statutory Application & Grant Forms
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              The Central Drugs Standard Control Organization specifies distinct statutory forms for importers and domestic manufacturers based on device class and operational intent.
            </p>
          </div>

          <div className="space-y-10">
            {/* Table 1: Existing Devices */}
            <div className="bg-[#f8fafc] rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
              <div className="bg-[#0f2340] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-base flex items-center gap-2.5">
                  <FileCheck2 className="h-5 w-5 text-[#F5C754] shrink-0" />
                  Existing / Predicate Medical Devices
                </h3>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-blue-200 font-medium">Standard Pathway</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100/90 text-gray-700 font-bold border-b border-gray-200">
                    <tr>
                      <th className="py-3.5 px-5 w-[18%]">Applicant</th>
                      <th className="py-3.5 px-5 w-[18%]">Risk / Class</th>
                      <th className="py-3.5 px-5 w-[34%]">Type of License</th>
                      <th className="py-3.5 px-5 w-[30%]">Statutory Forms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0b3a96]">Importer</td>
                      <td className="py-3.5 px-5">Class A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Importer License</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-14</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-15</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0b3a96]" rowSpan={2}>Manufacturer</td>
                      <td className="py-3.5 px-5">Class A, B</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Manufacturing License (SLA)</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-3</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-5</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">Class A, B</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Loan License (SLA)</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-4</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-6</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0b3a96]" rowSpan={2}>Manufacturer</td>
                      <td className="py-3.5 px-5">Class C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Manufacturing License (CLA)</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-7</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-9</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">Class C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Loan License (CLA)</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-8</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-10</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: New Devices */}
            <div className="bg-[#f8fafc] rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
              <div className="bg-[#0b3a96] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-base flex items-center gap-2.5">
                  <Sparkles className="h-5 w-5 text-[#F5C754] shrink-0" />
                  New Medical Devices (Without Predicate)
                </h3>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-blue-100 font-medium">Special CLA Filings</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100/90 text-gray-700 font-bold border-b border-gray-200">
                    <tr>
                      <th className="py-3.5 px-5 w-[18%]">Applicant</th>
                      <th className="py-3.5 px-5 w-[18%]">Risk / Class</th>
                      <th className="py-3.5 px-5 w-[34%]">Type of License / Filing</th>
                      <th className="py-3.5 px-5 w-[30%]">Statutory Forms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0b3a96]" rowSpan={3}>Importer</td>
                      <td className="py-3.5 px-5">Class A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Clinical Investigation Permission</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-22</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-23</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">Class A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">New Device Import Permission</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-26</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-27</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">Class A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Test License for Import</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-16</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-17</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0b3a96]" rowSpan={3}>Manufacturer</td>
                      <td className="py-3.5 px-5">Class A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Clinical Investigation Permission</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-22</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-23</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">Class A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">New Device Mfg Permission</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-26</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-27</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">Class A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Test License for Manufacturing</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-12</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-13</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATHWAY FOR IMPORTERS WITH WORKFLOW */}
      <section id="for-importers" className="py-16 sm:py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Overseas Manufacturers & Trade
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
                Regulatory Pathway for Medical Device Importers
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl">
                Foreign manufacturers cannot file applications directly to CDSCO and must appoint a legally recognized Authorized Indian Representative (AIR) holding a valid Wholesale License.
              </p>
            </div>
            <Link
              to="/industries/medical-devices/india/for-importer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0b3a96] hover:text-[#082b70] shrink-0"
            >
              Detailed Importer Portal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Workflow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs relative">
              <div className="text-xs font-extrabold text-blue-600 mb-1">STEP 01</div>
              <h4 className="font-bold text-[#0f2340] text-sm">Classification & Predicate Review</h4>
              <p className="text-xs text-gray-500 mt-2">
                Determine device risk (Class A, B, C, or D), verify CDSCO notified lists, and establish predicate equivalence.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs relative">
              <div className="text-xs font-extrabold text-blue-600 mb-1">STEP 02</div>
              <h4 className="font-bold text-[#0f2340] text-sm">AIR Appointment & Form 9</h4>
              <p className="text-xs text-gray-500 mt-2">
                Execute Power of Attorney (PoA) and Form 9 authorization naming NKB Regovanta as your in-country representative.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs relative">
              <div className="text-xs font-extrabold text-blue-600 mb-1">STEP 03</div>
              <h4 className="font-bold text-[#0f2340] text-sm">SUGAM Application Filing (MD-14)</h4>
              <p className="text-xs text-gray-500 mt-2">
                Compile Plant Master File, Device Master File, ISO 13485 certificate, and Free Sale Certificate (FSC) for submission.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs relative">
              <div className="text-xs font-extrabold text-emerald-600 mb-1">STEP 04</div>
              <h4 className="font-bold text-[#0f2340] text-sm">Grant of Import License (MD-15)</h4>
              <p className="text-xs text-gray-500 mt-2">
                CDSCO evaluation, response to technical queries, and issuance of perpetual Form MD-15 import license.
              </p>
            </div>
          </div>

          {/* Interactive Importer Tabs */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-6">
              <button
                onClick={() => setActiveImporterTab("air")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeImporterTab === "air"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Authorized Agent / Registration Holder (AIR)
              </button>
              <button
                onClick={() => setActiveImporterTab("import")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeImporterTab === "import"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Import License (Form MD-14 & MD-15)
              </button>
              <button
                onClick={() => setActiveImporterTab("test")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeImporterTab === "test"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Test License for Import (Form MD-16 & MD-17)
              </button>
            </div>

            {activeImporterTab === "air" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Authorized Indian Representative (AIR) & Registration Holder Support
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Under the Medical Device Rules, 2017, non-Indian medical device manufacturers must appoint an authorized agent residing in India who possesses a valid wholesale drug license (Form 20B/21B) issued by the State Licensing Authority. The AIR is legally responsible for regulatory compliance, product traceability, post-market vigilance, and handling communications with CDSCO.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-700 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <div>• Independent license holding (prevents commercial distributor lock-in)</div>
                  <div>• Management of post-market adverse event reporting (Materiovigilance)</div>
                  <div>• Coordination of post-approval changes and variation filings</div>
                  <div>• Official custodian of technical dossiers and recall protocols</div>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to="/industries/medical-devices/india/for-importer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] hover:underline"
                  >
                    Read More About AIR Support <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors shadow-xs"
                  >
                    Contact for AIR Support <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {activeImporterTab === "import" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Permission for Commercial Import License (Form MD-14 & Form MD-15)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The central licensing authority CDSCO mandates that import applications for Class A, B, C, and D devices be filed in <strong>Form MD-14</strong> through the online SUGAM portal. Upon satisfactory evaluation of technical files, Free Sale Certificates (FSC), Plant Master Files (PMF), and Device Master Files (DMF), CDSCO grants the official Import License in <strong>Form MD-15</strong>.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-700 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <div>• Applicable for Class A, B, C, and D imported medical devices</div>
                  <div>• Perpetual license validity subject to retention fee payment every 5 years</div>
                  <div>• Grouping into distinct product families and accessory schedules</div>
                  <div>• Seamless incorporation of multiple foreign manufacturing sites</div>
                </div>
                <div className="pt-2">
                  <Link
                    to="/services/india/class-a-import"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] hover:underline"
                  >
                    Read More About MD-14/15 Import Licensing <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {activeImporterTab === "test" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Test License for Medical Device Import (Form MD-16 & Form MD-17)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Manufacturers or importers seeking to bring small quantities of unapproved medical devices into India for testing, evaluation, demonstration, training, or clinical investigations must obtain a Test License. Application is submitted under <strong>Form MD-16</strong> and permission is granted in <strong>Form MD-17</strong> by CDSCO.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-700 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <div>• Import of small sample batches for central laboratory performance testing</div>
                  <div>• Devices intended for exhibitions, live surgical training, or hospital trials</div>
                  <div>• Valid for up to 3 years from the date of grant</div>
                  <div>• Dedicated customs NOC clearance facilitation</div>
                </div>
                <div className="pt-2">
                  <Link
                    to="/services/india/personal-use"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] hover:underline"
                  >
                    Read More About Test Licenses <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. PATHWAY FOR MANUFACTURERS WITH TABS */}
      <section id="for-manufacturers" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Domestic Production & Make in India
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
                Manufacturing & Loan Licensing Framework
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-2xl">
                Manufacturing approvals in India are bifurcated between State Licensing Authorities (Class A & B) and Central Licensing Authorities (Class C & D), requiring stringent plant layout audits and ISO 13485 conformity.
              </p>
            </div>
            <Link
              to="/services/india/mfg-class-a-b"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0b3a96] hover:text-[#082b70] shrink-0"
            >
              Manufacturing Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-[#f8fafc] rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-6">
              <button
                onClick={() => setActiveMfgTab("ab")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeMfgTab === "ab"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Class A & B Manufacturing / Loan (MD-5 & MD-6)
              </button>
              <button
                onClick={() => setActiveMfgTab("cd")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeMfgTab === "cd"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Class C & D Manufacturing / Loan (MD-9 & MD-10)
              </button>
              <button
                onClick={() => setActiveMfgTab("test")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeMfgTab === "test"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Test License to Manufacture (MD-12 & MD-13)
              </button>
            </div>

            {activeMfgTab === "ab" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  State FDA Manufacturing (Form MD-5) & Loan Licensing (Form MD-6)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Licensing for Class A (Low Risk) and Class B (Low-to-Moderate Risk) manufacturing falls under the jurisdiction of respective <strong>State Licensing Authorities (SLA / State FDA)</strong>. Applications are submitted via Form MD-3 (for manufacturing) or Form MD-4 (for loan licensing), followed by a mandatory third-party Notified Body audit before the grant of Form MD-5 or Form MD-6.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
                  <div>• Plant Master File & Site Layout architectural validation</div>
                  <div>• ISO 13485:2016 QMS Implementation & Notified Body audit readiness</div>
                  <div>• Cleanroom ISO Class 7/8 environmental validation compliance</div>
                  <div>• Complete liaison with State FDA drug controllers across all Indian states</div>
                </div>
                <div className="pt-2 flex gap-4 text-xs font-bold text-[#0b3a96]">
                  <Link to="/services/india/mfg-class-a-b" className="hover:underline flex items-center gap-1">
                    Class A/B Manufacturing (MD-5) <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link to="/services/india/loan-class-a-b" className="hover:underline flex items-center gap-1">
                    Class A/B Loan Licensing (MD-6) <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {activeMfgTab === "cd" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Central CDSCO Manufacturing (Form MD-9) & Loan Licensing (Form MD-10)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Manufacturing of Class C (Moderate-to-High Risk) and Class D (High Risk) medical devices falls directly under the <strong>Central Licensing Authority (CDSCO HQ, New Delhi)</strong>. Applications are filed via Form MD-7 (manufacturing) or Form MD-8 (loan licensing). A joint inspection team comprising CDSCO central medical device inspectors and subject matter experts conducts on-site audits before granting Form MD-9 or Form MD-10.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
                  <div>• Exhaustive Device Master File (DMF) & Risk Management File (ISO 14971)</div>
                  <div>• Sterilization validation (EtO / Gamma / E-beam) protocols and reports</div>
                  <div>• Joint Central CDSCO & Notified Body on-site technical inspection</div>
                  <div>• Accelerated query resolution and Subject Expert Committee (SEC) support</div>
                </div>
                <div className="pt-2 flex gap-4 text-xs font-bold text-[#0b3a96]">
                  <Link to="/services/india/mfg-class-c-d" className="hover:underline flex items-center gap-1">
                    Class C/D Manufacturing (MD-9) <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link to="/services/india/loan-class-c-d" className="hover:underline flex items-center gap-1">
                    Class C/D Loan Licensing (MD-10) <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {activeMfgTab === "test" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Test License for Device Manufacturing (Form MD-12 & Form MD-13)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Domestic manufacturers requiring production of pilot batches for testing, design verification, calibration, prototype demonstration, or clinical investigations must secure a Test License. Application is submitted via <strong>Form MD-12</strong> to the CLA/SLA, and permission is granted in <strong>Form MD-13</strong>.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
                  <div>• Crucial prerequisite before applying for full commercial MD-5 or MD-9</div>
                  <div>• Enables batch production for accredited testing in NABL/CDSCO labs</div>
                  <div>• Validity up to 3 years for continuous R&D validation</div>
                  <div>• Complete documentation assistance and batch record auditing</div>
                </div>
                <div className="pt-2">
                  <Link
                    to="/services/india/investigational-devices"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] hover:underline"
                  >
                    Read More About Manufacturing Test Licenses <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. INVESTIGATIONAL NEW DEVICES & CLINICAL TRIALS */}
      <section className="py-16 sm:py-20 bg-[#0f2340] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C754] bg-white/10 px-3 py-1 rounded-md border border-white/15">
              Novel Technologies & Clinical Trials
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3">
              Investigational New Device & Clinical Evaluation
            </h2>
            <p className="text-blue-100/80 text-sm sm:text-base mt-2">
              For innovative medical technologies without predicate devices in India, demonstrating clinical safety and performance under CDSCO GCP guidelines is mandatory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle className="h-4 w-4" />
                Class A & Class B Devices
              </div>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                Generally exempted from conducting local clinical investigations in India, provided safety, bench testing, and published clinical literature satisfy the licensing authority.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#F5C754] font-bold text-sm">
                <AlertCircle className="h-4 w-4" />
                Class C & Class D Devices
              </div>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                Devices lacking Free Sale Certificates (FSC) from recognized GHTF countries (USA, EU, Canada, Japan, Australia) or introducing novel clinical claims must conduct human clinical investigations in India.
              </p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-wrap gap-2 border-b border-white/15 pb-4 mb-6">
              <button
                onClick={() => setActiveNewDeviceTab("investigation")}
                className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeNewDeviceTab === "investigation"
                    ? "bg-[#F5C754] text-navy-deep font-extrabold shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Clinical Investigation Permission (Form MD-23)
              </button>
              <button
                onClick={() => setActiveNewDeviceTab("no-predicate")}
                className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeNewDeviceTab === "no-predicate"
                    ? "bg-[#F5C754] text-navy-deep font-extrabold shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                New Device Permission Without Predicate (Form MD-27)
              </button>
            </div>

            {activeNewDeviceTab === "investigation" && (
              <div className="space-y-3 text-sm text-blue-100/90">
                <h4 className="text-base font-bold text-white">
                  Permission to Conduct Clinical Investigation (Form MD-22 & MD-23)
                </h4>
                <p className="leading-relaxed">
                  Filing under Form MD-22 requires an Investigator’s Brochure, Clinical Investigation Protocol (CIP), Informed Consent Forms (ICF), Ethics Committee (EC) approvals, and pre-clinical animal safety data. Upon favorable recommendation by the Subject Expert Committee (SEC), CDSCO issues Form MD-23.
                </p>
                <div className="pt-2">
                  <Link
                    to="/services/india/investigational-devices"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F5C754] hover:underline"
                  >
                    Explore Clinical Investigation Services <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {activeNewDeviceTab === "no-predicate" && (
              <div className="space-y-3 text-sm text-blue-100/90">
                <h4 className="text-base font-bold text-white">
                  Commercial Import / Manufacturing of New Device (Form MD-26 & MD-27)
                </h4>
                <p className="leading-relaxed">
                  Once clinical trial endpoints or substantial equivalence are validated, sponsors apply under Form MD-26 for permission to import or manufacture the new medical device. CDSCO grants the official authorization under Form MD-27, paving the way for standard commercial distribution.
                </p>
                <div className="pt-2">
                  <Link
                    to="/services/india/mfg-class-c-d"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F5C754] hover:underline"
                  >
                    Explore Form MD-26/27 Approval Pathways <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. COMPREHENSIVE RELATED SERVICES GRID */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Complete Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
              Full Spectrum CDSCO Medical Device Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Explore specialized regulatory, quality assurance, and commercial import licensing services managed by NKB Regovanta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: MD-14/15 */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Importer | CDSCO CLA
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  Import License (Form MD-14 & Form MD-15)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Complete preparation of Plant Master Files (PMF) and Device Master Files (DMF) for commercial import registration of Class A, B, C, and D medical devices.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/services/india/class-a-import" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 2: MD-26/27 */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  New Devices | CDSCO
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  New Medical Device License (Form MD-26 & MD-27)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Statutory applications for devices without existing predicates in India, steering technical justification through CDSCO expert committees.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/services/india/mfg-class-c-d" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 3: Test License */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Import / Mfg Test License
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  Test License for Medical Devices (MD-16 / MD-17)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Procure fast-track permission to import or manufacture small device quantities for testing, lab evaluations, clinical trials, or demonstrations.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/services/india/personal-use" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 4: Non-Notified Devices MD-42 */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Registration Number | CDSCO
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  Non-Notified Devices Registration (Form MD-42)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Assistance with registration numbers for devices under transition timelines, ensuring uninterrupted commercial distribution across India.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/services/india/md-42" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 5: Authorized Agent */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  In-Country Representative
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  Authorized Agent (AIR) Support in India
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Act as your neutral regulatory holder in India holding active Form 20B/21B wholesale drug distribution licenses and managing all CDSCO filings.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/industries/medical-devices/india/for-importer" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 6: ISO 13485 */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Quality Management Systems
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  ISO 13485 Certification Assistance
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Establish, audit, and maintain a robust ISO 13485:2016 quality management system aligned with MDR 2017 Fifth Schedule specifications.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/services/iso-13485" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 7: PC-PNDT */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Imaging & Ultrasound
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  PC-PNDT Certificate (Form A & Form B)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Statutory registration for ultrasound and diagnostic imaging equipment manufacturers, importers, and maintenance service providers.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/services/pc-pndt-certificate" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 8: WPC ETA */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Wireless Medical Devices
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  WPC ETA Approval & Wireless Framework
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Equipment Type Approval (ETA) and Import Licenses for Bluetooth, Wi-Fi, telemetry, and IoT wireless medical technologies via Saral Sanchar.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/services/wpc-wireless-medical-devices" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Card 9: FSC & Export */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Export Documentation
                </span>
                <h3 className="text-base font-bold text-[#0f2340] mt-3 mb-2">
                  Free Sale Certificate (FSC) & Export NOC
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Procure Free Sale Certificates from CDSCO for Indian manufactured medical devices to expedite global market authorizations abroad.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between">
                <Link to="/services/india/free-sale" className="text-xs font-bold text-[#0b3a96] hover:underline">
                  Read More
                </Link>
                <a href="#enquiry-form" className="px-3 py-1.5 rounded-lg bg-[#0b3a96] text-white text-xs font-bold hover:bg-[#082b70] transition-colors">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REGULATION & GUIDELINE SPOTLIGHT: INFRARED THERMOMETERS */}
      <section className="py-16 sm:py-20 bg-[#f1f5f9] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm">
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Regulation & Guidelines Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2340] mt-4 mb-4">
                The Indian Ministry of Consumer Affairs & CDSCO Import Framework for Infrared Thermometers
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                In response to surging nationwide requirements for non-contact temperature screening, the Ministry of Consumer Affairs and the Central Drugs Standard Control Organization (CDSCO) introduced calibrated relaxations for the import and clearance of <strong>infrared thermometers</strong>.
              </p>
              <div className="my-6 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-gray-800 space-y-2">
                <h4 className="font-bold text-[#0b3a96] flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#F5C754]" />
                  Key Compliance Takeaways for Importers:
                </h4>
                <p>• <strong>Legal Metrology Exemptions:</strong> Streamlined customs verification with expedited No-Objection Certificates (NOC) for non-contact thermal monitoring devices.</p>
                <p>• <strong>MDR 2017 Class A / Class B Categorization:</strong> Ensuring compliance with mandatory clinical accuracy benchmarks (ASTM E1965 / ISO 80601-2-56).</p>
                <p>• <strong>Labeling & UDI Directives:</strong> Clear specification of measuring range, operating ambient temperature, calibration certificates, and Indian AIR contact details.</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                NKB Regovanta assists diagnostic equipment manufacturers and importers in securing regulatory clearances, Legal Metrology declarations, and CDSCO compliance for all temperature monitoring and vital sign screening devices.
              </p>
              <div className="mt-6">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0b3a96] hover:bg-[#082b70] text-white font-bold text-xs shadow-md transition-colors"
                >
                  Consult on Thermometer & Diagnostic Imports <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. DEDICATED INQUIRY FORM */}
      <section id="enquiry-form" className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                Get Started Today
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340]">
                Initiate Your Medical Device Filing with NKB Regovanta
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Whether you need assistance with an urgent Form MD-14 import submission, ISO 13485 QMS audit, or Authorized Indian Representative appointment, our senior regulatory strategists are ready to assist.
              </p>

              <div className="space-y-4 pt-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Preliminary device classification & predicate identification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Clear statutory fee breakdown & SUGAM filing timelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>100% confidential non-disclosure protected consultation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0f2340]">Inquiry Received Successfully</h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                      Thank you for contacting NKB Regovanta. Our CDSCO medical device regulatory team will review your product details and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Dr. / Mr. / Ms. John Doe"
                          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Business Email *</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="john@medtech.com"
                          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Company Name *</label>
                        <input
                          type="text"
                          required
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          placeholder="MedTech Innovations Ltd."
                          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Device Classification</label>
                        <select
                          value={formState.deviceClass}
                          onChange={(e) => setFormState({ ...formState, deviceClass: e.target.value })}
                          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                        >
                          <option value="Class A (Low Risk)">Class A (Low Risk)</option>
                          <option value="Class B (Low-to-Moderate)">Class B (Low-to-Moderate)</option>
                          <option value="Class C (Moderate-to-High)">Class C (Moderate-to-High)</option>
                          <option value="Class D (High Risk)">Class D (High Risk)</option>
                          <option value="Not Sure / Needs Classification">Not Sure / Needs Classification</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">Service Required</label>
                        <select
                          value={formState.serviceType}
                          onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                          className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                        >
                          <option value="Import License (MD-14/15)">Import License (MD-14/15)</option>
                          <option value="AIR / Authorized Agent Support">AIR / Authorized Agent Support</option>
                          <option value="Manufacturing License (MD-5/9)">Manufacturing License (MD-5/9)</option>
                          <option value="New Device Permission (MD-26/27)">New Device Permission (MD-26/27)</option>
                          <option value="PC-PNDT Certificate">PC-PNDT Certificate</option>
                          <option value="WPC ETA Approval">WPC ETA Approval</option>
                          <option value="ISO 13485 QMS Implementation">ISO 13485 QMS Implementation</option>
                          <option value="Other CDSCO Compliance">Other CDSCO Compliance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">Product Details & Inquiries</label>
                      <textarea
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Please describe your medical device, intended use, foreign regulatory approvals (e.g. CE, FDA 510k), and target launch timeline..."
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                      />
                    </div>

                    {submitError && (
                      <p className="text-xs font-bold text-rose-600">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0b3a96] to-[#1055b5] text-white font-bold text-sm shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting Application Details...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit CDSCO Regulatory Inquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
