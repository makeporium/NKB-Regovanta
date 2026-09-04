import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
const imgPlaceholder = "/assets/brain/cs_eu_mdr_remediation_1786441191745.png";

export const Route = createFileRoute("/case-studies/eu-mdr-remediation")({
  head: () => ({
    meta: [
      { title: "EU MDR | Technical Documentation Remediation | Case Studies | NKB Regovanta" },
      { name: "description", content: "How NKB Regovanta remediated a failing EU MDR technical documentation dossier rejected by a Notified Body — including GSPR gap closure, clinical evaluation restructuring, and fast-track resubmission. Real regulatory outcome case study." },
      { name: "keywords", content: "EU MDR, Technical Documentation Remediation, Case Studies, case studies eu mdr remediation, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "EU MDR | Technical Documentation Remediation | Case Studies | NKB Regovanta" },
      { property: "og:description", content: "How NKB Regovanta remediated a failing EU MDR technical documentation dossier rejected by a Notified Body — including GSPR gap closure, clinical evaluation restructuring, and fast-track resubmission. Real regulatory o..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/case-studies/eu-mdr-remediation" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR | Technical Documentation Remediation | Case Studies | NKB Regovanta" },
      { name: "twitter:description", content: "How NKB Regovanta remediated a failing EU MDR technical documentation dossier rejected by a Notified Body — including GSPR gap closure, clinical evaluation restructuring, and fast-track resubmission. Real regulatory o..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/case-studies/eu-mdr-remediation" },
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
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">EU MDR | TECHNICAL DOCUMENTATION REMEDIATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            Converting a Legacy Technical File to MDR Without Rebuilding Everything From Zero
          </h1>
          <img src={imgPlaceholder} alt="EU MDR Technical Documentation Remediation" className="w-full max-w-3xl mx-auto block h-[300px] object-cover rounded-md mb-12 shadow-sm" />
          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            
            <p className="lead font-medium text-navy/80">
              <strong>Client profile:</strong> Established medical-device manufacturer transitioning a mature product and legacy technical documentation to Regulation (EU) 2017/745.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The manufacturer had years of design, verification, risk, clinical and post-market documentation, but the information had been created under an earlier regulatory framework and was not organized around MDR expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The internal assumption was that “MDR means rewrite everything,” creating a large remediation project with significant cost and document churn.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Route That Could Have Cost More Time or Money</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Rebuilding the entire technical file from blank templates, even where legacy evidence remained valid and useful.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What We Did</h2>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-6 space-y-2">
              <li>Mapped existing evidence against MDR Annex II and Annex III expectations and created a prioritized gap register.</li>
              <li>Separated content that could be retained, content that needed updating, and genuinely missing evidence.</li>
              <li>Rebuilt traceability between GSPRs, risk management, verification/validation, clinical evaluation, labeling, PMS and PMCF activities.</li>
              <li>Focused remediation on regulatory gaps rather than document replacement for its own sake.</li>
              <li>Reorganized the final technical documentation into a clear, searchable structure suitable for conformity-assessment review.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">What NKB Did Differently</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We treated the project as evidence remediation and traceability engineering—not as a document-writing exercise.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">How It Helped</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The manufacturer retained valid historical evidence, avoided unnecessary rewriting, and concentrated internal SMEs on the gaps that mattered to MDR conformity.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Business / Regulatory Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A more coherent MDR technical file, reduced documentation rework, and better traceability across design, risk, clinical and post-market evidence.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">NKB Insight</h2>
            <p className="text-navy font-medium italic border-l-4 border-accent pl-4 py-2 bg-surface">
              MDR readiness is not measured by how many documents you rewrite. It is measured by whether the evidence is complete, current, traceable and reviewable.
            </p>
          </div>
        </div>
      </article>
      <CTABand title="Need help transitioning your legacy files?" description="NKB Regovanta can assist you with your MDR transition strategy." btnText="Contact Us Today" />
    </>
  );
}
