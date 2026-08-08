import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const ClinicalPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Clinical Research&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">COMPREHENSIVE AND CUSTOMIZED CLINICAL TRIAL CONSULTING</h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">Let our clinical research consultants partner with you to successfully navigate all phases of clinical research.</p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base"><Link to="/locations-contact">Contact Us</Link></Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "270", label: "Clinical Projects Per Year" },
            { value: "100%", label: "Medical Device Focus" },
            { value: "1,500+", label: "Clinical Trials Supported" },
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
          <Section title="Customized Clinical Research Consulting Programs for Your Unique Clinical Goals">
            <p>The global medical device landscape is complex. Getting a new product or therapy approved requires compelling clinical evidence. At NKB Regovanta, we know what you're up against and understand how to set you up for success, which is why we offer expert medical device clinical research consulting services.</p>
            <p>Our clinical trial consulting expertise spans every manner of technology, therapy, indication and geography. This broad range of experience allows us to successfully lead our clients through all phases of clinical research: from first-in-human to pivotal and post-market.</p>
            <p>NKB Regovanta's global footprint also provides clients direct access to local networks to conduct safe, effective and efficient clinical trials, which are optimized to achieve regulatory approval and continued innovation.</p>
          </Section>

          <Section title="Clinical Trial Research Consulting Services">
            <div className="space-y-6">
              {[
                {
                  title: "Biostatistics and Statistical Programming",
                  body: "NKB Regovanta's Biostatistics Team works in parallel with our Study Management and Data Management Teams to offer each client a custom-designed program that maximizes biostatistics efforts and outcomes. Leveraging NKB Regovanta's vast knowledge and expertise in medical devices, our Biostatisticians capture, analyze and present data from clinical trials to provide the clinical research services, support and evidence you need to be successful.",
                  items: ["Adaptive Study Design", "Clinical Study Design: Endpoint Selection, Sample Size Calculations and Power Analysis", "Data Analysis for Scientific Papers or Regulatory Submissions", "Data Monitoring Committee (DMC)/Data Safety Monitoring Board (DSMB) Membership and Support", "Global Regulatory Authority Meetings and Conferences on Statistical Design", "Medical Device Data Analysis and Statistical Reports"],
                },
                {
                  title: "Clinical Evidence and Post-Market Studies",
                  body: "Medical device Sponsors are intimately aware that regulatory approval can be meaningless without clinical evidence to back a product's claims and reimbursement objectives. NKB Regovanta offers a broad array of clinical evidence and post-market study support services to assist manufacturers to justify, bolster and differentiate product claims to clinicians, patients and payers.",
                  items: ["FDA Condition of Approval Studies", "Literature-Based Meta-Analysis", "Post-Market Patient Registry Study", "Randomized-Controlled, Multi-Center Clinical Trials"],
                },
                {
                  title: "Clinical Study Management",
                  body: "NKB Regovanta's Clinical Research Team provides customized clinical study design and protocol development that balances the interests of multiple stakeholders. This is achieved by collaborating with our internal Regulatory, Reimbursement and Statistical Teams. Each study undergoes regularly scheduled reviews in which NKB Regovanta's Project Management Team and Clinical Study Managers scrutinize key factors such as quality, budget and timelines.",
                  items: ["Adaptive Study Design", "Case Report Form (CRF) Design", "Clinical Hypothesis Consultation", "Draft IDE submission, including Protocol Summary", "Endpoint Selection and Confirmation", "Protocol Writing and Review", "Statistical Analysis Plans for Clinical Trial Protocols", "Submission of IDE to FDA"],
                },
                {
                  title: "Data Management and EDC",
                  body: "NKB Regovanta offers a full range of clinical research consulting solutions for comprehensive data management and support, delivered by our experienced Clinical Data Managers and Clinical Database Developers. Additionally, NKB Regovanta offers various Electronic Data Capture (EDC) and data management tools to optimally achieve clinical data goals, including NKB Regovanta's proprietary Syncrony System.",
                  items: ["Adjudication", "Case Report Forms (CRFs)", "ePRO", "Inventory Management", "Payments", "Randomization", "Trial and Site Management"],
                },
                {
                  title: "Field Clinical Engineering Staffing",
                  body: "NKB Regovanta provides access to a team of credentialed, insured professional Field Clinical Engineers (FCEs) with significant research, industry and clinical experience within specific therapeutic areas and geographic locations. FCEs are skilled at securing data that is most likely to support regulatory and reimbursement goals.",
                  items: ["Bi-directional clinical site and sponsor communication", "Decades of hands-on clinical experience across numerous therapeutic areas", "Expertise with site selection and development of efficient clinical processes", "Knowledge of correct study management", "Team approach for seamless cross-coverage"],
                },
                {
                  title: "Imaging Core Laboratory",
                  body: "With technology at its crux and a dedicated team of world-renowned physicians at the helm, NKB Regovanta offers the highest quality Imaging Core Laboratory services in the CRO industry. Our expert imaging reviewers ensure quality and accuracy of image interpretation and analyses.",
                  items: ["End-to-end service from image transfer and database set-up to site training", "Study protocol review for imaging endpoints", "Seamless integration and leverage of systems across NKB Regovanta", "Transparency at every step and real-time client access to data", "Industry-best image reviews and turnaround times"],
                },
              ].map((s) => (
                <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-[hsl(195_65%_20%)] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.body}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight className="w-3.5 h-3.5 text-[#F5C754] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Safety Reporting and Clinical Events Committees">
            <p>NKB Regovanta provides expert support for Clinical Events Committees (CEC), Data Monitoring Committees and Data Safety Monitoring Boards (DMC/DSMB). NKB Regovanta adheres to well-established processes for documenting and reporting Adverse Events (AEs) that may occur during investigational studies.</p>
            <ul className="space-y-2 mt-3">
              {["Committee Charter and Procedures", "Committee Member Interviews and Recruitment", "Meeting Scheduling, Facilitation, Recording Minutes", "Negotiating Committee Member Agreements and Remuneration", "Source Documentation, Adjudication Forms, Event Narratives", "Writing and Distributing Follow-Up Reports"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Ready to Begin Your Clinical Program?</h2>
            <p className="text-white/70 mb-6">Let NKB Regovanta's clinical experts guide you from first-in-human to post-market surveillance.</p>
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

export default ClinicalPage;
