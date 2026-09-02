import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, FileCheck, FileSearch, Globe2, ShieldCheck, Zap, Building2, Radio, Activity, Landmark, Pill, Factory, Syringe } from "lucide-react";
import { CTABand, PageHero } from "@/components/site/Bits";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Regulatory Affairs & Quality Consulting Services | NKB Regovanta" },
      {
        name: "description",
        content:
          "Explore NKB Regovanta's global regulatory consulting services: CDSCO India licensing (MD-14/15, Form 41/10), US FDA 510(k), EU MDR/IVDR, ISO 13485 QMS, MDSAP, Drug & Cosmetics compliance.",
      },
      {
        name: "keywords",
        content:
          "CDSCO Medical Device Import Licence, MD-14 application, MD-15 import licence, Class A GSR 777(E) registration, MD-3 MD-5 manufacturing licence, MD-7 MD-9 manufacturing licence, Loan manufacturing MD-4 MD-6, Indian Authorized Agent AIR, SUGAM portal support, Drug Import Licence India, Form 41 CDSCO, Form 10 import licence, PC-PNDT Certificate registration, WPC ETA approval medical devices, IEC Code DGFT, AD Code ICEGATE, Free Sale Certificate FSC CDSCO, US FDA 510k submission consultant, FDA 510(k) clearance medical devices, eSTAR FDA dossier, De Novo classification, PMA Premarket Approval, US FDA US Agent services, MoCRA compliance support, EU MDR 2017/745 regulatory consultant, CE Marking medical devices Europe, EU IVDR 2017/746, European Authorized Representative EC REP, UK MHRA medical device registration, UK Responsible Person UKRP, Australia TGA ARTG inclusion, Health Canada MDL MDEL, ANVISA Brazil, Saudi Arabia SFDA, UAE MOHAP, ISO 13485 implementation consultant, MDSAP audit readiness, FDA QMSR compliance, ISO 14971 Risk Management, CDSCO cosmetic import registration COS-1 COS-2, EU Cosmetic Responsible Person EU RP",
      },
      { property: "og:title", content: "Regulatory Affairs & Quality Consulting Services | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Comprehensive regulatory, quality & market access solutions tailored to Medical Devices, IVDs, Pharmaceuticals, and Cosmetics.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services" },
    ],
  }),
  component: ServicesOverview,
});

const services = [
  {
    icon: ShieldCheck,
    title: "Global Medical Device & IVD Regulatory Registration",
    text: "Regulatory strategy, submission support and licensing across global markets.",
    to: "/services/regulatory-affairs",
  },
  {
    icon: Syringe,
    title: "Drug-Device Combination Product Consulting",
    text: "Global regulatory pathways, FDA 21 CFR Part 4, EU MDR Article 117 Notified Body Opinions (NBOp), DHF and ISO 14971 compliance.",
    to: "/services/drug-device-combination-products",
  },
  {
    icon: FileSearch,
    title: "Regulatory Due Diligence for Medical Devices & IVDs",
    text: "Decision-grade regulatory audits for M&A, private equity investments, QMS maturity, FDA 483 assessments, and valuation risk modeling.",
    to: "/services/regulatory-due-diligence",
  },
  {
    icon: Pill,
    title: "Drug Licenses for Importers",
    text: "Registration Certificate (Form 41), Import License (Form 10/10-A), Form 11 Test Licenses and wholesale distribution support.",
    to: "/services/drug-licenses-for-importers",
  },
  {
    icon: Radio,
    title: "WPC Wireless Device Approval",
    text: "Equipment Type Approval (ETA), Dealer Possession Licenses (DPL) and RF test compliance for connected devices.",
    to: "/services/wpc-wireless-medical-devices",
  },
  {
    icon: Activity,
    title: "PC-PNDT Certificate",
    text: "Statutory Form A & Form B registration for ultrasound, imaging machines and diagnostic equipment in India.",
    to: "/services/pc-pndt-certificate",
  },
  {
    icon: Landmark,
    title: "IEC & AD Code Registration",
    text: "Import Export Code (IEC) and Authorised Dealer (AD) Code registration across Indian customs ports.",
    to: "/services/iec-ad-code",
  },
  {
    icon: BadgeCheck,
    title: "Quality Systems",
    text: "ISO 13485, QMS development, internal audits, CAPA & compliance readiness.",
    to: "/services/iso-13485",
  },
  {
    icon: Globe2,
    title: "MDSAP",
    text: "Prepare your Quality Management System for global MDSAP audits.",
    to: "/services/mdsap",
  },
  {
    icon: FileCheck,
    title: "Technical Documentation",
    text: "End-to-end technical file writing (STED), risk management & compliance support.",
    to: "/services/technical-documentation",
  },
  {
    icon: Zap,
    title: "Market Access",
    text: "Market entry strategy, pricing, reimbursement & post-market compliance.",
    to: "/services/market-access",
  },
  {
    icon: Factory,
    title: "Our Products (Manufacturing)",
    text: "cGMP-compliant pharmaceutical machinery, SS 304/316 cleanroom furniture, blenders, conveyors, and material handling solutions.",
    to: "/services/manufacturing",
  },
  {
    icon: FileSearch,
    title: "Audit & Compliance Support",
    text: "Internal audits, supplier audits, compliance & regulatory intelligence.",
    to: "/services/audit-compliance",
  },
];

function ServicesOverview() {
  return (
    <>
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <h1 className="text-3xl font-extrabold text-navy sm:text-5xl leading-tight">
             Our Services
           </h1>
           <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
             Comprehensive regulatory, quality & market access solutions tailored to your business needs.
           </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card-elevated p-8 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <s.icon className="h-8 w-8 text-navy" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                  {s.text}
                </p>
                <Link to={s.to} className="mt-8 font-bold text-navy hover:text-accent transition-colors">
                  Learn More +
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
           <div>
             <h2 className="text-2xl font-bold">Have a unique regulatory challenge?</h2>
             <p className="mt-2 text-navy-foreground/80 text-lg">Let's build the right solution for your product.</p>
           </div>
           <Link to="/contact" className="inline-flex items-center justify-center rounded-sm bg-white text-navy font-semibold px-8 py-4 transition-colors hover:bg-white/90 shrink-0">
             Book a Consultation
           </Link>
        </div>
      </section>
    </>
  );
}