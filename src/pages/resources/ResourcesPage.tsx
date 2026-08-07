import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, Filter, FileText } from "lucide-react";

const allResources = [
  { title: "Insights Report: Unlocking Successful Partnerships with Hospital Administrators", type: "Insights Report", img: "[Top view of professionals in white coats]" },
  { title: "Insights Report: Maximizing Tender Success in Medical Capital Equipment", type: "Insights Report", img: "[Clinical researcher reviewing data]" },
  { title: "Insights Report: Hospital Purchasing Behavior and Procurement Trends of 2025", type: "Insights Report", img: "[Placeholder Image]" },
  { title: "White Paper: Toxicological Risk Assessment of Medical Devices", type: "White Paper", img: "[Two people discuss charts]" },
  { title: "Insights Report: Patient Empowerment in Medical Device Treatment Decisions", type: "Insights Report", img: "[Placeholder Image]" },
  { title: "White Paper: Outsource Your Way to Operational Excellence", type: "White Paper", img: "[Placeholder Image]" },
  { title: "White Paper: Navigating Dual Regulations: Strategies for IVD Market Approval in China and the EU", type: "White Paper", img: "[Placeholder Image]" },
  { title: "White Paper: The FDA’s Draft Guidance on AI- and ML-Enabled Device Software Functions", type: "White Paper", img: "[Placeholder Image]" },
  { title: "White Paper: The Relationship Between Risk Management and Labeling", type: "White Paper", img: "[Placeholder Image]" },
  { title: "NKB Regovanta Brochure Japanese", type: "Brochure", img: "[Placeholder Image]" },
  { title: "NKB Regovanta Brochure", type: "Brochure", img: "[Placeholder Image]" },
  { title: "NKB Regovanta Start-Up 360: Accelerating IVD Product Development", type: "Brochure", img: "[Placeholder Image]" },
  { title: "White Paper: Medical Device Biological Evaluation Reports: Relevance to ISO 10993-Part 1: 2018", type: "White Paper", img: "[Placeholder Image]" },
  { title: "Clinical Research Services Brochure", type: "Brochure", img: "[Placeholder Image]" },
  { title: "White Paper: Particulates in Preclinical Testing: Understanding the Impact on Overall Device Biological Safety", type: "White Paper", img: "[Placeholder Image]" },
  { title: "White Paper: Medical Device Reimbursement Strategy: How to Plan for Successful Market Commercialization", type: "White Paper", img: "[Placeholder Image]" }
];

const FilterGroup = ({ title, items, activeItem, setActiveItem }: { title: string, items: string[], activeItem: string, setActiveItem: (v: string) => void }) => (
  <div className="mb-6">
    <h4 className="text-lg font-bold text-[#005a8c] mb-2">{title}</h4>
    <div className="relative">
      <select 
        value={activeItem} 
        onChange={(e) => setActiveItem(e.target.value)}
        className="w-full py-3 pl-4 pr-10 rounded-full border border-blue-200 text-gray-700 bg-gray-50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 appearance-none shadow-sm cursor-pointer"
      >
        <option value="All">- Select {title} -</option>
        {items.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  </div>
);

const ResourcesPage = () => {
  const location = useLocation();
  const [activeType, setActiveType] = useState("All");

  // Determine active filter based on URL route
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("whitepapers")) setActiveType("Whitepapers");
    else if (path.includes("blog")) setActiveType("Blog");
    else if (path.includes("podcasts-and-videos")) setActiveType("Video");
    else if (path.includes("recorded-webinars")) setActiveType("On-Demand Webinars");
    else if (path.includes("news")) setActiveType("Press Release");
    else setActiveType("All");
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {/* Header */}
        <section className="bg-[hsl(195_65%_20%)] py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-black">Resource Library</h1>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-7xl">
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-200 h-fit sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-black text-xl text-[hsl(195_65%_20%)] flex items-center gap-2">
                    <Filter className="w-5 h-5" /> Filters
                  </h3>
                  <button onClick={() => setActiveType("All")} className="text-xs text-[#F5C754] font-bold uppercase hover:underline">Reset all</button>
                </div>
                
                <FilterGroup 
                  title="Content Type" 
                  items={["Audio", "Blog", "On-Demand Webinars", "Press Release", "Video", "Whitepapers"]} 
                  activeItem={activeType}
                  setActiveItem={setActiveType}
                />
                <FilterGroup 
                  title="Topics" 
                  items={["Medical Device Testing", "Risk Management", "Standards & Guidance"]} 
                  activeItem="All"
                  setActiveItem={() => {}}
                />
              </div>

              {/* Results Grid */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-xl font-bold text-[hsl(195_65%_20%)]">
                    {activeType === "All" ? "All Resources" : activeType}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {allResources.map((resource, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                      {/* Image Area */}
                      <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[hsl(195_65%_20%)] opacity-5 group-hover:opacity-10 transition-opacity" />
                        {resource.img}
                        <div className="absolute top-4 left-4 bg-[#F5C754] text-[hsl(195_65%_20%)] text-[10px] font-black px-2 py-1 uppercase tracking-widest rounded-sm">
                          {resource.type}
                        </div>
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-[hsl(195_65%_20%)] group-hover:text-[#F5C754] transition-colors line-clamp-3 leading-snug">
                            {resource.title}
                          </h3>
                        </div>
                        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                           <Link to="#" className="text-xs font-bold text-[#F5C754] uppercase tracking-wider hover:underline flex items-center gap-1">
                             <FileText className="w-3 h-3" /> View
                           </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination (Mock) */}
                <div className="flex justify-center items-center gap-2 mt-12">
                  {["1", "2", "»"].map(page => (
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

export default ResourcesPage;
