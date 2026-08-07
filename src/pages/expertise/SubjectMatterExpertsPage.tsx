import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ChevronDown } from "lucide-react";

const experts = [
  { name: "Adam E. Saltman, MD, PhD", title: "Chief Medical Officer", tags: ["Cardiology", "Medical Writing", "Software", "US FDA", "Vascular", "Worked for US FDA"], img: "[Adam E. Saltman]" },
  { name: "Adam Kopel", title: "Assistant Interventionalist", tags: ["Cardiology", "Preclinical", "Software", "Vascular"], img: "[Adam Kopel]" },
  { name: "Adrian Keene", title: "Associate VP, Global Biological Safety", tags: ["Biological Safety", "Cardiology", "EU IVDR/MDR", "Medical Writing", "Neurology", "Orthopedics", "Vascular", "Worked for Notified Body", "Wound Care"], img: "[Adrian Keene]" },
  { name: "Áine Mary Duffy, BSc (Hons), PhD", title: "Associate Director, Clinical Strategy", tags: ["Medical Writing", "Neurology", "US FDA", "Vascular"], img: "[Áine Mary Duffy]" },
  { name: "Alexander Hermann, PhD", title: "Manager, Technical Study Management", tags: ["Biological Safety", "Cardiology", "Chemical Characterization", "Neurology", "Ophthalmology", "Orthopedics", "Software", "US FDA", "Vascular", "Wound Care"], img: "[Alexander Hermann]" },
  { name: "Alfred Dibao-Dina, PhD, DABT, ERT", title: "Biological Safety Scientist", tags: ["Biocompatibility", "Biological Safety", "Cardiology", "Chemical Characterization", "Neurology", "Ophthalmology", "Orthopedics", "Software", "Toxicology", "Vascular", "Wound Care"], img: "[Alfred Dibao-Dina]" },
  { name: "Amanda Slavsky, CCRP", title: "Associate Manager, Clinical Study Management", tags: ["Neurology", "Ophthalmology", "Trial Management", "Vascular"], img: "[Amanda Slavsky]" },
  { name: "Andy J. Wyen, MS, DABT, LAT", title: "Principal Toxicologist", tags: ["Biocompatibility", "Biological Safety", "Cardiology", "Chemical Characterization", "EU IVDR/MDR", "Neurology", "Ophthalmology", "Orthopedics", "Software", "Toxicology", "US FDA", "Vascular", "Wound Care"], img: "[Andy J. Wyen]" },
  { name: "Angela Sanchez", title: "Associate Scientific Director, Analytical Services", tags: ["Cardiology", "Chemical Characterization", "EU IVDR/MDR", "Orthopedics", "US FDA", "Wound Care"], img: "[Angela Sanchez]" },
  { name: "Aurélie San Juan, MSc, PhD", title: "Principal Medical Writer, Regulatory", tags: ["EU IVDR/MDR", "Medical Writing", "Ophthalmology", "Orthopedics", "Vascular"], img: "[Aurélie San Juan]" },
  { name: "Barb Mercier", title: "Manager, Clinical Research Associates", tags: ["Cardiology", "Data Management", "Imaging Core Lab", "Neurology", "Orthopedics", "Trial Management", "Vascular", "Wound Care"], img: "[Barb Mercier]" },
  { name: "Brett J. Peterson, MS", title: "Senior Principal Biostatistician", tags: ["Biostatistics", "Cardiology", "Medical Writing", "Neurology", "Ophthalmology", "Orthopedics", "Vascular", "Wound Care"], img: "[Brett J. Peterson]" },
  { name: "Candace McClure, PhD", title: "Senior Principal Biostatistician", tags: ["Biostatistics", "Cardiology", "In Vitro Diagnostics", "Neurology", "US FDA", "Vascular"], img: "[Candace McClure]" },
  { name: "Carla M. Wiese, BS-Mech Eng", title: "Principal Strategy Consultant, Regulatory", tags: ["Cardiology", "Neurology", "Ophthalmology", "US FDA", "Vascular", "Worked for US FDA"], img: "[Carla Wiese]" },
  { name: "Caroline Guidicelli, MSc, MEng", title: "Principal Medical Writer", tags: ["EU IVDR/MDR", "Medical Writing", "Orthopedics", "Software", "Vascular"], img: "[Caroline Guidicelli]" },
];

const FilterGroup = ({ title, items }: { title: string, items: string[] }) => (
  <div className="mb-6 border-b border-gray-200 pb-4">
    <button className="flex items-center justify-between w-full text-left font-bold text-[hsl(195_65%_20%)] mb-3">
      {title} <ChevronDown className="w-4 h-4" />
    </button>
    <div className="space-y-2">
      {items.map(item => (
        <label key={item} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[hsl(195_65%_20%)] cursor-pointer">
          <input type="checkbox" className="rounded border-gray-300 text-[#F5C754] focus:ring-[#F5C754]" />
          {item}
        </label>
      ))}
    </div>
  </div>
);

const SubjectMatterExpertsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {/* Header */}
        <section className="bg-[hsl(195_65%_20%)] py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-black">Meet our Subject Matter Experts</h1>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Search */}
            <div className="relative max-w-xl mx-auto mb-12">
              <input 
                type="text" 
                placeholder="Search SMEs..." 
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F5C754] focus:border-transparent text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 btn-gradient font-bold">Search</Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-200 h-fit">
                <h3 className="font-black text-xl text-[hsl(195_65%_20%)] mb-6">Filter By</h3>
                
                <FilterGroup title="Consulting" items={["Biological Safety", "EU IVDR/MDR", "US FDA"]} />
                <FilterGroup title="Clinical" items={["Biostatistics", "Data Management", "Imaging Core Lab", "Medical Writing", "Safety Management and Reporting", "Trial Management"]} />
                <FilterGroup title="Testing" items={["Preclinical", "Biocompatibility", "Chemical Characterization", "Toxicology", "Microbiology"]} />
                <FilterGroup title="Device Expertise" items={["Cardiology", "In Vitro Diagnostics", "Neurology", "Ophthalmology", "Orthopedics", "Software", "Vascular", "Wound Care"]} />
                <FilterGroup title="Specialized Experience" items={["Worked for Notified Body", "Worked for US FDA"]} />
              </div>

              {/* Results Grid */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {experts.map((expert, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                      <div className="p-6 flex gap-4 items-start border-b border-gray-100">
                        <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden shrink-0 text-[10px] text-gray-400 text-center leading-tight">
                          {expert.img}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[hsl(195_65%_20%)] group-hover:text-[#F5C754] transition-colors">{expert.name}</h3>
                          <p className="text-sm text-gray-600 font-medium mb-2">{expert.title}</p>
                          <Link to="#" className="text-xs font-bold text-[#F5C754] uppercase tracking-wider hover:underline">View Bio &rarr;</Link>
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {expert.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 bg-white border border-gray-200 text-xs font-medium text-gray-600 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination (Mock) */}
                <div className="flex justify-center items-center gap-2 mt-12">
                  {["1", "2", "3", "4", "5", "6", "»"].map(page => (
                    <button key={page} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${page === "1" ? 'bg-[#F5C754] text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SubjectMatterExpertsPage;
