import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Search } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const MedtechResearchPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;MedTech Market Research Consulting&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            MEDICAL DEVICE MARKET RESEARCH CONSULTING THAT PUSHES YOUR IDEAS FORWARD
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">
            An experienced MedTech market research consulting partner can make all the difference when looking to effectively bring a new device to market.
          </p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "1500+", label: "Projects Completed" },
            { value: "100,000+", label: "Participants in our Network" },
            { value: "35+", label: "Native Languages" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <p className="text-3xl font-black text-[#F5C754]">{s.value}</p>
              <p className="text-xs text-white/70 uppercase tracking-wide mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-5xl py-16">
          <Section title="NKB Regovanta MedTech Market Research">
            <p>NKB Regovanta provides customized IVD and MedTech market research insights. Here's how:</p>
            <ul className="space-y-3 mt-4">
              {[
                "Leveraging extensive in-house databases of market data",
                "Customized research interviews conducted by experienced researchers",
                "Thorough analysis of collected data",
                "Clear, meaningful results presentations featuring actionable recommendations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <Search className="w-5 h-5 text-[#F5C754] shrink-0" />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-medium text-[hsl(195_65%_20%)]">The customer insights obtained are useful on their own, but become especially powerful when combined with regulatory, clinical and market access strategies.</p>
          </Section>

          <Section title="MedTech Market Research That Delivers Actionable Results">
            <p>In the beginning, we'll sit down with you to discuss your unique product, market and needs. These insights will help you make better business decisions that serve your customers and drive increased market share.</p>
            <p>What your device needs will be unique to you, but the insights we can assist with are vast:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
              {[
                "Market sizing and segmentation",
                "Brand perception",
                "Personas",
                "Patient pathways",
                "Competitive assessment and monitoring",
                "Reimbursement landscapes",
                "Voice of Customer (VOC)",
                "Usability testing",
                "Customer needs and beyond",
              ].map((area) => (
                <div key={area} className="flex items-start gap-1.5 text-sm">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5C754] mt-0.5 shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Need answers on the economic value your product could bring to the market?</h2>
            <p className="text-white/70 mb-6">Let our MedTech Market Research team provide the actionable insights you need.</p>
            <Button asChild className="btn-gradient rounded-full px-8 py-3 font-bold">
              <Link to="/locations-contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default MedtechResearchPage;
