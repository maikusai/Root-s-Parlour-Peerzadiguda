"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Scissors, Sparkles, Diamond, Gem, Star, Activity } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounters from "@/components/AnimatedCounters";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-salon-black text-salon-cream overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* 3D Floating Aesthetic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center mix-blend-screen opacity-30 mt-16 md:mt-0">
          <div className="relative w-[150vw] h-[150vh] md:w-[120vw] md:h-[120vh] max-w-[1400px] flex items-center justify-center animate-float">
            <Image 
              src="/hero-salon-3d.png" 
              alt="Luxury Salon Aesthetics"
              fill
              className="object-contain drop-shadow-2xl opacity-80"
              priority 
              sizes="(max-width: 768px) 150vw, 100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-salon-black via-transparent to-salon-black z-10 w-full h-full pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-salon-black/80 via-transparent to-transparent z-10 w-full h-full pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div 
          className="container mx-auto px-4 relative z-10 flex flex-col items-center mt-6 text-center"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#E8D5A3] via-[#C9A84C] to-[#E8D5A3] drop-shadow-lg leading-tight pb-2">
            Where Beauty Meets Family
          </h1>
          <p className="text-lg md:text-2xl text-salon-cream font-light max-w-2xl mx-auto mb-10 tracking-wide opacity-90">
            Hyderabad&apos;s most trusted unisex salon — Peerzadiguda since 2018
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md mx-auto sm:max-w-none">
            <Link 
              href="/book"
              className="bg-salon-gold text-salon-black font-semibold px-8 py-4 text-center rounded-sm hover:bg-salon-gold-light transition-colors uppercase tracking-widest text-sm"
            >
              Book Appointment
            </Link>
            <Link 
              href="/services"
              className="border border-salon-gold text-salon-gold font-semibold px-8 py-4 text-center rounded-sm hover:bg-salon-gold/10 transition-colors uppercase tracking-widest text-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="bg-salon-surface border-y border-salon-gold/20 py-4 flex overflow-hidden group">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
             <span key={i} className="text-salon-gold font-medium uppercase tracking-[0.2em] text-sm px-4">
               Hair • Skin • Bridal • Nails • Tattoo • Waxing • Facials • Smoothening • 
             </span>
          ))}
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-24 bg-salon-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-salon-gold mb-4">Our Premium Services</h2>
            <p className="text-salon-muted tracking-wide max-w-2xl mx-auto">Elevate your style with our expert care tailored for everyone.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hair Care", icon: Scissors, href: "/services#hair" },
              { title: "Skin Care", icon: Sparkles, href: "/services#skin" },
              { title: "Bridal Makeup", icon: Diamond, href: "/services#bridal" },
              { title: "Nail Art", icon: Gem, href: "/services#nails" },
              { title: "Men's Grooming", icon: Activity, href: "/services#mens" },
              { title: "Tattoo & Piercing", icon: Star, href: "/services#tattoo" },
            ].map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link href={service.href} className="group block h-full">
                  <div className="bg-salon-surface border border-salon-gold/10 p-10 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(201,168,76,0.12)] hover:border-salon-gold/30 rounded-sm">
                    <service.icon className="w-12 h-12 text-salon-gold mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                    <h3 className="text-xl font-heading text-salon-cream tracking-wider">{service.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-20 bg-salon-surface relative border-y border-salon-gold/10">
        <div className="container mx-auto px-4">
          {/* AnimatedCounters likely uses its own classes, but we wrap it correctly */}
          <div className="opacity-90">
            <AnimatedCounters 
              stats={[
                { value: 6, label: "Years Experience", suffix: "+" },
                { value: 1510, label: "Happy Clients", suffix: "+" },
                { value: 4.8, label: "Rating", suffix: "★" },
                { value: 20, label: "Services", suffix: "+" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 bg-salon-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              {/* Decorative Frame Placeholder */}
              <div className="relative w-full max-w-md aspect-[4/5] border p-4 border-salon-gold/30 transform lg:-rotate-3">
                <div className="w-full h-full bg-salon-surface flex items-center justify-center overflow-hidden">
                   <div className="text-salon-gold/20 font-heading text-6xl opacity-50">&quot;ROOT&apos;S&quot;</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b border-r border-salon-gold/50"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-salon-gold/50"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-heading text-salon-gold mb-6 leading-tight">
                  A salon built for every member of your family
                </h2>
                <p className="text-salon-muted text-lg mb-8 leading-relaxed font-light">
                  Root&apos;s the Family Salon has been Peerzadiguda&apos;s destination for top-tier beauty and grooming services since 2018. We believe in providing an oasis of luxury, ensuring everyone - from men and women to kids - walks out feeling their absolute best.
                </p>
                <Link 
                  href="/about"
                  className="inline-block border-b border-salon-gold text-salon-gold pb-1 font-semibold uppercase tracking-widest text-sm hover:text-salon-cream hover:border-salon-cream transition-colors"
                >
                  Discover Our Story
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS TEASER */}
      <section className="py-24 bg-salon-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading text-salon-gold mb-4">Client Love</h2>
            <p className="text-salon-muted tracking-wide">See what our community has to say.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                text: "Professional staff, amazing hair straightening result. The entire process was smooth and the outcome was beyond my expectations.",
                author: "Priya S.",
                service: "Hair Care"
              },
              {
                text: "Best tattoo in Hyderabad, very hygienic. They paid close attention to detail and made sure I was comfortable throughout.",
                author: "Ravi K.",
                service: "Tattoo & Piercing"
              },
              {
                text: "Loved the gold facial, skin felt amazing. The aesthetician was very knowledgeable and suggested exactly what my skin needed.",
                author: "Sneha M.",
                service: "Skin Care"
              }
            ].map((review, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-salon-black border border-salon-gold/10 p-8 flex flex-col h-full relative">
                  <div className="text-salon-gold/20 text-6xl absolute top-4 left-4 font-heading leading-none">&quot;</div>
                  <div className="flex text-salon-gold mb-6 relative z-10 pt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-salon-cream font-light italic flex-grow mb-6 relative z-10">
                    &quot;{review.text}&quot;
                  </p>
                  <div>
                    <h4 className="text-salon-gold font-heading text-lg">{review.author}</h4>
                    <span className="text-salon-muted text-sm">{review.service}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/reviews"
              className="inline-block border border-salon-gold text-salon-gold px-8 py-3 rounded-sm uppercase tracking-widest text-sm font-semibold hover:bg-salon-gold hover:text-salon-black transition-colors"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-gradient-to-br from-[#C9A84C] via-[#E8D5A3] to-[#C9A84C] text-salon-black text-center">
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-heading mb-8">Ready for a new look?</h2>
            <Link 
              href="/book"
              className="inline-block bg-salon-black text-salon-gold px-12 py-5 rounded-sm uppercase tracking-widest font-bold shadow-2xl hover:bg-[#1A1A2E] hover:text-[#E8D5A3] transition-all transform hover:-translate-y-1"
            >
              Book Appointment
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
