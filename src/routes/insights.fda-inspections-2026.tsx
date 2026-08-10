import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgInsp from "@/assets/iso.png";

export const Route = createFileRoute("/insights/fda-inspections-2026")({
  head: () => ({
    meta: [
      { title: "FDA Inspections 2026 | Insights | NKB Regovanta" },
      {
        name: "description",
        content:
          "How to prepare for FDA medical-device inspections under the 2026 QMSR-aligned Compliance Program 7382.850, including records, audits and readiness practices.",
      },
    ],
  }),
  component: Article,
});

function Article() {
  return (
    <>
      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">Best Practices</span>
            <span className="text-navy/30 text-sm">•</span>
            <span className="text-sm font-medium text-navy/60">June 10, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            FDA Medical Device Inspections in 2026: Preparing for the New QMSR Framework
          </h1>

          <img src={imgInsp} alt="FDA Inspections" className="w-full h-[400px] object-cover rounded-md mb-12 shadow-sm" />

          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            <p className="lead text-xl text-navy/80 font-medium mb-8">
              For medical-device manufacturers, 2026 brings practical regulatory changes that should be translated into clear actions across quality, regulatory and operational teams.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">QSIT has been replaced</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Beginning February 2, 2026, FDA stopped using the Quality System Inspection Technique (QSIT) for medical-device inspections. Inspections are now conducted using the updated Inspection of Medical Device Manufacturers Compliance Program, CP 7382.850, which aligns the inspection process with the QMSR.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Expect a system-level assessment</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The best preparation is a QMS that works consistently in practice. Investigators may evaluate whether procedures are implemented, whether records support the claimed process, and whether quality issues are identified, investigated and corrected appropriately. A polished SOP without matching evidence can create greater scrutiny rather than confidence.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">More records may be available for review</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              FDA’s QMSR FAQ confirms that investigators may review records created before February 2, 2026 when determining compliance. Importantly, the QMSR no longer maintains the prior inspection exemptions for management-review, quality-audit and supplier-audit reports. Companies should therefore ensure these records are complete, controlled and suitable for regulatory review.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Inspection-readiness checklist</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Maintain current organizational and facility information; ensure requested records can be retrieved promptly; verify CAPA, complaint, nonconformance and supplier-control files for consistency; confirm design and development records are traceable where applicable; review management-review and internal-audit outputs; verify training records; assess risk-management linkages; and conduct a realistic mock inspection using representative records.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Prepare people as well as documents</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Subject-matter experts should understand their processes and be able to explain them clearly and accurately. Responses should be factual, concise and supported by records. Teams should know how inspection requests are logged, who approves document release, how copies are controlled and how emerging observations are escalated internally.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Use the transition as an improvement opportunity</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The change from QSIT to the QMSR-aligned inspection process is an opportunity to reduce fragmented compliance practices. Organizations that integrate ISO 13485 principles, FDA-specific requirements and risk-based quality management into one coherent system will be better positioned for both inspections and routine operations.
            </p>
          </div>

        </div>
      </article>

      <CTABand 
        title="Preparing for an FDA inspection?" 
        description="NKB Regovanta can support QMSR gap assessments, mock inspections, CAPA remediation, supplier-quality reviews and inspection-readiness programs." 
        btnText="Contact Us Today" 
      />
    </>
  );
}
