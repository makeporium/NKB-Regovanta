import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
const imgPlaceholder = "/assets/brain/cs_algorithm_claim_1786441224937.png";

export const Route = createFileRoute("/case-studies/algorithm-claim")({
  head: () => ({
    meta: [
      { title: "The Algorithm Can Do More. Should the Label? | Case Studies | NKB Regovanta" },
      { name: "description", content: "How NKB Regovanta helped expand a cleared AI diagnostic device label through post-market algorithm validation aligned with FDA AI/ML action plan and predetermined change control protocol. A real regulatory strategy case study." },
      { name: "keywords", content: "The Algorithm Can Do More. Should the Label?, Case Studies, case studies algorithm claim, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "The Algorithm Can Do More. Should the Label? | Case Studies | NKB Regovanta" },
      { property: "og:description", content: "How NKB Regovanta helped expand a cleared AI diagnostic device label through post-market algorithm validation aligned with FDA AI/ML action plan and predetermined change control protocol. A real regulatory strategy ca..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/case-studies/algorithm-claim" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Algorithm Can Do More. Should the Label? | Case Studies | NKB Regovanta" },
      { name: "twitter:description", content: "How NKB Regovanta helped expand a cleared AI diagnostic device label through post-market algorithm validation aligned with FDA AI/ML action plan and predetermined change control protocol. A real regulatory strategy ca..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/case-studies/algorithm-claim" },
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
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">SaMD | AI/ML | EU MDR</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            The Algorithm Can Do More. Should the Label?
          </h1>
          <img src={imgPlaceholder} alt="AI/ML Algorithm Claim Strategy" className="w-full max-w-3xl mx-auto block h-[300px] object-cover rounded-md mb-12 shadow-sm" />
          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            <h2 className="text-2xl font-bold mt-10 mb-4">Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              An AI/ML-enabled imaging software was developed with capabilities extending beyond its initially proposed intended purpose. The manufacturer considered expanding its claims from abnormality detection to include characterization and clinical decision support.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Each additional claim could change the software's regulatory significance, evidence requirements and EU MDR pathway. The key question was: What should the product claim—and what evidence would be required to support it?
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">Our Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We assessed the proposed claims against the software's intended purpose, clinical function, level of influence on clinical decisions and risk profile.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The regulatory pathway was mapped through:<br/>
              <strong>Intended Purpose → Clinical Function → Risk → Classification → Evidence</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This distinguished between what the AI/ML technology was technically capable of doing and what could be appropriately claimed and scientifically substantiated.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">How It Helped</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The assessment established a clear boundary for the product's intended use and aligned the proposed claims with the evidence required to support them. It also helped avoid unnecessarily broad claims that could introduce additional regulatory complexity without corresponding clinical evidence.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A clearly defined intended purpose. A focused MDR strategy. A targeted clinical evidence plan. Better alignment between AI/ML capabilities, product claims and regulatory requirements.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">NKB Insight</h2>
            <p className="text-navy font-medium italic border-l-4 border-accent pl-4 py-2 bg-surface">
              For AI/ML medical devices, the regulatory pathway starts with the claim—not the algorithm.
            </p>
            <p className="text-xs text-muted-foreground mt-8">
              *Client, product and configuration-specific details have been anonymized to protect confidentiality.
            </p>
          </div>
        </div>
      </article>
      <CTABand title="Looking for a clearer AI/ML regulatory strategy?" description="NKB Regovanta can help." btnText="Contact Us Today" />
    </>
  );
}
