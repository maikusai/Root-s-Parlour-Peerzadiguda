import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t-4 border-medical-blue">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand & Addr */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-white text-medical-blue w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
              SBR
            </div>
            <div>
              <h2 className="font-bold text-xl text-white leading-tight">SBR Diagnostic</h2>
              <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Center</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Accurate Diagnostics. Neighbourhood Convenience. Your trusted health partner in Peerzadiguda.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/book" className="hover:text-white transition-colors">Book Appointment</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <span>Sri Krishna Nagar Colony Road No. 2, near Renuka Yellamma Temple, Viharika Colony, Maruthi Nagar, Peerzadiguda, Hyderabad, Telangana 500098</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-accent-green shrink-0" />
              <span>+91 98491 90189</span>
            </li>
            <li className="flex gap-3 items-start">
              <Clock className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span>Mon - Sat: 7:00 AM – 9:00 PM</span>
                <span>Sunday: 7:00 AM – 2:00 PM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} SBR Diagnostic Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
