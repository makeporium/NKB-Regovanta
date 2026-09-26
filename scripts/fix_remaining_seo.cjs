/**
 * FIX REMAINING SEO GAPS:
 * 1. ai-news.tsx
 * 2. regulatory-updates.tsx
 * 3. services.drug-device-combination-products.tsx
 * 4. services.regulatory-due-diligence.tsx
 * 5. services.mdsap.index.tsx
 * 6. 12 services.mdsap.*.tsx subpages
 */
const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');

// 1. ai-news.tsx
{
  const fp = path.join(routesDir, 'ai-news.tsx');
  let content = fs.readFileSync(fp, 'utf-8');
  const oldHeadRegex = /head:\s*\(\)\s*=>\s*\(\{[\s\S]*?\}\),/;
  const newHead = `head: () => ({
        meta: [
            {
                title: "Live Regulatory Intelligence Feed & AI News | NKB Regovanta",
            },
            {
                name: "description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                name: "keywords",
                content:
                    "regulatory intelligence, AI medical device regulatory news, FDA updates, CDSCO notifications, EU MDR IVDR alerts, MDSAP changes, regulatory news feed",
            },
            {
                property: "og:title",
                content: "Live Regulatory Intelligence Feed & AI News | NKB Regovanta",
            },
            {
                property: "og:description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                property: "og:url",
                content: "https://www.nkbregovanta.com/ai-news",
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:image",
                content: "https://www.nkbregovanta.com/og-image.png",
            },
            {
                name: "twitter:card",
                content: "summary_large_image",
            },
            {
                name: "twitter:title",
                content: "Live Regulatory Intelligence Feed & AI News | NKB Regovanta",
            },
            {
                name: "twitter:description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                name: "twitter:image",
                content: "https://www.nkbregovanta.com/og-image.png",
            },
        ],
        links: [
            {
                rel: "canonical",
                href: "https://www.nkbregovanta.com/ai-news",
            },
        ],
    }),`;
  content = content.replace(oldHeadRegex, newHead);
  fs.writeFileSync(fp, content, 'utf-8');
  console.log('Fixed ai-news.tsx');
}

// 2. regulatory-updates.tsx
{
  const fp = path.join(routesDir, 'regulatory-updates.tsx');
  let content = fs.readFileSync(fp, 'utf-8');
  const oldHeadRegex = /head:\s*\(\)\s*=>\s*\(\{[\s\S]*?\}\),/;
  const newHead = `head: () => ({
        meta: [
            {
                title: "Regulatory Updates & Intelligence Feed | NKB Regovanta",
            },
            {
                name: "description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                name: "keywords",
                content:
                    "medical device regulatory updates, FDA alerts, CDSCO notices, EU MDR news, IVDR transitions, MDSAP updates, global regulatory compliance feed",
            },
            {
                property: "og:title",
                content: "Regulatory Updates & Intelligence Feed | NKB Regovanta",
            },
            {
                property: "og:description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                property: "og:url",
                content: "https://www.nkbregovanta.com/regulatory-updates",
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:image",
                content: "https://www.nkbregovanta.com/og-image.png",
            },
            {
                name: "twitter:card",
                content: "summary_large_image",
            },
            {
                name: "twitter:title",
                content: "Regulatory Updates & Intelligence Feed | NKB Regovanta",
            },
            {
                name: "twitter:description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                name: "twitter:image",
                content: "https://www.nkbregovanta.com/og-image.png",
            },
        ],
        links: [
            {
                rel: "canonical",
                href: "https://www.nkbregovanta.com/regulatory-updates",
            },
        ],
    }),`;
  content = content.replace(oldHeadRegex, newHead);
  fs.writeFileSync(fp, content, 'utf-8');
  console.log('Fixed regulatory-updates.tsx');
}

