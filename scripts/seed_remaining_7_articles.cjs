/**
 * seed_remaining_7_articles.cjs
 *
 * Populates the content_html for the 7 static articles that currently have empty bodies:
 * 1. india-mdr-2026-rule-63
 * 2. eu-ai-act-medical-devices
 * 3. eu-mdr-2026
 * 4. eu-mdr-compliance-challenges
 * 5. fda-inspections-2026
 * 6. fda-qmsr-2026
 * 7. medical-device-documentation-compliance-to-evidence
 */

const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://zoihnehiptkfgxshtazi.supabase.co";
const SUPABASE_KEY = "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const ARTICLES_CONTENT = {
  "india-mdr-2026-rule-63": `
<p class="lead">India's medical device regulatory framework has taken another important step towards greater recognition of international regulatory evidence.</p>
<p>The Ministry of Health and Family Welfare has notified the <strong>Medical Devices (Third Amendment) Rules, 2026 through G.S.R. 744(E), dated 14 August 2026</strong>, amending key provisions of the Medical Devices Rules, 2017.</p>
<p>Of particular interest to the global MedTech industry is the inclusion of <strong>European Union countries under Rule 63(1), proviso (iv)</strong>. The amendment also introduces an explicit reference to Quality Management System (QMS) requirements in the provisions applicable to Class A non-sterile and non-measuring medical devices.</p>
<div style="background-color: #eff6ff; border-left: 4px solid #0b3a96; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0;">
  <p style="font-weight: bold; margin-bottom: 0.5rem; color: #1e3a8a;">Opportunity, Not a Blanket Exemption:</p>
  <p style="margin: 0; color: #1e3a8a;">Importantly, the amendment should not be interpreted as an automatic exemption from Indian regulatory filings. The applicability remains strictly dependent on the product classification, its European regulatory status, available technical/clinical evidence, and evaluation by the Central Licensing Authority (CDSCO).</p>
</div>
<h2>EU Countries Added to Rule 63</h2>
<p>One of the most significant changes introduced through the 2026 amendment is the addition of European Union countries to Rule 63(1), proviso (iv).</p>
<p>Rule 63 governs clinical investigation requirements for medical devices seeking approval in India, particularly novel products or devices for which a predicate device is not available in India. The amended provision now formally recognises EU regulatory approvals alongside the jurisdictions already specified under the rule (such as the US, UK, Australia, Canada, and Japan).</p>
<p>For an EU manufacturer planning to enter India, this creates an opportunity to examine whether its existing European regulatory approval (CE mark under MDR/IVDR) and supporting clinical data can be leveraged to waive local clinical trials in India.</p>
<p>However, there is an important distinction between recognition of a foreign regulatory approval for the purposes of a statutory provision and automatic acceptance by CDSCO. An EU approval does not, by itself, bypass all Indian licensing requirements. The pathway must still be assessed on a device-by-device basis.</p>
<h2>What Should Manufacturers Assess?</h2>
<p>Manufacturers seeking to leverage the amended Rule 63 provision should first undertake a regulatory assessment of their existing technical and clinical documentation:</p>
<ul>
  <li><strong>Indian Medical Device Classification:</strong> Aligning intended use with CDSCO risk classes (Class A, B, C, or D).</li>
  <li><strong>Predicate Device Status:</strong> Analyzing whether an approved predicate already exists in the Indian market.</li>
  <li><strong>EU Regulatory Approval Status:</strong> Verifying validity under EU MDR 2017/745 or IVDR 2017/746.</li>
  <li><strong>Clinical Evidence Dossier:</strong> Reviewing clinical evaluation reports (CER), safety data, and performance testing for Indian clinical relevance.</li>
  <li><strong>Risk Management &amp; PMS:</strong> Ensuring ISO 14971 files, vigilance records, and post-market surveillance data are comprehensive.</li>
  <li><strong>Manufacturing Site &amp; QMS:</strong> Reconciling Plant Master Files (PMF) and ISO 13485 audit reports.</li>
  <li><strong>Proposed Indian Indications:</strong> Ensuring the intended patient population matches the overseas authorization.</li>
</ul>
<h2>QMS Requirements for Class A Devices</h2>
<p>The second important change concerns Class A non-sterile and non-measuring medical devices. The amendment adds <strong>“and Quality Management System”</strong> to the relevant provisions under Rules 19H and 19J.</p>
<p>Although Class A devices are considered low-risk and undergo simplified registration via GSR 777(E), manufacturers must not assume that compliance can be addressed solely through self-declaration. A manufacturer's quality system must demonstrate verified control over:</p>
<ul>
  <li>Manufacturing and assembly processes</li>
  <li>Supplier qualification and material traceability</li>
  <li>Complaint handling and customer feedback</li>
  <li>Non-conformity management and CAPA</li>
  <li>Change control protocols and technical file maintenance</li>
</ul>
<p>Manufacturers operating an established ISO 13485 quality system may already meet many of these standards, but a targeted gap assessment is advised to confirm alignment with CDSCO inspection expectations.</p>
<h2>Government Medical Device Testing Laboratories</h2>
<p>The amendment also updates the marginal heading of Rule 19 to <em>“Government Medical Device Testing laboratories.”</em></p>
<p>While primarily an administrative clarification, testing remains a critical milestone in Indian regulatory filings. A common and costly mistake in regulatory planning is commissioning laboratory testing before establishing the precise regulatory pathway and standards. A well-planned testing strategy should directly substantiate the final CDSCO submission dossier rather than creating generic reports that later prove insufficient.</p>
<h2>What Does This Mean for European Manufacturers?</h2>
<p>For European MedTech companies, this amendment provides a compelling reason to accelerate India market-entry plans. A manufacturer with an established clinical and commercial track record in the European Union possesses substantial data that can streamline CDSCO licensing.</p>
<p>The first step is determining: <em>What is the Indian regulatory pathway for this device, what does Rule 63 permit in this particular case, and how effectively can existing EU clinical evidence support an exemption from domestic trials?</em></p>
<h2>How NKB Regovanta Can Help</h2>
<p>NKB Regovanta provides end-to-end regulatory, clinical, testing, quality and market-access consulting across India and international jurisdictions:</p>
<ul>
  <li><strong>CDSCO Medical Device Registration &amp; Licensing:</strong> Classification, regulatory pathway assessment, and preparation of MD-14/15 import licences and MD-3 to MD-9 manufacturing licences.</li>
  <li><strong>Clinical Strategy &amp; Rule 63 Assessment:</strong> Comprehensive review of EU clinical trial data and CE documentation to evaluate Rule 63 clinical investigation waiver eligibility.</li>
  <li><strong>Authorized Indian Representative (AIR / IAA):</strong> Full statutory representation for foreign manufacturers on the SUGAM portal.</li>
  <li><strong>Quality Management Systems &amp; ISO 13485:</strong> QMS audit readiness, documentation alignment, and Class A self-certification compliance.</li>
  <li><strong>Regulatory Due Diligence &amp; Gap Assessment:</strong> Technical file and Plant Master File (PMF) audits before CDSCO submission.</li>
</ul>
`,

  "eu-ai-act-medical-devices": `
<p class="lead">Artificial intelligence is becoming part of everyday medical technology. AI is now being used in diagnostic imaging, clinical decision support, patient monitoring, digital therapeutics, laboratory applications and a growing range of software-based medical devices.</p>
<p>For manufacturers, however, adding AI to a medical product does more than introduce a new technology. It can change the regulatory questions that need to be addressed across the entire product lifecycle.</p>
<p>For products placed on the European market, the <strong>EU Artificial Intelligence Act (EU AI Act)</strong> needs to be considered alongside the <strong>EU Medical Device Regulation (EU MDR 2017/745)</strong> or, where applicable, the <strong>EU In Vitro Diagnostic Medical Device Regulation (EU IVDR 2017/746)</strong>.</p>
<div style="background-color: #eff6ff; border-left: 4px solid #0b3a96; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0;">
  <p style="font-weight: bold; margin: 0; color: #1e3a8a;">The important point is that these regulations should not be treated as two completely separate compliance projects.</p>
</div>
<p>For an AI-enabled medical device, the manufacturer's regulatory strategy needs to establish how the device is classified, which AI Act obligations apply, how AI-specific risks are controlled, how data and model changes are governed, and how the evidence remains consistent throughout the product lifecycle.</p>
<h2>The First Question: Does the EU AI Act Apply to Your Medical Device?</h2>
<p>Not every product that uses artificial intelligence will be regulated in exactly the same way under the AI Act. The analysis depends on the nature of the AI system, its intended purpose, how it is used, and its relationship to the applicable European product legislation.</p>
<p>For medical devices, one of the key considerations is whether the AI system is itself a medical device or safety component of a product covered by the EU MDR or IVDR and whether the relevant conformity-assessment route involves a third party (such as a Notified Body).</p>
<h2>Key Areas Where AI-Enabled Medical Devices Create Regulatory Challenges</h2>
<h3>1. Establish a Clear AI and Product Inventory</h3>
<p>Before assessing compliance, manufacturers need to understand exactly where AI is being used across the product portfolio. Identify AI-enabled medical devices, standalone software (SaMD), decision-support algorithms, embedded ML models, and connected cloud AI services.</p>
<h3>2. Align the AI Act Strategy With the MDR or IVDR Strategy</h3>
<p>The EU AI Act does not replace the MDR or IVDR. Manufacturers must understand where requirements overlap and build integrated dossiers rather than duplicate documentation silos.</p>
<h3>3. Treat Data Governance as a Core Regulatory Activity</h3>
<p>Data quality is central to AI performance. Manufacturers must document training, validation, and testing dataset provenance, bias mitigation, demographic representation, and clinical relevance.</p>
<h3>4. Connect AI Risk Management With ISO 14971</h3>
<p>Risk management cannot end at traditional software hazards. Hallucinations, algorithmic drift, edge-case misclassifications, and cybersecurity vulnerabilities must be systematically controlled under ISO 14971.</p>
<h3>5. Design for Human Oversight and Clinical Usability</h3>
<p>Autonomous AI in healthcare faces strict scrutiny. Ensure clinical decision support provides transparent explanations, confidence intervals, and override mechanisms suitable for clinicians under IEC 62366-1.</p>
<h2>How NKB Regovanta Can Support Your AI Strategy</h2>
<p>We help medtech companies navigate qualification, MDCG software guidance, AI Act conformity assessment, Notified Body preparation, and post-market clinical follow-up.</p>
`,

  "eu-mdr-2026": `
<p class="lead">EU MDR 2026 update covering mandatory EUDAMED modules, UDI/device registration, certificates, market surveillance and practical manufacturer priorities.</p>
<h2>A Transition in Progress</h2>
<p>The European Medical Device Regulation (EU MDR 2017/745) entered full application in May 2021, but the regulatory landscape continues to evolve through transitional provisions, guidance documents, and progressive EUDAMED deployment.</p>
<h2>Key Priorities for 2026</h2>
<ul>
  <li><strong>EUDAMED Deployment:</strong> Preparation for mandatory use of the actor, device, and certificate registration modules.</li>
  <li><strong>Notified Body Capacity:</strong> Managing conformity assessment timelines and submitting complete technical documentation well in advance of certificate expiry.</li>
  <li><strong>Post-Market Surveillance (PMS &amp; PMCF):</strong> Delivering proactive clinical evidence rather than relying solely on complaint logs.</li>
  <li><strong>Legacy Device Transitions:</strong> Meeting Regulation (EU) 2023/607 and 2024/1860 extension conditions, including formal Notified Body agreements and QMS readiness.</li>
</ul>
<h2>Practical Recommendations</h2>
<p>Ensure your Person Responsible for Regulatory Compliance (PRRC) is fully integrated into release decisions. Keep technical files up to date and audit your supply chain for MDR economic operator requirements.</p>
`,

  "eu-mdr-compliance-challenges": `
<p class="lead">Getting a medical device ready for the European market under Regulation (EU) 2017/745 (MDR) is not simply a matter of updating an MDD technical file and sending it to a Notified Body.</p>
<p>The MDR requires manufacturers to demonstrate a much tighter connection between the device, its clinical evidence, risk management, technical documentation, quality system, and post-market activities.</p>
<div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0;">
  <p style="font-weight: bold; margin-bottom: 0.5rem; color: #92400e;">In our experience, the biggest problems are rarely caused by one missing document.</p>
  <p style="margin: 0; color: #92400e;">They usually arise because the regulatory file was built in pieces, by different teams, without maintaining a clear connection between the evidence.</p>
</div>
<h2>Common Pitfalls in MDR Compliance</h2>
<h3>1. Flawed Clinical Equivalence Arguments</h3>
<p>Under MDR, claiming equivalence requires direct access to technical, biological, and clinical data of the equivalent device. Contractual barriers often invalidate historical MDD equivalence claims.</p>
<h3>2. Insufficient Post-Market Clinical Follow-Up (PMCF)</h3>
<p>Notified Bodies reject passive surveillance as a substitute for structured PMCF studies or registries for higher-risk devices.</p>
<h3>3. Disconnected Risk Management Files</h3>
<p>Risk assessments must explicitly reflect clinical evaluation report findings and state-of-the-art literature searches under ISO 14971:2019.</p>
<h3>4. Inadequate Software Lifecycle Evidence</h3>
<p>Medical device software must demonstrate full traceability from software requirements to verification, validation, and cybersecurity controls under IEC 62304.</p>
`,

  "fda-inspections-2026": `
<p class="lead">For medical-device manufacturers, 2026 brings practical regulatory changes that should be translated into clear actions across quality, regulatory and operational teams.</p>
<h2>QSIT has been replaced</h2>
<p>Beginning February 2, 2026, FDA stopped using the Quality System Inspection Technique (QSIT) for medical-device inspections. Inspections are now conducted using the updated Inspection of Medical Device Manufacturers Compliance Program, CP 7382.850, which aligns the inspection process with the QMSR.</p>
<h2>Expect a system-level assessment</h2>
<p>The best preparation is a QMS that works consistently in practice. Investigators evaluate whether procedures are implemented, whether records support the claimed process, and whether quality issues are identified, investigated and corrected appropriately. A polished SOP without matching evidence creates greater scrutiny rather than confidence.</p>
<h2>More records may be available for review</h2>
<p>FDA’s QMSR FAQ confirms that investigators may review records created before February 2, 2026 when determining compliance. Importantly, the QMSR no longer maintains the prior inspection exemptions for management-review, quality-audit and supplier-audit reports. Companies should therefore ensure these records are complete, controlled and suitable for regulatory review.</p>
<h2>Inspection-readiness checklist</h2>
<ul>
  <li>Maintain current organizational and facility information</li>
  <li>Ensure requested records can be retrieved promptly</li>
  <li>Verify CAPA, complaint, nonconformance and supplier-control files for consistency</li>
  <li>Confirm design and development records are traceable where applicable</li>
  <li>Review management-review and internal-audit outputs</li>
  <li>Verify training records and job descriptions</li>
  <li>Assess risk-management linkages under ISO 14971</li>
  <li>Conduct realistic mock inspections using representative records</li>
</ul>
`,

  "fda-qmsr-2026": `
<p class="lead">For medical-device manufacturers, 2026 brings practical regulatory changes that should be translated into clear actions across quality, regulatory and operational teams.</p>
<h2>A major change is now in effect</h2>
<p>On February 2, 2026, FDA’s Quality Management System Regulation (QMSR) became effective. The revised 21 CFR Part 820 incorporates ISO 13485:2016 by reference and is intended to more closely align the U.S. medical-device quality framework with internationally recognized quality-management requirements.</p>
<h2>What changed for manufacturers</h2>
<p>The transition is more than a terminology update. Manufacturers should ensure that their quality management system is structured to meet the QMSR requirements together with other applicable FDA requirements. Companies that already operate an ISO 13485-certified QMS may have a strong foundation, but certification alone does not establish FDA compliance. U.S.-specific regulatory obligations still need to be addressed within procedures, records and day-to-day execution.</p>
<h2>Records require particular attention</h2>
<p>FDA has clarified that investigators may review QMS records created before the QMSR effective date when assessing compliance. The agency may also inspect records such as management review, quality audit and supplier audit reports that previously benefited from specific inspection exemptions under the former Quality System Regulation. This makes record completeness, consistency and traceability especially important.</p>
<h2>Practical actions to take now</h2>
<ul>
  <li>Perform a documented gap assessment between your existing system and the QMSR framework</li>
  <li>Update procedures, references, and terminology where necessary</li>
  <li>Verify that U.S.-specific requirements (such as 21 CFR Part 803 Medical Device Reporting) are seamlessly integrated</li>
  <li>Assess supplier, complaint, CAPA, design and risk-management processes</li>
  <li>Confirm management-review and audit records are inspection-ready</li>
  <li>Train relevant personnel on the new FDA expectations</li>
</ul>
`,

  "medical-device-documentation-compliance-to-evidence": `
<p class="lead">For a medical device manufacturer, documentation is more than a compliance requirement. It is the objective evidence that the product, processes and quality system remain under control.</p>
<p>During an FDA inspection, Notified Body audit or ISO 13485 assessment, auditors do not simply look for documents. They look for <strong>consistency, traceability and objective evidence</strong> that documented processes are actually implemented.</p>
<div style="background-color: #eff6ff; border-left: 4px solid #0b3a96; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0;">
  <p style="font-weight: bold; margin: 0; color: #1e3a8a;">A procedure may be well written, but if the records do not support it, the quality system can still come under scrutiny.</p>
</div>
<h2>Where Documentation Needs the Most Attention</h2>
<h3>1. Traceability From Design Input to Verification and Clinical Claims</h3>
<p>Traceability matrices must link clinical claims directly to bench test data, biocompatibility evaluations, software verification, and risk mitigations.</p>
<h3>2. CAPA and Nonconformance Records</h3>
<p>Auditors closely inspect whether root-cause investigations go beyond superficial human error and whether corrective actions verify sustained effectiveness over time.</p>
<h3>3. Supplier Evaluation and Incoming Inspection</h3>
<p>Contract manufacturing, sterile barrier packaging, and critical raw material suppliers must be qualified with active quality agreements and regular audits.</p>
<h3>4. Change Control and Technical File Lifecycle</h3>
<p>Engineering change orders (ECOs) must assess regulatory impact across all registered target jurisdictions before release into production.</p>
`
};

async function run() {
  console.log("🌱 Seeding content_html for the 7 static articles...");

  for (const [slug, html] of Object.entries(ARTICLES_CONTENT)) {
    const { error } = await supabase
      .from("blog_posts")
      .update({ content_html: html.trim() })
      .eq("slug", slug);

    if (error) {
      console.error(`❌ Failed to update ${slug}:`, error.message);
    } else {
      console.log(`✅ Successfully populated content_html for: ${slug} (${html.trim().length} chars)`);
    }
  }

  console.log("\n🎉 All 7 articles have now been populated with rich content in Supabase blog_posts!");
}

run();
