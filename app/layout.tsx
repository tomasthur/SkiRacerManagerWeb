import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ski Racer Manager",
  description: "Oficiálny prezentačný web mobilnej hry Ski Racer Manager",
  themeColor: "#2f8ce7",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ski Racer Manager",
    description: "Buduj tím, manažuj preteky, doby zjazdovky.",
    type: "website",
    url: "https://example.com",
  },
};

const oxanium = Oxanium({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-oxanium" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className={`antialiased ${oxanium.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

