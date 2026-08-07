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

// ==========================================
// BIOLOGICAL SAFETY PAGE
// ==========================================
const BiologicalSafetyPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Biological Safety&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">HELPING SPONSORS ENSURE BIOLOGICAL SAFETY COMPLIANCE</h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">HAVING AN EXPERIENCED BIOLOGICAL SAFETY CONSULTING PARTNER IS INVALUABLE when seeking medical device compliance and approval.</p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base"><Link to="/locations-contact">Contact Us</Link></Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "700+", label: "Biological Safety Projects Annually" },
            { value: "12", label: "Medical Device DABT Toxicologists" },
            { value: "55+", label: "Years of Experience" },
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
          <Section title="Helping You Safeguard the Biological Safety of Your Medical Device">
            <p>A wide range of medical devices are introduced almost daily in today's global marketplace, which is often marked with the challenge of adhering to the industry's constantly-changing international standards and guidelines. Planning for biological safety is as much a business necessity as it is a regulatory requirement.</p>
            <p>Any novel device must undergo assessment for biological hazards, risk characterization and toxicological risk assessment while also meeting the test requirements of varying international marketplaces and geographies.</p>
            <p>At NKB Regovanta, we offer a range of biological safety solutions to ensure your medical device development program is compliant, while also focusing on the most efficient means possible to complete necessary tests.</p>
          </Section>

          <Section title="Biological Evaluation Plan">
            <p>This is the first step of the biological evaluation for medical devices. This step is most often utilized for new devices not previously marketed, and may be needed for existing devices undergoing modifications.</p>
            <p>The Biological Evaluation Plan summarizes and characterizes a medical device based on the nature and duration of body contact, assesses the selection and materials of construction, reviews the manufacturing processes, identifies the biological endpoints of concern, evaluates any existing research data available and recommends and supports a strategy (plan) to address areas of remaining biological risk, which may include both chemical and biological testing.</p>
          </Section>

          <Section title="Biological Evaluation Report">
            <p>As part of a Biological Evaluation Report, NKB Regovanta's biological safety experts perform an overall evaluation of a device/family of devices with specific consideration to the type of patient contact and intended clinical use, potential hazards associated with the materials of construction, the history of clinical use of the materials of construction, manufacturing process information, the results of biocompatibility and chemical characterization testing performed on the device, the clinical history of the device, and other information available within literature.</p>
            <p>The biological evaluation report is prepared according to the current requirements for the biological evaluation of medical devices (i.e. ISO 10993-1, FDA Biocompatibility Guidance, ISO 14971) using a risk management-inspired structure:</p>
            <ul className="space-y-2 mt-3">
              {[
                "Risk analysis, including a review of raw materials data (at a minimum), manufacturing processes and when available, non-clinical studies, clinical data and post-market surveillance data",
                "Risk evaluation (discussion based on gathered information to determine whether or not risk control measures are necessary)",
                "Risk control (testing plan, including chemical characterization and/or biological tests to mitigate identified/remaining biological risks)",
                "Overall risk assessment (after implementation of risk control measures, to determine whether implemented measures are sufficient)",
                "Re-assessment of risk (in the case of device changes)",
                "Conclusion",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Toxicological and Equivalency Assessments">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[hsl(195_65%_20%)] mb-2">Toxicological Risk Assessment</h3>
                <p>This assessment evaluates the toxicity of individual chemical ingredients of the formulation used to manufacture a particular medical device. The assessment typically includes tests for chemical composition, extractables and/or leachables, and evaluation of any degradable or leachable materials to determine patient biological risk.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[hsl(195_65%_20%)] mb-2">Equivalency Assessment</h3>
                <p>NKB Regovanta's Equivalency Assessment evaluates the equivalency of a device to another similar marketed product. A typical request includes equivalency regarding data and properties for clinical, technical and biological parameters, methods of use, materials as well as equivalent clinical, technical and biological properties performance.</p>
              </div>
            </div>
          </Section>

          <Section title="Gap Analyses and Peer Review">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Gap Analyses",
                  body: "NKB Regovanta offers comprehensive analyses detailing acceptable and deficient areas (Gap) between an existing set of data and new regulatory requirements for devices, including reports of remediation and sequence recommendations.",
                },
                {
                  title: "Peer Review",
                  body: "NKB Regovanta's team of more than eight Board Certified Toxicologists (DABTs) are available to provide credibility as a third party reviewer and to vigorously critique scientific claims and research to ensure integrity of data and resultant claims.",
                },
                {
                  title: "Adverse Test Result Technical Memo",
                  body: "NKB Regovanta's technical experts can assist in delivering technical clarity of adverse results, associated implications and relevance to the known biological/toxicological endpoints relative to a specific medical device and regulatory pathway(s).",
                },
                {
                  title: "Training",
                  body: "NKB Regovanta provides industry-leading biological safety training to the medical device industry. With over 2,000 attendees to date, our customized approach to applying ISO 10993 principles and other regulatory guidance in every day scenarios is unrivaled within the medical device marketplace.",
                },
              ].map((s) => (
                <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-base font-bold text-[hsl(195_65%_20%)] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Ready to Ensure Your Device's Biological Safety?</h2>
            <p className="text-white/70 mb-6">Contact our team of expert toxicologists and biological safety consultants.</p>
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

export default BiologicalSafetyPage;
