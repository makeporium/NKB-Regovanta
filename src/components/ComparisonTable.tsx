import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: "Global Regulatory Expertise",
      namsa: true,
      traditional: false,
    },
    {
      feature: "In-House Preclinical Labs",
      namsa: true,
      traditional: false,
    },
    {
      feature: "Integrated Clinical & Regulatory Strategy",
      namsa: true,
      traditional: false,
    },
    {
      feature: "Dedicated Medical Device Focus",
      namsa: true,
      traditional: true,
    },
    {
      feature: "Start-Up Tailored Programs",
      namsa: true,
      traditional: false,
    },
    {
      feature: "Fractional Executive Advisory",
      namsa: true,
      traditional: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[hsl(195_65%_20%)]/5 text-[hsl(195_65%_20%)] font-bold text-xs uppercase tracking-widest mb-4">
            The NKB Regovanta Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            Why Choose a Full-Service CRO?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our integrated approach across testing, clinical trials, and regulatory consulting provides unmatched value.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-[hsl(195_65%_20%)] text-white">
            <div className="p-6 font-bold text-lg flex items-center">
              Capabilities
            </div>
            <div className="p-6 text-center border-l border-white/10 bg-[#F5C754] text-[hsl(195_65%_20%)]">
              <span className="block text-2xl font-black">NKB Regovanta</span>
              <span className="text-xs font-bold uppercase tracking-wider opacity-80">Full-Service CRO</span>
            </div>
            <div className="p-6 text-center border-l border-white/10">
              <span className="block text-xl font-bold">Traditional</span>
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Consultants</span>
            </div>
          </div>

          {/* Data Rows */}
          <div className="divide-y divide-gray-100">
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 transition-colors hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
              >
                <div className="p-6 flex items-center text-sm font-bold text-gray-700">
                  {row.feature}
                </div>
                
                {/* NKB Regovanta Column */}
                <div className="p-6 flex items-center justify-center border-l border-gray-100 bg-[#F5C754]/5">
                  {row.namsa ? (
                    <div className="w-8 h-8 rounded-full bg-[#F5C754] text-[hsl(195_65%_20%)] flex items-center justify-center shadow-sm">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                      <X className="w-5 h-5" />
                    </div>
                  )}
                </div>

                {/* Traditional Column */}
                <div className="p-6 flex items-center justify-center border-l border-gray-100">
                  {row.traditional ? (
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">
                      <Check className="w-5 h-5 stroke-[2]" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center">
                      <X className="w-5 h-5 stroke-[2]" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Footer Area */}
          <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
            <p className="text-sm font-bold text-[hsl(195_65%_20%)]">
              Partner with the industry leader to accelerate your time to market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
