import PageLayout from "@/components/PageLayout";
import { ArrowRight, BookOpen, Video, FileText, Users, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Blog & Insights",
    desc: "Regulatory intelligence, industry trends, and expert perspectives on medical device development.",
    href: "/resources/blog",
    color: "text-teal-600 bg-teal-50",
  },
  {
    icon: FileText,
    title: "Whitepapers",
    desc: "In-depth technical and regulatory guidance documents authored by our subject matter experts.",
    href: "/resources/whitepapers",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Video,
    title: "Webinars & Training",
    desc: "On-demand and live webinar recordings covering FDA, EU MDR, ISO 13485, clinical research, and more.",
    href: "/resources/webinars",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Users,
    title: "Client Stories",
    desc: "Case studies showcasing how NKB Regovanta has helped manufacturers navigate complex regulatory challenges.",
    href: "/resources/client-stories",
    color: "text-orange-600 bg-orange-50",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    desc: "Answers to common questions about medical device regulation, testing, clinical trials, and our services.",
    href: "/resources/faqs",
    color: "text-green-600 bg-green-50",
  },
];

const featuredBlogs = [
  {
    tag: "EU MDR",
    title: "MDD to MDR Transition: A Complete Roadmap for Legacy Device Manufacturers",
    excerpt: "Understand the key differences between MDD and EU MDR, how to prioritize your technical documentation remediation, and strategies for selecting a Notified Body before the 2028 deadline.",
    date: "July 2026",
    href: "/resources/blog/mdd-to-mdr",
  },
  {
    tag: "US FDA",
    title: "Q-Sub Strategy: How to Use Pre-Submission Meetings to De-Risk Your 510(k)",
    excerpt: "Learn how to leverage FDA's Pre-Submission (Q-Sub) program to gain critical feedback on your proposed 510(k) pathway, clinical evidence strategy, and predicate selection.",
    date: "June 2026",
    href: "/resources/blog/q-sub-strategy",
  },
  {
    tag: "Quality",
    title: "MDSAP 2026: What Medical Device Manufacturers Need to Know",
    excerpt: "The Medical Device Single Audit Program (MDSAP) is now a mandatory requirement in Canada and strongly recommended in Japan. Here's what your QMS needs to address.",
    date: "May 2026",
    href: "/resources/blog/mdsap-2026",
  },
  {
    tag: "Clinical",
    title: "ISO 14155:2020 — Key Changes and What They Mean for Your Clinical Investigation",
    excerpt: "The 2020 revision of ISO 14155 introduced important changes to GCP requirements for medical device clinical investigations. Here is what sponsors need to update.",
    date: "April 2026",
    href: "/resources/blog/iso-14155",
  },
  {
    tag: "Testing",
    title: "ISO 10993-1:2018 — Navigating the Risk-Based Biocompatibility Framework",
    excerpt: "The 2018 revision of ISO 10993-1 shifted to a risk-based approach that reduced unnecessary animal testing. This guide explains how to apply it correctly to your device.",
    date: "March 2026",
    href: "/resources/blog/iso-10993-1",
  },
  {
    tag: "SaMD",
    title: "AI/ML-Based SaMD: Understanding FDA's Predetermined Change Control Plan (PCCP)",
    excerpt: "FDA's PCCP framework allows AI/ML-based medical device software to evolve post-approval without a new 510(k). Here's how to build an approvable PCCP into your submission strategy.",
    date: "February 2026",
    href: "/resources/blog/samd-pccp",
  },
];

