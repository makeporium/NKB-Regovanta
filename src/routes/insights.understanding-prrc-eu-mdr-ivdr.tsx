import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

const imgArticle = "/assets/brain/eu_compliance_1786396542227.png";

export const Route = createFileRoute("/insights/understanding-prrc-eu-mdr-ivdr")({
  head: () => ({
    meta: [
      { title: "PRRC Role Under EU MDR & EU IVDR | NKB Regovanta" },
      {
        name: "description",
        content: "Legal responsibilities, qualification standards, outsourcing limits, and liability considerations for Person Responsible for Regulatory Compliance.",
      },
      { property: "og:title", content: "PRRC Role Under EU MDR & EU IVDR | NKB Regovanta" },
      {
        property: "og:description",
        content: "Legal responsibilities, qualification standards, outsourcing limits, and liability considerations for Person Responsible for Regulatory Compliance.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/understanding-prrc-eu-mdr-ivdr" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/insight_eu_mdr_1786440985783.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PRRC Role Under EU MDR & EU IVDR | NKB Regovanta" },
      { name: "twitter:description", content: "Legal responsibilities, qualification standards, outsourcing limits, and liability considerations for Person Responsible for Regulatory Compliance." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/insight_eu_mdr_1786440985783.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/insights/understanding-prrc-eu-mdr-ivdr" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Demystifying the Role of PRRC Under EU MDR and EU IVDR (Article 15)",
            "description": "Legal responsibilities, qualification standards, outsourcing limits, and liability considerations for Person Responsible for Regulatory Compliance.",
            "image": "https://www.nkbregovanta.com/assets/brain/insight_eu_mdr_1786440985783.png",
            "author": {
              "@type": "Organization",
              "name": "NKB Regovanta Solutions Pvt. Ltd.",
              "url": "https://www.nkbregovanta.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "NKB Regovanta Solutions Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.nkbregovanta.com/favicon.png"
              }
            },
            "datePublished": "2026-08-24",
            "mainEntityOfPage": "https://www.nkbregovanta.com/insights/understanding-prrc-eu-mdr-ivdr"
          })
        }}
      />

      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              EU REGULATORY COMPLIANCE
            </span>
            <span className="text-navy/30 text-sm">•</span>
            <span className="text-sm font-medium text-navy/60">2026-08-24</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
            Demystifying the Role of PRRC Under EU MDR and EU IVDR (Article 15)
          </h1>

          <p className="text-lg sm:text-xl text-blue-900/80 font-medium leading-relaxed mb-10 pb-6 border-b border-gray-100">
            Legal responsibilities, qualification standards, outsourcing limits, and liability considerations for Person Responsible for Regulatory Compliance.
          </p>

          <img 
            src={imgArticle} 
            alt="Demystifying the Role of PRRC Under EU MDR and EU IVDR (Article 15)" 
            className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl mb-12 shadow-md border border-gray-100" 
          />

          <div className="prose prose-lg max-w-none text-navy/80 space-y-6 leading-relaxed">
<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Understanding The PRRC Under EU MDR and IVDR</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Introduction to PRRC under EU MDR</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The EU Medical Device Regulation (MDR 2017/745) and In Vitro Diagnostic Regulation (IVDR 2017/746) have dramatically transformed the regulatory framework for medical devices and IVDs in Europe. Among the major changes is the introduction of a crucial new role the Person Responsible for Regulatory Compliance (PRRC).In this blog, we delve into the importance of the PRRC, their key responsibilities, and why this role is essential for ensuring regulatory compliance under EU MDR and IVDR.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Read more about Understanding the Responsibilities of Economic Operators Under the EU MDR 2017/745</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Regulatory Excellence for Global Medical Device Markets</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Who Needs a PRRC?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Article 15 of the EU MDR and IVDR mandates that manufacturers and non-EEA manufacturers’ EU-authorized representatives appoint a Person Responsible for Regulatory Compliance (PRRC). While legacy devices are exempt from this requirement, many manufacturers include them under PRRC oversight for simplicity.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Non-EEA manufacturers must confirm their EU authorized representative appoints a qualified PRRC, but the same individual cannot serve as PRRC for both parties. Companies with multiple legal manufacturers must assign a PRRC for each entity.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">12 Things You Need to Know About the PRRC under EU MDR and IVDR</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Legal Mandate: The PRRC role is mandated under EU MDR (EU 2017/745) and IVDR (EU 2017/746) as per Article 15.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Qualifications: A PRRC must possess a relevant university degree or equivalent certification or have at least four years of professional experience in regulatory affairs or quality management.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Availability: The PRRC must be permanently and continuously available to manufacturers and authorized representatives, ensuring access to all relevant documents and records necessary for fulfilling their duties.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Responsibilities: The PRRC verifies that technical documentation and EU declarations of conformity are up to date. They also oversee compliance with Post-Market Surveillance (PMS) systems, reporting obligations (Articles 87–91 for MDR, 82–86 for IVDR), and investigational device conformity statements (Annex XV).</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Micro and Small Manufacturers: Micro and small manufacturers may subcontract the PRRC role if the designated individual meets the necessary qualifications and is permanently available, as outlined in MDCG 2019-7.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Authorized Representatives: For authorized representatives, the PRRC ensures manufacturer compliance, verifies the completeness of technical documentation, and registers required information in EUDAMED as per Article 11(3).</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Documentation: PRRC responsibilities and tasks must be clearly documented and accepted by the individual. Senior management must support the PRRC with the necessary authority and resources.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Independence: The PRRC must maintain independence to ensure impartial oversight. A single PRRC cannot serve as both the manufacturer’s and the authorized representative’s PRRC simultaneously.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Parent Companies and Virtual Manufacturers: Each legal manufacturer under a parent company must have its own PRRC. For virtual manufacturers, the PRRC must ensure that the OEM complies with MDR/IVDR requirements.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Risk-Based Approach: The PRRC’s duties should align with the risk class of the devices, ensuring a proportional and risk-based oversight.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Liability: The PRRC is not personally liable for compliance failures; their role is to ensure that regulatory activities are performed in accordance with requirements.</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Registration: PRRC details, including name and contact information, must be registered in EUDA-MED to ensure traceability and accountability.</span></li>
</ul>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Key Responsibilities of the PRRC</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The PRRC is entrusted with several critical responsibilities, ensuring the compliance and safety of medical devices and in vitro diagnostics. These include:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Device ConformityEnsuring that the conformity of devices is checked appropriately in accordance with the quality management system before the devices are released. (Art. 10(9))</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Technical Documentation and Declaration of Conformity</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Ensuring the preparation and maintenance of the Technical Documentation and the EU Declaration of Conformity. (Art. 10(6))</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Post-Market Surveillance (PMS)</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Ensuring compliance with PMS obligations in accordance with Article 10(10). This includes the implementation and continuous updating of the PMS system as outlined in Article 83 and Annex III.</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Reporting Obligations</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Ensuring the proper functioning of systems for recording and reporting incidents and field safety corrective actions, as required by Articles 87 to 91.</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Investigational Devices</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">In the case of investigational devices, the PRRC must confirm compliance with General Safety and Performance Requirements (GSPR) and ensure that all health and safety precautions for subjects are in place. (Section 4.1 of Chapter II of Annex XV).</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Role of NKB Regovanta</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">NKB Regovanta helps manufacturers and stakeholders navigate EU MDR and IVDR requirements, including PRRC responsibilities, ensuring smooth compliance. With deep regulatory expertise and a commitment to excellence, they enable clients to confidently manage global medical device regulations.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">NKB Regovanta provides end-to-end support for regulatory approvals like European CE marking, FDA 510(k), Indian CDSCO import registration, SFDA and UKCA compliance. They assist in setting up manufacturing units with Facility layout designing, cleanroom design, machine validation and facility compliance as per all regulatory norms, ensuring quality through ISO 13485, FDA QSR, and MDSAP compliance and all regulatory approvals.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Our expertise extends to design and development, including technical documentation and risk management, while also offering tailored training and consultation for regulatory and licensing needs.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Categories</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">CDSCO Category</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Medical device Manufacturing</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">News/Updates</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">QMS</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Regulatory</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Turnkey Project Management</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">US FDA</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Subscribe Newsletter</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Recent Posts</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Predetermined Change Control Plan (PCCP) for SaMD: FDA Requirements</p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50/60 to-slate-50 border border-blue-100 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-4">How NKB Regovanta Can Support Your Programme</h3>
            <p className="text-navy/80 leading-relaxed mb-6">
              Our multidisciplinary team of regulatory affairs strategists, former auditors, and quality system engineers partners with medical technology innovators worldwide. We bridge complex regulatory standards with practical, commercial market-access pathways.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Global Regulatory Strategy &amp; Submissions</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Technical Documentation &amp; GSPR Files</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <FileText className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">ISO 13485 &amp; FDA QMSR Implementation</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <Globe2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Market Authorization &amp; Authorized Representation</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTABand 
        title="Ready to navigate your medical device regulatory pathway?" 
        description="Speak directly with NKB Regovanta's senior regulatory consultants for clear, practical guidance." 
        action="Schedule a Consultation" 
      />
    </>
  );
}
