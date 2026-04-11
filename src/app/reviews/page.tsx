import Link from "next/link";
import { ChevronRight, PlayCircle, Star } from "lucide-react";
import ReviewsClient from "@/components/ReviewsClient";

export const metadata = {
  title: "Patient Reviews | SBR Diagnostic Center",
  description: "Read verified reviews from our patients in Peerzadiguda. See why thousands trust SBR Diagnostic Center for their health checks.",
};

export default function ReviewsPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      
      {/* Reviews Hero */}
      <section className="bg-medical-blue pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Reviews</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Patients Say</h1>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl inline-flex flex-col items-center">
            <div className="flex gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                 <Star key={i} className={`w-8 h-8 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-100 text-slate-200'}`} />
              ))}
            </div>
            <div className="text-white font-bold text-lg">
               <span className="text-3xl text-yellow-400 mr-2">4.7/5</span> 
               overall rating
            </div>
            <p className="text-blue-100 text-sm mt-1">Based on 120+ verified Google Reviews</p>
          </div>
          
          <p className="text-lg text-blue-100 max-w-2xl mt-8">
            Trusted by thousands of families in Peerzadiguda, Maruthi Nagar, and Viharika Colony.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* Left Column: Analytics & Video */}
           <div className="lg:w-1/3 flex flex-col gap-8">
              
              {/* Ratings Breakdown Grid */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                 <h3 className="text-xl font-bold text-slate-800 mb-6">Rating Breakdown</h3>
                 
                 <div className="space-y-4 mb-8">
                   {[
                     { stars: 5, pct: 70 },
                     { stars: 4, pct: 20 },
                     { stars: 3, pct: 7 },
                     { stars: 2, pct: 2 },
                     { stars: 1, pct: 1 },
                   ].map((bar) => (
                      <div key={bar.stars} className="flex items-center gap-3">
                         <span className="text-sm font-bold text-slate-600 w-4">{bar.stars}</span>
                         <Star className="w-4 h-4 fill-slate-300 text-slate-300" />
                         <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${bar.pct}%` }}></div>
                         </div>
                         <span className="text-xs font-bold text-slate-400 w-8 text-right">{bar.pct}%</span>
                      </div>
                   ))}
                 </div>
                 
                 <div className="w-full h-px bg-slate-100 mb-6"></div>

                 <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Top Rated In</h4>
                 <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-700 font-medium">Staff Behaviour</span>
                       <span className="text-medical-blue font-bold">4.9 ★</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-700 font-medium">Report Accuracy</span>
                       <span className="text-medical-blue font-bold">4.8 ★</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-700 font-medium">Cleanliness</span>
                       <span className="text-medical-blue font-bold">4.8 ★</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-700 font-medium">Value for Money</span>
                       <span className="text-medical-blue font-bold">4.6 ★</span>
                    </div>
                 </div>
              </div>

              {/* Video Testimonial Placeholder */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                 <h3 className="text-xl font-bold text-slate-800 mb-4">Patient Stories</h3>
                 <p className="text-slate-500 text-sm mb-6">Hear directly from the people who trust us with their health.</p>
                 
                 <div className="w-full aspect-video bg-slate-100 rounded-xl flex items-center justify-center group cursor-pointer border border-slate-200 hover:border-medical-blue relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" />
                    <PlayCircle className="w-16 h-16 text-medical-blue z-10 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                 </div>
                 <p className="text-center text-xs text-slate-400 mt-3 italic">Video Testimonial Placeholder</p>
              </div>

           </div>

           {/* Right Column: Reviews Client */}
           <div className="lg:w-2/3">
             <ReviewsClient />
           </div>

        </div>
      </div>
    </div>
  );
}
