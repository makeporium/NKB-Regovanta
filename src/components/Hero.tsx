import {
  Globe,
  ArrowRight,
  Users,
  Award,
  CheckCircle,
  FileSearch,
  FlaskConical,
  ActivitySquare,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const quickLinks = [
    { icon: FileSearch, label: "Consulting & Strategy", link: "/services/regulatory" },
    { icon: FlaskConical, label: "Preclinical Research", link: "/services/preclinical-research" },
    { icon: ActivitySquare, label: "Clinical Research", link: "/services/clinical-research" },
    { icon: Stethoscope, label: "Medical Device Testing", link: "/services/medical-device-testing" },
  ];

  const serviceCards = [
    {
      category: "Consulting & Strategy",
      icon: FileSearch,
      title: "REGULATORY",
      subtitle: "510(k), PMA, De Novo",
      description: "Global regulatory strategy and FDA submission support.",
    },
    {
      category: "Preclinical Research",
      icon: FlaskConical,
      title: "PRECLINICAL",
      subtitle: "GLP & Non-GLP Studies",
      description: "21 fully equipped ORs and Cath Labs in US and Europe.",
    },
    {
      category: "Clinical Research",
      icon: ActivitySquare,
      title: "CLINICAL TRIALS",
      subtitle: "End-to-End CRO",
      description: "320 Medical Device clinical projects managed each year.",
    },
    {
      category: "Medical Device Testing",
      icon: Stethoscope,
      title: "TESTING",
      subtitle: "ISO 10993 & USP",
      description: "157K+ medical device tests conducted last year.",
    },
  ];

  const stats = [
    { value: "1967", label: "Year Founded", icon: Award },
    { value: "1,400+", label: "Professionals Worldwide", icon: Users },
    { value: "157K+", label: "Tests Last Year", icon: CheckCircle },
  ];

  return (
    <section id="home" className="relative min-h-screen">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 bg-[hsl(195_65%_20%)]" />
      <div className="absolute -z-10 top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-20 right-10 w-96 h-96 bg-[#F5C754]/5 rounded-full blur-3xl" />

      {/* HERO CONTENT */}
      <div className="relative z-10 pt-28 md:pt-36 lg:pt-40 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">

            {/* LEFT SIDE */}
            <div className="lg:col-span-7 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
                Advancing MedTech
                <span className="text-[#F5C754] block mt-2"> Innovation and Safety Worldwide</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl">
                Unmatched Experience in Numerous Therapeutic Areas. Our team of 1,400+ professionals conducts testing, preclinical research, and clinical trials on nearly 120,000 medical devices each year.
              </p>

              {/* QUICK LINKS */}
              <div className="grid grid-cols-2 gap-3 mb-6 md:mb-8">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.link}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-[#F5C754]/20 hover:border-[#F5C754]/50 transition-all group"
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10 group-hover:bg-[#F5C754]/20 transition-all duration-300">
                      <link.icon className="w-5 h-5 text-[#F5C754]" />
                    </div>
                    <span className="text-sm font-semibold">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-full px-6 bg-gradient-to-r from-[#F5C754] to-[#C08518] hover:from-[#F0B83A] hover:to-[#A7740D] text-white border-transparent shadow-lg shadow-[#F5C754]/20 transition-all">
                  <Link to="/contact" className="flex items-center gap-2">
                    Let's Talk About Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 border-[#F5C754] text-[#F5C754] bg-transparent hover:bg-gradient-to-r hover:from-[#F5C754] hover:to-[#C08518] hover:text-white transition-all shadow-lg hover:border-transparent group"
                >
                  <Link to="/services" className="flex items-center gap-2">
                    Explore All Services
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* MOBILE STATS */}
              <div className="flex justify-between gap-3 mt-8 md:hidden">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center flex-1">
                    <div className="text-xl font-bold bg-gradient-to-r from-[#F5C754] to-[#C08518] bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP SERVICE CARDS */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {serviceCards.map((card, i) => (
                  <Link
                    key={i}
                    to="/services"
                    className="bg-white rounded-2xl p-4 shadow-card hover:shadow-elevated hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 cursor-pointer group block"
                  >
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {card.category}
                    </span>

                    <div className="flex flex-col items-center text-center mt-3">
                      <div className="w-14 h-14 rounded-xl bg-[hsl(195_65%_20%)]/5 flex items-center justify-center mb-3 group-hover:bg-[#F5C754]/10 transition-colors">
                        <card.icon className="w-7 h-7 text-[hsl(195_65%_20%)] group-hover:text-[#F5C754] transition-colors" />
                      </div>

                      <p className="text-[11px] font-bold text-[#F5C754] uppercase tracking-wide mb-1">
                        {card.subtitle}
                      </p>

                      <h3 className="font-black text-sm text-[hsl(195_65%_20%)] mb-2">
                        {card.title}
                      </h3>

                      <p className="text-xs text-gray-500">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* DESKTOP STATS */}
              <div className="flex gap-4 mt-6 bg-white/10 border border-white/20 rounded-2xl p-4 text-white">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex-1 text-center">
                    <stat.icon className="w-5 h-5 mx-auto mb-1 text-[#F5C754]" />
                    <div className="font-bold text-xl bg-gradient-to-r from-[#F5C754] to-[#C08518] bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE SERVICE CARDS */}
      <div className="relative z-10 lg:hidden bg-background py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-bold mb-5 text-center text-[hsl(195_65%_20%)]">
            100% Focused on Medical Device and IVD Safety
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceCards.map((card, i) => (
              <Link
                key={i}
                to="/services"
                className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 cursor-pointer group block"
              >
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(195_65%_20%)]/5 flex items-center justify-center mb-2 group-hover:bg-[#F5C754]/10 transition-colors">
                    <card.icon className="w-6 h-6 text-[hsl(195_65%_20%)] group-hover:text-[#F5C754] transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {card.category}
                  </span>
                  <h3 className="font-black text-sm text-[hsl(195_65%_20%)]">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed pt-1">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
