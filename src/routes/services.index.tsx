import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, FileCheck, FileSearch, Globe2, ShieldCheck, Zap, Building2, Radio, Activity, Landmark, Pill } from "lucide-react";
import { CTABand, PageHero } from "@/components/site/Bits";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Regulatory Affairs & Quality Consulting Services | NKB Regovanta" },
      {
        name: "description",
        content:
          "Explore NKB Regovanta's global regulatory consulting services: CDSCO India licensing, US FDA 510(k), EU MDR/IVDR, ISO 13485 QMS, MDSAP, Drug & Cosmetics compliance.",
      },
      {
        name: "keywords",
        content:
          "NKB Regovanta services, regulatory consulting services, CDSCO registration, US FDA 510k, EU MDR CE mark, ISO 13485 consulting, MDSAP, drug license importer, WPC ETA, PC-PNDT certificate",
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
    title: "Regulatory Affairs",
    text: "Regulatory strategy, submission support and licensing across global markets.",
    to: "/services/regulatory-affairs",
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