import { Globe, Zap, Clock, Shield, Headphones, Award, Target, CheckCircle2 } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      icon: Globe,
      title: "Unmatched Therapeutic Expertise",
      description: "Our team conducts testing, preclinical research, and clinical trials on nearly 120,000 medical devices each year.",
    },
    {
      icon: Zap,
      title: "Integrated CRO Support",
      description: "From regulatory strategy to clinical execution — all under one roof, eliminating fragmented vendor oversight.",
    },
    {
      icon: Clock,
      title: "Faster Time to Market",
      description: "Streamlined testing and clinical processes to accelerate your time to global regulatory clearance.",
    },
    {
      icon: Shield,
      title: "Patient Safety First",
      description: "Patient and user safety has always been a top NKB Regovanta priority, embedded in everything we do.",
    },
    {
      icon: Headphones,
      title: "Full Lifecycle Support",
      description: "End-to-end support from early feasibility to post-market surveillance and vigilance reporting.",
    },
    {
      icon: Award,
      title: "100% MedTech Focused",
      description: "We are the only major CRO that is 100% focused on medical device and IVD safety and compliance.",
    },
  ];

  const industries = [
    "Cardiovascular & Vascular Devices",
    "In-Vitro Diagnostics (IVD)",
    "Software as Medical Device (SaMD)",
    "Orthopedic & Dental Implants",
    "NeuroTech & Digital Health",
  ];

  return (
    <section id="why-us" className="py-12 md:py-20 lg:pb-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-[hsl(195_65%_20%)]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F5C754]/10 text-[#C08518] font-bold text-xs uppercase tracking-widest mb-4">
            Why Clients Choose NKB Regovanta
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[hsl(195_65%_20%)] mb-4">
            1,400+ NKB Regovanta Specialists Are <span className="text-[#F5C754]">Ready to Serve You</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our deep technical and strategic expertise makes us the preferred choice for medical device and IVD manufacturers in the US, Europe, Japan, and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left - Benefits Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[hsl(195_65%_20%)]/5 flex items-center justify-center mb-4 group-hover:bg-[#F5C754] transition-all duration-300">
                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-[hsl(195_65%_20%)] group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg text-[hsl(195_65%_20%)] mb-2 group-hover:text-[#F5C754] transition-colors">{benefit.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Industries Card */}
          <div className="lg:col-span-5">
            <div className="bg-[hsl(195_65%_20%)] text-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_-15px_rgba(245,199,84,0.3)] transition-all sticky top-32 border border-[#F5C754]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#F5C754] flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-[hsl(195_65%_20%)]" />
                </div>
                <h4 className="text-xl md:text-2xl font-black">Therapeutic Expertise</h4>
              </div>
              
              <p className="text-white/80 mb-6 md:mb-8 text-sm md:text-base">
                Serving Medical Device and IVD Manufacturers in 50+ Countries Worldwide — with experts and labs in the US, Europe, and Japan.
              </p>

              <div className="space-y-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 hover:bg-[#F5C754]/20 transition-colors border border-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#F5C754] flex-shrink-0" />
                    <span className="font-bold text-sm md:text-base">{industry}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#F5C754]">3K+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">Manufacturers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#F5C754]">50+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#F5C754]">1967</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
