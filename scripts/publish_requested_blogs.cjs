const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zoihnehiptkfgxshtazi.supabase.co';
const supabaseKey = 'sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP';
const supabase = createClient(supabaseUrl, supabaseKey);

const AUTHOR_ID = '62fc962b-ffef-4f88-990f-090766147390'; // NKB Regulatory Experts
const CATEGORY_ID = '5628ed8b-5935-4d00-8061-02f1981fc96a'; // CDSCO

// ============================================================================
// BLOG 1: How to Register a Medical Device in India | The Complete 2026 CDSCO Guide
// ============================================================================
const blog1Html = `
<p class="lead text-lg font-normal text-slate-700 leading-relaxed mb-6">
If you plan to make, import or sell a health product here, the first thing to work out is <strong>how to register a medical device in India</strong>. The short answer: classify the device by risk, choose the correct licence form, and file a complete dossier with the Central Drugs Standard Control Organisation (CDSCO) or your state regulator. The long answer is where most companies lose months.
</p>

<p>
One mismatch between your label, your Free Sale Certificate and your device list can trigger a query. Each query adds weeks. <a href="https://www.qualio.com/blog/cdsco-medical-device-registration-india" target="_blank" rel="noopener noreferrer">Qualio's overview of the CDSCO process</a> puts typical review at three to six months for lower-risk devices and six to twelve months for higher-risk ones.
</p>

<p>
This guide explains how to register a medical device in India under the Medical Devices Rules 2017. You will learn the risk classes, the MD forms, the documents reviewers check, realistic fees and timelines, and the rule changes CDSCO made in 2026.
</p>

<h2>What Does It Mean to Register a Medical Device in India?</h2>
<p>
People say &quot;registration&quot; in everyday speech. Under Indian law, you mostly need a licence. <strong>CDSCO registration</strong> is the umbrella term the industry uses for both.
</p>
<p>
India regulates devices under the Drugs and Cosmetics Act, 1940 and the Medical Devices Rules, 2017 (MDR 2017). The rules cover instruments, implants, software, reagents and in vitro diagnostic (IVD) kits that diagnose, treat or prevent disease. If you work with test kits, our <a href="/industries/ivd">IVD regulatory page</a> covers the extra points for diagnostics.
</p>
<p>
A <strong>medical device license in India</strong> gives you the legal right to manufacture, import, stock or sell a device. Without one, customs can hold your shipment, hospitals can reject your tender bid, and inspectors can seize stock.
</p>
<p>
There is one lighter route. Class A devices that are non-sterile and non-measuring (often shortened to NSNM) skip the full licence. Their makers and importers still list the product on the CDSCO online portal.
</p>

<h2>Why CDSCO Registration Matters for Your Business in 2026</h2>
<p>
Anyone researching how to register a medical device in India soon learns that the regulatory net is far wider than it was five years ago. India started with a short list of &quot;notified&quot; devices. Class A and B devices came under compulsory licensing on 1 October 2022, and every Class C and D device followed on 1 October 2023.
</p>
<p>
That shift changed how buyers behave. Hospital procurement teams, e-commerce marketplaces and distributors now ask for your licence copy before they raise a purchase order.
</p>
<p>
A licence also opens export doors. CDSCO issues Free Sale Certificates and Market Standing Certificates only for licensed devices, as its <a href="https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/" target="_blank" rel="noopener noreferrer">medical device and diagnostics guidance page</a> shows. Overseas buyers and regulators often ask for exactly these papers.
</p>
<p>
Early compliance also cuts rework. When you build your ISO 13485 certification, technical file and labels around Indian rules from day one, you avoid rewriting them after the first query letter arrives.
</p>

<h2>Who Regulates Medical Devices in India?</h2>
<p>
Before you plan how to register a medical device in India, know who makes the decision. CDSCO works under the Directorate General of Health Services in the Ministry of Health and Family Welfare. The Drugs Controller General of India (DCGI) heads it and acts as the Central Licensing Authority (CLA). Its headquarters sits at FDA Bhawan in New Delhi, backed by zonal, sub-zonal and port offices.
</p>
<p>
Two authorities split the licensing work:
</p>
<ul>
  <li><strong>Central Licensing Authority (CLA):</strong> Handles all imports, Class C and D manufacturing, clinical investigations and formal risk classification.</li>
  <li><strong>State Licensing Authority (SLA):</strong> Located in each state, handles Class A and B manufacturing licences.</li>
  <li><strong>Notified Bodies:</strong> Private audit firms registered with CDSCO that inspect Class A and B manufacturing sites before the SLA decides.</li>
</ul>
<p>
Drug-device products, such as a pre-filled syringe or a drug-coated stent, need extra thought. Start from the product's primary intended purpose. Our guide on <a href="/insights/borderline-medical-device-classification-strategy">borderline product classification</a> walks through that reasoning.
</p>

<h2>Step 1: Classify the Device</h2>
<p>
Classification drives almost every later decision: who reviews your file, which form you use, what you pay and how long you wait.
</p>
<p>
MDR 2017 uses a four-level <strong>risk classification</strong>: Class A, B, C and D. CDSCO publishes product-wise lists by clinical area, such as cardiology, orthopaedics and IVDs. Search for your device on the <a href="https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/" target="_blank" rel="noopener noreferrer">CDSCO medical device page</a> first.
</p>
<p>
If your product is missing or unclear, ask CDSCO for an official ruling. The <a href="https://cdscomdonline.gov.in/" target="_blank" rel="noopener noreferrer">CDSCO MD Online portal</a> has accepted risk classification applications for medical devices since 27 November 2025 and for IVDs since 18 February 2026.
</p>
<p>
Base the class on your intended use and claims, not on how a competitor labels a similar item. A dressing that only covers a cut sits lower than one that claims to manage deep wounds.
</p>

<h3>How Class A, B, C and D Devices Differ</h3>
<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 1: CDSCO risk classes at a glance</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Class</th>
        <th class="p-3 border border-slate-200">Risk Level</th>
        <th class="p-3 border border-slate-200">Typical Examples</th>
        <th class="p-3 border border-slate-200">Manufacturing Licence From</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold text-emerald-700">Class A</td>
        <td class="p-3 border border-slate-200">Low</td>
        <td class="p-3 border border-slate-200">Tongue depressors, non-sterile bandages</td>
        <td class="p-3 border border-slate-200">State Licensing Authority</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold text-blue-700">Class B</td>
        <td class="p-3 border border-slate-200">Low to moderate</td>
        <td class="p-3 border border-slate-200">Hypodermic needles, suction equipment</td>
        <td class="p-3 border border-slate-200">State Licensing Authority</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold text-amber-700">Class C</td>
        <td class="p-3 border border-slate-200">Moderate to high</td>
        <td class="p-3 border border-slate-200">Ventilators, orthopaedic implants</td>
        <td class="p-3 border border-slate-200">Central Licensing Authority</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold text-rose-700">Class D</td>
        <td class="p-3 border border-slate-200">High</td>
        <td class="p-3 border border-slate-200">Heart valves, coronary stents, HIV test kits</td>
        <td class="p-3 border border-slate-200">Central Licensing Authority</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
IVDs use the same four letters but follow their own classification rules. A kit that screens donated blood usually lands in Class D, because a wrong result can harm many people at once.
</p>

<h2>Step 2: Choose the Right Licence Route</h2>
<p>
With the class fixed, how to register a medical device in India splits into separate paths, so match the class to your business model. Will you make the device in India, import it, or only test it? Each answer points to a different pair of forms.
</p>

<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 2: Licence routes compared</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Route</th>
        <th class="p-3 border border-slate-200">Apply On</th>
        <th class="p-3 border border-slate-200">Licence Issued</th>
        <th class="p-3 border border-slate-200">Granted By</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200">Manufacture, Class A/B</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-3</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-5</td>
        <td class="p-3 border border-slate-200">SLA (after notified-body audit)</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200">Loan licence, Class A/B</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-4</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-6</td>
        <td class="p-3 border border-slate-200">SLA</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200">Manufacture, Class C/D</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-7</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-9</td>
        <td class="p-3 border border-slate-200">CLA (CDSCO inspection)</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200">Loan licence, Class C/D</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-8</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-10</td>
        <td class="p-3 border border-slate-200">CLA</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold text-[#0b3a96]">Import, any class</td>
        <td class="p-3 border border-slate-200 font-mono font-medium text-[#0b3a96]">Form MD-14</td>
        <td class="p-3 border border-slate-200 font-mono font-medium text-[#0b3a96]">Form MD-15</td>
        <td class="p-3 border border-slate-200">CLA, via an Indian agent</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200">Test licence, manufacture</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-12</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-13</td>
        <td class="p-3 border border-slate-200">CLA</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200">Test licence, import</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-16</td>
        <td class="p-3 border border-slate-200 font-mono font-medium">Form MD-17</td>
        <td class="p-3 border border-slate-200">CLA</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200">Class A non-sterile, non-measuring</td>
        <td class="p-3 border border-slate-200">Online registration</td>
        <td class="p-3 border border-slate-200">Registration number</td>
        <td class="p-3 border border-slate-200">CDSCO portal</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Manufacturing Licences (MD-3 to MD-10)</h3>
<p>
Indian makers of Class A or B devices apply on Form MD-3 and receive Form MD-5 from the SLA. A notified body audits the site first. Class C and D makers apply on Form MD-7 and receive Form MD-9 straight from the CLA, which sends its own inspectors.
</p>
<p>
Loan licences suit brand owners who use another company's licensed plant. They follow parallel forms: MD-4 to MD-6 for lower-risk devices, and MD-8 to MD-10 for higher-risk ones.
</p>
<p>
Our note on <a href="/insights/cdsco-medical-device-manufacturing-license-india">preparing a CDSCO manufacturing licence</a> shows how to line up site and product evidence in a single filing.
</p>

<h3>Import Licences for Foreign Manufacturers (MD-14 and MD-15)</h3>
<p>
A foreign company cannot hold an Indian import licence itself. It must appoint an <strong>Authorised Indian Agent</strong>: an Indian firm with a valid wholesale or manufacturing licence. The agent files Form MD-14 on the <strong>SUGAM portal</strong> and receives the <strong>MD-15 import license</strong>.
</p>
<p>
CDSCO grants import licences centrally for every class, even Class A. The agent's details also go on the label, so choose carefully. Switching agents later means amending the licence.
</p>
<p>
Add your Import Export Code (IEC) to the portal profile before you apply. CDSCO now treats IEC details as mandatory for import applications, according to the <a href="https://cdscomdonline.gov.in/" target="_blank" rel="noopener noreferrer">MD Online portal notice</a>. Need one? See our <a href="/services/iec-ad-code-registration-india">IEC and AD code registration service</a>.
</p>

<h2>Documents You Need to Register a Medical Device in India</h2>
<p>
Paperwork is where how to register a medical device in India gets detailed. Reviewers check that every document tells the same story. The product name, model numbers, intended use and manufacturer address must match across the entire file. Use this table as a starting checklist.
</p>

<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 3: Core dossier documents</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Document</th>
        <th class="p-3 border border-slate-200">What It Proves</th>
        <th class="p-3 border border-slate-200">Needed For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Device Master File (DMF)</td>
        <td class="p-3 border border-slate-200">Design, materials, risk, testing, labels</td>
        <td class="p-3 border border-slate-200">All licences</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Plant Master File (PMF)</td>
        <td class="p-3 border border-slate-200">Site, processes, equipment, quality system</td>
        <td class="p-3 border border-slate-200">All licences</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">ISO 13485 certificate</td>
        <td class="p-3 border border-slate-200">A working quality management system</td>
        <td class="p-3 border border-slate-200">Manufacture and import</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Free Sale Certificate</td>
        <td class="p-3 border border-slate-200">Legal sale in the origin or reference market</td>
        <td class="p-3 border border-slate-200">Import</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Legalised power of attorney</td>
        <td class="p-3 border border-slate-200">The Indian agent's authority</td>
        <td class="p-3 border border-slate-200">Import</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Test and performance reports</td>
        <td class="p-3 border border-slate-200">Safety and performance claims</td>
        <td class="p-3 border border-slate-200">Most Class B, C and D</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Essential Principles checklist</td>
        <td class="p-3 border border-slate-200">Conformity with safety and performance rules</td>
        <td class="p-3 border border-slate-200">All licences</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Labels and instructions for use</td>
        <td class="p-3 border border-slate-200">Compliance with Indian labelling rules</td>
        <td class="p-3 border border-slate-200">All licences</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Clinical evidence</td>
        <td class="p-3 border border-slate-200">Safety and benefit in patients</td>
        <td class="p-3 border border-slate-200">New or high-risk devices</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Device Master File and Plant Master File</h3>
<p>
The <strong>Device Master File (DMF)</strong> is the technical core of your application. MDR 2017 sets its layout in the Fourth Schedule. It covers the device description, design and manufacturing data, the essential principles checklist, risk analysis under ISO 14971, verification and validation, and labelling.
</p>
<p>
The <strong>Plant Master File (PMF)</strong> describes where and how you make the device: site layout, cleanroom grade, equipment, process flow and quality controls.
</p>
<p>
Keep both files under document control. If you change a supplier or a sterilisation cycle after filing, update the files before a reviewer spots the gap. Our <a href="/services/medical-device-technical-documentation-consulting">technical documentation and DHF service</a> handles this work, and our guide to <a href="/insights/biological-evaluation-testing-medical-devices-iso-10993">ISO 10993 biological evaluation</a> explains how to plan biocompatibility evidence.
</p>

<h2>How to Register a Medical Device in India Online, Step by Step</h2>
<p>
Every application now moves online. Here is how to register a medical device in India on the government portals, with small differences by class and route.
</p>

<h3>Filing on the CDSCO MD Online and SUGAM Portals</h3>
<p>
First, create a company account and upload your constitution papers, such as the incorporation certificate and GST details. Next, add your device list, grouped the way CDSCO's grouping guidance allows. Grouping matters because the government charges fees per site and per device.
</p>
<p>
Then pick the correct form, attach the DMF, PMF and supporting papers, and pay through the Bharatkosh gateway. Save the acknowledgement. Your file number becomes the reference for every query that follows.
</p>
<p>
Watch file sizes. A study in the <a href="https://doaj.org/article/f20d29fba09e4a4d9ef36d36161d9add" target="_blank" rel="noopener noreferrer">Journal of Advanced Pharmaceutical Technology &amp; Research</a> found the portal capped uploads at 10 MB per file when researchers reviewed it. Compress scans and split large reports before you begin.
</p>

<h3>Audit, Queries and Grant</h3>
<p>
After submission, the authority reviews the dossier and books an audit where the rules require one. Class A and B sites face a notified-body audit. Class C and D sites face a CDSCO inspection.
</p>
<p>
Most applicants get at least one query letter. Answer every point in a single reply and add page references. Partial answers only restart the wait.
</p>
<p>
Speed matters more than ever. Industry reports from August 2026 say CDSCO has started closing long-pending SUGAM files that sit waiting for applicant replies.
</p>
<p>
Once satisfied, the authority grants the licence on the matching MD form. That licence lists each approved device, variant and accessory, so check it line by line.
</p>

<h2>Medical Device Registration in India: Cost and Timeline</h2>
<p>
After how to register a medical device in India, budget is usually the next question. Government fees depend on the route, the class and the number of devices. For domestic makers, the Second Schedule of MDR 2017 sets &#8377;5,000 per site plus &#8377;500 per device for a Class A or B licence (MD-5). A Class C or D licence (MD-9) costs &#8377;50,000 per site plus &#8377;1,000 per device.
</p>
<p>
Import licence fees are charged in US dollars, per overseas site and per device, and they rise with the risk class. Always confirm the current figures on the portal before paying.
</p>
<p>
Government fees form only part of the budget. Also plan for product testing, ISO 13485 certification, notified-body audits, document legalisation and consultant fees.
</p>
<p>
Timelines vary widely. <a href="https://www.qualio.com/blog/cdsco-medical-device-registration-india" target="_blank" rel="noopener noreferrer">Qualio's guide</a> estimates three to six months of review for lower-risk devices, with one to two extra months if an inspection is needed, and six to twelve months for higher-risk devices. Queries, missing test data or a slow agent can stretch those numbers further.
</p>

<h2>What Changed in 2026 for Medical Device Registration in India</h2>
<p>
Two updates this year change how to register a medical device in India for some applicants.
</p>
<p>
On 14 August 2026, the health ministry notified the Medical Devices (Third Amendment) Rules, 2026 through G.S.R. 744(E). It adds European Union countries to Rule 63(1), proviso (iv). That rule deals with clinical investigation needs for devices that have no Indian predicate. EU approval now sits alongside approvals from countries such as the US, UK, Australia, Canada and Japan.
</p>
<p>
The same amendment writes quality management system requirements into the provisions for Class A non-sterile, non-measuring devices. Low risk no longer means QMS-optional.
</p>
<p>
Neither change works as an automatic exemption. CDSCO still judges each device on its own evidence. Our breakdown of the <a href="/insights/india-mdr-2026-rule-63">Rule 63 amendment for EU-approved devices</a> lists what manufacturers and importers should assess.
</p>
<p>
CDSCO also added portal features, including a special-code application from 15 May 2026, according to its <a href="https://cdscomdonline.gov.in/" target="_blank" rel="noopener noreferrer">MD Online notices</a>.
</p>

<h2>Registering a Medical Device in India: Startups vs. Foreign Manufacturers</h2>

<h3>Indian Startups and MSMEs</h3>
<p>
For founders working out how to register a medical device in India, Class A or B products are the usual starting point, because the state route is shorter and cheaper. Still, the basics don't change. You need a registered company, a compliant site, trained quality staff and a QMS that works in practice, not only on paper.
</p>
<p>
Still building a prototype? A test licence lets you make small batches for evaluation before you apply for the full licence. Plan your tests around the final dossier so you never pay for the same report twice.
</p>
<p>
If you are new to quality systems, our <a href="/services/iso-13485-implementation-certification-consulting">ISO 13485 implementation service</a> and our guide to <a href="/insights/qms-documentation-iso-13485-compliance">ISO 13485 documentation</a> help first-time manufacturers set things up correctly.
</p>

<h3>Foreign Manufacturers</h3>
<p>
For overseas companies, how to register a medical device in India starts with the agent decision. You can let a distributor hold the licence or appoint an independent agent. An independent agent lets you add or change distributors later without refiling.
</p>
<p>
CDSCO expects a Free Sale Certificate from your home country or from a recognised market. Your EU, US or UK technical file saves time, yet reviewers still want India-specific labels and a tidy device list.
</p>
<p>
Our article on <a href="/insights/regulatory-compliance-strategy-global-medtech">sequencing global market access</a> explains how to reuse one evidence base across several regulators.
</p>

<h2>Common Mistakes That Slow Down Approval</h2>
<p>
Most guides on how to register a medical device in India skip the errors. The same problems show up in file after file. Wrong classification tops the list, because it forces a restart on a different form. Mismatched data comes next, such as a model number on the label that never appears in the Free Sale Certificate.
</p>
<p>
Other delays come from expired or apostilled power-of-attorney papers and slow replies to queries. Wireless devices add another step. If your product uses Bluetooth or Wi-Fi, you also need <a href="/services/wpc-approval-wireless-medical-devices-india">WPC approval for wireless medical devices</a>.
</p>
<p>
Ultrasound machines bring an extra law into play, because of India's ban on sex determination. Plan early for <a href="/services/pc-pndt-registration-consultant-certificate-india">PC-PNDT certificate support</a> if you import or sell them.
</p>

<h2>How to Choose a Partner to Register a Medical Device in India</h2>
<p>
A good consultant shortens the path. A weak one adds a second round of queries. Use these checks before you sign:
</p>
<ul>
  <li>Pick a team with real CDSCO filings in your device class, because Class D reviews differ sharply from Class B ones.</li>
  <li>Ask whether the firm can act as your Authorised Indian Agent or connect you with a licensed one.</li>
  <li>Make sure they review your DMF and PMF before submission rather than after the first query.</li>
  <li>Confirm they can handle linked approvals, such as WPC, IEC and PC-PNDT, under one plan.</li>
  <li>Prefer a fixed scope with named deliverables and dates.</li>
  <li>Look for published guidance and client feedback that you can verify.</li>
</ul>

<h2>Keeping Your Medical Device Licence Valid After Approval</h2>
<p>
A licence starts your obligations; it doesn't end them. Under MDR 2017, your licence stays valid as long as you pay the licence retention fee every five years. Miss that payment and you risk suspension.
</p>
<p>
You also need to report serious adverse events, run post-market surveillance, and seek approval for major changes, such as a new site or a new intended use. India tracks device safety through the Materiovigilance Programme of India.
</p>
<p>
Keep your corrective and preventive action (CAPA) records sharp. Our guide on <a href="/insights/effective-capa-system-medical-devices">medical device CAPA</a> shows how to prove you fixed a problem at its root. The <a href="https://www.iso.org/standard/59752.html" target="_blank" rel="noopener noreferrer">ISO 13485:2016 standard</a> remains your reference for the quality system itself.
</p>

<h2>What Regulatory Professionals Discuss on Reddit</h2>
<p>
Practitioners often swap practical notes on Reddit, including questions about how to register a medical device in India. The <a href="https://www.reddit.com/r/regulatoryaffairs/" target="_blank" rel="noopener noreferrer">r/regulatoryaffairs community</a> covers filing and career questions across many markets. The <a href="https://www.reddit.com/r/MedicalDevices/" target="_blank" rel="noopener noreferrer">r/MedicalDevices community</a> talks through design, quality and approval hurdles. You can also run a <a href="https://www.reddit.com/search/?q=CDSCO%20medical%20device" target="_blank" rel="noopener noreferrer">Reddit search for CDSCO medical device posts</a> to read recent threads and comments.
</p>
<p>
Treat forum tips as a starting point. Indian rules change often, so confirm each detail against CDSCO notices or a qualified adviser.
</p>

<h2>Frequently Asked Questions About How to Register a Medical Device in India</h2>

<div class="space-y-4 my-6">
  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What is the first step to register a medical device in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      The first step in how to register a medical device in India is risk classification. The class (A, B, C or D) decides the licensing authority, the application form, the fee and the audit type. Companies check CDSCO's published classification lists first. If the device is missing or unclear, they apply for an official classification on the MD Online portal. Only after that do they choose between a manufacturing, import or test licence and start building the dossier.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">How long does it take to register a medical device in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Anyone asking how to register a medical device in India also asks about timing, which depends on class and file quality. Lower-risk devices often take three to six months, while higher-risk devices can take six to twelve months. Site inspections, query letters and missing test reports push these estimates out. Applicants who submit a consistent dossier and answer queries quickly usually land at the shorter end of the range.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">How much does it cost to register a medical device in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Government fees to register a medical device in India start at &#8377;5,000 per site plus &#8377;500 per device for a Class A or B manufacturing licence. Class C and D manufacturing licences cost &#8377;50,000 per site plus &#8377;1,000 per device. Import licences carry US-dollar fees per site and per device. Total project cost also includes testing, ISO 13485 certification, audits, legalisation and professional fees, so budgets vary a lot between products.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What is the difference between Form MD-5 and Form MD-15?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Form MD-5 is a manufacturing licence for Class A or B devices made in India, and the State Licensing Authority grants it. Form MD-15 is an import licence that the Central Licensing Authority grants to an Indian agent on behalf of a foreign maker. Both are routes for medical device registration in India, but one covers domestic production and the other covers imports of any class.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Do I need CDSCO approval if my device already has CE marking or FDA clearance?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Yes. Foreign approvals do not replace medical device registration in India. CE marking or FDA clearance supports your file and can reduce clinical data demands, especially after the 2026 Rule 63 amendment that recognises EU approvals. Even so, CDSCO still requires an Indian licence, an Indian agent for imports, Indian-format labels and a complete device and plant master file before the product can go on sale.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Can a foreign company register a medical device in India without an Indian office?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Yes, through an Authorised Indian Agent. A foreign company that wants to register a medical device in India appoints an Indian firm holding a valid wholesale or manufacturing licence. That agent files Form MD-14 on the SUGAM portal, holds the MD-15 licence and handles queries, adverse-event reports and renewals. The manufacturer supplies the technical files, certificates and a legalised power of attorney.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Who approves a medical device registration in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      The Central Drugs Standard Control Organisation approves medical devices in India. Its Central Licensing Authority handles imports and Class C and D manufacturing. State Licensing Authorities handle Class A and B manufacturing, usually after a notified-body audit of the site.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What documents do I need for a medical device licence in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      You need a Device Master File, a Plant Master File, an ISO 13485 certificate, test reports, an Essential Principles checklist and labels. Importers also need a Free Sale Certificate, a legalised power of attorney and a licensed Indian agent.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Do Class A medical devices need a licence in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Most Class A devices need a licence. However, Class A devices that are both non-sterile and non-measuring only need online registration with CDSCO. Since August 2026, the rules also expect these makers to maintain a quality management system.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">How long is a medical device registration in India valid?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      A CDSCO medical device licence stays valid indefinitely, provided the holder pays the licence retention fee every five years. The holder must also keep up post-market surveillance, adverse-event reporting and change approvals to avoid suspension.
    </p>
  </div>
</div>

<div class="rounded-xl border border-blue-100 bg-blue-50/50 p-6 my-8">
  <p class="text-base font-medium text-slate-800 leading-relaxed">
    Knowing how to register a medical device in India is one thing. Getting the licence in the first review cycle is another. NKB Regovanta has supported regulatory and quality projects for device, IVD and pharma companies since 2018. Our team classifies your device, builds the DMF and PMF, manages SUGAM filings and answers CDSCO queries until the licence arrives. Explore our <a href="/services/india" class="font-semibold text-[#0b3a96] underline">CDSCO registration services for India</a> or read our guide on <a href="/insights/cdsco-medical-device-registration-guidelines-india" class="font-semibold text-[#0b3a96] underline">defining the applicant, product and route for Indian registration</a>. If you plan to register a medical device in India this year, <a href="/contact" class="font-semibold text-[#0b3a96] underline">book a consultation with our CDSCO specialists</a> and turn your approval plan into a dated project schedule.
  </p>
</div>
`;


