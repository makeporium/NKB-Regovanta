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

const ApexPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;NKB Regovanta APEX Program™&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            A PROVEN DEVELOPMENT SOLUTION FOR SUCCESSFUL MEDTECH COMMERCIALIZATION
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">
            Take the first step to accelerate regulatory approval and commercialization today.
          </p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "100+", label: "Programs successfully delivered" },
            { value: "30%", label: "Time Savings Up To" },
            { value: "50%", label: "Cost Savings Up To" },
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
          <Section title="What is the NKB Regovanta APEX Program™?">
            <p>Medical device development is complex. In today's value-based environment, the commercial challenges are more numerous than ever as regulatory approval does not guarantee market adoption. To mitigate risk, preserve capital and ensure the most efficient path to commercial success, development functions must be aligned with an integrated strategy.</p>
            <p>The NKB Regovanta APEX Program™ is designed with these objectives in mind. We help you succeed through our people — top Subject Matter Experts in the MedTech industry — and our processes — proven, integrated services and tools that deliver predictable planning, phase overlap and vertical integration of all product development phases.</p>
            <p>Our integrated consulting, lab and clinical approach ultimately delivers Sponsors significant time savings, cost reduction and accelerated commercialization.</p>
          </Section>

          <Section title="How Does it Work?">
            <p>When partnering with NKB Regovanta, we pair you with the top experts in your therapeutic, geographic and regulatory categories to provide support through our proven solutions and help guide you throughout every phase of development.</p>
            <p>Starting with the end in mind, a dedicated Program Director guides a team of NKB Regovanta experts to build a strategy and execution plan for market approval and adoption. This includes best-fit strategies for market access, reimbursement, clinical and regulatory objectives – all while optimizing timelines and costs as effectively and efficiently as possible.</p>
            
            <div className="mt-6">
              <h3 className="font-bold text-[hsl(195_65%_20%)] mb-3">The NKB Regovanta APEX Program provides:</h3>
              <ul className="space-y-3">
                {[
                  "Integrated support across multiple services and phases of product development",
                  "Depth and breadth of global Subject Matter Experts at your fingertips",
                  "A dedicated, expert Program Director who you can trust as your development partner, Sponsor advocacy and effective management of any outside suppliers and internal stakeholders",
                  "Real-time progress updates via customized product development plans and dashboards of NKB Regovanta services: understand where you are in the development process anytime, anywhere",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#F5C754] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section title="Benefits">
            <p>When partnering with NKB Regovanta, your internal team will work across multiple services and phases of product development with one vendor. Sponsors experience the benefit of reduced timelines and costs, in addition to:</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                "Simplifying an often complicated development process",
                "Delivering predictability and 24/7, easy access to project status",
                "De-risking product development with early identification and mitigation plans",
                "Eliminating the need to engage with multiple vendors",
                "Helping tell the \"right\" story to each stakeholder",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Ready to Accelerate Your Success?</h2>
            <p className="text-white/70 mb-6">Schedule your consultation with the NKB Regovanta APEX Program team today.</p>
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

export default ApexPage;
