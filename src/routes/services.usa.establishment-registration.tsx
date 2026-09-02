import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  BadgeCheck,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Building,
  RefreshCw,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/establishment-registration")({
  head: () => ({
    meta: [
      { title: "FDA Establishment Registration & Device Listing (FURLS) | NKB Regovanta" },
      {
        name: "description",
        content:
          "Complete FDA Establishment Registration & Device Listing support via FDA FURLS/CDRH portal. Annual renewals, PIN/PCN management, US Agent coordination, and regulatory alignment.",
      },
      {
        name: "keywords",
        content:
          "FDA establishment registration, FDA device listing, FURLS registration, annual FDA renewal, MDUFA user fee, US Agent, NKB Regovanta",
      },
      { property: "og:title", content: "FDA Establishment Registration & Device Listing | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We support initial registration, device listing and annual maintenance while checking alignment with the device's actual regulatory status and market pathway.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/establishment-registration" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/establishment-registration" }],
  }),
  component: EstablishmentRegistrationPage,
});

function EstablishmentRegistrationPage() {
  const whenNeeded = [
    "Before applicable establishments begin commercial distribution in the US",
    "During annual establishment registration renewal (October 1 – December 31)",
    "When new devices are added or existing listings change",
    "When ownership, establishment information or US Agent details change",
    "When manufacturing or corporate changes affect existing registration data",
  ];

  const ourSupport = [
    "Initial establishment registration",
    "Device listing in FURLS / DRLM",
    "Annual registration renewal & MDUFA user fee management",
    "US Agent coordination & verification",
    "Registration data review & audit readiness",
    "Updates following company, site or product changes",
    "Assessment of whether registration activity is consistent with the device regulatory status",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "FDA Establishment Registration & Device Listing",
              url: "https://www.nkbregovanta.com/services/usa/establishment-registration",
              description:
                "US FDA Establishment Registration and Device Listing via FURLS system, annual renewal, and regulatory alignment.",
              provider: {
                "@type": "ProfessionalService",
                name: "NKB Regovanta Solutions Pvt. Ltd.",
                url: "https://www.nkbregovanta.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nkbregovanta.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://www.nkbregovanta.com/services" },
                { "@type": "ListItem", position: 3, name: "USA FDA", item: "https://www.nkbregovanta.com/services/usa" },
                { "@type": "ListItem", position: 4, name: "Establishment Registration", item: "https://www.nkbregovanta.com/services/usa/establishment-registration" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/usa" className="hover:text-navy transition-colors">USA FDA</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Establishment Registration &amp; Listing</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <BadgeCheck className="h-3.5 w-3.5" /> 21 CFR Part 807 Compliance
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              FDA Establishment Registration &amp; Device Listing
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We support initial registration, device listing and annual maintenance while checking that the administrative registration activity remains aligned with the device's actual regulatory status and market authorization pathway.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Start FDA Registration <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* What This Service Is */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <Building className="h-5 w-5 text-[#0b3a96]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  FDA establishment registration and device listing are recurring administrative requirements for applicable establishments and devices. They are distinct from premarket clearance or approval and must accurately reflect the manufacturer, establishment and marketed device information.
                </p>
              </div>

              {/* When It Is Needed */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-5 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" /> When It Is Needed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whenNeeded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 border border-gray-200/70 hover:bg-blue-50/30 transition-colors"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13.5px] text-navy/80 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Support */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  Our Support
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {ourSupport.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0b3a96] shrink-0" />
                      <span className="text-[13px] font-bold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Regulatory Integrity Beyond Data Entry
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not treat registration as a data-entry task. We verify that the registration and listing position is consistent with the device's actual regulatory pathway and commercialization status.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Registration Essentials
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <RefreshCw className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Annual MDUFA facility fee payment required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>FURLS / DRLM listing of all device models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>US Agent confirmation required for foreign sites</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Need Registration Assistance?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Fast-track your FDA establishment registration and device listings accurately.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Start FDA Registration <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Register Your Facility with the FDA?"
        description="Our regulatory specialists manage your establishment registration and device listings smoothly."
      />
    </>
  );
}
