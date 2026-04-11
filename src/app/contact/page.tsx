import Link from "next/link";
import { ChevronRight, Phone, Clock, MapPin, Mail, Home, AlertTriangle, Bus, Car, Train } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us & Location | SBR Diagnostic Center Peerzadiguda",
  description: "Find SBR Diagnostic Center in Peerzadiguda. Get directions, contact details, working hours, and book home collection.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "SBR Diagnostic Center",
  telephone: "+919849190189",
  openingHours: ["Mo-Sa 07:00-21:00", "Su 07:00-14:00"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sri Krishna Nagar Colony Road No. 2, near Renuka Yellamma Temple, Viharika Colony, Maruthi Nagar",
    addressLocality: "Peerzadiguda, Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500098",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.4262",
    longitude: "78.5997"
  }
};

export default function ContactPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Contact Hero */}
      <section className="bg-medical-blue pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact & Location</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Find Us & Reach Out</h1>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-2xl flex items-start gap-4 text-left">
            <div className="bg-white text-medical-blue rounded-full p-3 shrink-0">
               <MapPin className="w-6 h-6" />
            </div>
            <div>
               <h3 className="text-white font-bold text-lg mb-1">Peerzadiguda Branch</h3>
               <p className="text-blue-100 text-sm leading-relaxed">
                 Sri Krishna Nagar Colony Road No. 2, near Renuka Yellamma Temple,<br/>
                 Viharika Colony, Maruthi Nagar, Peerzadiguda,<br/>
                 Hyderabad, Telangana 500098
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency / Urgent Tests Banner */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
         <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 opacity-10 w-64 h-64 transform translate-x-1/3 -translate-y-1/3">
               <AlertTriangle className="w-full h-full text-black" />
            </div>
            <div className="flex items-center gap-4 relative z-10 text-white">
               <div className="bg-white/20 p-3 rounded-full shrink-0">
                  <AlertTriangle className="w-8 h-8" />
               </div>
               <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">Need Urgent Results?</h3>
                  <p className="text-red-50 text-sm md:text-base">Call us for STAT testing and priority processing.</p>
               </div>
            </div>
            <div className="flex gap-4 relative z-10 w-full md:w-auto">
               <a href="tel:+919849190189" className="flex-1 md:flex-none text-center bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors shadow-md">
                 Call Now
               </a>
               <a href="https://wa.me/919849190189?text=URGENT%3A%20I%20need%20STAT%20testing." className="flex-1 md:flex-none text-center bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20ba59] transition-colors shadow-md flex justify-center items-center gap-2">
                 WhatsApp
               </a>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
         
         {/* Contact Info Cards Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* Card 1: Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 text-medical-blue rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-slate-800 mb-2">Phone Navigation</h3>
               <a href="tel:+919849190189" className="text-2xl font-black text-medical-blue hover:text-medical-light transition-colors mb-1">
                 +91 98491 90189
               </a>
               <p className="text-slate-500 text-sm">Click to call directly</p>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-green-50 text-[#25D366] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
               </div>
               <h3 className="font-bold text-slate-800 mb-2">WhatsApp</h3>
               <a href="https://wa.me/919849190189?text=Hello%2C%20I%20need%20directions%20to%20SBR%20Diagnostic%20Center" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#25D366] hover:text-[#20ba59] transition-colors mb-1">
                 Chat with Clinic
               </a>
               <p className="text-slate-500 text-sm">For fast queries & reports</p>
            </div>

            {/* Card 3: Email */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 text-medical-blue rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-slate-800 mb-2">Email Address</h3>
               <a href="mailto:info@sbrdiagnostic.com" className="text-lg font-bold text-medical-blue hover:text-medical-light transition-colors mb-1">
                 info@sbrdiagnostic.com
               </a>
               <p className="text-slate-500 text-sm">Corporate & B2B queries</p>
            </div>

            {/* Card 4: Timings */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-blue-50 text-medical-blue rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-slate-800 mb-2">Operating Hours</h3>
               <p className="text-slate-700 font-medium whitespace-nowrap mb-1">Mon-Sat: <span className="text-medical-blue">7:00 AM – 9:00 PM</span></p>
               <p className="text-slate-700 font-medium whitespace-nowrap">Sunday: <span className="text-medical-blue">7:00 AM – 2:00 PM</span></p>
            </div>

            {/* Card 5: Home Collection */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
               <div className="w-12 h-12 bg-green-50 text-accent-green rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-slate-800 mb-2">Home Collection</h3>
               <p className="text-slate-600 text-sm mb-3">
                 Call before 9 AM for same-day home sample collection.
               </p>
               <Link href="/book" className="text-sm font-bold text-accent-green hover:underline">
                 Book Home Visit →
               </Link>
            </div>
         </div>

         {/* Layout Split: Map & Transit vs Form */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: Map & How to Reach Us */}
            <div className="flex flex-col gap-8">
               {/* Full-width Google Map Embed */}
               <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 relative group">
                  <div className="w-full h-80 rounded-xl overflow-hidden relative">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.598!3d17.427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ec090efecdf%3A0x6b8bcdec4ecf5df1!2sPeerzadiguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="SBR Diagnostic Center Location Map"
                     />
                  </div>
                  <div className="absolute top-8 right-8 pointer-events-none">
                     <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-slate-100 text-xs font-bold text-slate-800 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-500" /> SBR Diagnostic
                     </div>
                  </div>
                  <div className="mt-4 flex flex-col md:flex-row justify-between md:items-center gap-4">
                     <p className="text-sm text-slate-500 font-medium">📍 Near Renuka Yellamma Temple</p>
                     <a href="https://maps.google.com/?q=Sri+Krishna+Nagar+Colony+Road+No+2+Peerzadiguda+Hyderabad" target="_blank" rel="noopener noreferrer" className="bg-medical-blue text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-medical-light transition-colors text-center shadow-md">
                        Get Open Map Directions
                     </a>
                  </div>
               </div>

               {/* How to Reach Us */}
               <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                  <h2 className="text-2xl font-bold text-medical-blue mb-6">How to Reach Us</h2>
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                           <Bus className="w-5 h-5 text-medical-blue" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-800">By Bus:</h4>
                           <p className="text-sm text-slate-600 mt-1">Take any TSRTC bus directed to the Peerzadiguda bus stop. We are a brief 5-minute walk from the main highway stop.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                           <Car className="w-5 h-5 text-medical-blue" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-800">By Auto/Cab:</h4>
                           <p className="text-sm text-slate-600 mt-1">Search <span className="font-semibold">&apos;SBR Diagnostic Center Maruthi Nagar Peerzadiguda&apos;</span> on Google Maps or Uber/Ola for precise drop-off.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                           <Train className="w-5 h-5 text-medical-blue" />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-800">By Metro:</h4>
                           <p className="text-sm text-slate-600 mt-1">The nearest station is <span className="font-semibold">Uppal Metro Station (3 km away)</span>. Autos and cabs are frequently available from the station to our clinic.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: Contact Form */}
            <div className="flex flex-col gap-6">
               <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 h-full">
                  <h2 className="text-2xl font-bold text-medical-blue mb-2 flex items-center gap-2">
                     <Mail className="w-6 h-6" /> Send Us a Message
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">For general enquiries, feedback, or test availability, simply drop us your details.</p>
                  
                  <div className="mb-8">
                     <ContactForm />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                     <div className="flex-1 h-px bg-slate-200"></div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Or Message Fast On</span>
                     <div className="flex-1 h-px bg-slate-200"></div>
                  </div>

                  <a href="https://wa.me/919849190189?text=Hi%21%20I%20have%20an%20inquiry%20before%20I%20visit." target="_blank" rel="noopener noreferrer" className="w-full flex justify-center items-center gap-3 bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-md hover:bg-[#20ba59] transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                     </svg>
                     Continue to WhatsApp
                  </a>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}
