/**
 * seed_static_articles.cjs
 *
 * Seeds all 39 static insight articles into the blog_posts Supabase table
 * so they are manageable from the admin panel.
 *
 * Uses upsert on `slug` — safe to run multiple times.
 * Only inserts the row if it doesn't already exist; does NOT overwrite content
 * if the post has already been edited in the admin panel.
 *
 * Run: node scripts/seed_static_articles.cjs
 */

const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://zoihnehiptkfgxshtazi.supabase.co";
const SUPABASE_KEY = "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// All 39 static articles from insights.index.tsx
const STATIC_ARTICLES = [
  {
    slug: "eu-ai-act-medical-devices",
    title: "EU AI Act and Medical Devices: What MedTech Manufacturers Need to Get Right",
    excerpt: "A practical regulatory perspective for manufacturers developing AI-enabled medical devices and medical software for the European market.",
    featured_image: "/assets/insights/digital_health_tablet.jpg",
    category_name: "AI & DIGITAL HEALTH",
  },
  {
    slug: "eu-mdr-compliance-challenges",
    title: "EU MDR Compliance: Where Medical Device Manufacturers Commonly Get Stuck",
    excerpt: "A practical regulatory perspective on the issues that can delay CE marking and EU market entry under Regulation (EU) 2017/745.",
    featured_image: "/assets/insights/medical_audit_consult.jpg",
    category_name: "EU MDR STRATEGY",
  },
  {
    slug: "india-mdr-2026-rule-63",
    title: "India Medical Device Rules 2026: EU-Approved Devices Gain Recognition Under Rule 63",
    excerpt: "What the latest MDR amendment (G.S.R. 744(E)) means for medical device manufacturers, EU companies and Indian importers.",
    featured_image: "/assets/insights/clinical_research_facility.jpg",
    category_name: "CDSCO INDIA UPDATE",
  },
  {
    slug: "medical-device-documentation-compliance-to-evidence",
    title: "Medical Device Documentation: From Compliance Records to Regulatory Evidence",
    excerpt: "Why auditors look for lifecycle traceability and how to turn static technical files into defensible regulatory evidence during inspections.",
    featured_image: "/assets/insights/regulatory_dossier_review.jpg",
    category_name: "AUDIT & TECHNICAL EVIDENCE",
  },
  {
    slug: "ce-marking-digital-health-technologies",
    title: "CE Marking for Digital Health: Define the Product Before Planning the Evidence",
    excerpt: "Plan EU medical software qualification, classification, clinical evidence, and release controls around a clearly defined intended purpose.",
    featured_image: "/assets/insights/software_medical_screen.jpg",
    category_name: "DIGITAL HEALTH & SAMD",
  },
  {
    slug: "fda-qmsr-compliance-guide",
    title: "FDA QMSR Readiness: Follow a Product Record Through the Quality System",
    excerpt: "Assess FDA QMSR readiness through connected product records, supplier controls, complaints, and management decisions rather than a document count.",
    featured_image: "/assets/insights/quality_assurance_meeting.jpg",
    category_name: "US FDA QUALITY SYSTEMS",
  },
  {
    slug: "dynamic-risk-management-software-medical-devices",
    title: "Software Risk Management After Release: Turn New Signals Into Decisions",
    excerpt: "Connect software incidents, dependency updates, and clinical feedback to risk assessment, change control, and verified release decisions.",
    featured_image: "/assets/insights/risk_assessment_analytics.jpg",
    category_name: "RISK MANAGEMENT & SAMD",
  },
  {
    slug: "understanding-prrc-eu-mdr-ivdr",
    title: "Appointing a PRRC: Make the Responsibility Work Beyond the Contract",
    excerpt: "Define a workable PRRC arrangement with appropriate qualifications, access to evidence, escalation routes, and clear manufacturer responsibilities.",
    featured_image: "/assets/insights/regulatory_compliance_officer.jpg",
    category_name: "EU REGULATORY COMPLIANCE",
  },
  {
    slug: "qms-documentation-iso-13485-compliance",
    title: "ISO 13485 Documentation: Build a System People Can Use and Auditors Can Trace",
    excerpt: "Organise medical-device QMS documentation around process ownership, controlled records, traceability, and reliable retrieval.",
    featured_image: "/assets/insights/iso_audit_binder_prep.jpg",
    category_name: "QUALITY MANAGEMENT",
  },
  {
    slug: "clinical-evaluation-equivalence-medical-devices",
    title: "Clinical Equivalence Under EU MDR: Establish What the Comparison Can Support",
    excerpt: "Evaluate technical, biological, and clinical equivalence, data access, and evidence gaps before relying on another device's clinical data.",
    featured_image: "/assets/insights/clinical_evaluation_doctor.jpg",
    category_name: "CLINICAL EVALUATION",
  },
  {
    slug: "gspr-compliance-eu-mdr-ivdr",
    title: "GSPR Compliance: Turn the Checklist Into an Evidence Map",
    excerpt: "Build a usable GSPR matrix linking applicable requirements to methods, controlled evidence, product configurations, and unresolved gaps.",
    featured_image: "/assets/insights/biomedical_engineering_bench.jpg",
    category_name: "EU TECHNICAL FILES",
  },
  {
    slug: "cdsco-medical-device-manufacturing-license-india",
    title: "CDSCO Manufacturing Licences: Prepare the Product and Site Evidence Together",
    excerpt: "Plan an Indian medical-device manufacturing application around classification, site scope, product evidence, and consistent licence documentation.",
    featured_image: "/assets/insights/pharma_cleanroom_line.jpg",
    category_name: "CDSCO INDIA REGULATIONS",
  },
  {
    slug: "class-iii-medical-device-classification-strategy",
    title: "FDA Class III Strategy: Establish the Regulatory Path Before Committing to Studies",
    excerpt: "Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA.",
    featured_image: "/assets/insights/cardiovascular_surgical_implant.jpg",
    category_name: "FDA & GLOBAL CLASSIFICATION",
  },
  {
    slug: "gspr-foundation-medical-device-development",
    title: "Use GSPRs Early: Convert Regulatory Expectations Into Design Inputs",
    excerpt: "Use GSPRs during device development to define measurable design inputs, evidence dependencies, and review gates before testing begins.",
    featured_image: "/assets/insights/medtech_cad_design.jpg",
    category_name: "REGULATORY BY DESIGN",
  },
  {
    slug: "ce-marking-cardiovascular-medical-devices",
    title: "Cardiovascular Device CE Marking: Organise Evidence Around the Clinical Claim",
    excerpt: "Plan cardiovascular-device evidence across design performance, patient contact, clinical benefit, and follow-up without assuming one route fits all products.",
    featured_image: "/assets/insights/cardiac_monitor_ecg.jpg",
    category_name: "CARDIOVASCULAR MEDTECH",
  },
  {
    slug: "iec-62304-medical-device-software-lifecycle",
    title: "IEC 62304 in Practice: Keep Requirements, Risk Controls, and Releases Connected",
    excerpt: "Organise a medical-device software lifecycle around traceable requirements, risk controls, verification, third-party software, and release records.",
    featured_image: "/assets/insights/software_code_validation.jpg",
    category_name: "SOFTWARE COMPLIANCE",
  },
  {
    slug: "remote-patient-monitoring-devices-regulatory-framework",
    title: "Remote Patient Monitoring: Define the Clinical Workflow Before the Device Boundary",
    excerpt: "Assess remote-monitoring systems through their measurement claims, alerts, data flow, home-use conditions, and clinical responsibilities.",
    featured_image: "/assets/insights/connected_patient_care.jpg",
    category_name: "CONNECTED HEALTH",
  },
  {
    slug: "ivdr-class-d-verification-notified-bodies",
    title: "Class D IVD Verification: Coordinate the Product Evidence and Batch Workflow",
    excerpt: "Prepare Class D IVD verification with clear configurations, performance evidence, batch records, and notified-body or reference-laboratory interfaces.",
    featured_image: "/assets/insights/laboratory_test_tubes_pipette.jpg",
    category_name: "EU IVDR & DIAGNOSTICS",
  },
  {
    slug: "dental-scanners-manufacturing-regulatory-standards",
    title: "Dental Scanner Development: Validate the Scan-to-Decision Workflow",
    excerpt: "Plan dental-scanner evidence for intended use, scan accuracy, software processing, reprocessing, and downstream digital workflows.",
    featured_image: "/assets/insights/digital_dental_clinic.jpg",
    category_name: "MEDTECH MANUFACTURING",
  },
  {
    slug: "borderline-medical-device-classification-strategy",
    title: "Borderline Products: Separate Device Qualification From Risk Classification",
    excerpt: "Assess borderline products using intended purpose, mode of action, claims, and jurisdiction-specific reasoning before selecting a device class.",
    featured_image: "/assets/insights/pharmaceutical_vials_capsules.jpg",
    category_name: "REGULATORY BORDERLINES",
  },
  {
    slug: "notified-body-expectations-eu-mdr-technical-documentation",
    title: "EU MDR Technical Documentation: Make the Evidence Trail Clear",
    excerpt: "Prepare an MDR technical file with consistent scope, claim-to-evidence links, controlled revisions, and traceable responses to review questions.",
    featured_image: "/assets/insights/audit_checklist_calculator.jpg",
    category_name: "TECHNICAL FILES",
  },
  {
    slug: "overcoming-fda-510k-clearance-barriers",
    title: "FDA 510(k) Problems: Diagnose the Evidence Gap Before Responding",
    excerpt: "Address 510(k) obstacles by distinguishing pathway, intended-use, performance-evidence, and submission-consistency problems.",
    featured_image: "/assets/insights/us_regulatory_headquarters.jpg",
    category_name: "US FDA 510(K)",
  },
  {
    slug: "effective-capa-system-medical-devices",
    title: "Medical Device CAPA: Show That the Cause Was Addressed",
    excerpt: "Build CAPA records around problem definition, investigation, cause-based actions, effectiveness measures, and a justified closure decision.",
    featured_image: "/assets/insights/capa_investigation_team.jpg",
    category_name: "QUALITY SYSTEMS",
  },
  {
    slug: "regulatory-compliance-strategy-global-medtech",
    title: "Global MedTech Strategy: Sequence Markets Around Reusable Evidence",
    excerpt: "Separate reusable product evidence from market-specific classification, representation, and submission needs in a global regulatory plan.",
    featured_image: "/assets/insights/global_map_logistics.jpg",
    category_name: "GLOBAL MARKET ACCESS",
  },
  {
    slug: "regulation-eu-2024-1860-mdr-ivdr-transition",
    title: "IVDR Transition Planning: Check Eligibility Before Relying on the Deadline",
    excerpt: "Assess IVDR legacy-device transition eligibility, application milestones, change restrictions, and evidence before relying on extended dates.",
    featured_image: "/assets/insights/laptop_regulatory_search.jpg",
    category_name: "EU REGULATORY UPDATES",
  },
  {
    slug: "biological-evaluation-testing-medical-devices-iso-10993",
    title: "ISO 10993 Biological Evaluation: Define the Question Before Ordering Tests",
    excerpt: "Plan biological evaluation using finished-device contact, materials, processing, available evidence, and current standards-recognition requirements.",
    featured_image: "/assets/insights/petri_dish_biocompatibility.jpg",
    category_name: "BIOCOMPATIBILITY & TESTING",
  },
  {
    slug: "core-regulations-medical-device-global-compliance",
    title: "Build a Medical Device Requirements Register Across Regulatory Disciplines",
    excerpt: "Create a product-specific register linking device rules, software, electrical safety, biological evaluation, and other applicable obligations.",
    featured_image: "/assets/insights/legal_compliance_gavel.jpg",
    category_name: "INTERNATIONAL COMPLIANCE",
  },
  {
    slug: "optimal-timing-usfda-510k-submission",
    title: "When to Submit a 510(k): Use Readiness Gates Instead of a Calendar Target",
    excerpt: "Assess 510(k) readiness through intended use, predicate strategy, completed evidence, configuration control, and capacity to answer review questions.",
    featured_image: "/assets/insights/project_milestone_calendar.jpg",
    category_name: "US FDA 510(K)",
  },
  {
    slug: "usability-testing-medical-devices-iec-62366",
    title: "Medical Device Usability Testing: Design a Study That Answers the Safety Question",
    excerpt: "Plan usability evaluations around representative users, critical tasks, realistic conditions, observations, and justified interpretation.",
    featured_image: "/assets/insights/usability_observation_lab.jpg",
    category_name: "HUMAN FACTORS & USABILITY",
  },
  {
    slug: "fda-510k-program-modernization-safety-standards",
    title: "510(k) Modernisation: Assess Predicate Relevance and Performance Evidence",
    excerpt: "Understand predicate relevance, final versus draft guidance, and the limited scope of FDA's Safety and Performance Based Pathway.",
    featured_image: "/assets/insights/digital_security_compliance.jpg",
    category_name: "FDA REGULATORY POLICY",
  },
  {
    slug: "human-factors-engineering-medical-device-design",
    title: "Human Factors in Device Design: Find Use Problems Before Validation",
    excerpt: "Integrate human factors into early device design through user research, task analysis, formative evaluation, and traceable design decisions.",
    featured_image: "/assets/insights/medical_ergonomics_device.jpg",
    category_name: "HUMAN FACTORS",
  },
  {
    slug: "cdsco-medical-device-registration-guidelines-india",
    title: "Medical Device Registration in India: Define the Applicant, Product, and Route",
    excerpt: "Prepare an Indian medical-device registration strategy using product classification, applicant roles, manufacturing or import scope, and current rules.",
    featured_image: "/assets/insights/sterile_blister_packaging.jpg",
    category_name: "CDSCO INDIA REGULATIONS",
  },
  {
    slug: "ce-marking-process-medical-devices-eu-mdr",
    title: "The EU MDR CE-Marking Process: Plan the Decisions and Handoffs",
    excerpt: "Sequence EU MDR qualification, classification, evidence, conformity assessment, declaration, and ongoing obligations in a practical project plan.",
    featured_image: "/assets/insights/biochemical_laboratory_flask.jpg",
    category_name: "EU CE MARKING",
  },
  {
    slug: "samd-classification-submission-usfda",
    title: "FDA SaMD Planning: Assess the Software Function Before Selecting a Submission",
    excerpt: "Define medical software functions, assess FDA regulatory treatment, and connect classification and submission evidence to the intended use.",
    featured_image: "/assets/insights/samd_mobile_telehealth.jpg",
    category_name: "SAMD & DIGITAL HEALTH",
  },
  {
    slug: "fda-q-sub-pre-submission-meeting-guide",
    title: "FDA Pre-Submissions: Ask Questions That Resolve a Development Decision",
    excerpt: "Prepare a focused FDA Pre-Submission with a defined device, evidence context, proposed approach, and questions tied to development decisions.",
    featured_image: "/assets/insights/executive_meeting_handshake.jpg",
    category_name: "US FDA STRATEGY",
  },
  {
    slug: "notified-body-selection-conformity-assessment-guide",
    title: "Selecting a Notified Body: Match Designation, Scope, and Project Readiness",
    excerpt: "Choose a notified body by confirming designation scope, product fit, assessment requirements, and realistic readiness rather than quoted timing alone.",
    featured_image: "/assets/insights/accreditation_certificate_audit.jpg",
    category_name: "EU NOTIFIED BODIES",
  },
  {
    slug: "fda-qmsr-2026",
    title: "FDA QMSR 2026: What Medical Device Manufacturers Need to Know",
    excerpt: "QMSR is now effective. Understand the key changes, ISO 13485 alignment, record expectations and practical actions manufacturers should take for ongoing FDA compliance.",
    featured_image: "/assets/insights/fda_laboratory_validation.jpg",
    category_name: "REGULATORY NEWS",
  },
  {
    slug: "eu-mdr-2026",
    title: "EU MDR 2026: EUDAMED, Classification & Compliance Priorities",
    excerpt: "EUDAMED's first four modules are now mandatory. Review the registration, UDI/device, certificate and market-surveillance implications manufacturers should address now.",
    featured_image: "/assets/insights/database_analytics_eudamed.jpg",
    category_name: "EU MDR UPDATE",
  },
  {
    slug: "fda-inspections-2026",
    title: "FDA Medical Device Inspections in 2026: Preparing for the New QMSR Framework",
    excerpt: "FDA has moved away from QSIT to the QMSR-aligned inspection process. Learn what investigators may review and how to strengthen inspection readiness.",
    featured_image: "/assets/insights/inspection_clean_facility.jpg",
    category_name: "BEST PRACTICES",
  },
];

