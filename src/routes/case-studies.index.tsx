import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, BarChart3, ShieldCheck, Globe2, Trophy, Users } from "lucide-react";
import caseHero from "@/assets/case.png";
import imgPlaceholder from "@/assets/regulatory-pathway.jpg";
import imgPlaceholder2 from "@/assets/iso-cleanroom.jpg";
import imgPlaceholder3 from "@/assets/iso.png";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies | NKB Regovanta" },
      {
        name: "description",
        content:
          "Explore how we've helped medical device companies achieve compliance, accelerate approvals, and grow their global presence.",
      },
    ],
  }),
  component: CaseStudies,
});

const studies = [
  {
    id: "01",
    tag: "TEST STRATEGY",
    title: "Test Smarter. Cover More.",
    desc: "A hypodermic syringe family included multiple syringe sizes and needle gauges. Testing every possible configuration could have meant unnecessary duplication...",
    img: imgPlaceholder,
    route: "/case-studies/test-smarter",
    metrics: [
      { icon: Clock, value: "Faster", label: "Time to Market" },
      { icon: CheckCircle2, value: "100%", label: "Defensible Strategy" },
      { icon: BarChart3, value: "Fewer", label: "Duplicative Tests" },
    ],
  },
  {
    id: "02",
    tag: "US FDA 510(k)",
    title: "Avoiding Duplicate Simulated-Use Work",
    desc: "Leveraging an already marketed safety feature to prevent an automatic repeat usability study for a sharps-injury-prevention feature.",
    img: imgPlaceholder2,
    route: "/case-studies/fda-simulated-use",
    metrics: [
      { icon: CheckCircle2, value: "Accepted", label: "By FDA" },
      { icon: Clock, value: "Saved", label: "Study Time" },
      { icon: BarChart3, value: "Leaner", label: "Evidence Plan" },
    ],
  },
  {
    id: "03",
    tag: "US FDA 510(k)",
    title: "Predicate + Biocompatibility Equivalence",
    desc: "Using predicate and material equivalence to avoid repeating biocompatibility testing without regulatory need for a medical device.",
    img: imgPlaceholder3,
    route: "/case-studies/fda-biocompatibility",
    metrics: [
      { icon: ShieldCheck, value: "Proven", label: "Safety Argument" },
      { icon: CheckCircle2, value: "Avoided", label: "Repeat Testing" },
      { icon: Globe2, value: "Focused", label: "Evaluation Strategy" },
    ],
  },
  {
    id: "04",
    tag: "EU MDR",
    title: "Technical Documentation Remediation",
    desc: "Converting a legacy technical file to MDR without rebuilding everything from zero. Treating it as evidence remediation and traceability engineering.",
    img: imgPlaceholder,
    route: "/case-studies/eu-mdr-remediation",
    metrics: [
      { icon: Trophy, value: "Retained", label: "Valid Evidence" },
      { icon: Clock, value: "Reduced", label: "Document Rework" },
      { icon: CheckCircle2, value: "Coherent", label: "MDR Tech File" },
    ],
  },
  {
    id: "05",
    tag: "AUSTRALIA TGA",
    title: "Reuse What’s Accepted. Rebuild Only What’s Needed.",
    desc: "Leveraging existing overseas regulatory approvals and evidence to support Australian ARTG inclusion without unnecessary duplication.",
    img: imgPlaceholder2,
    route: "/case-studies/australia-tga",
    metrics: [
      { icon: Clock, value: "Faster", label: "Preparation" },
      { icon: BarChart3, value: "Less", label: "Duplication" },
      { icon: CheckCircle2, value: "Efficient", label: "ARTG Inclusion" },
    ],
  },
  {
    id: "06",
    tag: "SaMD | AI/ML | EU MDR",
    title: "The Algorithm Can Do More. Should the Label?",
    desc: "An AI/ML-enabled imaging software was developed with capabilities extending beyond its initially proposed intended purpose...",
    img: imgPlaceholder,
    route: "/case-studies/algorithm-claim",
    metrics: [
      { icon: CheckCircle2, value: "Clear", label: "Intended Purpose" },
      { icon: ShieldCheck, value: "Targeted", label: "Evidence Plan" },
      { icon: Trophy, value: "Better", label: "Alignment" },
    ],
  },
];

function CaseStudies() {
  return (
    <div className="bg-surface/30">
      {/* ── Hero ── */}
      <section className="bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2">
          <div className="flex flex-col justify-center pr-6 pt-8 pb-10 lg:pt-10 lg:pb-12">
            <p className="text-[13px] font-bold text-navy mb-4 tracking-wide">Proven Results</p>
            <h1 className="font-display font-extrabold leading-tight text-navy" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              Real Challenges.<br />Measurable Success.
            </h1>
            <p className="mt-5 text-[15px] text-navy/75 leading-relaxed max-w-md">
              Explore how we've helped medical device companies achieve compliance, accelerate approvals, and grow their global presence.
            </p>
          </div>
          <div className="hidden lg:flex justify-end items-center h-full">
            <img src={caseHero} alt="Case Studies Concept" className="w-full max-w-lg object-contain" />
          </div>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="pt-6 pb-20 lg:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {studies.map((s) => (
              <div key={s.id} className="bg-white rounded-xl shadow-sm border border-border/60 hover:shadow-lg transition-all duration-300 flex flex-col group overflow-hidden">
                <Link to={s.route} className="block relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-md bg-navy text-white flex items-center justify-center shrink-0 shadow-sm">
                      <FileTextIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-navy/50 uppercase tracking-widest">Case Study {s.id}</div>
                      <div className="text-[12px] font-semibold text-accent">{s.tag}</div>
                    </div>
                  </div>
                  <Link to={s.route} className="block mt-2">
                    <h2 className="text-[20px] font-bold text-navy leading-snug group-hover:text-accent transition-colors">
                      {s.title}
                    </h2>
                  </Link>
                  <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 flex-1">
                    {s.desc}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-2">
                    {s.metrics.map((m, i) => (
                      <div key={i} className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-1.5">
                          <m.icon className="h-4 w-4 text-navy/40" />
                          <span className="text-[14px] font-bold text-navy leading-none">{m.value}</span>
                        </div>
                        <span className="text-[10px] font-semibold text-navy/50 leading-tight uppercase tracking-wide pr-2">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={s.route} className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-bold text-navy hover:text-accent transition-colors">
                    Read Full Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer Strip ── */}
      <section className="bg-navy text-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 flex-1">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-white/80" strokeWidth={1.5} />
              <div>
                <div className="text-xl font-bold leading-none">100+</div>
                <div className="text-[11px] text-white/70 mt-1 uppercase tracking-wide">Successful Projects</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-white/80" strokeWidth={1.5} />
              <div>
                <div className="text-xl font-bold leading-none">100%</div>
                <div className="text-[11px] text-white/70 mt-1 uppercase tracking-wide">Client Focused</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe2 className="h-8 w-8 text-white/80" strokeWidth={1.5} />
              <div>
                <div className="text-xl font-bold leading-none">Global</div>
                <div className="text-[11px] text-white/70 mt-1 uppercase tracking-wide">Regulatory Expertise</div>
              </div>
            </div>
          </div>
          <Link to="/contact" className="shrink-0 bg-white text-navy font-bold text-[13px] px-8 py-3.5 rounded-sm hover:bg-white/90 transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

function FileTextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}
