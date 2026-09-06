import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

const imgArticle = "/assets/brain/media__1786282925761.png";

export const Route = createFileRoute("/insights/core-regulations-medical-device-global-compliance")({
  head: () => ({
    meta: [
      { title: "Beyond MDR and FDA: Core Global Regulations Shaping Modern MedTech Compliance | NKB Regovanta" },
      {
        name: "description",
        content: "Essential requirements spanning ISO 14971, IEC 60601-1, IEC 62366-1, ISO 10993, RoHS/REACH, and cybersecurity standards.",
      },
      {
        name: "keywords",
        content: "beyond mdr and fda: core global regulations shaping modern medtech compliance, medical device regulations, NKB Regovanta, regulatory consulting, medtech compliance",
      },
      { property: "og:title", content: "Beyond MDR and FDA: Core Global Regulations Shaping Modern MedTech Compliance | NKB Regovanta" },
      {
        property: "og:description",
        content: "Essential requirements spanning ISO 14971, IEC 60601-1, IEC 62366-1, ISO 10993, RoHS/REACH, and cybersecurity standards.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/core-regulations-medical-device-global-compliance" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/technical_documentation_hero_1786399660256.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Beyond MDR and FDA: Core Global Regulations Shaping Modern MedTech Compliance" },
      { name: "twitter:description", content: "Essential requirements spanning ISO 14971, IEC 60601-1, IEC 62366-1, ISO 10993, RoHS/REACH, and cybersecurity standards." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/technical_documentation_hero_1786399660256.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/insights/core-regulations-medical-device-global-compliance" },
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
            "headline": "Beyond MDR and FDA: Core Global Regulations Shaping Modern MedTech Compliance",
            "description": "Essential requirements spanning ISO 14971, IEC 60601-1, IEC 62366-1, ISO 10993, RoHS/REACH, and cybersecurity standards.",
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
            "datePublished": "2026-09-04",
            "mainEntityOfPage": "https://www.nkbregovanta.com/insights/core-regulations-medical-device-global-compliance"
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
              INTERNATIONAL COMPLIANCE
            </span>
            <span className="text-navy/30 text-sm">•</span>
            <span className="text-sm font-medium text-navy/60">2026-09-04</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
            Beyond MDR and FDA: Core Global Regulations Shaping Modern MedTech Compliance
          </h1>

          <p className="text-lg sm:text-xl text-blue-900/80 font-medium leading-relaxed mb-10 pb-6 border-b border-gray-100">
            Essential requirements spanning ISO 14971, IEC 60601-1, IEC 62366-1, ISO 10993, RoHS/REACH, and cybersecurity standards.
          </p>

          <img 
            src={imgArticle} 
            alt="Beyond MDR and FDA: Core Global Regulations Shaping Modern MedTech Compliance" 
            className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl mb-12 shadow-md border border-gray-100" 
          />

          <div className="prose prose-lg max-w-none text-navy/80 space-y-6 leading-relaxed">
<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">class=&quot;elementor-element elementor-element-232afc4 elementor-widget elementor-widget-theme-post-content&quot; data-id=&quot;232afc4&quot; data-element_type=&quot;widget&quot; data-e-type=&quot;widget&quot; data-widget_type=&quot;theme-post-content.default&quot;&gt;</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Beyond MDR and IVDR: 6 Critical Regulations Shaping Medical Device Compliance</h2>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Introduction</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Medical Device Compliance in the European Union goes beyond MDR and IVDR. Manufacturers must assess the complete regulatory environment that applies to their product, including requirements related to artificial intelligence, radio equipment, data protection, batteries, hazardous substances, and electronic waste.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Regulation (EU) 2017/745 (MDR) has applied to medical devices since 26 May 2021, while Regulation (EU) 2017/746 (IVDR) has applied to in vitro diagnostic medical devices since 26 May 2022. These regulations establish the core framework for safety, performance, clinical evidence, conformity assessment, and post-market obligations.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">However, a connected, software-enabled, battery-powered, or electrically operated medical device may also be subject to other EU legislation.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Ready to Simplify MDR and IVDR Compliance?</h2>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Is MDR and IVDR compliance enough?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">No. MDR and IVDR may not cover every regulatory obligation applicable to a medical device. Depending on the device&apos;s technology, intended purpose, components, connectivity, materials, and data processing activities, manufacturers may also need to assess legislation such as the EU AI Act, Radio Equipment Directive, GDPR, Batteries Regulation, RoHS, REACH, and WEEE.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">This article explains six important areas manufacturers should consider when developing a comprehensive Medical Device Compliance strategy.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">What Are MDR and IVDR?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The Medical Device Regulation (MDR 2017/745) establishes requirements for medical devices placed on the EU market, including classification, technical documentation, clinical evaluation, conformity assessment, post-market surveillance, and responsibilities of economic operators.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The In Vitro Diagnostic Medical Device Regulation (IVDR 2017/746) applies specifically to IVDs and introduced a risk-based classification system, stronger performance evaluation requirements, and greater involvement of notified bodies.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">MDR and IVDR therefore form the foundation of EU medical device regulation—but they may need to be considered alongside other EU laws.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">1. EU AI Act – Important for AI-Enabled Medical Devices</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Why Does the EU AI Act Matter for Medical Devices?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Medical devices incorporating artificial intelligence or machine-learning functionality may need to comply with requirements under the EU AI Act (Regulation (EU) 2024/1689) in addition to applicable MDR or IVDR requirements.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The key issue is that AI-related obligations do not simply disappear because the software is already regulated as a medical device.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Manufacturers should assess:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Whether the product contains an AI system</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">The role of AI within the medical device</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Applicable AI risk classification</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Data governance requirements</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Technical documentation</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Transparency obligations</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Human oversight</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Accuracy, robustness, and cybersecurity considerations</span></li>
</ul>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">2. Radio Equipment Directive (RED) – For Wireless Medical Devices</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">When Does RED Apply to Medical Devices?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Medical devices containing wireless communication functionality may require assessment under the Radio Equipment Directive (2014/53/EU) in addition to applicable medical-device requirements.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Examples can include:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Bluetooth-enabled patient monitors</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Wi-Fi-connected medical devices</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Wireless wearable devices</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Connected diagnostic equipment</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Remote monitoring systems</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Manufacturers should evaluate requirements related to:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Radio spectrum</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Electromagnetic compatibility</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Electrical safety</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Wireless performance</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Cybersecurity-related requirements applicable to radio equipment</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">User information and labeling</span></li>
</ul>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Identify Hidden EU Regulatory Requirements Before Market Entry</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Get Your Medical Device Compliance Assessment.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Contact Us</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">3. GDPR – Data Protection for Connected Medical Devices</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Does GDPR Apply to Medical Devices?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">GDPR can apply when a medical device or its associated software processes personal data. Connected medical devices can collect significant amounts of information, including:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Patient identification information</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Health information</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Diagnostic results</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Physiological measurements</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Remote monitoring data</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Manufacturers and other organizations involved in processing this data should assess applicable GDPR obligations.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Key considerations may include:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Lawful processing</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Data minimization</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Data security</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Privacy by design and by default</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Data subject rights</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Data retention</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Data processing agreements</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Cross-border data transfers</span></li>
</ul>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">4. EU Batteries Regulation – For Battery-Powered Medical Devices</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">What Is the EU Batteries Regulation?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The EU Batteries Regulation (EU) 2023/1542 establishes requirements concerning battery sustainability, safety, labeling, marking, information, producer responsibility, and waste-battery management. It has applied since 18 February 2024, subject to specific provisions and implementation dates.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">This is particularly relevant to manufacturers whose products contain:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Rechargeable batteries</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Portable batteries</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Battery-powered accessories</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Connected medical equipment</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The regulation includes specific provisions relevant to professional medical imaging and radiotherapy equipment, including exceptions concerning battery removability and replaceability in certain circumstances.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Compliance Considerations</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Manufacturers should assess:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Battery type and chemistry</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Labeling requirements</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Safety requirements</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Sustainability obligations</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Producer responsibilities</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Battery removability or replaceability requirements where applicable</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Waste management obligations</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Battery compliance should therefore be considered during product design rather than treated as a final-stage documentation activity.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">5. RoHS and REACH – Chemical and Material Compliance</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Why Are RoHS and REACH Important?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Medical device manufacturers must also evaluate environmental and chemical requirements applicable to the materials and components used in their products.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">RoHS</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The Restriction of Hazardous Substances (RoHS) Directive 2011/65/EU restricts specified hazardous substances in electrical and electronic equipment. RoHS applies to medical devices and certain related equipment within its scope.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">REACH</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">REACH (Regulation (EC) No 1907/2006) addresses the registration, evaluation, authorization, and restriction of chemicals in the EU.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Manufacturers should therefore evaluate:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Plastics</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Metals</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Electronic components</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Cables</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Coatings</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Adhesives</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Batteries</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Other substances and materials</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Important Point</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Biocompatibility compliance does not automatically mean environmental or chemical compliance.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">6. WEEE – Electrical and Electronic Equipment Waste</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">What Is WEEE Compliance?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The Waste Electrical and Electronic Equipment (WEEE) Directive 2012/19/EU establishes requirements concerning the collection, treatment, recovery, and disposal of waste electrical and electronic equipment.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">For applicable medical electrical and electronic equipment, manufacturers should assess their responsibilities regarding:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Product marking</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Producer registration</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Collection systems</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Waste treatment</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Reporting</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">End-of-life management</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Certain products and applications may have specific exclusions or exemptions, so applicability should be assessed based on the product and intended use.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">MDR and IVDR vs Other EU Regulations: What Is the Difference?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Important: Applicability depends on the specific product, its intended purpose, technology, components, and market role. Manufacturers should not assume that every regulation listed above applies to every medical device.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">How Should Manufacturers Build a Medical Device Compliance Strategy?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">A comprehensive Medical Device Compliance strategy should begin during product development.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Step 1: Define the Intended Purpose</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Clearly document what the device is designed to do, who will use it, and the intended patient population.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Step 2: Determine MDR or IVDR Applicability</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Establish whether the product is a medical device, IVD, accessory, or another regulated product.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Step 3: Determine Device Classification</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Apply the relevant MDR or IVDR classification rules based on intended purpose and risk.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Step 4: Identify Additional EU Regulations</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Evaluate whether the device also falls within the scope of:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">EU AI Act</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">RED</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">GDPR</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Batteries Regulation</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">RoHS</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">REACH</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">WEEE</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Other applicable EU legislation</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Step 5: Perform a Regulatory Gap Assessment</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Map each applicable requirement against:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Product design</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Technical documentation</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Risk management</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Software</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Clinical evidence</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Labeling</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Manufacturing</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Supply chain</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Post-market activities</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Step 6: Maintain Regulatory Traceability</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Ensure that requirements, design controls, verification activities, risk controls, and technical documentation remain connected throughout the product lifecycle.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Common Medical Device Compliance Mistakes</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Manufacturers frequently encounter compliance problems because they:</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">1. Focus Only on MDR or IVDR</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">MDR and IVDR are fundamental, but they may not represent the complete regulatory landscape.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">2. Assess Regulations Too Late</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Additional requirements should be identified during product design, not immediately before market launch.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">3. Ignore Software and Connectivity</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Wireless functionality, cloud platforms, AI, and cybersecurity can introduce additional compliance considerations.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">4. Treat Materials Only as a Biocompatibility Issue</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Materials may also require assessment under RoHS, REACH, Batteries Regulation, or other environmental requirements.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">5. Separate Regulatory and Engineering Teams</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Regulatory requirements should be integrated with engineering, software, quality, clinical, and supply-chain activities.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Medical Device Compliance Checklist</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Before placing a device on the EU market, manufacturers should ask:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">Is MDR or IVDR applicable?</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Has the device been correctly classified?</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Is the intended purpose clearly defined?</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Is clinical or performance evidence adequate?</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Is the risk management process complete?</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Does the product contain AI?</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Does it have wireless functionality?</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Does it process personal data?</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">EUDAMED is now a particularly important part of the EU regulatory landscape, with mandatory use of certain modules beginning on 28 May 2026.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">How NKB Regovanta Supports Medical Device Compliance</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Navigating MDR and IVDR alongside other applicable EU regulations requires coordination across regulatory, quality, engineering, software, clinical, and manufacturing functions. NKB Regovanta supports medical device manufacturers with an integrated regulatory approach covering product development through market entry.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Our support includes:</p>

<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">
  <li className="leading-relaxed"><span className="text-navy font-medium">MDR and IVDR Compliance</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Additional Regulatory Assessment</span></li>
  <li className="leading-relaxed"><span className="text-navy font-medium">Quality and Technical Documentation</span></li>
</ul>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">By integrating regulatory requirements early, manufacturers can identify compliance gaps before they become costly redesigns, documentation deficiencies, or market-entry delays.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Is Your Medical Device Compliant Beyond MDR and IVDR?</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Talk to Our Medical Device Regulatory Experts Today.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Contact Us</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">FAQ&apos;s</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Is MDR and IVDR compliance enough for medical devices in the EU?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">No. MDR and IVDR provide the core medical device framework, but additional EU legislation may apply depending on the device&apos;s technology, connectivity, software, materials, batteries, and data processing activities.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">What regulations apply in addition to MDR and IVDR?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Depending on the product, manufacturers may need to consider the EU AI Act, Radio Equipment Directive (RED), GDPR, Batteries Regulation, RoHS, REACH, and WEEE.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Does the EU AI Act apply to AI-enabled medical devices?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Yes, certain AI-enabled medical devices and IVDs may be subject to the EU AI Act in addition to MDR or IVDR requirements. Applicability depends on the AI system and its intended use</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Does GDPR apply to connected medical devices?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">GDPR may apply when a medical device, software platform, or associated organization processes personal data, including patient or health information.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">When does the Radio Equipment Directive apply to medical devices?</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">RED may apply when a medical device incorporates radio or wireless communication functionality, such as Wi-Fi, Bluetooth, or other radio technologies.</p>

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
