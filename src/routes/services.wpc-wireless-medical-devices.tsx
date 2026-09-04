import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Wifi, 
  Radio, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  FileText, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  Layers, 
  Cpu, 
  Send, 
  Lock, 
  AlertCircle,
  FileCheck,
  Building,
  Check,
  Globe2,
  Workflow,
  DownloadCloud
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/wpc-wireless-medical-devices")({
  head: () => ({
    meta: [
      { title: "WPC ETA Approval for Wireless Medical Devices India | Saral Sanchar & DPL | NKB Regovanta" },
      {
        name: "description",
        content:
          "Complete WPC regulatory compliance for wireless & connected medical devices in India. Equipment Type Approval (WPC ETA approval), Saral Sanchar WPC import license (RLO permit), Dealer Possession License (DPL), and RF test report verification.",
      },
      {
        name: "keywords",
        content:
          "WPC ETA approval medical devices, Saral Sanchar WPC import license (RLO permit), Dealer Possession License (DPL), wireless medical device compliance India, RF testing approval ETA, NKB Regovanta",
      },
      { property: "og:title", content: "WPC ETA Approval for Wireless Medical Devices India | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "WPC ETA approval, Saral Sanchar import permissions, and DPL licensing for Bluetooth, WiFi, and telemetry medical devices.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/wpc-wireless-medical-devices" },
{ property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "WPC ETA Approval for Wireless Medical Devices India | Saral Sanchar & DPL | NKB Regovanta" },
      { name: "twitter:description", content: "WPC ETA (Wireless Planning & Coordination Wing Equipment Type Approval) consulting for wireless-enabled medical devices in India. ETA application for Bluetooth, Wi-Fi, and RF-enabled medical devices, DoT compliance, a..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/wpc-wireless-medical-devices" },
    ],
  }),
  component: WpcWirelessMedicalDevicesPage,
});

