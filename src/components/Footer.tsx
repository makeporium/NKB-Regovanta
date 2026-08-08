import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const links = {
    consulting: [
      { label: "Regulatory & Strategic Consulting", href: "/services/regulatory-consulting" },
      { label: "US FDA Consulting", href: "/services/us-fda" },
      { label: "EU MDR & IVDR", href: "/services/eu-mdr" },
      { label: "Biological Safety Consulting", href: "/services/biological-safety" },
      { label: "Human Factors & Usability", href: "/services/human-factors" },
      { label: "Quality & Compliance", href: "/services/quality-management" },
    ],
    research: [
      { label: "Preclinical Research", href: "/services/preclinical" },
      { label: "Clinical Trial Management", href: "/services/clinical/trial-management" },
      { label: "Biocompatibility Testing", href: "/services/testing/biocompatibility" },
      { label: "Microbiology & Sterility", href: "/services/testing/microbiology" },
      { label: "Chemical Characterization", href: "/services/testing/chemistry" },
    ],
    expertise: [
      { label: "Cardiovascular", href: "/expertise/cardiovascular" },
      { label: "Orthopedics", href: "/expertise/orthopedics" },
      { label: "Wound Care", href: "/expertise/wound-care" },
      { label: "IVD", href: "/expertise/ivd" },
      { label: "SaMD", href: "/expertise/samd" },
      { label: "All Therapeutic Areas", href: "/expertise" },
    ],
    company: [
      { label: "About NKB Regovanta", href: "/about" },
      { label: "Leadership Team", href: "/about/leadership" },
      { label: "Accreditations", href: "/about/accreditations" },
      { label: "Global Locations", href: "/about/locations" },
      { label: "Careers", href: "/about/careers" },
      { label: "News & Press", href: "/about/news" },
    ],
    resources: [
      { label: "Blog & Insights", href: "/resources/blog" },
      { label: "Whitepapers", href: "/resources/whitepapers" },
      { label: "Webinars & Training", href: "/resources/webinars" },
      { label: "Client Stories", href: "/resources/client-stories" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
  };

  return (
    <footer className="bg-[hsl(195_65%_15%)] text-white relative overflow-hidden">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Stay Ahead of Regulatory Changes</h3>
              <p className="text-white/60 text-sm">Subscribe for the latest FDA, EU MDR, and global MedTech regulatory intelligence.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                placeholder="Enter your email"
                className="h-11 bg-white/10 border-white/20 text-white placeholder:text-white/40 min-w-[240px]"
              />
              <Button className="h-11 btn-gradient px-6 whitespace-nowrap rounded-full">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="bg-white inline-block px-3 py-2 rounded mb-5">
              <img src={logo} alt="NKB Regovanta" className="h-10 w-auto" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              The Medical Research Organization™ exclusively dedicated to medical device and IVD development.
            </p>
            <div className="space-y-2 mb-5">
              <a href="tel:+918861375067" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91 8861375067
              </a>
              <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" /> contact@nkbregovanta.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>Building No 20, Awadh KunJ, FARIDI NAGAR, Cimap,<br />Lucknow, Uttar Pradesh, India, 226015</span>
              </div>
            </div>
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/?viewAsMember=true" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Youtube, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target={href !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#F5C754]/30 hover:text-[#F5C754] transition-colors text-white/50">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Consulting */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Consulting</h4>
            <ul className="space-y-2.5">
              {links.consulting.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research & Testing */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Research & Testing</h4>
            <ul className="space-y-2.5">
              {links.research.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Expertise</h4>
            <ul className="space-y-2.5">
              {links.expertise.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              {links.company.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {links.resources.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} NKB Regovanta Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
