import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const ServicePageLayout = ({
  breadcrumb,
  heroTitle,
  heroSubtitle,
  stats,
  children,
}: {
  breadcrumb: string;
  heroTitle: string;
  heroSubtitle: string;
  stats?: { value: string; label: string }[];
  children: React.ReactNode;
}) => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">
            — &nbsp;&nbsp;{breadcrumb}&nbsp;&nbsp; —
          </p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            {heroTitle}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">{heroSubtitle}</p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
        {stats && (
          <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <p className="text-3xl font-black text-[#F5C754]">{s.value}</p>
                <p className="text-xs text-white/70 uppercase tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <div className="bg-white">{children}</div>
    </main>
    <Footer />
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

// ==========================================
// PRODUCT DEVELOPMENT STRATEGY PAGE
// ==========================================
export const ProductDevelopmentStrategyPage = () => (
  <ServicePageLayout
    breadcrumb="Product Development Strategy"
    heroTitle="MEDICAL DEVICE PRODUCT DEVELOPMENT CONSULTING AND STRATEGY"
    heroSubtitle="EQUIPPING YOU WITH PROVEN MEDICAL DEVICE PRODUCT DEVELOPMENT STRATEGIES TO GET AHEAD OF THE COMPETITION."
    stats={[
      { value: "40+", label: "Years at Regulatory Bodies and Agencies" },
      { value: "400+", label: "Years of Industry Experience" },
      { value: "100+", label: "Annual FDA Pre-Submission Meetings Managed" },
      { value: "10+", label: "Annual Marketing Application Submissions Managed" },
    ]}
  >
    <div className="container mx-auto px-4 max-w-5xl py-16">
      <Section title="Medical Device Product Development Consulting Services">
        <p>Whether you're seeking support for the expansion of an existing line or creating something brand new, NKB Regovanta has the expertise to equip you with the medical device product development resources you need, when you need them.</p>
        <p>From concept to post-market, NKB Regovanta provides medtech and medical device product development consulting to assist clients with any new development challenge, therapeutic area, reimbursement issue or regulatory environment.</p>
        <p>The Product Development Strategy (PDS) Team — comprised of cross-functional scientists and regulatory, clinical and medical device development experts who can support a multitude of medical devices, In Vitro Diagnostic (IVD) or software as a medical device (SaMD) — provides manufacturers a "next steps" strategy within any stage of the development continuum.</p>
      </Section>

      <Section title="Are You Facing These Challenges?">
        <ul className="list-none space-y-2">
          {[
            "A start-up firm with limited resources and funds?",
            "Unable to leverage the knowledge your team gains on preclinical studies to apply to your overall strategy?",
            "Concerned with the time required to hire and train staff, but need the expertise today?",
            "Looking for ways to reduce total development timelines and costs, and lessen burn rates prior to commercialization?",
          ].map((q) => (
            <li key={q} className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
              <span>{q}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">Serving as an extension of your internal team, our medical device product development experts understand how to align all stakeholders to proactively address development barriers and reduce risks. They serve as a guiding authority on how to most efficiently navigate intended global markets to safely and efficiently get to market while saving you time and money.</p>
      </Section>

      <Section title="Services Overview">
        <p>NKB Regovanta has formed an extensive, dedicated cross-functional team of product development experts to lead clients through their path to commercialization for their medical device. Our highly knowledgeable, experienced team offers deep and specialized knowledge on important topics related to the development and commercialization of medical devices and medtech products.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {["Biological Safety and Validation", "Clinical Research", "Medical Writing and Scientific Communications", "Preclinical Testing", "Regulatory", "Reimbursement Market Access", "Quality", "Product Development Get-to-Market Strategy"].map((s) => (
            <div key={s} className="bg-gray-50 rounded-lg p-4 text-center text-sm font-medium text-[hsl(195_65%_20%)] border border-gray-100">{s}</div>
          ))}
        </div>
      </Section>

      <Section title="Product Development Get-to-Market Strategy">
        <p>NKB Regovanta's Get-to-Market Strategy provides a strategic assessment and summary of required activities pertaining to regulatory, preclinical, clinical research, reimbursement and scientific communications to achieve approval for a specific product and therapeutic area.</p>
        <p>Our strategic experts are aligned to each client's therapeutic, regulatory and geographic areas of focus, closely collaborating with all stakeholders to provide a detailed, actionable, achievable Get-to-Market Plan that integrates the key pillars of medical device commercialization pathways.</p>
      </Section>

      <Section title="Due Diligence">
        <p>NKB Regovanta's Due Diligence service provides a comprehensive evaluation and analysis of the regulatory, quality, preclinical, clinical, reimbursement and scientific aspects of a medical device product or company.</p>
        <p>On behalf of venture capital or other investors, our experts conduct a thorough review of the available data, documents, processes and systems to identify potential risks, gaps, opportunities and recommendations for improvement.</p>
        <p>Whether you are looking to acquire, invest in, partner with or sell a medical device product or company, our Due Diligence service can help you make informed decisions and optimize your outcomes.</p>
      </Section>

      <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
        <h2 className="text-2xl font-black mb-4">Ready to Accelerate Your Path to Market?</h2>
        <p className="text-white/70 mb-6">Let NKB Regovanta's medical device development experts guide you in the right direction.</p>
        <Button asChild className="btn-gradient rounded-full px-8 py-3 font-bold">
          <Link to="/locations-contact">Contact Us Today</Link>
        </Button>
      </div>
    </div>
  </ServicePageLayout>
);

// ==========================================
// MEDICAL DEVICE TESTING PAGE
// ==========================================
export const MedicalDeviceTestingPage = () => (
  <ServicePageLayout
    breadcrumb="Medical Device Testing"
    heroTitle="NKB Regovanta IS THE GLOBAL MARKETPLACE LEADER FOR RELIABLE, PROVEN MEDICAL DEVICE TESTING SERVICES"
    heroSubtitle="Learn the benefits of working with the pioneer of the medical device testing industry today."
    stats={[
      { value: "100,000+", label: "Tests Performed Annually" },
      { value: "7", label: "Global Laboratory Locations" },
      { value: "55+", label: "Years of Experience" },
    ]}
  >
    <div className="container mx-auto px-4 max-w-5xl py-16">
      <Section title="How NKB Regovanta Pioneered the Medical Device Testing Services Industry">
        <p>Established in 1967, NKB Regovanta is the pioneer of the medical device testing industry and continues to serve as the global marketplace leader for reliable, proven medical device testing services. On an annual basis, our teams conduct over 100,000 tests across our state-of-the-art laboratories across the globe.</p>
        <p>We take pride in managing all medical device testing services in-house, unlike other CROs, to ensure direct oversight of test articles and to provide consistent results which are highly recognized and accepted by global regulatory authorities.</p>
        <p>Offering the right personalized suite of medical device testing services from the start translates into resource savings throughout the development continuum, allowing manufacturers to accelerate market introduction and cost-effectively bring life-improving therapies to those that need them most.</p>
        <p>Beyond our team's vast experience in medical device testing services, we're also prepared to help navigate the regulatory obstacles prevalent throughout the process, with many employees who have worked for regulatory agencies.</p>
      </Section>

      <Section title="Medical Device Testing Services">
        {[
          {
            title: "Biocompatibility of Medical Devices",
            body: "The biocompatibility of medical devices, directed by ISO 10993-1, is a critical part of the medical device risk management process. Commonly referred to as biological safety, this evaluation of risk consists of the biocompatibility component, but also multiple other mechanisms that work together to accurately predict medical device biocompatibility based on individual materials and use.",
          },
          {
            title: "Biocompatibility Testing",
            body: "NKB Regovanta's tests for biocompatibility are conducted on a wide range of biomaterials, medical devices and other products to ensure safety from toxins or other harmful effects. Tests include initial screenings to product release testing, along with non-clinical safety evaluations that are compliant with current global standards.",
          },
          {
            title: "Biological Safety",
            body: "A wide range of medical devices are introduced almost daily in today's global marketplace, which is often marked with the challenge of adhering to the industry's constantly-changing international standards and guidelines. At NKB Regovanta, we offer a range of biological safety solutions to ensure your medical device development program is compliant.",
          },
          {
            title: "Chemical Characterization and Analytical Chemistry",
            body: "NKB Regovanta, drawing from its 50+ year history of offering reliable chemical characterization and analytical chemistry solutions to clients, provides an extensive range of testing services to help secure product safety, quality and consistency during all stages of development.",
          },
          {
            title: "Histopathology",
            body: "NKB Regovanta provides best-in-class histological technology for the testing and evaluation of implanted medical devices. Valuable tissues are collected and processed on-site and under the supervision of a Board Certified Pathologist; histopathology laboratory services are also provided.",
          },
        ].map((s) => (
          <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-[hsl(195_65%_20%)] mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.body}</p>
          </div>
        ))}
      </Section>

      <Section title="Chemical Characterization Capabilities">
        <p>NKB Regovanta's processes are the most trusted in industry and help to efficiently define device components and enable assessment of reproducibility in manufacturing and processing. Some of our capabilities include:</p>
        <ul className="grid grid-cols-2 gap-2 mt-4">
          {["CFR Monograph Testing", "Durometer Analysis", "Differential Scanning Calorimetry (DSC)", "Fourier Transform Infrared Spectroscopy (FTIR)", "Gas Chromatography-Mass Spectroscopy", "Inductively Coupled-Plasma Optical Emission Spectroscopy", "Liquid Chromatography-UV/VIS Spectroscopy", "Total Organic Carbon (TOC)", "United States Pharmacopeia Testing", "Osmolality Analysis"].map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm">
              <ArrowRight className="w-3.5 h-3.5 text-[#F5C754] mt-0.5 shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
        <h2 className="text-2xl font-black mb-4">Ready to Begin Your Testing Program?</h2>
        <p className="text-white/70 mb-6">Contact NKB Regovanta today to discuss your medical device testing needs.</p>
        <Button asChild className="btn-gradient rounded-full px-8 py-3 font-bold">
          <Link to="/locations-contact">Get a Quote</Link>
        </Button>
      </div>
    </div>
  </ServicePageLayout>
);

export default ProductDevelopmentStrategyPage;
