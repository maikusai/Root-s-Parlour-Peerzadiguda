"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isSunday, getHours } from "date-fns";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";
import emailjs from '@emailjs/browser';

type BookingFormData = {
  fullName: string;
  mobileNumber: string;
  emailId: string;
  visitDate: Date | null;
  timePreference: string;
  testRequired: string;
  doctorReferral: string;
  homeCollection: boolean;
};

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm<BookingFormData>({
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      emailId: "",
      visitDate: null,
      timePreference: "7 AM - 10 AM",
      testRequired: "",
      doctorReferral: "",
      homeCollection: false,
    }
  });

  // DatePicker validation logic: No past dates. If Sunday, block after 2PM.
  const filterPassedTime = (time: Date) => {
    const isSun = isSunday(time);
    const hour = getHours(time);
    if (isSun && hour >= 14) {
       return false;
    }
    return true;
  };
  
  // Exclude past dates
  const isWeekday = () => {
     // Optional: You could write specific blockers here if a specific holiday was needed
     return true; 
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      // 1. Insert into Supabase
      const { error: supabaseError } = await supabase
        .from('appointments')
        .insert([
          { 
            full_name: data.fullName,
            mobile_number: data.mobileNumber,
            email_id: data.emailId,
            visit_date: data.visitDate?.toISOString().split('T')[0], // Extract just the date
            time_preference: data.timePreference,
            test_required: data.testRequired,
            home_collection: data.homeCollection,
            doctor_referral: data.doctorReferral
          }
        ]);

      if (supabaseError) throw new Error(supabaseError.message);

      // 2. EmailJS Send (Placeholder execution)
      // Note: This won't throw unless configured, but we check if env vars exist first basically or just try-catch.
      if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID !== 'your_service_id') {
         try {
            await emailjs.send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
              {
                to_name: "SBR Admin",
                from_name: data.fullName,
                mobile: data.mobileNumber,
                tests: data.testRequired,
                date: data.visitDate?.toDateString(),
                time: data.timePreference,
                home_collection: data.homeCollection ? "Yes" : "No"
              },
              process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
         } catch(e) {
            console.warn("EmailJS failed, check configuration.", e);
         }
      }

      // Success
      toast.success('Your appointment request has been received! We will call you within 2 hours to confirm.', {
         duration: 6000,
         position: 'top-center',
         style: { background: '#27ae60', color: '#fff', fontWeight: 'bold' }
      });
      
      reset(); // Clear form
    } catch (error: unknown) {
      toast.error(`Error: ${error instanceof Error ? error.message : 'Something went wrong'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 w-full max-w-2xl mx-auto">
      <Toaster />
      <h2 className="text-2xl font-bold text-medical-blue mb-6">Schedule Your Visit</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
            <input 
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Mobile Number <span className="text-red-500">*</span></label>
            <div className="flex">
              <span className="inline-flex items-center px-4 border border-r-0 border-slate-200 bg-slate-50 text-slate-500 rounded-l-lg font-medium text-sm">
                +91
              </span>
              <input 
                {...register("mobileNumber", { 
                  required: "Mobile Number is required", 
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number"
                  }
                })}
                className="w-full p-3 border border-slate-200 rounded-r-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all"
                placeholder="10-digit mobile number"
              />
            </div>
            {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email ID */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Email ID <span className="text-slate-400 font-normal">(Optional)</span></label>
            <input 
              type="email"
              {...register("emailId", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all"
              placeholder="your@email.com"
            />
             {errors.emailId && <p className="text-red-500 text-xs">{errors.emailId.message}</p>}
          </div>

          {/* Date of Visit */}
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-semibold text-slate-700">Date of Visit <span className="text-red-500">*</span></label>
            <Controller
               control={control}
               name="visitDate"
               rules={{ required: "Date of Visit is required" }}
               render={({ field }) => (
                 <DatePicker
                   selected={field.value}
                   onChange={(date: Date | null) => field.onChange(date)}
                   minDate={new Date()} // Prevent past dates
                   filterDate={isWeekday}
                   filterTime={filterPassedTime}
                   className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all"
                   placeholderText="Select date"
                   dateFormat="MMMM d, yyyy"
                 />
               )}
            />
            {errors.visitDate && <p className="text-red-500 text-xs">{errors.visitDate.message}</p>}
            <p className="text-xs text-slate-400 mt-1">Note: Sunday timings are 7 AM to 2 PM only.</p>
          </div>
        </div>

        {/* Time Preference */}
        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Time Preference <span className="text-red-500">*</span></label>
            <select 
               {...register("timePreference")}
               className="w-full p-3 border border-slate-200 bg-white rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all"
            >
               <option value="7 AM - 10 AM">7 AM – 10 AM</option>
               <option value="10 AM - 1 PM">10 AM – 1 PM</option>
               <option value="1 PM - 4 PM">1 PM – 4 PM</option>
               <option value="4 PM - 7 PM">4 PM – 7 PM (Mon-Sat only)</option>
               <option value="7 PM - 9 PM">7 PM – 9 PM (Mon-Sat only)</option>
            </select>
        </div>

        {/* Test / Service Required */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Test / Service Required <span className="text-red-500">*</span></label>
          <textarea 
            {...register("testRequired", { required: "Please specify the test or package" })}
            rows={3}
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all"
            placeholder="e.g. Full Body Checkup, Blood Test, Ultrasound, etc."
          ></textarea>
          {errors.testRequired && <p className="text-red-500 text-xs">{errors.testRequired.message}</p>}
        </div>

        {/* Doctor Referral */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Referring Doctor <span className="text-slate-400 font-normal">(Optional)</span></label>
          <input 
            {...register("doctorReferral")}
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all"
            placeholder="Dr. Name"
          />
        </div>

        {/* Home Collection Checkbox */}
        <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <input 
            type="checkbox"
            id="homeCollection"
            {...register("homeCollection")}
            className="w-5 h-5 text-medical-blue rounded border-slate-300 focus:ring-medical-blue"
          />
          <label htmlFor="homeCollection" className="text-sm font-bold text-medical-blue cursor-pointer select-none">
            I need Home Sample Collection
          </label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-medical-blue text-white font-bold py-4 rounded-xl shadow-lg hover:bg-medical-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
             <>
               <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
               Processing...
             </>
          ) : (
            'Confirm Appointment'
          )}
        </button>
      </form>
    </div>
  );
}
