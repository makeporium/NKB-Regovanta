import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <h2 className="text-2xl font-black text-[hsl(195_65%_20%)] mb-5 pb-3 border-b-2 border-[#F5C754] inline-block">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed space-y-3 mt-4">{children}</div>
  </div>
);

const PreclinicalPage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-[88px]">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[hsl(195_65%_20%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563461661026-49631dd5d68e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <p className="text-[#F5C754] text-xs font-bold uppercase tracking-widest mb-4">— &nbsp;&nbsp;Preclinical Research Services&nbsp;&nbsp; —</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-3xl mb-6">
            INNOVATIVE SURGICAL INSTRUMENTATION AND CERTIFIED MEDICAL EXPERTS TO FULLY SUPPORT YOUR PRECLINICAL, INTERVENTIONAL AND SURGICAL RESEARCH NEEDS
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10">
            Innovative surgical instrumentation and certified medical experts to fully support your preclinical, interventional and surgical research needs.
          </p>
          <Button asChild className="btn-gradient rounded-full px-8 py-6 font-bold text-base">
            <Link to="/locations-contact">Contact Us</Link>
          </Button>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10 mt-14 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "1,100", label: "Annual Preclinical Projects" },
            { value: "6", label: "Cath Labs" },
            { value: "250", label: "Annual GLP Surgical Research Projects" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <p className="text-3xl font-black text-[#F5C754]">{s.value}</p>
              <p className="text-xs text-white/70 uppercase tracking-wide mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-5xl py-16">
          <Section title="Our Preclinical Research Services Support All Model Types, Treatments and Implant Requirements">
            <p>When it comes to the successful preclinical testing of medical devices, experience matters. NKB Regovanta has the largest depth of therapeutic expertise of any development partner on the planet — backed by over 50 years in business. That equates to unparalleled preclinical laboratory support for sponsors in the United States, United Kingdom, Ireland, Spain, France, Germany and many other countries worldwide.</p>
            <p>NKB Regovanta's preclinical research services support all model types, treatments and implant requirements, including:</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
              {["Cardiovascular","Dental","Dermal","Electrophysiology","Gastrointestinal","Neuromodulation","Orthopedics","Pulmonary","Urogenital","Wound Healing"].map((area) => (
                <div key={area} className="flex items-center gap-1.5 text-sm">
                  <ArrowRight className="w-3 h-3 text-[#F5C754] shrink-0" />
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-4">Our highly sought-after global teams are experts at helping utilize data to bridge preclinical safety endpoints to proposed clinical endpoints, allowing clinical labs to standardize measurements and obtain expert interpretations of results.</p>
          </Section>

          <Section title="Bioskills Cadaver and Simulation Labs">
            <p>Performing human cadaver studies since 2006, NKB Regovanta is an approved human cadaver lab site authorized to perform device evaluations. We provide whole body cadavers as well as partial cadavers or various tissues. Combining our access to tissues with our equipment and expertise allows us to provide device evaluations at the highest levels.</p>
            <p>The FDA's expectations for physician training and human factors testing within the medical device arena are continuing to grow. NKB Regovanta's facilities can fulfill this need, as well as host or train your internal trainers with expertise from our staff.</p>
          </Section>

          <Section title="Imaging Equipment">
            <ul className="space-y-2">
              {[
                "Dual Source Computed Tomography (Siemens Somatom® Definition Flash)",
                "Fluoroscopy (Siemens AXIOM Artis Zee™ Digital Cath Labs, Siemens Avantic™ and Cios mobile c-arms)",
                "Intracardiac (ICE) and Duplex Ultrasound (Siemens Cypress and Sequoia™)",
                "Intravascular Ultrasound (IVUS) (Boston Scientific POLARIS™)",
                "Optical Coherence Tomography (OCT) (Abbot Ilumien Optis)",
                "Stryker and Olympus Endoscopy Towers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#F5C754] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Lab Space">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Three (3) fully-equipped operating suites",
                "Six (6) hospital-grade digital cath labs",
                "Observation rooms",
                "Two-way communications",
                "Video cameras and Quadview HD video recording systems",
                "Sponsor suite for on-site viewing of procedures",
                "Webcasting and virtual viewing capabilities",
                "2-way communication for off-site monitoring",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5C754] mt-0.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Interventional and Surgical Research">
            <p>NKB Regovanta is proud to offer interventional and surgical research for a variety of medical devices worldwide. Working in state-of-the-art laboratories, our highly-trained experts utilize a broad range of trusted In Vivo models and analysis tools, including six (6) Siemens Cath Labs, a 128-slice CT Scanner, and more, to deliver accelerated, cost-efficient results.</p>
            <p>All of NKB Regovanta's surgical suites are maintained to hospital standards. Every suite features temperature and humidity control, with HEPA filtration for a full aseptic surgical field.</p>
            <p>NKB Regovanta has extensive experience in the following interventional models and device product testing:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {["Cadaveric Non-Clinical Testing","Cardiac Surgery","Coronary and Peripheral","Dental","Dermal Wound Healing","Drug Coated Balloons","Electrophysiology","Embolization Devices","Endoscopy","Gastrointestinal and Urogenital","Heart Valves (Transcatheter and Surgical)","Neuromodulation","Orthopedic and Bone Healing","Physician Training","Pulmonary Therapies","Specialty Pathology Services","Stents/Graft","Tissue Engineering","Thrombogenicity Testing"].map((area) => (
                <div key={area} className="flex items-start gap-1.5 text-sm">
                  <ArrowRight className="w-3 h-3 text-[#F5C754] mt-0.5 shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Non-GLP Preclinical Surgical Research">
            <p>Non-GLP studies at an early stage in the medical device development process can minimize the risk of failure during preclinical studies and help Sponsors decide next steps in their research, development and testing processes.</p>
            <p>Non-GLP studies receive less regulatory scrutiny and do not have the same archive and report standard requirements as GLP studies, making them a cost-effective option. As a result, non-GLP studies can also be scheduled and carried out more quickly due to shorter testing durations, smaller sample sizes and faster report delivery.</p>
          </Section>

          <Section title="Pharmacology and Toxicology">
            <p>NKB Regovanta offers an array of services for drug discovery programs including efficacy studies, pharmacokinetic (PK) assessments, as well as discovery and GLP toxicology services. We are pleased to offer these services in both rodent and various models, while combining our bioanalytical and histopathology capabilities to centralize your research in our state-of-the-art facilities.</p>
            <p>With a focus on pain pharmacology, NKB Regovanta brings years of expertise in behavioral pharmacology to bear on your projects, helping you prioritize leads and select development candidates.</p>
          </Section>

          <Section title="Pathology">
            <p>Pathology is the gold standard for the evaluation of medical device performance and safety. The NKB Regovanta pathology lab is designed for high volume to meet and exceed all of your tissue and device collection requirements.</p>
            <p>The NKB Regovanta pathology lab is operated by Board Certified Histotechnicians and has Board Certified Veterinary, MD and PhD pathologists who oversee gross necropsies, interpret histopathology slides and write reports evaluating the safety of products.</p>
            <div className="mt-4">
              <h3 className="font-bold text-[hsl(195_65%_20%)] mb-2">Gross Pathology Capabilities</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Post-Mortem Exams","Large/Small in vivo models","Evans blue staining","Ex-vivo perfusion fixation","Fluorogram guided tissue harvesting","In-situ perfusion fixation","Microdissection","Pharmacokinetic sampling","TTC in-situ and ex-vivo staining"].map((c) => (
                  <div key={c} className="flex items-start gap-1.5 text-sm">
                    <ArrowRight className="w-3 h-3 text-[#F5C754] mt-0.5 shrink-0" />{c}
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section title="Usability Testing — Human Factors">
            <p>Human Factors Usability Testing is not just a regulatory requirement. Incorporating the User Experience in each phase of your product development is essential for safety. Unlock the potential of your product with our comprehensive usability testing services.</p>
            <p>Our expert team specializes in guiding key design and product development decisions, ensuring a seamless user experience and paving the way for commercial success. From MedTech to IVD therapeutic areas, we offer expertise in designing, implementing, and analyzing usability tests that meet global standards.</p>
          </Section>

          <div className="bg-[hsl(195_65%_20%)] rounded-2xl p-10 text-white text-center mt-10">
            <h2 className="text-2xl font-black mb-4">Ready to Begin Your Preclinical Program?</h2>
            <p className="text-white/70 mb-6">Contact NKB Regovanta's expert preclinical research team today.</p>
            <Button asChild className="btn-gradient rounded-full px-8 py-3 font-bold">
              <Link to="/locations-contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PreclinicalPage;
