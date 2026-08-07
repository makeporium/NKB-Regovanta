import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, FileText, Calendar, Compass, ExternalLink } from "lucide-react";

// --- HERO SECTION ---
export const HeroSection = () => {
  const slides = [
    "NKB REGOVANTA IS THE WORLD'S LEADING MEDTECH CRO OFFERING GLOBAL DEVELOPMENT SERVICES",
    "DRIVEN BY ITS GLOBAL REGULATORY EXPERTISE AND IN-DEPTH THERAPEUTIC KNOWLEDGE",
    "FROM CONCEPT TO POST-MARKET, DELIVERING SIGNIFICANT TIME SAVINGS VS. INDUSTRY AVERAGES",
    "HELPING MEDICAL DEVICE SPONSORS IMPROVE HEALTHCARE SINCE 1967",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Video Background Fallback / Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-[10000ms] scale-105"
        style={{ backgroundImage: `url('https://namsa.com/app/uploads/2021/05/home.jpg')` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(195_65%_15%)]/90 to-transparent" />

      <div className="container mx-auto px-4 z-10 text-center max-w-5xl">
        <div className="min-h-[180px] flex items-center justify-center mb-10">
          {slides.map((slide, idx) => (
            <h1
              key={idx}
              className={`text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight transition-all duration-1000 absolute max-w-4xl ${
                idx === currentSlide 
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
                  : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              {slide}
            </h1>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-[#F5C754] w-8" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <div className="mt-10">
          <Button asChild className="rounded-full px-8 py-6 text-base font-bold btn-gradient shadow-lg">
            <Link to="/locations-contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

// --- SOLUTIONS / SERVICES PILLARS ---
export const ServicePillarsSection = () => {
  const services = [
    {
      title: "Product Development Strategy",
      href: "/services/product-development-strategy",
      icon: (
        <svg className="w-12 h-12 text-[hsl(195_65%_28%)]" fill="currentColor" viewBox="0 0 49.1 77.6">
          <path d="M43.5,39.8c2.7-4.4,5.5-9,5.5-15.3C49.1,11,38.1,0,24.5,0C11,0,0,11,0,24.5c0,6.3,2.8,10.9,5.5,15.3 c2.7,4.3,5.2,8.4,5.2,14.2v11.4c0,1.6,1.3,3,3,3h1.5v0.7c0,1.9,1.1,3.5,2.5,5.5c0.5,0.7,1,1.5,1.6,2.4c0.2,0.4,0.6,0.6,1.1,0.6h8.5 c0.4,0,0.8-0.2,1.1-0.6c0.6-0.9,1.1-1.7,1.6-2.4c1.4-2,2.5-3.6,2.5-5.5v-0.7h1.5c1.6,0,3-1.3,3-3V54C38.3,48.3,40.9,44.2,43.5,39.8 z M13.2,52.6h22.7c0,0.5-0.1,0.9-0.1,1.4v3.6H13.2V54C13.2,53.5,13.2,53,13.2,52.6z M2.5,24.5c0-12.1,9.9-22,22-22s22,9.9,22,22 c0,5.6-2.5,9.7-5.2,14C39.2,42,37,45.6,36.1,50H12.9c-0.9-4.4-3.1-8-5.2-11.5C5,34.2,2.5,30.1,2.5,24.5z M31.4,68.9 c0,1.2-0.8,2.3-2,4.1c-0.4,0.6-0.8,1.2-1.3,1.9H21c-0.4-0.7-0.9-1.3-1.3-1.9c-1.2-1.8-2-2.9-2-4.1v-0.7h13.7 C31.4,68.2,31.4,68.9,31.4,68.9z M35.4,65.8H13.7c-0.3,0-0.5-0.2-0.5-0.5v-5.2h22.6v5.2C35.8,65.6,35.6,65.8,35.4,65.8z"/>
          <path d="M17.3,30.7H23L21,42c-0.1,0.6,0.2,1.2,0.8,1.4c0.1,0,0.3,0.1,0.4,0.1c0.4,0,0.9-0.2,1.1-0.6l9.6-17.1 c0.2-0.4,0.2-0.9,0-1.2c-0.2-0.4-0.6-0.6-1.1-0.6h-5.7l2-11.8c0.1-0.6-0.2-1.2-0.8-1.4c-0.6-0.2-1.2,0-1.5,0.6l-9.5,17.5 c-0.2,0.4-0.2,0.9,0,1.2C16.4,30.4,16.8,30.7,17.3,30.7z M24.3,19.1l-1,5.9c-0.1,0.4,0,0.7,0.3,1c0.2,0.3,0.6,0.4,1,0.4h5.1 l-4.9,8.8l1-5.6c0.1-0.4,0-0.7-0.3-1c-0.2-0.3-0.6-0.4-1-0.4l0,0h-5.1L24.3,19.1z"/>
        </svg>
      )
    },
    {
      title: "Medical Device Testing",
      href: "/services/medical-device-testing",
      icon: (
        <svg className="w-12 h-12 text-[hsl(195_65%_28%)]" fill="currentColor" viewBox="0 0 57.5 68.3">
          <path d="M55.6,52.6c-3.4-5.7-16.8-27.7-18.5-30.5v-7l0,0l0,0V8.8h0.7c2.1,0,3.9-1.7,3.9-3.9v-1C41.7,1.8,40,0,37.8,0 H19.7c-2.1,0-3.9,1.7-3.9,3.9v1c0,2.1,1.7,3.9,3.9,3.9h0.7v13.3C18.7,24.9,5.3,46.9,1.9,52.6c-2.2,3.7-2.4,8-0.6,11.2 C3,66.7,6,68.3,9.9,68.3h37.6c3.9,0,6.9-1.6,8.6-4.5C58,60.6,57.8,56.3,55.6,52.6z M18.3,4.9v-1c0-0.8,0.6-1.4,1.4-1.4h18.1 c0.8,0,1.4,0.6,1.4,1.4v1c0,0.8-0.6,1.4-1.4,1.4h-2l0,0l0,0H19.7C18.9,6.3,18.3,5.6,18.3,4.9z M22.7,23.1c0.1-0.2,0.2-0.4,0.2-0.7 V8.8h11.7v5h-5.1c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h5.1v4.6h-5.1c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h5.4 c0.4,0.6,1.4,2.3,2.8,4.6h-8.2c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h9.7c0.8,1.4,1.8,2.9,2.7,4.5c-3.7,1-8.7,0.1-13.6-0.9 c-3.9-0.8-7.8-1.5-11.4-1.4C20.1,27.3,22.6,23.2,22.7,23.1z M54,62.6c-1.2,2.1-3.5,3.3-6.4,3.3H9.9c-2.9,0-5.2-1.2-6.4-3.3 c-1.4-2.4-1.2-5.8,0.6-8.7C6,50.7,11,42.4,15.4,35.3c3.6-0.5,8.1,0.3,12.5,1.2c3.5,0.7,7.1,1.4,10.4,1.4c1.8,0,3.5-0.2,5-0.8 c4.1,6.7,8.4,13.9,10.1,16.8C55.2,56.8,55.4,60.1,54,62.6z"/>
          <path d="M26.7,57.2c-2,0-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6S28.7,57.2,26.7,57.2z M26.7,62 c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S27.3,62,26.7,62z"/>
          <path d="M38,41.4c-2,0-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6S40,41.4,38,41.4z M38,46.1 c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S38.7,46.1,38,46.1z"/>
          <path d="M25.6,51.1c0-3.1-2.5-5.7-5.7-5.7s-5.7,2.5-5.7,5.7c0,3.1,2.5,5.7,5.7,5.7S25.6,54.2,25.6,51.1z M19.9,54.3 c-1.7,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2s3.2,1.4,3.2,3.2S21.6,54.3,19.9,54.3z"/>
        </svg>
      )
    },
    {
      title: "Clinical Research",
      href: "/services/clinical-research",
      icon: (
        <svg className="w-12 h-12 text-[hsl(195_65%_28%)]" fill="currentColor" viewBox="0 0 92 69.3">
          <path d="M28.6,22.2c3.5-5.1,9.1-8.4,15.3-9l1.1-0.1V0l-1.3,0.1C32.9,0.8,23.2,6.4,17.1,15.3l-0.8,1.1l11.6,6.7 L28.6,22.2z M20,15.6C25.4,8.3,33.5,3.7,42.5,2.7v8.1c-6.1,0.9-11.6,4.1-15.3,9L20,15.6z"/>
          <path d="M86.4,6.2c-3.1,0-5.6,2.5-5.6,5.6c0,1,0.3,1.9,0.7,2.7l-4.6,4.1C71.4,8.2,60.8,0.8,48.3,0.1L47,0v13l1.1,0.1 c8.7,0.9,15.7,7,18.1,15l-8,7.1c-0.9-0.7-2-1.1-3.3-1.1c-1.8,0-3.3,0.8-4.4,2.1l-9-4.5c0.1-0.4,0.2-0.9,0.2-1.4 c0-3.1-2.5-5.6-5.6-5.6s-5.6,2.5-5.6,5.6c0,0.8,0.2,1.6,0.5,2.3L25.2,37c-0.1-0.9-0.2-1.8-0.2-2.7c0-2.9,0.5-5.7,1.7-8.4l0.4-1 l-11.6-6.8l-0.6,1.2c-2.3,4.7-3.5,10-3.5,15.3c0,2.5,0.3,5,0.8,7.4c-2.7,0.5-4.7,2.8-4.7,5.6c0,3.1,2.5,5.6,5.6,5.6 c1.1,0,2.1-0.3,3-0.9c5.8,9.8,16.2,16.3,27.6,16.9l1.3,0.1V55.5l-1.1-0.1c-8.9-1-16-7.3-18.2-15.7l6.8-5.1c1,0.8,2.2,1.3,3.6,1.3 c1.7,0,3.3-0.8,4.3-2l9.1,4.6c-0.1,0.4-0.1,0.8-0.1,1.3c0,3.1,2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6c0-1-0.2-1.9-0.7-2.7l6.9-6.1 c0.2,1.1,0.3,2.1,0.3,3.2c0,10.9-8.1,20-18.9,21.2l-1.1,0.1v13.8l1.3-0.1c18.2-1,32.4-16.2,32.2-34.5c0-4.8-0.9-9.4-2.7-13.6 l5.2-4.6c0.9,0.7,2,1,3.3,1c3.1,0,5.6-2.5,5.6-5.6C92,8.7,89.5,6.2,86.4,6.2z M16.6,21.7L24,26c-1,2.7-1.5,5.5-1.5,8.4 c0,1.5,0.1,3,0.4,4.4l-6.1,4.6c-0.6-0.5-1.3-0.9-2-1.1c-0.6-2.5-0.9-5-0.9-7.5C13.8,30.2,14.8,25.7,16.6,21.7z M13.1,50.7 c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1S14.8,50.7,13.1,50.7z M42.5,57.7v8.9c-10.3-1-19.6-7.1-24.6-16.2 c0.5-0.8,0.8-1.8,0.8-2.9c0-0.8-0.2-1.6-0.5-2.3l5.3-4C26.2,49.8,33.4,56.3,42.5,57.7z M36.1,33.5c-1.7,0-3.1-1.4-3.1-3.1 s1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C39.2,32.1,37.8,33.5,36.1,33.5z M54.9,42.9c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1S56.6,42.9,54.9,42.9z M49.5,10.8V2.7c11.3,1.1,20.7,8.1,25.4,17.7l-6.7,6C65.4,18.3,58.3,12.1,49.5,10.8z  M78.1,34.6L78.1,34.6c0.2,16.6-12.3,30.4-28.6,32v-8.9c11.5-1.8,20-11.7,20-23.5c0-1.8-0.2-3.5-0.6-5.2l7-6.3 C77.4,26.5,78.2,30.5,78.1,34.6z M86.4,14.9c-1.7,0-3.1-1.4-3.1-3.1s1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1S88.1,14.9,86.4,14.9z"/>
        </svg>
      )
    },
    {
      title: "Regulatory & Quality",
      href: "/services/regulatory",
      icon: (
        <svg className="w-12 h-12 text-[hsl(195_65%_28%)]" fill="currentColor" viewBox="0 0 70.1 84.7">
          <path d="M28.1,43.9L28.1,43.9c0.4,0,0.7-0.2,0.9-0.4l12.1-13.6c0.5-0.5,0.4-1.3-0.1-1.8s-1.3-0.4-1.8,0.1L28,40.9 l-7.8-8c-0.5-0.5-1.3-0.5-1.8,0s-0.5,1.3,0,1.8l8.8,8.9C27.4,43.8,27.7,43.9,28.1,43.9z"/>
          <path d="M20,50.1c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h19.5c0.7,0,1.2-0.6,1.2-1.2s-0.6-1.2-1.2-1.2H20z"/>
          <path d="M40.8,57c0-0.7-0.6-1.2-1.2-1.2H20c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h19.5C40.2,58.2,40.8,57.7,40.8,57z"/>
          <path d="M70,69.8c-0.4-3.1-1.6-5.4-3.7-6.9c-2.6-1.8-5.7-1.9-7.5-1.8L58.1,52c2.4-1.8,3.8-4.6,3.8-7.6 c0-4.8-3.6-8.7-8.2-9.4V15.7c0-2.1-1.7-3.8-3.8-3.8h-7.5V9.7c0-1.7-1.4-3.2-3.2-3.2h-2.4c-0.2-3.6-3.3-6.6-7-6.6 c-3.8,0-6.8,3-7.1,6.7h-2.4c-1.7,0-3.2,1.4-3.2,3.2v2.1H9.6c-2.1,0-3.8,1.7-3.8,3.8v48.7c0,2.1,1.7,3.8,3.8,3.8h25.7 c-0.1,0.5-0.2,1.1-0.3,1.7V70v0.5l0,0l0,0v4.7c0,0.7,0.6,1.2,1.2,1.2h32.6c0.7,0,1.2-0.6,1.2-1.2V70C70.1,69.9,70.1,69.9,70,69.8z M59.4,44.4c0,2.4-1.2,4.6-3.3,5.9c-0.4,0.2-0.6,0.7-0.6,1.2l0.9,11.2c0,0.4,0.2,0.7,0.5,0.9s0.7,0.3,1,0.2c0,0,4.1-0.8,7,1.2 c1.3,0.9,2.1,2.4,2.5,4.2H37.6c0.4-1.9,1.2-3.3,2.5-4.2c2.8-2,6.9-1.2,7-1.2c0.3,0.1,0.7,0,1-0.2s0.5-0.5,0.5-0.9l0.9-11.1 c0-0.5-0.2-0.9-0.6-1.2c-2.1-1.3-3.3-3.5-3.3-6c0-3.9,3.1-7,7-7C56.3,37.5,59.4,40.6,59.4,44.4z M29.8,2.4c2.4,0,4.3,1.8,4.5,4.2 h-9.1C25.4,4.2,27.4,2.4,29.8,2.4z M19.6,9.7c0-0.4,0.3-0.7,0.7-0.7h19C39.7,9,40,9.3,40,9.7V18c0,0.4-0.3,0.7-0.7,0.7h-19 c-0.4,0-0.7-0.3-0.7-0.7C19.6,18,19.6,9.7,19.6,9.7z M9.6,65.7c-0.7,0-1.3-0.6-1.3-1.3V15.7c0-0.7,0.6-1.3,1.3-1.3h7.5V18 c0,1.7,1.4,3.2,3.2,3.2h19c1.7,0,3.2-1.4,3.2-3.2v-3.6H50c0.7,0,1.3,0.6,1.3,1.3v19.4c-4.7,0.6-8.3,4.6-8.3,9.4 c0,3,1.5,5.9,3.9,7.7l-0.7,9.1c-1.8-0.1-5,0-7.5,1.8c-1,0.7-1.8,1.6-2.4,2.7L9.6,65.7L9.6,65.7z M37.4,73.9v-2.2h30.1v2.2H37.4z"/>
        </svg>
      )
    },
    {
      title: "Reimbursement",
      href: "/services/reimbursement",
      icon: (
        <svg className="w-12 h-12 text-[hsl(195_65%_28%)]" fill="currentColor" viewBox="0 0 77.8 70.2">
          <path d="M72,39.7V18.4c0-4.8-3.9-8.8-8.8-8.8H11.5c-4.8,0.1-8.7,4-8.7,8.8V46c0,4.8,3.9,8.8,8.8,8.8h31.3 c1.1,8.7,8.5,15.4,17.4,15.4c9.7,0,17.5-7.9,17.5-17.5C77.8,47.5,75.6,42.9,72,39.7z M5.3,21.8h64.2v7.3H5.3V21.8z M11.5,12.2h51.7 c3.4,0,6.2,2.8,6.2,6.2v0.9H5.3v-0.9C5.3,15,8.1,12.2,11.5,12.2z M5.3,46V31.6h64.2v6.2c-2.7-1.7-5.8-2.7-9.2-2.7 c-9.6,0-17.3,7.7-17.5,17.2H11.5C8.1,52.3,5.3,49.5,5.3,46z M60.3,67.7c-8.3,0-15-6.7-15-15s6.7-15,15-15s15,6.7,15,15 S68.6,67.7,60.3,67.7z"/>
          <path d="M62.1,44.4h-7.4c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h7.4c1.6,0,2.9,0.5,3.8,1.4c0.8,0.8,1.2,1.9,1.2,3.1 c0,2.4-1.7,4.9-5,4.9h-4.9l2.5-2.5c0.5-0.5,0.5-1.3,0-1.8s-1.3-0.5-1.8,0l-4.6,4.8c-0.5,0.5-0.5,1.3,0,1.8l4.6,4.6 c0.2,0.2,0.6,0.4,0.9,0.4s0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8l-2.5-2.5h4.9c4.9,0,7.5-3.8,7.5-7.4c0-1.9-0.7-3.6-1.9-4.9 C66.8,45.6,65,44.4,62.1,44.4z"/>
          <path d="M12.6,40.1h15.6c0.7,0,1.2-0.6,1.2-1.2c0-0.6-0.6-1.2-1.2-1.2H12.6c-0.7,0-1.2,0.6-1.2,1.2 C11.4,39.5,12,40.1,12.6,40.1z"/>
          <path d="M28.2,42.5H12.6c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2h15.6c0.7,0,1.2-0.6,1.2-1.2S28.9,42.5,28.2,42.5z"/>
        </svg>
      )
    },
    {
      title: "IVD",
      href: "/services/ivd",
      icon: (
        <svg className="w-12 h-12 text-[hsl(195_65%_28%)]" fill="currentColor" viewBox="0 0 67.8 67.9">
          <path d="M61.5,6.4c-3.5-3.5-9.2-3.5-12.7,0l-5.9,5.9l-1.4-1.4c-1.1-1.1-2.8-1.1-3.9,0L37,11.4c-1.1,1.1-1.1,2.8,0,3.9 l1.7,1.7l-28,28L4.1,59.8l4,4L23,57.2l28-28l1.5,1.5c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l0.5-0.5c1.1-1.1,1.1-2.8,0-3.9 L55.5,25l5.9-5.9C65,15.6,65,9.9,61.5,6.4z M21.5,55L8.6,60.7l-1.5-1.5l5.8-12.8l27.7-27.7l8.6,8.6L21.5,55z M55.1,28.4l-0.5,0.5 c-0.1,0.1-0.3,0.1-0.4,0l-1.5-1.5l0,0L40.5,15.2l0,0l-1.7-1.7c-0.1-0.1-0.1-0.3,0-0.4l0.5-0.5c0,0,0.1-0.1,0.2-0.1 c0.1,0,0.1,0,0.2,0.1L55.1,28C55.2,28.2,55.2,28.3,55.1,28.4z M53.8,23.3l-9.2-9.2l5.9-5.9c2.5-2.5,6.7-2.5,9.2,0 c1.2,1.2,1.9,2.9,1.9,4.6s-0.7,3.4-1.9,4.6L53.8,23.3z"/>
          <rect x="23.8" y="30.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.8274 32.4665)" width="17.9" height="2.5"/>
          <rect x="22.2" y="39.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.9623 28.6765)" width="2.8" height="2.5"/>
        </svg>
      )
    },
    {
      title: "NKB Regovanta APEX Program™",
      href: "/services/apex-program",
      icon: (
        <svg className="w-12 h-12 text-[hsl(195_65%_28%)]" fill="currentColor" viewBox="0 0 422.3 392.41">
          <path d="M196.21,381.36c-102.09,0-185.15-83.06-185.15-185.15S94.11,11.05,196.21,11.05c68.22,0,127.94,37.1,160.06,92.17h12.68 C335.75,41.82,270.77,0,196.21,0,88.02,0,0,88.02,0,196.21s88.02,196.21,196.21,196.21c74.57,0,139.55-41.82,172.74-103.23h-12.68 c-32.12,55.08-91.83,92.17-160.06,92.17Z"/>
          <path d="M56.44,245.68h12.89l11.47-25.56h51.64l11.33,25.56h13.45l-44.78-98.96h-11.22l-44.78,98.96Zm71.03-36.92h-41.69 l20.91-46.66,20.78,46.66Z"/>
          <path d="M166.02,147.42v98.27h12.46v-34.13h22.71c19.3,0,38.77-10.02,38.77-32.41v-.28c0-19.1-14.51-31.45-36.97-31.45h-36.97 Zm61.35,31.86v.28c0,12.26-10.35,20.5-25.75,20.5h-23.13v-41.01h23.68c16.02,0,25.2,7.37,25.2,20.23Z"/>
          <polygon points="321.49 158.91 321.49 147.42 250.03 147.42 250.03 245.68 322.18 245.68 322.18 234.19 262.49 234.19 262.49 201.88 315.27 201.88 315.27 190.39 262.49 190.39 262.49 158.91 321.49 158.91"/>
          <polygon points="384.55 195.45 420.93 147.42 406.27 147.42 377.23 186.42 348.14 147.73 347.91 147.42 333.12 147.42 369.49 195.58 331.74 245.68 346.25 245.68 376.82 204.62 407.14 245.37 407.38 245.68 422.3 245.68 384.55 195.45"/>
        </svg>
      )
    },
    {
      title: "Therapeutic Expertise",
      href: "/expertise/therapeutic-expertise",
      icon: (
        <svg className="w-12 h-12 text-[hsl(195_65%_28%)]" fill="currentColor" viewBox="0 0 68 70.3">
          <path d="M60.2,35.3c-4.2,0-7.6,3.3-7.8,7.5c-13,3.8-13.2,18.4-13.2,18.5c0,0.7-0.2,6.5-6.5,6.5c-6.2,0-6.4-5.8-6.4-6.4 V52c1.3-0.5,2.2-1.7,2.2-3.2v-2.4c2.4-0.4,4.7-1.2,6.7-2.4c0.8-0.5,1.3-1.2,1.6-2.1c0.1-0.6,0.1-1.1,0-1.7 c6.1-5.2,13.4-22.4,13.3-25.8c-0.2-5.3-2.6-7.7-7.6-10.5l0,0c0-1.1-0.5-2-1.2-2.8C40.4,0.4,39.4,0,38.4,0H36c-1.1,0-2,0.5-2.8,1.2 c-0.7,0.8-1,1.8-1,2.8v0.1C32.2,6.3,34,8,36.1,8h0.1h2.3c1.1,0,2-0.5,2.8-1.2c0.1-0.1,0.2-0.3,0.4-0.4c4.4,2.6,5.7,4.4,5.8,8.1 c0.1,2.8-6.8,18.8-12.2,23.6c-0.3-0.2-0.7-0.4-1-0.5c-0.9-0.2-1.8-0.1-2.7,0.4c-2,1.2-4.2,1.8-6.5,1.7H25c-2.3,0.1-4.5-0.5-6.5-1.7 c-1.2-0.7-2.5-0.6-3.6,0.1C9.3,33.4,2.4,17.2,2.5,14.5c0.1-3.8,1.4-5.6,5.8-8.1c0.1,0.1,0.2,0.3,0.3,0.4C9.4,7.5,10.4,8,11.4,8h0.1 h2.2h0.1c2.1,0,3.9-1.7,3.9-3.9V4c0-1-0.4-2-1.1-2.8C15.9,0.5,15,0,13.9,0h-0.1h-2.2c-2.2-0.1-4,1.7-4,3.9V4C2,7,0.2,9.5,0,14.4 C-0.1,17.8,7.2,35,13.3,40.1c-0.3,1.4,0.2,2.9,1.5,3.8c2,1.2,4.3,2.1,6.7,2.4v2.4c0,1.5,0.9,2.7,2.2,3.2v9.4c0,3.1,1.9,8.9,8.9,8.9 c7.1,0,9-5.9,9-8.9c0-0.6,0.1-12.6,11-16c0.9,3.3,4,5.7,7.5,5.7c4.3,0,7.9-3.5,7.9-7.9C68,38.8,64.5,35.3,60.2,35.3z M39.9,4 c0,0.4-0.1,0.8-0.4,1c-0.3,0.3-0.6,0.4-1.1,0.4h-2.2c-0.4,0-0.8-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1l0,0c0,0,0,0,0-0.1 c0-0.4,0.1-0.8,0.4-1c0.3-0.3,0.6-0.4,1.1-0.4h2.2l0,0c0.4,0,0.7,0.1,1,0.4S39.9,3.5,39.9,4L39.9,4z M10.1,3.9c0-0.4,0.2-0.7,0.4-1 c0.3-0.3,0.6-0.4,1.1-0.4h2.3c0.4,0,0.7,0.2,1,0.4c0.3,0.3,0.4,0.6,0.4,1V4c0,0.4-0.2,0.7-0.4,1c-0.3,0.3-0.6,0.4-1.1,0.4h-2.3 c-0.4,0-0.7-0.2-1-0.4C10.2,4.7,10.1,4.4,10.1,3.9L10.1,3.9z M22.9,44c-2.4-0.2-4.7-0.9-6.7-2.2c-0.4-0.3-0.6-0.9-0.4-1.3 c0.2-0.3,0.5-0.5,0.9-0.5c0.2,0,0.3,0,0.5,0.1c2.4,1.5,5.1,2.2,7.9,2c2.8,0.1,5.5-0.6,7.9-2.1c0.2-0.1,0.5-0.2,0.7-0.1 c0.2,0.1,0.4,0.2,0.6,0.4v0.1c0.1,0.2,0.2,0.5,0.1,0.7s-0.2,0.4-0.4,0.6c-2,1.2-4.4,2-6.8,2.2c-0.6,0.1-1.1,0.6-1.1,1.2v3.5 c0,0.5-0.4,1-0.9,1s-1-0.4-1-1v-3.5C24,44.5,23.5,44,22.9,44z M60.2,48.5c-2.4,0-4.4-1.6-5.1-3.8c0.6-0.1,1.2-0.2,1.9-0.2 c0.5,1.3,1.8,2.1,3.2,2.1c1.9,0,3.5-1.5,3.5-3.5s-1.5-3.5-3.5-3.5c-1.5,0-2.7,0.9-3.2,2.3c-0.7,0.1-1.4,0.1-2,0.2 c0.5-2.5,2.6-4.4,5.3-4.4c3,0,5.4,2.4,5.4,5.4S63.1,48.5,60.2,48.5z M59.2,43.2c0-0.5,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1 S59.2,43.7,59.2,43.2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left card */}
          <div className="w-full lg:w-1/3 flex">
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-between w-full">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6 relative">
                  Our Services
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F5C754] rounded mt-2 block" />
                </h2>
                <div className="text-gray-500 text-sm leading-relaxed space-y-4 mb-8">
                  <p>
                    Driven by our global regulatory expertise and in-depth therapeutic knowledge, NKB Regovanta is a medical CRO offering only the most proven solutions to move your medical device through the development lifecycle as efficiently and cost-effectively as possible.
                  </p>
                  <p>
                    As a medical contract research organization, we are dedicated to helping you achieve accelerated, successful development and commercialization outcomes. Our offerings include medical device testing; regulatory, reimbursement and quality consulting; and clinical research services.
                  </p>
                </div>
              </div>
              <Button asChild className="btn-gradient w-full py-6 font-bold rounded-full mt-auto">
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Icon Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 h-full">
              {services.map((s, idx) => (
                <Link
                  key={idx}
                  to={s.href}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <span className="font-bold text-gray-900 text-xs uppercase tracking-wide group-hover:text-[hsl(195_65%_28%)] transition-colors">
                    {s.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- RESOURCES SECTION (with 3 side buttons + Main card) ---
export const ResourcesCTASection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('https://namsa.com/app/uploads/2020/07/Resources-CTA.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(195_65%_15%)]/85" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Left Column (3 Buttons) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
            <Link 
              to="/resources/resource-library" 
              className="flex items-center justify-between p-6 bg-white/10 border border-white/20 hover:bg-white/20 transition-all rounded-2xl text-white group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#F5C754] group-hover:text-[hsl(195_65%_15%)] transition-colors text-white">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">White Papers</span>
              </div>
              <ChevronRight className="w-6 h-6 text-[#F5C754] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/events" 
              className="flex items-center justify-between p-6 bg-white/10 border border-white/20 hover:bg-white/20 transition-all rounded-2xl text-white group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#F5C754] group-hover:text-[hsl(195_65%_15%)] transition-colors text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">Events & Webinars</span>
              </div>
              <ChevronRight className="w-6 h-6 text-[#F5C754] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              to="/resources/NKB Regovanta-navigators" 
              className="flex items-center justify-between p-6 bg-white/10 border border-white/20 hover:bg-white/20 transition-all rounded-2xl text-white group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl group-hover:bg-[#F5C754] group-hover:text-[hsl(195_65%_15%)] transition-colors text-white">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">Test Navigator</span>
              </div>
              <ChevronRight className="w-6 h-6 text-[#F5C754] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column (Resources Main Card) */}
          <div className="w-full lg:w-1/2 flex">
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-between w-full">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6 relative">
                  Resources
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F5C754] rounded mt-2 block" />
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Learn from the world’s leading medical CRO with complimentary access to our latest white papers, webinars, and other resources to learn proven strategies and best practices for successful medical device development and commercialization outcomes.
                </p>
              </div>
              <Button asChild className="btn-gradient w-full py-6 font-bold rounded-full mt-auto">
                <Link to="/resources">Browse All Resources</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- BLOG & NEWS FEED SECTION ---
export const LatestInsightsSection = () => {
  const blogs = [
    {
      date: "May 02, 2026",
      title: "Best Practices for MDR-Compliant Clinical Evaluations",
      excerpt: "Learn how to align clinical evaluations with MDR in our guide, featuring NKB Regovanta's expert insights and auditor feedback for medical device manufacturers.",
      href: "/resources/blog/mdd-to-mdr",
    },
    {
      date: "May 01, 2026",
      title: "Navigating the New MDCG Guidance Documents on CIP and IB",
      excerpt: "Discover key insights on the latest MDCG guidance for EU medical device clinical investigations, aiding in compliant CIP and IB development.",
      href: "/resources/blog/iso-14155",
    },
    {
      date: "April 17, 2026",
      title: "Understanding the ISO 18562:2024 Standards Update for Medical Devices",
      excerpt: "The updated ISO 18562 standards cover respiratory PPE and introduce aging/life cycle requirements. These changes aim to enhance safety evaluations.",
      href: "/resources/blog/iso-10993-1",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Card: Blog Main */}
          <div className="w-full lg:w-1/3 flex">
            <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-md flex flex-col justify-between w-full">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6 relative">
                  Blog
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#F5C754] rounded mt-2 block" />
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Always on the pulse of industry news, we interpret the latest regulatory guidelines and other medical device updates so you don’t have to. Learn from the world’s most trusted medical device CRO to stay up-to-date on recent news and what it means for your development plans.
                </p>
              </div>
              <Button asChild className="btn-gradient w-full py-6 font-bold rounded-full mt-auto">
                <Link to="/resources/blog">Access Now</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: News Feed */}
          <div className="w-full lg:w-2/3 flex flex-col justify-between">
            <div className="grid md:grid-cols-3 gap-6 h-full">
              {blogs.map((b, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold text-[#C08518] block mb-3 uppercase tracking-wider">{b.date}</span>
                    <h3 className="font-bold text-gray-900 mb-3 text-base leading-snug hover:text-[hsl(195_65%_28%)] transition-colors">
                      <Link to={b.href}>{b.title}</Link>
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-4">{b.excerpt}</p>
                  </div>
                  <Link 
                    to={b.href} 
                    className="flex items-center gap-1 text-xs font-bold text-[hsl(195_65%_28%)] hover:gap-2 transition-all mt-6 pt-4 border-t border-gray-50"
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- HAVE QUESTIONS SECTION ---
export const WhyNKBSection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative text-white"
      style={{ backgroundImage: `url('https://namsa.com/app/uploads/2020/07/Contact-CTA.jpg')` }}
    >
      {/* Dark Teal overlay */}
      <div className="absolute inset-0 bg-[hsl(195_65%_15%)]/85" />

      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-wide">HAVE QUESTIONS?</h2>
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
          Let NKB Regovanta's medical device development experts guide you in the right direction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white text-white hover:bg-white hover:text-[hsl(195_65%_15%)] font-bold text-base bg-transparent">
            <Link to="/about/faq">Visit FAQ</Link>
          </Button>
          <Button asChild className="rounded-full px-8 py-6 btn-gradient font-bold text-base shadow-lg border-transparent">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER CTAS (Newsletter & Portals) ---
export const ClientStoriesSection = () => {
  return (
    <>
      {/* Newsletter Bar */}
      <section className="bg-teal-700 py-10 border-b border-teal-800">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-xl md:text-2xl font-black text-white text-center md:text-left">
            Subscribe to NKB Regovanta Events & Intelligence Newsletter
          </h3>
          <Button asChild className="btn-gradient px-8 py-6 font-bold rounded-full text-white">
            <a href="#subscribe">Sign Up</a>
          </Button>
        </div>
      </section>

      {/* Portals block */}
      <section className="bg-gray-100 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            
            {/* Join Network */}
            <div className="md:pr-10 lg:pr-16 md:border-r border-gray-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Join the NKB Network</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  Update your profile, post comments on the blog; sign-up for events, webinars and classes; receive email alerts and more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                <Button asChild className="btn-gradient px-6 rounded-full font-bold">
                  <Link to="/locations-contact">Register</Link>
                </Button>
                <p className="text-xs text-gray-400">
                  Already have an account? <br /> Please <Link to="/login" className="underline hover:text-[hsl(195_65%_28%)]">Login Here</Link>
                </p>
              </div>
            </div>

            {/* Client Portal */}
            <div className="md:pl-10 lg:pl-16">
              <h3 className="text-2xl font-black text-gray-900 mb-3">NKB Client Portal</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Login to the NKB Client Portal for sample submissions, testing reports, project tracking, and more.
              </p>
              <Button asChild className="btn-gradient px-6 rounded-full font-bold">
                <a href="https://namsa.com/client-portals/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Client Portal <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export const TherapeuticAreasTicker = () => {
  const items = [
    "CE Marking", "STED", "Presub", "Q sub", "Technical documentation",
    "MDD to MDR transition", "Regulatory Strategy", "Product Classification",
    "Class II medical device", "SaMD", "Notified Body", "MDSAP"
  ];
  return (
    <div className="bg-[hsl(195_65%_15%)] py-4 border-y border-white/10 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="mx-8 text-sm font-bold uppercase tracking-wider text-[#F5C754]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export const ExpertiseCTASection = ResourcesCTASection;

