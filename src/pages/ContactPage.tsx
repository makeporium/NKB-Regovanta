import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const offices = [
  { city: "Mumbai, India", address: "123 Regulatory Plaza, Bandra Kurla Complex, Mumbai 400051", phone: "+91 7672005050", email: "contact@nkbregovanta.com", type: "Headquarters" },
  { city: "New Delhi, India", address: "456 MedTech Hub, Connaught Place, New Delhi 110001", phone: "+91 7672005051", email: "delhi@nkbregovanta.com", type: "Regional Office" },
  { city: "Brussels, Belgium", address: "789 EU Regulatory Centre, Avenue Louise, Brussels 1050", phone: "+32 2 000 0000", email: "europe@nkbregovanta.com", type: "European Office" },
];

const serviceAreas = [
  "Regulatory & Strategic Consulting",
  "US FDA Consulting (510k, PMA, Q-Sub)",
  "EU MDR / IVDR (CE Marking, STED, CER)",
  "Biological Safety Consulting",
  "Human Factors & Usability",
  "Quality Management (ISO 13485, MDSAP)",
  "Preclinical Research",
  "Clinical Trial Management",
  "Medical Device Testing",
  "Other / General Inquiry",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    companySize: "",
    primaryFocus: "",
    based: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "1de03288-07d7-4d98-9b81-14a4c86207bc",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Job Title: ${formData.jobTitle}\nCompany: ${formData.company}\nCompany Size: ${formData.companySize}\nPrimary Focus: ${formData.primaryFocus}\nBased In: ${formData.based}\n\nMessage:\n${formData.message}`,
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          from_name: "NKB Regovanta Website",
        }),
      });
      const result = await response.json();
      if (result.success) {
        toast({ title: "Message sent successfully!", description: "One of our regulatory experts will contact you within 1 business day." });
        setFormData({ firstName: "", lastName: "", email: "", jobTitle: "", company: "", companySize: "", primaryFocus: "", based: "", message: "" });
      } else {
        toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please check your connection and try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[hsl(195_65%_28%)] pt-36 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/80">Contact Us</span>
          </nav>
          <p className="text-sm font-bold uppercase tracking-widest text-[#F5C754] mb-3">Contact NKB Regovanta</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white max-w-3xl leading-tight mb-4">
            Let's Discuss Your Device's Regulatory Path
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
            Our regulatory experts are ready to assess your project and develop a tailored strategy — whether you're at concept stage or facing an FDA deficiency letter.
          </p>
        </div>
      </section>

      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-black text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">First Name *</label>
                      <Input name="firstName" value={formData.firstName} onChange={handleChange} className="h-11 rounded-xl" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">Last Name/Surname *</label>
                      <Input name="lastName" value={formData.lastName} onChange={handleChange} className="h-11 rounded-xl" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">Business Email *</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} className="h-11 rounded-xl" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">Job Title *</label>
                      <Input name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="h-11 rounded-xl" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">Company *</label>
                      <Input name="company" value={formData.company} onChange={handleChange} className="h-11 rounded-xl" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">Company Size *</label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full h-11 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">–Please Select–</option>
                        <option value="1-50">1-50 Employees</option>
                        <option value="51-200">51-200 Employees</option>
                        <option value="201-1000">201-1000 Employees</option>
                        <option value="1001+">1001+ Employees</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">What is the Primary Focus of Your Inquiry? *</label>
                      <select
                        name="primaryFocus"
                        value={formData.primaryFocus}
                        onChange={handleChange}
                        className="w-full h-11 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">–Please Select–</option>
                        <option value="Regulatory Consulting">Regulatory Consulting</option>
                        <option value="Clinical Research">Clinical Research</option>
                        <option value="Preclinical Research">Preclinical Research</option>
                        <option value="Testing Services">Testing Services</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700">Where Are You Based? *</label>
                      <select
                        name="based"
                        value={formData.based}
                        onChange={handleChange}
                        className="w-full h-11 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">–Please Select–</option>
                        <option value="North America">North America</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700">How can we help? *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="rounded-xl resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 btn-gradient rounded-xl text-base font-semibold"
                  >
                    {isSubmitting ? "Sending..." : (
                      <><Send className="w-4 h-4 mr-2" /> Submit</>
                    )}
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="underline hover:text-[hsl(195_65%_28%)]">Privacy Policy</a>.
                    We typically respond within 1 business day.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-5">


              {/* Quick Links */}
              <div className="bg-[hsl(195_65%_28%)] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Explore Our Services</h3>
                <div className="space-y-2">
                  {[
                    ["US FDA Consulting", "/services/us-fda"],
                    ["EU MDR & IVDR", "/services/eu-mdr"],
                    ["Clinical Trials", "/services/clinical/trial-management"],
                    ["Biocompatibility Testing", "/services/testing/biocompatibility"],
                    ["ISO 13485 / MDSAP", "/services/quality-management"],
                  ].map(([label, href]) => (
                    <Link key={label} to={href} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-[#F5C754]" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
