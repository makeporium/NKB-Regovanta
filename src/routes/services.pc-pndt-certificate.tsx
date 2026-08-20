import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Activity, 
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
  Stethoscope,
  Scan,
  BadgeAlert,
  ClipboardList
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/pc-pndt-certificate")({
  head: () => ({
    meta: [
      { title: "PC-PNDT Certificate & Ultrasound Device Registration in India | NKB Regovanta" },
      {
        name: "description",
        content:
          "Statutory PC-PNDT registration (Form A & Form B) for ultrasound, imaging and diagnostic equipment in India. Expert regulatory compliance for manufacturers, importers & dealers by NKB Regovanta.",
      },
    ],
  }),
  component: PcPndtCertificatePage,
});

const stakeholders = [
  {
    icon: Building2,
    title: "Ultrasound & Imaging Importers",
    desc: "Foreign OEMs and Indian distributors importing diagnostic ultrasound, echocardiography, or fetal imaging apparatus into India.",
  },
  {
    icon: Stethoscope,
    title: "Medical Device Manufacturers",
    desc: "Domestic medical equipment manufacturers assembling, calibrating, and selling ultrasound and diagnostic imaging scanners.",
  },
  {
    icon: Scan,
    title: "Dealers, Retailers & Stockists",
    desc: "Channel partners, stockists, and traders engaged in the commercial warehousing, sale, leasing, and distribution of diagnostic equipment.",
  },
  {
    icon: Activity,
    title: "Service Technicians & Buyback Entities",
    desc: "Third-party biomedical service organizations involved in buyback, refurbishment, maintenance, recalibration, and repair of imaging machinery.",
  },
];

const corePillars = [
  {
    title: "Form A Application Preparation",
    desc: "Comprehensive drafting and verification of statutory Form A filings, corporate ownership declarations, and machinery specification catalogues.",
  },
  {
    title: "Appropriate Authority Liaison",
    desc: "Liaison with State & District Appropriate Authorities and Advisory Committees under the Directorate of Family Welfare.",
  },
  {
    title: "Form B Registration Grant",
    desc: "Securing the official Form B Certificate of Registration, valid for 5 years across defined operational territories.",
  },
  {
    title: "Lifecycle Record & Inspection Advisory",
    desc: "Ongoing support for customer intimation logs, installation registers, biannual returns, and statutory 2-year audit readiness.",
  },
];

const faqs = [
  {
    q: "What is the PC-PNDT Act and why is registration mandatory for ultrasound equipment?",
    a: "The Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994 (PC-PNDT Act) is a central legislation enacted by the Government of India to prohibit sex determination and regulate diagnostic imaging apparatus. Any business entity involved in importing, manufacturing, selling, distributing, repairing, or servicing ultrasonography/imaging machines must register with the Appropriate Authority under Section 3B of the Act to legally operate.",
  },
  {
    q: "What is the difference between Form A and Form B under the PC-PNDT Act?",
    a: "Form A is the statutory application form submitted by the manufacturer, importer, distributor, dealer, or service provider to the Appropriate Authority. Form B is the official Certificate of Registration granted by the Appropriate Authority in consultation with the Advisory Committee after evaluating the application.",
  },
  {
    q: "Who is required to obtain a PC-PNDT Certificate?",
    a: "Every manufacturer, importer, dealer, retailer, distributor, service technician, and buyback agency dealing in ultrasound equipment, color dopplers, portable imaging probes, echocardiography machines, or any imaging device capable of fetal diagnostic visualization must obtain registration.",
  },
  {
    q: "What is the validity period of the PC-PNDT Certificate (Form B)?",
    a: "The Certificate of Registration (Form B) is valid for 5 years from the date of grant. Renewal applications must be submitted at least 30 days prior to expiry in the prescribed format.",
  },
  {
    q: "What is the typical turnaround timeline for securing Form B?",
    a: "Upon formal submission of the application to the Appropriate Authority (e.g., Directorate of Family Welfare), scrutiny and advisory committee review typically take between 30 to 45 working days, after which Form B is issued.",
  },
  {
    q: "What ongoing compliance records must ultrasound dealers and importers maintain?",
    a: "Dealers and distributors must maintain detailed registers documenting every machine sold, including serial numbers, customer clinic registration details, Form A affidavits from purchasing doctors, installation certificates, and periodic monthly/biannual sale return intimations submitted to the District Appropriate Authority.",
  },
  {
    q: "Are ultrasound sub-assemblies and replacement line probes covered under the Act?",
    a: "Yes. Probes, transducers, and imaging sub-assemblies that interface with ultrasound consoles are subject to strict supply chain traceability under the PC-PNDT enforcement guidelines.",
  },
];

function PcPndtCertificatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "Importer / Distributor",
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
          subject: `PC-PNDT Certificate Inquiry from ${formState.name} (${formState.company})`,
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
          role: "Importer / Distributor",
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
            <span className="text-[#F5C754]">PC-PNDT Certificate</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5C754] text-xs font-bold tracking-wide uppercase">
                <ShieldCheck className="h-3.5 w-3.5" />
                PC-PNDT Act, 1994 Statutory Compliance
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-white">
                PC-PNDT Registration & Certificate
                <span className="block text-[#F5C754] mt-2">
                  For Ultrasound & Imaging Medical Devices (Form A & B)
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl font-normal">
                End-to-end statutory licensing, Form A filing, Appropriate Authority liaison, and Form B certificate acquisition for manufacturers, importers, dealers, and technicians of ultrasound and imaging machinery in India.
              </p>

              {/* Badges */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Form A Dossier Preparation & Filing",
                  "Form B Certificate of Registration (5-Year Validity)",
                  "Appropriate Authority & PNDT Cell Liaison",
                  "Dealer & Buyback Operator Registration",
                  "Sales Intimation & Customer Clinic Verification",
                  "Statutory 2-Year Record-Keeping Audit Readiness",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F5C754] hover:bg-[#eab336] text-[#0b1f3a] font-bold text-sm shadow-lg shadow-black/20 transition-all"
                >
                  Explore PC-PNDT Requirements
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#pndt-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm transition-all"
                >
                  Initiate Form A Filing
                </a>
              </div>
            </div>

            {/* Right Col: Form */}
            <div id="pndt-form" className="lg:col-span-5">
              <div className="bg-white text-[#0f2340] rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20">
                <div className="mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-2.5 py-1 rounded">
                    Statutory Registration
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0f2340] mt-2">
                    Apply for PC-PNDT Registration
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Connect with our regulatory consultants for fast-track Form A compilation and Form B grant.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-3">
                    <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                    <h4 className="font-bold text-green-900 text-lg">Inquiry Received!</h4>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Thank you. An NKB Regovanta medical device licensing specialist will review your details and contact you within 24 business hours.
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
                        placeholder="Dr. / Mr. / Ms. Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Corporate Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="email@company.com"
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
                          placeholder="+91 / Mobile"
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
                          placeholder="Entity Name"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Stakeholder Category</label>
                        <select
                          value={formState.role}
                          onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96] bg-white"
                        >
                          <option value="Importer / Distributor">Importer / Distributor</option>
                          <option value="Domestic Manufacturer">Domestic Manufacturer</option>
                          <option value="Dealer / Retailer">Dealer / Retailer</option>
                          <option value="Service & Repair Agency">Service & Repair Agency</option>
                          <option value="Buyback & Refurbishment">Buyback & Refurbishment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Apparatus & Operations Summary</label>
                      <textarea
                        rows={2}
                        placeholder="Mention equipment models, intended operational location, and current license status..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-600 font-medium">
                        An error occurred while submitting. Please email us directly at contact@nkbregovanta.com.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-[#0b3a96] hover:bg-[#082b70] text-white font-bold text-sm shadow-md transition-colors disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        "Submitting Application..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Request PC-PNDT Regulatory Consultation
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3" />
                      100% Confidential & Secure Client Data Handling.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="py-16 lg:py-20 bg-slate-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
                Statutory Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] leading-tight">
                Understanding the PC-PNDT Regulatory Framework
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Under the <strong>Pre-Conception and Pre-Natal Diagnostic Techniques (Prohibition of Sex Selection) Act, 1994</strong>, strict regulations govern the sale, import, distribution, manufacturing, and maintenance of ultrasound and imaging machines in India.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Under Section 3B of the Act, no organization or individual may sell, distribute, import, or supply ultrasound or imaging equipment to any entity unless both parties hold valid PC-PNDT registration certificates. Every stakeholder must apply via <strong>Form A</strong> to the designated Appropriate Authority (Directorate of Family Welfare) to secure their <strong>Form B Certificate of Registration</strong>.
              </p>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-2">
                <h4 className="font-bold text-[#0b3a96] text-sm uppercase tracking-wider">
                  Key Registration Parameters
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-700 pt-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#0b3a96]" />
                    <span><strong>Validity:</strong> 5 Years from date of issue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-[#0b3a96]" />
                    <span><strong>Turnaround:</strong> 30 to 45 Working Days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="font-bold text-[#0f2340] text-lg border-b border-gray-100 pb-3">
                  Who Must Register Under PC-PNDT?
                </h3>
                <div className="space-y-3">
                  {stakeholders.map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon className="h-4 w-4 text-[#0b3a96]" />
                        <h4 className="font-bold text-xs text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-[11px] text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS OF NKB REGOVANTA'S PC-PNDT SERVICE */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Full Spectrum Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              Our PC-PNDT Regulatory Deliverables
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              NKB Regovanta manages every phase of PC-PNDT compliance, from initial documentation compilation to formal certificate delivery and post-grant transaction governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-[#0b3a96]/40 mb-3 block">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#0f2340] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANDATORY DOCUMENT CHECKLIST */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Application Checklist
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              Mandatory Documents for Form A Registration
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              The Appropriate Authority requires specific legal, corporate, and technical proofs before initiating advisory committee evaluation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-bold text-[#0f2340] text-lg flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#0b3a96]" />
                Corporate & Ownership Proofs
              </h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Entity Ownership Proof:</strong> Certificate of Incorporation, Partnership Deed, or Proprietorship proof.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Constitutional Documents:</strong> Memorandum & Articles of Association (MOA/AOA) with director profiles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Premises Possession:</strong> Valid registered lease agreement or property ownership title for warehousing/office.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm space-y-4">
              <h3 className="font-bold text-[#0f2340] text-lg flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-[#0b3a96]" />
                Machinery & Operational Evidence
              </h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Product Specification Dossier:</strong> Detailed technical brochures, model numbers, and probe configurations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Scope of Activity Declaration:</strong> Precise operational charter (import, manufacturing, repair, buyback, or distribution).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Authorized Signatory Affidavit:</strong> Duly signed and stamped undertaking under the PC-PNDT Act.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATUTORY TIPS & INSPECTION READINESS */}
      <section className="py-16 lg:py-20 bg-[#0f2340] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F5C754]">
                Compliance Directive
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Statutory 2-Year Record Retention Mandate
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Under the PC-PNDT Act, all sales registers, serial number logs, customer clinic registration verifications, consent affidavits, and transaction declarations must be retained in an inspection-ready state for a <strong>minimum period of 2 years</strong>.
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                NKB Regovanta provides standardized record-keeping templates and internal audit protocols to ensure your organization is completely shielded against regulatory non-compliance.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-7 space-y-3">
                <div className="flex items-center gap-3">
                  <BadgeAlert className="h-6 w-6 text-[#F5C754]" />
                  <h4 className="font-bold text-white text-base">Key Compliance Checklist</h4>
                </div>
                <ul className="space-y-2 text-xs text-white/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span>Never sell or transfer imaging machinery to an unregistered doctor or facility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span>Submit monthly machine supply intimations to the District Appropriate Authority.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0 mt-0.5" />
                    <span>Maintain comprehensive engineer service and buyback trace logs.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Regulatory Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              Frequently Asked Questions on PC-PNDT Registration
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Common questions regarding ultrasound machinery licensing, Form A filing, and statutory compliance in India.
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
        title="Need PC-PNDT Form A & Form B licensing support for your imaging equipment?"
        description="Speak with NKB Regovanta’s medical device licensing advisors to fast-track your Appropriate Authority submission."
        action="Consult a PC-PNDT Specialist"
      />
    </div>
  );
}