// ============================================================================
// BLOG 2: CDSCO Consultant for Medical Devices in India | 2026 Guide to Licences, Timelines and the Right Partner
// ============================================================================
const blog2Html = `
<p class="lead text-lg font-normal text-slate-700 leading-relaxed mb-6">
Most Indian medical device approvals don't stall because of the device. They stall because of the file. A wrong risk class, an expired Free Sale Certificate or a device description that doesn't match the label can push a launch back by months. A <strong>CDSCO consultant for medical devices in India</strong> exists to catch those problems before the regulator does.
</p>

<p>
The stakes keep rising. The Government of India's <a href="https://pmindia.gov.in/?p=15159481" target="_blank" rel="noopener noreferrer">National Medical Devices Policy 2023</a> expects the sector to grow from about $11 billion to $50 billion by 2030. Regulatory oversight has grown with it, and every notified device now needs <strong>medical device registration in India</strong> or a licence before it reaches a hospital or pharmacy.
</p>

<p>
In this guide, you will learn how CDSCO classifies devices, which licence your product needs, what a consultant actually does, realistic timelines and costs, the 2026 rule changes, and how to pick a partner you won't regret hiring.
</p>

<h2>What Does a CDSCO Consultant for Medical Devices in India Do?</h2>
<p>
A CDSCO consultant for medical devices in India is a regulatory specialist who plans, prepares and manages your application to the Central Drugs Standard Control Organisation (CDSCO). CDSCO is India's national regulator for drugs, cosmetics and medical devices. The consultant translates your engineering and quality data into the format the regulator expects.
</p>
<p>
The work starts before anyone files a form. A good <strong>regulatory affairs consultant</strong> first confirms that your product legally counts as a medical device. Next, they assign the correct risk class under the <a href="https://cdsco.gov.in/opencms/opencms/en/Acts-and-rules/Medical-Devices-Rules/" target="_blank" rel="noopener noreferrer">Medical Devices Rules, 2017</a> and map the licence route. Dossier work begins only after those decisions hold up.
</p>
<p>
Day to day, the consultant writes or reviews technical files, coordinates test reports, files applications online, answers CDSCO queries and prepares your team for site audits. After approval, the same partner tracks retention fees, change notifications and adverse event reporting.
</p>
<p>
You are really paying for fewer surprises. An experienced consultant knows which documents CDSCO reviewers question most, and fixes them before submission rather than after a query letter arrives.
</p>

<h2>How CDSCO Regulates Medical Devices in India</h2>
<p>
India runs a risk-based system under the <strong>Medical Devices Rules 2017 (MDR 2017)</strong>. Your route depends on the risk class and on whether you make or import the device.
</p>

<h3>The Four Risk Classes</h3>
<p>
CDSCO sorts devices into Class A, B, C and D, using principles that follow the global <a href="https://www.imdrf.org/" target="_blank" rel="noopener noreferrer">IMDRF</a> risk model. Class A covers low-risk products such as clinical thermometers. Class D covers the highest-risk products, such as heart valves. In vitro diagnostic (IVD) kits follow a parallel A-to-D scheme, which our <a href="/industries/ivd">IVD regulatory team</a> handles separately.
</p>
<p>
Correct <strong>medical device classification</strong> drives everything else: the reviewing authority, the form, the evidence and the fee. For products that sit between categories, read our guide on <a href="/insights/borderline-medical-device-classification-strategy">borderline product classification strategy</a>.
</p>

<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 1: CDSCO risk classes and licensing routes at a glance</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Class</th>
        <th class="p-3 border border-slate-200">Risk Level</th>
        <th class="p-3 border border-slate-200">Example Devices</th>
        <th class="p-3 border border-slate-200">Manufacturing Licence (Apply &rarr; Grant)</th>
        <th class="p-3 border border-slate-200">Who Licenses Manufacture</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold text-emerald-700">A</td>
        <td class="p-3 border border-slate-200">Low</td>
        <td class="p-3 border border-slate-200">Clinical thermometers, tongue depressors</td>
        <td class="p-3 border border-slate-200 font-mono">MD-3 &rarr; MD-5</td>
        <td class="p-3 border border-slate-200">State Licensing Authority</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold text-blue-700">B</td>
        <td class="p-3 border border-slate-200">Low to moderate</td>
        <td class="p-3 border border-slate-200">Hypodermic needles, suction equipment</td>
        <td class="p-3 border border-slate-200 font-mono">MD-3 &rarr; MD-5</td>
        <td class="p-3 border border-slate-200">State Licensing Authority</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold text-amber-700">C</td>
        <td class="p-3 border border-slate-200">Moderate to high</td>
        <td class="p-3 border border-slate-200">Ventilators, bone fixation plates</td>
        <td class="p-3 border border-slate-200 font-mono">MD-7 &rarr; MD-9</td>
        <td class="p-3 border border-slate-200">Central Licensing Authority</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold text-rose-700">D</td>
        <td class="p-3 border border-slate-200">High</td>
        <td class="p-3 border border-slate-200">Heart valves, implantable defibrillators</td>
        <td class="p-3 border border-slate-200 font-mono">MD-7 &rarr; MD-9</td>
        <td class="p-3 border border-slate-200">Central Licensing Authority</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold text-[#0b3a96]">All (Import)</td>
        <td class="p-3 border border-slate-200">Any</td>
        <td class="p-3 border border-slate-200">Any imported device</td>
        <td class="p-3 border border-slate-200 font-mono text-[#0b3a96]">MD-14 &rarr; MD-15</td>
        <td class="p-3 border border-slate-200">Central Licensing Authority</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Central vs State Licensing Authority</h3>
<p>
The Central Licensing Authority, headed by the Drugs Controller General of India, handles all imports, Class C and D manufacturing, clinical investigations and new devices without a predicate. State Licensing Authorities handle Class A and B manufacturing licences within their state.
</p>
<p>
Imports follow one route regardless of class. Importers file Form MD-14 on the <a href="https://cdscomdonline.gov.in/" target="_blank" rel="noopener noreferrer">SUGAM portal</a> and receive a <strong>CDSCO import license</strong> in Form MD-15. Class A devices that are non-sterile and non-measuring no longer need a licence, but they still need online registration.
</p>

<h2>Why Hire a CDSCO Consultant for Medical Devices in India in 2026?</h2>
<p>
You can file on your own, and some companies do. The better question is what a stalled file costs you in lost sales, idle stock and distributor patience.
</p>
<p>
CDSCO reviews on paper. Reviewers can't see your cleanroom or your engineers' skill. They see only the dossier. When that dossier contradicts itself, the regulator raises a query, and every query round adds weeks. Wrong classification, weak Power of Attorney wording and outdated Free Sale Certificates trigger many of these queries.
</p>
<p>
A specialist earns the fee in three places: choosing the right route the first time, building documents that survive review, and answering queries quickly with technical evidence. The comparison below shows how the common options stack up.
</p>

<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 2: Filing yourself vs a generic agency vs a specialist CDSCO consultant</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Factor</th>
        <th class="p-3 border border-slate-200">DIY Filing</th>
        <th class="p-3 border border-slate-200">Generic Licensing Agency</th>
        <th class="p-3 border border-slate-200">Specialist CDSCO Consultant</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Classification accuracy</td>
        <td class="p-3 border border-slate-200">Depends on in-house knowledge</td>
        <td class="p-3 border border-slate-200">Often template-based</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Justified against MDR 2017 rules and predicates</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Dossier quality</td>
        <td class="p-3 border border-slate-200">Variable</td>
        <td class="p-3 border border-slate-200">Copy-paste formats</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Device-specific technical files</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Query handling</td>
        <td class="p-3 border border-slate-200">Slow, learning on the job</td>
        <td class="p-3 border border-slate-200">Forwards queries back to you</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Drafts technical responses</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Audit readiness</td>
        <td class="p-3 border border-slate-200">Rarely prepared</td>
        <td class="p-3 border border-slate-200">Usually not covered</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Mock audits and gap closure</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">After approval</td>
        <td class="p-3 border border-slate-200">Ad hoc</td>
        <td class="p-3 border border-slate-200">Ends at licence grant</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Renewals, changes, vigilance</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Best fit</td>
        <td class="p-3 border border-slate-200">Teams with regulatory staff</td>
        <td class="p-3 border border-slate-200">Simple Class A registrations</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Class B&ndash;D, imports, new devices</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Core Services a Medical Device CDSCO Consultant Should Offer</h2>
<p>
Scope matters more than price. These five service areas separate a full regulatory partner from a form-filling service.
</p>

<h3>Classification and Regulatory Strategy</h3>
<p>
Everything begins with intended use. The consultant reviews your claims, labels and instructions for use, assigns a class, and checks whether a predicate device already exists in India. If no predicate exists, the product follows the new-device route, which needs separate permission and may need clinical data.
</p>

<h3>Device Master File and Plant Master File</h3>
<p>
The <strong>device master file (DMF)</strong> describes the product: design, materials, risk analysis, verification tests, biocompatibility, sterilisation and labelling. The <strong>plant master file (PMF)</strong> describes the site that makes it. Our <a href="/services/medical-device-technical-documentation-consulting">technical documentation consulting</a> service builds both in the format MDR 2017 sets out.
</p>

<h3>Import Licensing and Indian Authorized Agent Support</h3>
<p>
Overseas manufacturers can't apply to CDSCO directly. They appoint an <strong>Indian Authorized Agent</strong> through a power of attorney. The agent must hold a valid licence to sell or manufacture devices in India and carries legal responsibility for the product here.
</p>

<h3>Manufacturing Licences and QMS Audits</h3>
<p>
Indian manufacturers need a quality system that meets the Fifth Schedule of MDR 2017, which tracks closely with <strong>ISO 13485 certification</strong>. Our <a href="/insights/cdsco-medical-device-manufacturing-license-india">CDSCO manufacturing licence guide</a> explains how to prepare product and site evidence together.
</p>

<h3>Post-Approval Compliance</h3>
<p>
Approval starts a new set of duties. You pay a retention fee every five years, notify CDSCO of changes, report adverse events and run <strong>post-market surveillance</strong>. Our <a href="/services/medical-device-audit-compliance-support">audit and compliance support</a> team sets these routines up so they survive staff changes.
</p>

<h2>Step-by-Step: How a CDSCO Consultant for Medical Devices in India Gets You Approved</h2>
<p>
A well-run project follows a clear sequence. The durations below are typical planning ranges, not guarantees, since CDSCO workload and query rounds vary.
</p>

<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 3: The CDSCO approval process, step by step</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Step</th>
        <th class="p-3 border border-slate-200">What Happens</th>
        <th class="p-3 border border-slate-200">Typical Duration</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">1. Gap assessment</td>
        <td class="p-3 border border-slate-200">Review device data, claims and existing certificates</td>
        <td class="p-3 border border-slate-200">1&ndash;2 weeks</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">2. Classification and pathway</td>
        <td class="p-3 border border-slate-200">Assign class, check for a predicate, choose the licence route</td>
        <td class="p-3 border border-slate-200">1&ndash;2 weeks</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">3. Testing and evidence</td>
        <td class="p-3 border border-slate-200">Coordinate performance, electrical safety and biocompatibility tests</td>
        <td class="p-3 border border-slate-200">4&ndash;12 weeks</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">4. Dossier build</td>
        <td class="p-3 border border-slate-200">Write the DMF, PMF, labels and declarations</td>
        <td class="p-3 border border-slate-200">3&ndash;6 weeks</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">5. SUGAM portal filing</td>
        <td class="p-3 border border-slate-200">Register the applicant, upload forms and pay government fees</td>
        <td class="p-3 border border-slate-200">About 1 week</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">6. Review and queries</td>
        <td class="p-3 border border-slate-200">Answer CDSCO queries and host the site audit if required</td>
        <td class="p-3 border border-slate-200">2&ndash;6 months</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">7. Grant and launch</td>
        <td class="p-3 border border-slate-200">Receive the licence and set up surveillance and renewals</td>
        <td class="p-3 border border-slate-200 font-semibold text-emerald-700">Ongoing</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
Step 3 often decides the whole schedule. Test labs book up, and a biocompatibility gap found late can add a month. Our article on <a href="/insights/biological-evaluation-testing-medical-devices-iso-10993">ISO 10993 biological evaluation</a> shows how to define the testing question before you order tests.
</p>
<p>
Wireless products carry one more step. Devices with Bluetooth or Wi-Fi modules usually need <a href="/services/wpc-approval-wireless-medical-devices-india">WPC approval for wireless medical devices</a> alongside the CDSCO licence, so plan both in parallel.
</p>

<h2>How Long Does a CDSCO Consultant for Medical Devices in India Take, and What Does It Cost?</h2>
<p>
Plan in months, not weeks. For a standard import licence, most applicants should budget four to nine months from a complete file to grant. Class C and D devices and new devices without a predicate usually land at the longer end. Class C and D manufacturing licences can take longer still, because they include a CDSCO site inspection.
</p>
<p>
Your realistic <strong>CDSCO approval timeline</strong> depends on three things you control: how complete the dossier is on day one, how quickly your team supplies data for queries, and whether test reports arrive on schedule.
</p>
<p>
Budget in three parts. Government fees depend on the class, the number of sites and the number of devices, and CDSCO publishes them in the Second Schedule of MDR 2017. Grouping products correctly as a family or system can reduce those fees. Testing costs depend on the standards that apply to your device.
</p>
<p>
Consultant fees vary with class and scope. A fixed-scope quote with named deliverables is far easier to compare than an open hourly rate. Be wary of quotes far below the market for Class C or D work, since they usually mean templated files and more query rounds later.
</p>

<h2>2026 CDSCO Rule Changes Your Consultant Should Track</h2>
<p>
India's device rules keep moving, and a good consultant watches the Gazette so you don't have to. Four developments matter this year.
</p>
<p>
First, a 2026 amendment to Rule 63 adds European Union countries to the list of reference markets that CDSCO recognises. EU-approved devices can now lean on that approval in the same way US, UK, Australian, Canadian and Japanese approvals already could. Our breakdown of the <a href="/insights/india-mdr-2026-rule-63">India MDR 2026 Rule 63 amendment</a> explains the impact for EU brands and Indian importers.
</p>
<p>
Second, the April 2026 draft amendments proposed changes on constitution-change filings, labelling for outsourced sterilisation and testing fees, as <a href="https://asiaactual.com/blog/india-proposes-targeted-amendments-to-medical-devices-rules/" target="_blank" rel="noopener noreferrer">Asia Actual summarised</a>.
</p>
<p>
Third, a draft proposal reported by <a href="https://www.cehtra.com/post/cdsco-draft-medical-devices-amendment-rules-2026-key-changes-for-manufacturers" target="_blank" rel="noopener noreferrer">CEHTRA</a> would make a notified-body QMS audit mandatory before a manufacturing licence is granted. If that becomes final, audit readiness moves earlier in every project.
</p>
<p>
Finally, CDSCO added a risk classification module to its online system in late 2025 for novel devices not yet on its classification lists. Drafts can change before final notification, so confirm current status before you plan around them.
</p>

<h2>Choosing a CDSCO Consultant: Overseas Manufacturers vs Indian Startups</h2>

<h3>Overseas Manufacturers</h3>
<p>
Foreign companies need a consultant who can set up or vet the Indian Authorized Agent, manage the Free Sale Certificate and reference-country approvals, and adapt labels for India. Labels must show India-specific details such as the importer's name and import licence number. A consultant who also works on FDA and EU MDR files can reuse your existing evidence instead of rebuilding it. Our guide to <a href="/insights/regulatory-compliance-strategy-global-medtech">global MedTech strategy with reusable evidence</a> covers that approach.
</p>

<h3>Indian Startups and MSMEs</h3>
<p>
Startups usually need help earlier. Before full approval, you can apply for a <strong>test licence</strong> (Form MD-12, granted in Form MD-13) to make small quantities for testing, evaluation and demonstrations. A consultant also helps you build an ISO 13485 quality system that fits a small team. Our piece on <a href="/insights/qms-documentation-iso-13485-compliance">ISO 13485 documentation people can actually use</a> is a practical starting point.
</p>

<h2>How to Choose the Right CDSCO Consultant for Medical Devices in India</h2>
<p>
Ask for evidence, not promises. Use these checks before you sign any engagement letter:
</p>
<ul>
  <li>Ask for approvals in your device class and category, because Class D implant experience differs sharply from Class A consumables.</li>
  <li>Request a written classification rationale in the proposal, since a consultant who can't justify your class early will struggle later.</li>
  <li>Confirm who drafts responses to CDSCO queries, and insist that a technical specialist does it rather than an account manager.</li>
  <li>Check whether the scope covers audit preparation, SUGAM portal registration and post-approval changes, not just the initial filing.</li>
  <li>Look for international experience with FDA, EU MDR or MDSAP if you plan to export, so one evidence base serves several markets.</li>
  <li>Get a fixed-scope quote with named deliverables and realistic timelines, and treat any &quot;guaranteed approval date&quot; as a warning sign.</li>
  <li>Review published case studies and speak to at least one past client about query handling and communication.</li>
</ul>
<p>
You can review how NKB Regovanta handles these projects in our <a href="/case-studies">client case studies</a>.
</p>

<h2>Common Mistakes That Delay CDSCO Approval</h2>
<p>
Most delays trace back to a short list of avoidable errors. Wrong classification tops it, because it sends you down the wrong form, fee and evidence route. Fixing it mid-review often means withdrawing and refiling.
</p>
<p>
Document inconsistency comes next. When the device name, model numbers or intended use differ between the DMF, the label and the Free Sale Certificate, reviewers notice. Expired or incorrectly notarised certificates cause the same trouble.
</p>
<p>
Late testing is the third common error. Teams often submit before key test reports arrive, then scramble when CDSCO asks for them. Finally, many companies treat approval as the finish line and miss retention fees or change notifications. Our article on turning <a href="/insights/medical-device-documentation-compliance-to-evidence">compliance records into regulatory evidence</a> shows how to keep files audit-ready long after the grant.
</p>

<h2>What Reddit Communities Discuss About CDSCO Approvals</h2>
<p>
Online communities give a useful, unfiltered view of what founders and regulatory professionals struggle with. The <a href="https://www.reddit.com/r/regulatoryaffairs/search/?q=CDSCO" target="_blank" rel="noopener noreferrer">r/regulatoryaffairs community</a> often hosts questions from RA professionals about Indian submissions and career moves into device regulation.
</p>
<p>
Device engineers and founders discuss product and market-entry questions in <a href="https://www.reddit.com/r/MedicalDevices/search/?q=CDSCO" target="_blank" rel="noopener noreferrer">r/MedicalDevices</a>, while Indian founders raise licensing costs and timelines in <a href="https://www.reddit.com/r/StartUpIndia/search/?q=CDSCO%20license" target="_blank" rel="noopener noreferrer">r/StartUpIndia</a>. You can also run a <a href="https://www.reddit.com/search/?q=CDSCO%20medical%20device%20license" target="_blank" rel="noopener noreferrer">site-wide Reddit search for CDSCO medical device licences</a> to see current posts and comment threads.
</p>
<p>
Treat forum advice as a starting point, not a legal opinion. Rules change, and a comment from two years ago may describe a process that no longer exists.
</p>

<h2>Frequently Asked Questions About CDSCO Consultants for Medical Devices in India</h2>

<div class="space-y-4 my-6">
  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What is a CDSCO consultant for medical devices in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      A CDSCO consultant for medical devices in India is a regulatory specialist who helps manufacturers and importers get licences from the Central Drugs Standard Control Organisation. The consultant classifies the device, picks the right licence route, prepares the device master file and plant master file, files the application online and answers regulator queries. Many consultants also prepare sites for audits and manage post-approval duties such as retention fees, change notifications and adverse event reporting. The goal is a complete, consistent file that clears review with fewer query rounds.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">How long does CDSCO medical device registration take with a consultant?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Most CDSCO medical device registration projects take four to nine months from a complete dossier to licence grant. Simple Class A and B products sit at the shorter end. Class C and D devices, new devices without an Indian predicate and manufacturing licences that need a site inspection usually take longer. A consultant can't control CDSCO's workload, but they can cut avoidable delays by filing a complete dossier and answering queries fast. Read our <a href="/insights/cdsco-medical-device-registration-guidelines-india">CDSCO registration guidelines</a> for route-by-route detail.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">How much does a CDSCO consultant for medical devices in India charge?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Fees for a CDSCO consultant for medical devices in India vary with device class, the number of products and the scope of work. A Class A registration costs far less than a Class D import licence with clinical evidence review. Government fees and testing costs sit on top of consultant fees. Ask for a fixed-scope proposal that lists deliverables, such as classification rationale, DMF, PMF, filing and query support, so you can compare quotes fairly rather than on headline price alone.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What is the difference between a CDSCO consultant and an Indian Authorized Agent?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      An Indian Authorized Agent is the legal licence holder who represents an overseas manufacturer before CDSCO and carries responsibility for the product in India. A CDSCO consultant is a technical advisor who prepares the strategy and documents. Some firms offer both roles, while others work alongside an existing agent or distributor. Foreign manufacturers must have an authorised agent, but the consultant is optional. In practice, most overseas companies use both to avoid errors in the CDSCO import license application.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Do I need a CDSCO consultant if my device already has CE marking or FDA clearance?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Foreign approvals help, but they don't replace a CDSCO consultant for medical devices in India. CDSCO still expects an India-specific dossier, correct local classification, India labelling and a licensed authorised agent. Approval in reference markets such as the US or, since the 2026 Rule 63 amendment, the EU can reduce local clinical evidence demands. A consultant knows how to reuse your CE or FDA evidence without copying documents that don't fit Indian formats. Our <a href="/services/india">CDSCO registration services</a> page explains how we adapt global files.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Can a startup get a CDSCO test licence before full manufacturing approval?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Yes. Indian startups can apply for a test licence in Form MD-12, which CDSCO grants in Form MD-13. It lets you make small quantities of a device for testing, evaluation, clinical investigation or demonstration, but not for sale. A CDSCO consultant for medical devices in India can file the test licence early so development and regulatory work run in parallel. You'll still need a full manufacturing licence before commercial sale, and the quality system you build now should already point towards ISO 13485.
    </p>
  </div>
</div>

<h2>Questions &amp; Answers</h2>

<div class="space-y-4 my-6">
  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Who regulates medical devices in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      The Central Drugs Standard Control Organisation (CDSCO) regulates medical devices in India under the Medical Devices Rules, 2017. The Drugs Controller General of India heads it. CDSCO licenses all imports and Class C and D manufacturing, while State Licensing Authorities license Class A and B manufacturing within each state.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Do Class A medical devices need a CDSCO licence?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Class A devices that are non-sterile and non-measuring don't need a licence, but they still need registration on CDSCO's online system. Class A devices that are sterile or have a measuring function still need a licence. A consultant can confirm which group your product falls into before you file anything.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What documents does a CDSCO consultant need to start work?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      A CDSCO consultant usually needs your intended use statement, labels and instructions for use, design and risk documents, test reports, quality system certificates and any existing foreign approvals. Overseas companies also share their Free Sale Certificate and power of attorney drafts. With these, the consultant can confirm class and route within one or two weeks.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Where can I find a reliable CDSCO consultant for medical devices in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Look for a CDSCO consultant for medical devices in India with published case studies, experience in your device class and a clear fixed-scope proposal. Firms such as NKB Regovanta combine CDSCO, FDA and EU MDR work, which helps if you plan to sell in several markets from one evidence base.
    </p>
  </div>
</div>

<div class="rounded-xl border border-blue-100 bg-blue-50/50 p-6 my-8">
  <p class="text-base font-medium text-slate-800 leading-relaxed">
    Getting a device into Indian hospitals takes more than a completed form. It takes the right class, the right route and a dossier that answers reviewers' questions before they ask them. Working with an experienced CDSCO consultant for medical devices in India turns a months-long guessing game into a planned project with clear milestones. NKB Regovanta has supported regulatory and quality projects since 2018 across CDSCO, US FDA and EU MDR. Explore our <a href="/services/india" class="font-semibold text-[#0b3a96] underline">India CDSCO registration services</a> or <a href="/contact" class="font-semibold text-[#0b3a96] underline">book a consultation with our regulatory team</a> to map your device's route. Choosing the right CDSCO consultant for medical devices in India today is the fastest way to protect your launch date tomorrow.
  </p>
</div>
`;


