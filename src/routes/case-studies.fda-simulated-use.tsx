import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
const imgPlaceholder = "/assets/brain/cs_fda_simulated_use_1786441155542.png";

export const Route = createFileRoute("/case-studies/fda-simulated-use")({
  head: () => ({
    meta: [
      { title: "US FDA 510(k) | Avoiding Duplicate Work | Case Studies | NKB Regovanta" },
      { name: "description", content: "Avoiding Duplicate Simulated-Use Work by Leveraging an Already Marketed Safety Feature." },
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
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">US FDA 510(k) | SHARPS-INJURY PREVENTION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            Avoiding Duplicate Simulated-Use Work by Leveraging an Already Marketed Safety Feature
          </h1>
          <img src={imgPlaceholder} alt="US FDA 510(k)" className="w-full max-w-3xl mx-auto block h-[300px] object-cover rounded-md mb-12 shadow-sm" />
          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            
            <p className="lead font-medium text-navy/80">
              <strong>Client profile:</strong> International manufacturer preparing a 510(k) for a medical device incorporating a sharps-injury-prevention feature.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The manufacturer assumed a new, standalone usability / simulated-clinical-use program would automatically be required for the safety feature before the 510(k) could be filed.
              That approach would have added study planning, healthcare-professional recruitment, sample preparation, execution, analysis, and report-writing before submission.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Route That Could Have Cost More Time or Money</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Commissioning a new simulated-use study simply because the new device contained a sharps-safety mechanism, without first checking whether FDA guidance allowed existing legally marketed evidence to be leveraged.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What We Did</h2>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-6 space-y-2">
              <li>Reviewed the exact safety-feature design, activation method, intended users, use environment, and risk controls against FDA’s device-specific sharps-injury-prevention guidance.</li>
              <li>Identified a legally marketed device in which the same sharps-injury-prevention feature was already used, and assessed whether the feature could be appropriately identified in the 510(k) in lieu of repeating simulated clinical-use testing.</li>
              <li>Built a side-by-side comparison covering intended use, design features, specifications, materials, activation, safety performance, labeling, and relevant differences.</li>
              <li>Confirmed which performance evidence still needed to be generated for the new device itself and separated that from evidence specific to the already marketed sharps-safety feature.</li>
              <li>Prepared the regulatory rationale so that the decision was evidence-based rather than presented as a blanket “usability not required” statement.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">What NKB Did Differently</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We started with the FDA device-specific guidance and the legally marketed safety feature, not with a default testing checklist. The key question became: “What new evidence is genuinely needed for this device, and what evidence is already established for the same safety feature?”
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">How It Helped</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This prevented the client from automatically commissioning a duplicate simulated-use program before establishing whether FDA’s own guidance supported reliance on the already marketed feature.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Business / Regulatory Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A leaner evidence plan, fewer unnecessary pre-submission activities, and a 510(k) strategy focused on the performance questions that actually remained for the new device.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">NKB Insight</h2>
            <p className="text-navy font-medium italic border-l-4 border-accent pl-4 py-2 bg-surface">
              Good regulatory strategy does not remove testing by assumption. It identifies when FDA already provides a defensible route to avoid repeating evidence that is genuinely transferable.
            </p>
          </div>
        </div>
      </article>
      <CTABand title="Looking for a smarter 510(k) strategy?" description="NKB Regovanta can help." btnText="Contact Us Today" />
    </>
  );
}
