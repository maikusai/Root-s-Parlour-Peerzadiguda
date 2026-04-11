"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Star, CheckCircle2, MessageSquare } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

// MOCK DATA: Simulating reviews fetched from DB/Google
const allReviews = [
  { id: 1, name: "Rahul S.", rating: 5, date: "2 weeks ago", text: "Very professional staff. Reports were delivered on time and the doctor explained everything clearly. Prices are very reasonable.", verified: true },
  { id: 2, name: "Sneha M.", rating: 5, date: "1 month ago", text: "Clean lab, quick service. Booked online and had no waiting time. Will definitely come back.", verified: true },
  { id: 3, name: "Venkat R.", rating: 5, date: "1 month ago", text: "Best diagnostic center in Peerzadiguda. Home collection was prompt and the phlebotomist was very gentle.", verified: true },
  { id: 4, name: "Priya P.", rating: 4, date: "2 months ago", text: "Good experience overall. The staff is cooperative and the reports are accurate.", verified: true },
  { id: 5, name: "Arjun K.", rating: 5, date: "3 months ago", text: "They have all the advanced equipment. Got my parents full body checkup done here. Highly recommended.", verified: true },
  { id: 6, name: "Anjali T.", rating: 5, date: "3 months ago", text: "Very hygienic and well maintained. Walked in for a blood test and was done in 10 minutes.", verified: true },
  { id: 7, name: "Mohan D.", rating: 4, date: "4 months ago", text: "Reliable reports and decent pricing for the health packages. Could improve the waiting area seating slightly.", verified: true },
  { id: 8, name: "Kavya J.", rating: 5, date: "5 months ago", text: "Exceptional service! The home collection person arrived exactly on time at 7 AM.", verified: true },
  { id: 9, name: "Vijay C.", rating: 5, date: "6 months ago", text: "Trustworthy clinic right in our neighborhood. The doctor's consultation on the reports was very helpful.", verified: true },
  { id: 10, name: "Rohit N.", rating: 5, date: "6 months ago", text: "Fast and efficient. Received my digital reports via WhatsApp within 6 hours.", verified: true },
  { id: 11, name: "Nisha V.", rating: 4, date: "8 months ago", text: "Very friendly and professional reception staff. Tests are conducted smoothly.", verified: true },
  { id: 12, name: "Suresh P.", rating: 5, date: "1 year ago", text: "Have been visiting SBR for 5 years now for regular checkups. Never disappointed with their service.", verified: true },
];

type ReviewFormData = {
  name: string;
  rating: number;
  text: string;
};

export default function ReviewsClient() {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ratingHover, setRatingHover] = useState(0);
  
  const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<ReviewFormData>({
    defaultValues: { rating: 0, text: "", name: "" }
  });
  
  const currentRating = watch("rating");

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, allReviews.length));
  };

  const onSubmit = async (data: ReviewFormData) => {
    if (data.rating === 0) {
      toast.error("Please select a star rating!");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call to save review for moderation
    setTimeout(() => {
      toast.success("Thank you! Your review has been submitted to admin for moderation.", {
        duration: 5000,
        position: 'top-center',
        style: { background: '#27ae60', color: '#fff', fontWeight: 'bold' }
      });
      reset();
      setRatingHover(0);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-16">
      
      {/* Review Cards Grid */}
      <div className="w-full">
         <h2 className="text-3xl font-bold text-medical-blue mb-8 text-center md:text-left">Patient Experiences</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {allReviews.slice(0, visibleCount).map((review) => (
             <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
               <div className="flex justify-between items-start mb-4">
                 <div className="flex flex-col">
                   <span className="font-bold text-slate-800">{review.name}</span>
                   <span className="text-xs text-slate-500 mt-0.5">{review.date}</span>
                 </div>
                 {review.verified && (
                   <span className="inline-flex items-center gap-1 bg-green-50 text-accent-green text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                     <CheckCircle2 className="w-3 h-3" /> Verified
                   </span>
                 )}
               </div>
               
               <div className="flex gap-1 mb-3">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-100 text-slate-200'}`} />
                 ))}
               </div>
               
               <p className="text-slate-600 text-sm leading-relaxed flex-grow">&quot;{review.text}&quot;</p>
             </div>
           ))}
         </div>
         
         {visibleCount < allReviews.length && (
           <div className="flex justify-center mt-10">
             <button onClick={loadMore} className="bg-white border-2 border-slate-200 text-slate-700 font-bold py-3 px-8 rounded-full hover:border-medical-blue hover:text-medical-blue transition-colors">
               Load More Reviews
             </button>
           </div>
         )}
      </div>

      <div className="w-full h-px bg-slate-200"></div>

      {/* Submit Your Review Form */}
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100">
         <Toaster />
         <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-50 text-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
               <MessageSquare className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Share Your Experience</h2>
            <p className="text-slate-500 text-sm">Your feedback helps us improve and helps others make informed health decisions.</p>
         </div>

         {/* Redirect to Google Button */}
         <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="w-full mb-8 flex justify-center items-center gap-2 border-2 border-[#4285F4] bg-[#4285F4]/5 text-[#4285F4] font-bold py-3.5 rounded-xl hover:bg-[#4285F4] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"/></svg>
            Leave a Google Review
         </a>

         <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-slate-400 text-sm font-medium">OR SUBMIT DIRECTLY</span>
            <div className="flex-1 h-px bg-slate-200"></div>
         </div>

         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
           <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 block text-center">Your Rating <span className="text-red-500">*</span></label>
              <div className="flex justify-center gap-2" onMouseLeave={() => setRatingHover(0)}>
                 {[1, 2, 3, 4, 5].map((star) => (
                    <button
                       key={star}
                       type="button"
                       onMouseEnter={() => setRatingHover(star)}
                       onClick={() => setValue("rating", star)}
                       className="focus:outline-none focus:scale-110 transition-transform"
                    >
                       <Star className={`w-10 h-10 transition-colors ${(ratingHover || currentRating) >= star ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-100 text-slate-200'}`} />
                    </button>
                 ))}
               </div>
           </div>

           <div className="space-y-1.5">
             <label className="text-sm font-semibold text-slate-700">Name <span className="text-red-500">*</span></label>
             <input 
               {...register("name", { required: "Name is required" })}
               className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all"
               placeholder="First Name + Last Initial (e.g. John D.)"
             />
             {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
           </div>

           <div className="space-y-1.5">
             <label className="text-sm font-semibold text-slate-700">Review <span className="text-red-500">*</span></label>
             <textarea 
               {...register("text", { required: "Please write your review" })}
               rows={4}
               className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all resize-none"
               placeholder="How was your experience?"
             />
             {errors.text && <p className="text-red-500 text-xs">{errors.text.message}</p>}
           </div>

           <button 
             type="submit"
             disabled={isSubmitting}
             className="w-full bg-medical-blue text-white font-bold py-4 rounded-xl shadow-md hover:bg-medical-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
           >
             {isSubmitting ? 'Submitting...' : 'Submit Review'}
           </button>
           <p className="text-center text-xs text-slate-400 mt-4">Submitted reviews appear publicly after moderation.</p>
         </form>
      </div>

    </div>
  );
}
