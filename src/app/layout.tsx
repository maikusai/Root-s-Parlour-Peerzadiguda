import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Root's the Family Salon | Peerzadiguda, Hyderabad",
  description: "Premium unisex salon in Peerzadiguda, Hyderabad. Expert hair, skin, bridal makeup & grooming services. Book your appointment today.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Root's the Family Salon",
  telephone: "+911234567890",
  openingHours: ["Mo-Su 10:00-20:00"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "H No. 10-25/7, Taj Mahal Colony, Opp. Global Indian International School (Above Arihant Super Bazar)",
    addressLocality: "Peerzadiguda, Uppal, Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500098",
    addressCountry: "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }} />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
