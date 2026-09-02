import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckSquare2,
  Building,
  Beaker,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/testing-strategy")({
  head: () => ({
    meta: [
      { title: "Testing Strategy & Laboratory Coordination | FDA Medical Devices | NKB Regovanta" },
      {
        name: "description",
        content:
          "Design defensible verification and validation testing strategies for US FDA submissions. Worst-case rationale, biocompatibility, electrical safety, EMC, software, and lab coordination.",
      },
      {
        name: "keywords",
        content:
          "FDA medical device testing, testing strategy, worst case rationale, biocompatibility ISO 10993, electrical safety IEC 60601, lab coordination, NKB Regovanta",
      },
      { property: "og:title", content: "Testing Strategy & Laboratory Coordination | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We design testing backward from the FDA decision — challenging configuration, worst-case rationale, standards, acceptance criteria, and lab protocols.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/testing-strategy" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/testing-strategy" }],
  }),
  component: TestingStrategyPage,
});

function TestingStrategyPage() {
  const whenNeeded = [
    "Before initiating verification and validation testing for a 510(k), De Novo or PMA program",
    "When predicate differences create specific performance questions",
    "When multiple device configurations exist and worst-case selection must be justified",
    "When prior testing may not fully align with current FDA expectations or intended claims",
    "When an external laboratory needs a regulatory testing brief or protocol review",
  ];

  const whatWeChallenge = [
    "What regulatory question must the study answer?",
    "Which device configuration is the appropriate worst case?",
    "Are sample size and sample selection scientifically justified?",
    "Are the comparator, endpoints and acceptance criteria appropriate?",
    "Does the selected standard address the actual device characteristic under review?",
    "Will the final report be usable within the FDA submission without major evidence gaps?",
  ];

  const testingAreas = [
    "Bench and functional performance",
    "Biocompatibility and chemical characterization (ISO 10993)",
    "Sterilization validation (EO, Gamma, Steam, etc.)",
    "Packaging, transportation and shelf life (ASTM / ISO 11607)",
    "Electrical safety and EMC (IEC 60601 series)",
    "Software verification and validation (IEC 62304)",
    "Cybersecurity premarket documentation",
    "Human factors and usability engineering (IEC 62366 / FDA guidance)",
    "Mechanical, flow and pressure testing where applicable",
    "IVD analytical and clinical performance",
    "Other device-specific verification and validation",
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
              name: "Testing Strategy & Laboratory Coordination",
              url: "https://www.nkbregovanta.com/services/usa/testing-strategy",
              description:
                "US FDA medical device testing strategy, worst-case justification, test protocol review, and laboratory coordination.",
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
                { "@type": "ListItem", position: 3, name: "USA FDA", item: "https://www.nkbregovanta.com/services/usa" },
                { "@type": "ListItem", position: 4, name: "Testing Strategy", item: "https://www.nkbregovanta.com/services/usa/testing-strategy" },
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
            <Link to="/services/usa" className="hover:text-navy transition-colors">USA FDA</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Testing Strategy &amp; Lab Coordination</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <FlaskConical className="h-3.5 w-3.5" /> Evidence-Driven Verification &amp; Validation
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Testing Strategy &amp; Laboratory Coordination
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We design the testing plan backward from the FDA decision the evidence must support — challenging configuration, worst-case rationale, standards, acceptance criteria and whether the resulting data will actually answer the regulatory question.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Build Your FDA Testing Strategy <ArrowRight className="h-4 w-4" />
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
              {/* What This Service Is */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  Testing should not be treated as an isolated laboratory activity. The protocol, sample configuration and acceptance criteria must be capable of supporting the regulatory claims and device comparison presented in the final submission.
                </p>
              </div>

              {/* When It Is Needed */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-5 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" /> When It Is Needed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whenNeeded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 border border-gray-200/70 hover:bg-blue-50/30 transition-colors"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13.5px] text-navy/80 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Challenge Before Testing */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  What We Challenge Before Testing
                </h3>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {whatWeChallenge.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/90 flex items-start gap-3"
                    >
                      <CheckSquare2 className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                      <span className="text-[14px] font-semibold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testing Areas We Support */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  Testing Areas We Support
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {testingAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0b3a96] shrink-0" />
                      <span className="text-[12.5px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Laboratory Coordination */}
              <div className="p-7 rounded-2xl bg-surface/50 border border-gray-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="h-5 w-5 text-[#0b3a96]" />
                  <h3 className="text-lg font-extrabold text-navy">Laboratory Coordination</h3>
                </div>
                <p className="text-[14px] text-navy/80 leading-relaxed font-medium">
                  Where external laboratories are required, we can help define the regulatory testing scope, review protocols before execution, assess worst-case rationale and review final reports from the perspective of how the evidence will be used in the FDA dossier.
                </p>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Regulatory Intent Guides the Test Design
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not simply ask which test is required. We ask what regulatory question the test must answer and whether the chosen study design can support the submission decision.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Avoid Common Testing Pitfalls
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Unjustified sample size or test configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Testing wrong worst-case variant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Outdated standard version cited</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Missing clinical/regulatory acceptance criteria</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Optimize Testing Budget</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Ensure every test dollar produces evidence that FDA reviewers will accept without pushback.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Build Testing Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Need an FDA-Defensible Testing Strategy?"
        description="Our technical experts review test plans and laboratory protocols before expensive testing begins."
      />
    </>
  );
}
