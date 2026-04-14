import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import ReviewsClient from "@/components/ReviewsClient";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedStats from "@/components/AnimatedStats";

export const metadata = {
  title: "Client Reviews | Root's the Family Salon",
  description: "Read verified reviews from our luxurious salon in Peerzadiguda. Rated 4.8★ on JustDial.",
};

export default function ReviewsPage() {
  return (
    <div className="w-full bg-salon-black min-h-screen pb-24 text-salon-cream">
      
      {/* Hero */}
      <section className="bg-[#0D0D1A] pt-28 pb-12 md:pb-24 relative overflow-hidden border-b border-salon-gold/20">
         <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-salon-black to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-2 text-sm text-salon-muted mb-6 font-medium tracking-widest uppercase">
               <Link href="/" className="hover:text-salon-gold transition-colors">Home</Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-salon-gold">Reviews</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-heading text-salon-gold mb-4 md:mb-6 tracking-wide drop-shadow-2xl">
               What Our Clients Say
            </h1>
            
            <div className="inline-flex items-center gap-2 bg-salon-surface border border-salon-gold/30 px-6 py-2 rounded-full mb-6 md:mb-8 shadow-xl">
               <span className="text-salon-cream font-bold text-lg">4.8</span>
               <Star className="w-5 h-5 fill-salon-gold text-salon-gold" />
               <span className="w-px h-4 bg-salon-gold/30 mx-2"></span>
               <span className="text-salon-gold font-bold uppercase tracking-widest text-xs">JustDial Verified</span>
            </div>

            <p className="text-base md:text-lg text-salon-muted max-w-2xl leading-relaxed font-light tracking-wide px-4">
               Real stories from real transformations. See why we&apos;re Peerzadiguda&apos;s most trusted premium salon experience.
            </p>
         </div>
      </section>

      {/* Animated Stats Bar */}
      <AnimatedStats />

      <div className="container mx-auto px-4">
        <ScrollReveal delay={0.1}>
           <ReviewsClient />
        </ScrollReveal>
      </div>
    </div>
  );
}
