"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-medical-blue hidden md:block text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Mon-Sat: 7:00 AM – 9:00 PM | Sun: 7:00 AM – 2:00 PM</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Peerzadiguda, Hyderabad</span>
          </div>
          <div>
            <a href="tel:+919849190189" className="flex items-center gap-1 font-semibold text-white hover:text-blue-200 transition-colors">
               <Phone className="w-3 h-3" /> +91 98491 90189
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 z-50">
          <div className="bg-medical-blue text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl tracking-tighter">
            SBR
          </div>
          <div>
            <h1 className="font-bold text-xl text-medical-blue leading-tight">SBR Diagnostic</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Center</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-medical-blue transition-colors">Home</Link>
          <Link href="/services" className="hover:text-medical-blue transition-colors">Services</Link>
          <Link href="/about" className="hover:text-medical-blue transition-colors">About Us</Link>
          <Link href="/gallery" className="hover:text-medical-blue transition-colors">Gallery</Link>
          <Link href="/reviews" className="hover:text-medical-blue transition-colors">Reviews</Link>
          <Link href="/contact" className="hover:text-medical-blue transition-colors">Contact</Link>
          <Link href="/book" className="bg-medical-blue text-white px-5 py-2.5 rounded-full hover:bg-medical-light transition-colors shadow-md hover:shadow-lg">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-medical-blue z-50 transition-transform active:scale-95"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out flex flex-col overflow-hidden ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col container mx-auto px-6 py-6 gap-5 text-base font-bold text-slate-800">
          <Link href="/" onClick={closeMenu} className="hover:text-medical-blue transition-colors">Home</Link>
          <Link href="/services" onClick={closeMenu} className="hover:text-medical-blue transition-colors">Services</Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-medical-blue transition-colors">About Us</Link>
          <Link href="/gallery" onClick={closeMenu} className="hover:text-medical-blue transition-colors">Gallery</Link>
          <Link href="/reviews" onClick={closeMenu} className="hover:text-medical-blue transition-colors">Reviews</Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-medical-blue transition-colors pb-2">Contact</Link>
          <Link href="/book" onClick={closeMenu} className="bg-medical-blue text-center text-white px-6 py-3 rounded-xl hover:bg-medical-light transition-colors shadow-md mt-2">
            Book Appointment
          </Link>
        </nav>
        
        {/* Mobile Contact Quick Links */}
        <div className="container mx-auto px-6 pb-6 flex flex-col gap-3">
           <a href="tel:+919849190189" className="flex items-center gap-2 text-medical-blue font-bold text-sm bg-blue-50 py-3 rounded-xl justify-center">
              <Phone className="w-4 h-4" /> Call: +91 98491 90189
           </a>
        </div>
      </div>
    </header>
  );
}
