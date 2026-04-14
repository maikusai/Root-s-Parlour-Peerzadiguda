"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";

type BridalFormData = {
  fullName: string;
  mobileNumber: string;
  weddingDate: string;
  packageInterest: string;
  message: string;
};

export default function BridalEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BridalFormData>();

  const onSubmit = async (data: BridalFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('bridal_enquiries')
        .insert([
          { 
            full_name: data.fullName,
            mobile_number: data.mobileNumber,
            wedding_date: data.weddingDate,
            package_interest: data.packageInterest,
            message: data.message
          }
        ]);

      if (error) throw new Error(error.message);

      setIsSuccess(true);
      toast.success('Your enquiry has been received!');
      reset();
    } catch (error: unknown) {
      toast.error(`Error: ${error instanceof Error ? error.message : 'Something went wrong'}`, {
        style: { background: '#1A1A2E', color: '#fff', border: '1px solid #C9A84C' }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-salon-surface p-8 shadow-2xl border border-salon-gold/30 rounded-sm text-center">
        <h3 className="text-2xl font-heading text-salon-gold mb-2">Thank You!</h3>
        <p className="text-salon-muted text-sm tracking-wide mb-6">Your bridal enquiry has been sent. Our bridal specialist will contact you shortly to curate your perfect look.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="px-6 py-2 bg-transparent border border-salon-gold text-salon-gold uppercase tracking-widest text-xs hover:bg-salon-gold hover:text-salon-black transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-salon-surface p-8 shadow-2xl border border-salon-gold/20 rounded-sm">
      <Toaster />
      <h3 className="text-2xl font-heading text-salon-gold mb-6 border-b border-salon-gold/10 pb-4">Request a Consultation</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div className="space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-salon-muted font-semibold">Full Name <span className="text-salon-gold">*</span></label>
          <input 
            {...register("fullName", { required: "Name is required" })}
            className="w-full p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
            placeholder="Your name"
          />
          {errors.fullName && <p className="text-red-400 text-xs">{errors.fullName.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-salon-muted font-semibold">Phone <span className="text-salon-gold">*</span></label>
            <input 
              {...register("mobileNumber", { 
                required: "Phone is required", 
                pattern: { value: /^[0-9]{10}$/, message: "Valid 10 digits required" }
              })}
              className="w-full p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
              placeholder="10-digit number"
            />
            {errors.mobileNumber && <p className="text-red-400 text-xs">{errors.mobileNumber.message}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-salon-muted font-semibold">Wedding Date <span className="text-salon-gold">*</span></label>
            <input 
              type="date"
              {...register("weddingDate", { required: "Date is required" })}
              className="w-full p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
            />
            {errors.weddingDate && <p className="text-red-400 text-xs">{errors.weddingDate.message}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-salon-muted font-semibold">Package Interest</label>
          <select 
            {...register("packageInterest")}
            className="w-full p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm appearance-none text-sm"
          >
            <option value="Not Sure Yet">Not Sure Yet</option>
            <option value="Package 1 - Bridal Glow">Package 1 - Bridal Glow</option>
            <option value="Package 2 - Full Bridal">Package 2 - Full Bridal</option>
            <option value="Package 3 - Royal Bridal">Package 3 - Royal Bridal</option>
            <option value="Custom Requirement">Custom Requirement</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] uppercase tracking-widest text-salon-muted font-semibold">Message</label>
          <textarea 
            {...register("message")}
            rows={3}
            className="w-full p-3 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
            placeholder="Tell us about your wedding events..."
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-salon-gold text-salon-black font-bold py-4 rounded-sm shadow-[0_0_15px_rgba(201,168,76,0.3)] hover:bg-salon-gold-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm mt-4"
        >
          {isSubmitting ? 'Sending Request...' : 'Enquire Now'}
        </button>
      </form>
    </div>
  );
}
