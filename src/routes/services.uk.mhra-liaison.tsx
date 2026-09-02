import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  Building2,
  Globe2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/mhra-liaison")({
  head: () => ({
    meta: [
      { title: "MHRA Communication Liaison & Authority Representation | NKB Regovanta" },
      {
        name: "description",
        content:
          "Official communication liaison with the UK Medicines and Healthcare products Regulatory Agency (MHRA) for overseas manufacturers.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/ukrp" }],
  }),
  component: MHRALiaisonPage,
});

function MHRALiaisonPage() {
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
            <span className="text-navy">MHRA Liaison</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl">
              MHRA Communication Liaison
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              As your appointed UK Responsible Person, we act as your definitive point of contact for all regulatory communications, inspections, and inquiries from the MHRA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services/uk/ukrp"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                View Full UKRP Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish Direct, Professional Representation with the MHRA"
        description="Partner with NKB Regovanta as your UK Responsible Person."
      />
    </>
  );
}
