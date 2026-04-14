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
        style: { background: "#C9A84C", color: "#0D0D1A", fontWeight: "bold" },
      });
      reset();
    } catch (err: unknown) {
      toast.error(`Failed: ${err instanceof Error ? err.message : "Something went wrong"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
      <Toaster />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Name */}
        <div className="space-y-1.5 md:space-y-2">
          <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-salon-muted font-semibold">
            Full Name <span className="text-salon-gold">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 md:p-4 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5 md:space-y-2">
          <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-salon-muted font-semibold">
            Phone Number <span className="text-salon-gold">*</span>
          </label>
          <input
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^[0-9]{10}$/, message: "Enter valid 10-digit number" },
            })}
            className="w-full p-3 md:p-4 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
            placeholder="10-digit mobile"
          />
          {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5 md:space-y-2">
        <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-salon-muted font-semibold">
          Email <span className="text-salon-gold/50 font-normal">(Optional)</span>
        </label>
        <input
          type="email"
          {...register("email")}
          className="w-full p-3 md:p-4 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm"
          placeholder="your@email.com"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5 md:space-y-2">
        <label className="text-[9px] md:text-[10px] uppercase tracking-widest text-salon-muted font-semibold">
          Message <span className="text-salon-gold">*</span>
        </label>
        <textarea
          {...register("message", { required: "Please enter your message" })}
          rows={4}
          className="w-full p-3 md:p-4 bg-salon-black border border-salon-gold/20 text-salon-cream focus:border-salon-gold outline-none transition-all rounded-sm text-sm resize-none"
          placeholder="How can we help you?"
        />
        {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-salon-gold text-salon-black font-bold py-3.5 md:py-4 rounded-sm hover:bg-salon-gold-light transition-colors shadow-[0_0_15px_rgba(201,168,76,0.3)] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
