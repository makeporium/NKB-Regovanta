import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/industries/cosmetics_/india/for-manufacturer")({
  head: () => ({
    meta: [
      { title: "Cosmetics Manufacturing License in India | NKB Regovanta" },
      { name: "description", content: "Obtain CDSCO cosmetic manufacturing licence (Forms COS-5 and COS-8) in India. Complete guidance for GMP inspection preparation, plant master file, SLA/CLA application, and annual manufacturing compliance from NKB Regovanta." },
      { name: "keywords", content: "Cosmetics Manufacturing License in India, industries cosmetics india for manufacturer, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Cosmetics Manufacturing License in India | NKB Regovanta" },
      { property: "og:description", content: "Obtain CDSCO cosmetic manufacturing licence (Forms COS-5 and COS-8) in India. Complete guidance for GMP inspection preparation, plant master file, SLA/CLA application, and annual manufacturing compliance from NKB Rego..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/industries/cosmetics/india/for-manufacturer" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cosmetics Manufacturing License in India | NKB Regovanta" },
      { name: "twitter:description", content: "Obtain CDSCO cosmetic manufacturing licence (Forms COS-5 and COS-8) in India. Complete guidance for GMP inspection preparation, plant master file, SLA/CLA application, and annual manufacturing compliance from NKB Rego..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/industries/cosmetics/india/for-manufacturer" },
  ],
  }),
  component: ForManufacturer,
});

const steps = [
  "Prepare layout plan and Good Manufacturing Practices (GMP) compliance documents",
  "Compile list of machinery, equipment, and technical personnel",
  "Submit online application (Form COS-5 or COS-6) to the SLA",
  "Upload ownership/rent agreements and approved layout plans",
  "SLA scrutiny and facility inspection",
  "Grant of Manufacturing License (Form COS-8 or COS-9)",
];

function ForManufacturer() {
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
            <span className="text-navy">For Manufacturers</span>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">
              Cosmetic Manufacturing License in India
            </h1>
            <p className="text-lg text-navy/70 leading-relaxed">
              Establishing a cosmetic manufacturing facility in India requires strict adherence to State Licensing Authority (SLA) regulations and Good Manufacturing Practices (GMP). We guide domestic manufacturers through every step of the licensing journey.
            </p>
          </div>

          <div className="prose prose-blue max-w-none text-navy/80">
            <h2>Understanding the Licenses</h2>
            <p>
              Unlike import registrations which are handled by the central CDSCO, manufacturing licenses for cosmetics in India are regulated and granted by the respective <strong>State Licensing Authority (SLA)</strong>.
            </p>
            <ul>
              <li><strong>Form COS-5:</strong> The application form to obtain a primary manufacturing license.</li>
              <li><strong>Form COS-8:</strong> The actual manufacturing license granted by the SLA.</li>
              <li><strong>Form COS-6:</strong> The application form for a loan license (using another facility).</li>
              <li><strong>Form COS-9:</strong> The actual loan license granted by the SLA.</li>
            </ul>

            <div className="bg-surface/50 rounded-lg p-6 my-8 border border-border">
              <h3 className="text-navy font-bold text-lg mb-4 mt-0">The Licensing Pathway</h3>
              <ul className="space-y-3 m-0 p-0 list-none">
                {steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-medium text-navy/80">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2>GMP Compliance & Facility Layout</h2>
            <p>
              Under the Seventh Schedule of the Cosmetics Rules 2020, manufacturers must adhere strictly to GMP guidelines covering manufacturing, packaging, labeling, and testing. Preparing an SLA-approved layout plan is a crucial first step to demonstrate that your facility prevents contamination and ensures product safety.
            </p>

            <h2>Post Approval Changes (PAC)</h2>
            <p>
              Already hold a Form COS-8 or COS-9 license but need to update product details or manufacturing site information? We facilitate Post Approval Changes with the SLA, ensuring your updated product range remains fully compliant.
            </p>

            <h2>Labeling Compliance</h2>
            <p>
              Indian cosmetic labels must comply with Rule 34 of the Cosmetics Rules 2020. Our experts review your label artwork, ensuring there are no non-cosmetic claims and that all legal metrology requirements are satisfied prior to market launch.
            </p>
          </div>
        </div>
      </article>

      <CTABand title="Ready to setup your manufacturing unit?" btnText="Contact Us" />
    </>
  );
}
