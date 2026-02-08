import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      label: "Office Address",
      value: "123 Regulatory Plaza, Suite 500\nMedical District, Mumbai 400001",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7672005050",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@nkbregovanta.com",
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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
          service: formData.service,
          company: formData.company,
          message: formData.message,
          subject: `Contact Form: ${formData.name} - ${formData.service}`,
          from_name: "NKB Regovanta Contact Page",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We'll contact you at makeporium@gmail.com soon.",
        });
        // Reset form
        setFormData({ name: "", email: "", phone: "", service: "", company: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-1 category-bar" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch With <span className="text-gradient">Our Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to navigate your regulatory journey? Contact our team today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 glass-card p-8 lg:p-10 shadow-card hover:shadow-elevated transition-all">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Send Us a Message</h4>
                <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Full Name *
                  </label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    required 
                    className="h-12 rounded-xl bg-secondary border-border" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    required 
                    className="h-12 rounded-xl bg-secondary border-border" 
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 xxxxxxxxxx" 
                    className="h-12 rounded-xl bg-secondary border-border" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-foreground">
                    Service Required
                  </label>
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger className="h-12 rounded-xl bg-secondary border-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="glass-dark border-border">
                      <SelectItem value="import">Import License</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing License</SelectItem>
                      <SelectItem value="fda">US FDA Submission</SelectItem>
                      <SelectItem value="eu">EU MDR Compliance</SelectItem>
                      <SelectItem value="clinical">Clinical Trials</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-foreground">
                  Company Name
                </label>
                <Input 
                  id="company" 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name" 
                  className="h-12 rounded-xl bg-secondary border-border" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your regulatory needs..."
                  rows={4}
                  required
                  className="rounded-xl resize-none bg-secondary border-border"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 btn-gradient text-lg font-semibold rounded-xl" 
                size="lg"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 shadow-card hover:shadow-elevated transition-all">
              <h4 className="text-xl font-bold mb-6 text-foreground">Contact Information</h4>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="whitespace-pre-line font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="btn-gradient rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <h4 className="text-xl font-bold mb-3 text-accent-foreground">Need Urgent Assistance?</h4>
                <p className="text-accent-foreground/80 mb-6">
                  For urgent regulatory queries, call us directly or request a callback from our experts.
                </p>
                <Button variant="secondary" className="w-full h-12 font-semibold bg-background/20 hover:bg-background/30 text-accent-foreground border-0">
                  <Phone className="w-4 h-4 mr-2" />
                  Request Callback
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;