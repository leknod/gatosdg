"use client";

import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Link from "next/link";
import { Menu, Cat, X } from "lucide-react";

type CatData = {
  name: string;
  slug: string;
  coverUrl: string | null;
};

export default function HeaderClient({ cats }: { cats: CatData[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 z-50 px-4 py-4 flex justify-center pointer-events-none">
        <div className="w-full max-w-4xl bg-surface-800/90 border border-surface-700 shadow-lg backdrop-blur-md rounded-full px-4 py-2 md:py-1 flex items-center justify-between pointer-events-auto">
          <Link
            href="/"
            className="flex items-center justify-center text-white/80 text-sm font-semibold select-none"
          >
            <Cat className="text-primary-100/80 mr-1 h-5 w-5" />
            Gatos<span className="text-primary-100/80">DG</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2 text-primary-50 transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block transition-transform duration-200 ${isOpen ? "rotate-90" : "rotate-0"}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        cats={cats}
      />
    </>
  );
}
