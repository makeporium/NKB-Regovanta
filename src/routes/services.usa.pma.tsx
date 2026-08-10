import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { CTABand } from '@/components/site/Bits'

export const Route = createFileRoute('/services/usa/pma')({
  head: () => ({
    meta: [
      { title: 'Premarket Approval (PMA) | US FDA Services | NKB Regovanta' },
      { name: 'description', content: 'Explore our specialized US FDA Premarket Approval (PMA) services.' },
    ],
  }),
  component: ServicePage,
})

function ServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/brain/824d3244-b01e-4505-a26c-5a6cd125c95a/us_fda_hero_1786395342316.png')] bg-cover bg-center" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services/usa" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Premarket Approval (PMA)</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Navigate the complexities of the US FDA regulatory landscape with our comprehensive Premarket Approval (PMA) support.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Overview & Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The FDA has rigorous expectations when it comes to Premarket Approval (PMA). Our team of regulatory experts ensures that your strategy aligns perfectly with the latest guidelines, minimizing delays and mitigating compliance risks in the US market.
              </p>
              <ul className="space-y-4">
                {[
                  "Comprehensive regulatory strategy and pathway determination.",
                  "Meticulous preparation, review, and submission of all required documentation.",
                  "Ongoing liaison and communication with FDA reviewers.",
                  "Post-submission support and compliance monitoring."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="/brain/824d3244-b01e-4505-a26c-5a6cd125c95a/us_fda_compliance_1786395357791.png" alt="FDA Compliance" className="rounded-2xl shadow-lg border border-gray-100" />
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Ready to begin your FDA submission?" description="Consult our US regulatory experts" />
    </>
  )
}
