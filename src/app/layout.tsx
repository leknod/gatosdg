import { plusJakartaSans } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GatosDG",
  description: "Conoce a todos los gatos de GatosDG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scrollbar-gutter-stable">
      <body className={`${plusJakartaSans.className} bg-surface-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
