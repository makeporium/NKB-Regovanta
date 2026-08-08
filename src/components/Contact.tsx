import { useState } from "react";
import { Send, MessageCircle, Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
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
    location: "",
    message: "",
  });

  const contactInfo = [
    { icon: MapPin, label: "Global Headquarters", value: "Building No 20, Awadh KunJ, FARIDI NAGAR, Cimap, Lucknow, Lucknow, Uttar Pradesh, India, 226015" },
    { icon: Phone, label: "Phone", value: "8861375067" },
    { icon: Mail, label: "Email", value: "contact@nkbregovanta.com" },
    { icon: Clock, label: "Business Hours", value: "Mon - Fri: 8:00 AM - 5:00 PM EST" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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
          message: `Job Title: ${formData.jobTitle}\nCompany: ${formData.company}\nCompany Size: ${formData.companySize}\nPrimary Focus: ${formData.primaryFocus}\nLocation: ${formData.location}\n\nMessage:\n${formData.message}`,
          subject: `New Contact Request from ${formData.firstName} ${formData.lastName}`,
          from_name: "NKB Regovanta Website",
        }),
      });
      const result = await response.json();
      if (result.success) {
        toast({ title: "Request Received!", description: "Thank you for reaching out. A NKB Regovanta representative will follow up as quickly as possible." });
        setFormData({ firstName: "", lastName: "", email: "", jobTitle: "", company: "", companySize: "", primaryFocus: "", location: "", message: "" });
      } else {
        toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please check your connection and try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectClass = "w-full h-12 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#F5C754] focus:ring-[#F5C754] px-4 text-gray-700 appearance-none cursor-pointer";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(195_65%_20%)] via-[#F5C754] to-[hsl(195_65%_20%)]" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-[hsl(195_65%_20%)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#F5C754]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[hsl(195_65%_20%)]/5 text-[hsl(195_65%_20%)] font-bold text-xs uppercase tracking-widest mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Let's Talk About <span className="text-[#F5C754]">Your Project</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ask a question or request a meeting with a NKB Regovanta expert to discuss your specific project. We will follow up as quickly as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[hsl(195_65%_20%)]/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[hsl(195_65%_20%)]" />
              </div>
              <div>
                <h4 className="text-xl font-black text-[hsl(195_65%_20%)]">Let's Talk About Your Project</h4>
                <p className="text-sm font-bold text-gray-500">We will follow up as quickly as possible.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name + Last Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-gray-700">First Name *</label>
                  <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:border-[#F5C754] focus:ring-[#F5C754]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-gray-700">Last Name/Surname *</label>
                  <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:border-[#F5C754] focus:ring-[#F5C754]" />
                </div>
              </div>

              {/* Business Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700">Business Email *</label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@company.com" required className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:border-[#F5C754] focus:ring-[#F5C754]" />
              </div>

              {/* Job Title + Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="jobTitle" className="text-sm font-bold text-gray-700">Job Title *</label>
                  <Input id="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Your title" required className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:border-[#F5C754] focus:ring-[#F5C754]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-gray-700">Company *</label>
                  <Input id="company" value={formData.company} onChange={handleChange} placeholder="Company name" required className="h-12 rounded-xl bg-gray-50 border-gray-200 focus:border-[#F5C754] focus:ring-[#F5C754]" />
                </div>
              </div>

              {/* Company Size */}
              <div className="space-y-2">
                <label htmlFor="companySize" className="text-sm font-bold text-gray-700">Company Size *</label>
                <select id="companySize" value={formData.companySize} onChange={handleChange} required className={selectClass}>
                  <option value="">-- Please Select --</option>
                  <option value="1-10">1–10 Employees</option>
                  <option value="11-50">11–50 Employees</option>
                  <option value="51-200">51–200 Employees</option>
                  <option value="201-1000">201–1,000 Employees</option>
                  <option value="1001+">1,001+ Employees</option>
                </select>
              </div>

              {/* Primary Focus */}
              <div className="space-y-2">
                <label htmlFor="primaryFocus" className="text-sm font-bold text-gray-700">What is the Primary Focus of Your Inquiry? *</label>
                <select id="primaryFocus" value={formData.primaryFocus} onChange={handleChange} required className={selectClass}>
                  <option value="">-- Please Select --</option>
                  <option value="regulatory">Regulatory Consulting</option>
                  <option value="preclinical">Preclinical Research</option>
                  <option value="clinical">Clinical Research / Trials</option>
                  <option value="testing">Medical Device Testing</option>
                  <option value="startup">Startup Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Where Based */}
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-bold text-gray-700">Where Are You Based? *</label>
                <select id="location" value={formData.location} onChange={handleChange} required className={selectClass}>
                  <option value="">-- Please Select --</option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia-pacific">Asia Pacific</option>
                  <option value="japan">Japan</option>
                  <option value="middle-east-africa">Middle East & Africa</option>
                  <option value="latin-america">Latin America</option>
                </select>
              </div>

              {/* How can we help */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700">How can we help? *</label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={3} required className="rounded-xl resize-none bg-gray-50 border-gray-200 focus:border-[#F5C754] focus:ring-[#F5C754]" />
              </div>

              <p className="text-[11px] text-gray-400 leading-relaxed">
                By choosing to submit your information to contact NKB Regovanta, you are providing NKB Regovanta consent to process and store your information on the NKB Regovanta Network. For additional information, please visit our Privacy Policy.
              </p>

              <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-gradient-to-r from-[#F5C754] to-[#C08518] hover:from-[#F0B83A] hover:to-[#A7740D] text-white text-lg font-black rounded-xl shadow-lg transition-all" size="lg">
                {isSubmitting ? "Sending..." : (<><Send className="w-5 h-5 mr-2" />Submit Request</>)}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[hsl(195_65%_20%)] rounded-3xl p-8 shadow-2xl text-white">
              <h4 className="text-xl font-black mb-6 text-[#F5C754]">Contact Information</h4>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#F5C754]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white mb-1">{item.label}</h5>
                      <p className="text-sm text-white/70 whitespace-pre-line leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F5C754] rounded-3xl p-8 shadow-lg text-[hsl(195_65%_20%)] text-center">
              <h4 className="text-lg font-black mb-2">Need immediate assistance?</h4>
              <p className="text-sm font-bold opacity-80 mb-4">Call our global hotline</p>
              <a href="tel:+918861375067" className="text-2xl font-black hover:underline">8861375067</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;