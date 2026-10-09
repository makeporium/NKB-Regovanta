import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, Phone, Mail, Clock, ShieldCheck, FileCheck2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You for Your Response | NKB Regovanta" },
      {
        name: "description",
        content: "Thank you for reaching out to NKB Regovanta. Our regulatory specialists have received your inquiry and will connect with you shortly.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/thank-you" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-[80vh] bg-surface py-12 lg:py-20 flex items-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Card */}
        <div className="card-elevated p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Decorative Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-blue-500 to-navy" />

          {/* Success Check Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/60 shadow-sm animate-in zoom-in-50 duration-300">
            <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
          </div>

          <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-accent bg-accent/10 rounded-full mb-3">
            Inquiry Submitted Successfully
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
            Thank You for Your Response!
          </h1>

          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We have received your regulatory consultation inquiry. Our team of regulatory affairs, quality systems, and compliance specialists will review your submission and connect with you promptly.
          </p>

          {/* Next Steps Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-t border-b border-border py-6 my-6">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-surface/60">
              <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Fast Turnaround</h4>
                <p className="text-[12px] text-muted-foreground mt-1">
                  We typically review and respond within <strong>24 business hours</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-surface/60">
              <FileCheck2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Technical Review</h4>
                <p className="text-[12px] text-muted-foreground mt-1">
                  Our specialists evaluate your device/product pathway requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-surface/60">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Confidentiality</h4>
                <p className="text-[12px] text-muted-foreground mt-1">
                  All technical documents & specifications are held strictly confidential.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Urgent Contact */}
          <div className="rounded-lg bg-slate-50 border border-slate-200/80 p-4 text-xs text-slate-600 mb-8 max-w-lg mx-auto">
            <span className="font-bold text-navy">Need urgent assistance? </span>
            Reach us immediately at{" "}
            <a href="tel:+919513699000" className="font-semibold text-accent hover:underline">
              +91 95136 99000
            </a>{" "}
            or email{" "}
            <a href="mailto:contact@nkbregovanta.com" className="font-semibold text-accent hover:underline">
              contact@nkbregovanta.com
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-navy-deep"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Website
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-accent/10 hover:border-accent"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/insights"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-accent/10 hover:border-accent"
            >
              Browse Insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
