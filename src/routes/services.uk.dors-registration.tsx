import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Database,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/dors-registration")({
  head: () => ({
    meta: [
      { title: "Device Registration via MHRA DORS Portal | NKB Regovanta" },
      {
        name: "description",
        content:
          "End-to-end medical device and IVD registration through the MHRA Device Online Registration System (DORS) portal.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/mhra-registration" }],
  }),
  component: DORSPage,
});

function DORSPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/uk" className="hover:text-navy transition-colors">United Kingdom</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">DORS Registration</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl">
              Device Online Registration System (DORS)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              We manage your complete MHRA registration dataset in DORS, verifying product classification, GMDN nomenclature, and UKRP authorization.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services/uk/mhra-registration"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                View Full MHRA Registration Service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Register Your Medical Devices on the MHRA Public Register"
        description="Connect with our UK regulatory team to file your DORS application."
      />
    </>
  );
}
