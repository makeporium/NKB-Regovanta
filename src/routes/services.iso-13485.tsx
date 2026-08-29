import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ClipboardCheck, Cog, LineChart, Search, ShieldCheck, Users, Globe2 } from "lucide-react";
import imgISO from "@/assets/iso.png";

export const Route = createFileRoute("/services/iso-13485")({
  head: () => ({
    meta: [
      { title: "ISO 13485:2016 Implementation Consultant & Certification | NKB Regovanta" },
      {
        name: "description",
        content:
          "End-to-end support for ISO 13485:2016 Quality Management System implementation, certification support, FDA Quality Management System Regulation (QMSR 21 CFR Part 820), ISO 14971 Risk Management, and mock audits.",
      },
      {
        name: "keywords",
        content:
          "ISO 13485 implementation consultant, ISO 13485:2016 certification support, FDA Quality Management System Regulation (QMSR 21 CFR Part 820), FDA 21 CFR Part 820 to QMSR transition, Internal audit medical devices ISO 13485, Mock FDA inspection / Notified Body mock audit, ISO 14971 Risk Management for medical devices, CAPA remediation and FDA 483 response consultant, Warning Letter remediation FDA, NKB Regovanta",
      },
      { property: "og:title", content: "ISO 13485 QMS Implementation & Certification Support | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Comprehensive ISO 13485:2016 design, internal audits, FDA QMSR alignment, and certification audit readiness for medical device manufacturers.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/iso-13485" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/iso-13485" },
    ],
  }),
  component: Iso13485,
});

const approach = [
  { icon: Search, title: "Gap Assessment", desc: "Identify gaps & opportunities." },
  { icon: ClipboardCheck, title: "QMS Design", desc: "Build a risk-based QMS framework." },
  { icon: Cog, title: "Implementation", desc: "Document, implement & train your team." },
  { icon: ClipboardCheck, title: "Internal Audit", desc: "Ensure readiness with internal audits." },
  { icon: LineChart, title: "Management Review", desc: "Drive continual improvement." },
  { icon: ShieldCheck, title: "Certification Support", desc: "Support through certification audit." },
];

const trusted = [
  { icon: Users, title: "Experienced QMS Experts" },
  { icon: ClipboardCheck, title: "Proven Methodologies" },
  { icon: ShieldCheck, title: "Regulatory Compliance" },
  { icon: LineChart, title: "Improved Quality & Efficiency" },
  { icon: Globe2, title: "Global Industry Experience" },
];

function Iso13485() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white overflow-hidden" style={{ maxHeight: 280 }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-stretch h-[280px]">
          {/* Left */}
          <div className="flex flex-col justify-center py-6 pr-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-3">ISO 13485</p>
            <h1 className="font-display font-extrabold leading-tight text-navy" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
              Build a QMS That Works<br />Beyond Certification
            </h1>
            <p className="mt-4 text-[13.5px] text-navy/70 leading-relaxed max-w-sm">
              End-to-end support for ISO 13485 Quality Management System implementation and certification.
            </p>
          </div>

          {/* Right — image flush to edge, no extra padding */}
          <div className="relative hidden lg:block h-full">
            <img
              src={imgISO}
              alt="ISO 13485 Certification"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── Implementation Approach ── */}
      <section className="py-10 border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[15px] font-bold text-navy mb-8">Our ISO 13485 Implementation Approach</h2>
          <div className="flex flex-wrap justify-center items-start gap-0">
            {approach.map((a, i) => (
              <div key={a.title} className="flex items-start gap-4">
                <div className="flex flex-col items-center text-center w-[110px]">
                  <div className="mb-3">
                    <a.icon className="h-8 w-8 text-navy" />
                  </div>
                  <h3 className="text-[11.5px] font-bold text-navy">{a.title}</h3>
                  <p className="mt-1 text-[11px] text-navy/60 leading-snug">{a.desc}</p>
                </div>
                {i < approach.length - 1 && (
                  <div className="text-navy/30 font-bold text-lg mt-3 mx-1">›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="py-10 border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-[14px] font-bold text-navy mb-7">Trusted by Medical Device Companies Worldwide</h3>
          <div className="flex flex-nowrap justify-center items-center gap-0 overflow-x-auto">
            {trusted.map((t, i) => (
              <>
                <div key={t.title} className="flex items-center gap-2 px-4 shrink-0">
                  <t.icon className="h-4 w-4 text-navy shrink-0" />
                  <span className="text-[11.5px] font-semibold text-navy whitespace-nowrap">{t.title}</span>
                </div>
                {i < trusted.length - 1 && (
                  <div className="w-px h-5 bg-border shrink-0" />
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-navy text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-[17px] font-bold text-white">Let's strengthen your Quality Management System.</h2>
            <p className="mt-1 text-[13px] text-white/75">Partner with NKB for ISO 13485 success.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white text-navy font-semibold px-8 py-3 text-[13.5px] transition-colors hover:bg-white/90 shrink-0"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}