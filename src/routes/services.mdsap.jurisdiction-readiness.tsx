import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Target,
  FileCheck2,
  Layers,
  HelpCircle,
  Building2,
  Globe2,
  AlertTriangle,
  FileSearch,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/jurisdiction-readiness")({
  head: () => ({
    meta: [
      {
        title: "Jurisdiction-Specific Regulatory Readiness | 5 MDSAP Countries | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Address country-specific regulatory overlays for Australia (TGA), Brazil (ANVISA), Canada (Health Canada), Japan (MHLW/PMDA), and the USA (FDA).",
      },
      {
        property: "og:title",
        content: "Jurisdiction-Specific Regulatory Readiness | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "One audit model with five regulatory overlays. Build jurisdiction-to-process maps and embed country-specific triggers into your QMS.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/mdsap/jurisdiction-readiness",
      },
    ],
  }),
  component: JurisdictionReadinessPage,
});

function JurisdictionReadinessPage() {
  const supportItems = [
    "Australia: TGA-facing QMS and regulatory control mapping",
    "Brazil: ANVISA-specific QMS and regulatory obligation mapping",
    "Canada: Health Canada medical device licensing and MDSAP dependency readiness",
    "Japan: MHLW / PMDA regulatory requirement mapping",
    "United States: FDA QMS (21 CFR Part 820 / QMSR) and regulatory requirement mapping",
    "Device registration / listing status review across all target markets",
    "Facility registration / licensing control",
    "Country-specific complaint and adverse-event reporting logic",
    "Advisory notice / recall requirement mapping",
    "Local record-retention and regulatory communication controls",
    "Regulatory change monitoring and implementation evidence",
  ];

  const auditorTesting = [
    "Whether market authorization status matches devices actually supplied to customers",
    "Whether registrations and facility obligations remain current with health authorities",
    "Whether reportability decisions systematically consider every applicable jurisdiction",
    "Whether local regulatory actions are integrated into CAPA and engineering change control",
    "Whether the QMS can show evidence for each country without contradictory procedures",
  ];

  const countries = [
    { name: "Australia", auth: "Therapeutic Goods Administration (TGA)", code: "au" },
    { name: "Brazil", auth: "Agência Nacional de Vigilância Sanitária (ANVISA)", code: "br" },
    { name: "Canada", auth: "Health Canada (Mandatory for Class II, III, IV)", code: "ca" },
    { name: "Japan", auth: "Ministry of Health, Labour and Welfare (MHLW) / PMDA", code: "jp" },
    { name: "United States", auth: "U.S. Food and Drug Administration (FDA)", code: "us" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/mdsap" className="hover:text-navy transition-colors">
              MDSAP
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Jurisdiction Readiness</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #5
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              Jurisdiction-Specific Regulatory Readiness
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              One Audit Model - Five Regulatory Overlays
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              MDSAP creates a common audit framework, but each participating jurisdiction retains its own regulatory obligations. The manufacturer must be able to demonstrate that market authorization, establishment requirements, reporting obligations and other country-specific controls are current and linked to the QMS.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Strengthen Your 5-Jurisdiction Readiness <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Countries Overview Cards */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {countries.map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-gray-200 text-center flex flex-col justify-between">
                <div>
                  <div className="flex justify-center mb-2">
                    <img
                      src={`https://flagcdn.com/w80/${c.code}.png`}
                      srcSet={`https://flagcdn.com/w160/${c.code}.png 2x`}
                      alt={`${c.name} Flag`}
                      className="w-12 h-7.5 object-cover rounded shadow-2xs border border-gray-200"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-sm font-extrabold text-navy">{c.name}</h3>
                </div>
                <p className="text-[11px] text-navy/70 font-medium mt-1">{c.auth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
                Country-Specific Deliverables
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Jurisdiction Readiness Support Includes
              </h2>
              <ul className="space-y-3">
                {supportItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0b7261] shrink-0 mt-0.5" />
                    <span className="text-sm text-navy/80 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200 shadow-2xs">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
                  Auditor Expectations
                </div>
                <h3 className="text-xl font-extrabold text-navy mb-4">
                  What the Auditor Is Really Testing
                </h3>
                <ul className="space-y-3">
                  {auditorTesting.map((test, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-navy/80 font-medium leading-relaxed">
                        {test}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  How NKB Regovanta Approaches It
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                  We build a <strong>jurisdiction-to-process map</strong> rather than a country-by-country binder. For each applicable requirement we identify the process owner, trigger, decision logic, record, escalation route and evidence location. This allows an auditor to move from an MDSAP task into the relevant country requirement without finding a regulatory gap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Harmonize 5 Country Requirements?"
        description="Let NKB Regovanta embed country-specific regulatory logic across your entire medical device quality management system."
      />
    </>
  );
}
