import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  ShieldCheck,
  FlaskConical,
  Globe2,
  CheckCircle2,
  FileText,
  BarChart3,
  Network,
  Search,
  FileCheck2,
  ArrowRight
} from "lucide-react";
import imgHero from "@/assets/industry-ivd.png";
import imgWorld from "@/assets/world-map.png";
import imgEU from "@/assets/eu.png";
import imgUS from "@/assets/us.png";
import imgISO from "@/assets/iso2.png";
import imgIvd2 from "@/assets/ivd2.png";

export const Route = createFileRoute("/industries/ivd")({
  head: () => ({
    meta: [
      { title: "IVD Regulatory Consultant | EU IVDR CDSCO FDA | NKB Regovanta" },
      { name: "description", content: "Build the Right Evidence. Navigate the Right Pathway. NKB Regovanta supports IVD manufacturers in building a comprehensive regulatory strategy from product assessment through approval and post-market compliance." },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/industries/ivd" },
  ],
  }),
  component: IVD,
});

function IVD() {
  return (
    <div className="bg-[#f8f9fc]">
      {/* 1. HERO SECTION */}
      <section className="bg-white overflow-hidden relative border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-stretch min-h-[500px]">
          {/* Left Text */}
          <div className="flex flex-col justify-center py-12 lg:pr-16 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] font-bold text-navy/60 uppercase tracking-widest mb-6">
              <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-navy">IVD</span>
            </div>

            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-navy mb-3">IN VITRO DIAGNOSTICS</p>
            <h1 className="font-display font-extrabold leading-[1.1] text-navy text-[40px] lg:text-[52px] mb-6">
              IVD Regulatory &<br />
              Market Access Support
            </h1>
            <p className="text-[16px] text-navy/80 font-semibold italic mb-12">
              Build the Right Evidence. Navigate the Right Pathway.
            </p>

            {/* Three features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <ShieldCheck className="h-7 w-7 text-navy mb-3" strokeWidth={1.5} />
                <h3 className="text-[12px] font-extrabold text-navy mb-1.5 uppercase">Regulatory Strategy</h3>
                <p className="text-[12px] text-navy/70 leading-relaxed pr-4">Clear pathways for global market access.</p>
              </div>
              <div>
                <FlaskConical className="h-7 w-7 text-navy mb-3" strokeWidth={1.5} />
                <h3 className="text-[12px] font-extrabold text-navy mb-1.5 uppercase">Scientific Rigor</h3>
                <p className="text-[12px] text-navy/70 leading-relaxed pr-4">Evidence that demonstrates safety and performance.</p>
              </div>
              <div>
                <Globe2 className="h-7 w-7 text-navy mb-3" strokeWidth={1.5} />
                <h3 className="text-[12px] font-extrabold text-navy mb-1.5 uppercase">Lifecycle Compliance</h3>
                <p className="text-[12px] text-navy/70 leading-relaxed pr-4">Readiness that goes beyond approval.</p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="hidden lg:block h-full relative">
            {/* White gradient fade to blend the left edge of the image */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <img src={imgHero} alt="IVD Support" className="w-full h-full object-cover object-left" />
          </div>
        </div>
      </section>

      {/* 2. TEXT INTRO SECTION */}
      <section className="py-14 bg-[#f8f9fc]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[15px] font-semibold text-navy/80 leading-relaxed mb-4">
            IVD market access requires alignment across regulatory strategy, product classification, performance<br className="hidden md:block" />
            evidence, quality systems and post-market requirements.
          </p>
          <p className="text-[15px] font-semibold text-navy/80 leading-relaxed">
            NKB Regovanta supports IVD manufacturers across the product lifecycle—from regulatory pathway<br className="hidden md:block" />
            assessment and performance evaluation to technical documentation, submission readiness and<br className="hidden md:block" />
            post-market compliance.
          </p>
        </div>
      </section>

      {/* 3. OUR IVD EXPERTISE */}
      <section className="py-16 bg-[#f8f9fc]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl font-extrabold text-navy uppercase tracking-wide">OUR IVD EXPERTISE</h2>
            <div className="w-12 h-0.5 bg-[#dca85b] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="h-8 w-8 text-navy" strokeWidth={1.25} />
                <h3 className="text-[13px] font-extrabold text-navy uppercase leading-tight">REGULATORY<br/>STRATEGY</h3>
              </div>
              <ul className="space-y-4">
                {["Regulatory pathway strategy", "Product classification", "EU IVDR strategy", "US FDA pathway assessment"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-navy/60 shrink-0 mt-0.5" />
                    <span className="text-[12.5px] text-navy/80 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <BarChart3 className="h-8 w-8 text-navy" strokeWidth={1.25} />
                <h3 className="text-[13px] font-extrabold text-navy uppercase leading-tight">PERFORMANCE &<br/>EVIDENCE</h3>
              </div>
              <ul className="space-y-4">
                {["Performance evaluation strategy", "Scientific validity", "Analytical performance", "Clinical performance"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-navy/60 shrink-0 mt-0.5" />
                    <span className="text-[12.5px] text-navy/80 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="h-8 w-8 text-navy" strokeWidth={1.25} />
                <h3 className="text-[13px] font-extrabold text-navy uppercase leading-tight">QUALITY &<br/>TECHNICAL</h3>
              </div>
              <ul className="space-y-4">
                {["Technical documentation", "ISO 13485 QMS support", "Risk management", "Labeling & intended purpose"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-navy/60 shrink-0 mt-0.5" />
                    <span className="text-[12.5px] text-navy/80 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <Globe2 className="h-8 w-8 text-navy" strokeWidth={1.25} />
                <h3 className="text-[13px] font-extrabold text-navy uppercase leading-tight">MARKET &<br/>LIFECYCLE</h3>
              </div>
              <ul className="space-y-4">
                {["Notified Body readiness", "EUDAMED & UDI", "Post-Market Performance Follow-up", "Vigilance & lifecycle compliance"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-navy/60 shrink-0 mt-0.5" />
                    <span className="text-[12.5px] text-navy/80 font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TARGET MARKETS & COMPARISON */}
      <section className="py-16 bg-white border-y border-border">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl font-extrabold text-navy uppercase tracking-wide">Global Target Markets</h2>
            <div className="w-12 h-0.5 bg-[#dca85b] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Link to="/industries/ivd/india" className="group flex items-center gap-4 p-6 rounded-xl border border-border/50 bg-[#f8f9fc] hover:bg-navy hover:text-white transition-all shadow-sm">
              <span className="text-4xl shadow-sm rounded-sm overflow-hidden leading-none shrink-0" style={{lineHeight: 1}}>🇮🇳</span>
              <div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-white transition-colors text-navy">India</h3>
                <p className="text-sm font-medium opacity-80 mt-1 line-clamp-1">CDSCO Under MDR 2017</p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
            
            <Link to="/industries/ivd/eu" className="group flex items-center gap-4 p-6 rounded-xl border border-border/50 bg-[#f8f9fc] hover:bg-navy hover:text-white transition-all shadow-sm">
              <span className="text-4xl shadow-sm rounded-sm overflow-hidden leading-none shrink-0" style={{lineHeight: 1}}>🇪🇺</span>
              <div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-white transition-colors text-navy">European Union</h3>
                <p className="text-sm font-medium opacity-80 mt-1 line-clamp-1">IVDR 2017/746</p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
            
            <Link to="/industries/ivd/usa" className="group flex items-center gap-4 p-6 rounded-xl border border-border/50 bg-[#f8f9fc] hover:bg-navy hover:text-white transition-all shadow-sm">
              <span className="text-4xl shadow-sm rounded-sm overflow-hidden leading-none shrink-0" style={{lineHeight: 1}}>🇺🇸</span>
              <div>
                <h3 className="font-bold text-lg leading-tight group-hover:text-white transition-colors text-navy">USA</h3>
                <p className="text-sm font-medium opacity-80 mt-1 line-clamp-1">US FDA Framework</p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          <div className="bg-[#f8f9fc] rounded-xl p-8 border border-border/50 shadow-sm overflow-x-auto">
            <h3 className="text-lg font-bold text-navy mb-6">Three-Market Comparison: India vs EU vs USA</h3>
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-navy/20">
                  <th className="py-4 px-4 font-bold text-navy text-[13px] uppercase tracking-wider w-1/4">Dimension</th>
                  <th className="py-4 px-4 font-bold text-navy text-[13px] uppercase tracking-wider w-1/4">India (CDSCO)</th>
                  <th className="py-4 px-4 font-bold text-navy text-[13px] uppercase tracking-wider w-1/4">EU (IVDR)</th>
                  <th className="py-4 px-4 font-bold text-navy text-[13px] uppercase tracking-wider w-1/4">USA (FDA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">Governing regulation</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">MDR 2017</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">IVDR 2017/746</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">FD&C Act / 21 CFR</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors bg-white/20">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">Classification basis</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Risk-based (Part II, First Schedule)</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Risk + public health impact (IVDR Annex VIII)</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Risk-based (I, II, III)</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">Pre-market review</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">CDSCO dossier review + performance evaluation</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Notified Body conformity assessment (Class B/C/D)</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">510(k) / De Novo / PMA</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors bg-white/20">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">In-country performance data</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Mandatory for Class B-D — India-specific data required</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Performance evaluation mandatory — existing data may be used if robust</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Analytical + clinical performance — predicate-based for 510(k)</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">Third party review</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">CDSCO directly (no Notified Body equivalent)</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Notified Body (NB) — mandatory for Class B/C/D</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">FDA (no Notified Body equivalent)</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors bg-white/20">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">Mutual recognition</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">No — India-specific performance evaluation mandatory</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">No — IVDR compliance required regardless of FDA/other approvals</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">No — FDA clearance required regardless of CE/other</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">Database registration</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">SUGAM portal</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">EUDAMED — mandatory from 28 May 2026</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">FDA GUDID (Global UDI Database)</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors bg-white/20">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">UDI requirement</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Rule 46 MDR 2017 — pending implementation date</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Mandatory under IVDR — in EUDAMED from May 2026</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Mandatory — all classes phased since 2013</td>
                </tr>
                <tr className="hover:bg-white/50 transition-colors">
                  <td className="py-4 px-4 text-[13px] font-semibold text-navy/90 align-top">Post-market surveillance</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">MDR 2017 PMS requirements — developing</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">Mandatory PMPF + vigilance reporting in EUDAMED</td>
                  <td className="py-4 px-4 text-[13px] text-navy/70 leading-relaxed align-top">MDR reporting, PMS studies, MedWatch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-20 bg-[#f8f9fc] overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-xl font-extrabold text-navy uppercase tracking-wide">FROM PRODUCT CONCEPT TO MARKET ACCESS</h2>
            <div className="w-12 h-0.5 bg-[#dca85b] mx-auto mt-4"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Dotted Line */}
            <div className="absolute top-16 left-[10%] right-[10%] h-0 border-t-2 border-dashed border-navy/20 hidden md:block z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="flex items-start mb-6">
                  <span className="text-3xl font-extrabold text-navy/20 mr-2 -mt-2">01</span>
                  <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#f8f9fc]">
                    <Search className="h-10 w-10 text-navy" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-[14px] font-extrabold text-navy uppercase mb-5">ASSESS</h3>
                <ul className="space-y-3 w-full max-w-[200px]">
                  {["Classification", "Intended Purpose", "Regulatory Pathway"].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-navy/50 mt-0.5 shrink-0" />
                      <span className="text-[12.5px] text-navy/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="flex items-start mb-6">
                  <span className="text-3xl font-extrabold text-navy/20 mr-2 -mt-2">02</span>
                  <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#f8f9fc]">
                    <FlaskConical className="h-10 w-10 text-navy" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-[14px] font-extrabold text-navy uppercase mb-5">BUILD</h3>
                <ul className="space-y-3 w-full max-w-[200px]">
                  {["Performance Evidence", "QMS & Risk Management", "Technical Documentation"].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-navy/50 mt-0.5 shrink-0" />
                      <span className="text-[12.5px] text-navy/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="flex items-start mb-6">
                  <span className="text-3xl font-extrabold text-navy/20 mr-2 -mt-2">03</span>
                  <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-[#f8f9fc]">
                    <FileCheck2 className="h-10 w-10 text-navy" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-[14px] font-extrabold text-navy uppercase mb-5">SUBMIT</h3>
                <ul className="space-y-3 w-full max-w-[200px]">
                  {["Submission Strategy", "Notified Body / FDA Readiness", "Review & Response Support"].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-navy/50 mt-0.5 shrink-0" />
                      <span className="text-[12.5px] text-navy/80 font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="flex items-start mb-6">
                  <span className="text-3xl font-extrabold text-navy/20 mr-2 -mt-2">04</span>
                  <div className="w-28 h-28 rounded-full bg-navy shadow-xl flex items-center justify-center border-4 border-[#f8f9fc]">
                    <ShieldCheck className="h-10 w-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-[14px] font-extrabold text-navy uppercase mb-5">MAINTAIN</h3>
                <ul className="space-y-3 w-full max-w-[200px]">
                  {["PMS & PMPF", "Vigilance", "Lifecycle Compliance"].map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-navy/50 mt-0.5 shrink-0" />
                      <span className="text-[12.5px] text-navy/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-[16px] font-bold text-navy mb-8">One regulatory strategy. One connected pathway.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white text-[11px] font-extrabold uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-navy/90 transition-colors">
              TALK TO OUR IVD EXPERTS <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. DARK SECTION: WHY LEADING IVD COMPANIES... */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f8f9fc]">
        <div className="mx-auto max-w-[1440px]">
          <div 
            className="rounded-xl overflow-hidden relative shadow-xl bg-navy bg-center bg-cover bg-no-repeat min-h-[380px] flex items-center"
            style={{ backgroundImage: `url(${imgIvd2})` }}
          >
            <div className="lg:w-3/5 p-8 lg:p-10 relative z-10">
              <h2 className="text-[17px] md:text-[20px] font-extrabold text-white leading-tight uppercase mb-6">
                WHY LEADING IVD COMPANIES<br/>
                PARTNER WITH NKB REGOVANTA
              </h2>
              
              <ul className="space-y-4">
                {[
                  "Deep expertise in EU IVDR, US FDA and global regulatory pathways",
                  "Strong scientific and clinical evaluation capabilities",
                  "Integrated approach across quality, regulatory and market access",
                  "Commitment to compliance, quality and patient safety",
                  "Agile, responsive and globally aligned"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                      <ShieldCheck className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[12px] text-white/90 font-medium pt-1">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER CTA */}
      <section className="bg-navy py-20 relative overflow-hidden">
        {/* World map background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen" style={{ backgroundImage: `url(${imgWorld})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-navy to-navy pointer-events-none"></div>

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase leading-tight mb-3">
              READY TO ACCELERATE<br/>
              YOUR IVD JOURNEY?
            </h2>
            <p className="text-[16px] text-white/90 font-medium">
              Regulatory clarity. Scientific confidence.<br/>
              Global access.
            </p>
          </div>
          <div className="shrink-0">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#dca85b] text-navy text-[11px] font-extrabold uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#dca85b]/90 transition-colors">
              BOOK A CONSULTATION <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
