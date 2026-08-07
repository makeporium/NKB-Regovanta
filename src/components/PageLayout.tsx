import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  heroTitle: string;
  heroSubtitle?: string;
  heroTag?: string;
}

const PageLayout = ({ children, breadcrumbs, heroTitle, heroSubtitle, heroTag }: PageLayoutProps) => (
  <div className="min-h-screen">
    <Header />
    {/* Page Hero */}
    <section className="bg-[hsl(195_65%_28%)] pt-36 pb-14 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {b.href ? (
                  <Link to={b.href} className="hover:text-white transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-white/80">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {heroTag && (
          <p className="text-xs font-bold uppercase tracking-widest text-[#F5C754] mb-3">{heroTag}</p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white max-w-3xl leading-tight mb-4">{heroTitle}</h1>
        {heroSubtitle && (
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">{heroSubtitle}</p>
        )}
      </div>
    </section>

    <main>{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
