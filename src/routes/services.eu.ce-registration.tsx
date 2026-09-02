import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Award,
  ArrowRight,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/ce-registration")({
  head: () => ({
    meta: [
      { title: "CE Device Registration Pathway Europe | NKB Regovanta" },
      {
        name: "description",
        content:
          "CE marking and device registration services for medical devices and IVDs in the European Union.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ce-marking" }],
  }),
  component: CERegistrationPage,
});

function CERegistrationPage() {
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
            <span className="text-navy">CE Registration</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl">
              CE Device Registration Pathway
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              NKB Regovanta oversees the complete EU CE-marking and device registration journey under MDR 2017/745 and IVDR 2017/746.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services/eu/ce-marking"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                View Full CE Marking &amp; Registration Architecture <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Achieve Seamless CE Marking Clearance in Europe"
        description="Connect with our EU regulatory team to plan your conformity assessment."
      />
    </>
  );
}
