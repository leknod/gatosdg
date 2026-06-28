"use client";

import { useEffect } from "react";
import Link from "next/link";

type CatData = {
  name: string;
  slug: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  cats: CatData[];
};

export default function MobileMenu({ isOpen, onClose, cats }: MobileMenuProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Invisible backdrop to catch outside clicks, no visual effect */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dropdown panel — positioned below the header, no overlay */}
      <div className="fixed top-15 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className="w-full max-w-4xl bg-surface-800/95 border border-[#26211a] shadow-2xl rounded-3xl p-3 flex flex-col gap-1 pointer-events-auto"
          style={{
            animation: "slideDown 0.5s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          {cats.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              onClick={onClose}
              className="text-white hover:text-primary text-xs font-medium tracking-wide transition-colors px-3 py-2 rounded-xl hover:bg-primary/8 active:bg-primary/15"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </>
  );
}
