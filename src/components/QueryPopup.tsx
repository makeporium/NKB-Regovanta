import { useState, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";
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
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.query.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Sending data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1de03288-07d7-4d98-9b81-14a4c86207bc",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.query,
          subject: `New Inquiry from ${formData.name}`,
          from_name: "NKB Regovanta Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "We will get back to you at makeporium@gmail.com soon.",
        });
        setIsOpen(false);
        setFormData({ name: "", email: "", phone: "", query: "" });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please check your connection and try again.",
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-accent hover:bg-accent/90 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
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
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 btn-gradient rounded-xl"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Query
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QueryPopup;