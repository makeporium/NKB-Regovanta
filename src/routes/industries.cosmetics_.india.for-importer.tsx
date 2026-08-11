import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/industries/cosmetics_/india/for-importer")({
  head: () => ({
    meta: [
      { title: "Cosmetics Registration for Importers in India | NKB Regovanta" },
      { name: "description", content: "Expert guidance for foreign cosmetic brands to obtain Form COS-2 Import Registration Certificate in India." },
    ],
  }),
  component: ForImporter,
});

const steps = [
  "Registration of importer on the SUGAM Portal",
  "Document compilation for application filing",
  "Upload essential documents online",
  "Pay government fees and upload challan",
  "Generate COS-1 and upload the signed Form COS-1",
];

function ForImporter() {
  return (
    <>
      <article className="bg-white pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-8">
            <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/industries/cosmetics" className="hover:text-navy transition-colors">Cosmetics</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/industries/cosmetics/india" className="hover:text-navy transition-colors">India</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">For Importers</span>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">
              Cosmetics Registration for Importers in India
            </h1>
            <p className="text-lg text-navy/70 leading-relaxed">
              No cosmetic can be imported into India unless the product is registered under the rules by the Central Licensing Authority (CDSCO). We simplify the entire import licensing process for you.
            </p>
          </div>

          <div className="prose prose-blue max-w-none text-navy/80">
            <h2>The Registration Process</h2>
            <p>
              An application for the registration of a cosmetic product intended to be imported into India must be made through the Central Government's online SUGAM portal. This application (Form COS-1) can be submitted by the manufacturer, an authorized Indian agent, the importer in India, or a registered subsidiary.
            </p>

            <div className="bg-surface/50 rounded-lg p-6 my-8 border border-border">
              <h3 className="text-navy font-bold text-lg mb-4 mt-0">Step-by-Step Approval</h3>
              <ul className="space-y-3 m-0 p-0 list-none">
                {steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium text-navy/80">Step {idx + 1}: {step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>Important Forms</h2>
            <ul>
              <li><strong>Form COS-1:</strong> This is the initial application submitted to the Central Licensing Authority to import cosmetics for sale or distribution.</li>
              <li><strong>Form COS-2:</strong> This is the final Import Registration Certificate issued by CDSCO after the successful review and verification of the COS-1 application, granting you the license to import and market.</li>
            </ul>

            <h2>Government Fee Structure</h2>
            <p>
              To obtain an import registration certificate in India, CDSCO charges specific government fees:
            </p>
            <ul>
              <li><strong>1000 USD</strong> per product category</li>
              <li><strong>50 USD</strong> per product variant</li>
              <li><strong>500 USD</strong> per manufacturing site</li>
            </ul>

            <h2>Need an Authorized Agent?</h2>
            <p>
              If you are a foreign brand without a registered office in India, you are legally required to appoint an Authorized Indian Agent. NKB Regovanta acts as your trusted regulatory representative, handling all SUGAM portal submissions, queries, and compliance on your behalf.
            </p>
          </div>
        </div>
      </article>

      <CTABand title="Start Your Import Registration Today" btnText="Contact Us" />
    </>
  );
}
