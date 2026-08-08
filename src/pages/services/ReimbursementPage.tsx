import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const ReimbursementPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Reimbursement&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            HELPING YOU ENSURE COVERAGE FOR YOUR NOVEL MEDICAL DEVICE
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">
            Let us help remove medical device reimbursement barriers on your path to coverage and market adoption.
          </p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "300", label: "Clients Assisted" },
            { value: "15", label: "Major Global Geographies Served" },
            { value: "85", label: "Years of Experience" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <p className="text-3xl font-black text-[#F5C754]">{s.value}</p>
              <p className="text-xs text-white/70 uppercase tracking-wide mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-5xl py-16">
          <Section title="Overview">
            <p>With consulting expertise and a partner network in the most prominent markets of the world, NKB Regovanta brings clarity and focused direction to your reimbursement strategy. We understand how to plan for unforeseen reimbursement challenges and help you proactively tackle changing global requirements to achieve market commercialization.</p>
            <p>MedTech Sponsors often face challenges when bringing novel technologies to the marketplace. Healthcare payment and medical device reimbursement systems throughout the world are complex and vary widely from one country to another, making it critical to understand potential reimbursement barriers.</p>
            <p>NKB Regovanta's team of MedTech reimbursement consultants offers a full continuum of reimbursement services and solutions for new and existing medical technologies. Our teams are experts in all aspects of MedTech reimbursement strategy, including payer relations, medical policy research, coverage advocacy, HCPCS and CPT code analysis/applications, clinical trial coverage and health economic analysis.</p>
          </Section>

          <Section title="MedTech Reimbursement Strategy">
            <p>NKB Regovanta understands government and private payer coverage and payment policies under the current global health economics environment. Our team designs strategies surrounding specific objectives which are targeted toward reimbursement barriers that would otherwise limit broad market adoption of emerging medical technology.</p>
            <div className="space-y-5 mt-4">
              {[
                {
                  title: "Coding Analysis",
                  body: "Coding analysis is a vital component of our reimbursement services, involving a detailed examination of the reimbursement codes associated with a particular medical device. Our coding analysis ensures that the medical device is associated with the most relevant and up-to-date codes, maximizing the chances of accurate and timely reimbursement.",
                },
                {
                  title: "Reimbursement Landscape Assessment",
                  body: "A Reimbursement Landscape Assessment is a research-based report that identifies possible barriers to appropriate coding, coverage and payment for a specific medical technology. During an assessment, variations in clinical indications for coverage — based on service setting (inpatient vs. outpatient, hospital, clinic, home care) — are identified, as are payer mix and comparable technologies.",
                },
                {
                  title: "Medical Director Interviews and Physician Advisory Boards",
                  body: "NKB Regovanta conducts primary research with existing health plan Medical Directors to evaluate payer reaction to new technologies, either pre-release or prior to final design. The former can help guide the extent of payer relations work that will be required for successful medical policy coverage.",
                },
                {
                  title: "Reimbursement Due Diligence for Investors",
                  body: "NKB Regovanta can perform Reimbursement Due Diligence for venture capital companies and other investors to assess market risk for reimbursement prior to investment.",
                },
              ].map((s) => (
                <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-base font-bold text-[hsl(195_65%_20%)] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="HCPCS and CPT Code Applications">
            <p>Healthcare Common Procedure Coding System (HCPCS) and Current Procedural Terminology (CPT) Codes provide the pathway for MedTech reimbursement in the U.S. HCPCS coding should play an essential role in any MedTech Reimbursement Strategy.</p>
            <p>In the U.S., when new HCPCS Level I (CPT) or Level II coding is required, NKB Regovanta successfully guides clients to achieve new codes through the American Medical Association (AMA) CPT™ process or the Centers for Medicare and Medicaid (CMS) HCPCS Workgroup process. We maintain strong relationships with medical societies whose sponsorship is critical to success throughout medical technology adoption.</p>
          </Section>

          <Section title="Health Economics Analysis">
            <p>Health Economics Analysis has become increasingly important as payers consider evidence of cost, as well as clinical effectiveness, before covering new technology and services. NKB Regovanta works with MedTech companies with varying types of analyses which may be required to demonstrate cost effectiveness:</p>
            <ul className="space-y-2 mt-3">
              {[
                { title: "Cost Effectiveness Analysis (CEA)", desc: "Used to evaluate the relative cost of new technologies or treatments and is critical to payers when new treatments are more expensive but also more effective." },
                { title: "Cost Minimization Analysis", desc: "Used when new treatment is less expensive and at least as effective." },
                { title: "Budget Impact Model", desc: "A comprehensive study of third-party payer payments, technology costs and savings that will result from the adoption of the proposed technology." },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span><strong>{item.title}:</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Medical Policy Research, Coverage Advocacy and Payer Engagement">
            <p>NKB Regovanta helps you open the doors for coverage by conducting Medical Policy Research, Coverage Advocacy and Payer Engagement to provide insight into the probable coverage status of new and emerging technologies among government and private health insurers around the globe.</p>
            <p>When medical coverage policies do not cover specific technologies, or they do not exist, NKB Regovanta's experts will meet with health plan medical policy makers to advocate for change. Using existing cost-effectiveness tools and available clinical evidence as support for coverage adoption, NKB Regovanta will engage with third-party payers to convey your device's value story.</p>
          </Section>

          <Section title="Coverage Throughout IDE Clinical Trials">
            <p>Many device manufacturers do not realize that Medicare, as well as some commercial insurers, will cover new devices during a Category B Investigational Device Exemption (IDE) clinical study. We work with Medicare and health insurance providers to set up payment and billing systems for IDE studies to support ongoing provider enrollment within clinical studies.</p>
          </Section>

          <Section title="Product Adoption Support">
            <p>NKB Regovanta provides payer relations expertise for the long haul by delivering global capabilities and special services throughout the product adoption phase:</p>
            <ul className="space-y-2 mt-3">
              {[
                "Reimbursement Guides: NKB Regovanta's global reimbursement experts assist clinical users in providing guidance to hospitals and physicians for proper billing and coding.",
                "FAQs for Payers: We help Sponsors create a list of frequently asked questions for payers to help communicate key information for use by hospitals and physicians.",
                "Draft Appeal Letters: NKB Regovanta can draft appeal standardized letters for clients who want to help physicians readily appeal insurance denials.",
                "FAQs for Sales Staff: NKB Regovanta provides fundamental education for sales staff to accurately pass onto physicians, nurses and hospital administration.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Ready to Remove Reimbursement Barriers?</h2>
            <p className="text-white/70 mb-6">Contact our expert reimbursement team to build your global coverage strategy.</p>
            <Button asChild className="btn-gradient rounded-full px-8 py-3 font-bold">
              <Link to="/locations-contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ReimbursementPage;
