import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { to: "/services/regulatory-affairs", label: "Regulatory Affairs" },
  { to: "/services/iso-13485", label: "ISO 13485 & QMS" },
  { to: "/services/mdsap", label: "MDSAP" },
  { to: "/services/technical-documentation", label: "Technical Documentation" },
  { to: "/services/market-access", label: "Market Access" },
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

  return (
    <>
      <div className="bg-navy text-white text-[11px] font-medium tracking-wide">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              contact@nkbregovanta.com
            </a>
            <a href="tel:+918861375067" className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +91 88613 75067
            </a>
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
          <div className="border-t border-border bg-background lg:hidden shadow-lg absolute w-full">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {[...nav, ...services, { to: "/contact", label: "Book a Consultation / Contact" }].map((n) => (
                <Link
                  key={n.to + n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-sm font-medium text-foreground/80 last:border-0"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}