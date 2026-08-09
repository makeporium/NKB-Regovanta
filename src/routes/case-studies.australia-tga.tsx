import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgPlaceholder from "@/assets/iso.png";

export const Route = createFileRoute("/case-studies/australia-tga")({
  head: () => ({
    meta: [
      { title: "AUSTRALIA TGA | ARTG Inclusion | Case Studies | NKB Regovanta" },
      { name: "description", content: "Leveraging existing overseas regulatory approvals and evidence to support Australian ARTG inclusion." },
    ],
  }),
  component: Article,
});

function Article() {
  return (
    <>
      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">AUSTRALIA TGA | ARTG INCLUSION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            Reuse What’s Accepted. Rebuild Only What’s Needed.
          </h1>
          <img src={imgPlaceholder} alt="Australia TGA ARTG Inclusion" className="w-full h-[400px] object-cover rounded-md mb-12 shadow-sm" />
          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            
            <h2 className="text-2xl font-bold mt-10 mb-4">Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A medical device already had overseas regulatory approvals and supporting conformity-assessment evidence. Treating Australia as a completely new dossier could have duplicated work, cost and launch time.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Our Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We first assessed whether the existing overseas evidence could support the Australian pathway, including alignment of the device design, intended purpose and indications. We then separated reusable evidence from Australia-specific requirements and built the ARTG strategy around the actual gaps.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">How It Helped</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Instead of recreating an established evidence package, the manufacturer could leverage appropriate existing documentation and focus effort only where Australian requirements required something additional.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Less duplication. Faster regulatory preparation. A more efficient pathway toward ARTG inclusion.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">NKB Insight</h2>
            <p className="text-navy font-medium italic border-l-4 border-accent pl-4 py-2 bg-surface">
              Global evidence has value when you know what Australia accepts—and how to use it correctly.
            </p>

            <p className="text-xs text-muted-foreground mt-8">
              *Client, device, overseas approval and Australian Sponsor details have been intentionally anonymized to protect confidentiality.
            </p>
          </div>
        </div>
      </article>
      <CTABand title="Looking for a smarter entry into Australia?" description="NKB Regovanta can assist you with your TGA strategy." btnText="Contact Us Today" />
    </>
  );
}
