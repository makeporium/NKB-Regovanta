import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";

const qualityServices = [
  {
    title: "RA/QA Strategy and Compliance",
    content: "NKB Regovanta can assist with a wide range of regulatory and quality management compliance issues. This includes everything from mapping out the entire regulatory pathway for your specific device to implementation of quality management systems that comply with ISO 13485 and US FDA 21 CFR Part 820. In addition to the wide range of services we offer related to the US FDA and EU MDR/IVDR, we assist companies with issues that are common to all medical device companies worldwide: QMS audits, risk management, literature reviews, strategy, and much more."
  },
  {
    title: "QA/RA Outsourcing",
    content: "In a perfect world, your regulatory compliance workload would remain steady and your best QA/RA staff members would stay with your company for the long haul. As you know, that’s not the world we live in. Experienced medical device regulatory professionals are in high demand and ever-evolving requirements are pushing QA/RA departments to the limit. NKB Regovanta’s experienced consulting team offers a flexible option to even out your workload or address a critical project so you stay on schedule and in compliance. Here are three ways NKB Regovanta can assist:\n\n• QA/RA Staff Augmentation\n• Special QA/RA Projects\n• Functional Area Outsourcing"
  },
  {
    title: "Regulatory Consulting for Borderline and Combination Devices",
    content: "NKB Regovanta has regulatory consultants with extensive experience with medical devices incorporating medicinal substances. Our team includes experts who have previously served as Notified Body reviewers of high-risk medical devices including device/drug combinations. Our expertise covers key product areas for these products such as wound care, cardiovascular, orthopedics, and organ transfusion."
  },
  {
    title: "Quality Management System Implementation and Support",
    content: "NKB Regovanta has a team of quality management consultants exclusively focused on helping medical device and IVD manufacturers comply with ISO 13485, US FDA Quality Management System Regulation (21 CFR Part 820), and other international quality regulations. While ISO 13485 is considered the bedrock standard for QMS compliance, the United States, Canada, Brazil, Japan, and other markets have specific additional requirements. Our team will help you navigate those requirements or build a QMS that accounts for them in the future."
  },
  {
    title: "ISO 13485 and FDA Mock Audits",
    content: "NKB Regovanta’s auditing team can conduct FDA mock audits or ISO 13485 pre-certification or supplier audits. Our team will do a thorough and realistic evaluation of your quality management system (QMS) to ensure compliance with ISO 13485 standard and FDA 21 CFR Part 820 and other applicable regulations. Our team of seasoned auditors, with extensive industry experience, conducts comprehensive mock audits that simulate real regulatory inspections. We meticulously review your documentation, processes, and systems to identify non-conformities, potential risks, and areas for improvement. This proactive approach helps you address compliance gaps before actual regulatory audits, minimizing the risk of costly delays or penalties.\n\nWhether you are preparing for an initial certification, a routine surveillance audit, or a re-certification, our mock audits offer valuable insights and actionable recommendations to enhance your QMS and ensure regulatory readiness. Partner with us to achieve and maintain the highest standards of quality and compliance in the medical device industry."
  },
  {
    title: "Medical Device Single Audit Program (MDSAP) Compliance",
    content: "Our MDSAP compliance service offers a streamlined approach to achieving and maintaining compliance across multiple regulatory jurisdictions. By participating in the MDSAP, your medical device company can undergo a single audit that satisfies the requirements of multiple regulatory authorities, including the US FDA, Health Canada, Australian TGA, Brazil ANVISA, and Japan MHLW/PMDA. Our experienced auditors conduct thorough assessments of your quality management system (QMS), identifying compliance gaps and providing actionable recommendations to enhance your processes.\n\nWe assist in preparing for the MDSAP audit by reviewing your documentation, training your staff, and conducting mock audits to ensure readiness. This comprehensive service not only simplifies the audit process but also reduces the burden of multiple audits, saving you time and resources. Partner with us to achieve seamless MDSAP compliance and ensure your products meet the highest standards of quality and safety globally."
  },
  {
    title: "ISO 14971 Risk Management Consulting",
    content: "NKB Regovanta offers consulting to medical device manufacturers to implement and maintain a robust risk management system. ISO 14971 is the international standard for risk management in the medical device industry, ensuring that hazards and hazardous situations are identified, associated risks are estimated, evaluated, controlled, and that the control measures are monitored for effectiveness throughout the entire lifetime of the device. Our team of seasoned consultants offer comprehensive support:\n\n• Risk assessment, including risk analysis and evaluation\n• Risk management, including risk control and evaluation of residual risk\n• Development of documentation (process, procedures, plans, reports)\n\nWe help you integrate risk management process into your quality management system (QMS), ensuring compliance with regulatory requirements and enhancing product safety. Through detailed documentation reviews, process evaluations, and staff training, we identify gaps and provide actionable recommendations to mitigate risks effectively."
  },
  {
    title: "Regulatory Remediation Consulting",
    content: "Recovering from an FDA Warning Letter, FDA 483 or serious findings from an EU Notified Body can be daunting. You need to respond quickly, seriously, and thoroughly. Our team of regulatory experts is here to help. We will quickly conduct an analysis of the cited issues, develop a comprehensive remediation plan, and assist in drafting detailed responses to regulatory authorities.\n\nOur services include root cause analysis, corrective and preventive action (CAPA) development, and implementation support to address compliance gaps effectively. We also offer training and guidance to ensure your team understands regulatory expectations and maintains compliance moving forward."
  },
  {
    title: "Clinical and Regulatory Strategy",
    content: "NKB Regovanta helps medical device manufacturers develop a comprehensive plan to navigate the complex landscape of clinical and regulatory requirements that lead to market approval.\n\nOur team of experts conducts a thorough analysis of your device, identifying optimal preclinical, clinical, and regulatory pathways. We assist in designing and implementing required preclinical testing, clinical trials, preparing regulatory submissions, and ensuring compliance with global standards. From initial concept through post-market activities, we provide continuous support to address challenges and optimize your strategy. Partner with us to streamline your clinical and regulatory processes, reduce risks, and achieve successful product approvals."
  },
  {
    title: "Animal Tissue Consulting",
    content: "NKB Regovanta has medical device regulatory consultants with extensive experience in devices that utilize tissue of animal origin including experts who have previously served as Notified Body reviewers of high-risk medical devices including those containing animal tissue. NKB Regovanta can provide a comprehensive range of services in this area including:\n\n• Strategic advice on the use of animal materials\n• Gap assessments and preparation of technical documentation in compliance with the requirements of the MDR, Regulation 722/2012 and ISO 22442\n• Literature reviews and risk assessments to support TSE viral and inactivation\n• Viral inactivation studies in accordance with ISO 22442-3 and regulatory expectations\n• Pre- and post-market assessment of data on current zoonoses and zoonotic risk associated with the animal material\n• Review and input on quality system processes for traceability, supplier controls and training\n• Review of animal tissue supplier documentation\n• Animal tissue specific audits\n• Clinical strategy and preparation of documented justifications for the use of the animal material\n• Notified Body Audit support\n• Training on the requirements of ISO 22442 and Regulation 722/2012\n• Preclinical and clinical testing strategies and study design\n• US FDA presubmission meeting and interaction support"
  },
  {
    title: "AI, ML and Software as a Medical Device (SaMD) Regulatory Support",
    content: "Our AI, ML and Software as a Medical Device (SaMD) Regulatory Support, provides specialized expertise to navigate the complex regulatory landscape for software-driven medical devices. With extensive experience in FDA and EU regulations, our team offers comprehensive support to ensure your software, including artificial intelligence (AI) and machine learning (ML) components, meets stringent regulatory requirements. Our expert team supports you through:\n\n• Regulatory Strategy\n• Regulatory Submission\n• IFU & Labeling\n• Design Control SOPs\n• Software Development Procedure Development Support\n• Good Machine Learning development support (for AI/ML) incorporation into design control and QMS\n• Cybersecurity\n• Radio Frequency (RF) Labeling Requirements Support\n• Credibility Assessment\n• Human Factors\n• SaMD Design Controls Training\n• Software Verification and Validation Testing and SBOM (Software Bill of Materials)"
  }
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const QualityManagementPage = () => {
  const [activeService, setActiveService] = useState(qualityServices[0]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Consulting Services&nbsp;&nbsp; —</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
              GLOBAL RA/QA CONSULTING FOR MEDICAL DEVICE & IVD MANUFACTURERS
            </h1>
            <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base mt-4">
              <Link to="/contact">Let's Talk About Your Project</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "315", label: "Medical Device Clinical and Regulatory Specialists on Staff" },
              { value: "3,000", label: "Medical Device and IVD Manufacturers Supported Each Year" },
              { value: "120", label: "Dedicated Quality and Regulatory Employees on Staff" },
              { value: "10", label: "Consultants with Previous US FDA or EU Notified Body Experience" },
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
              <Section title="Premarket Strategy to Postmarket Support">
                <p>Every year NKB Regovanta helps thousands of medical device manufacturers conduct preclinical studies, clinical research, and testing on new innovations and existing devices alike. Because we have worked on so many types of devices from the early stages of development, we have a holistic understanding of what regulators expect from you. Our team of regulatory and quality management system consultants is ready to help you comply with US FDA, EU, and other international requirements.</p>
                
                {/* Image Placeholder */}
                <div className="my-8 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 aspect-[16/9] relative flex items-center justify-center group">
                  <div className="absolute inset-0 bg-black/5" />
                  <p className="text-gray-400 font-medium text-sm text-center px-4">
                    [Flags from multiple countries waving against a clear blue sky]
                  </p>
                </div>
              </Section>

              <Section title="Global RA/QA Strategy and Compliance">
                <div className="flex flex-col md:flex-row gap-0 mt-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  {/* Left: Navigation List */}
                  <div className="md:w-2/5 flex flex-col bg-white border-r border-gray-200 shrink-0">
                    {qualityServices.map((service) => (
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

            {/* Sidebar - Experts */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-black text-[hsl(195_65%_20%)] mb-2">Meet NKB Regovanta's Experts</h3>
                <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">Explore the depth of our team’s expertise in quality and regulatory compliance consulting.</p>
                
                <div className="space-y-6">
                  {[
                    { name: "Kevin Butcher", title: "Principal Regulatory Consultant", img: "[Person in a dark suit]" },
                    { name: "Rachel Gibbs, BSc, PhD", title: "Principal Regulatory Consultant", img: "[Smiling person in black top]" },
                    { name: "Staci L. DeMoss, BS", title: "Principal Validation Scientist", img: "[Staci DeMoss]" },
                    { name: "Matt Royle, PhD", title: "Principal Regulatory Consultant", img: "[Person in red/gray checkered shirt]" }
                  ].map((expert) => (
                    <div key={expert.name} className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden shrink-0 text-[10px] text-gray-400 text-center leading-tight">
                        {expert.img}
                      </div>
                      <div>
                        <h4 className="font-bold text-[hsl(195_65%_20%)] text-sm">{expert.name}</h4>
                        <p className="text-xs text-gray-500 font-medium mb-1">{expert.title}</p>
                        <Link to="#" className="text-[#F5C754] text-xs font-bold hover:underline">View Bio</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-6 text-white text-center">
                <h3 className="text-lg font-black mb-2">Other Services That May Interest You</h3>
                <ul className="text-sm text-white/80 space-y-3 mt-4 text-left">
                  <li>
                    <Link to="/services/us-fda" className="hover:text-[#F5C754] flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> US FDA & CMS Consulting
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/eu-mdr" className="hover:text-[#F5C754] flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> EU MDR & IVDR Consulting
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

export default QualityManagementPage;
