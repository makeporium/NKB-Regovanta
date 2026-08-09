import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgFDA from "@/assets/regulatory-pathway.jpg";

export const Route = createFileRoute("/insights/fda-qmsr-2026")({
  head: () => ({
    meta: [
      { title: "FDA QMSR 2026 | Insights | NKB Regovanta" },
      {
        name: "description",
        content:
          "A practical overview of FDA QMSR 2026, ISO 13485 alignment, record expectations and actions medical device manufacturers should take to maintain compliance.",
      },
    ],
  }),
  component: Article,
});

function Article() {
  return (
    <>
      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">Regulatory News</span>
            <span className="text-navy/30 text-sm">•</span>
            <span className="text-sm font-medium text-navy/60">May 15, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            FDA QMSR 2026: What Medical Device Manufacturers Need to Know
          </h1>

          <img src={imgFDA} alt="FDA QMSR" className="w-full h-[400px] object-cover rounded-md mb-12 shadow-sm" />

          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            <p className="lead text-xl text-navy/80 font-medium mb-8">
              For medical-device manufacturers, 2026 brings practical regulatory changes that should be translated into clear actions across quality, regulatory and operational teams.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">A major change is now in effect</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              On February 2, 2026, FDA’s Quality Management System Regulation (QMSR) became effective. The revised 21 CFR Part 820 incorporates ISO 13485:2016 by reference and is intended to more closely align the U.S. medical-device quality framework with internationally recognized quality-management requirements.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What changed for manufacturers</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The transition is more than a terminology update. Manufacturers should ensure that their quality management system is structured to meet the QMSR requirements together with other applicable FDA requirements. Companies that already operate an ISO 13485-certified QMS may have a strong foundation, but certification alone does not establish FDA compliance. U.S.-specific regulatory obligations still need to be addressed within procedures, records and day-to-day execution.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Records require particular attention</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              FDA has clarified that investigators may review QMS records created before the QMSR effective date when assessing compliance. The agency may also inspect records such as management review, quality audit and supplier audit reports that previously benefited from specific inspection exemptions under the former Quality System Regulation. This makes record completeness, consistency and traceability especially important.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Practical actions to take now</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Manufacturers should perform a documented gap assessment between their existing system and the QMSR framework; update procedures and terminology where necessary; verify that U.S.-specific requirements are integrated into the QMS; assess supplier, complaint, CAPA, design and risk-management processes; confirm management-review and audit records are inspection-ready; and train relevant personnel on the new FDA expectations.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The compliance objective</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The strongest approach is not simply to “convert” old procedures. Organizations should demonstrate that their QMS is implemented, effective and supported by objective evidence. A well-integrated system can reduce duplication between U.S. and international quality requirements while improving inspection readiness and operational consistency.
            </p>
          </div>

        </div>
      </article>

      <CTABand 
        title="Need support assessing your QMS against the FDA QMSR?" 
        description="NKB Regovanta can help with gap assessment, procedure alignment, internal audits and inspection-readiness support." 
        btnText="Contact Us Today" 
      />
    </>
  );
}
