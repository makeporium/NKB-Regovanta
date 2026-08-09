import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import imgHero from "@/assets/industry-ivd.png";

export const Route = createFileRoute("/industries/ivd")({
  head: () => ({
    meta: [
      { title: "IVD Regulatory & Market Access Support | NKB Regovanta" },
      { name: "description", content: "Build the Right Evidence. Navigate the Right Pathway. NKB Regovanta supports IVD manufacturers in building a comprehensive regulatory strategy from product assessment through approval and post-market compliance." },
    ],
  }),
  component: IVD,
});

const services = [
  "IVD regulatory strategy",
  "Product classification",
  "EU IVDR compliance",
  "US FDA regulatory pathway assessment",
  "Performance evaluation strategy",
  "Scientific validity documentation",
  "Analytical performance documentation",
  "Clinical performance documentation",
  "Technical documentation",
  "Risk management",
  "ISO 13485 QMS support",
  "Labeling and intended-purpose review",
  "Notified Body readiness",
  "EUDAMED and UDI readiness",
  "Post-Market Performance Follow-up",
  "Vigilance and lifecycle compliance",
];

const alignmentSteps = [
  "Intended Purpose",
  "Classification",
  "Performance Claims",
  "Evidence",
  "Labeling",
];

const approachSteps = [
  "Define Intended Purpose",
  "Classify",
  "Assess Evidence",
  "Identify Gaps",
  "Build Documentation",
  "Support Approval",
  "Maintain Compliance",
];

function IVD() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white overflow-hidden" style={{ maxHeight: 300 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-stretch h-[300px]">
          <div className="flex flex-col justify-center py-6 pr-8">
            <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
              <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-navy">IVD</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">In Vitro Diagnostics</p>
            <h1 className="font-display font-extrabold leading-tight text-navy" style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}>
              IVD Regulatory &<br />Market Access Support
            </h1>
            <p className="mt-3 text-[13px] text-navy/70 leading-relaxed max-w-md font-medium italic">
              Build the Right Evidence. Navigate the Right Pathway.
            </p>
          </div>
          <div className="hidden lg:block h-full overflow-hidden">
            <img src={imgHero} alt="In Vitro Diagnostics" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[14px] text-navy/80 leading-relaxed">
            IVD market access depends on more than preparing regulatory documents. Intended purpose, classification, analytical performance, clinical performance, risk management, labeling and quality-system requirements must form one consistent regulatory strategy. NKB Regovanta supports IVD manufacturers in building that strategy from product assessment through regulatory submission and post-market compliance.
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

      {/* The Important Part */}
      <section className="py-12 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[18px] font-bold text-white mb-2">The Important Part</h2>
          <p className="text-[13.5px] text-white/70 mb-8">For an IVD, these five elements must align consistently:</p>
          <div className="flex flex-wrap items-center gap-0">
            {alignmentSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="px-4 py-2.5 bg-white/10 border border-white/20 text-white text-[12.5px] font-semibold rounded-sm whitespace-nowrap">{step}</div>
                {i < alignmentSteps.length - 1 && <ArrowRight className="h-4 w-4 text-white/40 mx-1.5" />}
              </div>
            ))}
          </div>
          <p className="mt-8 text-[13px] text-white/70 leading-relaxed max-w-3xl">
            This is where NKB Regovanta positions itself as the partner who ensures the whole regulatory story is consistent — not simply preparing documents in isolation.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[18px] font-bold text-navy mb-8">Our Approach</h2>
          <div className="flex flex-wrap items-center gap-0">
            {approachSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="px-3 py-2 bg-navy text-white text-[11.5px] font-semibold rounded-sm whitespace-nowrap">{step}</div>
                {i < approachSteps.length - 1 && <ArrowRight className="h-4 w-4 text-navy/40 mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-[17px] font-bold text-white">Ready to build a consistent IVD regulatory strategy?</h2>
            <p className="mt-1 text-[13px] text-white/70">Let NKB Regovanta align your evidence, documentation and pathway.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-sm bg-white text-navy font-semibold px-8 py-3 text-[13.5px] transition-colors hover:bg-white/90 shrink-0 whitespace-nowrap">
            Discuss Your IVD Regulatory Strategy
          </Link>
        </div>
      </section>
    </>
  );
}
