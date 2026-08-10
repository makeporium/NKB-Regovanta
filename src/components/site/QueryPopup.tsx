import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";

export function QueryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open automatically after 5 seconds initially
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Continue to pop up every 20 seconds if the user closes it
    const intervalTimer = setInterval(() => {
      setIsOpen((prev) => {
        if (!prev) return true;
        return prev;
      });
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

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
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-5">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
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
                <input type="tel" id="popup-phone" name="phone" required placeholder="+91 xxxxxxxxxx" className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="popup-query" className="text-[11px] font-bold uppercase tracking-wider text-navy/70">Your Query *</label>
                <textarea id="popup-query" name="message" required rows={3} placeholder="Tell us about your regulatory needs..." className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"></textarea>
              </div>
              
              <button type="submit" className="w-full rounded-sm bg-accent px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90">
                Submit Query
              </button>
            </form>
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
