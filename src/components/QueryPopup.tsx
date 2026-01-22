import { useState, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const QueryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasShown = sessionStorage.getItem("queryPopupShown");
      if (!hasShown) {
        setIsOpen(true);
        sessionStorage.setItem("queryPopupShown", "true");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.query.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your query.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-+()]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link as fallback (since we don't have backend)
      const subject = encodeURIComponent(`Query from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nQuery:\n${formData.query}`
      );
      
      window.location.href = `mailto:makeporium@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening email client",
        description: "Your default email client will open to send the query.",
      });
      
      setIsOpen(false);
      setFormData({ name: "", email: "", phone: "", query: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit query. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-accent hover:bg-accent/90 rounded-full shadow-orange flex items-center justify-center transition-all hover:scale-110 group"
        aria-label="Open query form"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
          ?
        </span>
      </button>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md mx-4 rounded-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold">Have a Query?</DialogTitle>
                <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
              </div>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="popup-name" className="text-sm font-semibold text-foreground">
                Your Name *
              </label>
              <Input
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="h-11 rounded-xl"
                maxLength={100}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="popup-email" className="text-sm font-semibold text-foreground">
                Email Address *
              </label>
              <Input
                id="popup-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="h-11 rounded-xl"
                maxLength={255}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="popup-phone" className="text-sm font-semibold text-foreground">
                Phone Number *
              </label>
              <Input
                id="popup-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 xxxxxxxxxx"
                className="h-11 rounded-xl"
                maxLength={20}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="popup-query" className="text-sm font-semibold text-foreground">
                Your Query *
              </label>
              <Textarea
                id="popup-query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Tell us about your regulatory needs..."
                rows={3}
                className="rounded-xl resize-none"
                maxLength={1000}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-orange rounded-xl"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Query
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Your query will be sent to our team at makeporium@gmail.com
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QueryPopup;
