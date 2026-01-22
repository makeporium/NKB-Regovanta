import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ComparisonTable from "@/components/ComparisonTable";
import Statistics from "@/components/Statistics";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QueryPopup from "@/components/QueryPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ComparisonTable />
        <Statistics />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <QueryPopup />
    </div>
  );
};

export default Index;
