import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgMedical from "@/assets/industry-medical.png";
import imgIVD from "@/assets/industry-ivd.png";
import imgCosmetics from "@/assets/industry-cosmetics.png";
import imgPharma from "@/assets/Taking Liquid Out of Test Tubes.png";

export const Route = createFileRoute("/industries/")({
    head: () => ({
        meta: [
            { title: "Medical Devices, IVDs, Pharmaceuticals & Cosmetics Regulatory | NKB Regovanta" },
            {
                name: "description",
                content:
                    "Specialized regulatory, quality and market-access support for Medical Devices, IVDs, Pharmaceuticals and Cosmetics.",
            },
        ],
    links: [
        { rel: "canonical", href: "https://www.nkbregovanta.com/industries" },
    ],
    }),
    component: Industries,
});

const industries = [
    {
        title: "Medical Devices",
        description: "Regulatory strategy, technical documentation, quality systems and market access for a broad range of medical device technologies.",
        img: imgMedical,
        route: "/industries/medical-devices",
    },
    {
        title: "In Vitro Diagnostic Devices",
        description: "IVD-focused regulatory pathways, technical documentation, quality-system and market-entry support.",
        img: imgIVD,
        route: "/industries/ivd",
    },
    {
        title: "Pharmaceutical & Drug Regulatory Services",
        description: "CDSCO drug import licensing, Form 41 / Form 10, foreign manufacturer registration, AIR representation and post-approval compliance.",
        img: imgPharma,
        route: "/services/drug-licenses-for-importers",
    },
    {
        title: "Cosmetics",
        description: "Compliance, product documentation, market-entry and regulatory support for cosmetic products across selected markets.",
        img: imgCosmetics,
        route: "/industries/cosmetics",
    },
];

function Industries() {
    return (
        <>
            <section className="bg-surface py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Industries We Serve</p>
                    <h1 className="mt-4 text-3xl font-extrabold text-navy sm:text-5xl leading-tight">
                        Tailored Solutions for Every Industry
                    </h1>
                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                        Specialized regulatory, quality and market-access support for healthcare, diagnostic and pharmaceutical companies.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {industries.map((ind) => (
                            <div key={ind.title} className="card-elevated overflow-hidden flex flex-col">
                                <img src={ind.img} alt={ind.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex flex-col flex-1">
                                    <h2 className="text-xl font-bold text-navy">{ind.title}</h2>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{ind.description}</p>
                                    <Link to={ind.route} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent transition-colors">
                                        Read More <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-navy text-navy-foreground py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 items-center text-center">
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-extrabold">51+</div>
                            <div className="mt-1 text-xs uppercase tracking-wide text-navy-foreground/70">Regulatory & Quality Projects</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-extrabold">21+</div>
                            <div className="mt-1 text-xs uppercase tracking-wide text-navy-foreground/70">Global Clients Served</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-extrabold">15+</div>
                            <div className="mt-1 text-xs uppercase tracking-wide text-navy-foreground/70">International Countries Supported</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-extrabold">2018</div>
                            <div className="mt-1 text-xs uppercase tracking-wide text-navy-foreground/70">Experience Since</div>
                        </div>
                        <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right mt-4 lg:mt-0">
                            <Link to="/services" className="inline-flex items-center justify-center rounfor ded-sm bg-white text-navy font-semibold px-6 py-3 text-sm transition-colors hover:bg-white/90 w-full lg:w-auto">
                                Explore Industry Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTABand title="Tell us about your product." description="Start a Conversation" />
        </>
    );
}