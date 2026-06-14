import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#110f0c] border-b border-[#221f1a] px-4 py-3 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <span className="text-white text-base md:text-lg font-semibold tracking-wide font-sans select-none">
          GatosDG
        </span>

        <button
          type="button"
          className="p-2 text-white/90 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
          aria-label="Compartir"
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
