import PageLayout from "@/components/PageLayout";
import { ArrowRight, Award, Globe, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timeline = [
  { year: "2018", title: "Founded", desc: "NKB Regovanta was established with a focused mission: to guide medical device and IVD manufacturers through the world's most complex regulatory environments with precision, expertise, and integrity." },
  { year: "2019", title: "Core Services Launch", desc: "Established core regulatory consulting capabilities spanning US FDA strategy, EU MDR compliance, biological safety evaluation, and quality management systems." },
  { year: "2020", title: "Expanded Portfolio", desc: "Added full clinical research support and quality management consulting services — transforming into a true end-to-end Medical Research Organization (MRO)." },
  { year: "2021", title: "Preclinical & IVDR Focus", desc: "Launched preclinical research advisory services and deepened expertise in ISO 10993 biological evaluation, GLP study oversight, and IVDR compliance readiness." },
  { year: "2022–2023", title: "Startup Solutions", desc: "Introduced the Startup Solutions program, a dedicated integrated pathway for early-stage MedTech companies to navigate regulatory challenges efficiently and cost-effectively." },
  { year: "2024+", title: "Global Reach", desc: "Strengthened global regulatory expertise across US FDA, EU, and APAC markets — serving 100+ clients across diverse therapeutic areas annually." },
];

const accreditations = [
  { title: "ISO 17025", desc: "Accredited testing laboratory for biocompatibility and chemical characterization" },
  { title: "AAALAC International", desc: "Full accreditation for animal care and use programs in preclinical research" },
  { title: "GLP Compliance", desc: "FDA and OECD GLP-compliant preclinical studies per 21 CFR Part 58" },
  { title: "ISO 13485", desc: "Certified Quality Management System for medical device services" },
  { title: "CAP Accreditation", desc: "College of American Pathologists accreditation for laboratory services" },
  { title: "ICH GCP", desc: "Clinical research conducted in accordance with ICH E6(R2) Good Clinical Practice" },
];

const leadership = [
  { name: "Dr. Rajesh Kumar", title: "Chief Executive Officer", bg: "bg-teal-100" },
  { name: "Priya Sharma", title: "Chief Scientific Officer", bg: "bg-blue-100" },
  { name: "Dr. Anil Verma", title: "VP, Regulatory Affairs", bg: "bg-indigo-100" },
  { name: "Sunita Mehta", title: "VP, Clinical Research", bg: "bg-purple-100" },
  { name: "Dr. Rahul Gupta", title: "VP, Medical Device Testing", bg: "bg-cyan-100" },
  { name: "Kavita Singh", title: "VP, Quality & Compliance", bg: "bg-green-100" },
];

const AboutPage = () => (
  <PageLayout
    heroTag="About NKB Regovanta"
    heroTitle="The Medical Research Organization™ Exclusively for Medical Devices & IVDs"
    heroSubtitle="For over 8 Years, NKB Regovanta has been the trusted partner for medical device manufacturers navigating the world's most complex regulatory environments."
    breadcrumbs={[{ label: "About" }]}
  >
    {/* Mission */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[hsl(195_65%_28%)] mb-3">Our Mission</p>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Advancing Healthcare Through Accelerated Medical Device Development</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              NKB Regovanta exists for a single purpose: to help medical device and IVD manufacturers bring safe, effective, and innovative products to market — faster, smarter, and with greater confidence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe that regulatory complexity should never be the barrier between a life-changing device and the patients who need it. Our integrated MRO model eliminates fragmentation — bringing consulting, preclinical, clinical, and testing capabilities under one roof, managed by specialists with a single point of accountability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From a startup developing their first Class II device to a multinational managing a global portfolio, we are the partner that understands your science, your patients, and your regulatory path.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Building2, value: "8+", label: "Years of Experience", sub: "Medical device focus since founding" },
              { icon: Users, value: "1,400+", label: "Global Associates", sub: "Scientists, clinicians & RA experts" },
              { icon: Globe, value: "18", label: "Global Locations", sub: "North America, Europe & Asia" },
              { icon: Award, value: "3,000+", label: "Sponsors Served", sub: "Startups to multinationals annually" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <s.icon className="w-5 h-5 text-[#F5C754] mb-2" />
                <div className="text-2xl font-black bg-gradient-to-r from-[#F5C754] to-[#C08518] bg-clip-text text-transparent">{s.value}</div>
                <div className="font-bold text-gray-900 text-sm">{s.label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-[hsl(195_65%_28%)] mb-3">Our Story</p>
        <h2 className="text-2xl font-black text-gray-900 mb-10">8 Years of Medical Device Innovation</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F5C754] to-[#C08518] hidden md:block" />
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-8 md:ml-14">
                <div className="hidden md:flex flex-col items-center -ml-20">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F5C754] to-[#C08518] flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                    {item.year.slice(0, 4)}
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex-1 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-black text-[#C08518]">{item.year}</span>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Leadership
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-[hsl(195_65%_28%)] mb-3">Leadership</p>
        <h2 className="text-2xl font-black text-gray-900 mb-10">Our Executive Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leadership.map((l) => (
            <div key={l.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 flex items-center gap-4 hover:shadow-md transition-all">
              <div className={`w-14 h-14 rounded-full ${l.bg} flex items-center justify-center text-xl font-black text-[hsl(195_65%_28%)] flex-shrink-0`}>
                {l.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-bold text-gray-900">{l.name}</p>
                <p className="text-gray-500 text-sm">{l.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    */}

    {/* Accreditations */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-sm font-bold uppercase tracking-widest text-[hsl(195_65%_28%)] mb-3">Accreditations & Certifications</p>
        <h2 className="text-2xl font-black text-gray-900 mb-10">Quality You Can Trust</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {accreditations.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-[#F5C754]" />
                <h3 className="font-bold text-gray-900">{a.title}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-[hsl(195_65%_28%)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-4">Partner with the MRO Built for MedTech</h2>
        <p className="text-white/70 mb-7 max-w-lg mx-auto">Join 3,000+ medical device manufacturers who trust NKB Regovanta to guide their most important regulatory decisions.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="rounded-full px-8 btn-gradient text-white border-transparent shadow-lg font-semibold">
            <Link to="/contact" className="flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-8 border-white/40 text-white bg-transparent hover:bg-white/10 font-semibold">
            <Link to="/services">View Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default AboutPage;
