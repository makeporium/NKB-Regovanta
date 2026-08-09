import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import imgHero from "@/assets/industry-medical.png";

export const Route = createFileRoute("/industries/medical-devices")({
  head: () => ({
    meta: [
      { title: "Medical Device Regulatory & Quality Support | NKB Regovanta" },
      { name: "description", content: "Navigate Complex Regulations. Accelerate Market Access. NKB Regovanta supports medical device manufacturers from early regulatory planning through market authorization and ongoing lifecycle compliance." },
    ],
  }),
  component: MedicalDevices,
});

const services = [
  "Regulatory strategy and product classification",
  "US FDA 510(k), De Novo and applicable submission support",
  "EU MDR and CE Marking support",
  "Technical documentation preparation and remediation",
  "ISO 13485 Quality Management Systems",
  "Risk management support",
  "Clinical evaluation and evidence strategy",
  "Labeling and regulatory documentation",
  "Post-Market Surveillance and vigilance",
  "Regulatory submissions and authority interactions",
  "Audit and inspection readiness",
  "Product change and lifecycle management",
];

const markets = [
  { flag: "🇺🇸", name: "USA", auth: "FDA" },
  { flag: "🇪🇺", name: "European Union", auth: "EU MDR" },
  { flag: "🇬🇧", name: "United Kingdom", auth: "UK requirements" },
  { flag: "🇨🇦", name: "Canada", auth: "Health Canada" },
  { flag: "🇦🇺", name: "Australia", auth: "TGA" },
  { flag: "🇧🇷", name: "Brazil", auth: "ANVISA" },
];

const steps = ["Assess", "Strategize", "Prepare", "Submit", "Support", "Maintain"];

function MedicalDevices() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white overflow-hidden" style={{ maxHeight: 300 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-stretch h-[300px]">
          <div className="flex flex-col justify-center py-6 pr-8">
            <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
              <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-navy">Medical Devices</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">Medical Devices</p>
            <h1 className="font-display font-extrabold leading-tight text-navy" style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}>
              Medical Device Regulatory<br />& Quality Support
            </h1>
            <p className="mt-3 text-[13px] text-navy/70 leading-relaxed max-w-md font-medium italic">
              Navigate Complex Regulations. Accelerate Market Access.
            </p>
          </div>
          <div className="hidden lg:block h-full overflow-hidden">
            <img src={imgHero} alt="Medical Devices" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[14px] text-navy/80 leading-relaxed">
            Bringing a medical device to market requires a coordinated approach across regulatory strategy, quality systems, technical documentation, clinical evidence and post-market compliance. NKB Regovanta supports medical device manufacturers from early regulatory planning through market authorization and ongoing lifecycle compliance.
          </p>
        </div>
      </section>

      {/* How We Support You */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[18px] font-bold text-navy mb-8">How We Support You</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {services.map((s) => (
              <div key={s} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-navy shrink-0 mt-0.5" />
                <span className="text-[13.5px] text-navy/80">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="py-12 bg-surface/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[18px] font-bold text-navy mb-8">Markets We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {markets.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-border text-center">
                <span className="text-3xl">{m.flag}</span>
                <div>
                  <div className="text-[12px] font-bold text-navy">{m.name}</div>
                  <div className="text-[11px] text-navy/60">{m.auth}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-12 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[18px] font-bold text-navy mb-3">Our Approach</h2>
          <p className="text-[13.5px] text-navy/70 leading-relaxed mb-8 max-w-3xl">
            We first understand your device, intended use, classification and target markets. We then identify regulatory gaps and establish a practical roadmap covering documentation, evidence, quality-system requirements and submission activities.
          </p>
          <div className="flex flex-wrap items-center gap-0">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="px-4 py-2 bg-navy text-white text-[12.5px] font-semibold rounded-sm">{step}</div>
                {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-navy/40 mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-[17px] font-bold text-white">Ready to accelerate your medical device market access?</h2>
            <p className="mt-1 text-[13px] text-white/70">Let NKB Regovanta guide your regulatory journey.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-sm bg-white text-navy font-semibold px-8 py-3 text-[13.5px] transition-colors hover:bg-white/90 shrink-0 whitespace-nowrap">
            Discuss Your Medical Device Project
          </Link>
        </div>
      </section>
    </>
  );
}
