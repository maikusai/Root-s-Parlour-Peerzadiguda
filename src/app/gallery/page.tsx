import Link from "next/link";
import { ChevronRight } from "lucide-react";
import GalleryClient from "@/components/GalleryClient";

export const metadata = {
  title: "Lookbook & Gallery | Root's the Family Salon",
  description: "Browse our salon lookbook to see our amazing transformations, beautiful bridal makeup, and precision haircuts.",
};

export default function GalleryPage() {
  return (
    <div className="w-full bg-salon-black min-h-screen pb-24 text-salon-cream">
      
      {/* Gallery Hero Component */}
      <section className="bg-[#0D0D1A] pt-28 pb-12 md:pb-24 relative overflow-hidden border-b border-salon-gold/20">
         <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-salon-black to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-2 text-sm text-salon-muted mb-6 font-medium tracking-widest uppercase">
               <Link href="/" className="hover:text-salon-gold transition-colors">Home</Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-salon-gold">Lookbook</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading text-salon-gold mb-4 md:mb-6">Our Lookbook</h1>
            <p className="text-base md:text-lg text-salon-muted max-w-2xl leading-relaxed font-light tracking-wide px-4">
               Explore stunning transformations created by our expert stylists. From radiant bridal makeup to precision cuts.
            </p>
            
         </div>
      </section>

      {/* Main Dynamic Gallery Wrapper */}
      <div className="container mx-auto px-4 mt-8 md:-mt-12 relative z-20">
         <div className="bg-salon-surface rounded-sm p-4 sm:p-6 md:p-12 shadow-2xl border border-salon-gold/20 min-h-[500px]">
            <GalleryClient />
         </div>

         {/* Submit Your Look Section */}
         <div className="mt-16 bg-salon-surface border border-salon-gold/20 rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row relative group">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-left [mask-image:linear-gradient(to_left,white,transparent)] group-hover:scale-105 transition-transform duration-700"></div>
            
            <div className="p-10 md:p-14 md:w-3/4 flex flex-col justify-center relative z-10">
               <h2 className="text-3xl font-heading text-salon-gold mb-4">Share Your Transformation!</h2>
               <p className="text-salon-muted mb-8 leading-relaxed max-w-lg font-light tracking-wide">
                  Did you love your new look? Snap a selfie and tag us on Instagram to be featured directly in our official lookbook and receive a 10% discount on your next visit.
               </p>
               <a 
                 href="https://instagram.com/rootsfamilysalon_placeholder" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex w-max items-center gap-3 bg-transparent border border-salon-gold text-salon-gold uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-sm hover:bg-salon-gold hover:text-salon-black transition-colors"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  @RootsFamilySalon
               </a>
            </div>
         </div>
         
      </div>

    </div>
  );
}
