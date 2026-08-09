import React from "react";
import { ArrowRight, ArrowDown, ChevronRight, CheckCircle2 } from "lucide-react";

export function LinearFlow({ steps }: { steps: { title: string; desc?: string }[] }) {
    return (
        <div className="relative py-8">
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-blue-100 hidden md:block"></div>
            <div className="space-y-6 md:space-y-10 relative">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-50 border-4 border-white shadow-sm flex items-center justify-center relative z-10 group-hover:bg-navy group-hover:text-white transition-colors duration-300 text-navy font-bold text-xl">
                            {index + 1}
                        </div>
                        <div className="bg-white border border-border p-6 rounded-lg shadow-sm flex-grow group-hover:border-navy/30 transition-colors">
                            <h3 className="font-bold text-navy text-[15px] mb-2">{step.title}</h3>
                            {step.desc && <p className="text-[13px] text-navy/70 leading-relaxed">{step.desc}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function SplitFlow({ 
    title, 
    leftTitle, 
    rightTitle, 
    leftSteps, 
    rightSteps, 
    bottomSteps 
}: { 
    title: string; 
    leftTitle: string; 
    rightTitle: string; 
    leftSteps: string[]; 
    rightSteps: string[]; 
    bottomSteps: string[]; 
}) {
    return (
        <div className="py-8">
            <div className="flex justify-center mb-8">
                <div className="bg-navy text-white px-8 py-4 rounded-lg shadow-sm font-bold text-[15px]">
                    {title}
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 relative">
                <div className="space-y-4 relative">
                    <div className="bg-blue-50 text-navy px-6 py-3 rounded-lg font-bold text-center text-[14px] border border-blue-100">
                        {leftTitle}
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        {leftSteps.map((step, i) => (
                            <React.Fragment key={i}>
                                <ArrowDown className="text-blue-200" />
                                <div className="bg-white border border-border px-6 py-4 rounded-lg w-full text-center shadow-sm text-[13.5px] font-semibold text-navy">
                                    {step}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                
                <div className="space-y-4 relative">
                    <div className="bg-blue-50 text-navy px-6 py-3 rounded-lg font-bold text-center text-[14px] border border-blue-100">
                        {rightTitle}
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        {rightSteps.map((step, i) => (
                            <React.Fragment key={i}>
                                <ArrowDown className="text-blue-200" />
                                <div className="bg-white border border-border px-6 py-4 rounded-lg w-full text-center shadow-sm text-[13.5px] font-semibold text-navy">
                                    {step}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center mb-4">
                <div className="flex items-center gap-8 text-blue-200">
                    <ArrowDown className="rotate-[-45deg] md:rotate-0" />
                    <ArrowDown className="rotate-[45deg] md:rotate-0" />
                </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
                {bottomSteps.map((step, i) => (
                    <React.Fragment key={i}>
                        {i > 0 && <ArrowDown className="text-blue-200" />}
                        <div className="bg-white border-2 border-navy/10 px-8 py-4 rounded-lg w-full text-center shadow-sm text-[14px] font-bold text-navy">
                            {step}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
