import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

const imgArticle = "/assets/brain/qms_inspection_office.jpg";

export const Route = createFileRoute("/insights/qms-documentation-iso-13485-compliance")({
  head: () => ({
    meta: [
      { title: "Defensible QMS Documentation Guide | NKB Regovanta" },
      {
        name: "description",
        content: "Best practices for building compliant standard operating procedures, design history files, device master records, and CAPA logs.",
      },
      { property: "og:title", content: "Defensible QMS Documentation Guide | NKB Regovanta" },
      {
        property: "og:description",
        content: "Best practices for building compliant standard operating procedures, design history files, device master records, and CAPA logs.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/qms-documentation-iso-13485-compliance" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/technical_documentation_hero_1786399660256.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Defensible QMS Documentation Guide | NKB Regovanta" },
      { name: "twitter:description", content: "Best practices for building compliant standard operating procedures, design history files, device master records, and CAPA logs." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/technical_documentation_hero_1786399660256.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/insights/qms-documentation-iso-13485-compliance" },
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
            "headline": "Structuring Defensible QMS Documentation for Seamless ISO 13485:2016 Certification",
            "description": "Best practices for building compliant standard operating procedures, design history files, device master records, and CAPA logs.",
            "image": "https://www.nkbregovanta.com/assets/brain/technical_documentation_hero_1786399660256.png",
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
            "datePublished": "2026-08-25",
            "mainEntityOfPage": "https://www.nkbregovanta.com/insights/qms-documentation-iso-13485-compliance"
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
              QUALITY MANAGEMENT
            </span>
            <span className="text-navy/30 text-sm">•</span>
            <span className="text-sm font-medium text-navy/60">2026-08-25</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
            Structuring Defensible QMS Documentation for Seamless ISO 13485:2016 Certification
          </h1>

          <p className="text-lg sm:text-xl text-blue-900/80 font-medium leading-relaxed mb-10 pb-6 border-b border-gray-100">
            Best practices for building compliant standard operating procedures, design history files, device master records, and CAPA logs.
          </p>

          <img 
            src={imgArticle} 
            alt="Structuring Defensible QMS Documentation for Seamless ISO 13485:2016 Certification" 
            className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl mb-12 shadow-md border border-gray-100" 
          />

          <div className="prose prose-lg max-w-none text-navy/80 space-y-6 leading-relaxed">
<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">QMS Documentation to Meet ISO 13485:2016</h2>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Introduction</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Establishing robust QMS Documentation to Meet ISO 13485 is the single most critical step for medical device manufacturers targeting global markets. A well-structured Quality Management System (QMS) ensures consistent product quality, patient safety, and regulatory compliance from initial design to post-market surveillance.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">With global regulatory bodies harmonizing their standards—most notably the US FDA QMSR fully aligning 21 CFR 820 with ISO 13485:2016—maintaining an inspection-ready medical device quality management system is no longer optional. This guide breaks down the mandatory documents, essential Standard Operating Procedures (SOPs), and documentation best practices required to secure and maintain ISO 13485 certification.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Regulatory Excellence for Global Medical Device Markets</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">What Is ISO 13485:2016?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">ISO 13485:2016 is the internationally recognized benchmark standard for quality management systems in the medical device industry. It provides a comprehensive framework that enables organizations to meet customer requirements and international regulatory mandates across every phase of the device lifecycle.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">ISO 13485 applies across all stages of the medical device lifecycle:</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Design and Development (Design Controls, DHF)</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Manufacturing and Production Control</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Storage, Packaging, and Distribution</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Installation and Servicing</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Post-Market Surveillance and Vigilance</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Why Is QMS Documentation Critical for ISO 13485 Compliance?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Documented evidence is the cornerstone of regulatory auditing. In the medical device domain, &quot;if it isn&apos;t documented, it didn&apos;t happen.&quot; Proper iso 13485 documentation proves that your organization adheres to established quality processes and risk control measures.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Key Benefits of a Structured QMS Documentation Hierarchy:</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Ensures Audit Readiness: Accelerates inspections by Notified Bodies, the US FDA, and CDSCO.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Guarantees Traceability: Connects raw materials, batch manufacturing records, and distribution logs.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Drives Risk Management: Integrates hazard analysis with ISO 14971 standards across all operations.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Minimizes Compliance Gaps: Prevents costly non-conformances, product recalls, and audit warnings.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Need expert guidance on your QMS build?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">streamline your path to ISO 13485 certification.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Contact Us</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">10 Mandatory Documents &amp; Records Required for ISO 13485</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">To maintain compliance with ISO 13485 requirements, manufacturers must build and maintain a tiered documentation structure.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">TierDocument TypeCore Focus &amp; PurposeLevel 1Quality Manual &amp; PolicyDefines QMS scope, quality objectives, and organizational structure.Level 2Standard Operating Procedures (SOPs)Outlines cross-functional, mandatory quality processes.Level 3Work Instructions (WIs)Step-by-step operational instructions for manufacturing tasks.Level 4Records &amp; FormsObjective evidence of compliance (e.g., CAPA logs, test results).</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">1. Quality Manual</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The Quality Manual defines the overall structure and regulatory scope of your qms for medical devices. It outlines process interactions, management commitments, and justification for any standard exclusions.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">2. Quality Policy and Objectives</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Measurable quality goals established by executive leadership to drive continuous system improvement and regulatory compliance.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">3. Medical Device File (MDF) / Technical File</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">ISO 13485 Clause 4.2.3 requires a dedicated file for each medical device model, containing technical specifications, intended use, manufacturing procedures, and labeling. This aligns directly with CE Marking under EU MDR and CDSCO medical device registration filings.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">4. Design and Development Documentation</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Records covering design inputs, design outputs, design verification, design validation, and transfer activities stored within a Design History File (DHF).</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">5. Risk Management Documentation (ISO 14971)</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Comprehensive risk management files containing hazard analysis, risk evaluation, risk control implementation, and residual risk evaluation across the device lifecycle.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">6. Product Realization Records</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Operational documents including production flowcharts, batch manufacturing records (BMR), equipment calibration records, and inspection logs.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">7. Process Validation Records</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Validation protocols and reports demonstrating that manufacturing processes consistently produce devices meeting specifications. Learn more about Process Validation (IQ, OQ, PQ) for manufacturing equipment.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">8. Supplier Management Documentation</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Criteria for supplier evaluation, approved vendor lists (AVL), quality agreements, and ongoing supplier audit logs.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">9. CAPA Documentation</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Corrective and Preventive Action records detailing root cause analysis, action plans, and post-implementation effectiveness reviews.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">10. Internal Audit and Management Review Records</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Documented audit schedules, internal audit reports, non-conformance tracking, and executive management review meeting minutes.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Critical Standard Operating Procedures (SOPs) Required</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Clause-by-clause compliance requires documented SOPs for all core qms processes. Essential procedures include:</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">SOP for Document Control &amp; Record Retention (Clause 4.2.4 / 4.2.5)</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">SOP for Risk Management &amp; Lifecycle Safety (ISO 14971)</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">SOP for CAPA Management (Clause 8.5.2 / 8.5.3)</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">SOP for Complaint Handling &amp; Medical Device Reporting (Clause 8.2.2)</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">SOP for Control of Non-Conforming Product (Clause 8.3)</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">SOP for Change Control Management</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Best Practices for Maintaining Audit-Ready Documentation</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Adopt an Electronic Quality Management System (eQMS): Transitioning from paper-based files to an automated eQMS streamlines version control, approval workflows, and document distribution.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Harmonize for Global Markets: Ensure your QMS framework simultaneously satisfies ISO 13485:2016, FDA QMSR compliance requirements, and MDSAP certification readiness standards.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Perform Regular Documentation Gap Analyses: Conduct internal audits periodically to catch outdated procedures or missing records before formal certification audits.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Common ISO 13485 Documentation Pitfalls</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Inconsistent Version Control: Using outdated SOP versions on the manufacturing shop floor.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Superficial CAPA Investigations: Failing to identify true root causes, leading to recurring non-conformances.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Weak Supplier Oversight: Inadequate record-keeping of supplier qualifications and component changes.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Disconnected Risk Management: Treating risk management as a one-time exercise rather than updating risk files during post-market reporting.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">How NKB Regovanta Can Help</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Developing audit-ready QMS Documentation to Meet ISO 13485 requires a balance of regulatory precision and practical manufacturing experience. NKB Regovanta provides end-to-end consulting support to ensure your organization achieves seamless certification and market access:</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Turnkey QMS Development: Customized creation of Quality Manuals, SOPs, and technical templates tailored to your device classification.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">QMS Gap Analysis &amp; Remediation: Thorough evaluation of existing documentation to fix compliance gaps prior to Notified Body or FDA audits.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Global Regulatory Alignment: Structuring QMS documentation to meet ISO 13485, US FDA QMSR, EU MDR, and CDSCO requirements simultaneously.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">eQMS Selection &amp; Digitization: Assisting in selecting, validating, and implementing electronic quality management platforms.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">*</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Mock Audits &amp; Certification Support: Executing internal audits, training staff, and offering direct support during final certification inspections.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Looking to upgrade to an audit-ready digital eQMS?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Connect with NKB Regovanta&apos;s eQMS Consultants to fast-track your documentation setup.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Contact Us</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">FAQ&apos;s</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">What is QMS documentation in ISO 13485?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">It is the structured collection of policies, procedures, work instructions, and records required to demonstrate compliance with ISO 13485 quality standards.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Is a Quality Manual mandatory under ISO 13485:2016?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Yes, Clause 4.2.2 explicitly requires a Quality Manual that outlines the QMS scope and document structure.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">How does ISO 13485 documentation align with US FDA QMSR?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The FDA QMSR incorporates ISO 13485:2016 by reference, meaning ISO-compliant QMS documentation now serves as the baseline for US FDA compliance.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">What are the core mandatory SOPs for ISO 13485?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Key mandatory SOPs include Document Control, CAPA, Complaint Handling, Risk Management, Internal Audits, and Supplier Management.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">How long should ISO 13485 quality records be retained?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Records must be retained for at least the lifetime of the medical device, but no less than 2 years from product release or as defined by local regulations.</p>

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
