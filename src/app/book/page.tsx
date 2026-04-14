import Link from "next/link";
import { ChevronRight, Phone, Clock, MapPin } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book Appointment | Root's the Family Salon",
  description: "Schedule your salon service appointment with Root's in Peerzadiguda. Experience luxury haircuts, spa, and bridal styling.",
};

export default function BookingPage() {
  const phoneNumber = "+919182637770";

  return (
    <div className="w-full bg-salon-black min-h-screen pb-24 text-salon-cream">
      {/* Booking Hero */}
      <section className="bg-[#0D0D1A] pt-28 pb-12 md:pb-24 relative overflow-hidden border-b border-salon-gold/20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-salon-black to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-salon-muted mb-6 font-medium tracking-widest uppercase">
            <Link href="/" className="hover:text-salon-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-salon-gold">Book</span>
          </div>

          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-heading text-salon-gold mb-6">Book Your Appointment</h1>
            <div className="flex flex-col items-center gap-3">
              <div className="text-[11px] md:text-sm text-salon-muted uppercase tracking-widest text-center leading-relaxed max-w-[260px] md:max-w-sm mx-auto mt-2">
                <MapPin className="w-3.5 h-3.5 text-salon-gold inline-block -mt-1 mr-1.5" /> 
                H No. 10-25/7, Taj Mahal Colony, Peerzadiguda
              </div>
              <a href={`tel:${phoneNumber}`} className="text-sm md:text-base text-salon-muted hover:text-salon-gold transition-colors font-light tracking-widest flex items-center justify-center gap-2 mt-2">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-salon-gold" /> {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 mt-8 md:-mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Booking Form Component */}
          <div className="flex-1 w-full relative">
             <BookingForm />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-6 pt-8 lg:pt-0">
            
            {/* Hours Card */}
            <div className="bg-salon-surface p-8 rounded-sm shadow-xl border border-salon-gold/20 relative overflow-hidden group">
               <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Clock className="w-32 h-32 text-salon-gold" />
               </div>
               <h3 className="text-xl font-heading text-salon-gold mb-6 flex items-center gap-3">
                 <Clock className="w-5 h-5" /> Opening Hours
               </h3>
               
               <div className="space-y-4 text-sm tracking-wide font-light relative z-10">
                 <div className="flex justify-between items-center border-b border-salon-gold/10 pb-3">
                   <span className="text-salon-muted uppercase">Mon - Sat</span>
                   <span className="text-salon-cream font-medium">10:00 AM - 8:00 PM</span>
                 </div>
                 <div className="flex justify-between items-center pb-1">
                   <span className="text-salon-muted uppercase">Sunday</span>
                   <span className="text-salon-cream font-medium">10:00 AM - 7:00 PM</span>
                 </div>
               </div>
            </div>

            {/* Address & Maps Placeholder */}
            <div className="bg-salon-surface p-8 rounded-sm shadow-xl border border-salon-gold/20">
               <h3 className="text-xl font-heading text-salon-gold mb-4 flex items-center gap-3">
                 <MapPin className="w-5 h-5" /> Location
               </h3>
               <p className="text-salon-muted text-sm font-light leading-relaxed mb-6">
                 H No. 10-25/7, Ground Floor, Taj Mahal Colony, Opp. Global Indian International School, Peerzadiguda, Hyderabad.
               </p>
               
               {/* Google Maps Placeholder */}
               <a 
                 href="https://maps.google.com/?q=Root's+Family+Salon+Peerzadiguda" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-full h-48 bg-salon-black border border-salon-gold/20 rounded-sm relative overflow-hidden flex items-center justify-center p-4 text-center group cursor-pointer hover:border-salon-gold/50 transition-colors block"
               >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative z-10 text-salon-gold opacity-80 group-hover:opacity-100 transition-opacity bg-salon-black/60 px-4 py-2 rounded-sm backdrop-blur-sm border border-salon-gold/30">
                    <MapPin className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">View on Google Maps</span>
                  </div>
               </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
