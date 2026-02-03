import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const links = {
    forImporter: [
      { label: "Medical Device Import License", href: "#services" },
      { label: "IVD Import License", href: "#services" },
      { label: "BIS Certification", href: "#services" },
      { label: "Indian Authorised Agent", href: "#services" },
    ],
    forManufacturer: [
      { label: "Manufacturing License", href: "#services" },
      { label: "Clinical Trials", href: "#services" },
      { label: "Quality Systems", href: "#services" },
      { label: "510(k) Submission", href: "#services" },
      { label: "EU MDR Compliance", href: "#services" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Top CTA Section */}
      <div className="border-b border-border relative">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                Ready to Start Your <span className="text-gradient">Regulatory Journey?</span>
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Subscribe for the latest CDSCO updates and regulatory insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input 
                placeholder="Enter your email" 
                className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground min-w-[200px] sm:min-w-[250px]"
              />
              <Button className="h-12 btn-gradient px-6 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 md:py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="mb-4 md:mb-6">
              <img src={logo} alt="NKB Regovanta" className="h-14 md:h-16 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6 max-w-sm">
              Leading regulatory consultancy for medical devices and in-vitro diagnostics. Specialized in US FDA, EU MDR, CDSCO licensing, import/manufacturing approvals & global regulatory support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-4 md:mb-6">
              <a href="tel:+917672005050" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +91 7672005050
              </a>
              <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                contact@nkbregovanta.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                <span>123 Regulatory Plaza, Suite 500<br />Medical District, Mumbai 400001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors text-muted-foreground">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Importer */}
          <div>
            <h4 className="font-bold mb-4 md:mb-5 text-gradient text-base md:text-lg">For Importer</h4>
            <ul className="space-y-2 md:space-y-3">
              {links.forImporter.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Manufacturer */}
          <div>
            <h4 className="font-bold mb-4 md:mb-5 text-gradient text-base md:text-lg">For Manufacturer</h4>
            <ul className="space-y-2 md:space-y-3">
              {links.forManufacturer.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 md:mb-5 text-gradient text-base md:text-lg">Company</h4>
            <ul className="space-y-2 md:space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border relative">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} NKB Regovanta. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
