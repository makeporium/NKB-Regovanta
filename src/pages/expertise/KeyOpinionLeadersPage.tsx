import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, X } from "lucide-react";

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

const KeyOpinionLeadersPage = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [search, setSearch] = useState("");

  const filtered = experts.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.title.toLowerCase().includes(search.toLowerCase()) ||
    e.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[hsl(195_65%_20%)] py-16 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-black">Meet Our Key Leaders</h1>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Experienced professionals committed to advancing regulatory excellence and healthcare innovation.
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
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

            {/* Cards */}
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
          </div>
        </section>
      </main>

      {/* Bio Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedExpert(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedExpert(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
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

export default KeyOpinionLeadersPage;