const licenseTypes = [
  {
    icon: Radio,
    title: "Equipment Type Approval (ETA)",
    category: "Mandatory for All Wireless SKUs",
    description:
      "Mandatory authorization for wireless equipment operating in de-licensed frequency bands (e.g., 2.4 GHz, 5 GHz, Bluetooth, BLE, Wi-Fi, NFC, and RFID). Validates that emissions and output power conform to Indian national spectrum standards.",
    details: [
      "Applicable for de-licensed frequency bands",
      "Available via Saral Sanchar Self-Declaration for compliant devices",
      "Requires accredited ISO/IEC 17025 RF Test Reports",
      "Prerequisite for commercial importation and marketing",
    ],
  },
  {
    icon: DownloadCloud,
    title: "WPC Import License (from RLO)",
    category: "Customs Clearance Authorization",
    description:
      "Official legal authorization issued by Regional Licensing Offices (RLO) granting permission to import radio equipment into India following the grant of ETA.",
    details: [
      "Issued by regional RLOs (Delhi, Mumbai, Kolkata, Chennai, Guwahati)",
      "Requires valid ETA certificate, Proforma Invoice, and Purchase Order",
      "Ensures seamless customs clearance at Indian air and sea ports",
      "Crucial for both complete medical units and standalone wireless modules",
    ],
  },
  {
    icon: Building,
    title: "Dealer Possession License (DPL)",
    category: "Channel & Distributor Authorization",
    description:
      "A statutory license granted to authorized medical equipment dealers, distributors, and stockists, permitting the legal possession, warehousing, and commercial sale of controlled wireless medical apparatus.",
    details: [
      "Authorizes warehousing and nationwide supply chain distribution",
      "Mandates accurate register maintenance and stock reporting",
      "Ensures compliance with national wireless security mandates",
      "Required for multi-tier channel distribution partners in India",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Non-Dealer Possession License (NDPL)",
    category: "End-User & Institutional Custody",
    description:
      "Authorizes healthcare networks, research hospitals, academic universities, and non-commercial entities to lawfully possess and operate specific wireless monitoring devices.",
    details: [
      "Tailored for non-commercial institutions and clinical hospital networks",
      "Covers specialized wireless diagnostic telemetry arrays",
      "Ensures institutional adherence to spectrum management guidelines",
      "Streamlined verification process for healthcare providers",
    ],
  },
  {
    icon: Workflow,
    title: "Experimental & Demonstration License",
    category: "R&D, Clinical Trials & Exhibitions",
    description:
      "Special temporary authorization granted to medical device innovators and manufacturers to demonstrate, test, or evaluate unapproved wireless prototypes in controlled clinical or technical environments.",
    details: [
      "Permits clinical trial deployments of wireless medical prototypes",
      "Allows live demonstrations at healthcare summits and medical expos",
      "Facilitates trial telemetry testing under specified frequencies",
      "Time-bound authorization with structured experimental parameters",
    ],
  },
  {
    icon: Cpu,
    title: "Manufacturing & Testing License",
    category: "Domestic Production & Validation",
    description:
      "Multifaceted permit authorizing domestic medical technology manufacturers to produce, prototype, calibrate, and bench-test wireless diagnostic and therapeutic hardware inside Indian facilities.",
    details: [
      "Covers local assembly and indigenous manufacturing setups",
      "Authorizes factory bench testing of radio frequency transceivers",
      "Ensures emission limits adhere to Ministry of Communications norms",
      "Prerequisite for commercial release under Make in India initiatives",
    ],
  },
];

const approvalSteps = [
  {
    step: "01",
    title: "RF Test Report Audit & Gap Assessment",
    desc: "Verification of Radio Frequency (RF) test reports from accredited ISO/IEC 17025 laboratories, confirming power output, operating frequencies, and modulation meet Indian gazette parameters.",
  },
  {
    step: "02",
    title: "Technical File & AIR Authorization",
    desc: "Compilation of detailed antenna specifications, product datasheets, user manuals, and formal appointment of NKB Regovanta as the Indian Authorized Representative for foreign OEMs.",
  },
  {
    step: "03",
    title: "Portal Submission & Government Liaison",
    desc: "Filing via Saral Sanchar / regional RLO portal with accurate fee disbursement, technical parameter mapping, and real-time response to any department clarifications.",
  },
  {
    step: "04",
    title: "ETA Grant & Import License Issuance",
    desc: "Receipt of the official Equipment Type Approval certificate, followed by immediate processing of the WPC Import License for smooth, unhindered port customs clearance.",
  },
];

const targetDevices = [
  "Bluetooth / BLE Vital Sign Monitors & Wearable ECG Sensors",
  "Wi-Fi Connected Infusion Pumps & Dialysis Machines",
  "Cellular IoT Remote Patient Monitoring (RPM) Terminals",
  "RFID-Enabled Surgical Consumables & Smart Inventory Tags",
  "Wireless Ultrasound Probes & Telemetry Diagnostic Transceivers",
  "Smart Connected Inhalers & Continuous Glucose Monitors (CGM)",
  "IoT-Enabled Pulse Oximeters & Digital Stethoscopes",
  "Wireless Implant Programmers & Neurostimulation Controllers",
];

const faqs = [
  {
    q: "What is WPC and why is approval required for wireless medical devices?",
    a: "The Wireless Planning & Coordination (WPC) Wing is the national radio spectrum authority under the Department of Telecommunications (DoT), Ministry of Communications, Government of India. Any medical device or accessory incorporating wireless technologies (Wi-Fi, Bluetooth, Zigbee, Cellular IoT, RFID, or proprietary radio transceivers) must secure WPC Equipment Type Approval (ETA) to verify it operates within permitted frequency bands and power levels without causing harmful interference.",
  },
  {
    q: "How does ETA through Self-Declaration differ from regular RLO approval?",
    a: "ETA through Self-Declaration is available on the Saral Sanchar portal for products that operate exclusively in designated de-licensed frequency bands (e.g., 2.4 GHz, 5.15–5.85 GHz) and are exempted from import licensing under the DGFT EXIM policy. Products outside de-licensed bands or requiring specialized parameters must follow the traditional Regional Licensing Office (RLO) review route.",
  },
  {
    q: "Can a foreign medical device manufacturer apply for WPC approval directly?",
    a: "No. WPC certificates and ETA approvals are granted strictly to Indian legal entities. Foreign manufacturers must designate an authorized local Indian entity, such as NKB Regovanta, to act as their legal applicant and Authorized Representative before the WPC authority.",
  },
  {
    q: "What RF test reports are accepted for obtaining WPC ETA?",
    a: "WPC requires test reports issued by ISO/IEC 17025 accredited laboratories (ILAC/NABL recognized). If the medical device contains multiple wireless modules (e.g., combined Wi-Fi and Bluetooth), test reports for all incorporated radio modules must be submitted without alteration.",
  },
  {
    q: "How does WPC compliance interface with CDSCO Medical Device Rules (MDR 2017)?",
    a: "CDSCO evaluates medical safety, clinical efficacy, and biocompatibility under MDR 2017, whereas WPC exclusively regulates wireless spectrum, radio emission limits, and telecommunication compliance. For wireless medical equipment, both approvals are mandatory and complementary. NKB Regovanta provides synchronized dual compliance across both authorities.",
  },
  {
    q: "Can a third-party distributor use an existing ETA certificate for importing?",
    a: "Yes. Once an ETA certificate has been granted for a specific model, third-party importers and authorized dealers can utilize the ETA approval for customs clearance, provided they possess a valid Import License and adhere to the original equipment specifications.",
  },
  {
    q: "What is the typical turnaround timeline for obtaining WPC ETA and Import Licenses?",
    a: "For products eligible under the Saral Sanchar Self-Declaration pathway with ready accredited RF test reports, ETA issuance can be achieved within 2 to 5 business days. Traditional RLO applications and subsequent Import Licenses generally take 15 to 30 business days.",
  },
];

function WpcWirelessMedicalDevicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    wirelessTech: "Bluetooth / BLE",
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
          subject: `WPC Wireless Device Inquiry from ${formState.name} (${formState.company})`,
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
          wirelessTech: "Bluetooth / BLE",
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
            <span className="text-[#F5C754]">WPC Approval for Wireless Devices</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#F5C754] text-xs font-bold tracking-wide uppercase">
                <Radio className="h-3.5 w-3.5" />
                Department of Telecommunications (DoT) Framework
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-white">
                WPC Approval & Regulatory Compliance
                <span className="block text-[#F5C754] mt-2">
                  For Wireless Medical Devices in India
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl font-normal">
                End-to-end WPC Equipment Type Approval (ETA), Dealer Possession Licensing (DPL), RF test report audits, and import authorizations for connected healthcare technologies, wearables, and IoT diagnostic systems.
              </p>

              {/* Badges / key features */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Saral Sanchar ETA Self-Declaration Filing",
                  "Accredited RF Test Report (ISO 17025) Verification",
                  "Regional Licensing Office (RLO) Liaison",
                  "Dealer & Non-Dealer Possession Licenses (DPL/NDPL)",
                  "WPC Import License for Customs Clearance",
                  "Authorized Indian Representative (AIR) Support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#F5C754] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#license-types"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F5C754] hover:bg-[#eab336] text-[#0b1f3a] font-bold text-sm shadow-lg shadow-black/20 transition-all"
                >
                  View WPC License Types
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#wpc-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm transition-all"
                >
                  Verify Device Eligibility
                </a>
              </div>
            </div>

            {/* Right Col: Consultation Form */}
            <div id="wpc-form" className="lg:col-span-5">
              <div className="bg-white text-[#0f2340] rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20">
                <div className="mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-2.5 py-1 rounded">
                    WPC Compliance Check
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0f2340] mt-2">
                    Get WPC Approval for Your Device
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Submit your wireless specifications for an immediate frequency band and ETA eligibility review.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center space-y-3">
                    <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                    <h4 className="font-bold text-green-900 text-lg">Application Received!</h4>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Thank you. Our WPC and telecom regulatory advisors will review your device frequencies and contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 text-xs font-bold text-[#0b3a96] underline"
                    >
                      Submit another device
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
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
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Phone / WhatsApp *</label>
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
                          placeholder="Organization"
                          value={formState.company}
                          onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Wireless Interface</label>
                        <select
                          value={formState.wirelessTech}
                          onChange={(e) => setFormState({ ...formState, wirelessTech: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3a96] bg-white"
                        >
                          <option value="Bluetooth / BLE">Bluetooth / BLE (2.4 GHz)</option>
                          <option value="Wi-Fi (2.4 / 5 GHz)">Wi-Fi (2.4 / 5 GHz)</option>
                          <option value="Cellular / 4G / 5G / NB-IoT">Cellular / NB-IoT</option>
                          <option value="RFID / NFC">RFID / NFC</option>
                          <option value="Zigbee / Proprietary RF">Zigbee / Proprietary RF</option>
                          <option value="Multiple Wireless Modules">Multiple Wireless Modules</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Device Description & Model Details</label>
                      <textarea
                        rows={2}
                        placeholder="Provide medical device name, model numbers, operating frequencies, and target import timeline..."
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
                        "Evaluating Submission..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Request WPC Compliance Assessment
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3" />
                      100% Confidentiality Assured.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW & THE RISE OF CONNECTED HEALTH */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
                Regulatory Background
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f2340] leading-tight">
                Navigating Wireless Medical Device Compliance in India
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Wireless innovation is revolutionizing global clinical care. Telemetry sensors, wearable ECG patches, continuous glucose monitors (CGMs), connected infusion systems, smart orthopedic implants, and IoT-enabled diagnostic equipment are dramatically enhancing patient monitoring and clinical outcomes.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                However, in India, every apparatus containing a radio transceiver operates within the jurisdiction of the <strong>Wireless Planning and Coordination (WPC) Wing</strong> under the Department of Telecommunications, Ministry of Communications. WPC acts as the national authority regulating spectrum allocation, preventing radio interference, and mandating technical compliance before any wireless medical device can be manufactured, marketed, imported, or operated.
              </p>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-[#0b3a96] text-sm uppercase tracking-wider mb-2">
                  Dual Mandate: CDSCO + WPC Integration
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  While the Central Drugs Standard Control Organisation (CDSCO) evaluates safety and clinical efficacy under MDR 2017, WPC oversees spectrum authorization and radio emission compliance. Both certifications are mandatory for lawful commercial release.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="font-bold text-[#0f2340] text-lg border-b border-gray-100 pb-3">
                  Key Wireless Technologies Regulated:
                </h3>
                <div className="space-y-3">
                  {[
                    { title: "Bluetooth & Bluetooth Low Energy (BLE)", freq: "2.4000 – 2.4835 GHz" },
                    { title: "Wi-Fi (802.11 a/b/g/n/ac/ax)", freq: "2.4 GHz & 5.150 – 5.875 GHz" },
                    { title: "Radio Frequency Identification (RFID)", freq: "865 – 867 MHz / 13.56 MHz" },
                    { title: "Near Field Communication (NFC)", freq: "13.553 – 13.567 MHz" },
                    { title: "Cellular & NB-IoT Telemetry", freq: "Licensed Telecom Bands" },
                    { title: "Medical Device Radiocommunications (MedRadio)", freq: "Specific Medical Bands" },
                  ].map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg text-xs">
                      <span className="font-bold text-gray-800">{tech.title}</span>
                      <span className="text-[#0b3a96] font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{tech.freq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 CORE WPC LICENSES & APPROVAL TYPES */}
      <section id="license-types" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Full Spectrum Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              WPC Framework: Clearances & License Portfolio
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              NKB Regovanta provides turnkey management for the complete suite of WPC approvals, ensuring foreign OEMs and domestic manufacturers maintain comprehensive spectrum compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenseTypes.map((license, idx) => (
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
              Workflow & Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The 4-Stage WPC Approval Process
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Our structured process takes your wireless medical device from initial technical file review to official ETA grant in the fastest possible turnaround time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approvalSteps.map((step, idx) => (
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

      {/* APPLICABLE DEVICE CATEGORIES */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
                Coverage Scope
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340] leading-tight">
                Wireless Medical Devices We Support
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Whether deploying wearable health sensors or advanced wireless surgical equipment, NKB Regovanta handles the entire spectrum classification and documentation audit.
              </p>
              <div className="pt-2">
                <a
                  href="#wpc-form"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#0b3a96] hover:bg-[#082b70] text-white font-bold text-sm transition-all"
                >
                  Verify Your Device Category
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3.5">
                {targetDevices.map((device, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-gray-800 leading-snug">{device}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION & PREREQUISITES */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Document Checklist
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              Mandatory Documents for WPC Approval
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Ensure rapid, first-cycle approval by preparing the required legal and technical evidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-7 border border-gray-200 space-y-4">
              <h3 className="font-bold text-[#0f2340] text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#0b3a96]" />
                Technical & Laboratory Evidence
              </h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>RF Test Report:</strong> Comprehensive report from an accredited ISO/IEC 17025 laboratory covering all internal RF modules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Technical Datasheet:</strong> Frequency band declarations, channel spacing, modulation scheme, and antenna gain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>User Guide / Manual:</strong> Operating instructions detailing RF specifications and regulatory markings.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-gray-200 space-y-4">
              <h3 className="font-bold text-[#0f2340] text-lg flex items-center gap-2">
                <Building className="h-5 w-5 text-[#0b3a96]" />
                Corporate & Importation Documents
              </h3>
              <ul className="space-y-3 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Authorized Representative Letter:</strong> Official authorization empowering NKB Regovanta as the Indian applicant.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Corporate Proof:</strong> Company Incorporation Certificate, GST registration, and registered premises proof.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Import Paperwork (for IL):</strong> Proforma Invoice, Purchase Order, and ETA grant letter for customs clearance.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2340]">
              Frequently Asked Questions on WPC Compliance
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Everything you need to know regarding wireless spectrum regulations for medical devices in India.
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
        title="Ready to secure WPC approval for your wireless medical device?"
        description="Connect with NKB Regovanta’s telecommunication regulatory team to audit your RF test reports and initiate rapid ETA certification."
        action="Consult a WPC Regulatory Specialist"
      />
    </div>
  );
}
