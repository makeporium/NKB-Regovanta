import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ComparisonTable from "@/components/ComparisonTable";
import Statistics from "@/components/Statistics";
import WhyUs from "@/components/WhyUs";
import FinancialMISSection from "@/components/FinancialMISSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QueryPopup from "@/components/QueryPopup";

const Index = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        const id = hash.slice(1);
        const scrollToEl = () => {
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        const t = setTimeout(scrollToEl, 100);
        return () => clearTimeout(t);
    }, [hash]);

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                {/* 1. Full-screen hero with service quick-link cards */}
                <Hero />

                {/* 2. About - who we are, stats & highlights */}
                <About />

                {/* 3. Tabbed service pillars: Consulting vs Research */}
                <Services />

                {/* 4. Comparison table: Full-service CRO vs Traditional */}
                <ComparisonTable />

                {/* 5. Impact stats + client testimonials */}
                <Statistics />

                {/* 6. Why choose us + therapeutic expertise sidebar */}
                <WhyUs />

                {/* 7. Resource library highlights */}
                <FinancialMISSection />

                {/* 8. Contact form + info */}
                <Contact />
            </main>
            <Footer />
            <QueryPopup />
        </div>
    );
};

export default Index;
