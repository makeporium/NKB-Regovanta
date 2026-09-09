import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  { title: "Company", links: [{ label: "About Us", to: "/about" }, { label: "Contact", to: "/contact" }, { label: "Case Studies", to: "/case-studies" }, { label: "Insights", to: "/insights" }] },
  { title: "Priority services", links: [{ label: "India CDSCO", to: "/services/india" }, { label: "US FDA", to: "/services/usa" }, { label: "EU MDR & IVDR", to: "/services/eu" }, { label: "ISO 13485 & QMS", to: "/services/iso-13485" }, { label: "Technical Documentation", to: "/services/technical-documentation" }] },
  { title: "Industries", links: [{ label: "Medical Devices", to: "/industries/medical-devices" }, { label: "In Vitro Diagnostics", to: "/industries/ivd" }, { label: "Pharmaceuticals", to: "/services/drug-licenses-for-importers" }, { label: "Cosmetics", to: "/industries/cosmetics" }] },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">Regulatory, quality, manufacturing and market-access support for medical devices, IVDs, pharmaceuticals and cosmetics.</p>
            <a href="https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/" target="_blank" rel="noreferrer" aria-label="NKB Regovanta on LinkedIn" className="mt-6 flex h-9 w-9 items-center justify-center rounded-sm bg-navy-foreground/10 hover:bg-navy-foreground/20 transition-colors"><Linkedin className="h-4 w-4" /></a>
            <div className="mt-8 space-y-4 text-sm text-navy-foreground/70">
              <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-3 hover:text-navy-foreground transition-colors"><Mail className="h-4 w-4 shrink-0" /> contact@nkbregovanta.com</a>
              <div className="flex items-start gap-3"><Phone className="h-4 w-4 shrink-0 mt-1" /><div className="flex flex-col gap-1.5"><a href="tel:+919513699000" className="hover:text-navy-foreground transition-colors">+91 95136 99000</a><a href="tel:+919180351425" className="hover:text-navy-foreground transition-colors">+91 91803 51425</a><a href="tel:+918400039062" className="hover:text-navy-foreground transition-colors">+91 84000 39062</a></div></div>
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /><span>Building No 20, Awadh Kunj, Faridi Nagar, CIMAP,<br />Lucknow, Uttar Pradesh, 226015, India</span></div>
            </div>
          </div>
          {columns.map((column) => <div key={column.title}><h2 className="text-xs font-semibold uppercase tracking-wider text-navy-foreground/50">{column.title}</h2><ul className="mt-4 space-y-3">{column.links.map((link) => <li key={link.label}><Link to={link.to} className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">{link.label}</Link></li>)}</ul></div>)}
        </div>
        <div className="mt-12 border-t border-navy-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-navy-foreground/50"><p>&copy; {new Date().getFullYear()} NKB Regovanta Solutions Private Limited. All rights reserved.</p><div className="mt-4 md:mt-0 flex gap-6"><Link to="/about" className="hover:text-navy-foreground">Privacy Policy</Link><Link to="/about" className="hover:text-navy-foreground">Terms of Service</Link><Link to="/contact" className="hover:text-navy-foreground">Contact Us</Link></div></div>
      </div>
    </footer>
  );
}
