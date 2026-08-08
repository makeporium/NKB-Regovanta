import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Overview Pages
import ServicesPage from "./pages/ServicesPage";
import ExpertisePage from "./pages/ExpertisePage";
import BlogPage from "./pages/resources/BlogPage";
import AboutPage from "./pages/AboutPage";
import HistoryPage from "./pages/about/HistoryPage";
import ValuesPage from "./pages/about/ValuesPage";
import ContactPage from "./pages/ContactPage";

// Service Pages — Full 1:1 NKB Regovanta Content
import RegulatoryConsultingPage from "./pages/services/RegulatoryConsultingPage";
import BiologicalSafetyPage from "./pages/services/BiologicalSafetyPage";
import PreclinicalPage from "./pages/services/PreclinicalPage";
import ClinicalPage from "./pages/services/ClinicalPage";
import MedicalWritingPage from "./pages/services/MedicalWritingPage";
import IVDPage from "./pages/services/IVDPage";
import ReimbursementPage from "./pages/services/ReimbursementPage";
import ApexPage from "./pages/services/ApexPage";
import MedtechResearchPage from "./pages/services/MedtechResearchPage";
import UsFdaPage from "./pages/services/UsFdaPage";
import EuMdrPage from "./pages/services/EuMdrPage";
import QualityManagementPage from "./pages/services/QualityManagementPage";
import NonGlpPage from "./pages/services/NonGlpPage";
import PathologyPage from "./pages/services/PathologyPage";
import BioskillsPage from "./pages/services/BioskillsPage";
import PreclinicalImagingPage from "./pages/services/PreclinicalImagingPage";
import SubjectMatterExpertsPage from "./pages/expertise/SubjectMatterExpertsPage";
import KeyOpinionLeadersPage from "./pages/expertise/KeyOpinionLeadersPage";
import TherapeuticDevicesPage from "./pages/solutions/TherapeuticDevicesPage";
import StartupsPage from "./pages/solutions/StartupsPage";
import ResourcesPage from "./pages/resources/ResourcesPage";
import { ProductDevelopmentStrategyPage, MedicalDeviceTestingPage } from "./pages/services/ProductDevelopmentStrategyPage";


const queryClient = new QueryClient();

// Generic placeholder for pages not yet built
const PagePlaceholder = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center text-center px-4 pt-[88px] pb-16 min-h-[70vh]">
        <div>
          <div className="w-20 h-20 rounded-full bg-[hsl(195_65%_20%)]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[hsl(195_65%_20%)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">This page is currently being built. Please check back soon.</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(195_65%_20%)] text-white font-bold hover:bg-[hsl(195_65%_25%)] transition-colors"
          >
            ← Go Back
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Solutions (Services) */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/product-development-strategy" element={<ProductDevelopmentStrategyPage />} />
          <Route path="/services/medical-device-testing" element={<MedicalDeviceTestingPage />} />
          <Route path="/services/biological-safety" element={<BiologicalSafetyPage />} />
          <Route path="/services/clinical-research" element={<ClinicalPage />} />
          <Route path="/services/preclinical-research" element={<PreclinicalPage />} />
          <Route path="/services/regulatory" element={<RegulatoryConsultingPage />} />
          <Route path="/services/medical-writing" element={<MedicalWritingPage />} />
          <Route path="/services/ivd" element={<IVDPage />} />
          <Route path="/services/reimbursement" element={<ReimbursementPage />} />
          <Route path="/services/apex-program" element={<ApexPage />} />
          <Route path="/services/medtech-market-research-consulting" element={<MedtechResearchPage />} />



          {/* Expertise */}
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/expertise/subject-matter-experts" element={<SubjectMatterExpertsPage />} />
          <Route path="/expertise/key-opinion-leaders" element={<KeyOpinionLeadersPage />} />
          <Route path="/expertise/therapeutic-expertise" element={<PagePlaceholder title="Therapeutic Expertise" />} />
          <Route path="/NKB Regovanta-expertise" element={<ExpertisePage />} />

          {/* Solutions */}
          <Route path="/solutions" element={<PagePlaceholder title="Solutions" />} />
          <Route path="/solutions/specific-devices" element={<TherapeuticDevicesPage />} />
          <Route path="/solutions/startups" element={<StartupsPage />} />

          {/* New Nav Placeholder Routes */}
          <Route path="/services/us-fda" element={<UsFdaPage />} />
          <Route path="/services/eu-mdr" element={<EuMdrPage />} />
          <Route path="/services/quality-management" element={<QualityManagementPage />} />
          <Route path="/services/human-factors" element={<PagePlaceholder title="Human Factors & Usability Testing" />} />
          <Route path="/services/preclinical-feasibility" element={<NonGlpPage />} />
          <Route path="/services/preclinical-pathology" element={<PathologyPage />} />
          <Route path="/services/bioskills" element={<BioskillsPage />} />
          <Route path="/services/preclinical-imaging" element={<PreclinicalImagingPage />} />
          <Route path="/services/clinical-trial-management" element={<PagePlaceholder title="Clinical Trial Management" />} />
          <Route path="/services/data-management" element={<PagePlaceholder title="Data Management" />} />
          <Route path="/services/clinical-biostatistics" element={<PagePlaceholder title="Clinical Biostatistics" />} />
          <Route path="/services/safety-management" element={<PagePlaceholder title="Safety Management and Reporting" />} />
          <Route path="/services/microbiology" element={<PagePlaceholder title="Microbiology Testing" />} />
          <Route path="/services/sterility" element={<PagePlaceholder title="Sterility Testing" />} />
          <Route path="/services/chemistry" element={<PagePlaceholder title="Chemical Characterization" />} />
          <Route path="/resources/whitepapers" element={<ResourcesPage />} />
          <Route path="/resources/blog" element={<ResourcesPage />} />
          <Route path="/resources/podcasts-and-videos" element={<ResourcesPage />} />
          <Route path="/resources/client-testimonials" element={<ResourcesPage />} />
          <Route path="/resources/recorded-webinars" element={<ResourcesPage />} />
          <Route path="/about/news" element={<PagePlaceholder title="NKB Regovanta News" />} />
          
          {/* Resources Default */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/eu-mdr-ivdr-planning-resources" element={<PagePlaceholder title="EU MDR & IVDR Planning Resources" />} />
          <Route path="/resources/covid-19-resources" element={<PagePlaceholder title="COVID-19 IVD Resources" />} />
          <Route path="/resources/monkeypox-ivd-resources" element={<PagePlaceholder title="Monkeypox IVD Resources" />} />

          {/* Events */}
          <Route path="/events" element={<PagePlaceholder title="Events & Webinars" />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/our-accreditations-certifications" element={<PagePlaceholder title="Accreditations & Certifications" />} />
          <Route path="/careers" element={<PagePlaceholder title="Careers" />} />
          <Route path="/about/client-testimonials" element={<PagePlaceholder title="Client Testimonials" />} />
          <Route path="/about/faq" element={<PagePlaceholder title="FAQ" />} />
          <Route path="/about/our-history" element={<HistoryPage />} />
          <Route path="/about/NKB Regovanta-leadership" element={<PagePlaceholder title="Leadership" />} />
          <Route path="/about/our-locations" element={<PagePlaceholder title="Locations" />} />
          <Route path="/about/our-values" element={<ValuesPage />} />

          {/* Contact */}
          <Route path="/locations-contact" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
