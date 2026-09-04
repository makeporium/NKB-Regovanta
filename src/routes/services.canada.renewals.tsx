import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { CTABand } from '@/components/site/Bits'

export const Route = createFileRoute('/services/canada/renewals')({
  head: () => ({
    meta: [
      { title: 'License Maintenance & Renewals | Canada Services | NKB Regovanta' },
      { name: 'description', content: 'Explore our specialized Canada License Maintenance & Renewals services for medical devices and IVDs.' },
      { name: "keywords", content: "License Maintenance & Renewals, Canada Services, services canada renewals, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "License Maintenance & Renewals | Canada Services | NKB Regovanta" },
      { property: "og:description", content: "Health Canada Medical Device Licence (MDL) renewal consulting. Annual renewal filing, Class II–IV device licence maintenance, establishment licence renewal, MDSAP audit equivalence documentation, and regulatory compli..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/canada/renewals" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "License Maintenance & Renewals | Canada Services | NKB Regovanta" },
      { name: "twitter:description", content: "Health Canada Medical Device Licence (MDL) renewal consulting. Annual renewal filing, Class II–IV device licence maintenance, establishment licence renewal, MDSAP audit equivalence documentation, and regulatory compli..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/renewals" },
  ],
  }),
  component: ServicePage,
})

function ServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/brain/canada_hero_1786397409496.png')] bg-cover bg-center" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services/canada" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to Canada Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">License Maintenance & Renewals</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Navigate the complexities of the Canada regulatory landscape with our comprehensive License Maintenance & Renewals support.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Overview & Compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The regulatory authority in Canada maintains strict requirements for License Maintenance & Renewals. Our team of regulatory experts ensures that your strategy aligns perfectly with the latest guidelines, minimizing delays and mitigating compliance risks in the Canada market.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive regulatory strategy and pathway determination.",
                  "Meticulous preparation, review, and submission of all required documentation.",
                  "Ongoing liaison and communication with the regulatory agency.",
                  "Post-submission support and proactive compliance monitoring."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="/assets/brain/canada_compliance_1786397418101.png" alt="Canada Compliance" className="rounded-2xl shadow-lg border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Ready to secure your approval?" description="Consult our Canada regulatory experts" />
    </>
  )
}
