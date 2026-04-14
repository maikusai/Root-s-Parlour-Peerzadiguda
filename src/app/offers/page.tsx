import Link from "next/link";
import { ChevronRight, Clock, Star, Gift, ShieldAlert, Sparkles, Send } from "lucide-react";

export const metadata = {
  title: "Exclusive Salon Offers & Memberships | Root's the Family Salon",
  description: "Grab limited-time combo packages, seasonal deals, and join our loyalty program at Root's the Family Salon in Peerzadiguda.",
};

export default function OffersPage() {
  const phoneNumber = "+919182637770";
  const whatsappMsg = encodeURIComponent("Hi, I want to subscribe to exclusive WhatsApp offers!");

  const offers = [
    {
      title: "Family Package",
      desc: "Haircuts and wash for up to 4 family members in a single visit at an unbeatable combo rate.",
      originalPrice: "₹1,200",
      offerPrice: "₹799",
      badge: "Limited Time",
      icon: Gift
    },
    {
      title: "Bridal Pre-Package",
      desc: "Ultimate bridal prep: 3 premium glowing facial sessions + full body wax + expert threading combo.",
      originalPrice: "₹8,500",
      offerPrice: "₹5,499",
      badge: "Ending Soon",
      icon: Sparkles
    },
    {
      title: "Monthly Membership",
      desc: "Unlimited eyebrow threading/upper lip + 1 luxurious hydrating facial every single month at a flat rate.",
      originalPrice: "₹2,500",
      offerPrice: "₹1,499",
      badge: "Best Value",
      icon: Star
    }
  ];

  return (
    <div className="w-full bg-salon-black min-h-screen pb-24 text-salon-cream">
      
      {/* Hero Section */}
      <section className="bg-[#0D0D1A] pt-28 pb-12 md:pb-20 relative overflow-hidden border-b border-salon-gold/20">
         <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-salon-black to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-2 text-sm text-salon-muted mb-6 font-medium tracking-widest uppercase">
               <Link href="/" className="hover:text-salon-gold transition-colors">Home</Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-salon-gold">Offers</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-heading mb-4 md:mb-6 tracking-wide drop-shadow-2xl">
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-salon-gold-light via-salon-gold to-yellow-600">Exclusive Offers</span>
            </h1>
            <p className="text-base md:text-lg text-salon-muted max-w-2xl leading-relaxed font-light tracking-wide px-4">
               Indulge in premium salon services at unmatched value. Discover our seasonal packages, family combos, and memberships.
            </p>
         </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8 md:mt-20 relative z-20">
         
         {/* Current Offers Section */}
         <div className="mb-24">
            <div className="flex items-center justify-between mb-12 border-b border-salon-gold/10 pb-6">
               <h2 className="text-3xl font-heading text-salon-cream">Current Offers</h2>
               <div className="hidden md:flex items-center gap-2 text-salon-muted text-sm uppercase tracking-widest font-bold">
                 <ShieldAlert className="w-4 h-4 text-salon-gold" /> Prices Valid This Month Only
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {offers.map((offer, idx) => (
                 <div key={idx} className="bg-salon-surface border border-salon-gold/20 rounded-sm p-8 shadow-2xl flex flex-col relative group hover:border-salon-gold/50 transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]">
                    <div className="absolute -top-3 right-6 bg-red-900 border border-red-500/30 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-sm shadow-xl flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {offer.badge}
                    </div>
                    
                    <div className="w-12 h-12 bg-salon-black border border-salon-gold/20 flex items-center justify-center rounded-sm mb-6 pb-0 group-hover:scale-110 transition-transform">
                       <offer.icon className="w-6 h-6 text-salon-gold" />
                    </div>

                    <h3 className="text-2xl font-heading text-salon-gold mb-3">{offer.title}</h3>
                    <p className="text-salon-muted font-light text-sm leading-relaxed mb-8 flex-1">
                       {offer.desc}
                    </p>

                    <div className="flex items-baseline gap-3 mb-8">
                       <span className="text-salon-muted line-through text-lg">{offer.originalPrice}</span>
                       <span className="text-3xl font-heading text-salon-cream font-bold">{offer.offerPrice}</span>
                    </div>

                    <Link 
                      href={`/book?service=${encodeURIComponent(offer.title)}`}
                      className="w-full text-center py-4 bg-transparent border border-salon-gold text-salon-gold uppercase tracking-widest text-xs font-bold hover:bg-salon-gold hover:text-salon-black transition-colors rounded-sm"
                    >
                      Book Now
                    </Link>
                 </div>
               ))}
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Loyalty Section */}
            <div className="bg-[#0D0D1A] rounded-sm p-10 border border-salon-gold/20 relative overflow-hidden group">
               <div className="absolute right-0 bottom-0 opacity-5 w-48 h-48 translate-x-1/4 translate-y-1/4">
                 <Star className="w-full h-full text-salon-gold" />
               </div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-heading text-salon-gold mb-2">Join Our Loyalty Program</h3>
                 <p className="text-salon-muted text-sm tracking-wide font-light mb-6 leading-relaxed max-w-sm">
                   Earn points with every single visit. Redeem points for exclusive discounts, free haircuts, and complimentary spa sessions.
                 </p>
                 <ul className="space-y-3 mb-8">
                   <li className="flex gap-3 text-salon-cream text-sm font-light">
                      <span className="text-salon-gold">✓</span> 100 Points = ₹100 Off
                   </li>
                   <li className="flex gap-3 text-salon-cream text-sm font-light">
                      <span className="text-salon-gold">✓</span> Birthday & Anniversary Surprises
                   </li>
                   <li className="flex gap-3 text-salon-cream text-sm font-light">
                      <span className="text-salon-gold">✓</span> Priority Booking Status
                   </li>
                 </ul>
                 <Link href="/book" className="inline-block px-6 py-3 bg-salon-gold text-salon-black uppercase tracking-widest text-xs font-bold rounded-sm">
                   Enroll For Free
                 </Link>
               </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-[#1A2E1A] rounded-sm p-10 border border-[#25D366]/30 relative overflow-hidden flex flex-col justify-center">
               <div className="absolute right-0 top-0 opacity-10 w-48 h-48 translate-x-1/4 -translate-y-1/4">
                 <Send className="w-full h-full text-[#25D366]" />
               </div>
               
               <div className="relative z-10 text-center">
                 <div className="w-16 h-16 bg-[#25D366]/20 mx-auto rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#25D366" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                 </div>
                 <h3 className="text-3xl font-heading text-white mb-2">WhatsApp VIP Club</h3>
                 <p className="text-green-100/80 text-sm tracking-wide font-light mb-8 max-w-sm mx-auto leading-relaxed">
                   Get exclusive, unadvertised last-minute cancellation offers and flash sales sent directly to your phone.
                 </p>
                 <a 
                   href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block px-8 py-4 bg-[#25D366] text-[#224d28] uppercase tracking-widest text-xs font-bold rounded-sm shadow-xl hover:bg-[#1db954] transition-colors"
                 >
                   Tap To Subscribe
                 </a>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
