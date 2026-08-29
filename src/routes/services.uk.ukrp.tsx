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
  Clock,
  Briefcase,
  AlertTriangle,
  FileSpreadsheet,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/services/uk/ukrp")({
  head: () => ({
    meta: [
      { title: "UK Responsible Person (UKRP) Services & MHRA Registration | NKB Regovanta" },
      {
        name: "description",
        content:
          "Official UK Responsible Person (UKRP) representation and UK MHRA medical device and IVD registration services under UK MDR 2002. DORS portal registration MHRA and vigilance reporting by NKB Regovanta.",
      },
      {
        name: "keywords",
        content:
          "UK Responsible Person (UKRP) services, UK MHRA medical device registration, UKCA marking medical devices, DORS portal registration MHRA, UK MDR 2002 compliance, Northern Ireland medical device protocol, NKB Regovanta",
      },
      { property: "og:title", content: "UK Responsible Person (UKRP) Services | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Legally mandated UKRP representation and MHRA registration for overseas medical device and IVD manufacturers selling into Great Britain.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/ukrp" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/ukrp" },
    ],
  }),
  component: UKRPServicePage,
});

function UKRPServicePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    deviceCategory: "General Medical Device",
    deviceClass: "Class IIa / IIb",
    serviceType: "UKRP Representation & MHRA Registration",
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
          subject: `UKRP Service Inquiry - ${formState.name} (${formState.company})`,
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
            to="/services/uk"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Regulatory Services
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#F5C754]" />
              <span>UK MDR 2002 (as amended by UK MDR 2019) & MHRA Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              UK Responsible Person (UKRP) Services
            </h1>

            <p className="mt-6 text-base sm:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
              Official in-country representation for non-UK medical device and IVD manufacturers. Managing MHRA product registrations, technical documentation custody, post-market vigilance, and UK market compliance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0b3a96] to-[#1055b5] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 hover:opacity-95 transition-all"
              >
                Appoint NKB Regovanta as UKRP
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#responsibilities"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 backdrop-blur-sm transition-all"
              >
                Statutory Responsibilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATUTORY LEGAL BASIS & DEFINITION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                <Scale className="h-4 w-4" />
                Statutory Foundation
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] leading-tight">
                The Legal Role of the UK Responsible Person
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                The statutory position of a <strong>UK Responsible Person (UKRP)</strong> was formally established under the <strong>UK Medical Devices Regulations 2002 (UK MDR 2002)</strong>, as amended by the <strong>UK MDR 2019</strong> following the United Kingdom’s departure from the European Union.
              </p>
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-100 space-y-2">
                <h3 className="font-bold text-base text-[#0f2340]">Statutory Definition under UK MDR:</h3>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                  "A person established in the United Kingdom who acts on behalf of a manufacturer established outside the United Kingdom in relation to specified tasks with regard to the manufacturer’s obligations under the regulations."
                </p>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Under UK legislation, <strong>only a manufacturer or a designated UK Responsible Person can legally place a medical device or IVD on the Great Britain (England, Wales, and Scotland) market</strong>. Non-UK manufacturers must appoint a UKRP before their products can be commercialized in the region. Furthermore, a single manufacturer is legally permitted to have several designated UK Responsible Persons across different device portfolios.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0f2340] text-white p-8 rounded-3xl shadow-xl space-y-5">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white">
                  <ShieldCheck className="h-6 w-6 text-[#F5C754]" />
                  Designation Mandate & Contract
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                  Documentary evidence in the form of a formal contract or signed Letter of Designation on official company letterhead must be established between the overseas manufacturer and the UKRP.
                </p>
                <div className="border-t border-white/10 pt-4 space-y-3 text-xs text-blue-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span>Explicitly states the legal company name and registered address for both the overseas manufacturer and the UKRP.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span>Affirms that the UKRP acts with the consent of the manufacturer and adheres strictly to applicable UK MDR legislation.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span><strong>Corporate Establishment:</strong> When a corporate entity acts as UKRP, responsibilities fall on the organization as a whole, matching the EU Authorised Representative (EC REP) structure.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRACE PERIODS & TIMELINES */}
      <section className="py-16 sm:py-20 bg-[#f1f5f9] border-t border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-white px-3 py-1 rounded-md border border-gray-200 shadow-xs">
              Registration Timelines
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
              Grace Periods for UKRP Appointment & MHRA Registration
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              The statutory requirement for an overseas manufacturer to have a UK Responsible Person in place aligns with the MHRA device registration grace periods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2340]">Strategic Early Appointment</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                While grace periods govern initial MHRA registrations, manufacturers are strongly advised to appoint a UK Responsible Person well in advance of commercial deployment. Drawing up a comprehensive bilateral mandate, verifying technical files, and establishing post-market surveillance protocols requires dedicated onboarding time.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0f2340]">Immediate Post-Market Surveillance (PMS)</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Appointing your UKRP early ensures immediate post-market vigilance coverage for devices already distributed in Great Britain, guaranteeing that adverse event escalations and user complaints are managed seamlessly in full coordination with the MHRA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY STATUTORY RESPONSIBILITIES */}
      <section id="responsibilities" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Statutory Mandate
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
              Key Responsibilities of the UK Responsible Person
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              As set out in Part II (r. 7A), Part III (r. 21A), Part IV (r. 33A), Regulation 77 (Medical Devices), and Regulation 146 (IVDs) of the UK MDR 2002 (as amended by UK MDR 2019), the UK Responsible Person must execute the following duties:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-xs flex items-center justify-center">
                01
              </div>
              <h4 className="font-bold text-[#0f2340] text-sm">Declaration of Conformity & Technical Files</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ensure that the Declaration of Conformity and technical documentation have been properly drawn up, and that appropriate conformity assessment procedures have been completed by the manufacturer.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-xs flex items-center justify-center">
                02
              </div>
              <h4 className="font-bold text-[#0f2340] text-sm">Document Custody for MHRA Inspection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Maintain readily available copies of technical documentation, Declaration of Conformity, and relevant UKCA/CE certificates (including amendments and supplements) for MHRA inspection upon request.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-xs flex items-center justify-center">
                03
              </div>
              <h4 className="font-bold text-[#0f2340] text-sm">Information Disclosure to MHRA</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provide the MHRA with all necessary information and documentation required to demonstrate the conformity of the device in response to any official statutory request.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-xs flex items-center justify-center">
                04
              </div>
              <h4 className="font-bold text-[#0f2340] text-sm">Sample & Device Access Forwarding</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Forward to the manufacturer any request by the MHRA for physical samples or access to a device, and ensure the MHRA receives the samples or is granted facility access.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-xs flex items-center justify-center">
                05
              </div>
              <h4 className="font-bold text-[#0f2340] text-sm">Corrective Action & Safety Cooperation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cooperate actively with the MHRA on any preventive or corrective action taken to eliminate or mitigate risks posed by devices placed on the UK market.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0b3a96] font-bold text-xs flex items-center justify-center">
                06
              </div>
              <h4 className="font-bold text-[#0f2340] text-sm">Immediate Vigilance & Complaint Relaying</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Immediately inform the overseas manufacturer about complaints and reports from UK healthcare professionals, patients, and users regarding suspected incidents or device malfunctions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-red-50/50 border border-red-100 space-y-3 md:col-span-2 lg:col-span-3">
              <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">
                07
              </div>
              <h4 className="font-bold text-red-900 text-sm">Mandatory Relationship Termination Clause</h4>
              <p className="text-xs text-red-800 leading-relaxed">
                The UKRP must terminate the legal relationship with the manufacturer if the manufacturer acts contrary to its obligations under UK MDR regulations, and formally inform the MHRA and the relevant Approved Body of that termination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OTHER RESPONSIBILITIES: REGISTRATION & PMS */}
      <section className="py-16 sm:py-20 bg-[#f8fafc] border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2340]">
              Additional Responsibilities: Registration & Vigilance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
                <FileSpreadsheet className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0f2340]">Registration Responsibilities</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                The UK Responsible Person must carry out specified tasks in relation to the manufacturer’s obligations. This includes registering with the MHRA before the device is placed on the UK market. The UKRP opens and maintains a single registration account on behalf of all the manufacturers it represents.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0f2340]">Post-Market Surveillance (PMS) Duties</h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                The UKRP is required to fulfill statutory incident reporting requirements under regulation 7A (Medical Devices), regulation 21A (Active Implantable Medical Devices - AIMD), and regulation 33A (IVDs). The bilateral mandate should clearly delineate whether any joint post-market surveillance tasks are delegated, while the manufacturer remains ultimately responsible for fulfilling all obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATION, QUALIFICATIONS & LEGAL LIABILITY */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Legal Framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] mt-3">
              Location, Qualifications & Legal Liability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
                <Building2 className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-[#0f2340] text-base">Physical UK Location</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A UK Responsible Person must possess a registered place of business in the United Kingdom at which service of any legal document relating to placing the device on the market is effective. This address is used for all official MHRA communications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-[#0f2340] text-base">Qualifications & Competency</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                While specific academic credentials are not mandated, the UK Responsible Person must possess the technical competency and regulatory capability to carry out all statutory obligations defined under UK MDR 2002.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-[#0f2340] text-base">Regulation 60 Liability</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Under Regulation 60 and the Consumer Protection Act 1987, a UKRP can be proceeded against as a person placing the device on the market. Manufacturers and UKRPs typically structure mandates with appropriate indemnity and product liability insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEAD INQUIRY FORM */}
      <section id="consultation" className="py-16 sm:py-24 bg-gradient-to-b from-[#0f2340] to-[#071324] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5C754] bg-white/10 px-3 py-1 rounded-md border border-white/10">
              UK Regulatory Desk
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
              Request UK Responsible Person Representation
            </h2>
            <p className="text-blue-100/80 text-sm sm:text-base mt-2">
              Appoint NKB Regovanta as your official UKRP. We handle MHRA registrations, technical dossier storage, and regulatory communications.
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
                  Thank you for reaching out. Our Senior UK Regulatory Specialist will review your device portfolio and contact you within 24 business hours.
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
                      placeholder="+44 20 7946 0950"
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
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Device Category</label>
                    <select
                      value={formState.deviceCategory}
                      onChange={(e) => setFormState({ ...formState, deviceCategory: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                    >
                      <option value="General Medical Device">General Medical Device</option>
                      <option value="In-Vitro Diagnostic (IVD)">In-Vitro Diagnostic (IVD)</option>
                      <option value="Active Implantable (AIMD)">Active Implantable (AIMD)</option>
                      <option value="Software as a Medical Device (SaMD)">Software as a Medical Device (SaMD)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Risk Classification</label>
                    <select
                      value={formState.deviceClass}
                      onChange={(e) => setFormState({ ...formState, deviceClass: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                    >
                      <option value="Class I / Class A">Class I / Class A IVD</option>
                      <option value="Class IIa / Class B">Class IIa / Class B IVD</option>
                      <option value="Class IIb / Class C">Class IIb / Class C IVD</option>
                      <option value="Class III / Class D">Class III / Class D IVD</option>
                      <option value="Not Sure">Not Sure / To Be Determined</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Primary Requirement</label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:border-[#0b3a96] focus:outline-none bg-white"
                    >
                      <option value="UKRP Representation & MHRA Registration">UKRP Representation & MHRA Registration</option>
                      <option value="UKCA Marking Compliance">UKCA Marking Technical File Review</option>
                      <option value="Post-Market Surveillance Support">Post-Market Surveillance & Vigilance</option>
                      <option value="Mandate & Insurance Review">Mandate & Insurance Structuring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Device Description & Remarks</label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details about your medical device or IVD, existing CE marking / UKCA status, and target UK market entry date..."
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
                      <Send className="h-5 w-5" /> Submit UKRP Consultation Request
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
