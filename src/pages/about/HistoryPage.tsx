import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HistoryPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Our History&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            HELPING MEDICAL DEVICE SPONSORS IMPROVE HEALTHCARE SINCE 2018
          </h1>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-4xl py-20">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Since its founding in 2018, NKB Regovanta has been an active participant in the medical device industry, assisting manufacturers, startups, and multinational corporations in navigating the world's most complex regulatory landscapes. We were built from the ground up to solve a critical gap — providing integrated regulatory, preclinical, clinical, and testing support under one roof.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            In 2018, the MedTech regulatory environment was rapidly evolving. Companies needed more than isolated consultants — they needed a single partner who could see the full picture. NKB Regovanta was founded to be that partner, combining deep regulatory expertise with scientific rigor and a genuine commitment to patient safety.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Over the past 8 years, NKB Regovanta has expanded its capabilities across US FDA, EU MDR/IVDR, and global regulatory frameworks. We offer a full suite of services that help our clients bring life-changing therapies to market safely and efficiently.
          </p>

          <h2 className="text-3xl font-black text-[hsl(195_65%_20%)] mb-8 border-b-2 border-[#F5C754] inline-block pb-3">Milestones</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {[
              { year: "2018", text: "NKB Regovanta founded with a clear mission: to guide medical device and IVD manufacturers through complex global regulatory landscapes with precision and integrity." },
              { year: "2019", text: "Established core consulting capabilities in US FDA regulatory strategy, EU MDR compliance, and biological safety evaluation." },
              { year: "2020", text: "Expanded service offerings to include clinical research support and quality management consulting amid rapidly evolving global regulatory requirements." },
              { year: "2021", text: "Launched preclinical research advisory services and deepened expertise in ISO 10993 biological evaluation, GLP studies, and IVDR compliance." },
              { year: "2022", text: "Grew the team of regulatory experts and expanded client base to include early-stage MedTech startups and established multinational manufacturers." },
              { year: "2023", text: "Introduced the Startup Solutions program — a dedicated, integrated pathway for early-stage companies to navigate regulatory challenges efficiently." },
              { year: "2024", text: "Strengthened global reach with regulatory consulting expertise spanning US FDA, EU, and APAC markets, serving 100+ clients across therapeutic areas." },
              { year: "Present", text: "Operating as a trusted full-service Medical Research Organization (MRO) delivering integrated regulatory, preclinical, clinical, and testing solutions to MedTech innovators worldwide." },
            ].map((milestone, idx) => (
              <div key={milestone.year} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F5C754] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold text-sm">
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="font-black text-2xl text-[hsl(195_65%_20%)] mb-2">{milestone.year}</div>
                  <div className="text-gray-600 leading-relaxed">{milestone.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default HistoryPage;
