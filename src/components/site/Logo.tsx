import logoImg from "@/assets/logo.jpeg";

export function Logo({ light = false }: { light?: boolean }) {
  if (light) {
    return (
      <div className="inline-flex items-center justify-center bg-white px-4 py-2.5 rounded-xl shadow-lg ring-4 ring-white/10 transition-transform hover:scale-105">
        <img 
          src={logoImg} 
          alt="NKB Regovanta Logo" 
          className="h-8 sm:h-10 w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
      <div className="border border-black/80 rounded-md bg-white p-1 shadow-sm">
        <img 
          src={logoImg} 
          alt="NKB Regovanta Logo" 
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </div>
    </div>
  );
}