import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const navStructure = [
  {
    label: "Services",
    href: "/services",
    mega: [
      {
        heading: "Consulting & Strategy",
        items: [
          { label: "US FDA & CMS Consulting", href: "/services/us-fda" },
          { label: "EU MDR & IVDR Consulting", href: "/services/eu-mdr" },
          { label: "Biological Safety Consulting", href: "/services/biological-safety" },
          { label: "Global QA/RA Compliance", href: "/services/quality-management" },
          { label: "Human Factors & Usability Testing", href: "/services/human-factors" },
          { label: "All Consulting Services", href: "/services/regulatory" },
        ],
      },
      {
        heading: "Preclinical Research",
        items: [
          { label: "Medical Device GLP Studies", href: "/services/preclinical-research" },
          { label: "Early Feasibility Studies", href: "/services/preclinical-feasibility" },
          { label: "Preclinical Pathology", href: "/services/preclinical-pathology" },
          { label: "Bioskills Training", href: "/services/bioskills" },
          { label: "Preclinical Imaging Core Lab", href: "/services/preclinical-imaging" },
          { label: "All Preclinical Research Services", href: "/services/preclinical-research" },
        ],
      },
      {
        heading: "Clinical Research",
        items: [
          { label: "Clinical Trial Management", href: "/services/clinical-research" },
          { label: "Data Management", href: "/services/data-management" },
          { label: "Clinical Biostatistics", href: "/services/biostatistics" },
          { label: "Imaging Core Lab", href: "/services/imaging-core-lab" },
          { label: "Safety Management and Reporting", href: "/services/safety-management" },
          { label: "All Clinical Research Services", href: "/services/clinical-research" },
        ],
      },
      {
        heading: "Medical Device Testing",
        items: [
          { label: "Biocompatibility Testing", href: "/services/medical-device-testing" },
          { label: "Microbiology Testing", href: "/services/microbiology" },
          { label: "Sterility Testing", href: "/services/sterility" },
          { label: "Chemical Characterization", href: "/services/chemistry" },
          { label: "Biological Evaluation Plans", href: "/services/biological-safety" },
          { label: "All Medical Device Testing", href: "/services/medical-device-testing" },
        ],
      },
    ],
  },
  {
    label: "Expertise",
    href: "/expertise",
    dropdown: [
      { label: "Subject Matter Experts", href: "/expertise/subject-matter-experts" },
      { label: "Key Opinion Leaders", href: "/expertise/key-opinion-leaders" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "For Specific Devices", href: "/solutions/specific-devices" },
      { label: "For Startups", href: "/solutions/startups" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    mega: [
      {
        heading: "Insights",
        items: [
          { label: "Whitepapers", href: "/resources/whitepapers" },
          { label: "Blogs", href: "/resources/blog" },
          { label: "Videos", href: "/resources/podcasts-and-videos" },
          { label: "Client Stories", href: "/about/client-testimonials" },
          { label: "All Insights", href: "/resources" },
        ],
      },
      {
        heading: "Training",
        items: [
          { label: "Recorded Webinars", href: "/resources/recorded-webinars" },
          { label: "Upcoming Webinars", href: "/events" },
          { label: "E-Learning", href: "/resources/e-learning" },
          { label: "In-Person Training", href: "/resources/in-person-training" },
        ],
      },
      {
        heading: "Tools",
        items: [
          { label: "Test Navigator Tool", href: "/resources/NKB Regovanta-navigators" },
        ],
      }
    ],
  },
  {
    label: "About NKB Regovanta",
    href: "/about",
    dropdown: [
      { label: "Company History", href: "/about/our-history" },
      { label: "Leadership Team", href: "/about/NKB Regovanta-leadership" },
      { label: "Accreditations & Certifications", href: "/about/our-accreditations-certifications" },
      { label: "Tradeshows & Events", href: "/events" },
      { label: "Careers at NKB Regovanta", href: "/careers" },
      { label: "NKB Regovanta News", href: "/about/news" },
      { label: "About NKB Regovanta", href: "/about" },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[hsl(195_65%_20%)] py-1.5 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between text-xs text-white/70">
          <span>The Medical Research Organization™</span>
          <div className="flex items-center gap-6">
            <a href="tel:+917672005050" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" /> +91 7672005050
            </a>
            <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3" /> contact@nkbregovanta.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className="bg-[hsl(195_65%_28%)] border-b border-white/10"
        onMouseLeave={() => setOpenMega(null)}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <div className="bg-white px-3 py-1.5 rounded">
                <img src={logo} alt="NKB Regovanta" className="h-12 md:h-14 w-auto" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navStructure.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMega(item.label)}
                >
                  <Link
                    to={item.href}
                    className={`relative flex items-center gap-1 px-4 py-6 text-sm font-medium transition-colors group
                      ${isActive(item.href) ? "text-[#F5C754]" : "text-white hover:text-white/80"}`}
                  >
                    {item.label}
                    {(item.dropdown || item.mega) && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMega === item.label ? "rotate-180" : ""}`} />
                    )}
                    <span className={`absolute bottom-3 left-4 right-4 h-[2px] bg-gradient-to-r from-[#F5C754] to-[#C08518] transition-transform origin-left duration-300
                      ${isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>

                  {/* Mega Menu */}
                  {openMega === item.label && item.mega && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-max min-w-[640px] bg-white shadow-2xl border-t-2 border-[#F5C754] rounded-b-xl z-50 animate-fade-in">
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-gray-100">
                        {item.mega.map((col) => (
                          <div key={col.heading} className="p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-[hsl(195_65%_28%)] mb-3">{col.heading}</p>
                            <ul className="space-y-2">
                              {col.items.map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    to={sub.href}
                                    onClick={() => setOpenMega(null)}
                                    className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-[hsl(195_65%_28%)] hover:font-medium transition-colors group/sub"
                                  >
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#F5C754]" />
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Simple Dropdown */}
                  {openMega === item.label && item.dropdown && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-2xl border-t-2 border-[#F5C754] rounded-b-xl z-50 animate-fade-in">
                      <ul className="py-2">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.href}
                              onClick={() => setOpenMega(null)}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[hsl(195_65%_28%)] transition-colors"
                            >
                              <ArrowRight className="w-3 h-3 text-[#F5C754]" />
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button asChild className="rounded-full px-5 py-2 bg-gradient-to-r from-[#F5C754] to-[#C08518] hover:from-[#F0B83A] hover:to-[#A7740D] text-white border-transparent shadow-lg transition-all text-sm">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-[hsl(195_65%_25%)] animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navStructure.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobile === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {openMobile === item.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {(item.mega
                        ? item.mega.flatMap((col) => col.items)
                        : item.dropdown ?? []
                      ).map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                          onClick={() => { setIsMenuOpen(false); setOpenMobile(null); }}
                        >
                          <ArrowRight className="w-3 h-3 text-[#F5C754]" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2">
                <Button asChild className="w-full rounded-full bg-gradient-to-r from-[#F5C754] to-[#C08518] text-white border-transparent">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
