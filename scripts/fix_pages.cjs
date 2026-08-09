const fs = require('fs');
const path = require('path');

const fixes = {
    'services.eu.tsx': {
        bad: `function EUMarket() {
                        EU MDR / IVDR Compliance & Registration
                    </h1>`,
        good: `function EUMarket() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <>
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-12 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">EU</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/eu.png" srcSet="https://flagcdn.com/w160/eu.png 2x" width="48" alt="European Union" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">European Union</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        EU MDR / IVDR Compliance & Registration
                    </h1>`
    },
    'services.uk.tsx': {
        bad: `function UKMarket() {
                        UK MHRA Medical Device Registration
                    </h1>`,
        good: `function UKMarket() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <>
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-12 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">UK</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/gb.png" srcSet="https://flagcdn.com/w160/gb.png 2x" width="48" alt="United Kingdom" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">United Kingdom</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        UK MHRA Medical Device Registration
                    </h1>`
    },
    'services.canada.tsx': {
        bad: `function CanadaMarket() {
                        Health Canada Medical Device Registration
                    </h1>`,
        good: `function CanadaMarket() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <>
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-12 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">Canada</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/ca.png" srcSet="https://flagcdn.com/w160/ca.png 2x" width="48" alt="Canada" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">Canada</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        Health Canada Medical Device Registration
                    </h1>`
    }
};

for (const [file, fix] of Object.entries(fixes)) {
    const filePath = path.join('src', 'routes', file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Normalize newlines in both for easier matching
    const contentNorm = content.replace(/\r\n/g, '\n');
    const badNorm = fix.bad.replace(/\r\n/g, '\n');
    
    if (contentNorm.includes(badNorm)) {
        const newContent = contentNorm.replace(badNorm, fix.good);
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed ${file}`);
    } else {
        console.log(`Could not find bad block in ${file}`);
    }
}
