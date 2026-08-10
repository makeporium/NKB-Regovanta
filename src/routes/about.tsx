import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
    Target,
    Award,
    Users,
    Lightbulb,
    ShieldCheck,
    Globe2,
    Handshake,
    Trophy,
    X,
} from "lucide-react";
import cityImage from "@/assets/about-city.jpg";
import imgUsha from "@/assets/usha.png";
import imgSaurav from "@/assets/saurav.png";
import imgDaniel from "@/assets/daniel.png";
import imgSatish from "@/assets/satish.png";
import imgRitu from "@/assets/ritu.png";

export const Route = createFileRoute("/about")({
    head: () => ({
        meta: [
            { title: "About Us | NKB Regovanta" },
            {
                name: "description",
                content:
                    "NKB Regovanta is a trusted partner for medical device companies worldwide, delivering end-to-end regulatory, quality & compliance solutions.",
            },
        ],
    }),
    component: About,
});

const approach = [
    {
        icon: Target,
        title: "Strategic",
        desc: "Customized strategies\nfor your success.",
    },
    {
        icon: Award,
        title: "Reliable",
        desc: "Trusted by global\nmedical device leaders.",
    },
    {
        icon: Users,
        title: "Collaborative",
        desc: "Work as an extension\nof your team.",
    },
    {
        icon: Lightbulb,
        title: "Innovative",
        desc: "Smart solutions for\ncomplex challenges.",
    },
    {
        icon: ShieldCheck,
        title: "Compliant",
        desc: "Ensure global regulatory\ncompliance.",
    },
    {
        icon: Globe2,
        title: "Global",
        desc: "Local expertise,\nglobal reach.",
    },
];

const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "21+", label: "Clients Served" },
    { value: "51+", label: "Projects Delivered" },
    { value: "15+", label: "Countries Supported" },
    { value: "3", label: "Core Industries" },
];

const experts = [
    {
      name: "Miss. Usha S.",
      title: "Chief Executive Officer",
      tags: ["Executive Leadership", "Strategic Direction", "Operations"],
      img: imgUsha,
      bio: "As Chief Executive Officer, Miss. Usha S. leads the organization's strategic direction, business operations, and growth initiatives. She works closely with healthcare, regulatory, and technical experts to strengthen the company's capabilities and support the delivery of high-quality services to clients. Her focus on operational excellence, strong client partnerships, and sustainable growth helps drive the organization's continued development within the healthcare sector.",
    },
    {
      name: "Saurav Gupta",
      title: "Chief Operating Officer",
      tags: ["Executive Leadership", "Operations", "Process Management"],
      img: imgSaurav,
      bio: "As Chief Operating Officer, Saurav Gupta oversees the day-to-day operational activities of NKB Regovanta Solutions. He is responsible for streamlining internal processes, managing cross-functional teams, and ensuring service delivery meets the highest quality standards. With a strong focus on efficiency, scalability, and organizational alignment, Saurav plays a pivotal role in translating the company's strategic vision into operational reality.",
    },
    {
      name: "Daniel M.",
      title: "Business Development & Market Access",
      tags: ["Business Development", "Market Access", "Client Relations"],
      img: imgDaniel,
      bio: "Daniel M. leads Business Development and Market Access at NKB Regovanta. He is instrumental in identifying new growth opportunities, building strategic partnerships, and expanding the company's market footprint across regulatory and healthcare sectors. Daniel brings extensive experience in client engagement, commercial strategy, and market analysis, ensuring that NKB Regovanta continues to reach and serve clients effectively on a global scale.",
    },
    {
      name: "Satish M.",
      title: "Manager, Human Resources",
      tags: ["Human Resources", "Talent Management", "Organizational Development"],
      img: imgSatish,
      bio: "Satish M. serves as the Manager of Human Resources at NKB Regovanta Solutions, overseeing talent acquisition, employee engagement, and HR operations. He plays a key role in building a strong organizational culture, managing workforce planning, and supporting the professional development of team members. His dedication to creating an inclusive and high-performing work environment is integral to the company's continued growth and employee satisfaction.",
    },
    {
      name: "Ritu Dixit",
      title: "Quality Assurance and Regulatory Affairs",
      tags: ["Quality Assurance", "Regulatory Affairs", "Compliance"],
      img: imgRitu,
      bio: "Ritu Dixit plays a crucial role in Quality Assurance and Regulatory Affairs at NKB Regovanta. She ensures that processes, products, and services consistently meet the rigorous quality standards demanded by the healthcare industry and regulatory authorities. Her deep understanding of compliance frameworks and dedication to continuous improvement make her a vital asset in maintaining operational excellence and safeguarding the integrity of our regulatory solutions.",
    },
];

