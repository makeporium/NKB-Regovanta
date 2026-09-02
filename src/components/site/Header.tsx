import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const serviceCategories = [
  {
    category: "Regulatory & Market Access",
    items: [
      { to: "/services/regulatory-affairs", label: "Global Medical Device & IVD Registration" },
      { to: "/services/drug-device-combination-products", label: "Drug-Device Combination Product Consulting" },
      { to: "/services/regulatory-due-diligence", label: "Regulatory Due Diligence for Devices & IVDs" },
      { to: "/industries/cosmetics", label: "Cosmetics Regulatory & Market Access" },
      { to: "/services/drug-licenses-for-importers", label: "Drug Licenses for Importers (Form 41/10)" },
      { to: "/services/market-access", label: "Market Access Strategy" },
      { to: "/services/manufacturing", label: "Manufacturing & Facilities" },
    ],
  },
  {
    category: "Quality, Technical & Special Approvals",
    items: [
      { to: "/services/iso-13485", label: "ISO 13485 & QMS" },
      { to: "/services/mdsap", label: "MDSAP Audit Readiness" },
      { to: "/services/technical-documentation", label: "Technical Documentation & DHF" },
      { to: "/services/audit-compliance", label: "Audit & Compliance Support" },
      { to: "/services/wpc-wireless-medical-devices", label: "WPC Wireless Device Approval" },
      { to: "/services/pc-pndt-certificate", label: "PC-PNDT Certificate" },
      { to: "/services/iec-ad-code", label: "IEC & AD Code Registration" },
    ],
  },
];

const services = [
  ...serviceCategories[0].items,
  ...serviceCategories[1].items,
  { to: "/services", label: "All Services Directory" },
];

const supportedCountriesNav = [
  { name: "India", code: "in", auth: "CDSCO Registration", to: "/services/india" },
  { name: "USA", code: "us", auth: "FDA 510(k) & US Agent", to: "/services/usa" },
  { name: "EU", code: "eu", auth: "CE Marking MDR/IVDR", to: "/services/eu" },
  { name: "UK", code: "gb", auth: "MHRA & UKRP Services", to: "/services/uk" },
  { name: "Canada", code: "ca", auth: "Health Canada MDL", to: "/services/canada" },
  { name: "Australia", code: "au", auth: "TGA ARTG Inclusion", to: "/services/australia" },
  { name: "Brazil", code: "br", auth: "ANVISA Registration", to: "/services/brazil" },
  { name: "Saudi Arabia", code: "sa", auth: "SFDA Medical Devices", to: "/services/saudi-arabia" },
  { name: "UAE", code: "ae", auth: "MOHAP Medical Approval", to: "/services/uae" },
  { name: "New Zealand", code: "nz", auth: "Medsafe WAND & Agent", to: "/services/new-zealand" },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About Us" },
  { to: "/insights", label: "Insights" },
  { to: "/case-studies", label: "Case Studies" },
];

