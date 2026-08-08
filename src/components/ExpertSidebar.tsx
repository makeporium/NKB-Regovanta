import { Link } from "react-router-dom";

const ExpertSidebar = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
      <h3 className="text-xl font-black text-[hsl(195_65%_20%)] mb-2">Meet NKB Regovanta's Leadership</h3>
      <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
        Our executive team brings decades of combined experience in driving innovation, regulatory compliance, and operational excellence across the MedTech industry.
      </p>
      
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <img
            src="/usha.png"
            alt="Miss. Usha S."
            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
          />
          <div>
            <h4 className="font-bold text-[hsl(195_65%_20%)] text-base">Miss. Usha S.</h4>
            <p className="text-sm font-bold mb-2 text-[#F5C754]">Chief Executive Officer</p>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">
              As Chief Executive Officer, Miss. Usha S. leads the organization's strategic direction, business operations, and growth initiatives. She works closely with healthcare, regulatory, and technical experts to strengthen the company's capabilities and support the delivery of high-quality services to clients.
            </p>
            <Link to="/expertise/subject-matter-experts" className="text-xs font-bold text-[#F5C754] uppercase tracking-wider hover:underline">
              View Full Team →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSidebar;
