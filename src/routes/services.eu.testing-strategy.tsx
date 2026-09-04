import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Sparkles,
  ArrowRight,
  Beaker,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/testing-strategy")({
  head: () => ({
    meta: [
      { title: "EU Testing Strategy & Laboratory Coordination Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Define regulatory testing strategies, protocol design, worst-case rationale, and lab coordination for EU MDR 2017/745 and EU IVDR 2017/746 technical documentation.",
      },
      {
        name: "keywords",
        content:
          "EU MDR testing strategy, ISO 10993 biocompatibility Europe, IEC 60601 electrical safety, IEC 62304 software validation, IVD analytical performance testing, lab coordination MDR, NKB Regovanta",
      },
      { property: "og:title", content: "EU Testing Strategy & Laboratory Coordination | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We define the study protocol, worst-case device configuration, and acceptance criteria before laboratory execution — ensuring final test reports directly satisfy Notified Body review.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/testing-strategy" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU Testing Strategy & Laboratory Coordination Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "Define regulatory testing strategies, protocol design, worst-case rationale, and lab coordination for EU MDR 2017/745 and EU IVDR 2017/746 technical documentation." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/testing-strategy" }],
  }),
  component: EUTestingStrategyPage,
});

function EUTestingStrategyPage() {
  const testingAreas = [
    "Biocompatibility and biological evaluation (ISO 10993 series)",
    "Chemical characterization (ISO 10993-18) and toxicological assessment",
    "Sterilization validation (EO, Gamma, Steam) and residual testing (ISO 10993-7)",
    "Packaging validation (ISO 11607), transit simulation (ASTM D4169) and accelerated shelf life",
    "Electrical safety (IEC 60601-1) and Electromagnetic Compatibility (EMC 60601-1-2)",
    "Software verification, validation and lifecycle documentation (IEC 62304)",
    "Cybersecurity verification, threat modeling and vulnerability testing",
    "Usability engineering and human factors validation (IEC 62366-1)",
    "Bench, mechanical, fatigue and functional performance testing",
    "Active-device and specialty device performance verification",
    "IVD analytical performance (sensitivity, specificity, precision, interference)",
    "IVD clinical performance and prospective/retrospective performance studies",
  ];

  const challengeQuestions = [
    "Is the protocol answering the actual GSPR / performance / clinical question?",
    "Is the selected device configuration scientifically defensible as worst case?",
    "Are sample quantities, power calculations and lots statistically justified?",
    "Is the comparator or reference method scientifically appropriate?",
    "Are endpoints and acceptance criteria justified before execution?",
    "Are standards current and applicable to the device configuration?",
    "How will deviations and out-of-specification results be handled and justified?",
    "Will the final laboratory report be directly usable in the Annex II dossier?",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "EU Testing Strategy & Laboratory Coordination",
              url: "https://www.nkbregovanta.com/services/eu/testing-strategy",
              description:
                "Strategic testing protocols, worst-case rationales, and laboratory coordination for EU MDR and IVDR CE marking.",
              provider: {
                "@type": "ProfessionalService",
                name: "NKB Regovanta Solutions Pvt. Ltd.",
                url: "https://www.nkbregovanta.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nkbregovanta.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://www.nkbregovanta.com/services" },
                { "@type": "ListItem", position: 3, name: "European Union", item: "https://www.nkbregovanta.com/services/eu" },
                { "@type": "ListItem", position: 4, name: "Testing Strategy", item: "https://www.nkbregovanta.com/services/eu/testing-strategy" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu" className="hover:text-navy transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Testing Strategy &amp; Lab Coordination</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Beaker className="h-3.5 w-3.5" /> Evidence-Driven Verification
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Testing Strategy &amp; Laboratory Coordination
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Testing should be designed around the regulatory decision the evidence must support. NKB Regovanta helps define the required studies before execution and coordinates with established laboratories where external testing is needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Build Your EU Testing Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* 12 Testing Areas */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  12 Key Regulatory Testing Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {testingAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[12.5px] font-medium text-navy/90 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Challenge Before Testing Starts */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-2.5">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                  <h3 className="text-lg font-extrabold text-navy">
                    What We Challenge Before Testing Starts
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {challengeQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[13px] font-medium text-navy/85">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NKB Position */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">NKB Position</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Close the Evidence Gap, Don&rsquo;t Just Run Tests
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not simply refer clients to a laboratory. We review the study strategy, protocol logic and final evidence from the perspective of the technical file and Notified Body review, helping avoid studies that &ldquo;pass&rdquo; in the lab but do not close the regulatory evidence gap.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Lab Coordination Services
                </h4>
                <ul className="space-y-2.5 text-xs text-navy/75 font-medium">
                  <li>• Partner accredited test laboratories (GLP/ISO 17025)</li>
                  <li>• Protocol drafting &amp; acceptance criteria review</li>
                  <li>• Worst-case sample configuration justification</li>
                  <li>• Test report integration into Annex II Dossier</li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Plan Your Study Protocols</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Avoid repeat laboratory testing and unexpected Notified Body questions by reviewing protocols upfront.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Review Study Protocol <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Design Rigorous Testing Studies That Satisfy Notified Body Reviewers"
        description="Our experts connect design controls, GSPR requirements, and laboratory execution into one seamless evidence package."
      />
    </>
  );
}
