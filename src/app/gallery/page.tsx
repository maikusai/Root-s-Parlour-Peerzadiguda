import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import GalleryClient from "@/components/GalleryClient";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Photo Gallery | SBR Diagnostic Center",
  description: "Take a look inside SBR Diagnostic Center. View our state-of-the-art diagnostic equipment, advanced labs, and our friendly staff.",
};

export default function GalleryPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      
      {/* Gallery Hero Component */}
      <section className="bg-medical-blue pt-16 pb-24 relative overflow-hidden">
         {/* Subtle pattern background for architectural feel */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
         <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
               <Link href="/" className="hover:text-white transition-colors">Home</Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-white">Gallery</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Inside SBR Diagnostic</h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
               State-of-the-art equipment. Hygienic environment. Friendly staff. Take a visual tour of our facilities before you visit.
            </p>
            
         </div>
      </section>

      {/* Main Dynamic Gallery Wrapper */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
         <ScrollReveal delay={0.1}>
         <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-slate-100 min-h-[500px]">
            <GalleryClient />
         </div>
         </ScrollReveal>

         {/* 360 Virtual Tour Placeholder Layer */}
         <ScrollReveal delay={0.2}>
         <div className="mt-16 bg-medical-blue text-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row relative">
            <div className="p-10 md:w-1/2 flex flex-col justify-center">
               <h2 className="text-3xl font-bold mb-4">Virtual Tour</h2>
               <p className="text-blue-100 mb-8 leading-relaxed max-w-md">
                  Experience SBR Diagnostic Center exactly as it is right from your phone. Walk through our reception, check the labs, and observe our pristine hygiene standards via our 360 Google virtual integration.
               </p>
               <a href="#" className="inline-flex w-max items-center gap-2 bg-white text-medical-blue font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors shadow-md hover:shadow-lg">
                  Explore 360° Walkthrough <ExternalLink className="w-4 h-4" />
               </a>
            </div>
            
            {/* Visual embedding placeholder */}
            <div className="md:w-1/2 min-h-[300px] md:min-h-full bg-slate-800 relative group overflow-hidden">
               <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" alt="Virtual Tour Background" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl flex flex-col items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 7.1"/></svg>
                     <span className="text-white font-bold tracking-wider text-sm">360° EMBED PENDING</span>
                  </div>
               </div>
            </div>
         </div>
         </ScrollReveal>
         
      </div>

    </div>
  );
}
