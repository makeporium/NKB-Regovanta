import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";
import ExpertSidebar from "@/components/ExpertSidebar";

const euMdrServices = [
  {
    title: "EU Regulatory Strategy & Compliance",
    content: "We provide a wide range of regulatory strategy and consulting services related to compliance with the Medical Device Regulation (MDR 2017/745) and the In Vitro Diagnostic Regulation (IVDR 2017/746). From Clinical/Performance Evaluation Reports to PMCF/PMPF Reports, we can help you prepare all documentation needed to achieve or maintain CE Marking for your device portfolio."
  },
  {
    title: "EU Post-Market Surveillance (PMS)",
    content: "Under the European Medical Device Regulation (MDR) EU 2017/745 and the In Vitro Diagnostic Regulation (IVDR) EU 2017/746, manufacturers are required to implement and maintain a robust Post-Market Surveillance (PMS) system for all medical devices and in vitro diagnostic devices, regardless of their classification. PMS activities are essential for continuously monitoring the safety and performance of devices once they are available on the market.\n\nNKB Regovanta’s dedicated team of experts, comprising seasoned medical writers and regulatory specialists, including former Notified Body staff, provides comprehensive support in developing and executing effective PMS activities. Our services include:\n• PMS Plan Development\n• Data Analysis\n• Regulatory Compliance\n• PMS Report\n\nBy partnering with NKB Regovanta, manufacturers can ensure their PMS activities not only meet regulatory standards but also enhance the overall safety and efficacy of their medical devices."
  },
  {
    title: "IVD Performance Evaluation Plans and Reports",
    content: "Our IVD Performance Evaluation Plans (PEP) and Reports (PER) service offers comprehensive support to In Vitro Diagnostic (IVD) manufacturers, ensuring compliance with the EU In Vitro Diagnostic Regulation (IVDR) and Notified Body requirements.\n\nOur expert medical writing and regulatory team conducts thorough evaluations of all IVD device classes and therapeutic areas, including combination products. PEPs are developed to ensure the data identification process is thorough and systematic, and the performance evaluation is continuously updated. Robust PERs are developed assessing the scientific validity, analytical performance and clinical performance data.\n\nWe will also conduct a detailed data analysis, risk assessment, and make strategic recommendations. In addition, our team of former Notified Body executives support the strategy and development of your performance evaluation documentation, providing an extra measure of assurance that your PER will satisfy your auditor."
  },
  {
    title: "Clinical Evaluation Plan and Report Writing",
    content: "Whether your medical device has been on the EU market for decades, or you are pursuing a new CE Marking certification, NKB Regovanta’s regulatory and medical writing teams are ready to help you gather, assess, and evaluate all necessary clinical evidence to support your submission or maintain postmarket compliance.\n\nAs one of the largest medical device clinical research organizations, we know what Notified Bodies expect to see in clinical evidence submitted by manufacturers. NKB Regovanta has helped thousands of device manufacturers gather the data to support regulatory submissions and maintain postmarket compliance."
  },
  {
    title: "Summary of Safety and Clinical Performance (SSCP)",
    content: "The European Medical Device Regulation (MDR) EU 2017/745 requires that manufacturers of implantable and class III devices (other than custom-made or investigational devices) must create a Summary of Safety and Clinical Performance (SSCP). The SSCP document is intended to provide public access to an updated summary of clinical data and other information about a medical device’s safety and clinical performance for healthcare professionals and, if relevant, patients.\n\nThis obligation is in addition to the requirement for creating a Periodic Safety Update Report (PSUR).\n\nNKB Regovanta’s experts have carefully analyzed the MDR requirements and recommendations and associated guidance documents to help clients navigate through this early period of enforcement with ease and confidence. Our EU regulatory and medical writing teams have the expertise and knowledge to create SSCPs tailored towards intended users/healthcare professionals and patient/lay audiences in compliance with these regulatory requirements."
  },
  {
    title: "Summary of Safety and Performance (SSP) for IVDR",
    content: "NKB Regovanta’s Summary of Safety and Performance (SSP) services for IVDR compliance are designed to help manufacturers of Class C and D in vitro diagnostic (IVD) devices meet stringent EU regulatory requirements. The SSP IVDR is a mandatory, publicly accessible document that communicates a device’s safety, performance, and intended use to regulators, healthcare professionals, and laypersons. NKB Regovanta ensures these summaries are scientifically accurate, user-friendly, and compliant with MDCG 2022-9 guidance, including language requirements and annual updates. For self-test devices, NKB Regovanta emphasizes clarity for non-expert users, offering tailored content that explains usage, interpretation, and when to seek medical advice.\n\nWhat sets NKB Regovanta apart is its deep regulatory expertise and specialized writing capabilities. With a team of over 300 clinical and regulatory specialists—including consultants with EU Notified Body experience—NKB Regovanta avoids common pitfalls like copying from performance evaluation reports, which can lead to delays or rejections. Instead, they craft precise, audience-appropriate SSPs that meet regulatory expectations and enhance submission success. Their services also include readability testing and integration into broader IVDR strategies, supporting clients from evaluation through post-market surveillance."
  },
  {
    title: "EU MDR and IVDR Technical Documentation",
    content: "The European Medical Device Regulation (MDR) and In-Vitro Diagnostic Regulation (IVDR) require manufacturers to prepare detailed Technical Documentation to obtain and maintain CE marking of medical devices. In most cases, this documentation will be reviewed by your European Notified Body and contains a wide array of information about your device: specifications, manufacturing process, design controls, test reports, risk assessments, clinical data, and much more.\n\nOur team prepares MDR and IVDR-compliant technical documentation for a wide range of devices and device families. Depending on your needs, we can provide a simple compilation of the technical documentation through to the writing of all key documents."
  },
  {
    title: "PMCF Plans, Surveys, and Reports",
    content: "If you market devices in Europe, you already know that your clinical evaluation obligations under the EU Medical Device Regulation don’t end when you get CE Marking. The MDR requires you to proactively gather data to assess ongoing device safety and performance. Known as Post Market Clinical Followup, PMCF is an important part of your overall Post Market Surveillance (PMS) activities. NKB Regovanta can help you strategize on which data to collect, how to collect it, and prepare a robust PMCF report that meets the expectations of your Notified Body."
  },
  {
    title: "IVD PMPF Plans, Surveys, and Reports",
    content: "NKB Regovanta helps In Vitro Diagnostic (IVD) manufacturers prepare Post-Market Performance Follow-up (PMPF) plans, surveys, and reports. We develop comprehensive plans tailored to your specific IVD product, facilitating systematic performance and relevant scientific data collection and analysis from the use of the device within its intended purpose. Our expert team supports you through:\n\n• Strategy development\n• Creation of tailored PMPF plans\n• Gathering data via literature reviews, surveys, clinical performance studies, and more\n• Writing comprehensive PMPF reports\n\nWe compile this data into insightful reports to confirm the safety, performance and scientific validity of your device as well as ensuring the acceptability of the benefit-risk ratio and detecting emerging risks. By leveraging our extensive regulatory expertise, we help you navigate IVDR and other global standards, ensuring your devices continue to be safe and effective throughout their lifecycle."
  },
  {
    title: "Periodic Safety Update Reports (PSUR)",
    content: "The European Medical Device Regulations (MDR) EU 2017/745 and (IVDR) EU 2017/746 require the preparation of Post-Market Surveillance Reports (PMSR) or Periodic Safety Update Reports (PSUR), depending on device classification. A PMSR is intended for low-risk Class I devices and IVD Class A & B, while a PSUR is intended for moderate and high-risk devices (Class IIa, IIb, III, implantable) and IVD Class C & D. Irrespective of whether a medical device has a valid certificate under the Medical Device Directives or the new regulations, all manufacturers must comply with Post-Market Surveillance requirements outlined in the MDR/IVDR.\n\nNKB Regovanta’s highly experienced medical writing team, together with our EU Regulatory experts, supports manufacturers in the development and submission of your PSUR. We offer tailored support to you, the medical device manufacturers, ensuring that every report meets the highest standards of accuracy and regulatory compliance. Our expertise spans across various device classes, providing you with the confidence that your PSURs are in capable hands. Partner with NKB Regovanta to streamline your regulatory processes and maintain the highest levels of safety and performance for your medical devices."
  },
  {
    title: "Systematic Literature Search and Reviews (MDR)",
    content: "Conducting systematic clinical literature reviews can strengthen a manufacturer’s product portfolio. A thorough search and robust synthesis of available literature relevant to a particular medical device may provide important information to guide further product development, reveal much-needed evidence to substantiate current clinical indications, identify potential ‘off-label’ applications, or flag critical adverse event (AE) data.\n\nDepending on the scope, such a review might also consider information gathered from pre-clinical studies for regulatory purposes or to provide information of commercial interest concerning a competitor device.\n\nOur medical writers come from diverse clinical, technical, and scientific backgrounds to provide you with the objective answers you need to support your desired commercialization and business outcomes."
  }
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const EuMdrPage = () => {
  const [activeService, setActiveService] = useState(euMdrServices[0]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Consulting Services&nbsp;&nbsp; —</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
              EU MDR & IVDR REGULATORY CONSULTING
            </h1>
            <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base mt-4">
              <Link to="/contact">Let's Talk About Your Project</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "315", label: "Medical Device Clinical & Regulatory Specialists" },
              { value: "100%", label: "Medical Device & IVD Focused" },
              { value: "6", label: "Consultants with EU Notified Body Experience" },
              { value: "1,200+", label: "EU Clinical Evaluation Reports Completed" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center flex flex-col justify-center">
                <p className="text-3xl font-black text-[#F5C754]">{s.value}</p>
                <p className="text-xs text-white/80 uppercase tracking-wide mt-2 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white">
          <div className="container mx-auto px-4 max-w-6xl py-16 grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Section title="Deep Expertise in European CE Marking Compliance">
                <p>Whether launching a new medical device in Europe or transitioning a legacy device previously certified under the Medical Devices Directive, NKB Regovanta's global team of regulatory consultants can help you successfully navigate a challenging regulatory landscape.</p>
                <p>Unlike other firms, NKB Regovanta also has extremely deep clinical expertise in a wide variety of therapeutic areas. We understand what regulators expect to see from you. Our consultants combine NKB Regovanta's institutional knowledge with their own real world expertise to ensure your continued compliance with regulations.</p>
                
                <div className="my-8 rounded-2xl overflow-hidden shadow-sm aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" alt="Service feature" className="w-full h-full object-cover" />
              </div>
              </Section>

              <Section title="EU Regulatory Strategy and Compliance">
                <div className="flex flex-col md:flex-row gap-0 mt-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  {/* Left: Navigation List */}
                  <div className="md:w-2/5 flex flex-col bg-white border-r border-gray-200 shrink-0">
                    {euMdrServices.map((service) => (
                      <button
                        key={service.title}
                        onClick={() => setActiveService(service)}
                        className={`text-left px-5 py-4 text-sm font-semibold transition-all flex items-center justify-between border-b border-gray-100 last:border-0 group
                          ${activeService.title === service.title
                            ? 'bg-[hsl(195_65%_20%)] text-white'
                            : 'text-[hsl(195_65%_20%)] hover:bg-gray-50'
                          }`}
                      >
                        <span className="leading-snug pr-3">{service.title}</span>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            activeService.title === service.title
                              ? 'text-[#F5C754]'
                              : 'text-gray-300 group-hover:text-gray-400'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Right: Content Panel */}
                  <div className="md:w-3/5 bg-gray-50 p-8">
                    <h3 className="text-xl font-black text-[hsl(195_65%_20%)] mb-4 leading-snug">
                      {activeService.title}
                    </h3>
                    <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                      {activeService.content.split('\n').map((paragraph, idx) => (
                        paragraph.trim() ? <p key={idx}>{paragraph}</p> : null
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                   <Link to="/solutions/startups" className="text-[#F5C754] font-bold hover:underline flex items-center gap-1">
                     Learn about our special program for MedTech startups <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </Section>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <ExpertSidebar />

              <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-6 text-white text-center">
                <h3 className="text-lg font-black mb-2">Other EU Services That May Interest You</h3>
                <ul className="text-sm text-white/80 space-y-3 mt-4 text-left">
                  <li>
                    <Link to="/services/regulatory" className="hover:text-[#F5C754] flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Clinical Evaluation Reports
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/regulatory" className="hover:text-[#F5C754] flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> EU Technical Documentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/regulatory" className="hover:text-[#F5C754] flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> PMCF Plans, Surveys and Reports
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EuMdrPage;