const linkClass =
  "text-sm font-medium text-foreground/80 transition-colors hover:text-navy";

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMarketsOpen, setMobileMarketsOpen] = useState(false);

  return (
    <>
      <div className="bg-navy-deep text-white text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>contact@nkbregovanta.com</span>
            </a>
            <a href="tel:+918400039062" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 84000 39062</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">India Based. Globally Connected.</span>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white/80 transition-colors">
                <Linkedin className="h-3.5 w-3.5 fill-current" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white/80 transition-colors">
                <Twitter className="h-3.5 w-3.5 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" aria-label="NKB Regovanta home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link to="/" className={linkClass} activeProps={{ className: "text-navy font-semibold" }}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="group relative">
              <Link 
                to="/services" 
                className={`${linkClass} inline-flex items-center gap-1`}
                activeProps={{ className: "text-navy font-semibold" }}
                activeOptions={{ exact: false }}
              >
                Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              
              <div className="invisible absolute -left-12 top-full w-[640px] translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 z-50">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl overscroll-contain max-h-[calc(100vh-95px)] overflow-y-auto">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {serviceCategories.map((cat, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#0b3a96] pb-2 mb-1.5 border-b border-gray-100 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0b3a96]" />
                          {cat.category}
                        </div>
                        <div className="space-y-0.5">
                          {cat.items.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              className="group/item flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium text-foreground/80 transition-all hover:bg-blue-50/70 hover:text-navy"
                            >
                              <span className="leading-snug">{s.label}</span>
                              <ChevronRight className="h-3.5 w-3.5 text-gray-300 opacity-0 group-hover/item:opacity-100 group-hover/item:text-[#0b3a96] group-hover/item:translate-x-0.5 transition-all shrink-0 ml-1" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between bg-slate-50 -mx-5 -mb-5 p-3 px-5 rounded-b-2xl">
                    <span className="text-[11px] text-navy/70 font-medium">Full regulatory and market access suite</span>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] hover:text-[#082b70] transition-colors"
                    >
                      View All Services Directory <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Markets Dropdown with Flags */}
            <div className="group relative">
              <Link 
                to="/markets" 
                className={`${linkClass} inline-flex items-center gap-1`}
                activeProps={{ className: "text-navy font-semibold" }}
                activeOptions={{ exact: false }}
              >
                Markets <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              
              <div className="invisible absolute -left-16 top-full w-[490px] translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 z-50">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#0b3a96] pb-2 mb-3 border-b border-gray-100 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0b3a96]" />
                      Countries We Support (10 Markets)
                    </span>
                    <span className="text-[10px] text-navy/60 font-semibold normal-case">Full Regulatory Clearance</span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {supportedCountriesNav.map((c) => (
                      <Link
                        key={c.code}
                        to={c.to}
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium text-navy/85 hover:bg-blue-50/70 hover:text-navy transition-all"
                      >
                        <img
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          srcSet={`https://flagcdn.com/w80/${c.code}.png 2x`}
                          alt={c.name}
                          className="w-5.5 h-3.5 object-cover rounded-xs border border-gray-200 shrink-0 shadow-2xs"
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-[12.5px] leading-tight truncate text-navy">{c.name}</span>
                          <span className="text-[10px] text-navy/60 leading-tight truncate">{c.auth}</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between bg-slate-50 -mx-5 -mb-5 p-3 px-5 rounded-b-2xl">
                    <span className="text-[11px] text-navy/70 font-medium">Global regulatory intelligence &amp; licensing</span>
                    <Link
                      to="/markets"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] hover:text-[#082b70] transition-colors"
                    >
                      View All Markets Overview <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {nav.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={linkClass}
                activeProps={{ className: "text-navy font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden rounded-sm bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep sm:inline-flex items-center gap-1.5"
            >
              Book a Consultation / Contact
            </Link>
            <button
              className="lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden shadow-lg absolute w-full max-h-[calc(100vh-112px)] overflow-y-auto">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-medium text-foreground/80"
                activeProps={{ className: "text-navy font-bold" }}
              >
                Home
              </Link>
              
              <div className="border-b border-border flex flex-col">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between py-3 text-sm font-medium text-foreground/80 w-full text-left"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col pb-3 pl-4 border-l-2 border-border ml-2 space-y-3 mt-1">
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium text-foreground/70 hover:text-navy"
                        activeProps={{ className: "text-navy font-bold" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Markets Accordion */}
              <div className="border-b border-border flex flex-col">
                <button
                  onClick={() => setMobileMarketsOpen(!mobileMarketsOpen)}
                  className="flex items-center justify-between py-3 text-sm font-medium text-foreground/80 w-full text-left"
                >
                  Markets &amp; Supported Countries
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileMarketsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileMarketsOpen && (
                  <div className="flex flex-col pb-3 pl-4 border-l-2 border-border ml-2 space-y-2 mt-1">
                    <Link
                      to="/markets"
                      onClick={() => setOpen(false)}
                      className="text-xs font-bold text-[#0b3a96] hover:underline mb-1"
                    >
                      All Supported Markets Overview →
                    </Link>
                    {supportedCountriesNav.map((c) => (
                      <Link
                        key={c.code}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-navy"
                        activeProps={{ className: "text-navy font-bold" }}
                      >
                        <img
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          alt={c.name}
                          className="w-4.5 h-3 object-cover rounded-xs border border-gray-200 shrink-0"
                        />
                        <span>{c.name} — <span className="text-xs text-navy/60">{c.auth}</span></span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {nav.slice(1).map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-sm font-medium text-foreground/80"
                  activeProps={{ className: "text-navy font-bold" }}
                >
                  {n.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium mt-1 text-foreground/80"
                activeProps={{ className: "text-navy font-bold" }}
              >
                Book a Consultation / Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}