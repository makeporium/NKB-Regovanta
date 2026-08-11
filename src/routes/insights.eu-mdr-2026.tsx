import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
const imgEU = "/assets/brain/insight_eu_mdr_1786440985783.png";

export const Route = createFileRoute("/insights/eu-mdr-2026")({
  head: () => ({
    meta: [
      { title: "EU MDR 2026: EUDAMED & Priorities | Insights | NKB Regovanta" },
      {
        name: "description",
        content:
          "EU MDR 2026 update covering mandatory EUDAMED modules, UDI/device registration, certificates, market surveillance and practical manufacturer priorities.",
      },
    ],
  }),
  component: Article,
});

function Article() {
  return (
    <>
      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">EU MDR UPDATE</span>
            <span className="text-navy/30 text-sm">•</span>
            <span className="text-sm font-medium text-navy/60">May 28, 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
            EU MDR 2026: EUDAMED, Classification & Compliance Priorities
          </h1>

          <img src={imgEU} alt="EU MDR EUDAMED" className="w-full h-[400px] object-cover rounded-md mb-12 shadow-sm" />

          <div className="prose prose-lg prose-navy max-w-none prose-headings:text-navy prose-a:text-accent hover:prose-a:text-navy transition-colors prose-strong:text-navy">
            <p className="lead text-xl text-navy/80 font-medium mb-8">
              For medical-device manufacturers, 2026 brings practical regulatory changes that should be translated into clear actions across quality, regulatory and operational teams.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">EUDAMED has moved into mandatory use</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A significant EU medical-device compliance milestone took effect on 28 May 2026. The European Commission made the first four EUDAMED modules mandatory: Actor Registration; UDI/Device Registration; Notified Bodies & Certificates; and Market Surveillance. This changes EUDAMED from a largely voluntary preparation activity into a core operational compliance requirement for relevant economic operators.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Why this matters</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              EUDAMED is designed to improve transparency, traceability and coordination across the European medical-device system. Manufacturers now need reliable processes for maintaining accurate actor and device data, ensuring appropriate UDI information, supporting certificate data flows and responding to market-surveillance requirements.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Device data and UDI readiness</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Manufacturers placing devices on the EU market should confirm that required UDI/device information is correctly prepared and entered into EUDAMED. Data governance is important: product names, Basic UDI-DI relationships, identifiers, certificates and other regulatory information should be consistent across technical documentation, labels, declarations and database records.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Classification and regulatory strategy remain critical</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              EUDAMED implementation does not replace the broader MDR obligations. Manufacturers should continue to verify device classification, conformity-assessment routes, clinical-evaluation evidence, post-market surveillance, vigilance, technical documentation and economic-operator responsibilities. Classification decisions should be justified and documented because they influence the regulatory pathway and evidence requirements.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Practical priorities for 2026</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Organizations should assign clear EUDAMED ownership, validate actor and device master data, establish change-control rules for database updates, reconcile certificates and UDI information, review internal procedures for mandatory module use, train regulatory and quality teams, and maintain readiness for authority or notified-body questions. Companies with large portfolios should consider a structured data-remediation exercise rather than handling registrations reactively.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Build compliance into normal operations</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              EUDAMED should be treated as part of the product lifecycle rather than a one-time registration task. Connecting database maintenance to regulatory change control, labeling, certification and post-market processes will help reduce inconsistent data and late updates.
            </p>
          </div>

        </div>
      </article>

      <CTABand 
        title="Need help with EU MDR strategy or EUDAMED readiness?" 
        description="NKB Regovanta can support classification reviews, technical documentation, UDI/device data preparation and regulatory compliance planning." 
        btnText="Contact Us Today" 
      />
    </>
  );
}
