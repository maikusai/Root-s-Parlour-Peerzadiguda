"use client";

import { useState, useEffect } from "react";
import { Scissors, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["All", "Hair", "Skin", "Bridal", "Nails"];

// MOCK DATA: 12 Placeholders
const galleryData = [
  { id: 1, category: "Hair", title: "Premium Balayage", color: "bg-amber-900" },
  { id: 2, category: "Bridal", title: "HD Bridal Makeup", color: "bg-rose-950" },
  { id: 3, category: "Nails", title: "Gel Nail Extensions", color: "bg-fuchsia-950" },
  { id: 4, category: "Skin", title: "24k Gold Facial", color: "bg-yellow-950" },
  { id: 5, category: "Hair", title: "Keratin Treatment", color: "bg-stone-900" },
  { id: 6, category: "Skin", title: "Hydrating Facial", color: "bg-cyan-950" },
  { id: 7, category: "Bridal", title: "Engagement Look", color: "bg-rose-900" },
  { id: 8, category: "Nails", title: "Classic French Manicure", color: "bg-neutral-800" },
  { id: 9, category: "Hair", title: "Advance Layer Cut", color: "bg-zinc-900" },
  { id: 10, category: "Skin", title: "Full Body Polish", color: "bg-orange-950" },
  { id: 11, category: "Bridal", title: "Airbrush Makeup", color: "bg-pink-950" },
  { id: 12, category: "Hair", title: "Global Hair Color", color: "bg-red-950" },
];

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<{id: number, category: string, title: string, color: string} | null>(null);
  const [direction, setDirection] = useState(0);

  const filteredPhotos = activeTab === "All" ? galleryData : galleryData.filter(img => img.category === activeTab);

  // Scroll Lock & Hide FABs when lightbox is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden";
      // Find FAB buttons and hide them completely so they don't bleed through
      const fabLayers = document.querySelectorAll('.z-\\[85\\], .z-\\[90\\]');
      fabLayers.forEach(el => (el as HTMLElement).style.display = 'none');
    } else {
      document.body.style.overflow = "";
      const fabLayers = document.querySelectorAll('.z-\\[85\\], .z-\\[90\\]');
      fabLayers.forEach(el => (el as HTMLElement).style.display = '');
    }
    return () => {
      document.body.style.overflow = "";
      const fabLayers = document.querySelectorAll('.z-\\[85\\], .z-\\[90\\]');
      fabLayers.forEach(el => (el as HTMLElement).style.display = '');
    };
  }, [selectedPhoto]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    setDirection(-1);
    const idx = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    if (idx > 0) setSelectedPhoto(filteredPhotos[idx - 1]);
    else setSelectedPhoto(filteredPhotos[filteredPhotos.length - 1]); // wrap around
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    setDirection(1);
    const idx = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    if (idx < filteredPhotos.length - 1) setSelectedPhoto(filteredPhotos[idx + 1]);
    else setSelectedPhoto(filteredPhotos[0]);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : dir < 0 ? "-100%" : 0,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? "100%" : dir > 0 ? "-100%" : 0,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full flex justify-center flex-col items-center relative">
       {/* Category Tabs */}
       <div className="flex flex-wrap justify-center gap-4 mb-12 w-full">
         {tabs.map((tab) => (
           <button
             key={tab}
             onClick={() => setActiveTab(tab)}
             className={`px-6 py-2 rounded-sm text-xs uppercase tracking-widest font-semibold transition-all border ${
               activeTab === tab 
               ? "bg-salon-gold border-salon-gold text-salon-black shadow-[0_0_15px_rgba(201,168,76,0.3)]" 
               : "bg-transparent border-salon-gold/30 text-salon-cream hover:border-salon-gold hover:text-salon-gold"
             }`}
           >
             {tab}
           </button>
         ))}
       </div>

       {/* CSS Masonry Grid */}
       <div className="w-full min-h-[400px]">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
             {filteredPhotos.map((photo) => (
               <div 
                 key={photo.id}
                 onClick={() => setSelectedPhoto(photo)}
                 className={`break-inside-avoid rounded-sm overflow-hidden border border-salon-gold/10 shadow-sm hover:shadow-[0_8px_30px_rgba(201,168,76,0.15)] hover:border-salon-gold/40 transition-all cursor-pointer group relative h-64 md:h-80 w-full flex items-center justify-center ${photo.color}`}
               >
                 {/* Placeholder Content */}
                 <span className="text-salon-gold/20 font-heading text-4xl uppercase tracking-widest opacity-30 select-none rotate-[-45deg] whitespace-nowrap">ROOT&apos;S</span>

                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-salon-black via-salon-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-salon-gold text-[10px] uppercase tracking-widest mb-1">{photo.category}</p>
                    <p className="text-salon-cream font-heading text-xl">{photo.title}</p>
                 </div>
               </div>
             ))}
          </div>
       </div>

       {/* Custom Lightbox */}
       {selectedPhoto && (
         <div 
           className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-salon-black/95 backdrop-blur-md px-4 pt-24 md:pt-32 pb-6 transition-opacity animate-in fade-in duration-300"
           onClick={() => setSelectedPhoto(null)}
         >
           <button 
             className="absolute top-[90px] md:top-[110px] right-6 md:right-8 text-salon-gold hover:text-salon-cream transition-colors p-2 z-[60]"
             onClick={() => setSelectedPhoto(null)}
           >
             <Scissors className="w-7 h-7" strokeWidth={1.5} />
           </button>
           
           <div 
             className="relative w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl flex flex-col items-center animate-in zoom-in-95 duration-300"
             onClick={(e) => e.stopPropagation()}
           >
             <div className="w-full h-[45vh] md:h-[55vh] rounded-sm shadow-2xl border border-salon-gold/20 relative overflow-hidden bg-salon-surface">
               <AnimatePresence initial={false} custom={direction}>
                 <motion.div
                   key={selectedPhoto.id}
                   custom={direction}
                   variants={variants}
                   initial="enter"
                   animate="center"
                   exit="exit"
                   transition={{ x: { type: "spring", stiffness: 350, damping: 35 }, opacity: { duration: 0.2 } }}
                   className={`absolute inset-0 flex items-center justify-center ${selectedPhoto.color}`}
                 >
                   <span className="text-salon-gold/20 font-heading text-6xl md:text-8xl uppercase tracking-widest select-none drop-shadow-2xl opacity-40 rotate-[-20deg]">ROOT&apos;S SALON</span>
                 </motion.div>
               </AnimatePresence>
             </div>
             
             <div className="w-full mt-6 text-center flex flex-col items-center">
                <span className="inline-block px-3 py-1 border border-salon-gold/30 rounded-full text-salon-gold text-[10px] uppercase tracking-widest mb-3">
                   {selectedPhoto.category}
                </span>
                <h3 className="text-3xl font-heading text-salon-cream mb-6">{selectedPhoto.title}</h3>
                
                {/* Navigation Buttons placed right below the text title */}
                <div className="flex items-center gap-6 mt-0 md:mt-2">
                   <button 
                     onClick={handlePrev} 
                     className="p-2.5 md:p-3 border border-salon-gold text-salon-gold rounded-full hover:bg-salon-gold hover:text-salon-black transition-colors"
                   >
                     <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                   </button>
                   <button 
                     onClick={handleNext} 
                     className="p-2.5 md:p-3 border border-salon-gold text-salon-gold rounded-full hover:bg-salon-gold hover:text-salon-black transition-colors"
                   >
                     <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                   </button>
                </div>
             </div>
           </div>
         </div>
       )}
    </div>
  );
}
