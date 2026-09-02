import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Users2,
  Calendar,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/q-submission")({
  head: () => ({
    meta: [
      { title: "FDA Q-Submission & Pre-Submission Meetings Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Strategic FDA Q-Submission (Pre-Sub) consulting. Briefing document preparation, targeted questions, meeting rehearsal, and feedback translation into actionable submission roadmaps.",
      },
      {
        name: "keywords",
        content:
          "FDA Q-Submission, FDA Pre-Submission meeting, Q-Sub briefing document, FDA feedback meeting, CDRH pre-sub, NKB Regovanta",
      },
      { property: "og:title", content: "FDA Q-Submission & Pre-Submission Support | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "De-risk regulatory uncertainty by obtaining targeted, actionable FDA feedback before locking in costly testing or clinical programs.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/q-submission" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/q-submission" }],
  }),
  component: QSubmissionPage,
});

function QSubmissionPage() {
  const whenValuable = [
    "When the regulatory pathway is uncertain",
    "When a novel technology or intended use is involved",
    "When predicate strategy is complex",
    "When the proposed testing method or acceptance criteria are uncertain",
    "When clinical or IVD performance study design requires FDA input",
    "Before committing significant time or budget to a high-risk evidence plan",
  ];

  const howWePrepare = [
    "Identify the decisions that would benefit from FDA feedback",
    "Develop focused questions that FDA can answer meaningfully",
    "Prepare the device, technology and regulatory background",
    "Present proposed testing or evidence strategy",
    "Prepare the briefing package and supporting rationale",
    "Prepare the team for the FDA meeting",
    "Assess FDA feedback and translate it into the submission plan",
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
              name: "FDA Q-Submission & Pre-Submission Support",
              url: "https://www.nkbregovanta.com/services/usa/q-submission",
              description:
                "US FDA Q-Submission briefing document compilation, meeting preparation, and feedback analysis.",
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
                { "@type": "ListItem", position: 4, name: "Q-Submission", item: "https://www.nkbregovanta.com/services/usa/q-submission" },
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
            <span className="text-navy">Q-Submission &amp; Pre-Sub</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquare className="h-3.5 w-3.5" /> Early FDA Alignment
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              FDA Q-Submission &amp; Pre-Submission
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We determine which uncertainties are worth taking to FDA, frame focused questions and provide enough technical context for FDA feedback to be actionable before major testing or submission decisions are locked.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Plan Your FDA Pre-Submission <ArrowRight className="h-4 w-4" />
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
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  The Q-Submission program allows sponsors to seek FDA feedback on specific regulatory or technical questions before a future submission. The value of the interaction depends heavily on the quality of the question, the supporting context and whether FDA feedback can meaningfully influence the program.
                </p>
              </div>

              {/* When It Is Particularly Valuable */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-5 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" /> When It Is Particularly Valuable
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whenValuable.map((item, idx) => (
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

              {/* How We Prepare the Interaction */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  How We Prepare the Interaction
                </h3>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {howWePrepare.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0b3a96] shrink-0" />
                      <span className="text-[13.5px] font-bold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Targeted, Decisive Questions for Actionable Feedback
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not send broad questions to FDA. We first decide what uncertainty needs to be resolved and what decision FDA's feedback should enable.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Q-Submission Timeline
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>~70-75 calendar days to FDA feedback / meeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Written feedback or teleconference / videoconference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>FDA user fee: $0 (No user fee for Pre-Submissions)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Have Regulatory Questions?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Engage FDA early to validate your testing plan or clinical evidence strategy.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Plan Pre-Submission <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Align with the FDA?"
        description="Let our experienced team craft a targeted Q-Submission briefing package that secures definitive answers."
      />
    </>
  );
}
