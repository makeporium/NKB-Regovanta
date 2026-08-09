const fs = require('fs');
const path = require('path');

const filesToUpdateBreadcrumbs = ['services.usa.tsx', 'services.eu.tsx', 'services.uk.tsx', 'services.canada.tsx'];

const breadcrumbOld = `<div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">`;

const breadcrumbNew = `<div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">`;

filesToUpdateBreadcrumbs.forEach(f => {
    const filePath = path.join('src', 'routes', f);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(breadcrumbOld)) {
        content = content.replace(breadcrumbOld, breadcrumbNew);
        fs.writeFileSync(filePath, content);
        console.log(`Updated breadcrumbs in ${f}`);
    }
});

// Now for process flows
const processes = {
    'services.usa.tsx': `<LinearFlow steps={[
                            {title: "Classification of Device"},
                            {title: "Identification of QSR Requirements"},
                            {title: "Predicate Device Identification"},
                            {title: "Gap Analysis of Source Documents"},
                            {title: "Compilation of Technical File"},
                            {title: "Creation And Validation of E-Copies"},
                            {title: "Submission of Application"},
                            {title: "US FDA Approval"},
                            {title: "Appointment of US Agent"},
                            {title: "Establishment Registration and Device Listing"},
                            {title: "Post-Approval Activities and Compliance"}
                        ]} />`,
    'services.eu.tsx': `<LinearFlow steps={[
                            { title: "Product classification as per EUMDR & EU IVDR" },
                            { title: "Technical file compilation as per Annex II & III of EUMDR & EUIVDR" },
                            { title: "Draft EU DoC" },
                            { title: "Identify NANDO registered EU NB for class Im, Ir, IIa, IIb & III" },
                            { title: "Guidance through CE certification" },
                            { title: "Affix CE to your device" },
                            { title: "Support in registering your device on EUDAMED" },
                            { title: "Maintain compliance with Post market activities" }
                        ]} />`,
    'services.uk.tsx': `<LinearFlow steps={[
                            { title: "Determine MHRA Classification", desc: "Identify UK device classification." },
                            { title: "Appoint UK Responsible Person", desc: "Required for manufacturers outside the UK." },
                            { title: "UKCA Marking Readiness", desc: "Ensure technical documentation meets UK MDR 2002 requirements." },
                            { title: "Compile Technical File", desc: "Prepare Declaration of Conformity and supporting evidence." },
                            { title: "Submit via DORS", desc: "Register device through MHRA's Device Online Registration System." },
                            { title: "Registration Confirmation", desc: "Receive MHRA confirmation letter allowing market entry." }
                        ]} />`,
    'services.canada.tsx': `<SplitFlow 
                            title="Device Classification"
                            leftTitle="Class I"
                            leftSteps={["Establish QMS procedures", "MDEL Application"]}
                            rightTitle="Class II, III, IV"
                            rightSteps={["MDSAP Certification", "MDL Application"]}
                            bottomSteps={["Evaluation", "Approval"]}
                        />`,
    'services.india.tsx': `<LinearFlow steps={[
                            { title: "Determine Device Classification", desc: "Identify if the device falls under Class A, B, C, or D based on CDSCO rules." },
                            { title: "Appoint Authorized Indian Agent", desc: "Mandatory for foreign manufacturers to appoint a licensed local representative." },
                            { title: "Prepare Regulatory Dossier", desc: "Compile technical documents, clinical data, and quality certificates." },
                            { title: "Submit via SUGAM Portal", desc: "Upload dossier and pay required regulatory fees." },
                            { title: "CDSCO Review & Clarifications", desc: "Respond to technical queries from the Central Licensing Authority." },
                            { title: "Import License Approval", desc: "Grant of MD-15 Import License allowing commercialization." }
                        ]} />`,
    'services.australia.tsx': `<LinearFlow steps={[
                            { title: "TGA Classification", desc: "Determine device class (I, IIa, IIb, III, AIMD)." },
                            { title: "Appoint Australian Sponsor", desc: "Mandatory local representative who assumes legal liability." },
                            { title: "Conformity Assessment", desc: "Leverage existing CE/FDA approvals or undergo TGA assessment." },
                            { title: "Compile Technical Documentation", desc: "Ensure documentation aligns with Essential Principles." },
                            { title: "Submit ARTG Inclusion Application", desc: "Lodge application via TGA Business Services (TBS) portal." },
                            { title: "ARTG Certificate Issued", desc: "Device is included in the Australian Register of Therapeutic Goods." }
                        ]} />`,
    'services.brazil.tsx': `<LinearFlow steps={[
                            { title: "ANVISA Classification", desc: "Identify risk class (I, II, III, IV) per RDC 751/2022." },
                            { title: "Appoint BRH", desc: "Appoint a Brazilian Registration Holder." },
                            { title: "BGMP Certification", desc: "Mandatory for Class III and IV devices." },
                            { title: "Dossier Preparation", desc: "Compile technical file translated into Brazilian Portuguese." },
                            { title: "ANVISA Submission", desc: "Submit via Notificação (Class I/II) or Registro (Class III/IV)." },
                            { title: "Approval & Publication", desc: "Registration published in the Diário Oficial da União (DOU)." }
                        ]} />`,
    'services.uae.tsx': `<LinearFlow steps={[
                            { title: "Classification" },
                            { title: "Appointing Local Representative" },
                            { title: "Manufacturing Site Registration" },
                            { title: "Technical File Compilation" },
                            { title: "Application Submission" },
                            { title: "Device Registration" },
                            { title: "Review And Approval" }
                        ]} />`
};

for (const [file, replacement] of Object.entries(processes)) {
    const filePath = path.join('src', 'routes', file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if we already injected LinearFlow/SplitFlow import
    if (!content.includes('ProcessFlow')) {
        let importStatement = 'import { LinearFlow } from "@/components/site/ProcessFlow";\n';
        if (file === 'services.canada.tsx') {
            importStatement = 'import { SplitFlow } from "@/components/site/ProcessFlow";\n';
        }
        content = content.replace('import { CTABand }', `${importStatement}import { CTABand }`);
    }

    // Replace the diagram div block. We find <div class="bg-blue-50/50... min-h-[400px]">...</div>
    // Using a regex to match the diagram div.
    const diagramRegex = /<div className="bg-blue-50\/50 border border-blue-100 rounded-lg p-6 flex flex-col items-center justify-center min-h-\[400px\]">[\s\S]*?<\/div>\s*<\/div>/g;
    
    // We only want to replace the inner content of the tab, but wait, the regex matches until the end of the div. 
    // It's safer to just match `<div className="bg-blue-50/50` ... to `(Please upload your process diagram to the assets folder as "..."\)</p>\n                            </div>\n                        </div>`
    const preciseRegex = /<div className="bg-blue-50\/50 border border-blue-100 rounded-lg p-6 flex flex-col items-center justify-center min-h-\[400px\]">[\s\S]*?\(Please upload your process diagram to the assets folder as "[^"]*"\)<\/p>\s*<\/div>\s*<\/div>/g;
    
    if (preciseRegex.test(content)) {
        content = content.replace(preciseRegex, replacement);
        fs.writeFileSync(filePath, content);
        console.log(`Updated process flow in ${file}`);
    } else {
        // Let's try matching without the specific regex since my powershell might have destroyed the usa file.
        console.log(`Could not find diagram block in ${file}`);
    }
}
