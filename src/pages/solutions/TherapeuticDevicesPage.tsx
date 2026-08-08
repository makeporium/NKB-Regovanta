import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, FileText, Video, Play } from "lucide-react";
import ExpertSidebar from "@/components/ExpertSidebar";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const TherapeuticDevicesPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Expertise&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-4xl mx-auto mb-6">
            NKB Regovanta HAS DEEP PRECLINICAL AND CLINICAL EXPERTISE IN NUMEROUS THERAPEUTIC AREAS
          </h1>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base mt-4">
            <Link to="/contact">Let's Talk About Your Project</Link>
          </Button>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-6xl py-16 grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Section title="Experience Matters">
              <p>At NKB Regovanta, we believe that relevant therapeutic experience is one of the main components of successful scientific, regulatory, and commercialization outcomes. We take great care to support your specific goals by appointing a project team comprised of experts with relevant product experience…a team that understands the nuances of your particular medical device, providing best practices and proven strategies to help you achieve desired outcomes.</p>
              
              <div className="my-8 rounded-2xl overflow-hidden shadow-sm aspect-[16/9]">
                <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80" alt="Service feature" className="w-full h-full object-cover" />
              </div>
            </Section>

            <Section title="Device Category Experience">
              <p>Last year, NKB Regovanta conducted 1,650+ preclinical studies and 270+ clinical research projects. We have established a reputation for our extensive knowledge of medium/high-risk devices in the cardiovascular, neurology, orthopedics, and wound care segments. However, our expertise does not stop there as seen below. Learn more about our experience in the following areas.</p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                {[
                  "Cardiovascular",
                  "Dental",
                  "Diabetes Care",
                  "Gastroenterology",
                  "General Surgery",
                  "Human Cell & Tissue",
                  "IVDs",
                  "NeuroTech",
                  "Ophthalmology",
                  "Orthopedics",
                  "Peripheral Vascular",
                  "Wound Care"
                ].map(cat => (
                  <Link key={cat} to="#" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg text-sm font-bold text-[hsl(195_65%_20%)] hover:border-[#F5C754] hover:bg-[#F5C754]/5 transition-colors group">
                    {cat}
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#F5C754] transition-colors" />
                  </Link>
                ))}
              </div>
            </Section>

            <Section title="Latest News and Resources">
              <div className="space-y-4 mt-6">
                <Link to="#" className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(195_65%_20%)] text-white flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[hsl(195_65%_20%)] group-hover:text-[#F5C754] transition-colors line-clamp-2">Can Material Evaluations Accurately Predict Irritation Outcomes for Medical Devices?</h3>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-2">Read More</p>
                  </div>
                </Link>
                
                <Link to="#" className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(195_65%_20%)] text-white flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[hsl(195_65%_20%)] group-hover:text-[#F5C754] transition-colors line-clamp-2">NeuroTech Devices: Regulatory, Preclinical, and Clinical Considerations for a Successful Path to Market</h3>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-2">Read More</p>
                  </div>
                </Link>

                <Link to="#" className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(195_65%_20%)] text-white flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[hsl(195_65%_20%)] group-hover:text-[#F5C754] transition-colors line-clamp-2">Inside Solaris Endovascular’s Path to PMA: A CEO’s Account of a Pivotal Study</h3>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-2">Read More</p>
                  </div>
                </Link>
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
              <ExpertSidebar />
            
            <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-black mb-2 text-[#F5C754]">Know Now with NKB Regovanta</h3>
              <p className="text-sm text-white/80 mb-6">Join 40,000+ medical device professionals who stay up to date with insights from NKB Regovanta subject matter experts. Sent 2x/month.</p>
              
              <form className="space-y-3">
                <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F5C754]" />
                <Button className="w-full btn-gradient font-bold rounded-lg py-6">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TherapeuticDevicesPage;
