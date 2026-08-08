import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, X, ChevronDown } from "lucide-react";

type Expert = {
  name: string;
  title: string;
  tags: string[];
  img: string;
  bio: string;
};

const experts: Expert[] = [
  {
    name: "Miss. Usha S.",
    title: "Chief Executive Officer",
    tags: ["Executive Leadership", "Strategic Direction", "Operations"],
    img: "/usha.png",
    bio: "As Chief Executive Officer, Miss. Usha S. leads the organization's strategic direction, business operations, and growth initiatives. She works closely with healthcare, regulatory, and technical experts to strengthen the company's capabilities and support the delivery of high-quality services to clients. Her focus on operational excellence, strong client partnerships, and sustainable growth helps drive the organization's continued development within the healthcare sector.",
  },
  {
    name: "Saurav Gupta",
    title: "Chief Operating Officer",
    tags: ["Executive Leadership", "Operations", "Process Management"],
    img: "/saurav.png",
    bio: "As Chief Operating Officer, Saurav Gupta oversees the day-to-day operational activities of NKB Regovanta Solutions. He is responsible for streamlining internal processes, managing cross-functional teams, and ensuring service delivery meets the highest quality standards. With a strong focus on efficiency, scalability, and organizational alignment, Saurav plays a pivotal role in translating the company's strategic vision into operational reality.",
  },
  {
    name: "Daniel M.",
    title: "Business Development & Market Access",
    tags: ["Business Development", "Market Access", "Client Relations"],
    img: "/daniel.png",
    bio: "Daniel M. leads Business Development and Market Access at NKB Regovanta. He is instrumental in identifying new growth opportunities, building strategic partnerships, and expanding the company's market footprint across regulatory and healthcare sectors. Daniel brings extensive experience in client engagement, commercial strategy, and market analysis, ensuring that NKB Regovanta continues to reach and serve clients effectively on a global scale.",
  },
  {
    name: "Satish M.",
    title: "Manager, Human Resources",
    tags: ["Human Resources", "Talent Management", "Organizational Development"],
    img: "/satish.png",
    bio: "Satish M. serves as the Manager of Human Resources at NKB Regovanta Solutions, overseeing talent acquisition, employee engagement, and HR operations. He plays a key role in building a strong organizational culture, managing workforce planning, and supporting the professional development of team members. His dedication to creating an inclusive and high-performing work environment is integral to the company's continued growth and employee satisfaction.",
  },
];

const allTags = Array.from(new Set(experts.flatMap(e => e.tags))).sort();

const FilterGroup = ({ title, items, selected, onToggle }: {
  title: string;
  items: string[];
  selected: string[];
  onToggle: (item: string) => void;
}) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-5 border-b border-gray-200 pb-4">
      <button
        className="flex items-center justify-between w-full text-left font-bold text-[hsl(195_65%_20%)] mb-3"
        onClick={() => setOpen(o => !o)}
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="space-y-2">
          {items.map(item => (
            <label key={item} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[hsl(195_65%_20%)] cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => onToggle(item)}
                className="rounded border-gray-300 text-[#F5C754] focus:ring-[#F5C754]"
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const SubjectMatterExpertsPage = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (tag: string) => {
    setActiveFilters(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filtered = experts.filter(e => {
    const matchesSearch =
      search === "" ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

    const matchesFilter =
      activeFilters.length === 0 ||
      activeFilters.every(f => e.tags.includes(f));

    return matchesSearch && matchesFilter;
  });

  const executiveTags = ["Executive Leadership", "Strategic Direction", "Operations", "Process Management"];
  const businessTags = ["Business Development", "Market Access", "Client Relations"];
  const hrTags = ["Human Resources", "Talent Management", "Organizational Development"];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[hsl(195_65%_20%)] py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-black">Meet Our Subject Matter Experts</h1>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              The dedicated professionals who drive NKB Regovanta's vision, operations, and growth.
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Search */}
            <div className="relative max-w-xl mx-auto mb-12">
              <input
                type="text"
                placeholder="Search by name, title, or expertise..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F5C754] focus:border-transparent text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 btn-gradient font-bold">Search</Button>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-200 h-fit">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-black text-xl text-[hsl(195_65%_20%)]">Filter By</h3>
                  {activeFilters.length > 0 && (
                    <button
                      onClick={() => setActiveFilters([])}
                      className="text-xs text-gray-400 hover:text-red-500 font-medium transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <FilterGroup
                  title="Executive"
                  items={executiveTags}
                  selected={activeFilters}
                  onToggle={toggleFilter}
                />
                <FilterGroup
                  title="Business"
                  items={businessTags}
                  selected={activeFilters}
                  onToggle={toggleFilter}
                />
                <FilterGroup
                  title="People & Culture"
                  items={hrTags}
                  selected={activeFilters}
                  onToggle={toggleFilter}
                />
              </div>

              {/* Results Grid */}
              <div className="lg:col-span-3">
                {activeFilters.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeFilters.map(f => (
                      <span key={f} className="flex items-center gap-1.5 px-3 py-1 bg-[hsl(195_65%_20%)]/10 text-[hsl(195_65%_20%)] text-xs font-bold rounded-full">
                        {f}
                        <button onClick={() => toggleFilter(f)}><X className="w-3 h-3" /></button>
                      </span>
                    ))}
                  </div>
                )}

                {filtered.length === 0 ? (
                  <div className="text-center py-16 text-gray-400">
                    <p className="text-lg font-medium">No results found.</p>
                    <p className="text-sm mt-1">Try adjusting your search or filters.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filtered.map((expert, idx) => (
                      <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                        <div className="p-6 flex gap-4 items-start border-b border-gray-100">
                          <img
                            src={expert.img}
                            alt={expert.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                          />
                          <div>
                            <h3 className="text-lg font-bold text-[hsl(195_65%_20%)] group-hover:text-[#F5C754] transition-colors">{expert.name}</h3>
                            <p className="text-sm text-gray-600 font-medium mb-2">{expert.title}</p>
                            <button
                              onClick={() => setSelectedExpert(expert)}
                              className="text-xs font-bold text-[#F5C754] uppercase tracking-wider hover:underline"
                            >
                              View Bio →
                            </button>
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
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bio Modal */}
      {selectedExpert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedExpert(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExpert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex gap-4 items-start mb-5">
              <img
                src={selectedExpert.img}
                alt={selectedExpert.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#F5C754] shadow-sm shrink-0"
              />
              <div>
                <h2 className="text-xl font-black text-[hsl(195_65%_20%)]">{selectedExpert.name}</h2>
                <p className="text-sm text-[#C08518] font-bold">{selectedExpert.title}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{selectedExpert.bio}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SubjectMatterExpertsPage;
