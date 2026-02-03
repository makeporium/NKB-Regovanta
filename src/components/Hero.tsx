import { Globe, UserCheck, FlaskConical, Building2, Stethoscope, Microscope, ArrowRight, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const quickLinks = [
    { icon: Building2, label: "US FDA Services" },
    { icon: Globe, label: "EU MDR Services" },
    { icon: Globe, label: "India CDSCO Services" },
    { icon: UserCheck, label: "Indian Authorised Agent (IAA)" },
  ];

  const serviceCards = [
    {
      category: "For Importer",
      icon: Stethoscope,
      title: "MEDICAL DEVICE",
      subtitle: "Form MD 14, MD 15",
      description: "Import License for Medical Devices in India",
    },
    {
      category: "For Importer",
      icon: Microscope,
      title: "IN-VITRO DIAGNOSTIC",
      subtitle: "Form MD 14, MD 15",
      description: "Import License For IVD Kits in India",
    },
    {
      category: "For Manufacturer",
      icon: Stethoscope,
      title: "MEDICAL DEVICE",
      subtitle: "Form MD 3, MD 5",
      description: "Manufacturing License for Medical Devices",
    },
    {
      category: "For Manufacturer",
      icon: Microscope,
      title: "IN-VITRO DIAGNOSTIC",
      subtitle: "Form MD 3, MD 5",
      description: "Manufacturing License for IVD Kits",
    },
  ];

  const stats = [
    { value: "1000+", label: "Licenses Approved", icon: Award },
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "15+", label: "Years Experience", icon: CheckCircle },
  ];

  return (
    <section id="home" className="relative min-h-screen">
      {/* Background - Teal hero section */}
      <div className="absolute inset-0 bg-[hsl(195_65%_28%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative pt-28 md:pt-36 lg:pt-40 pb-6 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 md:mb-6 animate-fade-up">
                Global Medical Device & IVD
                <span className="text-white"> Regulatory Experts</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
                End-to-End Regulatory Solutions for Medical Devices & In-Vitro Diagnostics — US FDA, EU MDR, India CDSCO Licensing & Global Market Access
              </p>

              {/* Quick Link Buttons - 2 cols on mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 md:mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href="#services"
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors flex-shrink-0">
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold leading-tight text-white">{link.label}</span>
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Button size="lg" className="bg-[hsl(195_70%_35%)] hover:bg-[hsl(195_70%_40%)] text-white border-2 border-white/30 w-full sm:w-auto">
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-[hsl(195_65%_28%)] font-semibold w-full sm:w-auto">
                  <a href="#services">Explore Services</a>
                </Button>
              </div>

              {/* Stats Row - Mobile */}
              <div className="flex items-center justify-between gap-2 mt-6 md:hidden animate-fade-up" style={{ animationDelay: "0.4s" }}>
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center flex-1">
                    <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Floating Service Cards - 5 columns */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
                {serviceCards.map((card, index) => (
                  <div
                    key={`${card.title}-${card.category}-${index}`}
                    className="bg-white rounded-2xl p-4 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 cursor-pointer group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wide">{card.category}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <card.icon className="w-7 h-7 text-primary" />
                      </div>
                      <p className="text-[10px] text-muted-foreground mb-1">{card.subtitle}</p>
                      <h3 className="font-bold text-sm text-foreground mb-1">{card.title}</h3>
                      <p className="text-[11px] text-muted-foreground leading-snug">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Stats */}
              <div className="flex items-center justify-between gap-4 mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center flex-1">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <stat.icon className="w-5 h-5 text-white/80" />
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Bar */}
      <div className="relative mt-auto">
        <div className="category-bar py-3 md:py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 md:gap-6 overflow-x-auto scrollbar-hide py-1">
              {["MEDICAL DEVICE", "IVD"].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="text-white text-xs md:text-sm font-bold whitespace-nowrap hover:text-white/80 transition-colors px-3 py-1"
                >
                  {item}
                </a>
              ))}
              <div className="h-4 w-px bg-white/30" />
              {["US FDA", "EU MDR", "CDSCO", "BIS"].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="text-white/80 text-xs md:text-sm font-medium whitespace-nowrap hover:text-white transition-colors px-2 py-1"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Service Cards */}
      <div className="lg:hidden bg-background py-6 md:py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Our Core Services</h3>
          <div className="grid grid-cols-2 gap-3">
            {serviceCards.map((card, index) => (
              <div
                key={`mobile-${card.title}-${card.category}-${index}`}
                className="glass-card p-3 sm:p-4 shadow-card hover:shadow-elevated transition-all group border border-border/60"
              >
                <span className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">{card.category}</span>
                <div className="flex flex-col items-center text-center mt-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-2 group-hover:bg-primary/30 transition-colors">
                    <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-[11px] sm:text-xs text-foreground">{card.title}</h3>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-1 leading-tight">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
