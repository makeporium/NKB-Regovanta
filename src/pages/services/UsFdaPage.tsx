import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import ExpertSidebar from "@/components/ExpertSidebar";

const fdaServices = [
  {
    title: "FDA Regulatory Strategy and Compliance",
    content: "NKB Regovanta can assist with a wide range of FDA compliance support including 510(k) preparation, De Novo submissions, Investigational Device Exemptions, Premarket Approvals (PMA), combination drug-device products, QMSR audits, and more. We have extensive experience supporting submissions and regulatory strategy for moderate and high-risk devices."
  },
  {
    title: "FDA 510(k) Clearance Consulting",
    content: "NKB Regovanta’s experts guide you through the 510(k) process to demonstrate substantial equivalence to a predicate device, ensuring a smooth path to clearance."
  },
  {
    title: "FDA De Novo Application Submission Support",
    content: "Unlike many other markets, the US FDA classification process for medical devices and IVDs is based on a “predicate” system. This means that any new applications for devices must prove that they have the same intended use and indications for use as another similar device already cleared by the FDA. What happens if you have invented a novel new technology? One option is to pursue the De Novo classification pathway. As a leading medical device CRO, NKB Regovanta can help you gather the data needed and prepare the application required to gain De Novo classification."
  },
  {
    title: "FDA Investigational Device Exemptions",
    content: "If a device maker is developing a new product or pursuing a new indication for an existing device and has determined that a clinical investigation is required; the first consideration is whether the proposed investigation is a ‘significant’ or ‘non-significant’ risk to the patients. If a device presents significant risk, both IRB approval and an FDA Investigational Device Exemption (IDE) is required.\n\nNKB Regovanta can support companies wishing to submit an IDE with the following processes:\n• Helping with the determination of significant vs. non-significant risk\n• Assisting with the pre-submission meeting to discuss risk determination, clinical study outline, and other test requirements\n• Compilation of IDE documents\n• Facilitation and management of required clinical studies\n• 510(k), De Novo and PMA Submissions"
  },
  {
    title: "FDA Premarket Approval Preparation and Consulting",
    content: "For Class III devices, NKB Regovanta provides comprehensive PMA submission support, from clinical data collection to final FDA review and panel meetings."
  },
  {
    title: "FDA Medical Device Pre-Submission Consulting",
    content: "NKB Regovanta is the industry leader in driving successful Pre-Submission meetings with the US FDA. Leveraging our team’s experience and strong working relationships with regulators, clients consistently place trust in NKB Regovanta to accelerate clearance and approvals of innovative technologies. Not only do we understand how to obtain the most meaningful feedback possible throughout the Pre-Sub process, but we also possess unmatched experience on how to utilize pre-submissions to accelerate product approvals.\n\nNKB Regovanta’s team of medical device regulatory consultants puts their expertise to work for you. We have been involved in over 500 Q-Submission/Pre-Submission meetings for 510(k)s, De Novos, and PMAs. Our weekly interactions with the agency keep us up to date with agency expectations and help mitigate project risk. Our consultants pose the correct questions to the FDA and focus on accelerating the approval process for your device."
  },
  {
    title: "FDA Breakthrough Designation",
    content: "The FDA’s Breakthrough Device Designation is a program that accelerates the development and review of medical devices that offer transformative solutions for life-threatening or irreversibly debilitating conditions. It provides benefits like priority review, early and frequent FDA interaction, and faster time to market. NKB Regovanta supports innovators throughout this process by assessing eligibility, preparing compelling submissions, managing FDA communications, and leveraging its deep regulatory expertise—especially in high-need areas like cardiovascular, neurology, and orthopedics—to help clients gain a competitive edge and bring impactful technologies to patients sooner."
  },
  {
    title: "US Reimbursement",
    content: "Successfully entering the US market requires more than regulatory approval—reimbursement often determines whether innovative medical devices and IVDs achieve real clinical adoption. NKB Regovanta partners with manufacturers across the product lifecycle to design and execute integrated US reimbursement strategies that address coding, coverage, payment, and payer evidence expectations. By aligning reimbursement planning with clinical, regulatory, and health economics activities from early development through commercialization, NKB Regovanta helps de‑risk market access, overcome reimbursement barriers, and accelerate patient access to new technologies."
  },
  {
    title: "Systematic Literature Search and Reviews (FDA)",
    content: "Conducting systematic clinical literature reviews can strengthen a manufacturer’s product portfolio. A thorough search and robust synthesis of available literature relevant to a particular medical device may provide important information to guide further product development, reveal much-needed evidence to substantiate current clinical indications, identify potential ‘off-label’ applications, or flag critical adverse event (AE) data.\n\nDepending on the scope, such a review might also consider information gathered from pre-clinical studies for regulatory purposes or to provide information of commercial interest concerning a competitor device. Within the U.S., in particular, both FDA guidance and the Code of Federal Regulations stipulate the need for literature reviews as sources of information regarding safety, efficacy, and ‘known use.’\n\nOur medical writers come from diverse clinical, technical, and scientific backgrounds to provide you with the objective answers you need to support your desired commercialization and business outcomes."
  }
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const UsFdaPage = () => {
  const [activeService, setActiveService] = useState(fdaServices[0]);

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
            US FDA & CMS CONSULTING FOR MEDICAL DEVICES AND IVDS
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
            { value: "50+", label: "FDA Pre-Submission Meetings Annually" },
            { value: "8+", label: "Years Experience with US FDA" },
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
            <Section title="Deep Expertise in FDA Compliance">
              <p>Whether launching a new medical device in the US or maintaining compliance for a device already marketed, NKB Regovanta's US team of regulatory consultants can help you successfully navigate a challenging FDA regulatory landscape.</p>
              <p>Unlike other regulatory consultancies, NKB Regovanta consultants work closely with our expansive team of preclinical and clinical experts so we understand what FDA reviewers expect to see from you. Our consultants combine NKB Regovanta's institutional knowledge with their own real world expertise to ensure your continued compliance with regulations.</p>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-sm aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80" alt="Service feature" className="w-full h-full object-cover" />
              </div>
            </Section>

            <Section title="FDA Regulatory Strategy and Compliance">
              
              <div className="flex flex-col md:flex-row gap-0 mt-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                {/* Left: Navigation List */}
                <div className="md:w-2/5 flex flex-col bg-white border-r border-gray-200 shrink-0">
                  {fdaServices.map((service) => (
                    <button
                      key={service.title}
                      onClick={() => setActiveService(service)}
                      className={`text-left px-5 py-4 text-sm font-semibold transition-all flex items-center justify-between border-b border-gray-100 last:border-0 group
                        ${activeService.title === service.title
                          ? 'bg-[hsl(195_65%_20%)] text-white'
                          : 'text-[hsl(195_65%_20%)] hover:bg-gray-50 hover:text-[hsl(195_65%_20%)]'
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
              <h3 className="text-lg font-black mb-2">Other Services That May Interest You</h3>
              <ul className="text-sm text-white/80 space-y-3 mt-4 text-left">
                <li>
                  <Link to="/services/eu-mdr" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> EU MDR & IVDR Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/services/quality-management" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Global RA/QA Consulting
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

export default UsFdaPage;
