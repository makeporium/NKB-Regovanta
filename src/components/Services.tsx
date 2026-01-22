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
  const importerServices = [
    {
      icon: Stethoscope,
      title: "MEDICAL DEVICE",
      form: "Form MD 14, MD 15",
      description: "Import License for Medical Devices in India under CDSCO",
    },
    {
      icon: Microscope,
      title: "IN-VITRO DIAGNOSTIC",
      form: "Form MD 14, MD 15",
      description: "Import License For In-Vitro Diagnostic Kits in India",
    },
    {
      icon: Shield,
      title: "BIS CERTIFICATION",
      form: "Form V",
      description: "BIS Certification for Foreign Manufacturers",
    },
    {
      icon: Package,
      title: "INDIAN AUTHORISED AGENT",
      form: "IAA Services",
      description: "Complete IAA representation for foreign manufacturers",
    },
  ];

  const manufacturerServices = [
    {
      icon: Stethoscope,
      title: "MEDICAL DEVICE",
      form: "Form MD 3, MD 5",
      description: "Manufacturing License for Medical Devices in India",
    },
    {
      icon: Microscope,
      title: "IN-VITRO DIAGNOSTIC",
      form: "Form MD 3, MD 5",
      description: "Manufacturing License for IVD Kits in India",
    },
    {
      icon: FlaskConical,
      title: "CLINICAL TRIALS",
      form: "CT-06",
      description: "Clinical Trial Approval and Conduct in India",
    },
    {
      icon: FileCheck,
      title: "QUALITY SYSTEMS",
      form: "ISO 13485",
      description: "QMS Implementation & Certification",
    },
  ];

  const globalServices = [
    {
      flag: "🇮🇳",
      title: "India CDSCO",
      description: "Central & State licensing authority",
      items: ["Manufacturing License", "Import License", "Clinical Investigation", "Materiovigilance"],
    },
    {
      flag: "🇺🇸",
      title: "US FDA",
      description: "510(k), PMA, De Novo submissions",
      items: ["Device Classification", "Premarket Submissions", "QSR Compliance", "Post-Market MDR"],
    },
    {
      flag: "🇪🇺",
      title: "EU MDR",
      description: "CE Marking & Notified Body support",
      items: ["Technical Documentation", "Clinical Evaluation", "EUDAMED Registration", "PMS/PSUR"],
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
            Complete CDSCO licensing, import/manufacturing approvals & global regulatory support for medical devices and IVDs.
          </p>
        </div>

        {/* Tabs for Importer/Manufacturer */}
        <Tabs defaultValue="importer" className="w-full mb-12 md:mb-20">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 md:mb-12 h-14 md:h-16 bg-secondary p-2 rounded-2xl border border-border">
            <TabsTrigger value="importer" className="text-sm md:text-base font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              For Importer
            </TabsTrigger>
            <TabsTrigger value="manufacturer" className="text-sm md:text-base font-bold rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              For Manufacturer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="importer" className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
              India-Focused with Global Reach
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {globalServices.map((service, index) => (
              <div
                key={service.title}
                className={`glass-card p-6 md:p-8 hover:shadow-elevated transition-all group relative overflow-hidden ${index === 0 ? 'ring-2 ring-primary' : ''}`}
              >
                {/* Featured Badge for India */}
                {index === 0 && (
                  <div className="absolute top-4 right-4 px-3 py-1 btn-gradient text-xs font-bold rounded-full">
                    Primary Focus
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
