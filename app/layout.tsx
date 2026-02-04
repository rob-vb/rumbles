import type { Metadata } from "next";
import { Libre_Bodoni, Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Header, Footer, MobileNav } from "@/components/layout";

// Editorial serif for headings - dramatic, high contrast
const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Geometric sans for body - modern with warmth
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Condensed display for accents - bold, impactful
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rumbles Fish Bar | Sawbridgeworth's Finest Fish & Chips",
  description:
    "Fresh from the fryer. Order online from Rumbles Fish Bar - premium fish and chips, kebabs, burgers and more in Sawbridgeworth. Food Hygiene Rating 5.",
  keywords: [
    "fish and chips",
    "Sawbridgeworth",
    "takeaway",
    "fish bar",
    "kebabs",
    "burgers",
    "online ordering",
  ],
  authors: [{ name: "Rumbles Fish Bar" }],
  openGraph: {
    title: "Rumbles Fish Bar | Sawbridgeworth's Finest Fish & Chips",
    description:
      "Fresh from the fryer. Order online from Rumbles Fish Bar - premium fish and chips, kebabs, burgers and more.",
    url: "https://rumblesfishbar.co.uk",
    siteName: "Rumbles Fish Bar",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${libreBodoni.variable} ${outfit.variable} ${bebasNeue.variable} antialiased`}
      >
        <CartProvider>
          {/* Film grain texture overlay */}
          <div className="grain-overlay" aria-hidden="true" />

          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="min-h-screen pt-[var(--header-height)]">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Mobile Navigation */}
          <MobileNav />
        </CartProvider>
      </body>
    </html>
  );
}
