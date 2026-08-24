import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
const imgPlaceholder = "/assets/brain/services_market_access_hero_1786440859191.png";

export const Route = createFileRoute("/services/market-access")({
  head: () => ({
    meta: [
      { title: "Market Access | Services | NKB Regovanta" },
      {
        name: "description",
        content: "Market entry strategy, pricing, reimbursement & post-market compliance.",
      },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/market-access" },
  ],
  }),
  component: MarketAccessService,
});

const offerings = [
  {
    title: "Market & Regulatory Assessment",
    desc: "Evaluate regulatory and market-entry requirements before committing resources.",
  },
  {
    title: "Pathway Strategy",
    desc: "Identify appropriate regulatory routes and market-entry options.",
  },
  {
    title: "Country Requirements",
    desc: "Assess market-specific registration, documentation and compliance requirements.",
  },
  {
    title: "Registration Strategy",
    desc: "Support product registration and market-entry planning.",
  },
  {
    title: "Expansion Strategy",
    desc: "Evaluate opportunities to extend products into additional markets.",
  },
  {
    title: "Post-Market Requirements",
    desc: "Support ongoing regulatory obligations following market entry.",
  },
];

function MarketAccessService() {
  return (
    <>
      <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-4 pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
            <Link to="/services" className="hover:text-navy transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Market Access</span>
          </div>
          <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            Market Access
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            Market entry strategy, pricing, reimbursement & post-market compliance.
          </p>
        </div>
      </section>

      <section className="bg-white pt-8 pb-16 lg:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Global Expansion Strategy</h2>
            <p className="text-[15px] text-navy/80 leading-relaxed mb-6">
              Market access requires more than regulatory clearance. Each market brings its own regulatory, registration, evidence and lifecycle requirements.
            </p>
            <p className="text-[15px] text-navy/80 leading-relaxed mb-8">
              NKB Regovanta helps organizations evaluate market-entry pathways and develop practical strategies for expansion across global markets.
            </p>
            
            <h3 className="text-xl font-bold text-navy mb-6">Our Market Access Support</h3>
            <div className="space-y-6 mb-8">
              {offerings.map((offering, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy text-[15px]">{offering.title}</h4>
                    <p className="text-[14px] text-navy/70 leading-relaxed mt-1">
                      {offering.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-navy mb-4">Markets</h3>
            <p className="text-[15px] text-navy/80 font-semibold mb-8">
              USA | EU | UK | Canada | Australia | India | APAC | Emerging Markets
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-[2rem] -z-10 transform rotate-3" />
            <img 
              src={imgPlaceholder}
              alt="Global Market Access" 
              className="rounded-2xl shadow-xl border border-white/50 w-full object-cover" 
            />
          </div>
        </div>
      </section>

      <CTABand title="Planning your next market?" btnText="DISCUSS YOUR MARKET ENTRY →" />
    </>
  );
}
