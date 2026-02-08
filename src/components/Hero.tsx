import {
  Globe,
  UserCheck,
  Building2,
  Stethoscope,
  Microscope,
  ArrowRight,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
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
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 bg-[hsl(195_65%_28%)]" />
      <div className="absolute -z-10 top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      {/* HERO CONTENT */}
      <div className="relative z-10 pt-28 md:pt-36 lg:pt-40 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">

            {/* LEFT SIDE */}
            <div className="lg:col-span-7 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
                Global Medical Device & IVD
                <span className="text-white"> Regulatory Experts</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl">
                End-to-End Regulatory Solutions for Medical Devices & In-Vitro
                Diagnostics — US FDA, EU MDR, India CDSCO Licensing & Global
                Market Access
              </p>

              {/* QUICK LINKS */}
              <div className="grid grid-cols-2 gap-3 mb-6 md:mb-8">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href="#services"
                    className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition">
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[hsl(195_70%_35%)] hover:bg-[hsl(195_70%_40%)] text-white border border-white/30">
                  <a href="#contact" className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="border-white text-white bg-white/10 hover:bg-white hover:text-[hsl(195_65%_28%)]"
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>

              {/* MOBILE STATS */}
              <div className="flex justify-between gap-3 mt-6 md:hidden">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center flex-1">
                    <div className="text-xl font-bold">{stat.value}</div>
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
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-4 shadow-card hover:shadow-elevated hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-xs font-semibold text-primary uppercase">
                      {card.category}
                    </span>

                    <div className="flex flex-col items-center text-center mt-2">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <card.icon className="w-7 h-7 text-primary" />
                      </div>

                      <p className="text-xs text-muted-foreground">
                        {card.subtitle}
                      </p>

                      <h3 className="font-bold text-sm">
                        {card.title}
                      </h3>

                      <p className="text-xs text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* DESKTOP STATS */}
              <div className="flex gap-4 mt-6 bg-white/10 border border-white/20 rounded-2xl p-4 text-white">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex-1 text-center">
                    <stat.icon className="w-5 h-5 mx-auto mb-1" />
                    <div className="font-bold text-xl">{stat.value}</div>
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
          <h3 className="text-lg font-bold mb-5 text-center">
            Our Core Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="rounded-2xl bg-card p-4 shadow-card border border-border/60 hover:shadow-elevated hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center space-y-1">

                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-2 group-hover:bg-primary/30 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>

                  <span className="text-xs font-semibold uppercase text-muted-foreground">
                    {card.category}
                  </span>

                  <p className="text-sm font-medium text-primary">
                    {card.subtitle}
                  </p>

                  <h3 className="font-bold text-sm">
                    {card.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>

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
