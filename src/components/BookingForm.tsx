"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";
import { CheckCircle, Calendar, Clock, Sparkles } from "lucide-react";

type BookingFormData = {
  fullName: string;
  mobileNumber: string;
  category: string;
  specificService: string;
  visitDate: Date | null;
  timePreference: string;
  specialRequests: string;
};

const serviceOptions: Record<string, string[]> = {
  Hair: ["Haircut (Layered/Advance)", "Hair Color", "Smoothening", "Straightening", "Keratin", "Hair Spa", "Blow Dry"],
  Skin: ["Gold Facial", "Hydrating Facial", "Clean-up", "Bleach (Face/Body)", "Body Polish"],
  Bridal: ["HD Bridal Makeup", "Bridal Skin Package", "Engagement Makeup", "Party Makeup"],
  Nails: ["Manicure", "Pedicure", "Gel Nail Extensions", "Nail Art", "Spa Mani-Pedi"],
  Grooming: ["Men's Haircut", "Men's Facial", "Men's Waxing", "Kids' Haircut", "Head Massage"],
  Specials: ["Tattoo", "Ear Piercing", "Rica Full Body Wax", "Eyebrow Threading", "Package Deals"],
  Packages: ["Family Package", "Bridal Pre-Package", "Monthly Membership", "Custom Package"]
};

