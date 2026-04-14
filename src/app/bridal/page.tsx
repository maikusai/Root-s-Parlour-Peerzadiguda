import Link from "next/link";
import { ChevronRight, Sparkles, Star, MapPin, Heart, CheckCircle } from "lucide-react";
import BridalEnquiryForm from "@/components/BridalEnquiryForm";

export const metadata = {
  title: "Bridal Makeup & Styling | Root's the Family Salon",
  description: "Your perfect wedding look starts here. Book our premium bridal packages for HD makeup, styling, and pre-bridal skin sessions in Peerzadiguda.",
};

export default function BridalPage() {
  const packages = [
    {
      title: "Package 1",
      name: "Bridal Glow",
      price: "■ ■",
      inclusions: ["HD Bridal Makeup", "Bridal Facial", "Threading & Upper Lip", "Hair Styling Setup", "Saree/Lehenga Draping"]
    },
    {
      title: "Package 2",
      name: "Full Bridal",
      price: "■ ■ ■",
      inclusions: ["All 'Bridal Glow' Inclusions", "Classic Manicure & Pedicure", "Premium Hair Styling & Accessories", "Trial Makeup Session", "Nail Paint Application"]
    },
    {
      title: "Package 3",
      name: "Royal Bridal",
      price: "■ ■ ■ ■",
      inclusions: ["All 'Full Bridal' Inclusions", "Full Body Polish", "Pre-bridal Skin Sessions (2 visits)", "Gel Nail Extensions", "Engagement Makeup Session"]
    }
  ];

  return (
    <div className="w-full bg-salon-black min-h-screen pb-24 text-salon-cream">
      
      {/* Parallax Hero */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden border-b border-salon-gold/20 pt-20 md:pt-0">
         <div className="absolute inset-0 z-0 will-change-transform bg-[url('https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 bg-fixed"></div>
         <div className="absolute inset-0 z-0 bg-gradient-to-t from-salon-black via-salon-black/70 to-transparent"></div>
         <div className="absolute inset-0 z-0 bg-gradient-to-b from-salon-black/50 to-transparent"></div>
         
         <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
            <div className="flex items-center gap-2 text-sm text-salon-muted mb-8 font-medium tracking-widest uppercase bg-salon-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-salon-gold/20">
               <Link href="/" className="hover:text-salon-gold transition-colors">Home</Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-salon-gold">Bridal</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading text-salon-cream mb-4 md:mb-6 drop-shadow-2xl">
               Your Perfect <br/><span className="text-salon-gold italic font-light font-heading">Wedding Look</span> <br/>Starts Here
            </h1>
            <p className="text-base md:text-2xl text-salon-gold-light max-w-2xl font-light tracking-wide font-heading italic px-4">
               Unforgettable elegance for your unforgettable day.
            </p>
         </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 mt-12 md:mt-20 relative z-20">
         
         {/* Why Choose Us */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-y border-salon-gold/20 py-12">
            <div className="flex flex-col items-center text-center px-4">
               <span className="w-16 h-16 bg-salon-surface border border-salon-gold/30 rounded-full flex items-center justify-center mb-6 text-salon-gold shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                 <Star className="w-8 h-8" />
               </span>
               <h3 className="text-xl font-heading text-salon-gold mb-3">Experienced Artists</h3>
               <p className="text-salon-muted font-light text-sm leading-relaxed">Our specialist bridal styling team has curated hundreds of unique looks tailored to individual traditions.</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 border-y md:border-y-0 md:border-x border-salon-gold/20 py-8 md:py-0">
               <span className="w-16 h-16 bg-salon-surface border border-salon-gold/30 rounded-full flex items-center justify-center mb-6 text-salon-gold shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                 <Sparkles className="w-8 h-8" />
               </span>
               <h3 className="text-xl font-heading text-salon-gold mb-3">Premium Products</h3>
               <p className="text-salon-muted font-light text-sm leading-relaxed">We use only high-definition, extremely long-lasting international brands like MAC, Huda Beauty & Bobbi Brown.</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4">
               <span className="w-16 h-16 bg-salon-surface border border-salon-gold/30 rounded-full flex items-center justify-center mb-6 text-salon-gold shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                 <MapPin className="w-8 h-8" />
               </span>
               <h3 className="text-xl font-heading text-salon-gold mb-3">On-Location Available</h3>
               <p className="text-salon-muted font-light text-sm leading-relaxed">Whether at our luxury studio in Peerzadiguda or at your wedding venue, we bring the salon to you.</p>
            </div>
         </div>

         {/* Bridal Packages */}
         <div className="mb-24">
            <div className="text-center mb-10 md:mb-16">
               <h2 className="text-3xl md:text-5xl font-heading text-salon-gold mb-4">Bridal Packages</h2>
               <p className="text-salon-muted text-sm md:text-base max-w-2xl mx-auto font-light tracking-wide px-4">Curated tiers designed to prepare you for your monumental day. Customizable upon consultation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {packages.map((pkg, idx) => (
                 <div key={idx} className={`bg-salon-surface border border-salon-gold/20 rounded-sm p-8 shadow-2xl flex flex-col relative group transition-all hover:border-salon-gold/50 hover:-translate-y-2 ${idx === 1 ? 'md:-mt-4 md:mb-4 bg-gradient-to-b from-salon-surface to-[#1A1A2E]/80 shadow-[0_0_40px_rgba(201,168,76,0.15)] border-salon-gold/40' : ''}`}>
                    {idx === 1 && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-salon-gold text-salon-black text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <p className="text-salon-gold/50 text-sm font-semibold uppercase tracking-widest mb-2">{pkg.title}</p>
                    <h3 className="text-3xl font-heading text-salon-gold mb-6">{pkg.name}</h3>
                    
                    <div className="flex items-center gap-2 text-salon-gold-light text-xs font-medium tracking-[0.2em] mb-8 pb-6 border-b border-salon-gold/10">
                      <span>PRICE TIER:</span>
                      <span className="text-salon-gold">{pkg.price}</span>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex gap-3 text-salon-muted text-sm font-light leading-relaxed">
                           <CheckCircle className="w-5 h-5 text-salon-gold/70 shrink-0" />
                           <span>{inc}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#enquire" className={`mt-auto w-full text-center py-4 border uppercase tracking-widest text-xs font-bold transition-all ${idx === 1 ? 'bg-salon-gold text-salon-black border-salon-gold hover:bg-salon-gold-light' : 'bg-transparent border-salon-gold text-salon-gold hover:bg-salon-gold hover:text-salon-black'}`}>
                      Enquire Now
                    </a>
                 </div>
               ))}
            </div>
         </div>

         {/* Enquiry & Testimonial Section */}
         <div id="enquire" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start scroll-mt-24">
            
            {/* Testimonial */}
            <div className="bg-[#0D0D1A] p-10 md:p-16 border border-salon-gold/10 rounded-sm relative">
               <Heart className="absolute top-8 right-8 w-12 h-12 text-salon-gold/10" />
               <p className="text-xl md:text-2xl font-heading text-salon-cream leading-relaxed font-light italic mb-8 relative z-10">
                 "The team at Root's made me feel like absolute royalty on my wedding day. The HD makeup stayed flawless through all the rituals, and the pre-bridal skin sessions gave me a natural, undeniable glow. I cannot recommend them enough to brides inside and outside Hyderabad!"
               </p>
               <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-salon-surface rounded-full border border-salon-gold/30 flex items-center justify-center p-1 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1595956799370-1798369ec069?q=80&w=200&auto=format&fit=crop" alt="Bride" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                     <p className="text-salon-gold font-bold">Sneha Reddy</p>
                     <p className="text-salon-muted text-xs uppercase tracking-widest">Bridal Customer</p>
                  </div>
               </div>
            </div>

            {/* Enquiry Form */}
            <div>
               <BridalEnquiryForm />
            </div>
         </div>
      </div>
    </div>
  );
}
