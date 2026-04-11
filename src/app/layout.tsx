import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SBR Diagnostic Center | Peerzadiguda Hyderabad",
  description: "Affordable blood tests, ultrasound, X-Ray, ECG and health packages in Peerzadiguda, Hyderabad. Walk-in or book appointment online.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "SBR Diagnostic Center",
  telephone: "+919849190189",
  openingHours: ["Mo-Sa 07:00-21:00", "Su 07:00-14:00"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sri Krishna Nagar Colony Road No. 2, near Renuka Yellamma Temple, Viharika Colony, Maruthi Nagar",
    addressLocality: "Peerzadiguda, Hyderabad",
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
      <body className={`${inter.className} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
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
