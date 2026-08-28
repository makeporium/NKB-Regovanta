import { createFileRoute, Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Factory,
  ArrowRight,
  ShieldCheck,
  Download,
  FileCheck2,
  ClipboardCheck,
  Globe,
  ClipboardList,
  BadgeCheck,
  LineChart,
  Microscope,
  User,
  Settings2,
  Handshake,
  Building2,
  Award,
  Gavel,
  TrendingUp,
  Hash,
  Globe2,
  Radio,
  Layers,
  Activity,
  Landmark,
  Pill,
} from "lucide-react";
import heroImg from "@/assets/cdsco-india-hero.png";
import imgWorldAccess from "@/assets/India on World Map Accesing.png";
import imgGlobeNetwork from "@/assets/Ethereal Global Network Globe.png";
import imgManufacturingBg from "@/assets/Medtech Manufacturing Network Illustration.png";
import imgCertificatesBg from "@/assets/CDSCO Certification Compliance Network.png";

/* Badge positions are % of the hero artwork, matching the empty circles baked into it. */
const heroBadges = [
  { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
  { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
  { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
  { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;

const importRegistrations = [
  { icon: FileText, name: "Class A Import Registration as per GSR 777(E)", desc: "Non-measuring & non-sterile devices.", link: "/services/india/class-a-import" },
  { icon: ClipboardList, name: "Import License for Predicate Medical Devices", desc: "Forms MD-14, MD-15 for approved devices.", link: "/services/india/predicate-devices" },
  { icon: ShieldCheck, name: "Import Authorization for Investigational Devices", desc: "Forms MD-18, MD-19 for clinical trials.", link: "/services/india/investigational-devices" },
  { icon: BadgeCheck, name: "Import Authorization for Novel Medical Devices IVDs", desc: "Forms MD-26, MD-27 for new innovations.", link: "/services/india/novel-ivds" },
  { icon: LineChart, name: "Import Permission for IVD Clinical Evaluations", desc: "Forms MD-24, MD-25 for performance testing.", link: "/services/india/ivd-clinical-performance" },
  { icon: Microscope, name: "Import License for IVD Testing & Evaluation", desc: "Forms MD-16, MD-17 for quality checks.", link: "/services/india/ivd-testing" },
  { icon: User, name: "Personal Use Medical Device Import License", desc: "Forms MD-20, MD-21 for individual patients.", link: "/services/india/personal-use" },
] as const;

const manufacturingRegistrations = [
  { icon: Factory, name: "Manufacturing Licenses for Class C & D Medical Devices", desc: "Forms MD-7, MD-9 for high-risk devices.", link: "/services/india/mfg-class-c-d" },
  { icon: Settings2, name: "Manufacturing Licenses for Class A & B Medical Devices", desc: "Forms MD-3, MD-5 for low-risk devices.", link: "/services/india/mfg-class-a-b" },
  { icon: FileCheck2, name: "Manufacturing Registration for Class A Devices", desc: "Simplified registration as per GSR 777(E).", link: "/services/india/mfg-class-a-gsr" },
  { icon: Handshake, name: "Loan Licenses for Class C & D Devices", desc: "Forms MD-8, MD-10 for third-party manufacturing.", link: "/services/india/loan-class-c-d" },
  { icon: Building2, name: "Loan Licenses for Class A & B Devices", desc: "Forms MD-4, MD-6 for third-party manufacturing.", link: "/services/india/loan-class-a-b" },
] as const;

const cdscoCertificates = [
  { icon: Award, name: "MD-42 Certificate (Medical Device Registration)", desc: "Formal registration certificate from CDSCO.", link: "/services/india/md-42" },
  { icon: Gavel, name: "Non-Conviction Certificate (NCC)", desc: "Declares no regulatory convictions on record.", link: "/services/india/non-conviction" },
  { icon: TrendingUp, name: "Market Standing Certificate (MSC)", desc: "Proof of the product's standing in the market.", link: "/services/india/market-standing" },
  { icon: Hash, name: "Neutral Code Certificate (Special Code)", desc: "Special coding for unbranded exports.", link: "/services/india/neutral-code" },
  { icon: Globe2, name: "Free Sale Certificate (FSC)", desc: "Confirms devices are freely sold in India.", link: "/services/india/free-sale" },
] as const;

const crossFunctionalServices = [
  { icon: Pill, name: "Drug Licenses for Importers (Form 10 & Form 41)", desc: "CDSCO registration certificates, import permits & AIR representation.", link: "/services/drug-licenses-for-importers" },
  { icon: Radio, name: "WPC Framework & ETA for Wireless Medical Devices", desc: "Equipment Type Approval (ETA), DPL licenses & RF test compliance.", link: "/services/wpc-wireless-medical-devices" },
  { icon: Activity, name: "PC-PNDT Certificate for Ultrasound & Imaging Devices", desc: "Statutory Form A & Form B registration under the PC-PNDT Act, 1994.", link: "/services/pc-pndt-certificate" },
  { icon: Landmark, name: "Import Export Code (IEC) & AD Code Registration", desc: "DGFT registration and ICEGATE port-wise bank AD code linking.", link: "/services/iec-ad-code" },
] as const;

type ServiceItem = { icon: LucideIcon; name: string; desc: string; link: string };

function ServiceGroup({
  icon: Icon,
  title,
  description,
  items,
  fullBleedBg = false,
  bgImage = imgGlobeNetwork,
  bgPosition = "70% 20%",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: readonly ServiceItem[];
  fullBleedBg?: boolean;
  bgImage?: string;
  bgPosition?: string;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[{"@context":"https://schema.org","@type":"Service","name":"CDSCO Medical Device Regulatory Consulting India","url":"https://www.nkbregovanta.com/services/india","description":"Expert CDSCO medical device import and manufacturing licence consulting in India. MD-14, MD-15, GSR 777(E), Class A-D device registration, IVD licensing, and post-market compliance.","provider":{"@type":"ProfessionalService","name":"NKB Regovanta Solutions Pvt. Ltd.","url":"https://www.nkbregovanta.com"}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.nkbregovanta.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://www.nkbregovanta.com/services"},{"@type":"ListItem","position":3,"name":"India CDSCO","item":"https://www.nkbregovanta.com/services/india"}]}]` }}
      />
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef3fb] to-[#f8fafc] px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
      {fullBleedBg ? (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] w-full select-none object-cover opacity-95 md:inset-0 md:h-full"
          style={{ objectPosition: bgPosition }}
        />
      ) : (
        <img
          src={bgImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 w-[640px] max-w-none select-none opacity-90 sm:w-[780px] lg:-right-8 lg:-top-12 lg:w-[900px]"
        />
      )}
      <div className="relative z-10">
        <div className="flex items-start gap-5 mb-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100/70 ring-8 ring-blue-50/70">
            <Icon className="h-7 w-7 text-blue-600" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f2340] tracking-tight">{title}</h3>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">{description}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group flex flex-col rounded-2xl bg-white p-6 shadow-[0_2px_16px_rgba(15,35,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,35,64,0.14)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h4 className="font-bold text-[#0f2340] text-[15px] leading-snug">{item.name}</h4>
              <span className="my-3 block h-[2px] w-7 bg-blue-500 transition-all duration-300 group-hover:w-12" />
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-blue-600 text-sm font-bold">Read More</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export const Route = createFileRoute("/services/india/")({
  component: IndiaCDSCOPage,
  head: () => ({
    meta: [
      { title: "CDSCO Medical Device Import & Manufacturing Licence India | NKB Regovanta" },
      { name: "description", content: "Expert CDSCO consultancy services for medical device import license, manufacturing license, and regulatory approvals in India." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india" },
    ],
  }),
});

function IndiaCDSCOPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="CDSCO medical device registration in India" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <h1 className="font-display text-[3.1cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">CDSCO</span> Medical Device
              <br />
              Registration in India
            </h1>
            <div className="mt-[2.4cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[2.2cqw] max-w-[34cqw] text-[1.25cqw] leading-[1.7] text-[#465569]">
              Expert CDSCO consultancy services for medical device import licenses, manufacturing licenses, MDR 2017 compliance, and seamless regulatory approvals in India.
            </p>
            <div className="mt-[2.6cqw] flex flex-wrap items-center gap-[1cqw]">
              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-[1.2cqw] rounded-[0.45cqw] bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-[1.9cqw] py-[0.95cqw] text-[1.05cqw] font-bold text-white shadow-lg shadow-[#0a3d96]/20 transition-opacity hover:opacity-90"
              >
                Consult Our CDSCO Experts
                <ArrowRight className="h-[1.3cqw] w-[1.3cqw]" />
              </Link>
              <Link
                to="/services/india/medical-devices"
                className="inline-flex w-fit items-center gap-[1.2cqw] rounded-[0.45cqw] bg-white border border-[#0a3d96]/30 px-[1.9cqw] py-[0.95cqw] text-[1.05cqw] font-bold text-[#0a3d96] shadow-md hover:bg-blue-50 transition-colors"
              >
                Medical Device Regulatory Services
                <ArrowRight className="h-[1.3cqw] w-[1.3cqw]" />
              </Link>
              <Link
                to="/services/india/ivd"
                className="inline-flex w-fit items-center gap-[1.2cqw] rounded-[0.45cqw] bg-white border border-[#0a3d96]/30 px-[1.9cqw] py-[0.95cqw] text-[1.05cqw] font-bold text-[#0a3d96] shadow-md hover:bg-blue-50 transition-colors"
              >
                IVD Regulatory Services
                <ArrowRight className="h-[1.3cqw] w-[1.3cqw]" />
              </Link>
            </div>
          </div>

          {heroBadges.map(({ icon: Icon, lines, x, y, side }) => (
            <div
              key={lines.join(" ")}
              className="absolute flex h-[5cqw] w-[5cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,35,64,0.10)] ring-1 ring-[#e4ecf7]"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <Icon className="h-[2.5cqw] w-[2.5cqw] text-[#12306f]" strokeWidth={1.6} />
              <p
                className={
                  side === "right"
                    ? "absolute left-full top-1/2 ml-[0.9cqw] -translate-y-1/2 whitespace-nowrap text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                    : "absolute left-1/2 top-full mt-[0.7cqw] -translate-x-1/2 whitespace-nowrap text-center text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                }
              >
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden px-4 pt-12 pb-8 sm:px-6">
          <h1 className="font-display text-3xl font-bold leading-tight text-[#0f2340] sm:text-4xl">
            <span className="text-[#0b3a96]">CDSCO</span> Medical Device Registration in India
          </h1>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Expert CDSCO consultancy services for medical device import licenses, manufacturing licenses, MDR 2017 compliance, and seamless regulatory approvals in India.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white shadow-md"
            >
              Consult Our CDSCO Experts
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services/india/medical-devices"
              className="inline-flex items-center gap-3 rounded-lg bg-white border border-[#0a3d96]/30 px-6 py-3.5 text-sm font-bold text-[#0a3d96] shadow-sm hover:bg-blue-50"
            >
              Medical Device Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services/india/ivd"
              className="inline-flex items-center gap-3 rounded-lg bg-white border border-[#0a3d96]/30 px-6 py-3.5 text-sm font-bold text-[#0a3d96] shadow-sm hover:bg-blue-50"
            >
              IVD Regulatory Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img src={heroImg} alt="" className="mt-8 w-full" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-navy leading-tight">
                CDSCO Simplified: <br/> Your Entry to the Indian Market
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The <strong>Central Drugs Standard Control Organization (CDSCO)</strong> stands as the vigilant gatekeeper of India's booming medical device market. Governed by the stringent Drugs and Cosmetics Act, 1940, and the Medical Devices Rules, 2017, CDSCO’s mandate is clear: ensure every medical device entering or manufactured in India meets the highest global benchmarks for safety, quality, and efficacy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For global and domestic innovators, navigating CDSCO’s intricate regulations—from precise device classification and exhaustive documentation to mastering the <strong>CDSCO Sugam portal</strong> and adapting to evolving guidelines—can be the most significant barrier to market entry and growth.
              </p>
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 mt-8">
                <h3 className="font-bold text-navy mb-3">Redefining the Journey</h3>
                <p className="text-sm text-gray-700">
                  We don’t just guide you through compliance; we fast-track your success. Our deep-seated expertise and strategic insights cut through complexity, transforming regulatory hurdles into streamlined pathways. With NKB Regovanta, your devices achieve rapid, confident, and enduring market access.
                </p>
              </div>
            </div>
            <img
              src={imgWorldAccess}
              alt="India connected to the United States, Canada, United Kingdom, European Union and Australia"
              className="w-full rounded-2xl border border-gray-100 shadow-xl"
            />
          </div>
        </div>
      </section>
      
      {/* SUGAM PORTAL SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1f4d] via-navy to-[#081430] py-16 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(2px 2px at 8% 22%, #fff, transparent), radial-gradient(1.5px 1.5px at 15% 78%, #fff, transparent), radial-gradient(2.5px 2.5px at 22% 45%, #fff, transparent), radial-gradient(1.5px 1.5px at 30% 12%, #fff, transparent), radial-gradient(2px 2px at 38% 85%, #fff, transparent), radial-gradient(1.5px 1.5px at 45% 30%, #fff, transparent), radial-gradient(2.5px 2.5px at 52% 65%, #fff, transparent), radial-gradient(1.5px 1.5px at 60% 8%, #fff, transparent), radial-gradient(2px 2px at 67% 50%, #fff, transparent), radial-gradient(1.5px 1.5px at 74% 88%, #fff, transparent), radial-gradient(2.5px 2.5px at 80% 25%, #fff, transparent), radial-gradient(1.5px 1.5px at 87% 65%, #fff, transparent), radial-gradient(2px 2px at 93% 15%, #fff, transparent), radial-gradient(1.5px 1.5px at 97% 80%, #fff, transparent), radial-gradient(2px 2px at 5% 55%, #fff, transparent), radial-gradient(1.5px 1.5px at 12% 92%, #fff, transparent), radial-gradient(2px 2px at 25% 68%, #fff, transparent), radial-gradient(1.5px 1.5px at 35% 55%, #fff, transparent), radial-gradient(2px 2px at 55% 92%, #fff, transparent), radial-gradient(1.5px 1.5px at 70% 40%, #fff, transparent), radial-gradient(2px 2px at 90% 45%, #fff, transparent)",
            opacity: 0.8,
          }}
        ></div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">CDSCO MDONLINE SUGAM Registration</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            In India’s evolving medical device sector, the <strong>CDSCOMDONLINE Portal</strong> stands as the indispensable online platform for all regulatory interactions. This intuitive system is designed to simplify and accelerate your licensing journey, enabling efficient application submissions, real-time status tracking, and secure approval acquisition. Our team expertly navigates this portal on your behalf.
          </p>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES MENU */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Our CDSCO Services</h2>
            <p className="text-lg text-gray-600">
              Select a service below to explore specific requirements, processes, and how our expert consultants can facilitate your regulatory approvals.
            </p>
          </div>

          <div className="space-y-16">
            
            <ServiceGroup
              icon={Download}
              title="Import Registrations"
              description="End-to-end support for import-related approvals and licenses to ensure smooth and compliant market entry in India."
              items={importRegistrations}
              fullBleedBg
            />

            <ServiceGroup
              icon={Factory}
              title="Manufacturing Registrations"
              description="Complete regulatory support for setting up and licensing medical device manufacturing in India."
              items={manufacturingRegistrations}
              fullBleedBg
              bgImage={imgManufacturingBg}
              bgPosition="78% 55%"
            />

            <ServiceGroup
              icon={FileText}
              title="CDSCO Certificates"
              description="Official certificates and documentation that support regulatory compliance and market credibility."
              items={cdscoCertificates}
              fullBleedBg
              bgImage={imgCertificatesBg}
              bgPosition="100% 85%"
            />

            <ServiceGroup
              icon={Layers}
              title="Cross-Functional & Telecommunication Services"
              description="Comprehensive outsourced retainer programs and wireless spectrum approvals across WPC, FSSAI, BIS, and CDSCO."
              items={crossFunctionalServices}
              fullBleedBg
              bgImage={imgWorldAccess}
              bgPosition="80% 30%"
            />

          </div>
        </div>
      </section>

    </div>
  );
}


