import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

const latestNews = [
  {
    title: "Can Material Evaluations Accurately Predict Irritation Outcomes for Medical Devices?",
    type: "Article",
    link: "/resources/blog",
  },
  {
    title: "NeuroTech Devices: Regulatory, Preclinical, and Clinical Considerations for a Successful Path to Market",
    type: "Article",
    link: "/resources/blog",
  },
  {
    title: "Video: Inside Solaris Endovascular's Path to PMA: A CEO's Account of a Pivotal Study",
    type: "Video",
    link: "/resources/podcasts-and-videos",
  },
];

const FinancialMISSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="insights" className="pt-8 md:pt-12 pb-12 md:pb-20 lg:pb-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-[hsl(195_65%_20%)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative max-w-6xl">

        {/* Latest News */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F5C754]/10 text-[#C08518] font-bold text-xs uppercase tracking-widest mb-4">
            Latest News
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Preclinical & Clinical <span className="text-[#F5C754]">Insights</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {latestNews.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group block"
            >
              {/* Placeholder image area */}
              <div className="h-44 bg-[hsl(195_65%_20%)]/5 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[hsl(195_65%_20%)] opacity-5 group-hover:opacity-10 transition-opacity" />
                <span className="inline-block px-3 py-1 rounded-full bg-[#F5C754] text-[hsl(195_65%_20%)] text-[10px] font-black uppercase tracking-widest">
                  {item.type}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-black text-[hsl(195_65%_20%)] text-base leading-snug group-hover:text-[#F5C754] transition-colors line-clamp-3 mb-4">
                  {item.title}
                </h4>
                <div className="flex items-center text-[#F5C754] text-sm font-bold uppercase tracking-wider gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-[hsl(195_65%_20%)] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#F5C754] flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-[hsl(195_65%_20%)]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-2">Know Now with NKB Regovanta</h3>
            <p className="text-white/80 mb-6 text-sm">
              Join 40,000+ medical device professionals who stay up to date with insights from NKB Regovanta subject matter experts. Sent 2x/month. Unsubscribe anytime.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#F5C754] focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#F5C754] text-[hsl(195_65%_20%)] font-black hover:bg-[#C08518] hover:text-white transition-all whitespace-nowrap"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialMISSection;
