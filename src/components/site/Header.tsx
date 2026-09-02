import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { to: "/services/regulatory-affairs", label: "Global Medical Device & IVD Regulatory Registration" },
  { to: "/services/drug-device-combination-products", label: "Drug-Device Combination Product Consulting" },
  { to: "/services/regulatory-due-diligence", label: "Regulatory Due Diligence for Medical Devices & IVDs" },
  { to: "/services/drug-licenses-for-importers", label: "Drug Licenses for Importers" },
  { to: "/services/wpc-wireless-medical-devices", label: "WPC Wireless Device Approval" },
  { to: "/services/pc-pndt-certificate", label: "PC-PNDT Certificate" },
  { to: "/services/iec-ad-code", label: "IEC & AD Code Registration" },
  { to: "/services/iso-13485", label: "ISO 13485 & QMS" },
  { to: "/services/mdsap", label: "MDSAP" },
  { to: "/services/technical-documentation", label: "Technical Documentation" },
  { to: "/services/market-access", label: "Market Access" },
  { to: "/services/manufacturing", label: "Manufacturing" },
  { to: "/services/audit-compliance", label: "Audit & Compliance Support" },
  { to: "/services", label: "All Services" },
];

const nav = [
  { to: "/", label: "Home" },
  { to: "/markets", label: "Markets" },
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

  return (
    <>
      <div className="bg-navy text-white text-[11px] font-medium tracking-wide">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              contact@nkbregovanta.com
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-white/90">
              <Phone className="h-3.5 w-3.5" />
              <a href="tel:+918400039062" className="hover:text-white transition-colors">+91 84000 39062</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline-block">India Based. Globally Connected.</span>
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
            <div className="group relative">
              <Link 
                to="/services" 
                className={`${linkClass} inline-flex items-center gap-1`}
                activeProps={{ className: "text-navy font-semibold" }}
                activeOptions={{ exact: false }}
              >
                Services <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <div className="invisible absolute left-0 top-full w-60 translate-y-1 pt-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="card-elevated overflow-hidden py-1">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-surface hover:text-navy"
                    >
                      {s.label}
                    </Link>
                  ))}
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