import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Stethoscope, 
  Microscope, 
  FlaskConical,
  FileCheck,
  Shield,
  Globe,
  ArrowRight,
  Package
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Services = () => {
  const location = useLocation();
  const hash = location.hash.slice(1);
  const [activeTab, setActiveTab] = useState<"importer" | "manufacturer">(
    hash === "for-manufacturer" ? "manufacturer" : "importer"
  );

  useEffect(() => {
    if (hash === "for-manufacturer") setActiveTab("manufacturer");
    else if (hash === "for-importer") setActiveTab("importer");
  }, [hash]);
  const importerServices = [
    {
      icon: Stethoscope,
      title: "MEDICAL DEVICE",
      form: "Form MD 14, MD 15",
      description: "CDSCO Import License for Medical Devices with FSC evaluation & overseas documentation",
    },
    {
      icon: Microscope,
      title: "IN-VITRO DIAGNOSTIC",
      form: "Form MD 14, MD 15",
      description: "Import License for IVD Kits in India with complete regulatory support",
    },
    {
      icon: Shield,
      title: "BIS CERTIFICATION",
      form: "Form V",
      description: "BIS Certification for Foreign Manufacturers including ISI Mark",
    },
    {
      icon: Package,
      title: "AUTHORISED AGENT",
      form: "IAA Services",
      description: "Complete Indian Authorised Agent representation & Power of Attorney support",
    },
  ];

  const manufacturerServices = [
    {
      icon: Stethoscope,
      title: "MEDICAL DEVICE",
      form: "Form MD 3, MD 5",
      description: "SLA (Class A/B) & CDSCO (Class C/D) Manufacturing License support",
    },
    {
      icon: Microscope,
      title: "IN-VITRO DIAGNOSTIC",
      form: "Form MD 3, MD 5",
      description: "Manufacturing License for IVD Kits with QMS implementation",
    },
    {
      icon: FlaskConical,
      title: "CLINICAL TRIALS",
      form: "Form MD-22",
      description: "Clinical Investigation approval, Ethics Committee & trial site coordination",
    },
    {
      icon: FileCheck,
      title: "QUALITY SYSTEMS",
      form: "ISO 13485",
      description: "QMS Implementation, internal audits & certification support",
    },
  ];

  const globalServices = [
    {
      flag: "🇺🇸",
      title: "US FDA",
      description: "21 CFR Compliance & FDA Approvals",
      items: ["510(k), De Novo & PMA", "FDA QSR (21 CFR 820)", "Establishment Registration", "Post-Market MDR & Recalls"],
    },
    {
      flag: "🇪🇺",
      title: "EU MDR",
      description: "CE Marking & MDR 2017/745 Compliance",
      items: ["Technical File & GSPR", "Clinical Evaluation (CER)", "ISO 13485 Implementation", "PMS, PSUR & Vigilance"],
    },
    {
      flag: "🇮🇳",
      title: "India CDSCO",
      description: "MDR 2017 & State Authority Compliance",
      items: ["Manufacturing License (MD-5/7)", "Import License (MD-14/15)", "DMF & SMF Preparation", "Materiovigilance (MvPI)"],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 lg:py-28 bg-background relative">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 category-bar" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Medical Device & IVD <span className="text-gradient">Regulatory Solutions</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end regulatory consulting for medical device manufacturers and importers seeking approvals in US, EU, and India. 
            Our experts support compliance with FDA regulations, EU MDR (2017/745), and India CDSCO Medical Device Rules, 2017.
          </p>
        </div>

        {/* Tabs for Importer/Manufacturer */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "importer" | "manufacturer")} className="w-full mb-12 md:mb-20">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 md:mb-12 h-14 md:h-16 bg-secondary p-2 rounded-2xl border border-border">
            <TabsTrigger value="importer" className="text-sm md:text-base font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              For Importer
            </TabsTrigger>
            <TabsTrigger value="manufacturer" className="text-sm md:text-base font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              For Manufacturer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="importer" className="animate-fade-in">
            <div id="for-importer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {importerServices.map((service) => (
                <div
                  key={service.title}
                  className="service-card group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                      <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1 font-medium">{service.form}</p>
                    <h4 className="font-bold text-foreground text-base md:text-lg mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="manufacturer" className="animate-fade-in">
            <div id="for-manufacturer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {manufacturerServices.map((service) => (
                <div
                  key={service.title}
                  className="service-card group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                      <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1 font-medium">{service.form}</p>
                    <h4 className="font-bold text-foreground text-base md:text-lg mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Global Services - India First */}
        <div className="relative">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              <Globe className="w-4 h-4" />
              Global Regulatory Excellence
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              Global Regulatory Excellence with International Focus
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {globalServices.map((service, index) => (
              <div
                key={service.title}
                className={`glass-card p-6 md:p-8 shadow-card hover:shadow-elevated transition-all group relative overflow-hidden ${index === 0 ? 'ring-2 ring-primary' : ''}`}
              >
                {/* Featured Badge for US FDA */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 px-3 py-1 btn-gradient text-xs font-bold rounded-full">
                    International Focus
                  </div>
                )}
                
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl md:text-5xl">{service.flag}</span>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground">{service.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 md:space-y-3 mb-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="secondary" className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
