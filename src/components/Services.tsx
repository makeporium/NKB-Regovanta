import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Microscope,
  Stethoscope,
  FileSearch,
  ActivitySquare,
} from "lucide-react";

type Tab = "consulting" | "preclinical" | "clinical" | "testing";

const Services = () => {
  const [activeTab, setActiveTab] = useState<Tab>("consulting");

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: "consulting", label: "Consulting & Strategy", icon: FileSearch },
    { key: "preclinical", label: "Preclinical Research", icon: Microscope },
    { key: "clinical", label: "Clinical Research", icon: ActivitySquare },
    { key: "testing", label: "Medical Device Testing", icon: Stethoscope },
  ];

  const services: Record<Tab, { icon: React.ElementType; title: string; description: string; link: string }[]> = {
    consulting: [
      {
        icon: FileSearch,
        title: "US FDA & CMS Consulting",
        description: "Navigate FDA 510(k), PMA, De Novo, and Q-Submission processes with deep institutional expertise.",
        link: "/services/us-fda",
      },
      {
        icon: FileSearch,
        title: "EU MDR & IVDR Consulting",
        description: "Ensure compliance with European regulations, maintain CE Marking, and manage legacy device transitions.",
        link: "/services/eu-mdr",
      },
      {
        icon: FileSearch,
        title: "Global QA/RA Compliance",
        description: "Implement and optimize ISO 13485 and FDA QSR quality management systems globally.",
        link: "/services/quality-management",
      },
      {
        icon: FileSearch,
        title: "Biological Safety Consulting",
        description: "Biological evaluation plans and reports, CERs, and toxicological risk assessments for your device.",
        link: "/services/biological-safety",
      },
    ],
    preclinical: [
      {
        icon: Microscope,
        title: "Medical Device GLP Studies",
        description: "GLP-compliant preclinical studies across our fully equipped ORs and Cath Labs in US and Europe.",
        link: "/services/preclinical-research",
      },
      {
        icon: Microscope,
        title: "Early Feasibility Studies",
        description: "Non-GLP proof-of-concept studies to minimize risk and determine ideal next steps early in development.",
        link: "/services/preclinical-feasibility",
      },
      {
        icon: Microscope,
        title: "Preclinical Pathology",
        description: "Expert in-life histopathology services with board-certified veterinary pathologists on staff.",
        link: "/services/preclinical-pathology",
      },
      {
        icon: Microscope,
        title: "Bioskills Training",
        description: "Surgical and procedural training programs for medical device companies and healthcare professionals.",
        link: "/services/bioskills",
      },
    ],
    clinical: [
      {
        icon: ActivitySquare,
        title: "Clinical Trial Management",
        description: "End-to-end clinical trial management from protocol design to final study report.",
        link: "/services/clinical-research",
      },
      {
        icon: ActivitySquare,
        title: "Data Management",
        description: "Robust clinical data management with validated EDC systems and biometrics expertise.",
        link: "/services/data-management",
      },
      {
        icon: ActivitySquare,
        title: "Clinical Biostatistics",
        description: "Rigorous statistical analysis plans and reporting to support regulatory submissions.",
        link: "/services/clinical-biostatistics",
      },
      {
        icon: ActivitySquare,
        title: "Safety Management & Reporting",
        description: "Comprehensive SAE reporting, vigilance, and post-market surveillance services.",
        link: "/services/safety-management",
      },
    ],
    testing: [
      {
        icon: Stethoscope,
        title: "Biocompatibility Testing",
        description: "ISO 10993 biological safety testing covering cytotoxicity, sensitization, irritation and more.",
        link: "/services/medical-device-testing",
      },
      {
        icon: Stethoscope,
        title: "Microbiology Testing",
        description: "Sterility, endotoxin, bioburden, and antimicrobial efficacy testing to meet regulatory standards.",
        link: "/services/microbiology",
      },
      {
        icon: Stethoscope,
        title: "Chemical Characterization",
        description: "Extractables and leachables testing and toxicological risk assessments per ISO 10993-18.",
        link: "/services/chemistry",
      },
      {
        icon: Stethoscope,
        title: "Biological Evaluation Plans",
        description: "Expert development of ISO 10993-1 compliant biological evaluation plans and reports.",
        link: "/services/biological-safety",
      },
    ],
  };

  const activeServices = services[activeTab];

  return (
    <section id="services" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F5C754]/10 text-[#C08518] font-bold text-xs uppercase tracking-widest mb-4">
            100% Focused on Medical Devices
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[hsl(195_65%_20%)] mb-6">
            100% Focused on Medical Device<br className="hidden md:block" /> and IVD Safety and Compliance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of strategic consulting services, from regulatory strategy to post-market support — as a single project or as an extension of your team.
          </p>
        </div>

        {/* Custom Tabs - 4 tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-[hsl(195_65%_20%)] text-white shadow-md"
                  : "bg-white text-gray-500 border border-gray-200 hover:text-[hsl(195_65%_20%)] hover:border-[hsl(195_65%_20%)]"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeServices.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-[hsl(195_65%_20%)]/5 flex items-center justify-center mb-6 group-hover:bg-[#F5C754] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-[hsl(195_65%_20%)] group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-black text-[hsl(195_65%_20%)] mb-3 group-hover:text-[#F5C754] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="flex items-center text-[#F5C754] text-sm font-bold uppercase tracking-wider gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Startup CTA Banner */}
        <div className="mt-12 bg-[hsl(195_65%_20%)] rounded-3xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F5C754]/20 text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">For Startups</span>
            <h3 className="text-2xl font-black mb-3">Accelerate Your Startup's Path to Market with Integrated CRO Support</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 text-sm">
              MedTech startups often lose valuable time coordinating multiple vendors across regulatory, preclinical, clinical, and testing activities. NKB Regovanta provides unified oversight.
            </p>
            <Link to="/solutions/startups" className="inline-flex items-center gap-2 bg-[#F5C754] text-[hsl(195_65%_20%)] font-black px-6 py-3 rounded-full hover:bg-[#C08518] hover:text-white transition-all">
              Startup Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
