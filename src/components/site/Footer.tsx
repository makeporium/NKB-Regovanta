import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Insights / Blog", to: "/insights" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Regulatory Affairs", to: "/services/regulatory-affairs" },
      { label: "Quality Systems / ISO 13485", to: "/services/iso-13485" },
      { label: "MDSAP", to: "/services/mdsap" },
      { label: "Technical Documentation", to: "/services" },
      { label: "Market Access", to: "/markets" },
      { label: "Audit & Compliance Support", to: "/services" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "India", to: "/services/india" },
      { label: "United States", to: "/services/usa" },
      { label: "European Union", to: "/services/eu" },
      { label: "United Kingdom", to: "/services/uk" },
      { label: "Canada", to: "/services/canada" },
      { label: "Australia", to: "/services/australia" },
      { label: "Other Global Markets", to: "/markets" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Medical Devices", to: "/industries/medical-devices" },
      { label: "In Vitro Diagnostics", to: "/industries/ivd" },
      { label: "Cosmetics", to: "/industries/cosmetics" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              From First Idea to Global Market Access. Regulatory, quality & market access
              solutions for Medical Devices, IVDs and Cosmetics.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/?viewAsMember=true" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy-foreground/10 hover:bg-navy-foreground/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy-foreground/10">
                <Twitter className="h-4 w-4" />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy-foreground/10">
                <Youtube className="h-4 w-4" />
              </span>
            </div>

            <div className="mt-8 space-y-4">
              <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-3 text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                contact@nkbregovanta.com
              </a>
              <div className="flex items-center gap-3 text-sm text-navy-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+918400039062" className="hover:text-navy-foreground transition-colors">+91 84000 39062</a>
              </div>
              <div className="flex items-start gap-3 text-sm text-navy-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Building No 20, Awadh Kunj, Faridi Nagar, CIMAP,<br />
                  Lucknow, Uttar Pradesh, India, 226015
                </span>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-navy-foreground/60">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© NKB Regovanta. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-navy-foreground">Privacy Policy</Link>
            <Link to="/" className="hover:text-navy-foreground">Terms of Use</Link>
            <Link to="/" className="hover:text-navy-foreground">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}