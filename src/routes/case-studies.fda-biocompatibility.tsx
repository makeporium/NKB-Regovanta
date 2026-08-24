import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
const imgPlaceholder = "/assets/brain/cs_fda_biocompatibility_1786441176273.png";

export const Route = createFileRoute("/case-studies/fda-biocompatibility")({
  head: () => ({
    meta: [
      { title: "US FDA 510(k) | Biocompatibility Equivalence | Case Studies | NKB Regovanta" },
      { name: "description", content: "Using Predicate and Material Equivalence to Avoid Repeating Biocompatibility Testing Without Regulatory Need" },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/case-studies/fda-biocompatibility" },
  ],
  }),
  component: Article,
});

function Article() {
  return (
    <>
      <article className="bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">US FDA 510(k) | PREDICATE + BIOCOMPATIBILITY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            Using Predicate and Material Equivalence to Avoid Repeating Biocompatibility Testing Without Regulatory Need
          </h1>
          <img src={imgPlaceholder} alt="US FDA 510(k) Biocompatibility" className="w-full max-w-3xl mx-auto block h-[300px] object-cover rounded-md mb-12 shadow-sm" />
          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            
            <p className="lead font-medium text-navy/80">
              <strong>Client profile:</strong> Anonymized medical-device manufacturer preparing a US 510(k) where the patient-contacting materials, manufacturing/processing conditions and contact profile could be compared with legally marketed device evidence.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The initial submission plan assumed that a fresh biocompatibility test package was automatically required. Before commissioning testing, we assessed whether the biological safety question could be addressed through a documented bridge to existing legally marketed device information.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The commercial risk was not simply test cost: unnecessary testing could add sample preparation, laboratory scheduling and report-review time without improving the biological safety argument if the relevant materials, processing and contact conditions were already adequately supported.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Route That Could Have Cost More Time or Money</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Repeating a full biological test program before establishing whether the final finished device, patient-contacting materials, manufacturing/processing, intended use and contact profile were sufficiently aligned with existing legally marketed device information.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What We Did</h2>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-6 space-y-2">
              <li>Mapped the device’s intended use and patient-contact scenario, including tissue/contact type and duration, and reviewed the formulation, additives, colorants, manufacturing/processing and sterilization information relevant to the final finished device, as applicable.</li>
              <li>Compared those factors with the selected legally marketed device information and assessed whether FDA’s 510(k) and ISO 10993-1 risk-based framework supported reliance on existing information rather than automatic repeat testing.</li>
              <li>Prepared a structured biocompatibility bridge showing what was identical or sufficiently supported, what evidence was available, and why the comparison was relevant to the biological endpoints associated with the device’s contact category.</li>
              <li>Flagged any differences—such as material formulation, processing, sterilization, contact type or duration—that could create a residual biological risk and therefore require additional information or testing.</li>
              <li>Integrated the rationale into the broader substantial-equivalence and risk-management story for the 510(k).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">What NKB Did Differently</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We did not start by ordering tests. We first tested the regulatory and scientific hypothesis: does the available evidence adequately cover the final finished device, materials, processing, intended use and contact profile, and are any differences biologically relevant?
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">How It Helped</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This converted “biocompatibility testing” into a documented evidence-gap assessment. Existing evidence was leveraged only where the bridge was supportable; unresolved biological risks remained candidates for additional information or testing.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Business / Regulatory Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A more focused biological evaluation strategy, reduced risk of duplicate testing, and a clearer 510(k) rationale connecting intended use, patient contact, materials, processing and residual risk.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">NKB Insight</h2>
            <p className="text-navy font-medium italic border-l-4 border-accent pl-4 py-2 bg-surface">
              Biocompatibility is a biological-safety evaluation, not an automatic testing checklist. The defensible question is whether existing evidence adequately addresses the final finished device and its contact risks—and, if not, what additional evidence is actually needed.
            </p>
          </div>
        </div>
      </article>
      <CTABand title="Looking for a smarter evaluation strategy?" description="NKB Regovanta can help." btnText="Contact Us Today" />
    </>
  );
}
