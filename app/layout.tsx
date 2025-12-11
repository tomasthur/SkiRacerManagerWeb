import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ski Racer Manager - Professional Skiing Management Game",
  description: "The first skiing manager game in the world. Manage your skier's training, equipment, fan base, and racing tactics. Download now on Google Play!",
  keywords: "ski racer manager, skiing game, mobile game, sports management, ski racing, android game",
  authors: [{ name: "Tomas Thur" }],
  creator: "Tomas Thur",
  publisher: "Tomas Thur",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ski Racer Manager - Professional Skiing Management Game",
    description: "The first skiing manager game in the world. Manage your skier's training, equipment, fan base, and racing tactics.",
    type: "website",
    url: "https://ski-racer-manager-web-8x56.vercel.app",
    siteName: "Ski Racer Manager",
    images: [
      {
        url: "https://ski-racer-manager-web-8x56.vercel.app/images/main_menu-left.png",
        width: 1200,
        height: 630,
        alt: "Ski Racer Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ski Racer Manager",
    description: "The first skiing manager game in the world",
    images: ["https://ski-racer-manager-web-8x56.vercel.app/images/main_menu-left.png"],
  },
  alternates: {
    canonical: "https://ski-racer-manager-web-8x56.vercel.app",
    languages: {
      'en': 'https://ski-racer-manager-web-8x56.vercel.app',
      'sk': 'https://ski-racer-manager-web-8x56.vercel.app/sk',
    },
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