// 3. services.drug-device-combination-products.tsx
{
  const fp = path.join(routesDir, 'services.drug-device-combination-products.tsx');
  let content = fs.readFileSync(fp, 'utf-8');
  if (!content.includes('twitter:card')) {
    const target = `{
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/drug-device-combination-products",
      },`;
    const replacement = `{
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/drug-device-combination-products",
      },
      {
        property: "og:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Drug-Device Combination Product Consulting | FDA, EU MDR & Article 117 | NKB Regovanta",
      },
      {
        name: "twitter:description",
        content:
          "Comprehensive regulatory strategy, design controls, risk management, and submission-ready technical documentation for drug-device combination products worldwide.",
      },
      {
        name: "twitter:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },`;
    content = content.replace(target, replacement);
    fs.writeFileSync(fp, content, 'utf-8');
    console.log('Fixed services.drug-device-combination-products.tsx');
  }
}

// 4. services.regulatory-due-diligence.tsx
{
  const fp = path.join(routesDir, 'services.regulatory-due-diligence.tsx');
  let content = fs.readFileSync(fp, 'utf-8');
  if (!content.includes('twitter:card')) {
    const target = `{
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/regulatory-due-diligence",
      },`;
    const replacement = `{
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/regulatory-due-diligence",
      },
      {
        property: "og:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Regulatory Due Diligence for Medical Devices & IVDs | NKB Regovanta",
      },
      {
        name: "twitter:description",
        content:
          "Uncover hidden regulatory risks, approval dependencies, and compliance liabilities before you acquire, invest, or partner. Decision-grade intelligence from NKB Regovanta.",
      },
      {
        name: "twitter:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },`;
    content = content.replace(target, replacement);
    fs.writeFileSync(fp, content, 'utf-8');
    console.log('Fixed services.regulatory-due-diligence.tsx');
  }
}

// 5. services.mdsap.index.tsx
{
  const fp = path.join(routesDir, 'services.mdsap.index.tsx');
  let content = fs.readFileSync(fp, 'utf-8');
  if (!content.includes('twitter:card')) {
    const target = `{
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/mdsap",
      },`;
    const replacement = `{
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/mdsap",
      },
      {
        property: "og:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "MDSAP Audit Readiness & Consulting | 5 Jurisdictions | NKB Regovanta",
      },
      {
        name: "twitter:description",
        content:
          "Prepared for 5 Jurisdictions. Trusted for Quality. One single QMS audit across US, Canada, Brazil, Japan, and Australia.",
      },
      {
        name: "twitter:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },`;
    content = content.replace(target, replacement);
    fs.writeFileSync(fp, content, 'utf-8');
    console.log('Fixed services.mdsap.index.tsx');
  }
}

