import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const faqs = [
  {
    q: "What are the biggest regulatory challenges for MedTech startups?",
    a: "MedTech startups often struggle with identifying the correct regulatory pathway, understanding jurisdiction-specific requirements (like FDA vs. EU MDR), and preparing compliant documentation. Early missteps can lead to costly delays, so it’s critical to build a regulatory strategy early in the development process."
  },
  { q: "How do I attract investors as a MedTech startup?", a: "By establishing a clear path to market, robust clinical strategies, and mitigating regulatory risk early." },
  { q: "When should I start thinking about reimbursement and market access?", a: "As early as the concept phase. Investors want to see that your device has a clear path not just to approval, but to commercial viability and payment." },
  { q: "When should I start building a quality management system (QMS)?", a: "Early in the design phase. A compliant QMS is essential for passing regulatory audits and getting your device to market." },
  { q: "Where should startups launch first – US, the EU, or both?", a: "This depends on the device type, existing predicates, and the company's funding runway." },
  { q: "How does your go-to-market strategy influence your fundraising approach?", a: "A detailed GTM strategy proves to investors that you understand the competitive landscape and have a viable path to revenue." },
  { q: "How do you plan commercialization with cost and market in mind?", a: "Through careful reimbursement planning, scalable manufacturing, and targeted early feasibility studies." },
  { q: "When should startups start their economic and reimbursement strategy?", a: "Before pivotal trials begin, to ensure the data collected supports your economic value proposition to payers." }
];

