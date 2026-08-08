import { CheckCircle2, ArrowRight, Globe, Users, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    "US FDA expertise (510(k), PMA, De Novo)",
    "EU MDR compliance & CE Marking",
    "Global regulatory strategy & alignment",
    "Preclinical & Clinical Trial execution",
    "End-to-end lifecycle support",
    "Faster approvals & reduced compliance risk",
  ];

  const stats = [
    { icon: Globe, value: "1,650+", label: "Preclinical Studies" },
    { icon: Users, value: "270+", label: "Clinical Projects" },
    { icon: Shield, value: "157K+", label: "Tests Conducted" },
    { icon: Award, value: "315", label: "Specialists on Staff" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(195_65%_20%)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5C754]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[hsl(195_65%_20%)]/5 text-[hsl(195_65%_20%)] font-bold text-xs uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            The Medical Research Organization™<br className="hidden md:block" /> 
            <span className="text-[#F5C754]">for MedTech Innovators</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a specialized regulatory and clinical services agency focused entirely on medical device compliance for global markets. Our primary expertise lies in US FDA regulations, with comprehensive support for EU MDR and international markets.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our mission is to simplify medical device regulations and help manufacturers deliver safe, effective, and compliant products to patients worldwide. With deep expertise spanning testing, clinical trials, and global regulatory pathways, we provide you with a strategic advantage.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F5C754] mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-bold text-[hsl(195_65%_20%)]">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full px-6 bg-gradient-to-r from-[#F5C754] to-[#C08518] hover:from-[#F0B83A] hover:to-[#A7740D] text-white font-bold">
              <Link to="/services" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Image/Graphic Area */}
          <div className="relative">
            <div className="bg-[hsl(195_65%_20%)] p-8 lg:p-12 relative overflow-hidden rounded-3xl text-white shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }} />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-black mb-4">Your Trusted Global Partner</h3>
                <p className="text-white/80 mb-8 text-sm">
                  We bring decades of combined experience navigating complex regulatory landscapes across US FDA, EU MDR, and other critical global markets.
                </p>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <stat.icon className="w-6 h-6 text-[#F5C754] mx-auto mb-2" />
                      <div className="text-2xl font-black text-[#F5C754]">{stat.value}</div>
                      <div className="text-xs text-white/80 font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 rounded-2xl p-4 shadow-xl hidden lg:block text-center">
              <div className="text-3xl font-black bg-gradient-to-r from-[#F5C754] to-[#C08518] bg-clip-text text-transparent">8+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Years</div>
              <div className="text-[10px] font-medium text-gray-400">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
