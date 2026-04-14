import ServicesClient from "@/components/ServicesClient";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Our Services | Root's the Family Salon",
  description: "Explore our premium unisex beauty services including hair styling, advanced facials, bridal HD makeup, nail art, and grooming in Peerzadiguda.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Root's the Family Salon",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "H No. 10-25/7, Taj Mahal Colony",
      "addressLocality": "Peerzadiguda, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500098",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="w-full bg-salon-black min-h-screen text-salon-cream">
      {/* Schema injected for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Page Hero Section */}
      <section className="bg-[#0D0D1A] pt-28 pb-12 md:pb-20 relative overflow-hidden border-b border-salon-gold/20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-salon-black to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-salon-muted mb-6 font-medium tracking-widest uppercase">
            <Link href="/" className="hover:text-salon-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-salon-gold">Services</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading text-salon-gold mb-4 md:mb-6">Our Services</h1>
          <p className="text-base md:text-lg text-salon-muted max-w-2xl mx-auto font-light tracking-wide px-4">
            Discover a touch of luxury. From precision cuts and glowing skin to your grand bridal day, we pamper your entire family.
          </p>
        </div>
      </section>

      {/* Main Tabs Component */}
      <div className="mt-0 md:-mt-8">
         <ServicesClient />
      </div>
    </div>
  );
}
