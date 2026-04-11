import Link from "next/link";
import { ChevronRight, Phone, Clock, FileText } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book Appointment | SBR Diagnostic Center",
  description: "Schedule your lab test, ultrasound, or health package easily. Walk-ins welcome. Pre-booking ensures priority service.",
};

export default function BookingPage() {
  const phoneNumber = "+919849190189";
  const whatsappMsg = encodeURIComponent("Hi, I want to book an appointment");

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Booking Hero */}
      <section className="bg-medical-blue pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1551076805-e18690c5e53b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Book Appointment</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Appointment</h1>
            <p className="text-lg text-blue-100">
              Walk-ins welcome. Pre-booking ensures priority service, faster check-in, and zero waiting time.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Booking Form Component */}
          <div className="flex-1 w-full relative">
             <BookingForm />
          </div>
          
          {/* Sidebar: Alternative Methods & FAQs */}
          <div className="lg:w-1/3 flex flex-col gap-8 pt-8 lg:pt-0">
            
            {/* Alternative Booking Methods */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="text-xl font-bold text-slate-800 mb-4">Other Ways to Book</h3>
               
               <div className="space-y-4">
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-medical-blue hover:bg-blue-50 transition-colors group"
                  >
                     <div className="w-12 h-12 bg-medical-blue/10 text-medical-blue rounded-full flex items-center justify-center group-hover:bg-medical-blue group-hover:text-white transition-colors">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Call Us Directly</p>
                        <p className="font-bold text-slate-800 text-lg">+91 98491 90189</p>
                     </div>
                  </a>

                  <a 
                    href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#25D366] hover:bg-green-50 transition-colors group"
                  >
                     <div className="w-12 h-12 bg-green-100 text-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                        {/* WhatsApp Simple SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                     </div>
                     <div>
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Chat on WhatsApp</p>
                        <p className="font-bold text-slate-800 text-lg">Instant Reply</p>
                     </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-blue-50/50">
                     <div className="mt-1"><Clock className="w-5 h-5 text-medical-blue" /></div>
                     <div>
                        <p className="font-bold text-slate-800">Walk-in Anytime</p>
                        <p className="text-sm text-slate-600 mt-1">No appointment needed for basic blood tests. Just visit us between 7am - 9pm.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <FileText className="w-5 h-5 text-accent-green" /> Frequently Asked Questions
               </h3>
               
               <div className="space-y-6">
                 <div>
                   <h4 className="font-bold text-slate-800 mb-1 text-sm">Do I need to fast before blood tests?</h4>
                   <p className="text-slate-600 text-sm">Yes, typically 8–12 hours of fasting is required for Fasting Blood Sugar (FBS) and Lipid Profile tests. Water is allowed.</p>
                 </div>
                 
                 <div className="w-full h-px bg-slate-100"></div>
                 
                 <div>
                   <h4 className="font-bold text-slate-800 mb-1 text-sm">When will I get my reports?</h4>
                   <p className="text-slate-600 text-sm">Most basic blood test reports are available within 4–24 hours. Digital delivery (PDF via WhatsApp/Email) is available.</p>
                 </div>
                 
                 <div className="w-full h-px bg-slate-100"></div>
                 
                 <div>
                   <h4 className="font-bold text-slate-800 mb-1 text-sm">Do you do home sample collection?</h4>
                   <p className="text-slate-600 text-sm">Yes, book or call us before 9 AM for same-day morning sample collection at your doorstep.</p>
                 </div>
                 
                 <div className="w-full h-px bg-slate-100"></div>
                 
                 <div>
                   <h4 className="font-bold text-slate-800 mb-1 text-sm">What payment methods are accepted?</h4>
                   <p className="text-slate-600 text-sm">We accept Cash, UPI (GPay, PhonePe, Paytm), and all major Credit/Debit Cards.</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
