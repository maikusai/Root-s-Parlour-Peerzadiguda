"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Scissors, Sparkles, Diamond, Gem, Star, Activity, ChevronRight } from "lucide-react";

type TabKey = "hair" | "skin" | "bridal" | "nails" | "grooming" | "specials";

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<TabKey>("hair");
  const contentRef = useRef<HTMLDivElement>(null);

  /** Scroll so the service grid appears just below the sticky header + tab bar */
  const scrollToContent = () => {
    if (!contentRef.current) return;
    // sticky header ≈ 64px mobile / 78px desktop, categories bar ≈ 70px
    // Use a comfortable 16px extra breathing room
    const offset = window.innerWidth >= 768 ? 78 + 70 + 16 : 64 + 70 + 16;
    const top = contentRef.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const tabs = [
    { id: "hair", label: "Hair Care", icon: Scissors },
    { id: "skin", label: "Skin Care", icon: Sparkles },
    { id: "bridal", label: "Bridal", icon: Diamond },
    { id: "nails", label: "Nails", icon: Gem },
    { id: "grooming", label: "Grooming", icon: Activity },
    { id: "specials", label: "Specials", icon: Star },
  ] as const;

  const servicesData = {
    hair: [
      { name: "Haircut (Layered/Advance)", desc: "Precision haircuts tailored to your face shape and lifestyle.", price: "■ ■" },
      { name: "Hair Color", desc: "Global color, balayage, or highlights using premium products.", price: "■ ■ ■" },
      { name: "Smoothening", desc: "Frizz-free, glossy, and perfectly smooth hair treatments.", price: "■ ■ ■" },
      { name: "Straightening", desc: "Permanent hair straightening for a sleek, elegant look.", price: "■ ■ ■" },
      { name: "Keratin", desc: "Restore health and shine with our deep keratin therapy.", price: "■ ■ ■" },
      { name: "Hair Spa", desc: "Deep conditioning and massage for scalp and hair vitality.", price: "■" },
      { name: "Blow Dry", desc: "Professional blowouts for volume and bounce.", price: "■" },
    ],
    skin: [
      { name: "Gold Facial", desc: "Luxurious 24k gold infused facial for an instant radiant glow.", price: "■ ■" },
      { name: "Hydrating Facial", desc: "Deep moisture lock treatment for dry and tired skin.", price: "■ ■" },
      { name: "Clean-up", desc: "Basic deep cleansing, exfoliation, and blackhead removal.", price: "■" },
      { name: "Bleach (Face/Body)", desc: "Safe skin lightening to match your natural tone.", price: "■" },
      { name: "Body Polish", desc: "Full-body exfoliation and hydration for silky smooth skin.", price: "■ ■ ■" },
    ],
    bridal: [
      { name: "HD Bridal Makeup", desc: "Flawless, camera-ready bridal look using top international brands.", price: "■ ■ ■" },
      { name: "Bridal Skin Package", desc: "Pre-wedding glowing skin treatments and preparation.", price: "■ ■ ■" },
      { name: "Engagement Makeup", desc: "Elegant and subtle styling for your pre-wedding events.", price: "■ ■" },
      { name: "Party Makeup", desc: "Glamorous looks tailored for evening parties and gatherings.", price: "■ ■" },
    ],
    nails: [
      { name: "Manicure", desc: "Classic nail shaping, cuticle care, and polish application.", price: "■" },
      { name: "Pedicure", desc: "Relaxing foot soak, scrub, nail care, and massage.", price: "■" },
      { name: "Gel Nail Extensions", desc: "Durable and beautiful extensions for glamorous hands.", price: "■ ■" },
      { name: "Nail Art", desc: "Custom designs from subtle elegance to bold patterns.", price: "■" },
      { name: "Spa Mani-Pedi", desc: "Premium hand and foot spa with deep relaxation therapy.", price: "■ ■" },
    ],
    grooming: [
      { name: "Men's Haircut", desc: "Classic and trendy cuts including beard trimming and styling.", price: "■" },
      { name: "Men's Facial", desc: "Deep cleansing tailored specifically for harder male skin.", price: "■ ■" },
      { name: "Men's Waxing", desc: "Clean and painless body waxing using premium wax.", price: "■ ■" },
      { name: "Kids' Haircut", desc: "Gentle and patient haircuts for your little ones.", price: "■" },
      { name: "Head Massage", desc: "Stress-relieving traditional head massage with oils.", price: "■" },
    ],
    specials: [
      { name: "Tattoo", desc: "Custom, hygienic, and precise tattooing by experienced artists.", price: "■ ■ ■" },
      { name: "Ear Piercing", desc: "Safe and sterile piercing for ears and simple body parts.", price: "■" },
      { name: "Rica Full Body Wax", desc: "Premium Italian lipo-soluble wax for smooth, pain-free waxing.", price: "■ ■" },
      { name: "Eyebrow Threading", desc: "Perfectly arched brows shaped to complement your face.", price: "■" },
      { name: "Package Deals", desc: "Curated combos for complete makeovers at a better value.", price: "■ ■" },
    ]
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as TabKey;
    if (Object.keys(servicesData).includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  return (
    <div className="w-full relative">
      {/* Category Tabs (Sticky) */}
      <div className="sticky top-[64px] md:top-[78px] z-40 bg-salon-black/95 backdrop-blur-md border-b border-salon-gold/20 pb-4 pt-4 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                   setActiveTab(tab.id as TabKey);
                   window.location.hash = tab.id;
                   scrollToContent();
                }}
                className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-sm font-semibold transition-all border whitespace-nowrap uppercase tracking-widest text-xs ${
                  activeTab === tab.id
                    ? "bg-salon-gold border-salon-gold text-salon-black shadow-lg"
                    : "bg-salon-surface border-salon-gold/20 text-salon-cream hover:border-salon-gold hover:text-salon-gold"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-salon-black" : "opacity-70"}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={contentRef} className="container mx-auto px-4 pb-24 pt-12">
        {/* Dynamic Service Grid */}
        <div 
           key={activeTab} // Forces re-render/animation on tab change
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-500"
        >
          {servicesData[activeTab].map((service, idx) => (
            <div key={idx} className="bg-salon-surface border border-salon-gold/10 rounded-sm p-8 shadow-sm hover:shadow-[0_8px_32px_rgba(201,168,76,0.12)] hover:border-salon-gold/30 transition-all flex flex-col h-full group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-salon-gold text-xl mb-2">{service.name}</h3>
                  <div className="flex items-center gap-2 text-salon-gold-light text-xs font-medium tracking-[0.2em]">
                    <span>PRICE RANGE:</span>
                    <span className="text-salon-gold text-[10px]">{service.price}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-salon-muted mb-8 leading-relaxed font-light flex-1">{service.desc}</p>
              <div className="mt-auto">
                <Link 
                  href={`/book?service=${encodeURIComponent(service.name)}`} 
                  className="inline-flex items-center justify-between w-full hover:text-salon-cream font-semibold px-5 py-3 border border-salon-gold/30 rounded-sm hover:bg-salon-gold hover:text-salon-black hover:border-salon-gold transition-all text-sm uppercase tracking-widest group-hover:bg-salon-gold/10"
                >
                  <span>Book This Service</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
