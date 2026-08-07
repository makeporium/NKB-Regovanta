import PageLayout from "@/components/PageLayout";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const therapeuticAreas = [
  {
    title: "Cardiovascular & Neurovascular",
    href: "/expertise/cardiovascular",
    stats: "8,700+ projects in 5 years",
    desc: "Comprehensive expertise across eight cardiovascular subcategories — vascular, cardiac assist, structural heart, heart valves, electrophysiology, interventional cardiology, rhythm management, and cardiac surgery.",
    tags: ["Coronary Stents", "Heart Valves", "EP Catheters", "Cardiac Assist", "Stroke Devices", "Peripheral Vascular"],
  },
  {
    title: "Orthopedics",
    href: "/expertise/orthopedics",
    stats: "220+ preclinical, 35+ clinical projects",
    desc: "Deep expertise across joint reconstruction, spinal surgery, trauma fixation, arthroscopy, orthobiologics, and orthopedic power tools — from bench to bedside.",
    tags: ["Joint Reconstruction", "Spinal Implants", "Trauma Fixation", "Arthroscopy", "Orthobiologics"],
  },
  {
    title: "Wound Care",
    href: "/expertise/wound-care",
    stats: "Full lifecycle support",
    desc: "Experience with negative pressure wound therapy (NPWT), tissue-engineered skin substitutes, surgical sutures, cold plasma, and traditional and advanced wound management dressings.",
    tags: ["NPWT", "Tissue Engineering", "Advanced Dressings", "Surgical Sutures", "Cold Plasma"],
  },
  {
    title: "Ophthalmology",
    href: "/expertise/ophthalmology",
    stats: "Regulatory & clinical expertise",
    desc: "Regulatory strategy and clinical support for intraocular lenses, vitreoretinal devices, glaucoma implants, and diagnostic ophthalmic imaging devices.",
    tags: ["IOLs", "Vitreoretinal", "Glaucoma Implants", "Ophthalmic Diagnostics"],
  },
  {
    title: "Gastroenterology",
    href: "/expertise/gastroenterology",
    stats: "Endoscopy to bariatrics",
    desc: "Broad GI experience spanning endoscopic devices, stents, hemostasis tools, bariatric devices, and gastrointestinal diagnostic systems.",
    tags: ["Endoscopy", "GI Stents", "Bariatric", "Hemostasis", "Motility Testing"],
  },
  {
    title: "In Vitro Diagnostics (IVD)",
    href: "/expertise/ivd",
    stats: "IVDR & FDA IVD expertise",
    desc: "Specialized regulatory consulting, performance evaluation reports (PER/PEP), and biocompatibility support for Class A–D IVDs under EU IVDR and FDA 513(f)(2) De Novo pathways.",
    tags: ["IVDR Compliance", "Performance Evaluation", "PER/PEP", "Molecular Diagnostics", "POC Devices"],
  },
  {
    title: "Software as a Medical Device (SaMD)",
    href: "/expertise/samd",
    stats: "AI/ML & digital health expertise",
    desc: "Regulatory strategy for AI/ML-based SaMD, clinical decision support (CDS), and digital therapeutics — including FDA's predetermined change control plan (PCCP) framework.",
    tags: ["AI/ML SaMD", "Clinical Decision Support", "Digital Therapeutics", "PCCP", "IEC 62304"],
  },
  {
    title: "Diabetes Care",
    href: "/expertise/diabetes-care",
    stats: "CGM to insulin delivery",
    desc: "End-to-end regulatory and clinical support for continuous glucose monitors, insulin pumps, closed-loop insulin delivery systems, and diabetes management software.",
    tags: ["CGM", "Insulin Pumps", "Closed-Loop Systems", "Diabetes SaMD"],
  },
  {
    title: "Dental",
    href: "/expertise/dental",
    stats: "Full regulatory support",
    desc: "Regulatory strategy, biocompatibility testing, and clinical support for dental implants, restorative materials, orthodontic devices, and dental diagnostic equipment.",
    tags: ["Dental Implants", "Restorative Materials", "Orthodontics", "Dental Diagnostics"],
  },
  {
    title: "General Surgery",
    href: "/expertise/general-surgery",
    stats: "Broad surgical expertise",
    desc: "Regulatory and clinical services for electrosurgical devices, laparoscopic instruments, hernia repair products, and hemostatic agents.",
    tags: ["Electrosurgery", "Laparoscopic", "Hernia Repair", "Hemostasis"],
  },
  {
    title: "Combination Products",
    href: "/expertise/combination-products",
    stats: "Drug-device & biologic-device",
    desc: "Specialized expertise in combination product regulatory strategy — including RFD submissions, CDER/CDRH jurisdiction determinations, and integrated technical documentation for drug-device and biologic-device combinations.",
    tags: ["Drug-Device", "Biologic-Device", "RFD", "Prefilled Syringes", "Autoinjectors"],
  },
  {
    title: "Oncology Devices",
    href: "/expertise/oncology",
    stats: "Breakthrough device experience",
    desc: "Regulatory and clinical support for cancer diagnostic and therapeutic devices, including Breakthrough Device Designation strategy and real-world evidence approaches.",
    tags: ["Biopsy Tools", "Ablation Devices", "Radiation Therapy", "Diagnostics", "Breakthrough Device"],
  },
];

