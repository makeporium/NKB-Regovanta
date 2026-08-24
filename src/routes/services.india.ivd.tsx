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
  FlaskConical,
  Dna,
  TestTube2,
  Factory,
  ClipboardList,
  Check,
  Scale,
  Clock,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/services/india/ivd")({
  head: () => ({
    meta: [
      { title: "In-Vitro Diagnostic (IVD) Regulatory Services in India | Importer & Manufacturer CDSCO Licensing | NKB Regovanta" },
      {
        name: "description",
        content:
          "Complete CDSCO regulatory consulting for In-Vitro Diagnostic (IVD) kits and reagents in India for Importers and Manufacturers. End-to-end guidance for Form MD-14/15, Form MD-5/6, Form MD-9/10, Form MD-12/13, Form MD-24/25, and Form MD-28/29.",
      },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/ivd" },
  ],
  }),
  component: IVDRegulatoryServicesIndiaPage,
});

function IVDRegulatoryServicesIndiaPage() {
  const [activeImporterTab, setActiveImporterTab] = useState<"air" | "import" | "test">("air");
  const [activeMfgTab, setActiveMfgTab] = useState<"ab" | "cd" | "test">("ab");
  const [activeNewDeviceTab, setActiveNewDeviceTab] = useState<"performance" | "permission">("performance");

  // Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    ivdClass: "Class B",
    serviceType: "IVD Import License (MD-14/15)",
    applicantType: "Importer / Foreign Manufacturer",
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
          subject: `IVD Regulatory Inquiry - ${formState.name} (${formState.company})`,
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
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#F5C754]" />
              <span>Medical Device Rules, 2017 & CDSCO Comprehensive Regulatory Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              In-Vitro Diagnostic Regulatory Services
            </h1>

            <p className="mt-6 text-base sm:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
              Comprehensive regulatory solutions for diagnostic kits and in-vitro devices in India. End-to-end guidance for foreign importers, authorized agent representation, and domestic manufacturing licensing across all risk categories.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0b3a96] to-[#1055b5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 hover:opacity-95 transition-all"
              >
                Consult Our IVD Experts
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#forms-matrix"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 backdrop-blur-sm transition-all"
              >
                Overview of Application Forms
              </a>
              <Link
                to="/services/india/medical-devices"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 backdrop-blur-sm transition-all"
              >
                Medical Device Regulatory Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY SCOPE & NEW IVD CONCEPTS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] leading-tight">
              In-Vitro Diagnostic Regulatory Services in India
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Diagnostic Kits play an important role in Medical science and are the base of almost every test, surgery, or medical experiment. Pertaining to their importance and effectiveness in the medical field, the Government of India has promulgated proper rules and guidelines for diagnostic kits in the New Medical Devices Rules, 2017, w.e.f. 1st January, 2018. All diagnostic kits, whether used In-vitro or In-vivo, are now regulated under the New Medical Device Rules, 2017. Diagnostic kits either manufactured in India or imported from foreign countries are required to obtain a license for manufacturing, sale, and use in the Indian market from the designated Licensing Authority depending upon their classification.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Following the New Medical Device Rules, 2017, all in-vitro diagnostic devices and kits have been classified into four basic categories, the licenses for which are allotted by respective Central and State authorities. The categorization is based upon the complexity and risk involved with using the diagnostic kit.
            </p>

            {/* New In-Vitro Diagnostic Device – First time in India */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-100">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f2340] mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#0b3a96]" />
                New In-Vitro Diagnostic Device – First time in India
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Any In-Vitro Diagnostic Device which does not have a predicate or similar device in the Indian market is considered to be a <strong>New In-Vitro Diagnostic Device</strong>. Such devices need to gain approval from the Central Licensing Authority (CDSCO) for their manufacture or import in India through clinical performance evaluation and special statutory review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLASSIFICATION OF DIAGNOSTIC KITS IN INDIA */}
      <section className="py-16 sm:py-20 bg-[#f1f5f9] border-t border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340]">
              Classification of Diagnostic Kits in India
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Based on the New Medical Device Rules, 2017, the classification of in-vitro diagnostic kits takes into consideration factors like the involved risk, the medical condition being diagnosed, self-testing, or near-patient testing. In-vitro diagnostic kits are classified into four categories:
            </p>
          </div>

          {/* 4 Risk-Based Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Class A */}
            <div className="bg-white rounded-2xl p-6 border-t-4 border-emerald-500 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase">
                    Class A
                  </span>
                  <span className="text-xs font-bold text-emerald-600">Low Risk</span>
                </div>
                <h3 className="text-base font-bold text-[#0f2340] mb-2">Reagents & Instruments</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Class A IVD devices are considered to have low risk and minimal invasiveness. Examples include reagents, solutions, buffer salts, wash solutions, specimen receptacles, and laboratory instruments used for testing.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                <span>Governed by: State SLA / CLA</span>
              </div>
            </div>

            {/* Class B */}
            <div className="bg-white rounded-2xl p-6 border-t-4 border-blue-500 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold uppercase">
                    Class B
                  </span>
                  <span className="text-xs font-bold text-blue-600">Low-Moderate Risk</span>
                </div>
                <h3 className="text-base font-bold text-[#0f2340] mb-2">Rapid & Self-Testing</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Class B IVD devices are considered to have low-to-moderate risk with minimal invasiveness. Examples include pregnancy test kits, blood glucose test strips, fertility tests, cholesterol tests, and urine analysis test strips.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
                <span>Governed by: State SLA (Mfg) / CLA</span>
              </div>
            </div>

            {/* Class C */}
            <div className="bg-white rounded-2xl p-6 border-t-4 border-amber-500 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-extrabold uppercase">
                    Class C
                  </span>
                  <span className="text-xs font-bold text-amber-600">Moderate-High Risk</span>
                </div>
                <h3 className="text-base font-bold text-[#0f2340] mb-2">Infectious & Oncology Assays</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Class C IVDs detect infectious agents with the potential to cause severe disability or health impact. Examples include HIV diagnostic testing kits, hepatitis testing kits, cancer diagnostic kits (PSA, CA-125), and STI panels.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-amber-700 font-semibold">
                <span>Governed by: Central CDSCO (CLA)</span>
              </div>
            </div>

            {/* Class D */}
            <div className="bg-white rounded-2xl p-6 border-t-4 border-red-500 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-extrabold uppercase">
                    Class D
                  </span>
                  <span className="text-xs font-bold text-red-600">High Risk</span>
                </div>
                <h3 className="text-base font-bold text-[#0f2340] mb-2">Blood Screening & Contagion</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Class D IVD devices are considered to have the highest risk and require the most extensive regulation. Detects life-threatening or highly contagious infectious diseases, blood donor screening (HIV, HBV, HCV), and companion diagnostics.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-red-700 font-semibold">
                <span>Governed by: Central CDSCO (CLA)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OVERVIEW OF FORMS FOR APPLICATION */}
      <section id="forms-matrix" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340]">
              Overview of Forms for Application
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              CDSCO has provided various forms to be used while filing the application for permission to import or manufacture diagnostic kits. The following tables detail the specific statutory forms required for each applicant category:
            </p>
          </div>

          <div className="space-y-10">
            {/* Table 1: Existing Devices */}
            <div className="bg-[#f8fafc] rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
              <div className="bg-[#0f2340] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-base flex items-center gap-2.5">
                  <FileCheck2 className="h-5 w-5 text-[#F5C754] shrink-0" />
                  Existing Diagnostic Devices
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
                      <th className="py-3.5 px-5 w-[30%]">Forms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0b3a96]">Importer</td>
                      <td className="py-3.5 px-5">A, B, C, D</td>
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
                      <td className="py-3.5 px-5">A, B</td>
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
                      <td className="py-3.5 px-5">A, B</td>
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
                      <td className="py-3.5 px-5">C, D</td>
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
                      <td className="py-3.5 px-5">C, D</td>
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
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0b3a96]">Importer / Mfg</td>
                      <td className="py-3.5 px-5">A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Clinical Performance Evaluation</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-24</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-25</span>
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
                  New In-Vitro Diagnostic Devices (First Time in India)
                </h3>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-blue-100 font-medium">New Device Approval</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-100/90 text-gray-700 font-bold border-b border-gray-200">
                    <tr>
                      <th className="py-3.5 px-5 w-[18%]">Applicant</th>
                      <th className="py-3.5 px-5 w-[18%]">Risk / Class</th>
                      <th className="py-3.5 px-5 w-[34%]">Type of License / Authorization</th>
                      <th className="py-3.5 px-5 w-[30%]">Forms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0b3a96]" rowSpan={3}>Importer</td>
                      <td className="py-3.5 px-5">A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Clinical Performance Evaluation</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-24</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-25</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Import License (New In-Vitro Device)</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-28</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-29</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">A, B, C, D</td>
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
                      <td className="py-3.5 px-5">A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Clinical Performance Evaluation</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-24</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-25</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">A, B, C, D</td>
                      <td className="py-3.5 px-5 font-medium text-gray-900">Manufacturing License (New In-Vitro Device)</td>
                      <td className="py-3.5 px-5">
                        <span className="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          Application: <span className="text-[#0b3a96]">MD-28</span>
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                          Permission: <span>MD-29</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-5">A, B, C, D</td>
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

      {/* 5. FOR IMPORTERS SECTION */}
      <section id="for-importers" className="py-16 sm:py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340]">
              For Importers
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
              India has developed at a staggering rate as an economy. Hence the demand for medical care equipment has skyrocketed in recent years. The new medical rules have classified all existing diagnostic kits, including those which were earlier not classified. Filing an application for obtaining an import license is a simple single-step process now. The process has been simplified to expedite the process and ensure proper availability of diagnostic kits in the country. The New Medical Device Rules allow multiple importers of a single diagnostic kit, which was forbidden earlier. Although, each importer has to file a separate application for each diagnostic kit being imported.
            </p>
          </div>

          {/* Import License Process Roadmap */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#0f2340] mb-6">Import License Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  01
                </div>
                <h4 className="font-bold text-[#0f2340] text-sm">Classification of Medical Devices</h4>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  02
                </div>
                <h4 className="font-bold text-[#0f2340] text-sm">Authorized Agent / Registration Holder Support</h4>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  03
                </div>
                <h4 className="font-bold text-[#0f2340] text-sm">Application Filing (Form MD-14)</h4>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  04
                </div>
                <h4 className="font-bold text-[#0f2340] text-sm">Import License (Form MD-15)</h4>
              </div>
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
                Authorized Agent / Registration Holder
              </button>
              <button
                onClick={() => setActiveImporterTab("import")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeImporterTab === "import"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Permission for Import License (Form MD-14, Form MD-15)
              </button>
              <button
                onClick={() => setActiveImporterTab("test")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeImporterTab === "test"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Permission for Test License to Import Diagnostic Kit (Form MD-16, Form MD-17)
              </button>
            </div>

            {activeImporterTab === "air" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Authorized Agent / Registration Holder
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  All the applications for the import of diagnostic kits will be filed by an Authorized Agent only. A foreign manufacturer cannot file an application directly with CDSCO. An Authorized Agent means a person including any firm or organization who has been appointed by an overseas manufacturer through a power of attorney to undertake import of diagnostic kits in India.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We at NKB Regovanta hold a valid Wholesale License (Form 20B and 21B) enabling us to act as an Authorized Agent for our clients, which helps reduce the time required for a foreign manufacturer to set up their office in India and expedites the launching of the product.
                </p>
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
                  Permission for Import License (Form MD-14, Form MD-15)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  An application for the issue of an Import License (Form MD-15) shall be made to the Central Licensing Authority in Form MD-14. The Authorized Agent in India having a valid wholesale license for sale or distribution can apply for the Import License in MD-14 on behalf of the manufacturer. Our technical team at NKB Regovanta helps our clients obtain the Import License efficiently and without hassle.
                </p>
              </div>
            )}

            {activeImporterTab === "test" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Permission for Test License to Import In-Vitro Diagnostic Kit (Form MD-16, Form MD-17)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Any diagnostic kit can be imported in small quantities for the purpose of clinical investigations, test, evaluation, demonstration, or training.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  An importer who desires to import a diagnostic kit shall apply for an import license for test, evaluation, demonstration, or training to the Central Licensing Authority in Form MD-16. Permission to import will be granted in Form MD-17.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  CDSCO has specified certain diagnostic kits whose Performance Evaluation from central testing laboratories is mandatory prior to the grant of a license. For such testing, a test license is required to be obtained. NKB Regovanta assists clients in obtaining a Test License for testing and analysis of samples accurately and in full compliance with regulations.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. FOR MANUFACTURERS SECTION */}
      <section id="for-manufacturers" className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340]">
              For Manufacturer
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
              New Medical Device Rules, 2017 have defined distinct provisions to obtain permission for the manufacturing of diagnostic kits in India. Different diagnostic kits have been classified under different categories based upon their use, complexity, and the risk involved. Applications for Class A and Class B diagnostic kits are reviewed and granted permission by the State Licensing Authorities. Whereas applications for Class C and Class D medical devices are reviewed and granted license by the Central Licensing Authority. This difference is due to the depth and scale of review involved for different classes of diagnostic kits. CDSCO has also defined different fees for different classes of diagnostic kits.
            </p>
          </div>

          {/* Plant Master File & Compliance Note */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-gray-200 mb-10">
            <h3 className="text-lg font-bold text-[#0f2340] mb-2">Comprehensive Manufacturing & Facility Compliance</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Obtaining the required licenses, certifications, and approvals for these devices involves detailed technical compilation. More than 40 specific documents covering 12 different factors must be filed for the Plant Master File (PMF), alongside the Device Master File (DMF), SUGAM portal registration, ISO 13485 certification, and Clinical Performance Evaluation data.
            </p>
          </div>

          {/* Interactive Manufacturer Tabs */}
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
                Class A & B Manufacturing & Loan License (Form MD-5 & Form MD-6)
              </button>
              <button
                onClick={() => setActiveMfgTab("cd")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeMfgTab === "cd"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Class C & D Manufacturing & Loan License (Form MD-9 & Form MD-10)
              </button>
              <button
                onClick={() => setActiveMfgTab("test")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeMfgTab === "test"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Test License to Manufacture Diagnostic Kits (Form MD-12, Form MD-13)
              </button>
            </div>

            {activeMfgTab === "ab" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Permission to Manufacture or Loan License for Class A & B Diagnostic Kits in India from State FDA (Form MD-5 and Form MD-6)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Any company planning to manufacture Class A and B diagnostic devices must obtain permission to manufacture from the State FDA. Since Class A and B devices are classified as low to moderate risk, the application review process for them is streamlined. Any manufacturer who needs a loan to manufacture diagnostic kits must first obtain a loan license from the State Licensing Authority. NKB Regovanta helps you file manufacturing and loan licenses for Class A and B diagnostic kits smoothly and efficiently.
                </p>
              </div>
            )}

            {activeMfgTab === "cd" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Permission to Manufacture or Loan License for Class C & D Diagnostic Kits in India from CDSCO (Form MD-9, Form MD-10)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Class C and D diagnostic kits have a significant amount of risk involved, so their license application and approval process is comprehensive. Permission to manufacture these devices is filed and obtained from the Central Licensing Authority using Form MD-7 (for Form MD-9 grant). A manufacturer procuring a loan for manufacturing these diagnostic kits must obtain a loan license using Form MD-8 (for Form MD-10 grant).
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  NKB Regovanta assists clients in filing and securing manufacturing and loan licenses for Class C and D devices with dedicated technical support and active follow-up to optimize approval timelines.
                </p>
              </div>
            )}

            {activeMfgTab === "test" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Permission for Test License to Manufacture Diagnostic Kits (Form MD-12, Form MD-13)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Diagnostic kits can be manufactured in small quantities for the purpose of testing, clinical investigation, demonstration, or training. A test license to manufacture such diagnostic kits has to be obtained from the Central Licensing Authority. The test license can be filed for any class of medical devices. The application is filed using Form MD-12 and permission is granted in Form MD-13. NKB Regovanta assists you in filing the application accurately to ensure a hassle-free and quick approval process.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. NEW IN-VITRO DIAGNOSTIC - FIRST TIME IN INDIA */}
      <section className="py-16 sm:py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340]">
              New In-Vitro Diagnostic – First Time in India
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
              New In-Vitro Diagnostic Devices are devices that have not been approved for manufacturing or importing by the Central Licensing Authority, or whose similar or predicate device is not available in India. Such diagnostic kits need to undergo clinical investigations to prove their safety and effectiveness. This Clinical Performance Evaluation is conducted on specimens collected on voluntary human participants. Once the clinical performance evaluation has been completed, a report describing the results of the investigation is generated. An application for the import or manufacture of the new In-Vitro Device is filed with the Central Licensing Authority along with this performance evaluation report. After proper evaluation of the findings, permission is granted by the CLA to import or manufacture the diagnostic kit in India.
            </p>
          </div>

          {/* Interactive New Device Tabs */}
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-6">
              <button
                onClick={() => setActiveNewDeviceTab("performance")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeNewDeviceTab === "performance"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Clinical Performance Evaluation (Form MD-24, Form MD-25)
              </button>
              <button
                onClick={() => setActiveNewDeviceTab("permission")}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeNewDeviceTab === "permission"
                    ? "bg-[#0b3a96] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Permission to Import / Manufacture New IVD (Form MD-28, Form MD-29)
              </button>
            </div>

            {activeNewDeviceTab === "performance" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Permission to Conduct Clinical Performance Evaluation for New In-Vitro Diagnostic (Form MD-24, Form MD-25)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Any new in-vitro diagnostic kit has to undergo a clinical performance evaluation. The application to obtain permission for this evaluation for any class of medical device has to be filed at the Central Licensing Authority using Form MD-24 (grant in Form MD-25). Preparing and filing the application in the right format is essential to ensure positive approval. NKB Regovanta has trained professionals to help you prepare the application and attach findings of the Clinical Performance Report in the proper statutory format.
                </p>
              </div>
            )}

            {activeNewDeviceTab === "permission" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0f2340]">
                  Permission to Import / Manufacture New In-Vitro Diagnostic Without Predicate Kit (Form MD-28, Form MD-29)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Once the Clinical Performance Evaluation is completed, the applicant submits an application for the import or manufacture of the New In-Vitro Diagnostic using Form MD-28 (grant in Form MD-29). The application consists of technical data generated, clinical trial findings, and scientific justifications. Our team focuses on quality attributes as well as the scientific rationale of the new device application to facilitate successful approval.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. HOW CDSCO GOVERNS & WHY CHOOSE NKB REGOVANTA */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2340]">
                CDSCO – How it Governs IVD Regulatory Affairs
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                The CDSCO is responsible for regulating the manufacture, import, and sale of IVD devices in India. It has established a regulatory framework requiring IVD manufacturers and importers to comply with requirements related to registration, classification, clinical performance evaluation, labeling, adverse event reporting, and post-market surveillance.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Manufacturers and brand owners must follow the regulations to ensure that their products are safe and effective for use in India. CDSCO’s role is to enforce the regulations, monitor the quality and safety of IVD devices, and ensure patient safety across the nation.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0f2340] text-white p-8 rounded-3xl space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-[#F5C754]" />
                  Why Choose NKB Regovanta?
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-blue-100">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>End-to-End Regulatory Management:</strong> Complete assistance from classification and testing to license grant.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>Emphasis on Ethics & Zero-Defect Filings:</strong> High-precision technical dossiers ensuring expedited review.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>Talented Technical Team:</strong> Dedicated regulatory specialists with deep experience in IVD assays and MDR 2017.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>Up-to-Date Regulatory Intelligence:</strong> Keeping your operations compliant with the latest CDSCO gazette notifications.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LEAD CONSULTATION FORM */}
      <section id="consultation" className="py-16 sm:py-24 bg-gradient-to-b from-[#0f2340] to-[#071324] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C754] bg-white/10 px-3 py-1 rounded-md border border-white/10">
              Expert Consultation
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
              Consult Our CDSCO IVD Regulatory Desk
            </h2>
            <p className="text-blue-100/80 text-sm sm:text-base mt-2">
              Receive a detailed classification review, statutory fee estimate, and custom roadmap for your diagnostic products.
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f2340]">Inquiry Submitted Successfully</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out. Our Senior IVD Regulatory Specialist will review your requirements and get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                    {submitError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Corporate Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Applicant Type</label>
                    <select
                      value={formState.applicantType}
                      onChange={(e) => setFormState({ ...formState, applicantType: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                    >
                      <option value="Importer / Foreign Manufacturer">Importer / Foreign Manufacturer</option>
                      <option value="Domestic Manufacturer (India)">Domestic Manufacturer (India)</option>
                      <option value="Loan Licensee">Contract Loan Licensee</option>
                      <option value="Clinical Lab / CRO">Clinical Lab / CRO</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">IVD Risk Class</label>
                    <select
                      value={formState.ivdClass}
                      onChange={(e) => setFormState({ ...formState, ivdClass: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                    >
                      <option value="Class A">Class A (Low Risk Reagents)</option>
                      <option value="Class B">Class B (Low-Mod - Rapid/Strips)</option>
                      <option value="Class C">Class C (Mod-High - Tumor/STI)</option>
                      <option value="Class D">Class D (High - Blood Screen)</option>
                      <option value="Not Sure">Not Sure / To Be Determined</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Required Service</label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                    >
                      <option value="IVD Import License (MD-14/15)">Import License (MD-14/15)</option>
                      <option value="Authorized Agent (AIR)">Authorized Agent (AIR)</option>
                      <option value="Manufacturing License (MD-5 / MD-9)">Manufacturing License (MD-5/9)</option>
                      <option value="Loan License (MD-6 / MD-10)">Loan License (MD-6/10)</option>
                      <option value="Test License (MD-12/13 or MD-16/17)">Test License (MD-12/13 or 16/17)</option>
                      <option value="Clinical Performance Evaluation (MD-24/25)">Clinical Performance (MD-24/25)</option>
                      <option value="New IVD Approval (MD-28/29)">New IVD Approval (MD-28/29)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Product Description & Remarks</label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details about the diagnostic kit, target parameters, intended use, and project timelines..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0b3a96] to-[#1055b5] text-white font-bold text-sm shadow-xl shadow-blue-900/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Submit IVD Regulatory Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
