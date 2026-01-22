import { Users, Award, FileCheck, Globe, Star, TrendingUp } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: FileCheck,
      value: "1000+",
      label: "Licenses Approved",
      description: "Successfully processed CDSCO licenses",
    },
    {
      icon: Users,
      value: "500+",
      label: "Happy Clients",
      description: "Trusted by companies worldwide",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      description: "Industry expertise since 2009",
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries Served",
      description: "Global clients in India market",
    },
    {
      icon: Star,
      value: "98%",
      label: "Success Rate",
      description: "First-time approval rate",
    },
    {
      icon: TrendingUp,
      value: "50%",
      label: "Faster Approvals",
      description: "Than industry average",
    },
  ];

  const testimonials = [
    {
      quote: "RegulaMed helped us get our medical device import license in record time. Their expertise in CDSCO regulations is unmatched.",
      author: "Rajesh Kumar",
      company: "MedTech Solutions Pvt Ltd",
      role: "Director, Regulatory Affairs",
    },
    {
      quote: "The team's knowledge of both Indian and US FDA regulations made our global expansion seamless. Highly recommended!",
      author: "Sarah Chen",
      company: "DiagnoLabs Inc, USA",
      role: "VP Regulatory",
    },
    {
      quote: "Professional, responsive, and thorough. They guided us through every step of the IVD registration process.",
      author: "Dr. Amit Sharma",
      company: "BioAssay Diagnostics",
      role: "CEO",
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-4">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in medical device and IVD regulatory services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-4 md:p-6 text-center hover:shadow-card transition-colors"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground hidden md:block">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
            What Our Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 md:p-8 relative"
              >
                {/* Quote Mark */}
                <div className="absolute top-4 right-4 text-5xl text-primary/20 font-serif">"</div>
                
                <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-6">Recognized & Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {["CDSCO Registered", "ISO 13485 Experts", "US FDA Specialists", "EU MDR Consultants", "BIS Certified"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium whitespace-nowrap">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
