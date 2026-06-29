import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-900 border-t border-surface-700/40 py-8 flex justify-center items-center">
      <p className="flex items-center gap-1.5 text-xs text-primary-50 tracking-wide select-none">
        Hecho con <Heart className="text-primary-100 h-3 w-3" /> por{" "}
        <a
          href="https://marcdoncel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-100 transition-colors"
        >
          Marc Doncel
        </a>
      </p>
    </footer>
  );
}
