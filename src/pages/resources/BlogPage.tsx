import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const posts = [
  { tag: "EU MDR", title: "MDD to MDR Transition: A Complete Roadmap for Legacy Device Manufacturers", date: "July 2026", href: "/resources/blog/mdd-to-mdr", excerpt: "Understand the key differences between MDD and EU MDR, how to prioritize your technical documentation remediation, and strategies for selecting a Notified Body before the 2028 deadline." },
  { tag: "US FDA", title: "Q-Sub Strategy: How to Use Pre-Submission Meetings to De-Risk Your 510(k)", date: "June 2026", href: "/resources/blog/q-sub", excerpt: "Learn how to leverage FDA's Pre-Submission (Q-Sub) program to gain critical feedback on your regulatory pathway, clinical evidence strategy, and predicate selection." },
  { tag: "Quality", title: "MDSAP 2026: What Medical Device Manufacturers Need to Know", date: "May 2026", href: "/resources/blog/mdsap", excerpt: "The Medical Device Single Audit Program (MDSAP) is now mandatory in Canada and recommended in Japan. Here's what your QMS needs to address for each participating country." },
  { tag: "Clinical", title: "ISO 14155:2020 — Key Changes and What They Mean for Your Clinical Investigation", date: "April 2026", href: "/resources/blog/iso-14155", excerpt: "The 2020 revision of ISO 14155 introduced important changes to GCP requirements for medical device clinical investigations. Here is what sponsors need to update immediately." },
  { tag: "Testing", title: "ISO 10993-1:2018 — Navigating the Risk-Based Biocompatibility Framework", date: "March 2026", href: "/resources/blog/iso-10993", excerpt: "The 2018 revision of ISO 10993-1 shifted to a risk-based approach that reduced unnecessary animal testing. This guide explains how to apply it correctly to your device." },
  { tag: "SaMD", title: "AI/ML-Based SaMD: Understanding FDA's Predetermined Change Control Plan (PCCP)", date: "February 2026", href: "/resources/blog/samd-pccp", excerpt: "FDA's PCCP framework allows AI/ML-based medical device software to evolve post-approval without a new 510(k). Here's how to build an approvable PCCP." },
  { tag: "EU MDR", title: "Notified Body Selection: How to Choose the Right NB for Your Device", date: "January 2026", href: "/resources/blog/notified-body-selection", excerpt: "With limited Notified Body capacity under EU MDR, choosing the right NB is a strategic decision. This guide covers scope, timelines, fees, and key factors for selection." },
  { tag: "Quality", title: "ISO 14971:2019 Risk Management — Key Changes from the 2007 Version", date: "December 2025", href: "/resources/blog/iso-14971", excerpt: "The 2019 update to ISO 14971 brought significant terminology and process changes. We explain what's new and how to update your risk management file accordingly." },
  { tag: "Preclinical", title: "Early Feasibility Studies Under FDA's EFS Program: What You Need to Know", date: "November 2025", href: "/resources/blog/early-feasibility", excerpt: "FDA's Early Feasibility Study (EFS) program provides an expedited IDE pathway for novel devices. Here's how to leverage it to gather early clinical insights while minimizing risk." },
];

const BlogPage = () => (
  <PageLayout
    heroTag="Blog & Insights"
    heroTitle="Regulatory Intelligence for Medical Device Manufacturers"
    heroSubtitle="Expert perspectives, regulatory updates, and practical guidance from NKB Regovanta's team of former FDA reviewers, Notified Body auditors, and clinical specialists."
    breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Blog & Insights" }]}
  >
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", "EU MDR", "US FDA", "Quality", "Clinical", "Testing", "SaMD", "Preclinical"].map((tag) => (
            <button
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm border border-gray-200 text-gray-600 hover:border-[hsl(195_65%_28%)] hover:text-[hsl(195_65%_28%)] hover:bg-teal-50 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              to={post.href}
              className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="h-1.5 bg-gradient-to-r from-[#F5C754] to-[#C08518]" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest bg-teal-50 text-[hsl(195_65%_28%)] px-2.5 py-1 rounded-full">{post.tag}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[hsl(195_65%_28%)] transition-colors leading-snug">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-[hsl(195_65%_28%)] group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Subscribe CTA */}
    <section className="py-14 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Never Miss a Regulatory Update</h2>
        <p className="text-gray-500 mb-7 max-w-md mx-auto text-sm">Subscribe to our newsletter for the latest FDA, EU MDR, and global MedTech regulatory intelligence — delivered monthly.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-11 px-4 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-[hsl(195_65%_28%)]"
          />
          <Button className="rounded-full px-6 btn-gradient text-white border-transparent font-semibold whitespace-nowrap">
            Subscribe <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default BlogPage;
