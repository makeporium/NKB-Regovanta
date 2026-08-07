import { Users, Award, FileCheck, Globe, Star, TrendingUp } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Award,
      value: "1967",
      label: "Year NKB Regovanta Founded",
      description: "Founded to serve medical device companies",
    },
    {
      icon: FileCheck,
      value: "320",
      label: "Clinical Projects / Year",
      description: "Medical Device or IVD clinical projects each year",
    },
    {
      icon: Users,
      value: "3,000",
      label: "Manufacturers Supported",
      description: "Medical device and IVD manufacturers supported each year",
    },
    {
      icon: Globe,
      value: "157K+",
      label: "Tests Conducted",
      description: "Medical device tests conducted last year",
    },
    {
      icon: Star,
      value: "1,400+",
      label: "NKB Regovanta Professionals",
      description: "In North America, Europe, and Asia",
    },
    {
      icon: TrendingUp,
      value: "50+",
      label: "Countries Served",
      description: "Serving manufacturers worldwide",
    },
  ];

  const testimonials = [
    {
      quote: "Inside Solaris Endovascular's Path to PMA: A CEO's Account of a Pivotal Study. NKB Regovanta helped us get our medical device PMA approved — their expertise in US FDA regulations is unmatched.",
      author: "CEO, Solaris Endovascular",
      company: "Solaris Endovascular",
      role: "Chief Executive Officer",
    },
    {
      quote: "Companies trust NKB Regovanta to get it right the first time. Their team's knowledge of both EU MDR and global clinical strategy made our international expansion seamless.",
      author: "Sarah Chen",
      company: "DiagnoLabs Inc, USA",
      role: "VP Clinical Operations",
    },
    {
      quote: "NKB Regovanta is 100% focused on medical device and IVD safety. Professional, responsive, and thorough — they guided us through every step of the biocompatibility testing process.",
      author: "Dr. Amit Sharma",
      company: "BioAssay Diagnostics",
      role: "CEO",
    },
  ];

  return (
    <section id="our-impact" className="py-12 md:py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[hsl(195_65%_20%)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5C754]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[hsl(195_65%_20%)]/5 text-[hsl(195_65%_20%)] font-bold text-xs uppercase tracking-widest mb-4">
            Companies Trust NKB Regovanta
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            To Get It <span className="text-[#F5C754]">Right the First Time</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in medical device and IVD safety and compliance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[hsl(195_65%_20%)]/5 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-[#F5C754]" />
              </div>
              <div className="text-2xl md:text-3xl font-black text-[hsl(195_65%_20%)] mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 hidden md:block">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 text-center mb-8">
            Why This CEO Chose NKB Regovanta for His Pivotal Study
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Quote Mark */}
                <div className="absolute top-4 right-4 text-5xl text-[#F5C754]/20 font-serif font-black">"</div>
                
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed relative z-10 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[hsl(195_65%_20%)] flex items-center justify-center">
                    <span className="text-lg font-black text-[#F5C754]">
                      {testimonial.author.split(' ').map(n => n[0]).join('').slice(0,2)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                    <div className="text-xs font-bold text-[#C08518] uppercase tracking-wider mt-0.5">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5C754] text-[#F5C754]" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