const StartupsPage = () => {
  const [activeStage, setActiveStage] = useState("Seed Stage");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
            <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;MedTech Startup Solutions&nbsp;&nbsp; —</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto mb-6">
              SOLUTIONS FOR MEDTECH STARTUPS
            </h1>
            <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base mt-4">
              <Link to="/contact">Let's Talk About Your Project</Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "315", label: "Medical Device Clinical and Regulatory Specialists on Staff" },
              { value: "1,000+", label: "MedTech Startups Supported Every Year" },
              { value: "10", label: "Consultants with Previous US FDA or EU Notified Body Experience" },
              { value: "157K+", label: "Medical Device Tests Conducted Last Year" },
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
              <Section title="The MedTech Startup Landscape">
                <p>Launching a medical device as a startup is a bold and complex endeavor. From navigating regulatory hurdles to securing funding and proving clinical value, MedTech innovators face a steep climb.</p>
                <p>The reality is stark: over 75% of MedTech startups fail, often due to regulatory delays, lack of market demand, or insufficient funding. These challenges are compounded by the high cost of clinical trials and the need for specialized regulatory expertise.</p>
                <p>That’s where NKB Regovanta Startup Solutions steps in. We offer early-stage MedTech companies a tailored, integrated, end-to-end support system, from context of use development to preclinical strategy and regulatory planning to clinical execution and market access. Our dedicated Startup Solutions team helps you avoid costly missteps, accelerate timelines, and build investor confidence with data-driven strategies and global expertise.</p>
              </Section>

              <Section title="NKB Regovanta Startup Solutions">
                <p>Every year NKB Regovanta works with 1,000+ MedTech startups to help them bring new innovations to market successfully. With decades of experience in the MedTech space and a deep understanding of the unique challenges that early-stage companies face, NKB Regovanta provides tailored, scalable solutions that accelerate development, reduce risk, and streamline the path to regulatory and commercial success.</p>
                <p>NKB Regovanta is here to help startups succeed because it’s our mission to accelerate the introduction of new medical device technology than improve the lives of patients worldwide. We are your partner throughout the lifecycle of your medical device and your new company.</p>
                
                {/* Funding Stages Tabs */}
                <div className="mt-10 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
                    {["Seed Stage", "Series A", "Series B", "Series C+ to Exit"].map(stage => (
                      <button 
                        key={stage}
                        onClick={() => setActiveStage(stage)}
                        className={`flex-1 min-w-[120px] py-4 px-4 text-sm font-bold transition-colors border-b-2
                          ${activeStage === stage ? 'border-[hsl(195_65%_20%)] text-[hsl(195_65%_20%)] bg-white' : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100'}`}
                      >
                        {stage}
                      </button>
                    ))}
                  </div>
                  <div className="p-8 bg-white">
                    {activeStage === "Seed Stage" ? (
                      <div>
                        <h3 className="text-xl font-black text-[hsl(195_65%_20%)] mb-4">Seed Stage</h3>
                        <p className="text-sm text-gray-600 mb-6">NKB Regovanta supports earlystage medtech startups by establishing the foundational regulatory strategy required to secure seed funding and accelerate product development. Our experts deliver the clarity, evidence, and regulatory direction investors expect at this stage. Below are services we typically see our startup partners using at this stage:</p>
                        
                        <div className="space-y-4 text-sm text-gray-700">
                          <div>
                            <strong className="text-[hsl(195_65%_20%)]">Regulatory</strong>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                              <li>Strategic Summary – High level summaries of key product development areas.</li>
                              <li>Product Development Plan – Gannt chart style product plan with time and cost estimates.</li>
                              <li>Regulatory Strategy – provide regulatory pathway and device classification.</li>
                              <li>Regulatory Assessments – review existing strategy and documentation to identify gaps or paths forward.</li>
                              <li>Regulatory Pathway and Device Classification</li>
                            </ul>
                          </div>
                          <div>
                            <strong className="text-[hsl(195_65%_20%)]">Reimbursement</strong>
                            <ul className="list-disc pl-5 mt-2 text-gray-600"><li>Reimbursement Strategy</li></ul>
                          </div>
                          <div>
                            <strong className="text-[hsl(195_65%_20%)]">Preclinical</strong>
                            <ul className="list-disc pl-5 mt-2 text-gray-600"><li>Preclinical Strategy and Insights</li></ul>
                          </div>
                          <div>
                            <strong className="text-[hsl(195_65%_20%)]">Clinical</strong>
                            <ul className="list-disc pl-5 mt-2 text-gray-600"><li>Clinical Strategy</li></ul>
                          </div>
                          <div>
                            <strong className="text-[hsl(195_65%_20%)]">Investor Relations</strong>
                            <ul className="list-disc pl-5 mt-2 text-gray-600">
                              <li>Pitch deck development</li>
                              <li>Executive-level input</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="py-12 text-center text-gray-500 italic">
                        Select Seed Stage to view available startup content.
                      </div>
                    )}
                  </div>
                </div>
              </Section>

              <Section title="NKB Regovanta Strategic Services: Aligning Vision with Execution">
                <p>Bringing a medical device to market requires more than innovation, it demands a clear, actionable strategy. NKB Regovanta’s Strategic Services are designed to help MedTech startups build that foundation with precision and execute with confidence. Whether you’re preparing for regulatory engagement, investor meetings, or internal planning, our team delivers high-impact tools to guide your next steps.</p>
                
                <div className="space-y-6 mt-8">
                  {[
                    { title: "Strategic Summary", desc: "High-level, cross-functional roadmap covering regulatory, clinical, preclinical and medical device testing areas outlining key milestones and parallel development opportunities to reduce time, cost, and risk." },
                    { title: "Product Development Plan (PDP)", desc: "Detailed, stage appropriate roadmap translated into a Gantt-style schedule with defined activities, timelines, and dependencies to guide execution." },
                    { title: "Regulatory Strategy", desc: "Deep dive regulatory strategy for an indicated market and device including a comparative pathway analysis and estimated market submission guidelines." },
                    { title: "Clinical Strategy", desc: "Clinical evidence generation strategy that includes the design of first-in-human and pivotal studies, with defined, detailed endpoints, target population, and feasibility considerations." },
                    { title: "Reimbursement Strategy", desc: "Reimbursement strategy reviewing and summarizing existing coding, coverage and payment opportunities in the U.S., and how to establish new codes that will ensure payment for your innovation." },
                    { title: "Investor Pitch Deck Materials", desc: "A high level summary of regulatory, clinical and/or reimbursement strategies to be incorporated in the Investor Pitch Deck that attracts and keeps investors’ attention and establishes credibility." }
                  ].map((service, idx) => (
                    <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-[hsl(195_65%_20%)] mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#F5C754]" /> {service.title}
                      </h4>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-bold text-[hsl(195_65%_20%)]">By taking advantage of this solution, you can reassure investors that you are on the right path and reduce the risk associated with your proposed approach.</p>
              </Section>

              <Section title="NKB Regovanta Preclinical for Product Development Insights">
                <p>Early‑stage medical device innovators often face a critical challenge: gaining timely, reliable insight into how their technologies perform in a realistic preclinical environment. Start‑Ups need a way to test, learn, and refine quickly—without navigating complex processes or large‑scale study commitments.</p>
                <p>NKB Regovanta’s Preclinical Insights program was created specifically to support this need. Built for small and emerging companies, Preclinical Insights provides a client with a streamlined pathway to market, with early technical feedback and expert perspective to help shape the development strategy. Rather than offering a full study program, this service focuses on giving Start‑Ups the opportunity to explore feasibility, strengthen decision‑making, and identify the right next steps with confidence.</p>
              </Section>

              <Section title="NKB Regovanta Fractional Executive Advisory Services">
                <p>Early-stage MedTech companies often face critical gaps in leadership and specialized expertise that can slow progress and increase risk. NKB Regovanta’s Fractional Executive Advisory Services are designed to fill those gaps with seasoned professionals who bring strategic insight and operational excellence to your team – without the cost and time overhead of full-time hires.</p>
                
                <ul className="space-y-4 mt-6">
                  {[
                    { title: "Fractional Executive-level Strategy Advisor", desc: "Plays a pivotal role in shaping both clinical and business strategy—offering executive-level input on clinical investigations, product development, market positioning, reimbursement, and investor engagement." },
                    { title: "Fractional Regulatory Affairs Advisor", desc: "Provides strategic regulatory leadership—developing, refining, and guiding regulatory pathways while navigating global requirements with confidence to support successful submissions and long‑term compliance." },
                    { title: "Fractional Clinical Research Advisor", desc: "Provides senior‑level guidance on clinical development—shaping study designs, evidence‑generation plans, and trial execution strategies to ensure your clinical program supports regulatory approval, reimbursement, and investor expectations." },
                    { title: "Fractional Quality Advisor", desc: "Offers expert leadership in building and refining your Quality Management System (QMS), ensuring compliance with global standards while supporting scalable processes across design controls, risk management, supplier oversight, and manufacturing readiness." }
                  ].map((role, idx) => (
                    <li key={idx} className="border-l-2 border-[#F5C754] pl-4">
                      <strong className="text-[hsl(195_65%_20%)] block mb-1">{role.title}</strong>
                      <span className="text-gray-600">{role.desc}</span>
                    </li>
                  ))}
                </ul>
              </Section>
              
              <Section title="Struggling to Build Your First Biological Evaluation Plan? We Can Help.">
                <p>Many startups developing their first medical device aren’t sure where to begin with a Biological Evaluation Plan (BEP) —or how to ensure it will meet regulatory expectations. NKB Regovanta’s CoPilot Program was created specifically for early-stage companies that need structured guidance without the high upfront cost.</p>
                <div className="bg-[#F5C754]/10 p-6 rounded-xl border border-[#F5C754]/20 mt-6">
                  <h4 className="font-black text-[hsl(195_65%_20%)] mb-4">With this program, you receive:</h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li><strong className="text-[hsl(195_65%_20%)]">A step-by-step BEP template with clear instructions:</strong> Includes guidance, tips, and practical examples to help you understand what regulators expect.</li>
                    <li><strong className="text-[hsl(195_65%_20%)]">On-demand review and expert consultation:</strong> A NKB Regovanta biological safety expert will support you at any point during your BEP development.</li>
                    <li><strong className="text-[hsl(195_65%_20%)]">Confidence in regulatory readiness:</strong> You’ll leave with a BEP that not only meets but exceeds global regulatory expectations.</li>
                  </ul>
                </div>
              </Section>

              <Section title="Frequently Asked Questions (FAQs)">
                <div className="space-y-3 mt-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      >
                        <span className="font-bold text-[hsl(195_65%_20%)] text-sm">{faq.q}</span>
                        {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                      </button>
                      {openFaq === idx && (
                        <div className="px-6 py-4 bg-white text-sm text-gray-600 border-t border-gray-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-black text-[hsl(195_65%_20%)] mb-2">Meet Our Experts</h3>
                <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">Explore the depth of our team’s expertise in working with MedTech Startups.</p>
                
                <div className="space-y-6">
                  {[
                    { name: "Adam E. Saltman, MD, PhD", title: "Chief Medical Officer", img: "[Adam E. Saltman]" },
                    { name: "Gaëlle Clermont, PharmD, PhD", title: "Principal Strategy Consultant", img: "[Gaëlle Clermont]" },
                    { name: "Jack Risdahl, DVM, PhD", title: "Principal Strategy Consultant, Preclinical", img: "[Jack Risdahl]" },
                    { name: "Carla M. Wiese, BS-Mech Eng", title: "Principal Strategy Consultant, Regulatory", img: "[Carla Wiese]" },
                    { name: "Chris Mullin, MS", title: "Director, Clinical Consulting", img: "[Chris Mullin]" },
                    { name: "Adrian Keene", title: "Associate VP, Global Biological Safety", img: "[Adrian Keene]" }
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
                    <Link to="/services/clinical-research" className="hover:text-[#F5C754] flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Clinical Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/consulting" className="hover:text-[#F5C754] flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Consulting Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/preclinical-research" className="hover:text-[#F5C754] flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> Preclinical Research
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

export default StartupsPage;