const ExpertisePage = () => (
  <PageLayout
    heroTag="Expertise"
    heroTitle="Deep Expertise Across Every Medical Device Category"
    heroSubtitle="NKB Regovanta's specialists combine regulatory, clinical, and scientific expertise across 12+ therapeutic areas — delivering insights that only come from decades of exclusive medical device focus."
    breadcrumbs={[{ label: "Expertise" }]}
  >
    {/* Intro */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Why Therapeutic Depth Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Medical devices are not generic products — they operate in specific anatomical environments, treat specific disease states, and face specific regulatory scrutiny based on their clinical application. A regulatory strategy that works for a bandage will not work for a coronary stent.
            </p>
            <p className="text-gray-600 leading-relaxed">
              NKB Regovanta's consultants, scientists, and clinical specialists are organized by therapeutic area — meaning your cardiovascular device is reviewed by experts who understand both the regulatory requirements and the clinical reality of the cardiovascular system. This depth translates directly into stronger submissions, faster approvals, and better outcomes for patients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "12+", label: "Therapeutic Areas", sub: "Deep specialist coverage" },
              { value: "40%", label: "Cardiovascular Focus", sub: "Of total clinical portfolio" },
              { value: "1,400+", label: "Global Associates", sub: "Scientists, clinicians & RA experts" },
              { value: "55+", label: "Years of Experience", sub: "Exclusively in medical devices" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <div className="text-2xl font-black bg-gradient-to-r from-[#F5C754] to-[#C08518] bg-clip-text text-transparent">{s.value}</div>
                <div className="font-bold text-gray-900 text-sm mb-1">{s.label}</div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Therapeutic Area Grid */}
        <h2 className="text-2xl font-black text-gray-900 mb-8">Therapeutic Area Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {therapeuticAreas.map((area) => (
            <Link
              key={area.title}
              to={area.href}
              className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[hsl(195_65%_28%)] transition-colors">{area.title}</h3>
              <p className="text-xs font-semibold text-[#C08518] mb-3">{area.stats}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{area.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {area.tags.map((t) => (
                  <span key={t} className="text-xs bg-teal-50 text-[hsl(195_65%_28%)] px-2 py-0.5 rounded-full border border-teal-100">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-[hsl(195_65%_28%)] group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-[hsl(195_65%_28%)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-4">Don't See Your Therapeutic Area?</h2>
        <p className="text-white/70 mb-7 max-w-lg mx-auto">
          Our team has experience across virtually every medical device category. Contact us to discuss your specific device and therapeutic area.
        </p>
        <Button asChild className="rounded-full px-8 btn-gradient text-white border-transparent shadow-lg font-semibold">
          <Link to="/contact" className="flex items-center gap-2">Talk to a Specialist <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default ExpertisePage;
