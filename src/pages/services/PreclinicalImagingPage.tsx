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

const PreclinicalImagingPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Preclinical Research&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            PRECLINICAL IMAGING CORE LAB FOR MEDICAL DEVICES
          </h1>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base mt-4">
            <Link to="/contact">Let's Talk About Your Project</Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "1650", label: "Medical Device Preclinical Projects Last Year" },
            { value: "21", label: "Fully Equipped ORs and Cath Labs in US and Europe" },
            { value: "4", label: "Labs in US and Europe Offering Preclinical Services" },
            { value: "12", label: "Therapeutic Areas in Which NKB Regovanta Has Experience" },
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
            <Section title="End-to-End Preclinical Imaging Core Lab Expertise">
              <p>NKB Regovanta delivers end‑to‑end preclinical imaging Core Lab services that support medical device development from early feasibility through pivotal‑enabling studies. Our integrated approach ensures imaging data is scientifically robust, clinically relevant, and aligned with global regulatory expectations. We support the full imaging lifecycle, including:</p>
              
              <ul className="grid sm:grid-cols-2 gap-3 mt-4 mb-6">
                {["Study design", "Model selection", "Image acquisition", "Data analysis", "Data interpretation", "Reporting"].map(item => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#F5C754] mt-0.5" /> <span className="text-sm font-medium">{item}</span></li>
                ))}
              </ul>
            </Section>

            <Section title="Therapeutic Area–Specific Imaging Experience">
              <p>NKB Regovanta brings deep therapeutic area–specific imaging expertise to preclinical medical device development, ensuring imaging strategies are tailored to the anatomy, pathology, and clinical use of each device. Our experience spans a wide range of indications, allowing us to design imaging endpoints that are both scientifically rigorous and clinically meaningful.</p>
              
              <p className="mt-6 mb-3 font-bold text-[hsl(195_65%_20%)]">Key therapeutic areas supported include:</p>
              <ul className="space-y-2 mb-6">
                {["Coronary, Cerebral, and Peripheral Vascular", "Cardiology", "Neurology", "Orthopedics & Musculoskeletal", "Oncology"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-[#F5C754]" /> {item}</li>
                ))}
              </ul>
            </Section>

            <Section title="Advanced Imaging Modalities">
              <p>NKB Regovanta provides access to a comprehensive portfolio of advanced preclinical imaging modalities, enabling detailed anatomical, functional, and longitudinal assessment of medical devices. Imaging approaches are selected based on study objectives, target anatomy, and intended regulatory use of the data.</p>
              <p>Our modalities support non‑destructive, repeatable evaluation over time, allowing early insight into device behavior, tissue interaction, and biological response. Standardized acquisition and analysis protocols ensure repeatability, consistency, and cross‑study comparability.</p>
              
              <p className="mt-6 mb-3 font-bold text-[hsl(195_65%_20%)]">Available preclinical imaging modalities include:</p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Cone-beam CT (CB-CT) (Fluoroscopy) and 128-Slice CT",
                  "Micro‑Computed Tomography (micro‑CT)",
                  "Magnetic Resonance Imaging (MRI)",
                  "Ultrasound Imaging",
                  "Optical Imaging",
                  "Fluoroscopy",
                  "X-Ray",
                  "Angiography",
                  "Intravascular Imaging (e.g., IVUS, OCT)"
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" /> <span>{item}</span></li>
                ))}
              </ul>
            </Section>

            <Section title="A Trusted Partner for Preclinical Imaging Core Lab Services">
              <p>NKB Regovanta combines deep preclinical expertise with advanced imaging capabilities to support medical device innovation at every stage of development. Sponsors work with a single, experienced partner that understands how imaging data fits into the bigger picture—supporting device safety, performance evaluation, and translational relevance. Our teams apply scientific rigor, standardized methodologies, and cross‑functional insight to ensure imaging results are clear, consistent, and decision‑ready.</p>
              
              <p className="mt-6 mb-3 font-bold text-[hsl(195_65%_20%)]">What sets NKB Regovanta’s Preclinical Imaging Core Lab approach apart:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Imaging expertise embedded within a comprehensive preclinical and regulatory ecosystem",
                  "Strong focus on data quality, reproducibility, and translational relevance",
                  "Multidisciplinary scientific and clinical interpretation of imaging results",
                  "Proven experience supporting complex, high‑risk medical device programs"
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600"><div className="w-2 h-2 mt-1.5 rounded-full bg-[#F5C754] shrink-0" /> <span>{item}</span></li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-black text-[hsl(195_65%_20%)] mb-2">Meet Our Experts</h3>
              <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">Explore the depth of our team’s preclinical imaging core lab services.</p>
              
              <div className="space-y-6">
                {[
                  { name: "Michael A. Jorgenson, BS", title: "Principal Interventionalist", img: "[Michael Jorgenson]" },
                  { name: "Tyler LaMont", title: "Senior Interventionalist", img: "[Tyler LaMont]" },
                  { name: "Jeff Geschwind, MD", title: "Medical Director–Oncology", img: "[Jeff Geschwind]" },
                  { name: "Corey Leet", title: "Director, Regional Preclinical Operations", img: "[Corey Leet]" },
                  { name: "Isabelle Truyers, DVM", title: "Director of Laboratory Operations Diest", img: "[Isabelle Truyers]" }
                ].map((expert) => (
                  <div key={expert.name} className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden shrink-0 text-[10px] text-gray-400 text-center leading-tight">
                      {expert.img}
                    </div>
                    <div>
                      <h4 className="font-bold text-[hsl(195_65%_20%)] text-sm">{expert.name}</h4>
                      <p className="text-xs text-gray-500 font-medium mb-1 line-clamp-2">{expert.title}</p>
                      <Link to="#" className="text-[#F5C754] text-xs font-bold hover:underline">View Bio</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-6 text-white text-center">
              <h3 className="text-lg font-black mb-2">Related Services</h3>
              <ul className="text-sm text-white/80 space-y-3 mt-4 text-left">
                <li>
                  <Link to="/services/preclinical-research" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> GLP Preclinical Studies
                  </Link>
                </li>
                <li>
                  <Link to="/services/preclinical-feasibility" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Non-GLP Studies
                  </Link>
                </li>
                <li>
                  <Link to="/services/imaging-core-lab" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Imaging Core Lab
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

export default PreclinicalImagingPage;
