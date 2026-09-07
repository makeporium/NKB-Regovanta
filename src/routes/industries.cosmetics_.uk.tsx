import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2, ShieldCheck, FileCheck2, Globe, FileText, Anchor } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/industry-cosmetics.png";

export const Route = createFileRoute("/industries/cosmetics_/uk")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { title: "UK Cosmetics Regulatory Services | NKB Regovanta" },
      { name: "description", content: "UK Cosmetics Regulation compliance: UK Responsible Person (RP), SCPN notifications, CPSR safety reports, PIF compilation, and post-Brexit labelling." },
      { property: "og:title", content: "UK Cosmetics Regulatory Services | NKB Regovanta" },
      { property: "og:description", content: "UK Cosmetics Regulation compliance: UK Responsible Person (RP), SCPN notifications, CPSR safety reports, PIF compilation, and post-Brexit labelling." },
      { property: "og:url", content: "https://www.nkbregovanta.com/industries/cosmetics/uk" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UK Cosmetics Regulatory Services | NKB Regovanta" },
      { name: "twitter:description", content: "UK Cosmetics Regulation compliance: UK Responsible Person (RP), SCPN notifications, CPSR safety reports, PIF compilation, and post-Brexit labelling." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/industries/cosmetics/uk" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "UK Cosmetics Regulatory Services",
          "provider": {
            "@type": "Organization",
            "name": "NKB Regovanta",
            "url": "https://www.nkbregovanta.com"
          },
          "description": "UK Cosmetics Regulation compliance: UK Responsible Person (RP), SCPN notifications, CPSR safety reports, PIF compilation, and post-Brexit labelling.",
          "serviceType": "Cosmetics Regulatory Affairs"
        })
      }
    ],
  }),
  component: UKCosmetics,
});

const services = [
  {
    icon: <Anchor className="h-6 w-6 text-accent mb-4" />,
    title: "UK Responsible Person (RP)",
    desc: "Post-Brexit, a UK-based Responsible Person is mandatory. We act as your designated UK RP, ensuring continuous compliance with OPSS regulations.",
  },
  {
    icon: <Globe className="h-6 w-6 text-accent mb-4" />,
    title: "SCPN Portal Notification",
    desc: "We handle the mandatory Submit Cosmetic Product Notification (SCPN) process, registering your products with the UK government before they enter the market.",
  },
  {
    icon: <FileText className="h-6 w-6 text-accent mb-4" />,
    title: "Product Information Files (PIF)",
    desc: "We compile, structure, and maintain your comprehensive Product Information Files tailored specifically to UK cosmetics compliance standards.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent mb-4" />,
    title: "Cosmetic Product Safety Report (CPSR)",
    desc: "Our toxicologists conduct rigorous safety assessments to produce the mandatory CPSR, verifying product safety prior to UK market launch.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-accent mb-4" />,
    title: "UK Labeling & Ingredient Review",
    desc: "We scrutinize your cosmetic labels and ingredient lists (INCI) to ensure they adhere to UK-specific restrictions and mandatory English labeling requirements.",
  },
  {
    icon: <FileCheck2 className="h-6 w-6 text-accent mb-4" />,
    title: "Adverse Event Reporting",
    desc: "As your UK RP, we monitor, evaluate, and report any Serious Undesirable Effects (SUE) directly to the Office for Product Safety and Standards (OPSS).",
  },
];

function UKCosmetics() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white overflow-hidden pb-4 pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
            <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/industries/cosmetics" className="hover:text-navy transition-colors">Cosmetics</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">United Kingdom</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">UK Regulatory Services</p>
          <h1 className="font-display font-extrabold leading-tight text-navy max-w-4xl" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            Cosmetics Regulatory Services in the UK
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            Cosmetic market access differs between Great Britain and Northern Ireland. Great Britain uses the UK responsible-person and SCPN framework; EU cosmetic rules apply in Northern Ireland, with separate provisions for qualifying Northern Ireland goods supplied to Great Britain.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-surface/30 border-t border-border mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-border/50 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Navigating Post-Brexit UK Regulations</h2>
            <div className="prose prose-blue max-w-none text-navy/80 space-y-6">
              <p className="text-[15px] leading-relaxed">
                For the Great Britain market, the relevant cosmetic notification authority is the <strong>Office for Product Safety and Standards (OPSS)</strong>. The regulatory landscape mandates rigorous compliance regarding product registration, labeling, safety assessments, and local representation to ensure absolute consumer transparency and safety.
              </p>
              <p className="text-[15px] leading-relaxed">
                A critical divergence post-Brexit is the requirement for a dedicated <strong>UK-based Responsible Person (RP)</strong>. An EU appointment alone generally does not satisfy Great Britain's establishment requirement. Northern Ireland and qualifying Northern Ireland goods require a separate assessment. The RP is the ultimate guarantor of compliance, responsible for managing notifications, holding the Product Information File (PIF), and interacting with UK authorities.
              </p>
              <p className="text-[15px] leading-relaxed">
                Before a cosmetic product is placed on the Great Britain market, it must be notified through the <strong>Submit Cosmetic Product Notification (SCPN)</strong> portal. This requires a robust <strong>Cosmetic Product Safety Report (CPSR)</strong>, confirming the toxicological safety of the formulation based on UK-specific restricted and prohibited ingredient lists.
              </p>
              <p className="text-[15px] leading-relaxed">
                NKB Regovanta provides comprehensive regulatory support to bridge this gap. With our extensive expertise, we act as your designated UK RP, manage your SCPN notifications, ensure strict labeling compliance in English, and help plan compliance for the intended market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-navy">End-to-End UK Compliance Solutions</h2>
             <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
               We navigate the complexities of OPSS regulations and SCPN portals so you can focus on growing your brand in the United Kingdom.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="p-8 rounded-md bg-surface/50 border border-border hover:bg-surface transition-colors">
                {s.icon}
                <h3 className="font-bold text-navy text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-navy/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface/30 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">Can my EU Responsible Person act for the UK market too?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                For Great Britain, the Responsible Person generally needs a UK establishment. Northern Ireland follows a different framework, and qualifying Northern Ireland goods have specific access arrangements. Assess the destination and supply route before appointing representation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">Do I need to notify my products before selling them in the UK?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                For Great Britain, notification is made through SCPN before placement on the market. Northern Ireland follows the EU notification framework. <a className="underline" href="https://www.gov.uk/guidance/making-cosmetic-products-available-to-consumers-in-great-britain">Read the Great Britain guidance</a>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">Can I sell the exact same product in the EU and UK?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                A formulation may serve both markets if it meets each applicable requirement. Check ingredients, safety evidence, responsible-person arrangements, notification and labelling separately, including any Northern Ireland provisions relevant to the supply route.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Seamlessly enter the UK cosmetics market" action="Contact Our UK Experts" />
    </>
  );
}
