import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
const imgPlaceholder = "/assets/brain/cs_test_smarter_1786441137220.png";

export const Route = createFileRoute("/case-studies/test-smarter")({
  head: () => ({
    meta: [
      { title: "Test Smarter. Cover More. | Case Studies | NKB Regovanta" },
      { name: "description", content: "How NKB Regovanta designed a multi-purpose test strategy for FDA 510(k), EU MDR, and TGA ARTG simultaneously — eliminating duplicate testing across three major regulatory pathways and reducing total testing budget by 40%." },
      { name: "keywords", content: "Test Smarter. Cover More., Case Studies, case studies test smarter, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Test Smarter. Cover More. | Case Studies | NKB Regovanta" },
      { property: "og:description", content: "How NKB Regovanta designed a multi-purpose test strategy for FDA 510(k), EU MDR, and TGA ARTG simultaneously — eliminating duplicate testing across three major regulatory pathways and reducing total testing budget by ..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/case-studies/test-smarter" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Test Smarter. Cover More. | Case Studies | NKB Regovanta" },
      { name: "twitter:description", content: "How NKB Regovanta designed a multi-purpose test strategy for FDA 510(k), EU MDR, and TGA ARTG simultaneously — eliminating duplicate testing across three major regulatory pathways and reducing total testing budget by ..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/case-studies/test-smarter" },
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
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">Test Strategy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            Test Smarter. Cover More.
          </h1>
          <img src={imgPlaceholder} alt="Test Strategy" className="w-full max-w-3xl mx-auto block h-[300px] object-cover rounded-md mb-12 shadow-sm" />
          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            <h2 className="text-2xl font-bold mt-10 mb-4">Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A hypodermic syringe family included multiple syringe sizes and needle gauges. Testing every possible configuration could have meant unnecessary duplication, additional samples, cost and time.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">Our Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Instead of testing every SKU, we developed a risk-based, worst-case testing strategy. The largest- and smallest-diameter needle configurations were assessed alongside syringe capacity, needle length and other design variables to identify the configurations most likely to challenge each performance requirement.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">How It Helped</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Testing focused on the configurations that provided the most meaningful evidence, with a documented rationale for how the selected worst cases supported coverage of the broader device family.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fewer duplicative tests. Smarter use of samples and laboratory resources. A clearer, more defensible FDA testing strategy.
            </p>
            <h2 className="text-2xl font-bold mt-10 mb-4">NKB Insight</h2>
            <p className="text-navy font-medium italic border-l-4 border-accent pl-4 py-2 bg-surface">
              The goal isn’t to test every configuration—it’s to identify the right worst case for the right performance requirement.
            </p>
            <p className="text-xs text-muted-foreground mt-8">
              *Client, product and configuration-specific details have been anonymized to protect confidentiality.
            </p>
          </div>
        </div>
      </article>
      <CTABand title="Looking for a smarter test strategy?" description="NKB Regovanta can help." btnText="Contact Us Today" />
    </>
  );
}
