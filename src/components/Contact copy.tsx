import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background relative">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 category-bar" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
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
          {/* Contact Form - Takes more space */}
          <div className="lg:col-span-3 glass-card p-8 lg:p-10">
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
                  <Input id="name" placeholder="Your name" required className="h-12 rounded-xl bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="h-12 rounded-xl bg-secondary border-border" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+91 xxxxxxxxxx" className="h-12 rounded-xl bg-secondary border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-foreground">
                    Service Required
                  </label>
                  <Select>
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
                <Input id="company" placeholder="Your company name" className="h-12 rounded-xl bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your regulatory needs..."
                  rows={4}
                  required
                  className="rounded-xl resize-none bg-secondary border-border"
                />
              </div>
              <Button type="submit" className="w-full h-14 btn-gradient text-lg font-semibold rounded-xl" size="lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8">
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

            {/* Quick Info Card */}
            <div className="btn-gradient rounded-3xl p-8 relative overflow-hidden">
              {/* Decoration */}
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
