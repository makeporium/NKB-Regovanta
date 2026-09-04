import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, CheckCircle2, ShieldCheck, FileCheck2, ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/industry-cosmetics.png";

export const Route = createFileRoute("/industries/cosmetics_/india/")({
  head: () => ({
    meta: [
      { title: "India Cosmetics Regulatory Services | NKB Regovanta" },
      { name: "description", content: "India cosmetics regulatory services: CDSCO import registration (COS-1, COS-2), manufacturing licence (COS-5, COS-8), labelling compliance under Drugs & Cosmetics Act, and GMP inspection preparation for domestic and imported cosmetics." },
      { name: "keywords", content: "India Cosmetics Regulatory Services, industries cosmetics india, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "India Cosmetics Regulatory Services | NKB Regovanta" },
      { property: "og:description", content: "India cosmetics regulatory services: CDSCO import registration (COS-1, COS-2), manufacturing licence (COS-5, COS-8), labelling compliance under Drugs & Cosmetics Act, and GMP inspection preparation for domestic and im..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/industries/cosmetics/india" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "India Cosmetics Regulatory Services | NKB Regovanta" },
      { name: "twitter:description", content: "India cosmetics regulatory services: CDSCO import registration (COS-1, COS-2), manufacturing licence (COS-5, COS-8), labelling compliance under Drugs & Cosmetics Act, and GMP inspection preparation for domestic and im..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/industries/cosmetics/india" },
  ],
  }),
  component: IndiaCosmetics,
});

const services = [
  {
    title: "Cosmetic Registration (Form COS-2)",
    desc: "Seamless CDSCO registration and approval for cosmetic products entering the Indian market.",
  },
  {
    title: "Cosmetic Manufacturing License",
    desc: "Obtain Form COS-8 for manufacturing or Form COS-9 for loan licensing to produce cosmetics in India.",
  },
  {
    title: "Authorized Agent Services",
    desc: "We act as your legally authorized Indian representative for foreign cosmetic imports and registrations.",
  },
  {
    title: "Labeling & Claims Assistance",
    desc: "Ensure your cosmetic labels and claims comply strictly with CDSCO guidelines before marketing.",
  },
  {
    title: "Cosmetic Sample Testing",
    desc: "Coordinate with CDSCO-certified laboratories across India to ensure quality and safety compliance.",
  },
  {
    title: "Certificate Amendments & Re-Registration",
    desc: "Hassle-free management of changes to your existing registration certificates and timely renewals.",
  },
];

function IndiaCosmetics() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white overflow-hidden pb-4 pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
            <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/industries/cosmetics" className="hover:text-navy transition-colors">Cosmetics</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">India</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">India Regulatory Services</p>
          <h1 className="font-display font-extrabold leading-tight text-navy max-w-4xl" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            Cosmetics Regulatory Compliance in India
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            Entering the Indian cosmetic market requires careful planning and strict adherence to CDSCO regulations. From ingredient review to product registration, we guide manufacturers and importers through a seamless approval process.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-12 bg-surface/30 border-t border-border mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated bg-white p-8 rounded-md border border-border/50 shadow-sm flex flex-col">
              <ShieldCheck className="h-10 w-10 text-accent mb-6" />
              <h2 className="text-2xl font-bold text-navy mb-3">For Importers</h2>
              <p className="text-sm text-navy/70 leading-relaxed mb-8 flex-1">
                Are you a foreign cosmetic brand looking to expand into India? Navigate the complexities of SUGAM registration, Form COS-1 applications, and Authorized Agent requirements to secure your Form COS-2 Import Registration Certificate.
              </p>
              <Link to="/industries/cosmetics/india/for-importer" className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-accent transition-colors uppercase tracking-wide">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="card-elevated bg-white p-8 rounded-md border border-border/50 shadow-sm flex flex-col">
              <FileCheck2 className="h-10 w-10 text-accent mb-6" />
              <h2 className="text-2xl font-bold text-navy mb-3">For Manufacturers</h2>
              <p className="text-sm text-navy/70 leading-relaxed mb-8 flex-1">
                Are you establishing a cosmetic manufacturing facility in India? We provide comprehensive support for obtaining your Form COS-8 manufacturing license, facility compliance audits, and local regulatory strategies.
              </p>
              <Link to="/industries/cosmetics/india/for-manufacturer" className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-accent transition-colors uppercase tracking-wide">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-navy">Comprehensive CDSCO Support</h2>
             <p className="mt-4 text-navy/70 leading-relaxed">
               Whether you are importing or manufacturing locally, our tailored regulatory services ensure your cosmetic products meet all Indian safety and quality standards without unnecessary delays.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="p-6 rounded-md bg-surface/50 border border-border">
                <CheckCircle2 className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-navy/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Ready to launch your cosmetics in India?" btnText="Consult an Expert" />
    </>
  );
}
