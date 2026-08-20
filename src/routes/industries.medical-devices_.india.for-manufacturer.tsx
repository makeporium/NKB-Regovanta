import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  FileText,
  FileCheck,
  Send,
  Loader2,
  ArrowRight,
  Factory,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/industries/medical-devices_/india/for-manufacturer")({
  head: () => ({
    meta: [
      { title: "Medical Device Manufacturing Licenses in India | NKB Regovanta" },
      {
        name: "description",
        content:
          "End-to-end CDSCO and State FDA regulatory consulting for domestic medical device manufacturing. Form MD-5, MD-6, MD-9, MD-10, and ISO 13485 certification.",
      },
    ],
  }),
  component: MedicalDeviceForManufacturerPage,
});

function MedicalDeviceForManufacturerPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "52b40877-c175-4aca-852e-bb2a7e62a86a",
          subject: `Medical Device Manufacturer Inquiry - ${formState.name} (${formState.company})`,
          from_name: "NKB Regovanta Inquiries",
          ...formState,
        }),
      });
      const data = await res.json();
      if (data.success) setIsSubmitted(true);
    } catch {
      // ignore
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      num: "01",
      title: "Manufacturing Site Layout & Architectural Validation",
      desc: "Design plant architecture, cleanroom zoning (ISO Class 7/8), HVAC air handling systems, and water treatment loops compliant with Schedule M-III and ISO 13485.",
    },
    {
      num: "02",
      title: "QMS Implementation (ISO 13485:2016 & MDR 2017)",
      desc: "Develop Standard Operating Procedures (SOPs), Quality Manuals, Design Controls, and Risk Management frameworks (ISO 14971).",
    },
    {
      num: "03",
      title: "Test License Application (Form MD-12)",
      desc: "Obtain statutory test license from CDSCO/SLA for batch trial production, equipment qualification (IQ/OQ/PQ), and prototype testing.",
    },
    {
      num: "04",
      title: "Commercial Manufacturing Application Filing (MD-3 / MD-7)",
      desc: "Submit Plant Master File (PMF) and Device Master File (DMF) on SUGAM to State FDA (Class A/B) or Central CDSCO (Class C/D).",
    },
    {
      num: "05",
      title: "Statutory Inspection & License Grant (MD-5 / MD-9)",
      desc: "Coordinate Notified Body and Drug Inspector on-site audits to resolve observations and secure the commercial manufacturing license.",
    },
  ];

  return (
    <article className="min-h-screen bg-[#f8fafc] text-navy selection:bg-[#0b3a96] selection:text-white pt-24 pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold mb-8">
          <Link to="/services/india" className="hover:text-[#0b3a96] transition-colors">India Services</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/services/india/medical-devices" className="hover:text-[#0b3a96] transition-colors">Medical Devices</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#0f2340]">For Manufacturers</span>
        </div>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 mb-4">
            <Factory className="h-4 w-4" />
            Make in India & CDSCO Manufacturing
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2340] leading-tight">
            Medical Device Manufacturing & Loan Licensing in India
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Establish world-class medical device manufacturing facilities in India with full regulatory compliance under Medical Device Rules, 2017. We guide manufacturers through State FDA (Form MD-5) and Central CDSCO (Form MD-9) licensing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b3a96] hover:bg-[#082b70] text-white px-6 py-3 text-sm font-bold shadow-md transition-colors"
            >
              Request Manufacturing Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/services/india/mfg-class-a-b"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 text-sm font-semibold transition-colors"
            >
              Class A & B Guidelines
            </Link>
            <Link
              to="/services/india/mfg-class-c-d"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 text-sm font-semibold transition-colors"
            >
              Class C & D Guidelines
            </Link>
          </div>
        </div>

        {/* Step-by-Step Manufacturing Roadmap */}
        <div className="space-y-8 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Regulatory Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2340] mt-3">
              5-Stage Medical Device Manufacturing Authorization Pathway
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#0b3a96] text-white font-extrabold text-base flex items-center justify-center shrink-0">
                  {step.num}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#0f2340]">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
              <Factory className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-[#0f2340]">State FDA vs CLA Direct</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Complete support for Class A & B devices with State Drug Authorities, and Class C & D devices with CDSCO New Delhi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-[#0f2340]">ISO 13485 QMS Alignment</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Preparation of full quality manual, DMR, DHF, CAPA workflows, and supplier audit criteria for Notified Body audit readiness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
              <FileCheck className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-[#0f2340]">Loan Licensing (MD-6 / MD-10)</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Manufacture your branded medical devices using existing licensed contract manufacturing facilities across India.
            </p>
          </div>
        </div>

        {/* Lead Inquiry Box */}
        <div id="enquiry" className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold text-[#0f2340]">Speak with Our Manufacturing Regulatory Team</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Connect with our senior technical consultants for plant audit readiness, dossier drafting, and license grant.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-[#0f2340]">Inquiry Submitted Successfully</h4>
                <p className="text-xs text-gray-600">Our regulatory specialists will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-xs focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@medmfg.com"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-xs focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-xs focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="BioHealth Mfg India Pvt Ltd"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-xs focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Manufacturing Scope & Facility Details</label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details on facility location, device classes (Class A, B, C, D), cleanroom readiness, and timeline..."
                    className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-xs focus:border-[#0b3a96] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#0b3a96] hover:bg-[#082b70] text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Submit Manufacturing Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
