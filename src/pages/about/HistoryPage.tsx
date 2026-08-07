import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HistoryPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Our History&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            HELPING MEDICAL DEVICE SPONSORS IMPROVE HEALTHCARE SINCE 1967
          </h1>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-4xl py-20">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Since its inception, NKB Regovanta has been an active participant in the medical device industry, assisting in the development of standards, both in the United States and internationally. Founded by Dr. Theodore Gorski in 1967, NKB Regovanta was the first independent company in the world to focus solely on testing medical device materials for safety.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            In 1967, medical device testing was in its infancy. A few companies had internal testing facilities, but most did not. NKB Regovanta filled a gap for testing services and quickly gained a reputation for quality and reliability. We not only helped shape the industry — we pioneered it.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Throughout the 1970s and 1980s, NKB Regovanta expanded its testing services and capabilities, adding microbiology and chemistry labs, as well as expanding our preclinical in vivo capabilities. During the 1990s and 2000s, NKB Regovanta responded to clients' needs by adding clinical, regulatory, and quality consulting services, enabling us to guide products through the entire development lifecycle. Today, we are proud to offer a full suite of services that help our clients bring life-changing therapies to market safely and efficiently.
          </p>

          <h2 className="text-3xl font-black text-[hsl(195_65%_20%)] mb-8 border-b-2 border-[#F5C754] inline-block pb-3">Milestones</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {[
              { year: "1967", text: "Founded by Dr. Theodore Gorski as North American Science Associates (NKB Regovanta) in Northwood, Ohio." },
              { year: "1970s", text: "Expanded testing services to include microbiology and chemistry; opened first branch laboratory in California." },
              { year: "1980s", text: "Initiated preclinical in vivo services to support the growing medical device industry." },
              { year: "1994", text: "Opened the first international facility in Lyon, France, establishing a global footprint." },
              { year: "2000s", text: "Expanded into clinical research, regulatory, and quality consulting services to provide end-to-end development solutions." },
              { year: "2010s", text: "Continued global expansion with new offices and laboratories in Europe and Asia." },
              { year: "2020", text: "Acquired by ArchiMed, a leading private equity firm focused on the healthcare industries." },
              { year: "Present", text: "Operating as the world's leading MedTech CRO with over 1,000 Associates worldwide." },
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