// 10:00 AM to 7:30 PM in 30 min slots
const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  "07:00 PM", "07:30 PM"
];

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  
  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<BookingFormData>({
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      category: "",
      specificService: "",
      visitDate: null,
      timePreference: "",
      specialRequests: "",
    }
  });

  const selectedCategory = watch("category");

  // Allow pre-selection via URL if needed
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      for (const [cat, services] of Object.entries(serviceOptions)) {
        if (services.includes(serviceParam)) {
          setValue("category", cat);
          setValue("specificService", serviceParam);
          break;
        }
      }
    }
  }, [setValue]);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      const { error: supabaseError } = await supabase
        .from('appointments')
        .insert([
          { 
            full_name: data.fullName,
            mobile_number: data.mobileNumber,
            category: data.category,
            specific_service: data.specificService,
            visit_date: data.visitDate?.toISOString().split('T')[0],
            time_preference: data.timePreference,
            special_requests: data.specialRequests
          }
        ]);

      if (supabaseError) throw new Error(supabaseError.message);

      setSubmittedData(data);
      setIsSuccess(true);
    } catch (error: unknown) {
      toast.error(`Error: ${error instanceof Error ? error.message : 'Something went wrong'}`, {
        style: { background: '#1A1A2E', color: '#fff', border: '1px solid #C9A84C' }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMsg = encodeURIComponent("Hi Root's Salon, I would like to book an appointment.");

  if (isSuccess && submittedData) {
    return (
      <div className="bg-salon-surface border border-salon-gold/30 rounded-sm p-8 shadow-2xl text-center animate-in zoom-in duration-500 max-w-2xl mx-auto w-full">
        <div className="w-20 h-20 bg-salon-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-salon-gold" />
        </div>
        <h2 className="text-3xl font-heading text-salon-gold mb-2">Booking Confirmed!</h2>
        <p className="text-salon-muted mb-8 tracking-wide">Thank you, {submittedData.fullName}. We have received your request.</p>
        
        <div className="bg-[#0D0D1A] p-6 rounded-sm border border-salon-gold/10 text-left mb-8 space-y-4">
          <h3 className="text-salon-gold font-semibold uppercase tracking-widest text-xs border-b border-salon-gold/10 pb-2">Appointment Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-salon-muted uppercase tracking-wider">Service</p>
              <p className="text-salon-cream font-medium flex items-center gap-2"><Sparkles className="w-4 h-4 text-salon-gold" /> {submittedData.specificService || submittedData.category}</p>
            </div>
            <div>
              <p className="text-[10px] text-salon-muted uppercase tracking-wider">Date & Time</p>
              <p className="text-salon-cream font-medium flex items-center gap-2"><Calendar className="w-4 h-4 text-salon-gold" /> {submittedData.visitDate?.toDateString()}</p>
              <p className="text-salon-cream font-medium flex items-center gap-2 mt-1"><Clock className="w-4 h-4 text-salon-gold" /> {submittedData.timePreference}</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => { setIsSuccess(false); setSubmittedData(null); }}
          className="bg-transparent border border-salon-gold text-salon-gold px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-salon-gold hover:text-salon-black transition-colors"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-salon-surface border border-salon-gold/20 rounded-sm p-5 md:p-10 w-full max-w-2xl mx-auto shadow-2xl relative">
      <Toaster />
      <h2 className="text-2xl md:text-3xl font-heading text-salon-gold mb-6 md:mb-8 text-center md:text-left">Details</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[10px] md:text-[11px] uppercase tracking-widest text-salon-muted font-semibold">Full Name <span className="text-salon-gold">*</span></label>
            <input 
              {...register("fullName", { required: "Name is required" })}
              className="w-full p-2.5 md:p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
              placeholder="Your name"
            />
            {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName.message}</p>}
          </div>

          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[10px] md:text-[11px] uppercase tracking-widest text-salon-muted font-semibold">Phone Number <span className="text-salon-gold">*</span></label>
            <div className="flex">
              <span className="inline-flex items-center px-3 border border-r-0 border-salon-gold/20 bg-salon-black text-salon-muted font-medium text-sm rounded-l-sm">
                +91
              </span>
              <input 
                {...register("mobileNumber", { 
                  required: "Phone is required", 
                  pattern: { value: /^[0-9]{10}$/, message: "Valid 10 digits" }
                })}
                className="w-full p-2.5 md:p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-r-sm text-sm"
                placeholder="10-digit number"
              />
            </div>
            {errors.mobileNumber && <p className="text-red-400 text-xs">{errors.mobileNumber.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[10px] md:text-[11px] uppercase tracking-widest text-salon-muted font-semibold">Category <span className="text-salon-gold">*</span></label>
            <select 
              {...register("category", { required: "Select a category" })}
              className="w-full p-2.5 md:p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm appearance-none text-sm"
            >
              <option value="">Select Category</option>
              {Object.keys(serviceOptions).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-400 text-xs">{errors.category.message}</p>}
          </div>

          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[10px] md:text-[11px] uppercase tracking-widest text-salon-muted font-semibold">Service</label>
            <select 
              {...register("specificService")}
              className="w-full p-2.5 md:p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm appearance-none disabled:opacity-50 text-sm"
              disabled={!selectedCategory}
            >
              <option value="">Select Specific Service</option>
              {selectedCategory && serviceOptions[selectedCategory]?.map(svc => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1.5 md:space-y-2 flex flex-col">
            <label className="text-[10px] md:text-[11px] uppercase tracking-widest text-salon-muted font-semibold">Date <span className="text-salon-gold">*</span></label>
            <Controller
               control={control}
               name="visitDate"
               rules={{ required: "Date is required" }}
               render={({ field }) => (
                 <DatePicker
                   selected={field.value}
                   onChange={(date: Date | null) => field.onChange(date)}
                   minDate={new Date()}
                   className="w-full p-2.5 md:p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
                   placeholderText="Select date"
                   dateFormat="MMMM d, yyyy"
                 />
               )}
            />
            {errors.visitDate && <p className="text-red-400 text-xs">{errors.visitDate.message}</p>}
          </div>

          <div className="space-y-1.5 md:space-y-2">
            <label className="text-[10px] md:text-[11px] uppercase tracking-widest text-salon-muted font-semibold">Time <span className="text-salon-gold">*</span></label>
            <select 
              {...register("timePreference", { required: "Time is required" })}
              className="w-full p-2.5 md:p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm appearance-none text-sm"
            >
              <option value="">Select Time Slot</option>
              {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.timePreference && <p className="text-red-400 text-xs">{errors.timePreference.message}</p>}
          </div>
        </div>

        <div className="space-y-1.5 md:space-y-2">
          <label className="text-[10px] md:text-[11px] uppercase tracking-widest text-salon-muted font-semibold">Special Requests</label>
          <textarea 
            {...register("specialRequests")}
            rows={3}
            className="w-full p-2.5 md:p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
            placeholder="Any specific stylist or requests?"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-salon-gold text-salon-black font-bold py-3 md:py-3.5 rounded-sm shadow-xl hover:bg-salon-gold-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 uppercase tracking-widest text-xs mt-2"
        >
          {isSubmitting ? 'Processing...' : 'Confirm Appointment'}
        </button>

        <div className="relative flex items-center py-2 md:py-4">
          <div className="flex-grow border-t border-salon-gold/10"></div>
          <span className="flex-shrink-0 mx-4 text-salon-muted text-[10px] uppercase tracking-widest">OR</span>
          <div className="flex-grow border-t border-salon-gold/10"></div>
        </div>

        <a 
          href={`https://wa.me/+919182637770?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-transparent border border-[#25D366] text-[#25D366] font-bold py-3 md:py-3.5 rounded-sm hover:bg-[#25D366]/10 transition-colors flex justify-center items-center gap-2 uppercase tracking-widest text-xs"
        >
          Book via WhatsApp
        </a>
      </form>
    </div>
  );
}
