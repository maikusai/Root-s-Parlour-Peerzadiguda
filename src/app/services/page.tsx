import ServicesClient from "@/components/ServicesClient";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Diagnostic Services & Health Packages | SBR Diagnostic Center",
  description: "Explore our comprehensive list of diagnostic services including lab tests, radiology, ultrasound, ECG, and home sample collection at affordable prices in Peerzadiguda, Hyderabad.",
};

export default function ServicesPage() {
  // Generate MedicalClinic Structured Data with specific MedicalTests
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "SBR Diagnostic Center",
    "image": "https://sbrdiagnosticcenter.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sri Krishna Nagar Colony Road No. 2, near Renuka Yellamma Temple, Viharika Colony, Maruthi Nagar",
      "addressLocality": "Peerzadiguda, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500098",
      "addressCountry": "IN"
    },
    "telephone": "+919849190189",
    "availableService": [
      {
        "@type": "MedicalTest",
        "name": "Complete Blood Count (CBC)",
      },
      {
         "@type": "MedicalTest",
         "name": "Lipid Profile",
      },
      {
         "@type": "MedicalTest",
         "name": "Digital X-Ray",
      },
      {
         "@type": "MedicalTest",
         "name": "Ultrasound (USG)",
      }
    ]
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Schema injected for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Page Hero Section */}
      <section className="bg-medical-blue pt-12 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Diagnostic Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            From routine blood tests to advanced imaging — all under one roof at affordable prices.
          </p>
        </div>
      </section>

      {/* Main Tabs Component */}
      <div className="-mt-10">
        <ServicesClient />
      </div>
    </div>
  );
}
