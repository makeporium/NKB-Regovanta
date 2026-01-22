import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    {
      label: "For Importer",
      href: "#services",
      dropdown: [
        { label: "Medical Device Import License", href: "#services" },
        { label: "IVD Import License", href: "#services" },
        { label: "BIS Certification", href: "#services" },
        { label: "Indian Authorised Agent", href: "#services" },
      ],
    },
    {
      label: "For Manufacturer",
      href: "#services",
      dropdown: [
        { label: "Medical Device Manufacturing", href: "#services" },
        { label: "IVD Manufacturing License", href: "#services" },
        { label: "Quality Systems (ISO 13485)", href: "#services" },
        { label: "US FDA 510(k)", href: "#services" },
      ],
    },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary border-b border-border/50 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-end gap-6 text-sm">
          <a href="tel:+917672005050" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +91 7672005050
          </a>
          <a href="mailto:contact@regulamed.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            contact@regulamed.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="glass-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-2xl font-extrabold text-gradient">Regula</span>
                <span className="text-2xl font-extrabold text-foreground">Med</span>
              </div>
              <div className="hidden sm:block border-l border-border pl-2 ml-1">
                <span className="block text-xs text-muted-foreground leading-tight">Your Regulatory</span>
                <span className="block text-xs text-primary font-semibold leading-tight">Partner</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card border-border/80">
                      {link.dropdown.map((item) => (
                        <DropdownMenuItem key={item.label} asChild className="hover:bg-primary/20 focus:bg-primary/20 hover:text-primary focus:text-primary cursor-pointer">
                          <a href={item.href} className="text-foreground hover:text-primary transition-colors">{item.label}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="btn-gradient">
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <Button asChild className="w-full btn-gradient">
                    <a href="#contact">Get a Quote</a>
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
