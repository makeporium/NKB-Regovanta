import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building2,
  Globe2,
  AlertCircle,
  HelpCircle,
  Award,
  Send,
  Loader2,
  CheckCircle,
  ChevronRight,
  Scale,
  Sparkles,
  ArrowRight,
  BadgePercent,
  FileCheck,
  SearchCheck,
  GanttChartSquare,
} from "lucide-react";

export const Route = createFileRoute("/services/usa/agent-service")({
  head: () => ({
    meta: [
      { title: "U.S. FDA Agent Service & Device Registration | US FDA Services | NKB Regovanta" },
      {
        name: "description",
        content:
          "Official U.S. FDA Agent services, foreign establishment registration, device listing, and 510(k) submission support for overseas medical device and IVD manufacturers under 21 CFR 807.40.",
      },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/agent-service" },
  ],
  }),
  component: USAgentServicePage,
});

function USAgentServicePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    deviceClass: "Class II (510k)",
    serviceType: "US Agent & Establishment Registration",
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
          subject: `US FDA Agent Service Inquiry - ${formState.name} (${formState.company})`,
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
          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#F5C754]" />
              <span>21 CFR 807.40 Official U.S. Agent & Establishment Registration</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              US FDA Agent Service & Device Registration
            </h1>

            <p className="mt-6 text-base sm:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
              Official United States Agent representation, annual establishment registration, FURLS electronic device listing, and full 510(k) submission support for overseas medical device and IVD manufacturers entering the US market.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0b3a96] to-[#1055b5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 hover:opacity-95 transition-all"
              >
                Appoint NKB Regovanta as US Agent
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#regulatory-pathway"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 backdrop-blur-sm transition-all"
              >
                Explore FDA Pathways
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY FRAMEWORK & CLASSIFICATION */}
      <section id="regulatory-pathway" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                <Globe2 className="h-4 w-4" />
                US FDA Mandate
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] leading-tight">
                Prior Registration & Classification for US Market Entry
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Prior to exporting any medical device or in-vitro diagnostic (IVD) to the United States, the device must be formally registered with the <strong>US FDA (Food and Drug Administration)</strong> and fulfill all statutory FDA regulatory guidelines.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Before US FDA registration can proceed, the device must first be correctly classified into its statutory product code to determine the appropriate regulatory pathway. While the broad classification categories remain consistent (<strong>Class I, Class II, and Class III</strong>), the US FDA classification criteria differ slightly from European CE Marking rules:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-bold text-emerald-700 uppercase">Class I</div>
                  <div className="font-bold text-gray-900 text-sm mt-1">General Controls</div>
                  <p className="text-xs text-gray-600 mt-2">
                    Most Class I and select Class II devices are <strong>510(k) Exempt</strong>, requiring direct establishment registration and listing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-bold text-blue-700 uppercase">Class II</div>
                  <div className="font-bold text-gray-900 text-sm mt-1">Special Controls & 510(k)</div>
                  <p className="text-xs text-gray-600 mt-2">
                    Most Class II devices require a <strong>510(k) Premarket Notification (PMN)</strong> clearance demonstrating substantial equivalence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-bold text-red-700 uppercase">Class III</div>
                  <div className="font-bold text-gray-900 text-sm mt-1">Premarket Approval (PMA)</div>
                  <p className="text-xs text-gray-600 mt-2">
                    Life-sustaining or high-risk devices require rigorous <strong>PMA approval</strong> backed by comprehensive clinical data.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0f2340] text-white p-8 rounded-3xl shadow-xl space-y-5">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                  <ShieldCheck className="h-6 w-6 text-[#F5C754]" />
                  21 CFR 807.40 Foreign Establishment Rule
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                  Any foreign establishment engaged in the manufacture, preparation, propagation, compounding, or processing of a device imported into the United States <strong>must identify a United States Agent (U.S. Agent)</strong> for that establishment.
                </p>
                <div className="border-t border-white/10 pt-4 space-y-3 text-xs text-blue-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span>Submitted electronically to FDA as an integral part of the establishment registration process.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span>Each foreign establishment may designate <strong>only one official U.S. Agent</strong> at any given time.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span>Must reside or maintain a physical place of business in the United States and be available during normal business hours.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEVICE REGISTRATION FOR 510(K) EXEMPT VS 510(K) CLEARED */}
      <section className="py-16 sm:py-20 bg-[#f1f5f9] border-t border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-white px-3 py-1 rounded-md border border-gray-200 shadow-xs">
              Registration Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
              Device Registration Pathways
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Understanding the compliance, fee, and audit requirements for both 510(k) Exempt and 510(k) Premarket Notification products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 510(k) Exempt Registration */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase">
                <FileCheck className="h-4 w-4" />
                510(k) Exempt Products
              </div>
              <h3 className="text-xl font-bold text-[#0f2340]">
                Device Registration of 510(k) Exempt Products
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Devices that are 510(k) exempt do not require premarket clearance documentation, but they <strong>must still be registered and listed with the FDA</strong> before commercial importation into the US.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span><strong>Annual Registration Fee:</strong> Prior to registration, the FDA annual establishment registration user fee must be paid for the active fiscal year.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span><strong>US Agent Mandate:</strong> Any manufacturer not residing in the US must appoint an official US Agent to execute and maintain the registration.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span><strong>Random FDA Audits:</strong> After registering devices with the FDA, the facility becomes subject to random FDA inspections (21 CFR Part 820 / QMSR). Your products and quality management systems must maintain continuous compliance.</span>
                </li>
              </ul>
            </div>

            {/* 510(k) Premarket Products */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold uppercase">
                <SearchCheck className="h-4 w-4" />
                510(k) Premarket Clearance
              </div>
              <h3 className="text-xl font-bold text-[#0f2340]">
                Device Registration of 510(k) Products
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                For devices that are not 510(k) exempt, the manufacturer is <strong>strictly required to obtain 510(k) clearance first</strong>. Only after receiving the formal FDA clearance letter can the product be listed on the FDA FURLS database.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span><strong>Dual Fee Structure:</strong> There are two separate fees — one for the 510(k) premarket review and a separate annual establishment registration & listing fee.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span><strong>Annual FY Fee Revisions:</strong> Both fees are revised by the FDA each Fiscal Year (FY) under MDUFA mandates and published on the official FDA website.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span><strong>Small Business Qualification (SBD):</strong> Small businesses with gross receipts under $100M can qualify for substantial fee reductions on 510(k) review fees (note: there is no reduction on establishment registration fees).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NKB REGOVANTA CAPABILITIES & ROLE OF US AGENT */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Proven Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
              Why Partner with NKB Regovanta for US FDA Representation?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              NKB Regovanta brings extensive experience in medical device product registration and successful 510(k) submissions. We guide overseas manufacturers through every phase of US FDA market authorization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h4 className="font-bold text-[#0f2340] text-base mb-2">Official U.S. Agent Representation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Acting as your statutory US Agent under 21 CFR 807.40, serving as the official liaison between your foreign facility and the FDA.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h4 className="font-bold text-[#0f2340] text-base mb-2">510(k) Dossier & Submissions</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Premarket Notification dossier compilation, predicate identification, substantial equivalence defense, and eSTAR submissions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h4 className="font-bold text-[#0f2340] text-base mb-2">FURLS Registration & Listing</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Management of PIN, Payment Identification Number (PIN/PCN), annual registration fee coordination, and electronic device listings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h4 className="font-bold text-[#0f2340] text-base mb-2">FDA Audit & QMSR Readiness</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Preparing foreign manufacturing sites for FDA Quality Management System Regulation (QMSR / 21 CFR 820) inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEAD INQUIRY FORM */}
      <section id="consultation" className="py-16 sm:py-24 bg-gradient-to-b from-[#0f2340] to-[#071324] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C754] bg-white/10 px-3 py-1 rounded-md border border-white/10">
              US FDA Desk
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
              Request U.S. Agent & FDA Registration Consultation
            </h2>
            <p className="text-blue-100/80 text-sm sm:text-base mt-2">
              Connect with our US regulatory specialists for product classification, US Agent appointment, and 510(k) clearance roadmaps.
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
                  Thank you for reaching out. Our Senior US FDA Regulatory Consultant will review your submission and contact you within 24 business hours.
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
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Corporate Email *</label>
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
                      placeholder="+1 (555) 000-0000"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Device Classification</label>
                    <select
                      value={formState.deviceClass}
                      onChange={(e) => setFormState({ ...formState, deviceClass: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                    >
                      <option value="Class I (510k Exempt)">Class I (510k Exempt)</option>
                      <option value="Class II (510k Exempt)">Class II (510k Exempt)</option>
                      <option value="Class II (510k Required)">Class II (510k Required)</option>
                      <option value="Class III (PMA)">Class III (Premarket Approval - PMA)</option>
                      <option value="Not Sure">Not Sure / Needs Classification</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Primary Requirement</label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                    >
                      <option value="US Agent & Establishment Registration">US Agent & Establishment Registration</option>
                      <option value="510(k) Premarket Notification">510(k) Premarket Notification Submission</option>
                      <option value="Device Listing & FURLS Management">Device Listing & FURLS Management</option>
                      <option value="Small Business Decision (SBD) Filing">Small Business Decision (SBD) Filing</option>
                      <option value="FDA QMSR / Audit Compliance">FDA QMSR / Audit Compliance Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Device Details & Target Launch Timeline</label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide device description, intended use, existing overseas approvals, and target timeline..."
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
                      <Loader2 className="h-5 w-5 animate-spin" /> Submitting Request...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Submit US FDA Consultation Request
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
