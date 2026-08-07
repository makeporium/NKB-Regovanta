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

const BioskillsPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Preclinical Research&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            MEDICAL DEVICE BIOSKILLS AND PHYSICIAN TRAINING
          </h1>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base mt-4">
            <Link to="/contact">Let's Talk About Your Project</Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "1650", label: "Medical Device Preclinical Projects Last Year" },
            { value: "13", label: "Board-Certified DaBT Toxicologists on Staff" },
            { value: "13", label: "Fully Equipped Operating Rooms in US and Europe" },
            { value: "3,000", label: "Medical Device and IVD Manufacturers Supported Each Year" },
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
            <Section title="Physician and User Training">
              <p>Expectations from regulators for physician training and human factors testing are continuing to grow. It’s more important than ever to bring physicians, engineers, and technical staff into the simulation lab to learn and train on medical devices. It is essential that they overcome the learning curve with these complex systems as they accurately simulate the feel and rigors of an operating room (OR) or catheterization lab. NKB Regovanta’s facilities can fulfill this need, as well as host or train your internal trainers with expertise from our staff.</p>
              <p>Performing human cadaver studies since 2006, our Minneapolis USA lab is an approved human cadaver site authorized to perform device evaluations. We provide whole body cadavers as well as partial cadavers or various tissues. Combining our access to tissues with our equipment and expertise allows us to provide device evaluations at the highest levels. We also provide in vivo tissue for use in wet lab device evaluations.</p>
              
              {/* Image Placeholder */}
              <div className="my-8 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 aspect-[16/9] relative flex items-center justify-center group">
                <div className="absolute inset-0 bg-black/5" />
                <p className="text-gray-400 font-medium text-sm text-center px-4">
                  [A person in gloves holds an endoscope with a light in a medical setting.]
                </p>
              </div>
            </Section>

            <Section title="Imaging Equipment in Our Labs">
              <p>NKB Regovanta labs in the US and France contain a total of 14 fully equipped operating rooms and cath labs, equipped with:</p>
              <ul className="grid sm:grid-cols-2 gap-3 mt-4 mb-6">
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> Dual-Source, 128-slice CT</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> Micro-CT</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> Fluoroscopy</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> Fixed and Mobile Cath Lab C-Arms</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> Transthoracic Ultrasound (TTE)</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> 3D Intracardiac Ultrasound (ICE)</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> 3D Transesophageal Ultrasound (TEE)</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> Intravascular Ultrasound (IVUS)</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> 3D Optical Coherence Tomography (OCT)</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> Endoscopy Towers</li>
                <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5" /> X-Ray Imaging, including Faxitron</li>
              </ul>
            </Section>

            <Section title="AV Technology Allows Observation On-Site or Remotely">
              <p>NKB Regovanta operating rooms and cath labs are equipped with glass walled observation rooms and large in-room monitors. If you or someone on your team is unable to attend on-site, our facilities are also equipped with high resolution video cameras and two way audio communications for live streaming. We offer the ability to record procedures for future reference or training purposes.</p>
            </Section>
            
            <Section title="Specimen Preparation Techniques">
              <ul className="flex gap-6 mt-2">
                <li className="flex items-center gap-2 font-medium text-[hsl(195_65%_20%)]"><div className="w-2 h-2 rounded-full bg-[#F5C754]" /> Fresh or Fixed Tissue</li>
                <li className="flex items-center gap-2 font-medium text-[hsl(195_65%_20%)]"><div className="w-2 h-2 rounded-full bg-[#F5C754]" /> Full or Partial Perfusion</li>
                <li className="flex items-center gap-2 font-medium text-[hsl(195_65%_20%)]"><div className="w-2 h-2 rounded-full bg-[#F5C754]" /> Resin and Silicone Casts</li>
              </ul>
            </Section>

            <Section title="Deep Expertise In Numerous Device Categories">
              <p>NKB Regovanta tested nearly 120,000 devices last year so we’ve seen nearly every combination of technologies. We also have extensive preclinical and clinical experience in a wide variety of device categories.</p>
              <ul className="grid sm:grid-cols-3 gap-2 mt-4">
                {["Cardiovascular", "In Vitro Diagnostics", "General Surgery", "Neurovascular", "Orthopedics", "Peripheral Vascular", "Wound Care"].map(cat => (
                   <li key={cat} className="text-sm border border-gray-100 bg-gray-50 px-3 py-2 rounded-md">{cat}</li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-black text-[hsl(195_65%_20%)] mb-2">Meet Our Experts</h3>
              <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">Explore the depth of our team’s preclinical expertise.</p>
              
              <div className="space-y-6">
                {[
                  { name: "Michael A. Jorgenson, BS", title: "Principal Interventionalist", img: "[Michael Jorgenson]" },
                  { name: "Jessica Barnhart", title: "Surgeon", img: "[Jessica Barnhart]" },
                  { name: "Tyler LaMont", title: "Senior Interventionalist", img: "[Tyler LaMont]" },
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
              <h3 className="text-lg font-black mb-2">Other Preclinical Services</h3>
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
                  <Link to="/services/preclinical-pathology" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Pathology Services
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

export default BioskillsPage;
