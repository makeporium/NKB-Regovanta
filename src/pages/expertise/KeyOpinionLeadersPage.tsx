import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ChevronDown } from "lucide-react";

const kols = [
  { name: "Allison J. McLarty, MD", title: "Board-Certified Thoracic Surgeon & Cardiologist - Structural Heart/Cardiac Surgery", tags: ["Cardiology", "Clinical Research"], img: "[Allison J. McLarty]" },
  { name: "Anita Asgar, MD, MSc, FRCPC, FACC, FSCAI", title: "Board-Certified Cardiologist", tags: ["Cardiology", "Clinical Research", "Principal Investigator"], img: "[Anita Asgar]" },
  { name: "Barry Bickley, MD", title: "Board-Certified Orthopaedic Surgeon | Medical Device Innovator | Founder, 62K Solutions", tags: ["Orthopedic", "Device Commercialization", "Entrepreneurship"], img: "[Barry Bickley]" },
  { name: "Brian Litt, MD", title: "Board-Certified Neurologist", tags: ["Neurology", "Clinical Research", "Academic Leadership"], img: "[Brian Litt]" },
  { name: "Brook Wharton, MD, FACOG", title: "Board-Certified OB/GYN", tags: ["Clinical Research", "Principal Investigator"], img: "[Brook Wharton]" },
  { name: "David Kay, MD", title: "Board-Certified Orthopaedic Surgeon", tags: ["Orthopedic", "Clinical Research"], img: "[David Kay]" },
  { name: "Eric Benoit, MD", title: "Board-Certified Attending Surgeon and Medical Director of the Trauma/Surgery ICU", tags: ["Clinical Research", "Hospital Leadership"], img: "[Eric Benoit]" },
  { name: "Eric Wilkinson, MD, FACS", title: "Board-Certified Otolaryngologist (ENT)", tags: ["ENT", "Clinical Research"], img: "[Eric Wilkinson]" },
  { name: "Erland Hermansen, MD, PhD", title: "Board-Certified Orthopedic Surgeon", tags: ["Orthopedic", "Clinical Research"], img: "[Erland Hermansen]" },
  { name: "Glenn Gaudette, PhD", title: "Fellow, National Academy of Inventors & AIMBE | Biomedical Engineer | Innovator", tags: ["Academic Leadership", "Device Commercialization", "Patent Writing and Publication"], img: "[Glenn Gaudette]" },
  { name: "H. Paul Hatten, Jr., MD", title: "Board-Certified Neuroradiologist", tags: ["Neurology", "Diagnostic Imaging", "Clinical Research"], img: "[H. Paul Hatten]" },
  { name: "Hugh Calkins, MD", title: "Board-Certified Cardiologist", tags: ["Cardiology", "Clinical Research"], img: "[Hugh Calkins]" },
  { name: "Jack W. Jennings, MD, PhD", title: "Board-Certified Interventional Radiologist", tags: ["Diagnostic Imaging", "Clinical Research"], img: "[Jack W. Jennings]" },
  { name: "James Thomas Kryzanski, MD", title: "Board-Certified Neurosurgeon", tags: ["Neurology", "Clinical Research"], img: "[James Thomas Kryzanski]" },
  { name: "Jeffrey Thomas Loh, MD", title: "Board-Certified Anesthesiologist and Pain Management Specialist", tags: ["Anesthesia/Respiratory", "Clinical Research"], img: "[Jeffrey Thomas Loh]" },
  { name: "John Pigott, MD", title: "Board-Certified Vascular Surgeon", tags: ["Vascular", "Clinical Research"], img: "[John Pigott]" }
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

const KeyOpinionLeadersPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {/* Header */}
        <section className="bg-[hsl(195_65%_20%)] py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-black">Meet our Key Opinion Leaders</h1>
          </div>
        </section>

        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Search */}
            <div className="relative max-w-xl mx-auto mb-12">
              <input 
                type="text" 
                placeholder="Search KOLs..." 
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F5C754] focus:border-transparent text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 btn-gradient font-bold">Search</Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-200 h-fit">
                <h3 className="font-black text-xl text-[hsl(195_65%_20%)] mb-6">Filter By</h3>
                
                <FilterGroup title="Therapeutic Areas" items={["Aesthetic", "Anesthesia/Respiratory", "Cardiology", "Diabetes Care", "Diagnostic Imaging", "Drug Delivery", "Endoscopy", "ENT", "Nephrology/Urology", "Neurology", "Oncology", "Ophthalmic", "Orthopedic", "Patient Monitoring", "Vascular", "Wound Care"]} />
                <FilterGroup title="Specialized Expertise" items={["Academic Leadership", "Clinical Research", "Device Commercialization", "Entrepreneurship", "Hospital Leadership", "Investment", "Patent Writing and Publication", "Principal Investigator"]} />
              </div>

              {/* Results Grid */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-6">
                  {kols.map((expert, idx) => (
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

export default KeyOpinionLeadersPage;
