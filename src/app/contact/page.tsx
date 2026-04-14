import Link from "next/link";
import { ChevronRight, Phone, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us & Location | Root's the Family Salon",
  description: "Find Root's the Family Salon in Peerzadiguda. Get directions, contact details, working hours, and book your appointment today.",
};

export default function ContactPage() {
  const phoneNumber = "+919182637770";

  return (
    <div className="w-full bg-salon-black min-h-screen pb-24 text-salon-cream relative">

      {/* Hero */}
      <section className="bg-[#0D0D1A] pt-28 pb-12 md:pb-24 relative overflow-hidden border-b border-salon-gold/20">
         <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-salon-black to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-2 text-sm text-salon-muted mb-6 font-medium tracking-widest uppercase">
               <Link href="/" className="hover:text-salon-gold transition-colors">Home</Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-salon-gold">Contact</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-heading text-salon-gold mb-4 md:mb-6 tracking-wide drop-shadow-2xl">
               Get In Touch
            </h1>
            <p className="text-base md:text-lg text-salon-muted max-w-2xl leading-relaxed font-light tracking-wide px-4">
               Have a question about our services or ready to book your next session? Reach out to us, and we'll be happy to assist you.
            </p>
         </div>
      </section>

      {/* Main Content Split */}
      <div className="container mx-auto px-4 mt-8 md:mt-20 relative z-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
            
            {/* Left: Contact Form */}
            <div className="bg-salon-surface p-6 sm:p-8 md:p-12 shadow-2xl border border-salon-gold/20 rounded-sm">
               <h2 className="text-2xl md:text-3xl font-heading text-salon-gold mb-2">Send Us a Message</h2>
               <p className="text-salon-muted font-light tracking-wide text-xs md:text-sm mb-6 md:mb-10">
                  Fill out the form below and our team will get back to you as soon as possible.
               </p>
               <ContactForm />
            </div>

            {/* Right: Info Cards */}
            <div className="flex flex-col gap-8">
               
               {/* Location Card & Map */}
               <div className="bg-salon-surface p-8 shadow-xl border border-salon-gold/20 rounded-sm hover:border-salon-gold/50 transition-colors group">
                  <div className="flex items-start gap-4 mb-6">
                     <div className="bg-salon-black p-3 border border-salon-gold/30 rounded-sm text-salon-gold group-hover:bg-salon-gold group-hover:text-salon-black transition-colors shrink-0">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-lg md:text-xl font-heading text-salon-gold mb-2">Visit Us</h3>
                        <p className="text-salon-muted leading-relaxed font-light text-sm">
                           H No. 10-25/7, Near Taj Mahal Colony, <br />
                           Opp. Global Indian International School, <br />
                           Peerzadiguda, Hyderabad 500098
                        </p>
                     </div>
                  </div>
                  
                  {/* Map Embed */}
                  <div className="w-full h-48 border border-salon-gold/20 rounded-sm overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.598!3d17.427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ec090efecdf%3A0x6b8bcdec4ecf5df1!2sPeerzadiguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Root's the Family Salon Location Map"
                     />
                  </div>
               </div>

               {/* Hours & Contact Split */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Hours Card */}
                  <div className="bg-salon-surface p-8 shadow-xl border border-salon-gold/20 rounded-sm hover:border-salon-gold/50 transition-colors group flex flex-col justify-center">
                     <div className="bg-salon-black p-3 border border-salon-gold/30 rounded-sm text-salon-gold group-hover:bg-salon-gold group-hover:text-salon-black transition-colors w-max mx-auto mb-4">
                        <Clock className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg md:text-xl font-heading text-salon-gold mb-3 text-center">Working Hours</h3>
                     <div className="text-center">
                        <p className="text-salon-muted text-sm font-light uppercase tracking-widest mb-1">Mon – Sun</p>
                        <p className="text-salon-cream font-bold">10:00 AM – 8:00 PM</p>
                     </div>
                  </div>

                  {/* Direct Contact */}
                  <div className="bg-salon-surface p-8 shadow-xl border border-salon-gold/20 rounded-sm hover:border-salon-gold/50 transition-colors group flex flex-col justify-center">
                     <div className="bg-salon-black p-3 border border-salon-gold/30 rounded-sm text-salon-gold group-hover:bg-salon-gold group-hover:text-salon-black transition-colors w-max mx-auto mb-4">
                        <Phone className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg md:text-xl font-heading text-salon-gold mb-3 text-center">Contact Hub</h3>
                     <div className="text-center space-y-2">
                        <a href={`tel:${phoneNumber}`} className="block text-salon-cream font-bold hover:text-salon-gold transition-colors">{phoneNumber}</a>
                        <a href="mailto:hello@rootssalon.com" className="block text-salon-muted text-sm font-light hover:text-salon-gold transition-colors">hello@rootssalon.com</a>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </div>
  );
}
