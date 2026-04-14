"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Inline SVG icons to avoid undefined import issues
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
const ScissorsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" x2="8.12" y1="4" y2="15.88" /><line x1="14.47" x2="20" y1="14.48" y2="20" /><line x1="8.12" x2="12" y1="8.12" y2="12" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
const TagIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>;
const ImageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>;
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.56 6.56l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
// Modern staggered hamburger: 3 rounded lines of decreasing width
const CombMenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    {/* Top line — full width */}
    <rect x="3" y="5.5"  width="18" height="2.2" rx="1.1" />
    {/* Middle line — shorter */}
    <rect x="3" y="11"   width="13" height="2.2" rx="1.1" />
    {/* Bottom line — shortest */}
    <rect x="3" y="16.5" width="8"  height="2.2" rx="1.1" />
  </svg>
);
// Scissors icon used as the close button
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" x2="8.12" y1="4" y2="15.88" />
    <line x1="14.47" x2="20" y1="14.48" y2="20" />
    <line x1="8.12" x2="12" y1="8.12" y2="12" />
  </svg>
);


const navLinks = [
  { name: "Home", href: "/", Icon: HomeIcon },
  { name: "Services", href: "/services", Icon: ScissorsIcon },
  { name: "Bridal", href: "/bridal", Icon: HeartIcon },
  { name: "Offers", href: "/offers", Icon: TagIcon },
  { name: "Gallery", href: "/gallery", Icon: ImageIcon },
  { name: "About", href: "/about", Icon: InfoIcon },
  { name: "Contact", href: "/contact", Icon: PhoneIcon },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler for sticky header style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock / unlock page scroll when menu opens
  useEffect(() => {
    if (menuOpen) {
      // Lock both html and body to prevent bleed-through on all browsers
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const open = () => setMenuOpen(true);
  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Top navigation bar ─────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${scrolled
            ? "bg-salon-black/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent py-5"
          }`}
        // Keep header below the mobile overlay (z-40 < overlay z-[100])
        style={{ zIndex: menuOpen ? 40 : 40 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" onClick={close} className="flex flex-col items-center justify-center">
            <span className="font-heading text-3xl md:text-4xl text-salon-gold leading-none tracking-wider">
              ROOT&apos;S
            </span>
            <span className="uppercase text-salon-cream text-[10px] md:text-xs tracking-[0.3em] font-light mt-1">
              the family salon
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-salon-cream hover:text-salon-gold text-sm font-medium transition-colors tracking-wide"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/book"
              className="border border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-salon-black px-6 py-2 rounded-sm text-sm font-semibold transition-all duration-300 uppercase tracking-widest"
            >
              Book Now
            </Link>
          </nav>

          {/* Hamburger — mobile only */}
          <button
            onClick={open}
            className="lg:hidden text-salon-gold p-1"
            aria-label="Open menu"
          >
            <CombMenuIcon />
          </button>
        </div>
      </header>

      {/* ── Full-screen mobile menu overlay ────────────────── */}
      {/* z-[100] sits above EVERYTHING: header, logo, FAB buttons */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          background: "#0D0D1A",   // solid, opaque — no bleed-through
          display: "flex",
          flexDirection: "column",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          overflow: "hidden",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* ── Overlay header row — X button only ── */}
        <div className="flex justify-end items-center px-5 py-5 flex-shrink-0">
          <button
            onClick={close}
            aria-label="Close menu"
            className="text-salon-gold p-2 hover:rotate-90 transition-transform duration-300"
          >
            <CloseIcon />
          </button>
        </div>

        {/* ── Center-aligned Nav links ── */}
        <nav className="flex flex-col flex-grow justify-center items-center gap-4 px-4 overflow-hidden">
          {navLinks.map(({ name, href }, idx) => (
            <Link
              key={name}
              href={href}
              onClick={close}
              className="group px-6 py-2 hover:bg-salon-gold/10 rounded-sm transition-all duration-200 text-center"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <span className="text-2xl sm:text-3xl font-heading tracking-wider text-salon-cream group-hover:text-salon-gold transition-colors duration-200">
                {name}
              </span>
            </Link>
          ))}
        </nav>

        {/* ── Bottom: Book Now CTA ── */}
        <div className="px-8 pb-8 pt-4 flex-shrink-0">
          <Link
            href="/book"
            onClick={close}
            className="flex items-center justify-center gap-3 w-full bg-salon-gold text-salon-black font-bold text-sm uppercase tracking-widest py-4 rounded-sm hover:bg-salon-gold-light transition-colors duration-300 shadow-[0_4px_24px_rgba(201,168,76,0.3)]"
          >
            <ScissorsIcon />
            Book Appointment
          </Link>

          {/* Branding */}
          <p className="text-center text-salon-muted/60 text-[10px] mt-6 tracking-widest uppercase">
            Root&apos;s · The Family Salon · Peerzadiguda
          </p>
        </div>
      </div>
    </>
  );
}
