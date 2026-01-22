import { Globe, Zap, Clock, Shield, Headphones, Award, Target, CheckCircle2 } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      icon: Globe,
      title: "India-First Expertise",
      description: "Deep expertise in CDSCO, State Drug Controllers and Indian medical device regulations.",
    },
    {
      icon: Zap,
      title: "Practical Solutions",
      description: "Risk-based regulatory solutions tailored to your specific business needs.",
    },
    {
      icon: Clock,
      title: "Faster Approvals",
      description: "Streamlined processes to accelerate your time to Indian market.",
    },
    {
      icon: Shield,
      title: "Reduced Risk",
      description: "Comprehensive compliance support that minimizes regulatory risk.",
    },
    {
      icon: Headphones,
      title: "Lifecycle Support",
      description: "End-to-end support from concept to post-market compliance.",
    },
    {
      icon: Award,
      title: "Industry Focus",
      description: "Specialized in medical devices, IVDs, and digital health products.",
    },
  ];

  const industries = [
    "Medical Devices",
    "In-Vitro Diagnostics",
    "Software as Medical Device",
    "Digital Health & AI",
    "Implants & High-Risk Devices",
  ];

  return (
    <section id="why-us" className="py-12 md:py-20 lg:py-28 gradient-section-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Success is <span className="text-gradient">Our Priority</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with India's leading regulatory experts for medical devices and IVDs.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left - Benefits Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="glass-card p-5 md:p-6 hover:shadow-card transition-all group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Industries Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 md:p-8 lg:p-10 sticky top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl btn-gradient flex items-center justify-center">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-foreground">Industries We Support</h4>
              </div>
              
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                Specialized regulatory expertise for medical devices and diagnostic products.
              </p>

              <div className="space-y-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary hover:bg-primary/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base text-foreground">{industry}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">1000+</div>
                  <div className="text-xs text-muted-foreground">Approvals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">25+</div>
                  <div className="text-xs text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">98%</div>
                  <div className="text-xs text-muted-foreground">Success</div>
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
