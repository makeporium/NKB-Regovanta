import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, CheckCircle2 } from "lucide-react";
import { CountryCodeSelect } from "@/components/site/CountryCodeSelect";

export const QueryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Use refs for values that must be synchronously current inside interval/timeout closures.
  // React state updates are async and can cause a race condition between the close handler
  // and the interval, making the popup reopen immediately after closing.
  const sleepUntilRef = useRef<number>(0);
  const isOpenRef = useRef<boolean>(false);

  // Keep isOpenRef in sync with isOpen state
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  function openIfAllowed() {
    if (Date.now() >= sleepUntilRef.current && !isOpenRef.current) {
      setIsOpen(true);
    }
  }

  function handleClose() {
    // Set sleep synchronously via ref — no async lag, no race condition
    sleepUntilRef.current = Date.now() + 20000;
    setIsOpen(false);
  }

  useEffect(() => {
    // Open automatically after 5 seconds initially
    const initialTimer = setTimeout(openIfAllowed, 5000);

    // Re-check every 20 seconds; opens only if not sleeping and currently closed
    const intervalTimer = setInterval(openIfAllowed, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(e.currentTarget)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        
        // Show success for 3 seconds, then close and sleep for 90 seconds (1.5 mins)
        setTimeout(() => {
          sleepUntilRef.current = Date.now() + 90000;
          setIsOpen(false);
          setTimeout(() => setIsSuccess(false), 500);
        }, 3000);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl border border-border overflow-hidden w-[320px] sm:w-[360px] mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-navy p-4 flex justify-between items-center text-white">
            <div>
              <h3 className="font-bold text-lg leading-none">Have a Query?</h3>
              <p className="text-xs text-white/80 mt-1">We'll get back to you within 24 hours</p>
            </div>
            <button 
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-5">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-1">Query Submitted!</h4>
                <p className="text-sm text-navy/70">Thank you. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="52b40877-c175-4aca-852e-bb2a7e62a86a" />
                
                <div className="space-y-1">
                  <label htmlFor="popup-name" className="text-[11px] font-bold uppercase tracking-wider text-navy/70">Your Name *</label>
                  <input type="text" id="popup-name" name="name" required placeholder="Enter your name" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="popup-email" className="text-[11px] font-bold uppercase tracking-wider text-navy/70">Email Address *</label>
                  <input type="email" id="popup-email" name="email" required placeholder="your@email.com" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="popup-phone" className="text-[11px] font-bold uppercase tracking-wider text-navy/70">Phone Number *</label>
                  <div className="flex gap-2 items-stretch h-[38px]">
                    <CountryCodeSelect name="countryCode" value="+91" />
                    <input type="tel" id="popup-phone" name="phone" required placeholder="xxxxxxxxxx" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent h-full" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="popup-query" className="text-[11px] font-bold uppercase tracking-wider text-navy/70">Your Query *</label>
                  <textarea id="popup-query" name="message" required rows={3} placeholder="Tell us about your regulatory needs..." className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full rounded-sm bg-accent px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Submit Query"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-accent text-white shadow-xl flex items-center justify-center hover:bg-accent/90 transition-transform hover:scale-105 active:scale-95 animate-in fade-in zoom-in duration-300"
          aria-label="Open Query Form"
        >
          <MessageSquare className="h-6 w-6" fill="currentColor" />
        </button>
      )}
    </div>
  );
}