// ============================================================================
// BLOG 3: Medical Device Regulatory Consultant in India | The 2026 Guide to Choosing the Right Partner
// ============================================================================
const blog3Html = `
<p class="lead text-lg font-normal text-slate-700 leading-relaxed mb-6">
Getting a medical device approved in India takes more than a good product. You need the right risk class, the right licence, a local representative if you are based abroad, and a dossier that answers the regulator's questions before anyone asks them. A <strong>medical device regulatory consultant in India</strong> manages that work so your launch does not stall in a query loop.
</p>

<p>
The stakes keep rising. India's medical devices industry could grow from $15.2 billion in 2025 to $50.1 billion by 2030, according to a <a href="https://ianslive.in/indias-medical-devices-market-likely-to-hit-501-bn-by-2030--20260212160702" target="_blank" rel="noopener noreferrer">Rubix Industry Insights report covered by IANS</a>. More products mean more applications, and CDSCO reviewers see incomplete files every day.
</p>

<p>
In this guide, you will learn what a consultant does, how CDSCO registration works, what changed in 2026, what drives cost, and how to pick a partner you can trust.
</p>

<div class="rounded-lg border-l-4 border-[#0b3a96] bg-slate-50 p-4 my-6 text-slate-800 text-sm">
  <strong>Quick Answer:</strong> A medical device regulatory consultant in India is a specialist who helps manufacturers and importers win CDSCO approval under the Medical Device Rules 2017. The consultant classifies the device, prepares the dossier, files on the SUGAM portal, answers queries, and supports quality and post-approval compliance.
</div>

<h2>What Is a Medical Device Regulatory Consultant in India?</h2>
<p>
A medical device regulatory consultant in India is an expert who turns Indian device law into a working project plan. The consultant knows what the Central Drugs Standard Control Organisation (CDSCO) expects, in which format, and in what order.
</p>
<p>
Think of the role as a translator. Your engineers speak in design specs and test reports. CDSCO speaks in forms, checklists, and rule numbers. The consultant connects the two.
</p>
<p>
Day to day, the work covers medical device classification, dossier preparation, online filing, query responses, audit support, and licence upkeep. Many firms also act as your <strong>Indian Authorized Agent</strong>, the local legal representative that every foreign manufacturer must appoint.
</p>
<p>
A consultant is not a distributor. A distributor sells your device. A regulatory partner makes sure you have the legal right to sell it, and that you keep that right after launch.
</p>

<h2>How CDSCO Regulates Medical Devices Under the Medical Device Rules 2017</h2>
<p>
India regulates devices through the Medical Device Rules 2017, which took effect on 1 January 2018, as the <a href="https://www.trade.gov/knowledge-product/india-healthcare" target="_blank" rel="noopener noreferrer">U.S. International Trade Administration's India healthcare guide</a> notes. The rules cover clinical investigation, manufacture, import, sale, and distribution.
</p>
<p>
CDSCO acts as the national regulator under the Ministry of Health and Family Welfare. It publishes notices, guidance, and application checklists on the <a href="https://cdsco.gov.in/opencms/opencms/en/Home/" target="_blank" rel="noopener noreferrer">official CDSCO website</a>. State Licensing Authorities handle manufacturing licences for lower-risk devices. CDSCO's Central Licensing Authority handles all imports and higher-risk manufacturing.
</p>
<p>
Licensing arrived in phases. Class A and B devices moved into mandatory licensing in October 2022, and Class C and D devices followed in October 2023. Today, almost every medical device sold in India needs a licence or registration.
</p>

<h3>The Four Risk Classes in Medical Device Classification</h3>
<p>
India groups devices into four classes based on risk. Your class decides the licensing authority, the evidence you must provide, and your likely timeline.
</p>

<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 1: CDSCO risk classes at a glance</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Class</th>
        <th class="p-3 border border-slate-200">Risk Level</th>
        <th class="p-3 border border-slate-200">Example Devices</th>
        <th class="p-3 border border-slate-200">Manufacturing Licence Authority</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold text-emerald-700">Class A</td>
        <td class="p-3 border border-slate-200">Low</td>
        <td class="p-3 border border-slate-200">Surgical dressings, alcohol swabs</td>
        <td class="p-3 border border-slate-200 font-mono">State Licensing Authority (MD-3 / MD-5)</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold text-blue-700">Class B</td>
        <td class="p-3 border border-slate-200">Low to moderate</td>
        <td class="p-3 border border-slate-200">Needle kits, cervical drains</td>
        <td class="p-3 border border-slate-200 font-mono">State Licensing Authority (MD-3 / MD-5)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold text-amber-700">Class C</td>
        <td class="p-3 border border-slate-200">Moderate to high</td>
        <td class="p-3 border border-slate-200">Bone cement, catheters</td>
        <td class="p-3 border border-slate-200 font-mono">Central Licensing Authority (MD-7 / MD-9)</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold text-rose-700">Class D</td>
        <td class="p-3 border border-slate-200">High</td>
        <td class="p-3 border border-slate-200">Coronary stents</td>
        <td class="p-3 border border-slate-200 font-mono">Central Licensing Authority (MD-7 / MD-9)</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
A wrong class can send your whole dossier back to the start. Borderline products need extra care, so read our guide on <a href="/insights/borderline-medical-device-classification-strategy">separating device qualification from risk classification</a> before you commit to one.
</p>

<h2>Why You Need a Medical Device Regulatory Consultant in India in 2026</h2>
<p>
Some teams file alone, and for a simple Class A product that can work. Most companies, however, lose more time on rework than they would spend on expert help.
</p>
<p>
The gains are practical. A consultant knows which documents reviewers expect, so your first submission is more complete. Clear files draw fewer queries. Foreign manufacturers get a legal presence in India without setting up a local company. Your engineers keep building while specialists handle regulatory compliance.
</p>
<p>
Good consultants also think past India. Your Indian dossier can reuse evidence from your US or EU files if you plan it early. Our guide on <a href="/insights/regulatory-compliance-strategy-global-medtech">sequencing global markets around reusable evidence</a> shows how.
</p>

<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 2: Filing in-house vs. a generic licensing agent vs. a specialist consultant</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Factor</th>
        <th class="p-3 border border-slate-200">Filing In-House</th>
        <th class="p-3 border border-slate-200">Generic Licensing Agent</th>
        <th class="p-3 border border-slate-200">Specialist Regulatory Consultant</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Classification</td>
        <td class="p-3 border border-slate-200">Depends on team experience</td>
        <td class="p-3 border border-slate-200">Often template-based</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Product-specific reasoning with a written justification</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Dossier quality</td>
        <td class="p-3 border border-slate-200">Gaps are common on a first attempt</td>
        <td class="p-3 border border-slate-200">Generic formats, frequent queries</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Built around your device evidence</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Query handling</td>
        <td class="p-3 border border-slate-200">Slow if the team is new to CDSCO</td>
        <td class="p-3 border border-slate-200">Forwards queries back to you</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Drafts technical responses with you</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Indian Authorized Agent</td>
        <td class="p-3 border border-slate-200">Not possible for foreign firms without an Indian entity</td>
        <td class="p-3 border border-slate-200">Usually offered</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Offered with regulatory oversight</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Quality system support</td>
        <td class="p-3 border border-slate-200">Needs a separate hire</td>
        <td class="p-3 border border-slate-200">Rarely included</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">ISO 13485 and audit readiness included or coordinated</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">After approval</td>
        <td class="p-3 border border-slate-200">Handled ad hoc</td>
        <td class="p-3 border border-slate-200">Often ends at the licence</td>
        <td class="p-3 border border-slate-200 text-emerald-800 font-medium">Ongoing vigilance, change control, and retention</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>What Services Does a Medical Device Regulatory Consultant in India Offer?</h2>
<p>
Scope varies from firm to firm. Use the five service areas below as a checklist when you compare proposals.
</p>

<h3>Import Licence and Indian Authorized Agent Support</h3>
<p>
Foreign manufacturers cannot hold an Indian import licence themselves. They appoint an Indian Authorized Agent through a power of attorney, and that agent applies to CDSCO on their behalf, as <a href="https://healthcareguys.com/2026/03/16/understanding-cdsco-import-licensing-a-2026-guide-for-medical-device-manufacturers/" target="_blank" rel="noopener noreferrer">The Healthcare Guys explain in their 2026 import licensing guide</a>.
</p>
<p>
The agent files Form MD-14 on the SUGAM portal and, after review, receives the licence in Form MD-15. A typical file includes a Free Sale Certificate from the home country, quality certificates, labels, and the Device Master File. NKB Regovanta explains this route on its <a href="/services/india">India CDSCO registration services page</a>.
</p>

<h3>Manufacturing Licence Support</h3>
<p>
Indian manufacturers need a manufacturing licence that fits both the product and the factory. Class A and B applications move through Forms MD-3 and MD-5, while Class C and D applications use Forms MD-7 and MD-9. Notified Bodies audit many Class A and B sites, and CDSCO inspects higher-risk ones.
</p>
<p>
Your Plant Master File and Device Master File must tell the same story. Read our guide on <a href="/insights/cdsco-medical-device-manufacturing-license-india">preparing product and site evidence together for CDSCO manufacturing licences</a> before you apply.
</p>

<h3>ISO 13485 Certification and Quality System Readiness</h3>
<p>
Indian rules expect a quality management system (QMS) aligned with ISO 13485, the device quality standard published by the <a href="https://www.iso.org/standard/59752.html" target="_blank" rel="noopener noreferrer">International Organization for Standardization</a>. Most consultants support ISO 13485 certification, internal audits, supplier controls, and CAPA (corrective and preventive action) records.
</p>
<p>
See our <a href="/services/iso-13485-implementation-certification-consulting">ISO 13485 implementation and certification consulting</a>, our article on <a href="/insights/qms-documentation-iso-13485-compliance">building ISO 13485 documentation auditors can trace</a>, and our guide to <a href="/insights/effective-capa-system-medical-devices">CAPA records that show the cause was addressed</a>. If you also sell in the US, Canada, or Australia, <a href="/services/mdsap">MDSAP audit readiness</a> can combine several audits into one.
</p>

<h3>Technical Documentation and Testing Strategy</h3>
<p>
Your technical documentation proves the device is safe and works as claimed. It covers design, risk management, verification tests, labels, and clinical evidence. Strong files cut queries. See our <a href="/services/medical-device-technical-documentation-consulting">medical device technical documentation consulting</a> and our piece on <a href="/insights/medical-device-documentation-compliance-to-evidence">turning compliance records into regulatory evidence</a>.
</p>
<p>
Plan testing before you book a lab. A wrong biocompatibility test can waste weeks, and our <a href="/insights/biological-evaluation-testing-medical-devices-iso-10993">ISO 10993 biological evaluation guide</a> helps you define the question first. Wireless devices may also need <a href="/services/wpc-approval-wireless-medical-devices-india">WPC approval for wireless medical devices</a> before import.
</p>

<h3>Post-Market Surveillance and Licence Upkeep</h3>
<p>
Approval starts a new phase. You still owe post-market surveillance, adverse event reporting, change notifications, and licence retention fees. Indian device licences generally stay valid as long as the holder pays the retention fee every five years, so a missed date becomes a real business risk.
</p>
<p>
Ask every consultant whether their support continues after the licence arrives. Our <a href="/services/medical-device-audit-compliance-support">audit and compliance support service</a> covers this stage.
</p>

<h2>Step-by-Step CDSCO Registration Process</h2>
<p>
The exact path depends on your device class and your role as a manufacturer or importer. Even so, most projects follow the same eight steps:
</p>
<ol class="list-decimal pl-6 space-y-2 my-4 text-slate-700">
  <li><strong>Confirm the product is a medical device:</strong> Check the intended use, claims, and mode of action.</li>
  <li><strong>Assign the risk class:</strong> Match the intended use to CDSCO's published classification lists.</li>
  <li><strong>Appoint an Indian Authorized Agent:</strong> Foreign manufacturers must do this before filing.</li>
  <li><strong>Build the dossier:</strong> Prepare the Device Master File, Plant Master File, labels, instructions for use, and certificates.</li>
  <li><strong>Confirm quality and testing:</strong> Check your ISO 13485 status and match test reports to the chosen standards.</li>
  <li><strong>File on the SUGAM portal:</strong> Upload the application and pay the government fee.</li>
  <li><strong>Answer queries:</strong> Reply to CDSCO questions clearly, completely, and on time.</li>
  <li><strong>Receive the licence:</strong> Then start post-market duties and diarise retention dates.</li>
</ol>
<p>
For a deeper walkthrough, read our guide to <a href="/insights/cdsco-medical-device-registration-guidelines-india">medical device registration in India</a>. If your device falls under several rule sets at once, a <a href="/insights/core-regulations-medical-device-global-compliance">medical device requirements register</a> keeps every obligation in one place.
</p>

<h2>2026 Rule Changes Every Regulatory Consultant in India Is Tracking</h2>
<p>
Indian rules keep moving. That is one more reason to work with a medical device regulatory consultant in India who reads every notification.
</p>
<p>
On 14 August 2026, the Ministry of Health and Family Welfare notified the Medical Devices (Third Amendment) Rules, 2026 through G.S.R. 744(E). Two changes stand out:
</p>
<ul>
  <li><strong>EU Reference Recognition:</strong> EU countries now appear in Rule 63(1), proviso (iv). Rule 63 deals with clinical investigation requirements, so EU-approved devices may have a stronger case for relying on overseas clinical data instead of a local study. It is not an automatic exemption. CDSCO still reviews each device on its own facts.</li>
  <li><strong>QMS for Class A NSNM:</strong> The provisions for Class A non-sterile, non-measuring devices now refer directly to quality management system requirements. Self-declaration alone is no longer a safe assumption for low-risk products.</li>
</ul>
<p>
We break down both changes in our <a href="/insights/india-mdr-2026-rule-63">Rule 63 amendment guide</a>. In practice, every device still needs its own assessment.
</p>

<h2>Medical Device Regulatory Consulting in India: Foreign Manufacturers vs. Indian Startups</h2>

<h3>Foreign Manufacturers Entering India</h3>
<p>
Foreign companies need a trusted Indian Authorized Agent, clean import paperwork, and a plan for Indian labelling. Imports still meet an estimated 70 to 80 percent of domestic demand, according to the <a href="https://ianslive.in/indias-medical-devices-market-likely-to-hit-501-bn-by-2030--20260212160702" target="_blank" rel="noopener noreferrer">same IANS market report</a>, so CDSCO handles a steady stream of import files.
</p>
<p>
Look for a consultant who checks your CE or FDA evidence against Indian expectations instead of repackaging it. EU manufacturers should also ask how the 2026 Rule 63 change applies to their specific device.
</p>

<h3>Indian Startups and MSMEs</h3>
<p>
Startups face a different problem. They often build the quality system and the product at the same time, with a small team. A consultant helps them set up a lean ISO 13485 system, choose the right manufacturing licence, and prepare for a Notified Body or CDSCO audit.
</p>
<p>
Early advice saves money. A startup that picks the wrong class or skips design controls may rebuild months of records later. If you plan to export, ask about <a href="/services/global-market-access-consulting-medical-devices">global market access strategy</a> from day one. Diagnostics companies can start with our <a href="/industries/ivd">in vitro diagnostics industry page</a>.
</p>

<h2>How to Choose the Best Medical Device Regulatory Consultant in India</h2>
<p>
Many firms call themselves the best. Test the claim instead of trusting it. The <a href="https://seed.nih.gov/sites/default/files/2023-10/Guidance-and-Considerations-on-Selecting-a-Regulatory-Consultant.pdf" target="_blank" rel="noopener noreferrer">NIH SEED guidance on selecting a regulatory consultant</a> suggests looking for strength in three areas at once: quality, regulatory, and technical. Use these criteria:
</p>
<ul>
  <li><strong>Proven CDSCO experience:</strong> Ask for examples in your risk class and review published <a href="/case-studies">case studies</a>.</li>
  <li><strong>Authorized Agent capability:</strong> Confirm the firm can legally represent you if you manufacture abroad.</li>
  <li><strong>Quality system depth:</strong> Check QMS skills, because many regulatory gaps start inside the quality system.</li>
  <li><strong>Written scope and fees:</strong> Demand a proposal that lists deliverables, government fees, and exclusions.</li>
  <li><strong>Named contacts:</strong> Get the names of the people handling your file and their agreed response times.</li>
  <li><strong>Global reach:</strong> Choose a partner that also handles FDA, EU MDR, and other markets if you plan to export.</li>
  <li><strong>After-approval support:</strong> Confirm help with changes, vigilance reporting, and retention.</li>
</ul>

<h2>Red Flags When Hiring a Regulatory Consultant</h2>
<p>
Walk away from anyone who guarantees approval, because no consultant controls the regulator's decision. Vague pricing is another warning sign, since hidden costs tend to appear after you sign.
</p>
<p>
Watch for firms that refuse a written scope, reuse copy-paste dossiers, or cannot name the expert who will review your file. If you spot two or more of these signs, keep looking.
</p>

<h2>Cost and Timeline of Hiring a Medical Device Regulatory Consultant in India</h2>
<p>
Fees vary widely, so never compare quotes without comparing scope. Government fees sit apart from consulting fees, and each provider should list both. The table shows the factors that move cost and time.
</p>

<div class="table-responsive my-6">
  <table class="w-full text-left border-collapse border border-slate-200 text-sm">
    <caption class="text-left font-semibold text-slate-800 pb-2">Table 3: What drives consulting cost and approval time</caption>
    <thead>
      <tr class="bg-slate-100 text-slate-800">
        <th class="p-3 border border-slate-200">Factor</th>
        <th class="p-3 border border-slate-200">Effect on Cost</th>
        <th class="p-3 border border-slate-200">Effect on Timeline</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Risk class</td>
        <td class="p-3 border border-slate-200">Higher classes need more evidence and review work</td>
        <td class="p-3 border border-slate-200">Class C and D usually take longer than Class A and B</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Number of devices</td>
        <td class="p-3 border border-slate-200">More models add dossier work</td>
        <td class="p-3 border border-slate-200">Sensible grouping can reduce separate filings</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Applicant role</td>
        <td class="p-3 border border-slate-200">Import and manufacturing routes need different documents</td>
        <td class="p-3 border border-slate-200">Manufacturing adds site audits</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">Existing documentation</td>
        <td class="p-3 border border-slate-200">Weak files need rework before filing</td>
        <td class="p-3 border border-slate-200">Complete files move faster</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Testing needs</td>
        <td class="p-3 border border-slate-200">New tests add laboratory fees</td>
        <td class="p-3 border border-slate-200">Lab availability can delay the filing date</td>
      </tr>
      <tr class="bg-slate-50">
        <td class="p-3 border border-slate-200 font-semibold">CDSCO queries</td>
        <td class="p-3 border border-slate-200">Each round adds response work</td>
        <td class="p-3 border border-slate-200">Each query cycle extends the review</td>
      </tr>
    </tbody>
  </table>
</div>
<p>
Documentation quality is the factor you control most. A review before filing often pays for itself, which is why our <a href="/services/medical-device-ivd-regulatory-due-diligence">regulatory due diligence service for devices and IVDs</a> checks your files before CDSCO does.
</p>

<h2>What Reddit Communities Say About Regulatory Consultants</h2>
<p>
Regulatory professionals compare notes in public forums. On Reddit, the <a href="https://www.reddit.com/r/regulatoryaffairs/" target="_blank" rel="noopener noreferrer">r/regulatoryaffairs community</a> and the <a href="https://www.reddit.com/r/medicaldevices/" target="_blank" rel="noopener noreferrer">r/medicaldevices community</a> host open discussions about submissions, quality systems, and working with outside consultants.
</p>
<p>
Use these communities to ask practical questions, such as how other teams scoped a consulting contract or handled a hard regulator query. Treat the answers as opinion, not legal advice, and confirm details against CDSCO notices or a qualified expert.
</p>

<h2>Why Manufacturers Choose NKB Regovanta as Their Medical Device Regulatory Consultant in India</h2>
<p>
NKB Regovanta is an India-based regulatory, quality, and market access firm. The team has worked on regulatory and quality projects since 2018 and reports 151+ completed projects for 21+ global clients in 15+ countries. It operates from Lucknow, India, and Delaware, USA.
</p>
<p>
Clients get CDSCO import and manufacturing licence support, Authorized Indian Representative services, ISO 13485 and MDSAP readiness, technical file and DHF preparation, and support for FDA 510(k), EU MDR/IVDR, and eight other markets.
</p>
<p>
Client testimonials describe the team as structured, responsive, and practical. Learn more <a href="/about">about NKB Regovanta</a> or explore the <a href="/services">full services directory</a>.
</p>

<h2>Frequently Asked Questions About Medical Device Regulatory Consultants in India</h2>

<div class="space-y-4 my-6">
  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What does a medical device regulatory consultant in India do?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      A medical device regulatory consultant in India guides manufacturers and importers through CDSCO approval. The consultant confirms whether the product counts as a device, assigns the risk class, and prepares the Device Master File and Plant Master File. They then file on the SUGAM portal, answer regulator queries, and support audits. Many consultants also act as the Indian Authorized Agent for foreign firms and help with post-approval duties such as change notifications and retention fees.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Is it mandatory to hire a medical device regulatory consultant in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      No law forces you to hire a medical device regulatory consultant in India. However, a foreign manufacturer must appoint an Indian Authorized Agent to hold the import licence, and many choose a consultant for that role. Indian manufacturers can file on their own. Still, most first-time applicants benefit from expert review, because incomplete files trigger queries that add weeks or months to the timeline.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">How much does a medical device regulatory consultant in India charge?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      A medical device regulatory consultant in India usually prices work by scope, not by a fixed rate. The device class, the number of models, the applicant role, testing needs, and the state of your documents all change the quote. Government fees are separate from consulting fees. Ask each provider for a written proposal that lists every deliverable and exclusion, so you can compare offers fairly and avoid surprise costs later.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">How long does CDSCO medical device registration take?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Timelines for CDSCO registration depend on the device class, the completeness of your file, and the number of query rounds. Higher-risk Class C and D devices usually need more review than Class A and B devices. Manufacturing applications may also involve site audits. The best way to shorten the process is a complete, consistent first submission, which is where an experienced consultant adds the most value.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What is the difference between an Indian Authorized Agent and a regulatory consultant?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      An Indian Authorized Agent is the legal representative that a foreign manufacturer appoints through a power of attorney. The agent holds the import licence and speaks to CDSCO. A regulatory consultant provides the expertise behind the filing, such as classification, dossier writing, and query responses. Some firms offer both roles together, which keeps legal responsibility and technical knowledge in one place.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Does a CE mark or FDA clearance speed up approval in India?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Existing approvals can help a medical device regulatory consultant in India build a stronger file, but they do not replace Indian licensing. The 2026 amendment added EU countries to Rule 63(1), proviso (iv), which may support reliance on overseas clinical data for some devices. CDSCO still reviews each product separately, so every device needs its own pathway assessment before you file.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What is the difference between an import licence and a manufacturing licence?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      An import licence lets an Indian Authorized Agent bring foreign-made devices into India, using Forms MD-14 and MD-15. A manufacturing licence lets a company produce devices inside India, using Forms MD-3 to MD-9 depending on the class. Each route needs different documents and evidence. A medical device regulatory consultant in India can confirm which route fits your business model.
    </p>
  </div>
</div>

<h2>Questions &amp; Answers</h2>

<div class="space-y-4 my-6">
  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">How do I find a good medical device regulatory consultant in India near me?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Look for firms with proven CDSCO experience in your device class rather than the closest office. Compare written scopes, ask for client references, and confirm the firm can act as your Indian Authorized Agent if needed. Most regulatory work happens online through the SUGAM portal, so experience matters more than location.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Which medical devices need CDSCO approval?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      Almost every medical device sold in India needs CDSCO approval or registration under the Medical Device Rules 2017. That covers low-risk Class A products through high-risk Class D implants. Your risk class decides the licensing authority, the forms you file, and the evidence you must provide.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">Can a foreign company sell medical devices in India directly?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      No. A foreign company cannot hold an Indian import licence itself. It must appoint an Indian Authorized Agent, who applies for the licence in Form MD-14, receives it in Form MD-15, and represents the manufacturer before CDSCO for queries, audits, and post-market duties.
    </p>
  </div>

  <div class="border-b border-slate-200 pb-4">
    <h3 class="text-base font-semibold text-slate-900">What documents do I need for CDSCO medical device registration?</h3>
    <p class="mt-2 text-sm text-slate-700 leading-relaxed">
      You typically need a Device Master File, a Plant Master File, labels and instructions for use, test reports, and an ISO 13485 certificate. Importers also need a power of attorney and a Free Sale Certificate from the home country. The exact checklist depends on your device class and route.
    </p>
  </div>
</div>

<div class="rounded-xl border border-blue-100 bg-blue-50/50 p-6 my-8">
  <p class="text-base font-medium text-slate-800 leading-relaxed">
    Choosing a medical device regulatory consultant in India is one of the earliest decisions that shapes your launch timeline. The right partner classifies your device correctly, files a complete dossier, and keeps your licence healthy long after approval. Start by defining your device, its class, and your role as manufacturer or importer. Then compare consultants on experience, scope, and after-approval support. If you want a second opinion from a medical device regulatory consultant in India that combines CDSCO, quality, and global market access expertise, review NKB Regovanta's <a href="/services/india" class="font-semibold text-[#0b3a96] underline">India CDSCO registration services</a> and <a href="/contact" class="font-semibold text-[#0b3a96] underline">book a pathway review with the regulatory team</a>. A clear plan today saves months of queries tomorrow.
  </p>
</div>
`;

