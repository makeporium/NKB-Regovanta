import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

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
const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="min-h-[50vh] flex items-center justify-center text-center px-4">
    <div>
      <h1 className="text-3xl font-black text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-500">This page is currently being built with full 1:1 NKB Regovanta content.</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
