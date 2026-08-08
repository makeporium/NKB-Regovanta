import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-muted">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-[88px] pb-16 min-h-[70vh]">
        <div className="text-center px-4 max-w-lg">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">This page is currently being built. Please check back soon.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="text-primary underline hover:text-primary/90 font-medium cursor-pointer"
          >
            ← Go Back to previous page
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
