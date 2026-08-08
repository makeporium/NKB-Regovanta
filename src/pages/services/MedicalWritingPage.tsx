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

const MedicalWritingPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Medical Writing&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            MEDICAL WRITING SERVICES PROVEN TO ACCELERATE COMMERCIALIZATION OBJECTIVES
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">
            OUR TEAM OF WORLD-CLASS CLINICAL MEDICAL WRITERS IS WITH YOU EVERY STEP OF THE WAY TO HELP SUPPORT DEVICE APPROVAL, MARKET INTRODUCTION AND POST-MARKET OBJECTIVES.
          </p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "200", label: "CERs/PERs Annually" },
            { value: ">90%", label: "Medical Writers with Advanced Degrees" },
            { value: ">100", label: "Years of Medical Device Experience" },
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
          <Section title="Proven Medical Writing Services You Can Rely On">
            <p>NKB Regovanta provides a wide range of specialized medical writing, manuscript submission and evidence communication services. Our world-class team of clinical medical writers is expert at identifying, organizing, interpreting and presenting clinical data accurately and professionally for submission to various regulatory bodies.</p>
            <p>NKB Regovanta's medical writing services team is also experienced and skilled in developing Clinical Evaluation Plans and Reports to comply with the Medical Device Regulation (MDR) and MEDDEV 2.7.1 rev. 4, as well as Performance Evaluation Plans and Reports to comply with the In Vitro Diagnostic Regulation (IVDR), in collaboration with our EU Regulatory Team.</p>
            <p>NKB Regovanta's global medical writing services team is comprised of dedicated medical writers from a diverse range of clinical and scientific backgrounds of whom &gt;90% hold advanced degrees. Working in close partnership with NKB Regovanta's Regulatory, Clinical and Biostatistics Teams, our medical writers are highly responsive to individual needs and are instrumental in helping clients achieve commercial objectives.</p>
          </Section>

          <Section title="Clinical Evaluation Reports and Plans (CERs | CEPs) / Performance Evaluation Reports and Plans (PERs | PEPs)">
            <p>Clinical Evaluation Reports (CERs) / Performance Evaluation Reports (PERs) are vital technical documents required for market approval of medical devices and In Vitro Diagnostics (IVDs) within a variety of markets. Clinical evaluation is a structured and ongoing process, involving collection, appraisal and analysis of clinical data relating to the device.</p>
            <p>NKB Regovanta's team of CER/PER medical writing experts is highly qualified and skilled, producing approximately 200 CERs/PERs annually in compliance with market-specific requirements. Collaborating with NKB Regovanta's Regulatory Team, who have worked for various Notified Bodies, our medical writers are equipped with in-depth knowledge of regulatory requirements.</p>
            <p>NKB Regovanta provides CERs/PERs and CEPs/PEPs covering all device classes and therapeutic areas, including combination products. Clinical and Performance Evaluation services include:</p>
            <ul className="space-y-2 mt-3">
              {["Ad-Hoc Medical Writing support","Medical Writing of plans and reports","Maintenance or regular updates of plans and reports","Bundled plans and reports, covering multiple product variants","Clinical and Performance Evaluation guidance, training and SOP writing/updating","Gap analyses per international guidance","Systemic literature review","Physician or peer review"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" /><span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Clinical Literature Reviews">
            <p>Clinical literature reviews can be valuable in strengthening a manufacturer's product portfolio. A thorough search and robust synthesis of available literature relevant to a particular medical device may provide important information to guide further product development, reveal much-needed evidence to substantiate current clinical indications, identify potential 'off-label' applications or flag critical adverse event (AE) data.</p>
            <p>Our medical writers come from diverse clinical, technical and scientific backgrounds to provide you with the objective answers you need to support your desired commercialization and business outcomes.</p>
          </Section>

          <Section title="Labeling, Instructions for Use and User Manuals">
            <p>Compliance with evolving legal labeling requirements is essential in all countries in which a medical device is distributed. Errors and inaccuracies in labeling and Instructions for Use (IFUs) may threaten patient safety and result in damaging recalls and fines.</p>
            <p>NKB Regovanta supports manufacturers in labeling needs by managing UDI exception requests and reviewing labeling and instruction requirements to ensure that all portfolio products are compliant with FDA, MDR, and other international requirements.</p>
            <p>NKB Regovanta's multidisciplinary, cross-functional medical writing service teams understand the criticality of ensuring accuracy, completeness and ergonomic usability of information contained within medical device labels, IFUs and user instruction manuals.</p>
          </Section>

          <Section title="Periodic Safety Update Reports and Post-Market Surveillance Reports (PSURs | PMSRs)">
            <p>The European Medical Device Regulation (MDR) EU 2017/745 requires the preparation of Post-Market Surveillance Reports (PMSR) or Periodic Safety Update Reports (PSUR); (Chapter VII, Article 86), depending on device classification.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[hsl(195_65%_20%)] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">MDR Classification</th>
                    <th className="px-4 py-3 text-left font-bold">PSUR | PMSR</th>
                    <th className="px-4 py-3 text-left font-bold">Update Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Class I","PMSR","When Necessary"],
                    ["Class IIa","PSUR","Every 2 Years (min)"],
                    ["Class IIb (Non-Implantable)","PSUR","Annually (min)"],
                    ["Class IIb (Implantable)","PSUR","Annually (min)"],
                    ["Class III","PSUR","Annually (min)"],
                  ].map(([cls, type, freq], i) => (
                    <tr key={cls} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3">{cls}</td>
                      <td className="px-4 py-3">{type}</td>
                      <td className="px-4 py-3">{freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Scientific Publications and Conference Abstracts">
            <p>Publishing scientific articles in relevant medical journals and presenting clinical findings at conferences is beneficial for manufacturers. Scientific dissemination of pertinent information helps strengthen awareness and recognition of a product, together with the overall reputation of the manufacturer, among relevant clinical audiences.</p>
            <p>NKB Regovanta's professional medical writing services include a variety of evidence communication outputs:</p>
            <ul className="space-y-2 mt-3">
              {["Advisory panel presentations","Conference abstracts, presentations and posters","Health economic evaluations","Professional education materials (e.g. clinical summaries)","Scientific publications, including journal articles","Systematic reviews and meta-analyses","White papers and other manuscripts","Summaries of Safety and Clinical Performance (SSCPs)"].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" /><span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Summaries of Safety and Clinical Performance (SSCPs)">
            <p>The European Medical Device Regulation (MDR) EU 2017/745 requires that manufacturers of implantable and class III devices must create a Summary of Safety and Clinical Performance (SSCP). The SSCP document is intended to provide public access to an updated summary of clinical data and other information about a medical device's safety and clinical performance for healthcare professionals and, if relevant, patients.</p>
            <p>NKB Regovanta's medical writers have the expertise and knowledge to create SSCPs tailored towards intended users/healthcare professionals and patient/lay audiences in compliance with these regulatory requirements.</p>
          </Section>

          <Section title="Clinical Study Protocol and Clinical Study Reports">
            <p>A clinical study protocol is a document that describes the objectives, design, methodology, statistical considerations and organization of a clinical trial. NKB Regovanta offers a comprehensive service for developing clinical study protocols, with our experienced medical writers working closely with our clinical, regulatory and biostatistical experts.</p>
            <p>Clinical Study Reports (CSRs) are comprehensive documents that summarize the methods, results, and conclusions of a clinical trial. NKB Regovanta offers a full range of clinical medical writing services, from protocol development to final report writing.</p>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Ready to Work with Expert Medical Writers?</h2>
            <p className="text-white/70 mb-6">Let NKB Regovanta's world-class medical writing team support your regulatory submissions.</p>
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

export default MedicalWritingPage;
