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
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/industries/medical-devices_/india/for-importer")({
  head: () => ({
    meta: [
      { title: "Medical Device Registration for Importers in India | NKB Regovanta" },
      {
        name: "description",
        content:
          "End-to-end CDSCO regulatory consulting for foreign medical device manufacturers. Authorized Indian Representative (AIR), Form MD-14 filing, and Form MD-15 import license grant.",
      },
    ],
  }),
  component: MedicalDeviceForImporterPage,
});

function MedicalDeviceForImporterPage() {
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
          subject: `Medical Device Importer Inquiry - ${formState.name} (${formState.company})`,
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
      title: "Device Classification & Predicate Review",
      desc: "Identify whether your device falls into Class A, B, C, or D under MDR 2017 and establish substantial equivalence with CDSCO notified predicate devices.",
    },
    {
      num: "02",
      title: "Appointment of Authorized Indian Representative (AIR)",
      desc: "Execute Power of Attorney (PoA) and Form 9 appointing NKB Regovanta as your in-country legal representative holding valid wholesale Form 20B/21B licenses.",
    },
    {
      num: "03",
      title: "Dossier Compilation (Plant Master File & Device Master File)",
      desc: "Compile ISO 13485 QMS certificates, Free Sale Certificates (FSC) from reference countries, clinical evaluation reports, risk management files, and bilingual labeling.",
    },
    {
      num: "04",
      title: "SUGAM Portal Submission & MD-14 Filing",
      desc: "Digital submission through CDSCO's SUGAM portal, statutory treasury challan fee remittance, and active liaison during technical scrutiny.",
    },
    {
      num: "05",
      title: "Grant of Import License (Form MD-15)",
      desc: "CDSCO Central Licensing Authority grants the perpetual import license, enabling seamless customs clearance and nationwide distribution.",
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
          <span className="text-[#0f2340]">For Importers</span>
        </div>

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 mb-4">
            <ShieldCheck className="h-4 w-4" />
            CDSCO Import Framework
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f2340] leading-tight">
            Medical Device Regulatory Solutions for Importers in India
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Foreign medical device manufacturers seeking market authorization in India require an independent Authorized Indian Representative (AIR), meticulous Device Master File compilation, and online SUGAM submission to obtain CDSCO Form MD-15 import licenses.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b3a96] hover:bg-[#082b70] text-white px-6 py-3 text-sm font-bold shadow-md transition-colors"
            >
              Request Importer Strategy <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/services/india/class-a-import"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 text-sm font-semibold transition-colors"
            >
              Form MD-14/15 Details
            </Link>
          </div>
        </div>

        {/* Step-by-Step Importer Roadmap */}
        <div className="space-y-8 mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              Process Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2340] mt-3">
              5-Stage Medical Device Import Authorization Process
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
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-[#0f2340]">Independent AIR Model</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Retain full ownership of your Indian regulatory licenses without giving commercial distribution exclusivity to single local distributors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-[#0f2340]">Full Dossier Compilation</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We structure your technical files, CE MDR / FDA 510(k) evidence, risk management files, and ISO 13485 QMS into CDSCO formats.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-sm text-[#0f2340]">Post-Market Vigilance</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Continuous compliance with Materiovigilance Programme of India (MvPI), managing adverse event reporting and periodic safety update reports.
            </p>
          </div>
        </div>

        {/* Lead Inquiry Box */}
        <div id="enquiry" className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold text-[#0f2340]">Consult Our Medical Device Importer Desk</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Get an initial regulatory classification review, fee roadmap, and timeline estimate for your medical device import.
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
                      placeholder="John Doe"
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
                      placeholder="john@company.com"
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
                      placeholder="Global MedTech Corp"
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2 text-xs focus:border-[#0b3a96] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Product Details & Target Requirements</label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide device description, existing international clearances (CE, FDA), and intended launch timeline..."
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
                      <Send className="h-4 w-4" /> Submit Importer Inquiry
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
