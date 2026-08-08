import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import ExpertSidebar from "@/components/ExpertSidebar";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const NonGlpPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Preclinical Research&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            NON-GLP PRECLINICAL PROOF OF CONCEPT STUDIES FOR MEDICAL DEVICES
          </h1>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base mt-4">
            <Link to="/contact">Let's Talk About Your Project</Link>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "21", label: "Fully Equipped ORs and Cath Labs in US and Europe" },
            { value: "4", label: "Labs in US and Europe Offering Preclinical Services" },
            { value: "541", label: "Non-GLP Preclinical Projects in Last 12 Months" },
            { value: "13", label: "Surgeons and Interventionalists on Staff" },
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
            <Section title="Deep Expertise in Preclinical Testing for Medical Devices Under Development">
              <p>Non-GLP studies conducted early in the development process can minimize the risk of failure during GLP preclinical studies and help Sponsors determine ideal next steps.</p>
              <p>These proof-of-concept studies receive less regulatory scrutiny and don’t have the same archive or reporting requirements as GLP studies, making them a more cost-effective option. A non-GLP study also provides valuable in vivo data on device performance—an important step before investing in a GLP study.</p>
              <p>With NKB Regovanta, your non-GLP testing can be scheduled and completed quickly thanks to shorter testing durations, smaller sample sizes, and faster report delivery. Pricing can also be optimized when both non-GLP and GLP studies are completed through namsa.</p>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-sm aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80" alt="Service feature" className="w-full h-full object-cover" />
              </div>
            </Section>

            <Section title="Early Feasibility and Proof-of-Concept Studies">
              <p>Building on insights from non-GLP testing, NKB Regovanta’s early feasibility and proof-of-concept studies help teams evaluate device safety and performance before regulatory submission. Conducted in advanced preclinical environments, these studies inform design refinement and guide the next phase of development.</p>
              
              <ul className="space-y-4 mt-6 mb-6">
                <li className="flex items-start gap-2">
                   <CheckCircle className="w-5 h-5 text-[#F5C754] mt-0.5 shrink-0" />
                   <span><strong>Early Feasibility Studies:</strong> These studies assess device safety and function in limited clinical use. NKB Regovanta’s multidisciplinary teams support protocol development and data analysis to accelerate transition to pivotal preclinical trials.</span>
                </li>
                <li className="flex items-start gap-2">
                   <CheckCircle className="w-5 h-5 text-[#F5C754] mt-0.5 shrink-0" />
                   <span><strong>Proof-of-Concept Studies:</strong> Conducted in vivo within NKB Regovanta’s state-of-the-art labs, these studies provide early validation of device design and performance. They allow rapid iteration, cost-efficient testing, and actionable data that can help strengthen subsequent GLP programs.</span>
                </li>
              </ul>
              
              <p>NKB Regovanta remains a trusted partner in preclinical and early-stage development thanks to our decades of experience supporting the MedTech community. Our surgical teams can lead full procedures or collaborate with your KOLs and design personnel to ensure successful, stress-free studies.</p>
              
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
                  <Link to="/services/preclinical-research" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> GLP Preclinical Studies
                  </Link>
                </li>
                <li>
                  <Link to="/services/preclinical-pathology" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Pathology Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/bioskills" className="hover:text-[#F5C754] flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Bioskills Training
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

export default NonGlpPage;
