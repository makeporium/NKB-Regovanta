import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Globe2, 
  Building2, 
  FileCheck2, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Landmark, 
  Send, 
  Lock, 
  Anchor,
  CreditCard,
  Layers,
  Check,
  FileSignature
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/iec-ad-code")({
  head: () => ({
    meta: [
      { title: "IEC Code DGFT & AD Code ICEGATE Registration Services | NKB Regovanta" },
      {
        name: "description",
        content:
          "Professional IEC Code registration DGFT, AD Code registration ICEGATE customs profile, and Bank authority letter AD Code generation services in India by NKB Regovanta.",
      },
      {
        name: "keywords",
        content:
          "IEC Code registration DGFT, AD Code registration ICEGATE customs profile, Bank authority letter AD Code, DGFT import export code, customs port registration India, NKB Regovanta",
      },
      { property: "og:title", content: "IEC Code DGFT & AD Code ICEGATE Customs Registration | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Fast-track DGFT IEC registration and ICEGATE AD Code customs portal profile setup for medical device, pharma & cosmetics importers.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/iec-ad-code" },
{ property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IEC Code DGFT & AD Code ICEGATE Registration Services | NKB Regovanta" },
      { name: "twitter:description", content: "IEC (Importer Exporter Code) and AD Code registration consulting for medical device import and export from India. End-to-end DGFT IEC application, AD Code bank registration, customs documentation, and DGFT compliance ..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/iec-ad-code" },
    ],
  }),
  component: IecAdCodePage,
});

const iecServices = [
  {
    title: "New IEC Registration",
    desc: "Assisting new enterprises and corporate entities in obtaining a fresh 10-digit Import Export Code (IEC) from DGFT.",
  },
  {
    title: "IEC Application Preparation",
    desc: "Accurate compilation, verification of PAN, bank certificate, and online dossier preparation on the DGFT portal.",
  },
  {
    title: "IEC Compliance Assistance",
    desc: "Annual IEC renewal updates, modifications, profile validations, and resolving DGFT portal compliance requirements.",
  },
];

const adCodeServices = [
  {
    icon: Landmark,
    title: "AD Code Registration Support",
    desc: "End-to-end guidance in securing the official 14-digit AD Code letter from authorized dealer banks.",
  },
  {
    icon: FileText,
    title: "Bank & Exporter Documentation",
    desc: "Preparation of bank authority letters, exporter profile verification, and standardized documentation.",
  },
  {
    icon: FileCheck2,
    title: "AD Code Application Preparation",
    desc: "Detailed drafting and verification of customs EDI registration filings for seamless processing.",
  },
  {
    icon: Anchor,
    title: "Port-Wise AD Code Registration",
    desc: "Customs registration across specific sea ports, airports, and inland container depots (ICDs) across India on ICEGATE.",
  },
  {
    icon: ShieldCheck,
    title: "Export Compliance Assistance",
    desc: "Ensuring trade finance, shipping bill processing, and export benefit reconciliations align with Indian customs.",
  },
  {
    icon: FileSignature,
    title: "AD Code Cancellation / Update Support",
    desc: "Managing bank account changes, port addition, branch updates, and AD Code cancellation procedures.",
  },
  {
    icon: Layers,
    title: "Regulatory Documentation & Query Resolution",
    desc: "Prompt resolution of customs queries, document mismatches, and ICEGATE system clarifications.",
  },
];

function IecAdCodePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "Both IEC & AD Code",
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
          subject: `IEC / AD Code Service Inquiry from ${formState.name} (${formState.company})`,
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
          serviceType: "Both IEC & AD Code",
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
            <span className="text-[#F5C754]">IEC & AD Code Services</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5C754] text-xs font-bold tracking-wide uppercase">
                <Globe2 className="h-3.5 w-3.5" />
                DGFT & Customs Trade Enablement
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-white">
                Import Export Code (IEC) &
                <span className="block text-[#F5C754] mt-2">
                  AD Code Registration Services
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl font-normal">
                An Import Export Code (IEC) is an essential business identification requirement for entities engaged in import and export activities in India. An Authorised Dealer (AD) Code is used to link an exporter's bank account with customs and facilitate export-related transactions through the applicable customs procedures.
              </p>

              {/* Badges */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "New IEC Registration & Preparation",
                  "IEC Compliance & Annual Updates",
                  "Bank & Exporter Documentation",
                  "Port-Wise AD Code ICEGATE Registration",
                  "Export Compliance & Trade Finance Linking",
                  "Query Resolution & Record Updates",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#iec-section"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F5C754] hover:bg-[#eab336] text-[#0b1f3a] font-bold text-sm shadow-lg shadow-black/20 transition-all"
                >
                  Explore IEC Services
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#ad-code-section"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm transition-all"
                >
                  Explore AD Code Services
                </a>
              </div>
            </div>

            {/* Right Col: Consultation Form */}
            <div id="iec-form" className="lg:col-span-5">
              <div className="bg-white text-[#0f2340] rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20">
                <div className="mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-2.5 py-1 rounded">
                    Trade Licensing Support
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0f2340] mt-2">
                    Apply for IEC & AD Code Registration
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Connect with our cross-border regulatory team for fast-track processing.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-3">
                    <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                    <h4 className="font-bold text-green-900 text-lg">Inquiry Received!</h4>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Thank you. Our foreign trade documentation specialists will review your requirements and reach out within 24 business hours.
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
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
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
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Business Email *</label>
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
                          placeholder="Business Name"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Service Required</label>
                        <select
                          value={formState.serviceType}
                          onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96] bg-white"
                        >
                          <option value="Both IEC & AD Code">Both IEC & AD Code</option>
                          <option value="Import Export Code (IEC) Only">Import Export Code (IEC) Only</option>
                          <option value="AD Code Registration Only">AD Code Registration Only</option>
                          <option value="Port-Wise Registration / Update">Port-Wise Registration / Update</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Operational Requirements & Ports</label>
                      <textarea
                        rows={2}
                        placeholder="Provide details about your import/export operations, customs ports, or specific support needed..."
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
                        "Processing Request..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Request Registration Assistance
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3" />
                      100% Confidential & Professional Trade Support.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: IMPORT EXPORT CODE (IEC) SERVICES */}
      <section id="iec-section" className="py-16 lg:py-24 bg-slate-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Directorate General of Foreign Trade (DGFT)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              Import Export Code (IEC) Services
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
              An Import Export Code (IEC) is an essential business identification requirement for entities engaged in import and export activities in India.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0f2340] mb-6 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[#0b3a96]" />
              Our IEC Services
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {iecServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3a96] flex items-center justify-center font-bold text-base mb-4">
                      0{idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-[#0f2340] mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1 text-xs font-semibold text-[#0b3a96]">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                    <span>DGFT Compliant</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IEC Summary Banner */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-blue-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-[#0b3a96] rounded-xl shrink-0">
                <FileCheck2 className="h-6 w-6" />
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-800 leading-relaxed">
                We assist businesses in obtaining and maintaining their IEC documentation to facilitate smooth import and export operations.
              </p>
            </div>
            <a
              href="#iec-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0b3a96] hover:bg-[#082b70] text-white font-bold text-xs shrink-0 transition-colors"
            >
              Get IEC Support
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: AD CODE REGISTRATION */}
      <section id="ad-code-section" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Customs & ICEGATE Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              AD Code Registration
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
              An Authorised Dealer (AD) Code is used to link an exporter's bank account with customs and facilitate export-related transactions through the applicable customs procedures.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#0f2340] mb-6 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-[#0b3a96]" />
              Our AD Code Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adCodeServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl p-6 border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0b3a96] text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#0f2340] mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-600 shrink-0" />
                    <span>Customs Port Ready</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AD Code Summary Banner */}
          <div className="bg-[#0f2340] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 text-[#F5C754] rounded-xl shrink-0">
                <CreditCard className="h-6 w-6" />
              </div>
              <p className="text-sm sm:text-base font-medium text-white/90 leading-relaxed">
                We assist exporters in preparing the required documentation and completing the applicable AD Code registration and update process for their export operations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#F5C754] hover:bg-[#eab336] text-[#0b1f3a] font-bold text-xs shrink-0 transition-colors"
            >
              Register AD Code Now
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <CTABand
        title="Ready to register your IEC and AD Code for seamless trade?"
        description="Speak with NKB Regovanta’s trade documentation specialists for complete assistance with DGFT, bank letters, and port-wise customs registrations."
        action="Consult a Trade Specialist"
      />
    </div>
  );
}
