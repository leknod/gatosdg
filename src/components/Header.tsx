import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 px-4 py-4 flex justify-center pointer-events-none">
      <div className="w-full max-w-4xl bg-[#09090b]/90 border border-[#221f1a] shadow-lg backdrop-blur-md rounded-full px-4 flex items-center justify-between pointer-events-auto">
        <span className="text-white text-base md:text-lg font-semibold tracking-wider font-sans select-none">
          GatosDG
        </span>

        <button
          type="button"
          className="p-2 text-white/40 hover:text-white/70 hover:bg-white/5 active:bg-white/10 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
          aria-label="Compartir"
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
