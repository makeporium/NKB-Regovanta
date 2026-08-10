import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import imgHero from "@/assets/industry-cosmetics.png";

export const Route = createFileRoute("/industries/cosmetics")({
  head: () => ({
    meta: [
      { title: "Global Cosmetics Regulatory & Compliance Support | NKB Regovanta" },
      { name: "description", content: "Take Your Cosmetic Products to Market with Confidence. NKB Regovanta helps cosmetic manufacturers and brands identify regulatory requirements early and establish a practical pathway to compliant market entry." },
    ],
  }),
  component: Cosmetics,
});

const services = [
  "Formula and ingredient compliance review",
  "Restricted/prohibited ingredient assessment",
  "Product safety documentation",
  "Cosmetic claims review",
  "Label and INCI review",
  "Product Information File (PIF) support",
  "Cosmetic Product Safety Report (CPSR) support",
  "EU Responsible Person requirements",
  "EU CPNP notification",
  "UK Responsible Person requirements",
  "UK SCPN notification",
  "US FDA MoCRA compliance support",
  "Facility registration/product listing support where applicable",
  "Post-market compliance",
];

const markets = [
  { code: "eu", name: "European Union", auth: "EU Cosmetics Regulation & CPNP", route: "/services/eu" },
  { code: "gb", name: "Great Britain", auth: "UK Cosmetics requirements & SCPN", route: "/services/uk" },
  { code: "us", name: "USA", auth: "FDA / MoCRA", route: "/services/usa" },
  { code: "un", name: "Other Markets", auth: "Requirements assessed per target country", route: "/markets" },
];

const approachSteps = [
  "Review Product",
  "Check Ingredients",
  "Review Safety",
  "Review Claims & Label",
  "Prepare Documentation",
  "Notify/Register",
  "Maintain Compliance",
];

function Cosmetics() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white overflow-hidden" style={{ maxHeight: 300 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-stretch h-[300px]">
          <div className="flex flex-col justify-center py-6 pr-8">
            <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
              <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-navy">Cosmetics</span>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">Cosmetics</p>
            <h1 className="font-display font-extrabold leading-tight text-navy" style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}>
              Global Cosmetics Regulatory<br />& Compliance Support
            </h1>
            <p className="mt-3 text-[13px] text-navy/70 leading-relaxed max-w-md font-medium italic">
              Take Your Cosmetic Products to Market with Confidence.
            </p>
          </div>
          <div className="hidden lg:block h-full overflow-hidden">
            <img src={imgHero} alt="Cosmetics Regulatory" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[14px] text-navy/80 leading-relaxed">
            Cosmetic requirements vary significantly between global markets. Ingredients, product safety, claims, labeling, responsible-person requirements and product notification must all be considered before launch. NKB Regovanta helps cosmetic manufacturers and brands identify regulatory requirements early and establish a practical pathway to compliant market entry.
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
          <h2 className="text-[18px] font-bold text-navy mb-8">Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {markets.map((m) => (
              <Link key={m.name} to={m.route} className="flex items-start gap-4 p-5 bg-white rounded-lg border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-md group">
                <img
                    src={`https://flagcdn.com/w40/${m.code}.png`}
                    srcSet={`https://flagcdn.com/w80/${m.code}.png 2x`}
                    width="32"
                    alt={m.name}
                    className="shrink-0 mt-1 rounded-[2px] shadow-sm border border-black/10 group-hover:shadow-md transition-shadow"
                />
                <div>
                  <div className="text-[13px] font-bold text-navy group-hover:text-accent transition-colors">{m.name}</div>
                  <div className="text-[12px] text-navy/60 mt-0.5 leading-snug group-hover:text-navy/80">{m.auth}</div>
                </div>
              </Link>
            ))}
          </div>
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
            <h2 className="text-[17px] font-bold text-white">Ready to bring your cosmetic products to market compliantly?</h2>
            <p className="mt-1 text-[13px] text-white/70">Let NKB Regovanta map your regulatory pathway.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-sm bg-white text-navy font-semibold px-8 py-3 text-[13.5px] transition-colors hover:bg-white/90 shrink-0 whitespace-nowrap">
            Discuss Your Cosmetics Market Entry
          </Link>
        </div>
      </section>
    </>
  );
}
