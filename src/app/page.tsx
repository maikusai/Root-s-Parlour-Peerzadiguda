import { 
  Phone, 
  CheckCircle2, 
  MapPin, 
  FlaskConical, 
  ActivitySquare, 
  Microscope,
  Stethoscope,
  HeartPulse,
  Home,
  Award,
  Users,
  BadgeIndianRupee
} from "lucide-react";

export default function HomePage() {
  const phoneNumber = "+919849190189";
  
  return (
    <div className="w-full">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-gradient-to-br from-medical-blue to-medical-light overflow-hidden">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white text-sm font-medium mb-6 inline-block">
            SBR Diagnostic Center — Peerzadiguda, Hyderabad
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight mb-6 test-balance">
            Accurate Results. Affordable Prices. <br className="hidden md:block"/> Right in Your Neighbourhood.
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10">
            Advanced diagnostic services with state-of-the-art equipment. Get your health checked by experienced professionals today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a 
              href={`https://wa.me/${phoneNumber}?text=I%20want%20to%20book%20an%20appointment`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-medical-blue font-bold px-8 py-3.5 rounded-full hover:bg-slate-50 transition-colors shadow-lg hover:shadow-xl text-center text-lg w-full sm:w-auto"
            >
              Book Appointment
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-lg w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" /> Call Now: {phoneNumber.substring(0,3)} {phoneNumber.substring(3, 8)} {phoneNumber.substring(8)}
            </a>
          </div>
        </div>

        {/* Trust Badges Strip (attached to Hero) */}
        <div className="bg-white/10 backdrop-blur-md border-t border-white/20 w-full relative z-10 hidden sm:block">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white text-sm font-medium">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> NABL Certified</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> 15+ Years Experience</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> Home Sample Collection</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> Reports in 24 Hours</div>
          </div>
        </div>
      </section>

      {/* --- SERVICES HIGHLIGHTS STRIP --- */}
      <section id="services" className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-medical-blue">Our Services</h2>
            <p className="text-slate-500 mt-2">Comprehensive diagnostics under one roof</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 gap-4 md:grid md:grid-cols-6 md:gap-4 md:overflow-visible w-full">
            {[
              { icon: FlaskConical, label: "Blood Tests", color: "text-red-500", bg: "bg-red-50" },
              { icon: ActivitySquare, label: "Ultrasound", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Microscope, label: "X-Ray", color: "text-cyan-500", bg: "bg-cyan-50" },
              { icon: HeartPulse, label: "ECG", color: "text-pink-500", bg: "bg-pink-50" },
              { icon: Stethoscope, label: "Health Packages", color: "text-accent-green", bg: "bg-green-50" },
              { icon: Home, label: "Home Collection", color: "text-medical-blue", bg: "bg-indigo-50" },
            ].map((service, idx) => (
              <a 
                key={idx} 
                href="#packages"
                className="snap-start flex-shrink-0 w-32 md:w-auto flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-medical-light group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.bg} mb-3 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <span className="font-semibold text-slate-700 text-sm text-center">{service.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE SBR --- */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Why Choose SBR Diagnostic</h2>
            <p className="text-slate-600">We are committed to delivering precision and care. Explore why thousands of patients trust us with their health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">State-of-the-Art Equipment</h3>
              <p className="text-slate-600 text-sm">Leading technology ensuring precise and quick results for all tests.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Qualified Pathologists</h3>
              <p className="text-slate-600 text-sm">Highly trained specialists with years of experience analyzing your reports.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeIndianRupee className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Affordable Pricing</h3>
              <p className="text-slate-600 text-sm">Quality diagnostics should be accessible to everyone at reasonable costs.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-medical-blue rounded-3xl p-8 md:p-12 relative overflow-hidden text-center text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="flex justify-center flex-col items-center gap-1 mb-6 text-yellow-400">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                ))}
              </div>
              <span className="text-sm text-blue-200 mt-2 uppercase tracking-wide font-bold">Patient Review</span>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed italic mb-6">
              &quot;Excellent service! The staff is very professional, the center is extremely clean, and I received my blood test reports within just a few hours. Highly recommended in Peerzadiguda area.&quot;
            </blockquote>
            <cite className="not-italic font-bold tracking-wide">
              — Ramesh Kumar.
            </cite>
          </div>
        </div>
      </section>

      {/* --- HEALTH PACKAGES PREVIEW --- */}
      <section id="packages" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Popular Health Packages</h2>
            <p className="text-slate-600">Preventive care is the best care. Choose from our specialized health checkup packages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Body Checkup",
                price: "799",
                tests: "60+ Parameters",
                features: ["CBC & ESR", "Lipid Profile", "Liver Function Test", "Kidney Function Test", "Blood Sugar"],
                highlight: true
              },
              {
                title: "Diabetes Package",
                price: "499",
                tests: "15 Parameter",
                features: ["Fasting Blood Sugar", "HbA1c", "Urine Routine", "Lipid Profile (Basic)"],
                highlight: false
              },
              {
                title: "Women's Health Package",
                price: "999",
                tests: "40+ Parameters",
                features: ["Thyroid Profile (T3, T4, TSH)", "Iron Deficiency Profile", "Vitamin D & B12", "Complete Blood Count"],
                highlight: false
              }
            ].map((pkg, idx) => (
              <div key={idx} className={`relative flex flex-col bg-white rounded-2xl p-8 border ${pkg.highlight ? 'border-medical-blue shadow-xl scale-100 md:scale-105 z-10' : 'border-slate-200 shadow-md'}`}>
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
                <p className="text-medical-light font-medium mb-6 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> {pkg.tests} included
                </p>
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-slate-500 font-medium">From</span>
                  <span className="text-3xl font-bold text-medical-blue">₹{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${pkg.highlight ? 'bg-medical-blue text-white hover:bg-medical-light' : 'bg-slate-100 text-medical-blue hover:bg-slate-200'}`}>
                  Know More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPOINTMENT CTA BANNER --- */}
      <section className="py-12 bg-medical-blue relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1584900124976-1a7f0eebcce2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between text-white text-center md:text-left gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Book Your Test Today</h2>
            <p className="text-blue-100 text-lg">Walk-in or call ahead for quick service and zero waiting time.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#20ba59] transition-colors shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              Chat on WhatsApp
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-white text-medical-blue font-bold px-8 py-4 rounded-xl hover:bg-slate-50 transition-colors shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              +91 98491 90189
            </a>
          </div>
        </div>
      </section>

      {/* --- LOCATION SNEAK PEEK --- */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 w-full order-2 md:order-1">
            {/* Map Placeholder */}
            <div className="aspect-video md:aspect-square lg:aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.7877202352!2d78.59972365!3d17.42628465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ec090efecdf%3A0x6b8bcdec4ecf5df1!2s17%C2%B024&#39;05.9%22N%2078%C2%B036&#39;32.5%22E!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
                title="SBR Diagnostic Center Location"
              ></iframe>
            </div>
          </div>
          <div className="flex-1 space-y-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-medical-blue">Visit Our Center</h2>
            <p className="text-slate-600">Conveniently located in Peerzadiguda. We ensure a clean, comfortable, and safe environment for all our patients.</p>
            
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg text-medical-blue">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Clinic Address</h4>
                  <p className="text-slate-600 text-sm">
                    Sri Krishna Nagar Colony Road No. 2,<br/>
                    near Renuka Yellamma Temple, Viharika Colony,<br/>
                    Maruthi Nagar, Peerzadiguda,<br/>
                    Hyderabad, Telangana 500098
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-3 rounded-lg text-medical-blue">
                  <ActivitySquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Center Timings</h4>
                  <ul className="text-slate-600 text-sm space-y-1">
                    <li className="flex justify-between w-48"><span className="font-medium">Mon - Sat:</span> <span>7:00 AM – 9:00 PM</span></li>
                    <li className="flex justify-between w-48"><span className="font-medium">Sunday:</span> <span>7:00 AM – 2:00 PM</span></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://maps.google.com/?q=17.4016,78.6104" // Approximation for get directions link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-medical-blue font-bold hover:text-medical-light transition-colors"
              >
                Get Directions <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer for bottom mobile action buttons to prevent overlap */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
}
