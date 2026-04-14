"use client";

import { useState } from "react";
import { Star, CheckCircle2, MessageSquare, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const allReviews = [
  { id: 1, name: "Sneha Reddy", category: "Hair", rating: 5, date: "2 weeks ago", text: "Got advanced hair straightening done here. The results are incredibly sleek and the stylist explained the aftercare perfectly. Extremely happy with the premium products used.", verified: true },
  { id: 2, name: "Rajesh K.", category: "Grooming", rating: 5, date: "1 month ago", text: "Got an amazing tattoo here. The artist was very hygienic, sterile equipment, and the detailing is perfect. Highly recommend their studio work.", verified: true },
  { id: 3, name: "Priya Sharma", category: "Skin", rating: 4, date: "1 month ago", text: "The gold hydrating facial gave me an instant glow before my friend's wedding. The esthetician was very gentle. Just deduct one star because I had to wait 10 mins.", verified: true },
  { id: 4, name: "Anjali T.", category: "Bridal", rating: 5, date: "2 months ago", text: "Booked them for my bridal makeup. They gave me the flawless HD look I wanted without making it look cakey. The entire team was professional and made me feel like a queen.", verified: true },
  { id: 5, name: "Varun D.", category: "Hair", rating: 5, date: "3 months ago", text: "Best men's haircut in Peerzadiguda. True to their word, very expert hands. The salon vibe is luxurious and they really take their time.", verified: true },
  { id: 6, name: "Neha Menon", category: "Skin", rating: 5, date: "4 months ago", text: "I regularly come here for my body polish and cleanups. The standard of hygiene and premium products used unmatched in this area.", verified: true },
  { id: 7, name: "Swathi P.", category: "Bridal", rating: 5, date: "5 months ago", text: "Their pre-bridal skin package transformed my skin completely. I felt completely relaxed and ready for my big day. Super professional behavior.", verified: true },
  { id: 8, name: "Arjun S.", category: "Grooming", rating: 4, date: "6 months ago", text: "Very premium service for men's facial and beard styling. The vibe is relaxing and completely dark themed which I love.", verified: true },
  { id: 9, name: "Kavya J.", category: "Hair", rating: 5, date: "7 months ago", text: "My layered haircut with blowdry turned out phenomenonal. It's truly a luxury experience at an affordable price.", verified: true },
];

export default function ReviewsClient() {
  const [activeTab, setActiveTab] = useState("All");
  
  const tabs = ["All", "Hair", "Skin", "Bridal", "Grooming"];
  
  const filteredReviews = activeTab === "All" 
    ? allReviews 
    : allReviews.filter(r => r.category === activeTab);

  return (
    <div className="flex flex-col gap-16">
      
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3">
         {tabs.map((tab) => (
           <button
             key={tab}
             onClick={() => setActiveTab(tab)}
             className={`px-6 py-2 rounded-sm text-xs uppercase tracking-widest font-bold transition-all ${
               activeTab === tab 
                 ? "bg-salon-gold text-salon-black shadow-[0_0_15px_rgba(201,168,76,0.4)] border border-salon-gold" 
                 : "bg-transparent text-salon-muted border border-salon-gold/20 hover:border-salon-gold hover:text-salon-gold"
             }`}
           >
             {tab}
           </button>
         ))}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReviews.map((review, idx) => (
          <ScrollReveal key={review.id} delay={idx * 0.1}>
            <div className="bg-salon-surface p-8 border border-salon-gold/20 rounded-sm flex flex-col h-full hover:border-salon-gold/50 hover:-translate-y-1 transition-all shadow-xl group relative">
              
              <div className="absolute top-0 right-8 px-3 py-1 bg-salon-black border-b border-l border-r border-salon-gold/20 text-salon-gold text-[10px] uppercase tracking-widest font-bold rounded-b-sm group-hover:bg-salon-gold group-hover:text-salon-black transition-colors">
                 {review.category}
              </div>

              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-salon-gold text-salon-gold' : 'fill-salon-black text-salon-black border border-salon-gold/20 leading-none'}`} />
                ))}
              </div>
              
              <p className="text-salon-cream font-light text-sm leading-relaxed mb-8 flex-grow italic">
                &quot;{review.text}&quot;
              </p>

              <div className="flex justify-between items-end border-t border-salon-gold/10 pt-4">
                <div className="flex flex-col">
                  <span className="font-heading text-lg text-salon-gold">{review.name}</span>
                  <span className="text-xs text-salon-muted uppercase tracking-widest">{review.date}</span>
                </div>
                {review.verified && (
                  <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Leave a Review Section */}
      <div className="w-full max-w-3xl mx-auto bg-[#0D0D1A] border border-salon-gold/30 rounded-sm p-10 md:p-14 text-center mt-12 relative overflow-hidden group">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-salon-gold/5 w-full h-full pointer-events-none group-hover:scale-110 transition-transform duration-700">
           <MessageSquare className="w-full h-full object-cover" />
         </div>

         <div className="relative z-10">
            <h2 className="text-3xl font-heading text-salon-gold mb-3">Leave a Review</h2>
            <p className="text-salon-cream font-light text-sm mb-10 max-w-md mx-auto">
               Loved your transformation? We&apos;d be honored if you shared your experience with the world.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-salon-surface border border-salon-gold/30 text-salon-cream font-bold py-4 px-8 rounded-sm hover:bg-salon-gold hover:text-salon-black transition-colors uppercase tracking-widest text-[10px] md:text-xs">
                  Review on Google <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
               </a>
               <a href="https://justdial.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#F66B0E] border border-[#F66B0E] text-white font-bold py-4 px-8 rounded-sm hover:bg-[#e05b05] transition-colors uppercase tracking-widest text-[10px] md:text-xs">
                  Review on JustDial <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
               </a>
            </div>
         </div>
      </div>
    </div>
  );
}
