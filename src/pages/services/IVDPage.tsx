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

const IVDPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;IVD&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">IVD Product Development</h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">
            Let our dedicated In Vitro Diagnostics Team take the guesswork out of IVD product development and regulatory compliance.
          </p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "200", label: "IVD Studies Supported" },
            { value: "170", label: "Global Regulatory Submissions" },
            { value: "500", label: "IVD Trial Sites Managed" },
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
          <Section title="IVD Product Development Overview">
            <p>NKB Regovanta's IVD product development team is here to accurately interpret the complicated regulatory challenges that IVD manufacturers sometimes face and help you simplify the development and implementation of effective development strategies. Our wide range of services ensures ultimate product quality and compliance, and our team's expertise with IVD is unmatched in the industry.</p>
            <p>Our business unit is focused on meeting the unique product development needs of IVD manufacturers. We help clients fast-track the commercialization of life-changing IVD products through our proactive approach and in-depth knowledge of IVD development requirements.</p>
            <p>Whether it's supporting IVD regulatory assessments and submissions, developing IVDR-compliant technical files, designing and managing clinical trials or building ISO 13485:2016 and 21 CFR part 820 compliant quality systems — we've got you covered.</p>
          </Section>

          <Section title="IVD Clinical Research, Biostatistics and Data Management Services">
            <p>Our Data Managers understand the nuances of collecting instrument and sample/subject data for IVD trials and can effectively manage the most critical asset — your data — as you collect and report clinical study outcomes for submissions in the U.S., China, Japan, Europe and other key geographies.</p>
            <p>Our team supports studies of various types and phases including: Feasibility, Pilot, Usability/Human Factors Evaluation, Validation, Post Market Surveillance and Post-Market Performance Follow-up, Limit of Detection, Clinical Performance and Reproducibility.</p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {["Biostatistics","Central Lab Management","Clinical Audits and Bioresearch Monitoring (BIMO) Audit Support","Clinical and Biostatistical Discussions with Regulatory Bodies","Clinical Studies to Support IVDR","Database Development and EDC management","Data Review and Management","Kit Management","Monitoring","Protocol Development","Sample/Specimen Collection","Site Close-Out Visits","Site Selection/Qualification","Site Start-Up and Training","Statistical Data Analysis and Reporting","Statistical Study Design","Trial Master File Set-up and Maintenance"].map(item => (
                <div key={item} className="flex items-start gap-1.5 text-sm">
                  <ArrowRight className="w-3 h-3 text-[#F5C754] mt-0.5 shrink-0" />{item}
                </div>
              ))}
            </div>
          </Section>

          <Section title="IVD Regulatory Services">
            <p>Unlike other industry Contract Research Organizations (CROs), NKB Regovanta's IVD Team has expertise with hundreds of successful regulatory submissions throughout North America, China, Japan, Europe and other parts of the world. As a result, our team has near daily interactions with international regulatory authorities and understands how to properly translate current regulations and expectations into successful strategies.</p>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {[
                { region: "U.S.", items: ["510(k)","Biologics License Application (BLA)","Clinical Laboratory Improvement Amendments (CLIA) Waiver","De novo Submission","Device Master File","Emergency Use Authorization (EUA)","Investigational Device Exemption (IDE)","Premarket Approval (PMA)"] },
                { region: "EMEA", items: ["CE Mark","Design Dossier/Technical File Review or Build","In Vitro Diagnostic Directive (IVDD) to In Vitro Diagnostic Regulation (IVDR) Transition","Performance Evaluation Plan (PEP)/Performance Evaluation Report (PER) Gap Assessment and Reporting"] },
                { region: "China", items: ["Legal Agent","National Medical Products Administration (NMPA) Product Classification and Registration","NMPA Consulting","NMPA Submission, Follow-Up and Secure License","Type Testing Preparation, Submission and Oversight"] },
                { region: "Japan", items: ["Pharmaceuticals and Medical Devices Agency (PMDA) Product Classification and Registration","PMDA Consulting","PMDA Submission"] },
              ].map(({ region, items }) => (
                <div key={region} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[hsl(195_65%_20%)] mb-3">{region}</h3>
                  <ul className="space-y-1">
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-3 h-3 text-[#F5C754] mt-0.5 shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="IVD Quality Systems Services">
            <p>NKB Regovanta employs the IVD industry's premier quality experts to effectively design Quality Management Systems (QMS) to ensure compliance with ISO 13485:2016, U.S. FDA CFR 21 part 820 and Medical Device Single Audit Program (MDSAP) certifications.</p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {["Audit Support for MDSAP, ISO 13485:2016 and 21 CRF Part 820","Corrective and Preventive Action (CAPA) Audits and Remediation","Complaint Handling","Design Controls","Design History File (DHF) Development","ISO 13485:2016 Transition","IVDR Compliance, Planning and Tech File Development","Mock Audits","Procedure Development, Implementation and Training","Quality Audits","QMS Assessment and Gap Analysis","QMS Development","Risk Analysis, Failure Modes and Effects Analysis (FMEA)","Risk Management (ISO 14971)","Risk Management Plans and Reports"].map(item => (
                <div key={item} className="flex items-start gap-1.5 text-sm">
                  <ArrowRight className="w-3 h-3 text-[#F5C754] mt-0.5 shrink-0" />{item}
                </div>
              ))}
            </div>
          </Section>

          <Section title="IVD Therapeutic Expertise">
            <p>The breadth of knowledge and application experience that NKB Regovanta's IVD Team possesses is enough to power even the most complex IVD program. We are the IVD industry's CRO leader for regulatory, clinical research and quality system services for assays, disposable products, instruments, reagents and systems.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {["Clinical Chemistry","Companion Diagnostics","Direct to Consumer Testing (DTC)","Drugs of Abuse Testing","Hematology","Hemostasis/Coagulation","Histology and Cytology","Immunochemistry","Microbiology Culture","Molecular Diagnostics","Point of Care Testing"].map(area => (
                <div key={area} className="flex items-center gap-1.5 text-sm bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                  <ArrowRight className="w-3 h-3 text-[#F5C754] shrink-0" />{area}
                </div>
              ))}
            </div>
          </Section>

          <Section title="IVD Client Testimonials">
            <div className="space-y-4">
              {[
                { quote: "We required a high level of confidence in the data that we would ultimately be putting in front of the U.S. FDA. Working with NKB Regovanta provided this measure of confidence.", attr: "U.S.-Based IVD Start-Up Manufacturer, Clinical Affairs Manager" },
                { quote: "NKB Regovanta's team had the best grasp of IVDR. We are extremely satisfied with the quality of work.", attr: "Global Tier 1 IVD Manufacturer, Regulatory Affairs Specialist" },
                { quote: "We were pleased with the level of knowledge and rationale to classify our novel IVD technology per the Chinese classification system. Hiring NKB Regovanta was one of the best decisions to get our product into the China marketplace.", attr: "U.S-Based IVD Start-Up Manufacturer, Senior Vice President" },
                { quote: "NKB Regovanta's templates for PEPs and PERs are thorough. In the event we requested modifications, the team was able to quickly adapt to our requested style.", attr: "EU Mid-Size IVD Manufacturer, Regulatory Affairs Manager" },
              ].map(({ quote, attr }) => (
                <blockquote key={attr} className="bg-gray-50 border-l-4 border-[#F5C754] p-5 rounded-r-xl">
                  <p className="text-gray-700 italic mb-2">"{quote}"</p>
                  <footer className="text-xs font-bold text-[hsl(195_65%_20%)]">— {attr}</footer>
                </blockquote>
              ))}
            </div>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Ready to Advance Your IVD Program?</h2>
            <p className="text-white/70 mb-6">Connect with our dedicated IVD team to discuss your development and regulatory needs.</p>
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

export default IVDPage;
