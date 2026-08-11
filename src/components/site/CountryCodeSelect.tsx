import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { countryCodes } from "@/lib/countryCodes";

export function CountryCodeSelect({ 
  value = "+91", 
  onChange, 
  name = "countryCode"
}: { 
  value?: string; 
  onChange?: (val: string) => void;
  name?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedCountry = countryCodes.find(c => c.code === internalValue) || countryCodes.find(c => c.code === "+91");

  return (
    <div className="relative shrink-0 h-full" ref={ref}>
      <input type="hidden" name={name} value={internalValue} />
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 h-full w-[100px] rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent hover:bg-surface/50 transition-colors"
      >
        {selectedCountry && (
          <img 
            src={`https://flagcdn.com/w20/${selectedCountry.name.toLowerCase()}.png`} 
            alt={selectedCountry.name}
            className="w-5 h-auto object-cover rounded-[1px] shadow-sm shrink-0"
          />
        )}
        <span className="flex-1 text-left font-medium text-navy">{selectedCountry?.code}</span>
        <ChevronDown className="h-3 w-3 text-navy/50 shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 max-h-60 w-[260px] overflow-auto rounded-md border border-border bg-white shadow-xl">
          {countryCodes.map((c, i) => (
            <button
              key={i}
              type="button"
              className="flex w-full items-center gap-3 px-3 py-2 text-sm hover:bg-surface text-left transition-colors"
              onClick={() => {
                setInternalValue(c.code);
                if (onChange) onChange(c.code);
                setIsOpen(false);
              }}
            >
              <img 
                src={`https://flagcdn.com/w20/${c.name.toLowerCase()}.png`} 
                alt={c.name}
                className="w-5 h-auto object-cover rounded-[1px] shadow-sm shrink-0"
              />
              <span className="font-semibold text-navy shrink-0 w-[45px]">{c.code}</span>
              <span className="text-navy/70 truncate">{c.country}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