// 6. The 12 services.mdsap.*.tsx subpages
const mdsapSubpages = [
  {
    file: 'services.mdsap.audit-documentation.tsx',
    slug: 'services/mdsap/audit-documentation',
    title: 'Audit Documentation & Objective Evidence Preparation | MDSAP | NKB Regovanta',
    desc: 'Review and strengthen SOPs, records, forms, and objective evidence packages across all 7 MDSAP process areas.',
    ogTitle: 'Audit Documentation & Objective Evidence Preparation | NKB Regovanta',
    ogDesc: 'MDSAP auditors follow audit trails, not static documents. We audit-harden your records and cross-process evidence trails.',
    keywords: 'MDSAP audit documentation, objective evidence QMS, MDSAP SOP review, medical device audit evidence, Auditing Organization document checklist'
  },
  {
    file: 'services.mdsap.capa-remediation.tsx',
    slug: 'services/mdsap/capa-remediation',
    title: 'Nonconformity, CAPA & Remediation Support | MDSAP | NKB Regovanta',
    desc: 'Root cause analysis, effective systemic CAPA, trend prevention, and remediation packages for recognized Auditing Organizations.',
    ogTitle: 'Nonconformity, CAPA & Remediation Support | NKB Regovanta',
    ogDesc: 'Audit findings are manageable; recurring nonconformities are dangerous. Robust root-cause investigation and CAPA closure.',
    keywords: 'MDSAP CAPA remediation, nonconformity closure MDSAP, grade 4 nonconformity, root cause analysis medical devices, Auditing Organization CAPA response'
  },
  {
    file: 'services.mdsap.complaint-vigilance.tsx',
    slug: 'services/mdsap/complaint-vigilance',
    title: 'Complaint, Vigilance & Post-Market Readiness | MDSAP | NKB Regovanta',
    desc: 'Build systems for complaint handling, adverse-event reporting across 5 jurisdictions, trend analysis, and FSCA advisory notices.',
    ogTitle: 'Complaint, Vigilance & Post-Market Readiness | NKB Regovanta',
    ogDesc: 'One complaint file, five jurisdictions to report to. Harmonized post-market surveillance with jurisdiction-specific reporting rules.',
    keywords: 'MDSAP complaint handling, post-market vigilance MDSAP, adverse event reporting 5 jurisdictions, medical device FSCA, field safety corrective action'
  },
  {
    file: 'services.mdsap.design-controls.tsx',
    slug: 'services/mdsap/design-controls',
    title: 'Design & Development Control Readiness | MDSAP | NKB Regovanta',
    desc: 'Ensure design controls, user needs, V&V, transfer, software lifecycles, and Design History Files (DHF) are audit-ready and evidence-backed.',
    ogTitle: 'Design & Development Control Readiness | NKB Regovanta',
    ogDesc: 'Design controls are often where the deepest nonconformities arise. Build defensible DHF, V&V, and design transfer records.',
    keywords: 'MDSAP design controls, Design History File DHF audit, medical device V&V evidence, design change control MDSAP, IEC 62304 software lifecycle'
  },
  {
    file: 'services.mdsap.gap-assessment.tsx',
    slug: 'services/mdsap/gap-assessment',
    title: 'MDSAP QMS Gap Assessment | Audit Exposure Modeling | NKB Regovanta',
    desc: 'Detailed gap assessment against ISO 13485:2016 and MDSAP specific requirements across the 7 core process areas.',
    ogTitle: 'MDSAP QMS Gap Assessment | NKB Regovanta',
    ogDesc: 'A gap assessment should predict audit exposure, not produce a 200-line checklist. Full process interaction and systemic weakness evaluation.',
    keywords: 'MDSAP gap assessment, ISO 13485 MDSAP gap analysis, 7 MDSAP process areas, audit exposure modeling, QMS compliance audit'
  },
  {
    file: 'services.mdsap.jurisdiction-readiness.tsx',
    slug: 'services/mdsap/jurisdiction-readiness',
    title: 'Jurisdiction-Specific Regulatory Readiness | 5 MDSAP Countries | NKB Regovanta',
    desc: 'Address country-specific regulatory overlays for Australia (TGA), Brazil (ANVISA), Canada (Health Canada), Japan (MHLW/PMDA), and the USA (FDA).',
    ogTitle: 'Jurisdiction-Specific Regulatory Readiness | NKB Regovanta',
    ogDesc: 'One audit model with five regulatory overlays. Build jurisdiction-to-process maps and embed country-specific triggers into your QMS.',
    keywords: 'MDSAP country specific requirements, FDA TGA ANVISA Health Canada PMDA, 5 jurisdictions MDSAP readiness, regulatory overlays QMS'
  },
  {
    file: 'services.mdsap.mock-audits.tsx',
    slug: 'services/mdsap/mock-audits',
    title: 'Mock MDSAP Audits & Interview Preparation | NKB Regovanta',
    desc: 'Full-system and targeted mock MDSAP audits, opening/closing meetings, record retrieval drills, and process-owner interview coaching.',
    ogTitle: 'Mock MDSAP Audits & Interview Preparation | NKB Regovanta',
    ogDesc: 'A mock audit should create productive pressure before the real auditor does. Realistic cross-process simulations and evidence challenges.',
    keywords: 'MDSAP mock audit, simulated Auditing Organization audit, audit interview coaching medical devices, record retrieval drill MDSAP'
  },
  {
    file: 'services.mdsap.post-certification.tsx',
    slug: 'services/mdsap/post-certification',
    title: 'Audit Response & Post-Certification Support | MDSAP | NKB Regovanta',
    desc: 'Support during audit, management of findings, response packages, surveillance audit readiness, and continuous MDSAP QMS maintenance.',
    ogTitle: 'Audit Response & Post-Certification Support | NKB Regovanta',
    ogDesc: 'MDSAP readiness continues after the closing meeting. Surveillance audits, scope modifications, and ongoing 5-jurisdiction compliance support.',
    keywords: 'MDSAP post certification support, surveillance audit readiness, audit response package, continuous MDSAP compliance, scope modification'
  },
  {
    file: 'services.mdsap.process-readiness.tsx',
    slug: 'services/mdsap/process-readiness',
    title: 'MDSAP Process-Based Audit Readiness | Trace Simulations | NKB Regovanta',
    desc: 'Prepare for MDSAP audits the way auditors follow evidence: cross-process linkages across the 7 MDSAP process areas, record retrieval, and process-owner interview drills.',
    ogTitle: 'MDSAP Process-Based Audit Readiness | NKB Regovanta',
    ogDesc: 'Prepare the way an auditor follows evidence. Cross-functional audit trail simulations and process-owner readiness drills.',
    keywords: 'MDSAP process audit readiness, audit trail simulation, cross process linkages, 7 process areas MDSAP, process owner interview drills'
  },
  {
    file: 'services.mdsap.production-supplier-validation.tsx',
    slug: 'services/mdsap/production-supplier-validation',
    title: 'Production, Supplier & Process Validation Readiness | MDSAP | NKB Regovanta',
    desc: 'Strengthen manufacturing controls, critical supplier governance, cleanliness, sterilization, and process validation evidence for MDSAP audits.',
    ogTitle: 'Production, Supplier & Process Validation Readiness | NKB Regovanta',
    ogDesc: 'The audit moves quickly from procedure to shop floor and supplier records. Rigorous production control, validation, and tier-1 supplier readiness.',
    keywords: 'MDSAP production controls, supplier evaluation medical devices, process validation IQ OQ PQ, cleanliness sterilization audit'
  },
  {
    file: 'services.mdsap.qms-alignment.tsx',
    slug: 'services/mdsap/qms-alignment',
    title: 'ISO 13485 to MDSAP QMS Alignment | Global System Design | NKB Regovanta',
    desc: 'Align your ISO 13485 Quality Management System to MDSAP requirements without creating 5 disconnected QMS variants. Embedded decision trees and local triggers.',
    ogTitle: 'ISO 13485 to MDSAP QMS Alignment | NKB Regovanta',
    ogDesc: 'ISO 13485 is the foundation; MDSAP tests the regulatory system built on top of it. One unified quality management system with country-specific logic.',
    keywords: 'ISO 13485 MDSAP alignment, unified quality management system, global QMS design, regulatory triggers ISO 13485'
  },
  {
    file: 'services.mdsap.strategy-scope.tsx',
    slug: 'services/mdsap/strategy-scope',
    title: 'MDSAP Regulatory Strategy & Scope Assessment | NKB Regovanta',
    desc: 'Define audit scope, legal manufacturer boundaries, facility mapping, product categories, and regulatory expectations across the 5 MDSAP jurisdictions.',
    ogTitle: 'MDSAP Regulatory Strategy & Scope Assessment | NKB Regovanta',
    ogDesc: 'Start with scope before rewriting procedures. Comprehensive MDSAP audit universe mapping and legal manufacturer boundary determination.',
    keywords: 'MDSAP audit scope assessment, legal manufacturer boundary, facility mapping MDSAP, product category classification'
  }
];

mdsapSubpages.forEach(sub => {
  const fp = path.join(routesDir, sub.file);
  let content = fs.readFileSync(fp, 'utf-8');
  
  const oldHeadRegex = /head:\s*\(\)\s*=>\s*\(\{[\s\S]*?\}\),/;
  const newHead = `head: () => ({
    meta: [
      { title: "${sub.title}" },
      { name: "description", content: "${sub.desc}" },
      { name: "keywords", content: "${sub.keywords}" },
      { property: "og:title", content: "${sub.ogTitle}" },
      { property: "og:description", content: "${sub.ogDesc}" },
      { property: "og:url", content: "https://www.nkbregovanta.com/${sub.slug}" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "${sub.title}" },
      { name: "twitter:description", content: "${sub.desc}" },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/${sub.slug}" },
    ],
  }),`;
  
  content = content.replace(oldHeadRegex, newHead);
  fs.writeFileSync(fp, content, 'utf-8');
  console.log('Fixed ' + sub.file);
});

console.log('All 17 files updated successfully!');