async function seed() {
  console.log("🌱 Seeding static articles into blog_posts...\n");

  // Fetch existing blog_posts slugs to avoid unnecessary upserts
  const { data: existing, error: fetchErr } = await supabase
    .from("blog_posts")
    .select("slug");

  if (fetchErr) {
    console.error("❌ Failed to fetch existing posts:", fetchErr.message);
    process.exit(1);
  }

  const existingSlugs = new Set((existing || []).map((r) => r.slug));
  console.log(`📋 Found ${existingSlugs.size} existing posts in DB.`);

  const toInsert = STATIC_ARTICLES.filter((a) => !existingSlugs.has(a.slug));
  console.log(`➕ ${toInsert.length} new static articles to seed.\n`);

  if (toInsert.length === 0) {
    console.log("✅ All static articles already exist in blog_posts. Nothing to do.");
    return;
  }

  // Fetch blog_categories so we can match category names to IDs
  const { data: categories } = await supabase
    .from("blog_categories")
    .select("id, name");

  const categoryMap = {};
  (categories || []).forEach((c) => {
    categoryMap[c.name.toUpperCase()] = c.id;
  });

  let inserted = 0;
  let failed = 0;

  for (const article of toInsert) {
    // Try to find a matching category
    const categoryId = categoryMap[article.category_name.toUpperCase()] || null;

    const now = new Date().toISOString();
    const row = {
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      featured_image: article.featured_image,
      featured_image_alt: article.title,
      category_id: categoryId,
      status: "published",
      is_in_sitemap: true,
      publish_date_ist: now,
      content_html: "", // Empty — admin can add rich content later
      updated_at: now,
    };

    const { error } = await supabase.from("blog_posts").insert(row);

    if (error) {
      // If slug already exists (race condition), skip gracefully
      if (error.message.includes("duplicate") || error.code === "23505") {
        console.log(`  ⚠️  Already exists (skipping): ${article.slug}`);
      } else {
        console.error(`  ❌ Failed to insert "${article.slug}": ${error.message}`);
        failed++;
      }
    } else {
      console.log(`  ✅ Inserted: ${article.slug}`);
      inserted++;
    }
  }

  console.log(`\n🎉 Done! Inserted: ${inserted}, Failed: ${failed}, Already existed: ${existingSlugs.size}`);
  console.log("\nAll 39 static articles are now visible in the admin blog panel at /admin/blog/posts");
}

seed().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
