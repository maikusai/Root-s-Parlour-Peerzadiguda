import Link from "next/link";
import { ChevronRight, Heart, Sparkles, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Us | Root's the Family Salon",
  description: "Learn about the mission, team, and story behind Root's the Family Salon, Peerzadiguda's most trusted luxury unisex family salon.",
};

export default function AboutPage() {
  const team = [
    { name: "Rahul Varma", role: "Creative Director", specialty: "Bridal Styling" },
    { name: "Aisha Khan", role: "Senior Stylist", specialty: "Color & Highlights" },
    { name: "Sneha Reddy", role: "Esthetician", specialty: "Advanced Skincare" },
    { name: "Vikram Singh", role: "Master Barber", specialty: "Men's Grooming" },
  ];

  const milestones = [
    { year: "2018", title: "Founded", desc: "Started our journey in Peerzadiguda." },
    { year: "2020", title: "500 Clients", desc: "Grew a stable, loyal client base." },
    { year: "2022", title: "1000 Clients", desc: "Expanded our luxury service menu." },
    { year: "2024", title: "Top Rated", desc: "Rated #1 family salon in the area." },
  ];

  return (
    <div className="w-full bg-salon-black min-h-screen pb-24 text-salon-cream overflow-hidden">
      {/* Hero */}
      <section className="bg-[#0D0D1A] pt-28 pb-12 md:pb-32 relative border-b border-salon-gold/20">
         <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-salon-black to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-2 text-sm text-salon-muted mb-6 font-medium tracking-widest uppercase">
               <Link href="/" className="hover:text-salon-gold transition-colors">Home</Link>
               <ChevronRight className="w-4 h-4" />
               <span className="text-salon-gold">About Us</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-heading text-salon-gold mb-6 tracking-wide drop-shadow-2xl">
               Our Story
            </h1>
         </div>
      </section>

      <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-20">
         
         {/* Story Section */}
         <ScrollReveal delay={0.1}>
            <div className="bg-salon-surface p-6 sm:p-10 md:p-16 border border-salon-gold/20 rounded-sm shadow-2xl max-w-4xl mx-auto text-center mb-16 md:mb-24 relative group">
               <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Sparkles className="w-64 h-64 text-salon-gold" />
               </div>
               <h2 className="text-3xl font-heading text-salon-gold mb-8">The Beginning</h2>
               <p className="text-base md:text-2xl text-salon-cream font-light leading-relaxed tracking-wide italic font-heading relative z-10 line-clamp-none">
                 &quot;Root&apos;s was born in 2018 in the heart of Peerzadiguda with a single mission: to bring premium salon services to every family in the neighbourhood. Over the years, we have served 1,500+ happy clients and grown into Hyderabad&apos;s most trusted unisex family salon.&quot;
               </p>
            </div>
         </ScrollReveal>

         {/* Values Section */}
         <div className="mb-16 md:mb-24">
            <div className="text-center mb-10 md:mb-16">
               <h2 className="text-3xl lg:text-4xl font-heading text-salon-gold mb-4">Our Values</h2>
               <p className="text-salon-muted font-light tracking-wide uppercase text-sm">What Drives Us Every Day</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ScrollReveal delay={0.1}>
                  <div className="bg-salon-surface p-10 border border-salon-gold/20 rounded-sm text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                     <Heart className="w-10 h-10 text-salon-gold mb-6" />
                     <h3 className="text-xl font-heading text-salon-gold mb-3">Family First</h3>
                     <p className="text-salon-muted text-sm font-light leading-relaxed">A completely inclusive, safe, and welcoming environment created specifically for all age groups and members of your family.</p>
                  </div>
               </ScrollReveal>
               <ScrollReveal delay={0.2}>
                  <div className="bg-salon-surface p-10 border border-salon-gold/20 rounded-sm text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                     <Sparkles className="w-10 h-10 text-salon-gold mb-6" />
                     <h3 className="text-xl font-heading text-salon-gold mb-3">Expert Hands</h3>
                     <p className="text-salon-muted text-sm font-light leading-relaxed">Highly trained, passionately creative professionals dedicated exclusively to bringing out your absolute best look.</p>
                  </div>
               </ScrollReveal>
               <ScrollReveal delay={0.3}>
                  <div className="bg-salon-surface p-10 border border-salon-gold/20 rounded-sm text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                     <Shield className="w-10 h-10 text-salon-gold mb-6" />
                     <h3 className="text-xl font-heading text-salon-gold mb-3">Premium Products</h3>
                     <p className="text-salon-muted text-sm font-light leading-relaxed">Zero compromises. We utilize only highly certified, internationally renowned brands for skin and hair care.</p>
                  </div>
               </ScrollReveal>
            </div>
         </div>

         {/* Milestones Horizontal Timeline */}
         <ScrollReveal delay={0.1}>
           <div className="mb-16 md:mb-24 bg-[#0D0D1A] p-8 md:p-16 border border-salon-gold/20 rounded-sm shadow-2xl relative">
              <h2 className="text-3xl lg:text-4xl font-heading text-salon-gold mb-10 md:mb-16 text-center">Our Journey</h2>
              
              <div className="flex flex-col lg:flex-row items-start justify-between relative">
                 {/* Connecting Line (Desktop) */}
                 <div className="hidden lg:block absolute top-[28px] left-20 right-20 h-px bg-salon-gold/20 z-0"></div>
                 {/* Connecting Line (Mobile) */}
                 <div className="block lg:hidden absolute left-[28px] top-6 bottom-6 w-px bg-salon-gold/20 z-0"></div>
                 
                 {milestones.map((ms, idx) => (
                   <div key={idx} className="flex flex-row lg:flex-col lg:items-center relative z-10 mb-12 lg:mb-0 w-full lg:w-48 text-left lg:text-center group">
                      <div className="w-14 h-14 shrink-0 bg-salon-surface border border-salon-gold flex items-center justify-center rounded-full mb-0 lg:mb-6 mx-0 lg:mx-auto mr-6 lg:mr-0 shadow-[0_0_15px_rgba(201,168,76,0.3)] group-hover:bg-salon-gold transition-colors duration-500">
                         <span className="text-salon-gold group-hover:text-salon-black font-bold text-sm tracking-wider">{ms.year}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-heading text-salon-cream mb-2 pt-1 lg:pt-0">{ms.title}</h3>
                        <p className="text-salon-muted text-sm font-light leading-relaxed pr-4 lg:pr-0">{ms.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
         </ScrollReveal>

         {/* Team Section */}
         <div className="mb-10">
            <div className="text-center mb-10 md:mb-16">
               <h2 className="text-3xl lg:text-4xl font-heading text-salon-gold mb-4">Meet Our Stylists</h2>
               <p className="text-salon-muted font-light tracking-wide uppercase text-sm">The artists behind the magic</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {team.map((member, idx) => (
                 <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="bg-salon-surface border border-salon-gold/20 p-8 rounded-sm text-center flex flex-col items-center group shadow-xl hover:border-salon-gold/40 transition-colors">
                       <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-salon-gold/30 group-hover:border-salon-gold transition-colors block p-1">
                          <div className="w-full h-full rounded-full bg-salon-black flex items-center justify-center border border-salon-gold/10">
                             <span className="text-salon-gold/30 uppercase tracking-widest text-[10px] text-center font-bold">Photo Pending</span>
                          </div>
                       </div>
                       <h3 className="text-xl font-heading text-salon-cream mb-1">{member.name}</h3>
                       <p className="text-salon-gold text-xs uppercase tracking-widest mb-4 font-bold">{member.role}</p>
                       <p className="text-salon-muted font-light text-xs bg-salon-black px-4 py-2 rounded-sm border border-salon-gold/10 inline-block uppercase tracking-widest">
                         {member.specialty}
                       </p>
                    </div>
                 </ScrollReveal>
               ))}
            </div>
         </div>

      </div>
    </div>
  );
}
