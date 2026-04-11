"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FlaskConical, 
  ActivitySquare, 
  Stethoscope, 
  Home, 
  CheckCircle2, 
  Microscope,
  HeartPulse,
  Syringe,
  Baby,
  Bone
} from "lucide-react";

type TabKey = "lab" | "radiology" | "packages" | "home";

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<TabKey>("lab");

  const tabs = [
    { id: "lab", label: "Lab & Pathology Tests", icon: FlaskConical },
    { id: "radiology", label: "Radiology & Imaging", icon: ActivitySquare },
    { id: "packages", label: "Health Packages", icon: Stethoscope },
    { id: "home", label: "Home Collection Service", icon: Home },
  ] as const;

  const labServices = [
    { name: "Complete Blood Count (CBC)", desc: "Overall health check and screening for a variety of disorders.", price: "from ₹299", icon: Syringe },
    { name: "Lipid Profile", desc: "Measures cholesterol levels to assess risk of heart disease.", price: "from ₹399", icon: HeartPulse },
    { name: "Liver Function Test (LFT)", desc: "Screens for liver infections and monitors disease progression.", price: "from ₹499", icon: FlaskConical },
    { name: "Kidney Function Test (KFT)", desc: "Evaluates how well your kidneys are working.", price: "from ₹499", icon: FlaskConical },
    { name: "Thyroid Profile (T3, T4, TSH)", desc: "Evaluates thyroid gland function and disorders.", price: "from ₹550", icon: Syringe },
    { name: "Diabetes Screening (HbA1c)", desc: "Measures average blood sugar levels over the past 3 months.", price: "from ₹350", icon: Syringe },
  ];

  const radiologyServices = [
    { name: "Digital X-Ray", desc: "High-resolution digital imaging for faster, clearer results.", price: "from ₹350", icon: Bone },
    { name: "Ultrasound (USG)", desc: "Safe, non-invasive imaging for abdomen, pelvis, and pregnancy.", price: "from ₹799", icon: Baby },
    { name: "ECG", desc: "Records the electrical signals in your heart.", price: "from ₹250", icon: HeartPulse },
    { name: "Echocardiogram (Echo)", desc: "Ultrasound of the heart to see how blood pumps.", price: "from ₹1,200", icon: ActivitySquare },
  ];

  const packageDetails = [
    { title: "Full Body Checkup", tests: "60+ parameters", price: "799", features: ["CBC & ESR", "Lipid Profile", "Liver Function Test", "Kidney Function Test", "Blood Sugar"] },
    { title: "Diabetes Care Package", tests: "15 parameters", price: "499", features: ["HbA1c", "Fasting Blood Sugar (FBS)", "Kidney Function Test (KFT)", "Liver Function Test (LFT)", "Complete Blood Count (CBC)"] },
    { title: "Cardiac Checkup", tests: "Critical parameters", price: "1,499", features: ["Lipid Profile", "ECG", "Echocardiogram", "Troponin", "Fasting Blood Sugar"] },
    { title: "Women's Health", tests: "40+ parameters", price: "999", features: ["Hormonal panel", "Pap Smear", "CBC", "Ultrasound (USG)", "Thyroid Profile"] },
    { title: "Senior Citizen Package", tests: "Comprehensive 80+ tests", price: "1,299", features: ["Complete Blood Count", "Bone Health Profile", "Cardiac Markers", "Arthritis Screen", "Complete Urine Analysis"] },
    { title: "Pre-Marital Package", tests: "Both partners", price: "1,999", features: ["STD Profile", "Blood Group & Rh", "Complete Blood Count", "HIV 1 & 2", "Hepatitis Screen"] },
  ];

  const phoneNumber = "+919849190189";
  const waLink = (name: string) =>
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, I would like to enquire about *${name}* from SBR Diagnostic Center. Please share more details.`)}`;

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 overflow-x-auto hide-scrollbar pb-2 pt-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabKey)}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all border-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-medical-blue border-medical-blue text-white shadow-lg"
                  : "bg-white border-slate-200 text-slate-600 hover:border-medical-light hover:text-medical-blue"
              }`}
            >
              <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-white" : "text-gray-400"}`} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Lab Services Grid */}
        {activeTab === "lab" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-300">
            {labServices.map((service, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-50 text-medical-blue rounded-xl group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{service.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-1">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-lg font-bold text-sm">
                    {service.price}
                  </span>
                  <a href={waLink(service.name)} target="_blank" rel="noopener noreferrer" className="text-medical-blue font-bold px-4 py-2 border border-medical-blue rounded-lg hover:bg-medical-blue hover:text-white transition-colors text-sm">
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Radiology Services Grid */}
        {activeTab === "radiology" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-300">
            {radiologyServices.map((service, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-tight">{service.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-1">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-accent-green/10 text-accent-green px-3 py-1 rounded-lg font-bold text-sm">
                     {service.price}
                  </span>
                  <a href={waLink(service.name)} target="_blank" rel="noopener noreferrer" className="text-medical-blue font-bold px-4 py-2 border border-medical-blue rounded-lg hover:bg-medical-blue hover:text-white transition-colors text-sm">
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Health Packages Detail Cards */}
        {activeTab === "packages" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in shadow-sm duration-300">
            {packageDetails.map((pkg, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col relative overflow-hidden group hover:border-medical-blue transition-colors">
                 <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Stethoscope className="w-24 h-24 text-medical-blue" />
                 </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 relative z-10">{pkg.title}</h3>
                <p className="text-medical-light font-medium mb-6 text-sm flex items-center gap-2 relative z-10">
                  <Microscope className="w-4 h-4" /> {pkg.tests}
                </p>
                <div className="mb-6 flex items-baseline gap-1 relative z-10">
                  <span className="text-slate-500 font-medium">From</span>
                  <span className="text-3xl font-bold text-medical-blue">₹{pkg.price}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 relative z-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={waLink(pkg.title)} target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3 rounded-xl font-bold transition-colors bg-medical-blue text-white hover:bg-medical-light relative z-10">
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Home Collection Component */}
        {activeTab === "home" && (
          <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
             <div className="bg-gradient-to-r from-medical-blue to-[#1e6899] rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute opacity-20 -right-20 -bottom-20 pointer-events-none">
                   <Home className="w-96 h-96 text-white" />
                </div>
                
                <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 relative z-10">
                   <div className="bg-white p-6 rounded-full shrink-0">
                      <Image 
                         src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=200&auto=format&fit=crop" 
                         width={120} height={120} 
                         alt="Nurse Icon Placeholder"
                         className="rounded-full w-24 h-24 object-cover border-4 border-slate-100"
                      />
                   </div>
                   <div className="text-white text-center md:text-left flex-1">
                      <h3 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
                         Free Home Sample Collection Available
                      </h3>
                      <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                         Book before <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">9 AM</span> — samples collected by <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">11 AM</span>.<br className="hidden md:block"/> Reports delivered digitally within 24 hours.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a 
                          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("I want to book a home sample collection.")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#20ba59] transition-colors shadow-lg flex items-center justify-center gap-2 whitespace-nowrap text-lg w-full sm:w-auto"
                        >
                          WhatsApp Us
                        </a>
                        <a 
                          href={`tel:${phoneNumber}`}
                          className="bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-lg w-full sm:w-auto"
                        >
                          Call Now
                        </a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
