"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

// MOCK DATA: Categorized Image Galleries
const tabs = [
  "Facility & Infrastructure",
  "Equipment",
  "Team",
  "Health Camps / Events"
];

const galleryData: Record<string, { src: string; width: number; height: number; title: string; description: string }[]> = {
  "Facility & Infrastructure": [
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Waiting Area", description: "Spacious, air-conditioned seating." },
    { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Reception", description: "Quick registration desk for zero waiting." },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop", width: 800, height: 1200, title: "Sample Collection Room", description: "Hygienic and pristine sampling areas." },
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "NABL Lab", description: "Primary diagnostic testing area." }
  ],
  "Equipment": [
    { src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Ultrasound Machine", description: "High-resolution sonography equipment." },
    { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "ECG Machine", description: "Advanced cardiovascular monitoring." },
    { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop", width: 800, height: 1200, title: "Digital X-Ray", description: "Low radiation, fast imaging x-ray." },
    { src: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Hematology Analyzer", description: "Automated high-speed blood analyzer." },
    { src: "https://images.unsplash.com/photo-1631558556392-5b9e078cb146?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Biochemistry", description: "Fully automated biochemistry unit." }
  ],
  "Team": [
    { src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Dr. Consultation", description: "Expert doctor reviewing patient history." },
    { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop", width: 800, height: 1200, title: "Chief Pathologist", description: "Leading our lab diagnostics team." },
    { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Phlebotomist", description: "Painless sample collection specialist." }
  ],
  "Health Camps / Events": [
    { src: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Free Diabetic Camp", description: "Screened 100+ patients in Peerzadiguda." },
    { src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop", width: 1000, height: 667, title: "Heart Checkup Drive", description: "Community ECG screening event." }
  ]
};

export default function GalleryClient() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [index, setIndex] = useState(-1);

  const currentPhotos = galleryData[activeTab] || [];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === tab 
              ? "bg-medical-blue text-white shadow-md scale-105" 
              : "bg-white text-slate-600 hover:bg-slate-100 hover:text-medical-light border border-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CSS Masonry Photo Gallery */}
      <div className="w-full min-h-[400px]">
        {currentPhotos.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {currentPhotos.map((photo, i) => (
              <div 
                key={i} 
                onClick={() => setIndex(i)}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group relative"
              >
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                  loading="lazy" 
                />
                {/* Embedded Title Overlay on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <p className="text-white font-bold tracking-wide drop-shadow-md">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full h-40 flex items-center justify-center text-slate-400">
             No photos available yet.
          </div>
        )}
      </div>

      {/* Lightbox for zooming photos */}
      <Lightbox
        slides={currentPhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions]}
      />

    </div>
  );
}
