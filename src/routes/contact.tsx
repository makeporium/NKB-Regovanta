import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/Bits";
import { CountryCodeSelect } from "@/components/site/CountryCodeSelect";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NKB Regovanta | Book a Regulatory & Compliance Consultation" },
      {
        name: "description",
        content:
          "Schedule a consultation with NKB Regovanta's global regulatory specialists for CDSCO licensing, US FDA 510(k), EU MDR/IVDR, ISO 13485 QMS, and Cosmetics compliance.",
      },
      {
        name: "keywords",
        content:
          "Medical device regulatory consultant India, CDSCO medical device consultation, FDA 510k consultant contact, EU MDR regulatory consultant, NKB Regovanta contact",
      },
      { property: "og:title", content: "Contact NKB Regovanta — Regulatory Affairs & Compliance Experts" },
      {
        property: "og:description",
        content:
          "Get in touch with NKB Regovanta to accelerate your medical device, pharma, or cosmetic regulatory approvals.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/contact" },
{ property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact NKB Regovanta | Book a Regulatory & Compliance Consultation" },
      { name: "twitter:description", content: "Contact NKB Regovanta for expert medical device regulatory consulting. Get a free initial consultation for FDA 510(k), EU MDR, CDSCO India, MDSAP, TGA Australia, UK MHRA, or any global market access challenge. Respons..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-surface pt-8 pb-6 lg:pt-12 lg:pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact Us</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Let's Discuss Your Regulatory Journey
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us what you are working on and where you need support. We’ll help you identify a practical next step.
          </p>
        </div>
      </section>

      <section className="bg-surface pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="card-elevated p-8">
              <h2 className="text-xl font-bold text-navy mb-6">Send Message / Book a Consultation</h2>
              <form action="https://api.web3forms.com/submit" method="POST" className="grid gap-4 sm:grid-cols-2">
                <input type="hidden" name="access_key" value="52b40877-c175-4aca-852e-bb2a7e62a86a" />
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-navy">Name</label>
                  <input type="text" id="name" name="name" required className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-semibold text-navy">Company</label>
                  <input type="text" id="company" name="company" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-navy">Email</label>
                  <input type="email" id="email" name="email" required className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-navy">Phone</label>
                  <div className="flex gap-2 items-stretch h-10">
                    <CountryCodeSelect name="countryCode" value="+91" />
                    <input type="tel" id="phone" name="phone" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent h-full" />
                  </div>
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="country" className="text-xs font-semibold text-navy">Country</label>
                  <input type="text" id="country" name="country" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="service" className="text-xs font-semibold text-navy">Service / Area of Interest</label>
                  <select id="service" name="service" required className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent">
                    <option value="">Select a service</option>
                    <option value="regulatory-affairs">Regulatory Affairs</option>
                    <option value="iso-13485">ISO 13485 / QMS</option>
                    <option value="mdsap">MDSAP</option>
                    <option value="market-access">Market Access</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-semibold text-navy">Message / Project Details</label>
                  <textarea id="message" name="message" required rows={4} className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"></textarea>
                </div>
                <div className="sm:col-span-2 mt-2">
                  <button type="submit" className="w-full rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-deep">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              <div className="card-elevated p-8">
                <h3 className="text-lg font-bold text-navy">Direct Contact</h3>
                <p className="mt-2 text-sm text-muted-foreground mb-6">Reach out to us directly through the following channels.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-surface p-3">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</div>
                      <a href="mailto:contact@nkbregovanta.com" className="mt-1 font-semibold text-navy hover:text-accent transition-colors">contact@nkbregovanta.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-surface p-3">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone</div>
                      <div className="mt-1 font-semibold text-navy">
                        <a href="tel:+918400039062" className="hover:text-accent transition-colors">+91 84000 39062</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-surface p-3">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</div>
                      <div className="mt-1 text-sm text-navy leading-relaxed">
                        Building No 20, Awadh Kunj, Faridi Nagar, CIMAP,<br/>
                        Lucknow, Uttar Pradesh, India, 226015
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}