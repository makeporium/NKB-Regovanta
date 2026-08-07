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

const PathologyPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Preclinical Research&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            PRECLINICAL PATHOLOGY SERVICES FOR MEDICAL DEVICES
          </h1>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base mt-4">
            <Link to="/contact">Let's Talk About Your Project</Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "21", label: "Fully Equipped ORs and Cath Labs in US and Europe" },
            { value: "1650", label: "Medical Device Preclinical Projects Last Year" },
            { value: "13", label: "Board-Certified DaBT Toxicologists on Staff" },
            { value: "17", label: "Pathologists Located in the US and Europe" },
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
            <Section title="Get Clearer Answers With NKB Regovanta’s Preclinical Pathology Research">
              <p>Pathology plays a central role in preclinical development, revealing how devices interact with living tissue and identifying issues before clinical trials begin. Skilled pathologists can pinpoint early biological responses and uncover potential safety concerns that inform design or material changes long before human evaluation.</p>
              <p>NKB Regovanta’s pathology laboratories are built for precision and efficiency, supporting high study volumes while maintaining the rigorous standards expected in regulated research. Fully equipped histopathology and SEM/TEM laboratories allow detailed examination of tissue-device interactions across a wide range of preclinical applications.</p>
              
              <p className="mt-4 font-semibold text-[hsl(195_65%_20%)]">Our pathology teams provide:</p>
              <ul className="space-y-3 mt-4 mb-6">
                <li className="flex items-start gap-2">
                   <CheckCircle className="w-5 h-5 text-[#F5C754] mt-0.5 shrink-0" />
                   <span>Gross necropsy oversight and expert interpretation of histopathology slides</span>
                </li>
                <li className="flex items-start gap-2">
                   <CheckCircle className="w-5 h-5 text-[#F5C754] mt-0.5 shrink-0" />
                   <span>Comprehensive reporting on device safety and tissue response</span>
                </li>
                <li className="flex items-start gap-2">
                   <CheckCircle className="w-5 h-5 text-[#F5C754] mt-0.5 shrink-0" />
                   <span>Advanced sectioning using paraffin, plastic thin microtomy, laser microtome systems, and plastic EXAKT ground sectioning</span>
                </li>
              </ul>
              <p>Each study is conducted by experienced histotechnicians under the supervision of board-certified pathologists. This approach ensures the accuracy and consistency needed to guide critical development decisions and prepare devices for clinical success.</p>
              
              {/* Image Placeholder */}
              <div className="my-8 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 aspect-[16/9] relative flex items-center justify-center group">
                <div className="absolute inset-0 bg-black/5" />
                <p className="text-gray-400 font-medium text-sm text-center px-4">
                  [Person using a white microscope in a lab with blue-lit screens in the background.]
                </p>
              </div>
            </Section>

            <Section title="Advancing Medical Device Pathology Through Proven Expertise">
              <p>We have been assisting medical device companies with biocompatibility testing, consulting and preclinical services since 1967.</p>
              
              <div className="grid sm:grid-cols-2 gap-8 mt-6">
                <div>
                   <h3 className="font-bold text-[hsl(195_65%_20%)] mb-3">Post-Mortem Exams</h3>
                   <ul className="space-y-2 text-sm text-gray-600">
                     <li>• Large or small in vivo models</li>
                     <li>• Evans blue staining</li>
                     <li>• Ex-vivo perfusion fixation</li>
                     <li>• Fluorogram guided tissue harvesting</li>
                     <li>• In-situ perfusion fixation</li>
                     <li>• Microdissection</li>
                     <li>• Pharmacokinetic sampling</li>
                     <li>• TTC in-situ and ex-vivo staining</li>
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-[hsl(195_65%_20%)] mb-3">Imaging</h3>
                   <ul className="space-y-2 text-sm text-gray-600">
                     <li>• High-resolution radiography (Faxitron)</li>
                     <li>• Micro-CT</li>
                     <li>• Histomorphometry</li>
                     <li>• Scanning electron microscopy (SEM)</li>
                     <li>• Transmission electron microscopy (TEM)</li>
                     <li>• Stereomicroscopy</li>
                   </ul>
                </div>
              </div>
            </Section>

            <Section title="Immunohistochemistry (IHC) Services">
              <p>NKB Regovanta offers immunohistochemistry (IHC) services as part of our histopathology suite to pinpoint how specific proteins and cell markers respond to implanted devices or materials. Through selective antibody staining, IHC helps distinguish biological responses that traditional histology may not capture. These studies give researchers a sharper view of how implanted materials behave in living systems, allowing teams to interpret subtle tissue changes and refine device design with greater accuracy.</p>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-6 text-white text-center">
              <h3 className="text-lg font-black mb-2">Other Services That May Interest You</h3>
              <ul className="text-sm text-white/80 space-y-3 mt-4 text-left">
                <li>
                  <Link to="/services/preclinical-research" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Preclinical Research
                  </Link>
                </li>
                <li>
                  <Link to="/services/preclinical-feasibility" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Non-GLP Studies
                  </Link>
                </li>
                <li>
                  <Link to="/services/preclinical-research" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> GLP Preclinical Studies
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-black text-[hsl(195_65%_20%)] mb-4">Take the Next Step</h3>
              <p className="text-sm text-gray-600 mb-6">Want to learn more about our experience in medical device pathology and preclinical research?</p>
              <Button asChild className="w-full btn-gradient rounded-full">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PathologyPage;
