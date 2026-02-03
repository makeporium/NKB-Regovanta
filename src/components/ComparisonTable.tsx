import { CheckCircle2 } from "lucide-react";

const ComparisonTable = () => {
  const services = [
    {
      area: "Device Classification",
      usa: "Class I, II, III",
      eu: "Class I, IIa, IIb, III",
      india: "Class A, B, C, D",
    },
    {
      area: "Regulatory Strategy",
      usa: "Pathway & predicate analysis",
      eu: "MDR transition & NB strategy",
      india: "Central vs State licensing",
    },
    {
      area: "Manufacturing License",
      usa: "QSR compliance (21 CFR 820)",
      eu: "ISO 13485 + NB audits",
      india: "SLA (A/B) & CDSCO (C/D)",
    },
    {
      area: "Import License",
      usa: "FDA registration & listing",
      eu: "Authorized Rep & CE Mark",
      india: "CDSCO Import (MD-14/15)",
    },
    {
      area: "Technical Documentation",
      usa: "510(k), PMA, De Novo",
      eu: "Technical File / Design Dossier",
      india: "DMF & SMF (Schedule IV)",
    },
    {
      area: "Quality Management",
      usa: "FDA QSR",
      eu: "ISO 13485:2016",
      india: "ISO 13485 + MDR 2017",
    },
    {
      area: "Clinical Requirements",
      usa: "IDE & clinical data",
      eu: "CER, PMCF",
      india: "Clinical investigation",
    },
    {
      area: "Post-Market Surveillance",
      usa: "MDR, recalls, 483",
      eu: "PMS, PSUR, Vigilance",
      india: "MvPI, FSCA, recalls",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[hsl(195_65%_25%)] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white font-semibold text-sm mb-4">
            Global Coverage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Regulatory Services <span className="text-amber-400">Comparison</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Compare our comprehensive regulatory services across the US, EU, and India markets.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 md:p-4 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-500 text-gray-900">
                  <th className="text-left p-4 md:p-5 font-bold rounded-tl-2xl min-w-[180px]">Regulatory Area</th>
                  <th className="text-left p-4 md:p-5 font-bold min-w-[200px]">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇺🇸</span>
                      US FDA
                    </div>
                  </th>
                  <th className="text-left p-4 md:p-5 font-bold min-w-[200px]">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇪🇺</span>
                      EU MDR
                    </div>
                  </th>
                  <th className="text-left p-4 md:p-5 font-bold rounded-tr-2xl min-w-[200px]">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇮🇳</span>
                      India CDSCO
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={service.area}
                    className={`border-b border-white/10 hover:bg-white/5 transition-colors ${
                      index === services.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    <td className="p-4 md:p-5 font-semibold text-white">{service.area}</td>
                    <td className="p-4 md:p-5 text-sm text-white/90">{service.usa}</td>
                    <td className="p-4 md:p-5 text-sm text-white/90">{service.eu}</td>
                    <td className="p-4 md:p-5 text-sm text-white/90">{service.india}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500 text-gray-900">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-bold">Full Service Available Across All Regions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
