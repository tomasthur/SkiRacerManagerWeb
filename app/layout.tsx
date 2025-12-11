import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ski Racer Manager",
  description: "Official presentation website for the mobile game Ski Racer Manager",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ski Racer Manager",
    description: "Build your team, manage races, conquer the slopes.",
    type: "website",
    url: "https://example.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#2f8ce7",
};

const oxanium = Oxanium({ subsets: ["latin"], weight: ["300", "400", "600", "700"], variable: "--font-oxanium" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased ${oxanium.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

