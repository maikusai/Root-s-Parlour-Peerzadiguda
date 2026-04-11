"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        },
      ]);
      if (error) throw new Error(error.message);

      toast.success("Message sent! We will get back to you shortly.", {
        duration: 5000,
        position: "top-center",
        style: { background: "#27ae60", color: "#fff", fontWeight: "bold" },
      });
      reset();
    } catch (err: unknown) {
      toast.error(`Failed: ${err instanceof Error ? err.message : "Something went wrong"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all text-sm"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^[0-9]{10}$/, message: "Enter valid 10-digit number" },
            })}
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all text-sm"
            placeholder="10-digit mobile"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-700">
          Email <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all text-sm"
          placeholder="your@email.com"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message", { required: "Please enter your message" })}
          rows={4}
          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-medical-blue outline-none transition-all text-sm resize-none"
          placeholder="Your question or message…"
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-medical-blue text-white font-bold py-3.5 rounded-xl hover:bg-medical-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
