import { plusJakartaSans } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: {
    default: "GatosDG | Fotos, recuerdos y mucho ronroneo 🐱",
    template: "%s | GatosDG",
  },
  description:
    "Fotos, historias y recuerdos de nuestros gatos. Un pequeño rincón dedicado a nuestros compañeros de cuatro patas.",
  openGraph: {
    title: "GatosDG | Fotos, recuerdos y mucho ronroneo 🐱",
    description:
      "Fotos, historias y recuerdos de nuestros gatos. Un pequeño rincón dedicado a nuestros compañeros de cuatro patas.",
    url: "https://gatosdg.vercel.app/",
    siteName: "GatosDG",
    images: [
      {
        url: "https://gatosdg.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "GatosDG | Fotos, recuerdos y mucho ronroneo 🐱",
      },
    ],
  },
  alternates: {
    canonical: "https://gatosdg.vercel.app/",
  },
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
