import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, Users, FileCheck2, Handshake } from "lucide-react";
import mapImage from "@/assets/map2.png";

export const Route = createFileRoute("/markets/")({
    head: () => ({
        meta: [
            { title: "Global Markets | NKB Regovanta" },
            {
                name: "description",
                content:
                    "We help you navigate regulatory requirements and market-access pathways across key international markets.",
            },
        ],
    }),
    component: Markets,
});

const bullets = [
    { label: "India (CDSCO)", to: "/services/india" },
    { label: "United States (FDA)", to: "/services/usa" },
    { label: "European Union (EU MDR/IVDR)", to: "/services/eu" },
    { label: "United Kingdom (UKCA)", to: "/services/uk" },
    { label: "Canada (Health Canada)", to: "/services/canada" },
    { label: "Australia (TGA)", to: "/services/australia" },
    { label: "Brazil (ANVISA)", to: "/services/brazil" },
    { label: "Rest Of The World (ROW)", to: "/contact" },
];

const flagMarkets = [
    { code: "in", label: "CDSCO", sub: "INDIA", to: "/services/india" },
    { code: "us", label: "FDA", sub: "USA", to: "/services/usa" },
    { code: "eu", label: "EU MDR/IVDR", sub: "EUROPE", to: "/services/eu" },
    { code: "gb", label: "UKCA", sub: "UK", to: "/services/uk" },
    { code: "ca", label: "Health Canada", sub: "CANADA", to: "/services/canada" },
    { code: "au", label: "TGA", sub: "AUSTRALIA", to: "/services/australia" },
    { code: "br", label: "ANVISA", sub: "BRAZIL", to: "/services/brazil" },
    { code: null, label: "AND MORE", sub: "15+ COUNTRIES", to: "/contact" },
];

const stats = [
    { icon: Globe2, value: "15+", label: "Countries\nSupported" },
    { icon: Users, value: "21+", label: "Global Clients\nServed" },
    { icon: FileCheck2, value: "51+", label: "Regulatory & Quality Projects Completed" },
    { icon: Handshake, value: "2018", label: "Experience Since\nRegulatory & Quality" },
];

function Markets() {
    return (
        <>
            {/* ── Hero ── */}
            <section className="bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-start gap-6">
                    {/* Left */}
                    <div className="flex flex-col justify-start py-6 shrink-0 w-[42%]">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-3">Global Markets</p>
                        <h1 className="font-display font-extrabold leading-tight text-navy" style={{ fontSize: "clamp(26px, 3vw, 40px)" }}>
                            Access Multiple Global Markets.
                        </h1>
                        <p className="mt-3 text-[13.5px] text-navy/70 leading-relaxed max-w-sm">
                            We help you expand your global footprint with regulatory expertise and local knowledge.
                        </p>
                        <ul className="mt-5 space-y-2">
                            {bullets.map((b) => (
                                <li key={b.label} className="flex items-center gap-2.5 text-[13px] font-semibold text-navy group">
                                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-navy text-white text-[10px] font-black group-hover:bg-accent transition-colors">✓</span>
                                    <Link to={b.to} className="hover:text-accent transition-colors">
                                        {b.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — break out to right viewport edge, no crop */}
                    <div className="hidden lg:block flex-1 -mr-4 sm:-mr-6 lg:-mr-8">
                        <img
                            src={mapImage}
                            alt="Global Markets Map"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* ── Flag strip ── */}
            <section className="py-4 border-t border-b border-border bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-8 divide-x divide-border items-center">
                        {flagMarkets.map((m) => (
                            <Link to={m.to} key={m.label} className="flex items-center gap-2 justify-center py-2 px-2 hover:bg-slate-50 transition-colors group">
                                {m.code ? (
                                    <img
                                        src={`https://flagcdn.com/w40/${m.code}.png`}
                                        srcSet={`https://flagcdn.com/w80/${m.code}.png 2x`}
                                        width="28"
                                        alt={m.label}
                                        className="rounded-[2px] shadow-sm border border-black/10 shrink-0 group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <Globe2 className="h-5 w-5 text-navy shrink-0 group-hover:scale-110 group-hover:text-accent transition-all duration-300" />
                                )}
                                <div>
                                    <div className="text-[11px] font-bold text-navy whitespace-nowrap leading-tight group-hover:text-accent transition-colors">{m.label}</div>
                                    <div className="text-[9px] font-semibold text-navy/50 tracking-wider uppercase whitespace-nowrap">{m.sub}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stats + CTA Band ── */}
            <section className="bg-navy text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* 5-column grid: 4 stats + button — divider only between stats, NOT before button */}
                    <div className="grid grid-cols-5">
                        {stats.map((s, i) => (
                            <div key={s.value} className={`flex items-center gap-4 px-6 py-6 ${i < stats.length - 1 ? "border-r border-white/20" : ""}`}>
                                <s.icon className="h-10 w-10 text-white/70 shrink-0" strokeWidth={1.25} />
                                <div>
                                    <div className="text-[24px] font-extrabold text-white leading-none">{s.value}</div>
                                    <div className="text-[11.5px] text-white/70 leading-snug mt-1 whitespace-pre-line">{s.label}</div>
                                </div>
                            </div>
                        ))}
                        {/* Button — 5th column, NO left border */}
                        <div className="flex items-center justify-center px-6 py-6">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-sm bg-white text-navy font-bold px-5 py-3 text-[13px] transition-colors hover:bg-white/90 whitespace-nowrap w-full text-center leading-tight"
                            >
                                Get Global Market Access
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