const faqs = [
  {
    q: "What is the difference between a Q-Sub and a Pre-Sub?",
    a: "They are the same thing. 'Pre-Sub' was the older informal name; FDA formally renamed the program 'Q-Submission' (Q-Sub) in 2014. A Q-Sub is a formal written request to FDA seeking feedback before a submission, allowing manufacturers to de-risk pathway decisions, testing strategies, and clinical protocols.",
  },
  {
    q: "What is MDSAP and which countries accept it?",
    a: "The Medical Device Single Audit Program (MDSAP) is a program that allows a single regulatory audit of a medical device manufacturer's quality management system to satisfy the requirements of multiple regulatory jurisdictions. Currently accepted by: Australia (TGA), Brazil (ANVISA), Canada (Health Canada — mandatory), Japan (PMDA — accepted in lieu of JPAL audit), and the United States (FDA — accepts MDSAP audit reports).",
  },
  {
    q: "What is a STED and when is it required?",
    a: "A Summary Technical Documentation (STED) is a structured summary of the complete Technical Documentation (TD) required for EU MDR Notified Body submissions. It is required for CE Marking applications for Class IIa, IIb, and III devices. The STED format (based on the IMDRF STED guidance) is used by Notified Bodies to review device safety and performance evidence.",
  },
  {
    q: "What does a Biological Evaluation Plan (BEP) include?",
    a: "A BEP is a risk-based plan, per ISO 10993-1, that outlines the biological safety evaluation strategy for a medical device. It identifies the device materials, contact type (surface, external communicating, or implant) and duration (limited, prolonged, or permanent), and specifies which endpoints need to be addressed — either through existing data, literature review, or new testing. The BEP precedes the Biological Evaluation Report (BER).",
  },
  {
    q: "How long does a 510(k) submission typically take?",
    a: "FDA's standard review goal for a 510(k) is 90 days from the date of Acceptance (after the initial 15-day Acceptance Review). However, total timeline from submission to clearance often ranges from 3 to 12 months or more, depending on the complexity of the device, the completeness of the submission, and whether FDA issues Additional Information (AI) requests. A well-prepared Q-Sub and submission significantly reduce AI requests.",
  },
  {
    q: "What is the MDD to MDR transition deadline?",
    a: "Under EU MDR, legacy MDD certificates expired in stages. Class III and Class IIb implantables had an earlier deadline (May 2026 for devices without a valid MDR certificate), while Class IIa, IIb non-implantables, and Class I sterile/measuring devices have until December 2028. Devices with valid MDR Technical Documentation should be prioritized immediately.",
  },
];

const ResourcesPage = () => (
  <PageLayout
    heroTag="Resources"
    heroTitle="Regulatory Intelligence, Tools & Insights"
    heroSubtitle="Expert guidance, whitepapers, webinars, and regulatory updates to help medical device manufacturers navigate complex global requirements."
    breadcrumbs={[{ label: "Resources" }]}
  >
    {/* Resource Categories */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
          {resourceCategories.map((cat) => (
            <Link
              key={cat.title}
              to={cat.href}
              className="group rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mx-auto mb-4`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm group-hover:text-[hsl(195_65%_28%)] transition-colors">{cat.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>

        {/* Featured Blog Posts */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[hsl(195_65%_28%)] mb-2">Blog & Insights</p>
            <h2 className="text-2xl font-black text-gray-900">Latest Regulatory Intelligence</h2>
          </div>
          <Link to="/resources/blog" className="text-sm font-semibold text-[hsl(195_65%_28%)] flex items-center gap-1 hover:gap-2 transition-all">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {featuredBlogs.map((post) => (
            <Link
              key={post.title}
              to={post.href}
              className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="h-1.5 bg-gradient-to-r from-[#F5C754] to-[#C08518]" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest bg-teal-50 text-[hsl(195_65%_28%)] px-2.5 py-1 rounded-full">{post.tag}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[hsl(195_65%_28%)] transition-colors text-sm leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-[hsl(195_65%_28%)] mt-3 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQs */}
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[hsl(195_65%_28%)] mb-2">FAQs</p>
          <h2 className="text-2xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-100 bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-[hsl(195_65%_28%)] transition-colors list-none">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 text-[#F5C754] group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Need Personalized Regulatory Guidance?</h2>
        <p className="text-gray-500 mb-7 max-w-lg mx-auto">Our experts go beyond articles — contact us for a tailored assessment of your device's regulatory strategy.</p>
        <Button asChild className="rounded-full px-8 btn-gradient text-white border-transparent shadow-lg font-semibold">
          <Link to="/contact" className="flex items-center gap-2">Talk to an Expert <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default ResourcesPage;