const milestones = [
    { year: "2018", text: "NKB Regovanta founded with a clear mission: to guide medical device and IVD manufacturers through complex global regulatory landscapes with precision and integrity." },
    { year: "2019", text: "Established core consulting capabilities in US FDA regulatory strategy, EU MDR compliance, and biological safety evaluation." },
    { year: "2020", text: "Expanded service offerings to include clinical research support and quality management consulting amid rapidly evolving global regulatory requirements." },
    { year: "2021", text: "Launched preclinical research advisory services and deepened expertise in ISO 10993 biological evaluation, GLP studies, and IVDR compliance." },
    { year: "2022", text: "Grew the team of regulatory experts and expanded client base to include early-stage MedTech startups and established multinational manufacturers." },
    { year: "2023", text: "Introduced the Startup Solutions program — a dedicated, integrated pathway for early-stage companies to navigate regulatory challenges efficiently." },
    { year: "2024", text: "Strengthened global reach with regulatory consulting expertise spanning US FDA, EU, and APAC markets, serving 100+ clients across therapeutic areas." },
    { year: "Present", text: "Operating as a trusted full-service Medical Research Organization (MRO) delivering integrated regulatory, preclinical, clinical, and testing solutions to MedTech innovators worldwide." },
];

function About() {
    const [selectedExpert, setSelectedExpert] = useState<typeof experts[0] | null>(null);

    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-white overflow-hidden" style={{ maxHeight: 420 }}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-stretch h-[420px]">
                    {/* Left */}
                    <div className="flex flex-col justify-center py-10 pr-12 relative z-10 bg-white">
                        <p className="text-[12.5px] font-bold text-navy mb-4">About NKB Regovanta</p>
                        <h1 className="font-display font-extrabold leading-tight text-navy text-[38px] lg:text-[44px]">
                            Regulatory Expertise.<br />
                            Practical Execution.<br />
                            Global Success.
                        </h1>
                        <p className="mt-5 text-[14.5px] font-medium text-navy/80 leading-relaxed max-w-[420px]">
                            NKB Regovanta is a trusted partner for medical device companies worldwide, delivering end-to-end regulatory, quality & compliance solutions.
                        </p>
                    </div>

                    {/* Right — city skyline faded into white on the left */}
                    <div className="hidden lg:block h-full relative">
                        {/* White gradient overlay to fade the left edge seamlessly */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                        <img
                            src={cityImage}
                            alt="City skyline"
                            className="w-full h-full object-cover object-bottom"
                        />
                    </div>
                </div>
            </section>

            {/* ── Our Approach ── */}
            <section className="bg-white py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <h2 className="text-[15px] font-bold text-navy">Our Approach</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-border">
                        {approach.map((a) => (
                            <div key={a.title} className="flex flex-col items-center text-center px-4 py-4">
                                <a.icon className="h-10 w-10 text-navy mb-3" strokeWidth={1.25} />
                                <h3 className="text-[14px] font-bold text-navy">{a.title}</h3>
                                <p className="mt-1 text-[11.5px] leading-snug text-navy/70 whitespace-pre-line">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Our Journey ── */}
            <section className="bg-surface py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Journey</p>
                        <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl leading-tight">
                            Navigating Complexity Since 2018
                        </h2>
                        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy/70">
                            <p>
                                Since its founding in 2018, NKB Regovanta has been an active participant in the medical device industry, assisting manufacturers, startups, and multinational corporations in navigating the world's most complex regulatory landscapes. We were built from the ground up to solve a critical gap — providing integrated regulatory, preclinical, clinical, and testing support under one roof.
                            </p>
                            <p>
                                In 2018, the MedTech regulatory environment was rapidly evolving. Companies needed more than isolated consultants — they needed a single partner who could see the full picture. NKB Regovanta was founded to be that partner, combining deep regulatory expertise with scientific rigor and a genuine commitment to patient safety.
                            </p>
                            <p>
                                Over the past 8 years, NKB Regovanta has expanded its capabilities across US FDA, EU MDR/IVDR, and global regulatory frameworks. We offer a full suite of services that help our clients bring life-changing therapies to market safely and efficiently.
                            </p>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-border/60 ml-4 lg:ml-8 space-y-8 pb-4">
                        {milestones.map((m, i) => (
                            <div key={i} className="relative pl-6 lg:pl-10">
                                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1.5 border-4 border-surface"></div>
                                <div className="font-bold text-navy text-lg leading-none mb-2">{m.year}</div>
                                <p className="text-sm text-navy/70 leading-relaxed max-w-3xl">
                                    {m.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Leadership ── */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Leadership</p>
                        <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl leading-tight">
                            Meet Our Key Leaders
                        </h2>
                        <p className="mt-4 text-[15px] text-navy/70 max-w-xl mx-auto">
                            Experienced professionals committed to advancing regulatory excellence and healthcare innovation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {experts.map((expert, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
                                <div className="p-6 flex gap-4 items-start border-b border-border/50">
                                    <div className="w-20 h-20 rounded-full bg-surface shrink-0 overflow-hidden flex items-center justify-center border border-border shadow-sm">
                                        {/* Fallback avatar block */}
                                        {expert.img ? (
                                            <img src={expert.img} alt={expert.name} className="w-full h-full object-cover object-[center_top]" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden') }} />
                                        ) : null}
                                        <div className={`text-navy font-bold text-xl ${expert.img ? 'hidden' : ''}`}>{expert.name.charAt(0)}</div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy group-hover:text-accent transition-colors">{expert.name}</h3>
                                        <p className="text-sm text-navy/70 font-medium mb-3">{expert.title}</p>
                                        <button
                                            onClick={() => setSelectedExpert(expert)}
                                            className="text-[11px] font-bold text-accent uppercase tracking-wider hover:text-navy transition-colors inline-flex items-center gap-1"
                                        >
                                            View Bio <span className="text-lg leading-none">&rarr;</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 bg-surface/50 flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {expert.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-white border border-border text-[10px] font-bold uppercase tracking-wide text-navy/60 rounded-sm">
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

            {/* ── Stats Band ── */}
            <section className="bg-[#f8f9fa] border-t border-b border-border py-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center">
                        {stats.map((s, i) => (
                            <div key={s.value} className={`flex flex-col items-center justify-center px-4 py-3 text-center ${i < stats.length - 1 ? 'lg:border-r border-border border-b lg:border-b-0' : 'border-b lg:border-b-0'}`}>
                                <div className="text-[22px] font-extrabold text-navy leading-none">{s.value}</div>
                                <div className="mt-1.5 text-[11px] font-semibold text-navy/70 uppercase tracking-wide">{s.label}</div>
                            </div>
                        ))}
                        {/* Button takes the 6th slot, no left border */}
                        <div className="flex justify-center px-2 lg:px-0 py-3 lg:ml-[-10%] lg:w-[120%]">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-sm bg-navy text-white font-semibold px-8 py-3.5 text-[13.5px] transition-colors hover:bg-navy/90 w-full"
                            >
                                Let's Work Together
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Footer CTA Band ── */}
            <section className="bg-navy text-white py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Top Row */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-0">
                        {/* Left: Mission */}
                        <div className="flex items-center gap-4 lg:w-[400px] lg:pr-8">
                            <Globe2 className="h-12 w-12 text-white shrink-0" strokeWidth={1} />
                            <p className="text-[13px] text-white/90 leading-snug font-medium">
                                Our mission is to simplify compliance and accelerate market access for medical devices globally.
                            </p>
                        </div>

                        {/* Middle: 3 Pillars with individual vertical dividers */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 flex-1 lg:border-l border-white/20">
                            <div className="flex items-center gap-3 sm:px-6 xl:px-8 flex-1">
                                <Users className="h-8 w-8 text-white shrink-0" strokeWidth={1.25} />
                                <div className="text-[12px] font-semibold text-white leading-tight">Expert<br />Team</div>
                            </div>
                            <div className="flex items-center gap-3 sm:px-6 xl:px-8 flex-1 sm:border-l border-white/20">
                                <Handshake className="h-8 w-8 text-white shrink-0" strokeWidth={1.25} />
                                <div className="text-[12px] font-semibold text-white leading-tight">Client<br />Focused</div>
                            </div>
                            <div className="flex items-center gap-3 sm:px-6 xl:px-8 flex-1 sm:border-l border-white/20">
                                <Trophy className="h-8 w-8 text-white shrink-0" strokeWidth={1.25} />
                                <div className="text-[12px] font-semibold text-white leading-tight">Proven<br />Results</div>
                            </div>
                        </div>

                        {/* Right: Button */}
                        <div className="flex-shrink-0 lg:pl-8 lg:border-l border-white/20 mt-4 lg:mt-0">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-sm bg-white text-navy font-bold px-8 py-3.5 text-[13px] transition-colors hover:bg-white/90 whitespace-nowrap w-full"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="mt-8 pt-5 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[12.5px] text-white/80">
                        <div>
                            &copy; 2025 NKB Regovanta. All rights reserved.
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="mailto:contact@nkbregovanta.com" className="hover:text-white transition-colors">contact@nkbregovanta.com</a>

                        </div>
                    </div>

                </div>
            </section>

            {/* Bio Modal */}
            {selectedExpert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedExpert(null)}>
                    <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                        <button onClick={() => setSelectedExpert(null)} className="absolute top-4 right-4 text-navy/40 hover:text-navy transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                        <div className="flex gap-4 items-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-surface shrink-0 overflow-hidden flex items-center justify-center border-2 border-accent shadow-sm">
                                {selectedExpert.img ? (
                                    <img src={selectedExpert.img} alt={selectedExpert.name} className="w-full h-full object-cover object-[center_top]" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden') }} />
                                ) : null}
                                <div className={`text-navy font-bold text-xl ${selectedExpert.img ? 'hidden' : ''}`}>{selectedExpert.name.charAt(0)}</div>
                            </div>
                            <div>
                                <h2 className="text-xl font-extrabold text-navy">{selectedExpert.name}</h2>
                                <p className="text-[13px] text-accent font-bold uppercase tracking-wide">{selectedExpert.title}</p>
                            </div>
                        </div>
                        <p className="text-navy/75 text-[14.5px] leading-relaxed">{selectedExpert.bio}</p>
                    </div>
                </div>
            )}
        </>
    );
}