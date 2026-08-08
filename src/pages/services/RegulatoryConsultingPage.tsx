import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const RegulatoryConsultingPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Regulatory and Quality Consulting&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            MEDICAL DEVICE REGULATORY CONSULTING STRATEGIES PROVEN TO ACCELERATE YOUR GLOBAL COMMERCIALIZATION GOALS
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">
            HAVING AN EXPERIENCED MEDICAL DEVICE REGULATORY CONSULTING PARTNER IS INVALUABLE WHEN SEEKING ACCELERATION OF REGULATORY APPROVAL AND MARKET INTRODUCTION.
          </p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "10,000+", label: "Devices Approved Globally" },
            { value: "120", label: "Dedicated Regulatory and Quality Associates" },
            { value: "600", label: "Pre-Submission Meetings Managed" },
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
          <Section title="Medical Device Regulatory Consulting">
            <p>Having the right medical device regulatory consulting partner at the right time can be invaluable in attaining compliance and market access. NKB Regovanta is the industry leader in driving successful medical device and IVD regulatory submissions and outcomes through effective, daily interactions with the U.S. FDA, Japan's PMDA, Europe's Notified Bodies, China's NMPA and other international authorities.</p>
            <p>In fact, many of our Associates have previously held positions within these organizations, which provides clients the benefit of a clear understanding on how to proactively plan for international requirements and expectations.</p>
            <p>We provide a wide range of medical device and IVD regulatory consulting services across the full spectrum of product design and development through post-market support. From Notified Body selection and Pre-IDE preparation to Advisory Panel Meetings, our medical device regulatory consultants develop and implement global regulatory strategies to accelerate your specific commercialization efforts.</p>
          </Section>

          <Section title="CE Mark Consulting">
            <p>Whether launching a new medical device in Europe or transitioning a legacy device previously certified under MDD to MDR, NKB Regovanta's global team of medical device regulatory consultants, made up of former Notified Body staff and experts, can help you successfully achieve your unique development objectives and goals.</p>
            <p>NKB Regovanta proudly offers the following CE Mark solutions to EU Clients:</p>
            <ul className="space-y-2 mt-3">
              {[
                "Assistance for drug/device combination device manufacturers under Rule 14",
                "Assistance for manufacturers of In Vivo origin products (EU Regulation 722/2012 and EN ISO 22442)",
                "Conformity Assessment procedures under MDR 2017/745",
                "Device classification and regulatory pathway consulting",
                "ISO 14971 risk management support",
                "MDR technical documentation gap analyses",
                "Notified Body observations and non-conformity responses",
                "Notified Body selection",
                "Reprocessing of disposable products under MDR",
                "Technical Documentation compilation",
                "UKCA Marking",
                "Unique Device Identifier (UDI)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Device Classification and Regulatory Pathway Consulting">
            <p>An important first step in any medical device registration project is to ensure that a device is correctly classified. A device should clearly indicate whether it will be regulated as a device under MDR 2017/745 or IVDR 2017/746, with another key consideration for rules that fall under each regulation.</p>
            <p>This can be a complicated task for manufacturers — for example, there are now 22 different classification rules under the MDR as compared to 18 rules under MDD. Once a device classification is determined, a manufacturer can further develop the appropriate regulatory pathway by considering:</p>
            <ul className="space-y-2 mt-3">
              {[
                "What is my product design and development strategy?",
                "How will I meet General Safety and Performance Requirements (GSPRs)?",
                "What preclinical testing will be required (bench, In Vitro and In Vivo)?",
                "What biocompatibility data will I need to provide to meet ISO 10993 requirements?",
                "Will we need to conduct a clinical investigation prior to CE marking?",
                "What Post-Market Clinical Follow-Up (PMCF) activities must I implement?",
                "Which Notified Body has the most experience with our specific technology?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="ISO 14971 Risk Management Support">
            <p>As part of a medical device manufacturer's technical documentation and quality management system, risk management processes that comply with ISO 14971 must be included. The risk management file is a key part of a manufacturer's documentation that links to technical documentation, quality systems, clinical evaluation and even a device's instruction for use.</p>
            <p>NKB Regovanta has a robust team of consultants with experience pertaining to risk management planning, conducting risk analyses, developing risk management tools and integrating outputs of a risk management report into an organization's Post-Market Surveillance (PMS) procedures.</p>
          </Section>

          <Section title="MDR Technical Documentation Gap Analysis">
            <p>All new devices and significantly modified legacy devices within the EU must be CE marked under the Medical Device Regulation (MDR). However, there is still a large number of manufacturers who hold valid CE Marks under the MDD for legacy devices that must transition to MDR.</p>
            <p>The MDR introduces a number of significant changes and focuses more attention on a lifecycle approach to medical device regulation. It also expands the scope of what is considered a medical device, introduces more strict clinical data requirements and additional post-market oversight and responsibility.</p>
            <p>NKB Regovanta has assisted hundreds of medical device manufacturers with conducting comprehensive and systematic gap analyses of existing technical documentation, inclusive of highlighting deficiencies requiring attention to comply with MDR requirements.</p>
          </Section>

          <Section title="Notified Body Selection">
            <p>Prior to placing a medical device on the EU market, device manufacturers must first obtain CE marking certification via the Medical Device Regulation (MDR). For the majority of devices within the EU, this certification is obtained via a regulatory agency termed a Notified Body (NB).</p>
            <p>Important questions for EU manufacturers to consider prior to selecting a NB:</p>
            <ul className="space-y-2 mt-3">
              {[
                "Do they possess the correct designation and scope to undertake a CE marking assessment of your specific technology?",
                "Do they have personnel with experience of technology similar to yours?",
                "Does the NB have the bandwidth to collaborate in a timely manner and to meet required deadlines?",
                "Are they able to certify quality management systems?",
                "Do they provide services applicable to other regions?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Technical Documentation Compilation">
            <p>All medical devices and IVD products in the EU require technical documentation and in the majority of cases, these files must be reviewed by a Notified Body prior to the award of CE Mark. NKB Regovanta's industry-leading technical documentation consultancy services include:</p>
            <ul className="space-y-2 mt-3">
              {[
                "Identification of applicable standards and required testing",
                "GSPR requirements compilation and/or review",
                "Labelling and marketing materials review",
                "Compilation of the risk management report in accordance with ISO 14971:2019",
                "Preparation of clinical evaluation in accordance with the MDR and MEDDEV 2.7.1 (Rev 4)",
                "Development of post market surveillance documentation (PSUR, PMCF Plans and Reports)",
                "Development of SSCP (Summary of Safety and Clinical Performance)",
                "Strategic advice and assistance with responding to Notified Body questions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Chinese MedTech Development">
            <p>Medical devices and In Vitro Diagnostics (IVDs) in China are regulated by the National Medical Products Association (NMPA). All manufacturers of devices and diagnostics must register their products with the NMPA and obtain a Medical Device Registration Certificate (MDRC) before products can legally be placed within the Chinese marketplace.</p>
            <p>As in most other major markets of the world, devices in this APAC region are regulated by risk classification: Class I, Class II and Class III. With offices in Beijing and Shanghai, NKB Regovanta has extensive experience helping manufacturers navigate the Chinese regulatory landscape.</p>
          </Section>

          <Section title="UKCA Marking">
            <p>Many of the requirements for CE Marks are to be included in the new UK Conformity Assessed (UKCA) marking scheme that will replace CE Marks under the current MDD, AIMD and IVDD regulatory framework. To assist with these requirements, NKB Regovanta has a team of UK-based medical device regulatory consulting experts to support manufacturers through these new processes, as well as advising on the continued evolution of the UK medical device regulatory framework.</p>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Ready to Accelerate Your Regulatory Journey?</h2>
            <p className="text-white/70 mb-6">Contact NKB Regovanta's regulatory experts to develop your global strategy today.</p>
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

export default RegulatoryConsultingPage;
