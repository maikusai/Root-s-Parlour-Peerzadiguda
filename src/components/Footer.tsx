import Link from "next/link";
import { Phone, MapPin, Clock, Star, MessageCircle } from "lucide-react";

export default function Footer() {
  const phoneNumber = "+919182637770";
  const whatsappMsg = encodeURIComponent("Hi, I want to book an appointment!");

  return (
    <footer className="bg-[#0D0D1A] text-salon-muted pt-16 pb-8 border-t border-salon-gold/30">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-salon-gold/10 pb-12">
        
        {/* Col 1: Brand & Social */}
        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-salon-gold text-salon-black w-10 h-10 flex items-center justify-center font-heading text-2xl font-bold rounded-sm">
              R
            </div>
            <div>
              <h2 className="font-heading text-2xl text-salon-cream leading-none tracking-wide">
                Root's
              </h2>
              <p className="text-[10px] text-salon-gold tracking-widest uppercase font-bold mt-1">
                The Family Salon
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed font-light text-salon-muted/80 max-w-sm">
            Experience premium luxury, expert styling, and ultimate pampering for your entire family in the absolute heart of Peerzadiguda.
          </p>
          
          <div className="flex gap-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm border border-salon-gold/20 flex items-center justify-center text-salon-gold hover:bg-salon-gold hover:text-salon-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm border border-salon-gold/20 flex items-center justify-center text-salon-gold hover:bg-salon-gold hover:text-salon-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://google.com/maps" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-sm border border-salon-gold/20 flex items-center justify-center text-salon-gold hover:bg-salon-gold hover:text-salon-black transition-colors" title="Leave a Google Review">
              <Star className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="md:col-span-2 lg:col-span-3">
          <h3 className="text-salon-cream font-heading text-xl mb-6 tracking-wide">Explore</h3>
          <ul className="space-y-3 text-sm font-light">
            <li><Link href="/" className="hover:text-salon-gold transition-colors inline-block">Home</Link></li>
            <li><Link href="/services" className="hover:text-salon-gold transition-colors inline-block">Services</Link></li>
            <li><Link href="/bridal" className="hover:text-salon-gold transition-colors inline-block">Bridal Studio</Link></li>
            <li><Link href="/gallery" className="hover:text-salon-gold transition-colors inline-block">Lookbook</Link></li>
            <li><Link href="/offers" className="hover:text-salon-gold transition-colors inline-block text-salon-gold">Exclusive Offers</Link></li>
            <li><Link href="/book" className="hover:text-salon-gold transition-colors inline-block">Book Online</Link></li>
            <li><Link href="/contact" className="hover:text-salon-gold transition-colors inline-block">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 3: Contact Info */}
        <div className="md:col-span-5 lg:col-span-5 space-y-6">
          <h3 className="text-salon-cream font-heading text-xl mb-2 tracking-wide">Visit Us</h3>
          
          {/* Mini embedded map */}
          <div className="w-full h-32 rounded-sm overflow-hidden border border-salon-gold/20 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.598!3d17.427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ec090efecdf%3A0x6b8bcdec4ecf5df1!2sPeerzadiguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mini Map"
             />
          </div>

          <ul className="space-y-4 text-sm font-light text-salon-muted/80">
            <li className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-salon-gold shrink-0 mt-0.5" />
              <span>H No. 10-25/7, Near Taj Mahal Colony, Opp. GIIS, Peerzadiguda, Hyderabad 500098</span>
            </li>
            <li className="flex gap-3 items-center">
              <Clock className="w-5 h-5 text-salon-gold shrink-0" />
              <span>Monday – Sunday: <span className="text-salon-cream font-medium">10:00 AM – 8:00 PM</span></span>
            </li>
          </ul>

          <a 
            href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#25D366] text-[#224d28] px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-[#1db954] transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>

        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-salon-muted/60 tracking-wider">
        <p>&copy; {new Date().getFullYear()} Root's the Family Salon. All Rights Reserved.</p>
        <p>Designed by <span className="text-salon-gold">Micus</span></p>
      </div>
    </footer>
  );
}
