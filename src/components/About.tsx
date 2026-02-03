import { CheckCircle2, ArrowRight, Globe, Users, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    "US FDA expertise (510(k), PMA, De Novo)",
    "EU MDR compliance & CE Marking",
    "Global regulatory strategy & alignment",
    "Hands-on manufacturing & import licensing",
    "End-to-end lifecycle support",
    "Faster approvals & reduced compliance risk",
  ];

  const stats = [
    { icon: Globe, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "25+", label: "Countries Served" },
    { icon: Shield, value: "15+", label: "Years Experience" },
    { icon: Award, value: "98%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 gradient-section-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Global Regulatory Services for<br className="hidden md:block" /> 
            <span className="text-gradient">Medical Device Compliance</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a specialized regulatory services agency focused on medical device compliance for global markets. Our primary expertise lies in US FDA regulations, with comprehensive support for EU MDR and international markets including India.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our mission is to simplify medical device regulations and help manufacturers deliver safe, effective, and compliant products to patients worldwide. With deep expertise in FDA 510(k), PMA, and global regulatory pathways, we provide you with a strategic advantage.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="btn-gradient">
              <a href="#services" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Right - Image/Graphic Area */}
          <div className="relative">
            <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }} />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Your Trusted Global Partner</h3>
                <p className="text-muted-foreground mb-8">
                  We bring decades of combined experience in navigating regulatory landscapes across US FDA, EU MDR, and India CDSCO markets.
                </p>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-secondary rounded-xl p-4 text-center">
                      <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 btn-gradient rounded-2xl p-4 shadow-accent hidden lg:block">
              <div className="text-3xl font-bold text-accent-foreground">15+</div>
              <div className="text-sm text-accent-foreground/80">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
