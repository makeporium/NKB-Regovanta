import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2, ShieldCheck, FileCheck2, FlaskConical, Globe, BookOpen } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/eu_hero_1786396525523.png"; // Assuming standard EU hero exists, or we use a fallback

export const Route = createFileRoute("/industries/cosmetics_/eu")({
  head: () => ({
    meta: [
      { title: "EU Cosmetic Regulation & Registration Services | NKB Regovanta" },
      { name: "description", content: "End-to-end EU cosmetics compliance, Responsible Person (RP) services, PIF, CPSR, and CPNP notification." },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/industries/cosmetics/eu" },
  ],
  }),
  component: EUCosmetics,
});

const services = [
  {
    icon: <Globe className="h-6 w-6 text-accent mb-4" />,
    title: "EU Responsible Person (RP)",
    desc: "Every cosmetic product must have a legally designated EU Responsible Person. We fulfill this critical role, ensuring ongoing regulatory and safety compliance across all 27 EU member states, plus Norway, Iceland, and Liechtenstein.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-accent mb-4" />,
    title: "Product Information File (PIF)",
    desc: "We compile, maintain, and manage the extensive Product Information File (PIF) documentation, which is required to be made readily accessible to the competent authorities upon request.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent mb-4" />,
    title: "Cosmetic Product Safety Report (CPSR)",
    desc: "Our safety assessors prepare the Cosmetic Product Safety Report (CPSR), the central document within the PIF that confirms your product is safe for human use under normal and reasonably foreseeable conditions.",
  },
  {
    icon: <FileCheck2 className="h-6 w-6 text-accent mb-4" />,
    title: "CPNP Notification",
    desc: "Before your cosmetic product can enter the European market, we submit all mandatory product details through the European Commission's Cosmetic Products Notification Portal (CPNP).",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-accent mb-4" />,
    title: "Labeling & Claims Compliance",
    desc: "We conduct rigorous artwork and label reviews to ensure strict compliance with EU Cosmetic labeling requirements, including INCI ingredient lists, mandatory warnings, and manufacturer details.",
  },
  {
    icon: <FlaskConical className="h-6 w-6 text-accent mb-4" />,
    title: "Laboratory Testing Coordination",
    desc: "We coordinate essential product testing required for safety assessments, including microbiology, dermatology, preservative efficacy, stability, and packaging compatibility testing.",
  },
];

function EUCosmetics() {
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
            <span className="text-navy">European Union</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">European Union Regulatory Services</p>
          <h1 className="font-display font-extrabold leading-tight text-navy max-w-4xl" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            EU Cosmetic Regulation & Registration Services
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            Europe remains one of the most lucrative and competitive markets for cosmetics globally. However, effectively navigating the EU Cosmetic Regulation and successfully completing the registration process requires deep expertise due to the stringent, harmonized requirements of Regulation (EC) No. 1223/2009.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-surface/30 border-t border-border mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-border/50 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Understanding the EU Regulatory Landscape</h2>
            <div className="prose prose-blue max-w-none text-navy/80 space-y-6">
              <p className="text-[15px] leading-relaxed">
                The European Union's Cosmetic Regulation (EC) No. 1223/2009 was implemented to establish a harmonized framework for the notification, safety assessment, and labeling of cosmetic products across all 27 EU member states, as well as Norway, Iceland, and Liechtenstein. The core philosophy of this regulation is ensuring the highest level of consumer safety.
              </p>
              <p className="text-[15px] leading-relaxed">
                A foundational pillar of this framework is the requirement that every cosmetic product sold in the European Union must have a designated <strong>Responsible Person (RP)</strong> established within the EU. The RP acts as the legal representative and the primary point of contact for health authorities, ensuring ongoing regulatory and safety compliance.
              </p>
              <p className="text-[15px] leading-relaxed">
                Furthermore, the RP bears the responsibility of maintaining a comprehensive <strong>Product Information File (PIF)</strong>. This extensive dossier includes the critical <strong>Cosmetic Product Safety Report (CPSR)</strong>, which is the definitive document verifying the product's safety for consumer application. Alongside documentation, the RP is mandated to ensure that a <strong>CPNP notification</strong> is successfully lodged in the European Commission's Cosmetic Product Notification Portal prior to the product ever entering the commercial market.
              </p>
              <p className="text-[15px] leading-relaxed">
                NKB Regovanta provides comprehensive, end-to-end support for EU cosmetic registration, ensuring that brands can achieve seamless market access. By acting as your trusted Responsible Person, we manage the intricate details of compliance, from PIF documentation and CPSR preparation to laboratory testing and labeling reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-navy">Our End-to-End Compliance Solutions</h2>
             <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
               With years of experience guiding cosmetic brands through the complexities of European registration, we ensure your products meet all compliance requirements without sacrificing speed-to-market.
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
              <h3 className="text-lg font-bold text-navy mb-2">Do I need a separate registration for each EU member state?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                No. Because of the harmonized EU Cosmetic Regulation, once your product is registered and notified via the CPNP, it is legally valid to be marketed across all 27 EU member states, plus Norway, Iceland, and Liechtenstein.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">Why is labeling compliance so important?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                Labeling is strictly governed under EU law to protect consumers. Your labels must feature accurate product identity, INCI-compliant ingredient lists, mandatory safety warnings, and the physical details of the Responsible Person. Non-compliant labels can result in immediate market withdrawal.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">What testing is required to support the CPSR?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                Cosmetic safety assessments rely on empirical data. Products typically must undergo microbiological testing, dermatological evaluations, preservative efficacy testing (challenge tests), stability testing, and packaging compatibility studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Partner with us for seamless EU market access" btnText="Contact Our EU Experts" />
    </>
  );
}