async function run() {
  console.log('--- Starting Blog Updates & Insertions ---');

  // 1. UPDATE BLOG 1 (how-to-register-medical-device-in-india)
  console.log('Updating Blog 1...');
  const blog1Slug = 'how-to-register-medical-device-in-india';
  const blog1OldSlug = 'how-to-register-a-medical-device-in-india-2026-guide';
  
  // Update blog_posts row
  const { data: updatedPost1, error: err1 } = await supabase
    .from('blog_posts')
    .update({
      title: 'How to Register a Medical Device in India | The Complete 2026 CDSCO Guide',
      slug: blog1Slug,
      content_html: blog1Html.trim(),
      excerpt: 'Learn how to register a medical device in India: CDSCO classes, MD forms, documents, fees and timelines explained step by step for 2026.',
      featured_image: '/assets/brain/india_cdsco_market_1786307143373.png',
      featured_image_alt: 'How to Register a Medical Device in India - 2026 CDSCO Regulatory Guide',
      status: 'published',
      category_id: CATEGORY_ID,
      author_id: AUTHOR_ID,
      updated_at: new Date().toISOString()
    })
    .eq('id', 'c1bef958-7abf-416d-a159-88bb7857e712')
    .select();

  if (err1) console.error('Error updating Blog 1:', err1);
  else console.log('Successfully updated Blog 1:', updatedPost1[0]?.slug);

  // Upsert SEO Meta for Blog 1
  const { error: seoErr1 } = await supabase
    .from('seo_meta')
    .upsert({
      target_url: `/insights/${blog1Slug}`,
      seo_title: 'How to Register a Medical Device in India: 2026 Guide',
      meta_description: 'Learn how to register a medical device in India: CDSCO classes, MD forms, documents, fees and timelines explained step by step for 2026.',
      focus_keyword: 'how to register a medical device in India',
      secondary_keywords: ['CDSCO registration', 'medical device license in India', 'Medical Devices Rules 2017', 'risk classification', 'MD-15 import license'],
      canonical_url: `https://www.nkbregovanta.com/insights/${blog1Slug}`,
      canonical_type: 'self',
      robots_index: 'index',
      robots_follow: 'follow',
      og_title: 'How to Register a Medical Device in India: 2026 Guide',
      og_description: 'Learn how to register a medical device in India: CDSCO classes, MD forms, documents, fees and timelines explained step by step for 2026.',
      og_image: 'https://www.nkbregovanta.com/assets/brain/india_cdsco_market_1786307143373.png',
      updated_at: new Date().toISOString()
    }, { onConflict: 'target_url' });
  if (seoErr1) console.error('SEO Meta Err 1:', seoErr1);

  // Also add 301 redirect from old slug to new slug
  const { error: redirErr } = await supabase
    .from('redirects')
    .upsert({
      old_path: `/insights/${blog1OldSlug}`,
      new_path: `/insights/${blog1Slug}`,
      status_code: 301,
      is_active: true,
      notes: 'Redirect old blog slug to standard concise slug',
      updated_at: new Date().toISOString()
    }, { onConflict: 'old_path' });
  if (redirErr) console.error('Redirect Err:', redirErr);


  // 2. INSERT / UPSERT BLOG 2 (cdsco-consultant-medical-devices-india)
  console.log('Inserting/Upserting Blog 2...');
  const blog2Slug = 'cdsco-consultant-medical-devices-india';
  
  // Check if blog 2 exists
  const { data: existingB2 } = await supabase.from('blog_posts').select('id').eq('slug', blog2Slug).maybeSingle();

  const blog2Payload = {
    title: 'CDSCO Consultant for Medical Devices in India | 2026 Guide to Licences, Timelines and the Right Partner',
    slug: blog2Slug,
    content_html: blog2Html.trim(),
    excerpt: 'Need a CDSCO consultant for medical devices in India? See licence routes, timelines, costs and 2026 rule changes, and avoid the errors that stall approvals.',
    featured_image: '/assets/insights/medical_audit_consult.jpg',
    featured_image_alt: 'CDSCO Consultant for Medical Devices in India - Regulatory Compliance & Licensing Guide 2026',
    status: 'published',
    category_id: CATEGORY_ID,
    author_id: AUTHOR_ID,
    publish_date_ist: '2026-09-22T10:00:00+05:30',
    updated_at: new Date().toISOString()
  };

  let b2Id = existingB2?.id;
  if (b2Id) {
    await supabase.from('blog_posts').update(blog2Payload).eq('id', b2Id);
    console.log('Updated existing Blog 2:', b2Id);
  } else {
    const { data: inserted, error: insertErr } = await supabase.from('blog_posts').insert(blog2Payload).select();
    if (insertErr) console.error('Error inserting Blog 2:', insertErr);
    else {
      b2Id = inserted[0]?.id;
      console.log('Inserted new Blog 2:', b2Id);
    }
  }

  // SEO Meta for Blog 2
  await supabase.from('seo_meta').upsert({
    target_url: `/insights/${blog2Slug}`,
    seo_title: 'CDSCO Consultant for Medical Devices in India | 2026 Guide',
    meta_description: 'Need a CDSCO consultant for medical devices in India? See licence routes, timelines, costs and 2026 rule changes, and avoid the errors that stall approvals.',
    focus_keyword: 'CDSCO consultant for medical devices in India',
    secondary_keywords: ['medical device registration in India', 'Medical Devices Rules 2017', 'CDSCO import license', 'Indian Authorized Agent', 'SUGAM portal'],
    canonical_url: `https://www.nkbregovanta.com/insights/${blog2Slug}`,
    canonical_type: 'self',
    robots_index: 'index',
    robots_follow: 'follow',
    og_title: 'CDSCO Consultant for Medical Devices in India | 2026 Guide',
    og_description: 'Need a CDSCO consultant for medical devices in India? See licence routes, timelines, costs and 2026 rule changes, and avoid the errors that stall approvals.',
    og_image: 'https://www.nkbregovanta.com/assets/insights/medical_audit_consult.jpg',
    updated_at: new Date().toISOString()
  }, { onConflict: 'target_url' });


  // 3. INSERT / UPSERT BLOG 3 (medical-device-regulatory-consultant-india)
  console.log('Inserting/Upserting Blog 3...');
  const blog3Slug = 'medical-device-regulatory-consultant-india';
  
  const { data: existingB3 } = await supabase.from('blog_posts').select('id').eq('slug', blog3Slug).maybeSingle();

  const blog3Payload = {
    title: 'Medical Device Regulatory Consultant in India | The 2026 Guide to Choosing the Right Partner',
    slug: blog3Slug,
    content_html: blog3Html.trim(),
    excerpt: 'Need a medical device regulatory consultant in India? Learn what they do, CDSCO steps, 2026 rule changes, costs, and how to pick the right partner.',
    featured_image: '/assets/insights/regulatory_dossier_review.jpg',
    featured_image_alt: 'Medical Device Regulatory Consultant in India - CDSCO Guidelines & Compliance Strategy 2026',
    status: 'published',
    category_id: CATEGORY_ID,
    author_id: AUTHOR_ID,
    publish_date_ist: '2026-09-22T11:00:00+05:30',
    updated_at: new Date().toISOString()
  };

  let b3Id = existingB3?.id;
  if (b3Id) {
    await supabase.from('blog_posts').update(blog3Payload).eq('id', b3Id);
    console.log('Updated existing Blog 3:', b3Id);
  } else {
    const { data: inserted, error: insertErr } = await supabase.from('blog_posts').insert(blog3Payload).select();
    if (insertErr) console.error('Error inserting Blog 3:', insertErr);
    else {
      b3Id = inserted[0]?.id;
      console.log('Inserted new Blog 3:', b3Id);
    }
  }

  // SEO Meta for Blog 3
  await supabase.from('seo_meta').upsert({
    target_url: `/insights/${blog3Slug}`,
    seo_title: 'Medical Device Regulatory Consultant in India: 2026 Guide',
    meta_description: 'Need a medical device regulatory consultant in India? Learn what they do, CDSCO steps, 2026 rule changes, costs, and how to pick the right partner.',
    focus_keyword: 'Medical device regulatory consultant in India',
    secondary_keywords: ['CDSCO registration', 'Medical Device Rules 2017', 'Indian Authorized Agent', 'SUGAM portal', 'import licence', 'ISO 13485 certification'],
    canonical_url: `https://www.nkbregovanta.com/insights/${blog3Slug}`,
    canonical_type: 'self',
    robots_index: 'index',
    robots_follow: 'follow',
    og_title: 'Medical Device Regulatory Consultant in India: 2026 Guide',
    og_description: 'Need a medical device regulatory consultant in India? Learn what they do, CDSCO steps, 2026 rule changes, costs, and how to pick the right partner.',
    og_image: 'https://www.nkbregovanta.com/assets/insights/regulatory_dossier_review.jpg',
    updated_at: new Date().toISOString()
  }, { onConflict: 'target_url' });

  console.log('--- Finished Blog Updates & Insertions ---');
}

run();
