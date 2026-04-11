import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Target, HeartHandshake, ShieldCheck, CheckCircle2 } from "lucide-react";
import AnimatedCounters from "@/components/AnimatedCounters";

export const metadata = {
  title: "About Us | SBR Diagnostic Center",
  description: "Learn about the mission, team, and state-of-the-art facilities at SBR Diagnostic Center, Peerzadiguda's trusted path lab.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "SBR Diagnostic Center",
    "description": "SBR Diagnostic Center provides accurate, affordable diagnostic tests in Peerzadiguda.",
    "foundingDate": "2009",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sri Krishna Nagar Colony Road No. 2, near Renuka Yellamma Temple, Viharika Colony, Maruthi Nagar",
      "addressLocality": "Peerzadiguda, Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500098",
      "addressCountry": "IN"
    }
  };

  const team = [
    { name: "Dr. Rajesh Kumar", role: "Head Pathologist", qual: "MD Pathology", experience: "15+ Years Experience", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=400&auto=format&fit=crop" },
    { name: "Dr. Anita Sharma", role: "Radiologist", qual: "MD Radiology", experience: "12+ Years Experience", img: "https://images.unsplash.com/photo-1594824436998-d4032d88bbac?q=80&w=400&h=400&auto=format&fit=crop" },
    { name: "K. Venkat", role: "Senior Lab Technician", qual: "B.Sc MLT", experience: "8+ Years Experience", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&h=400&auto=format&fit=crop" },
    { name: "S. Priya", role: "Phlebotomist", qual: "DMLT", experience: "5+ Years Experience", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=400&auto=format&fit=crop" },
  ];

  const photos = [
    { url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop", caption: "Advanced Lab Equipment" },
    { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop", caption: "Clean Waiting Area" },
    { url: "https://images.unsplash.com/photo-1631815587646-b85a1bb02246?q=80&w=500&auto=format&fit=crop", caption: "Microscopy & Analysis" },
    { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=500&auto=format&fit=crop", caption: "Sample Collection Room" },
    { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", caption: "Patient Reception" },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Page Hero */}
      <section className="bg-medical-blue pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-medical-blue to-accent-green mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About SBR Diagnostic Center</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Established with a vision to provide world-class diagnostics at neighborhood prices.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-medical-blue">Our Story</h2>
            <p className="text-slate-600 leading-relaxed text-lg text-justify md:text-center">
              SBR Diagnostic Center has been proudly serving the residents of Peerzadiguda and the surrounding areas of Maruthi Nagar and Viharika Colony for years. Our mission is direct and profound: to bring accurate, affordable diagnostics to every household in our neighbourhood. We believe that critical health decisions start with precise lab results, which is why we continuously invest in cutting-edge equipment and a highly trained medical staff.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue">Our Mission & Values</h2>
            <p className="text-slate-500 mt-2">The pillars that uphold our standard of care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 text-medical-blue rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Accuracy</h3>
              <p className="text-slate-600 text-sm">We maintain rigorous quality control using fully automated machines to ensure zero errors in your medical reports.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 mx-auto bg-green-50 text-accent-green rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Affordability</h3>
              <p className="text-slate-600 text-sm">Top-tier medical diagnostics shouldn&apos;t break the bank. Pricing is transparent, accessible, and neighborhood-first.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 mx-auto bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Compassion</h3>
              <p className="text-slate-600 text-sm">From gentle sample collections to quick turnarounds, we handle every patient with the utmost care and empathy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations (Banner) */}
      <section className="bg-medical-blue py-8 relative shadow-inner">
         <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-white font-medium text-sm md:text-base">
                 <div className="flex justify-center items-center gap-2">
                     <CheckCircle2 className="w-6 h-6 text-accent-green" />
                     <span>NABL Accredited Facility</span>
                 </div>
                 <div className="hidden md:block w-px h-8 bg-white/20"></div>
                 <div className="flex justify-center items-center gap-2">
                     <CheckCircle2 className="w-6 h-6 text-accent-green" />
                     <span>ISO 9001:2015 Certified</span>
                 </div>
                 <div className="hidden md:block w-px h-8 bg-white/20"></div>
                 <div className="flex justify-center items-center gap-2">
                     <CheckCircle2 className="w-6 h-6 text-accent-green" />
                     <span>Reg. by Telangana Health Dept.</span>
                 </div>
             </div>
         </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Expert diagnosis begins with exceptional minds. Our team comprises highly decorated doctors and dedicated technicians.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-slate-100 group-hover:border-medical-light transition-colors relative shadow-sm">
                  <Image src={member.img} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 160px, 160px" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">{member.name}</h3>
                <p className="text-medical-blue font-medium text-sm mb-1">{member.role} — {member.qual}</p>
                <p className="text-slate-500 text-xs">{member.experience}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 py-4 px-6 rounded-xl border border-slate-200 text-center inline-block w-full">
             <p className="text-slate-700 text-sm font-medium">💡 <span className="font-bold">Did you know?</span> Ask us about our visiting specialist consultations to discuss your reports directly with experts.</p>
          </div>
        </div>
      </section>

      {/* By the Numbers (Animated Counters) */}
      <section className="py-16 bg-slate-100 border-y border-slate-200 shadow-inner">
        <div className="container mx-auto px-4">
          <AnimatedCounters />
        </div>
      </section>

      {/* Facility Photos (Masonry CSS Column-count) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Our Facility</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Take a virtual tour of our clean, modern, and patient-friendly environment.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, idx) => (
              <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.url} alt={photo.caption} loading="lazy" className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-bold p-6 w-full">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
