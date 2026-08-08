import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesList = [
  { label: "Product Development Strategy", href: "/services/product-development-strategy", desc: "Expert guidance to de-risk your product development and optimize your path to market." },
  { label: "Medical Device Testing", href: "/services/medical-device-testing", desc: "Comprehensive analytical, chemical, and physical testing services for medical devices." },
  { label: "Biological Safety Consulting", href: "/services/biological-safety", desc: "Biological evaluation plans, risk assessments, and testing strategies per ISO 10993." },
  { label: "Clinical Research", href: "/services/clinical-research", desc: "End-to-end clinical trial management from first-in-human to post-market studies." },
  { label: "Preclinical Research", href: "/services/preclinical-research", desc: "In vivo GLP and non-GLP studies with advanced imaging and pathology support." },
  { label: "Medical Device Regulatory & Quality", href: "/services/regulatory", desc: "Global regulatory strategy, submission support, and quality system implementation." },
  { label: "Medical Writing Solutions", href: "/services/medical-writing", desc: "Clinical evaluation reports (CERs), protocols, and scientific publications." },
  { label: "Medical Device Reimbursement", href: "/services/reimbursement", desc: "Coding, coverage, and health economics strategies to ensure market adoption." },
  { label: "IVD", href: "/services/ivd", desc: "Specialized regulatory, clinical, and quality support for In Vitro Diagnostics." },
  { label: "NKB Regovanta APEX Program™", href: "/services/apex-program", desc: "Integrated development solutions delivering significant time and cost savings." },
  { label: "MedTech Market Research Consulting", href: "/services/medtech-market-research-consulting", desc: "Actionable insights, market sizing, and voice-of-customer research." },
];

const ServicesPage = () => (
  <PageLayout
    heroTag="Services"
    heroTitle="Comprehensive Medical Device Development Solutions"
    heroSubtitle="From early regulatory strategy to post-market surveillance — we deliver integrated, end-to-end solutions exclusively for medical device and IVD manufacturers."
    breadcrumbs={[{ label: "Services" }]}
  >
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((item, idx) => (
            <Link
              key={item.label}
              to={item.href}
              className={`group rounded-2xl border border-gray-100 border-t-4 border-t-[#F5C754] p-6 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col`}
            >
              <h3 className="font-bold text-[hsl(195_65%_20%)] mb-3 text-lg">{item.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-[#F5C754] group-hover:gap-3 transition-all mt-auto">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-[hsl(195_65%_20%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Not Sure Where to Start?</h2>
        <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
          Our regulatory experts will assess your project and recommend the right combination of services to meet your timeline and budget.
        </p>
        <Button asChild className="rounded-full px-10 py-6 text-base btn-gradient font-bold shadow-lg">
          <Link to="/locations-contact" className="flex items-center gap-2">Contact Us Today</Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default ServicesPage;
