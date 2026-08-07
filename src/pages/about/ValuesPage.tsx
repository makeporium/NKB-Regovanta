import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const ValuesPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Our Values&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            INTEGRITY, AGILITY, COLLABORATION
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">
            Since 1967, NKB Regovanta has grown, but the values that defined us from the start are those that still guide us today.
          </p>
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-4xl py-20">
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            NKB Regovanta's modest roots in medical device laboratory operations in the 1960s and 1970s have evolved to help clients develop and deliver innovative medical products in every area of the world. We do this by providing the full continuum of development solutions, which includes medical device testing; regulatory, reimbursement and quality consulting, as well as clinical research services.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-16">
            Our team of more than 1,000 experienced Associates are passionately dedicated to delivering clients with strategic guidance and tactical support to fast-track commercialization and make a more immediate impact on patient healthcare worldwide.
          </p>

          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 mb-16">
            <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-8 text-center">While our organization has changed, the values that guide us today remain:</h2>
            <ul className="space-y-6 max-w-2xl mx-auto">
              {[
                "Act with integrity in everything we do",
                "Provide best-in-class customer experiences",
                "Develop superior talent and deliver expertise",
                "Respond with agility and provide timely results",
                "Embrace collaboration, diverse perspectives and ideas"
              ].map((val) => (
                <li key={val} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-[#F5C754] shrink-0" />
                  <span className="text-lg font-bold text-gray-800">{val}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[hsl(195_65%_20%)] text-white p-10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#F5C754]">Vision</h3>
              <p className="text-lg leading-relaxed">Inspire innovative MedTech solutions that advance global healthcare, improve patient lives and accelerate Client success.</p>
            </div>
            <div className="bg-[hsl(195_65%_20%)] text-white p-10 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#F5C754]">Mission</h3>
              <p className="text-lg leading-relaxed">Deliver best-in-class global MedTech solutions through our people, expertise and technology.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ValuesPage;
