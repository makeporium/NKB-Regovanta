import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, FileSearch, LineChart, ShieldCheck, Users, Search, ClipboardCheck, Globe2 } from "lucide-react";
import imgMdsap from "@/assets/mdsap.png";

export const Route = createFileRoute("/services/mdsap")({
  head: () => ({
    meta: [
      { title: "MDSAP Readiness & Audit Consultant India | NKB Regovanta" },
      {
        name: "description",
        content:
          "Build an audit-ready quality system aligned with the Medical Device Single Audit Program.",
      },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/mdsap" },
  ],
  }),
  component: Mdsap,
});

const authorities = [
  { flag: "🇦🇺", name: "TGA", country: "Australia" },
  { flag: "🇧🇷", name: "ANVISA", country: "Brazil" },
  { flag: "🇨🇦", name: "Health Canada", country: "Canada" },
  { flag: "🇯🇵", name: "MHLW / PMDA", country: "Japan" },
  { flag: "🇺🇸", name: "FDA", country: "USA" },
];

const process = [
  { icon: Search, title: "MDSAP Readiness Assessment", desc: "Evaluate your QMS against MDSAP requirements." },
  { icon: LineChart, title: "Gap Analysis & Planning", desc: "Identify gaps and build a roadmap for compliance." },
  { icon: ClipboardCheck, title: "QMS Implementation Support", desc: "Implement and align your QMS to MDSAP standards." },
  { icon: Users, title: "Audit Preparation & Mock Audits", desc: "Prepare your team and systems for successful audits." },
  { icon: CheckCircle2, title: "Regulatory Authority Coordination", desc: "Coordinate with the 5 MDSAP regulatory authorities." },
  { icon: ShieldCheck, title: "Certification Support", desc: "End-to-end support through certification and beyond." },
];

function Mdsap() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white overflow-hidden" style={{ maxHeight: 280 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-stretch h-[280px]">
          {/* Left */}
          <div className="flex flex-col justify-center py-6 pr-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-3">MDSAP</p>
            <h1 className="font-display font-extrabold leading-tight text-navy" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
              Prepare for MDSAP<br />with Confidence
            </h1>
            <p className="mt-4 text-[13.5px] text-navy/70 leading-relaxed max-w-sm">
              Build an audit-ready quality system aligned with the Medical Device Single Audit Program and the regulatory expectations of participating authorities.
            </p>
          </div>

          {/* Right — image flush to edge */}
          <div className="hidden lg:block h-full">
            <img
              src={imgMdsap}
              alt="MDSAP Audit Preparation"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>



      {/* ── Implementation Approach ── */}
      <section className="py-10 border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[15px] font-bold text-navy mb-8">Our MDSAP Preparation Approach</h2>
          <div className="flex flex-wrap justify-center items-start gap-0">
            {process.map((p, i) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="flex flex-col items-center text-center w-[120px]">
                  <div className="mb-3">
                    <p.icon className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="text-[11.5px] font-bold text-navy">{p.title}</h3>
                  <p className="mt-1 text-[11px] text-navy/60 leading-snug">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="text-navy/30 font-bold text-lg mt-3 mx-1">›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MDSAP Banner ── */}
      <section className="py-5 border-t border-border bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Globe2 className="h-6 w-6 text-navy shrink-0" />
            <p className="text-[13.5px] text-navy">
              <span className="font-bold">MDSAP opens doors to 5 key markets</span>{" "}
              through a single audit.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy hover:text-navy/70 transition-colors shrink-0 whitespace-nowrap">
            Learn More About MDSAP <span className="text-base">→</span>
          </Link>
        </div>
      </section>

      {/* ── Stats + CTA Band ── */}
      <section className="bg-navy text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Users className="h-7 w-7 text-white/70 shrink-0" />
              <div className="text-[12px] font-semibold leading-snug text-white">
                <div className="text-[18px] font-extrabold">20+</div>
                Years of Regulatory<br/>Excellence
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe2 className="h-7 w-7 text-white/70 shrink-0" />
              <div className="text-[12px] font-semibold leading-snug text-white">
                Global Reach<br/>Local Expertise
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-7 w-7 text-white/70 shrink-0" />
              <div className="text-[12px] font-semibold leading-snug text-white">
                Trusted by<br/>Global Innovators
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-white text-white font-semibold px-8 py-3 text-[13.5px] transition-colors hover:bg-white hover:text-navy shrink-0 whitespace-nowrap"
          >
            Let's Navigate MDSAP Together
          </Link>
        </div>
      </section>
    </>
  );
}