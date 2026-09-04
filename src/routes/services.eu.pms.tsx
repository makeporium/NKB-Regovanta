import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/pms")({
  head: () => ({
    meta: [
      { title: "EU MDR Post-Market Surveillance (PMS) & Vigilance | NKB Regovanta" },
      {
        name: "description", content: "EU MDR post-market surveillance (PMS) consulting including PMCF planning, Periodic Safety Update Reports (PSUR), Post-Market Clinical Follow-Up (PMCF), PMS plan and report preparation for CE-marked medical devices under EU MDR 2017/745.",
      },
      { name: "keywords", content: "EU MDR Post-Market Surveillance (PMS) & Vigilance, services eu pms pmcf, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "EU MDR Post-Market Surveillance (PMS) & Vigilance | NKB Regovanta" },
      { property: "og:description", content: "EU MDR post-market surveillance (PMS) consulting including PMCF planning, Periodic Safety Update Reports (PSUR), Post-Market Clinical Follow-Up (PMCF), PMS plan and report preparation for CE-marked medical devices und..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/pms-pmcf" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR Post-Market Surveillance (PMS) & Vigilance | NKB Regovanta" },
      { name: "twitter:description", content: "EU MDR post-market surveillance (PMS) consulting including PMCF planning, Periodic Safety Update Reports (PSUR), Post-Market Clinical Follow-Up (PMCF), PMS plan and report preparation for CE-marked medical devices und..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/pms-pmcf" }],
  }),
  component: EUPMSLegacyPage,
});

function EUPMSLegacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu" className="hover:text-navy transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">PMS &amp; Vigilance</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl">
              Post-Market Surveillance, PMCF &amp; Vigilance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Post-market compliance is an active clinical and quality evidence system. We connect complaints, safety signals, risk management updates, and clinical evaluations into one unified lifecycle process.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services/eu/pms-pmcf"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                View Full PMS &amp; PMCF Architecture <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Defensible Post-Market Compliance"
        description="Our experts structure PMS plans, PSURs, and PMCF studies that protect your CE mark certification."
      />
    </>
  );
}
