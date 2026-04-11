"use client";

import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

// --- Animated Hero Rating Counter --- 
export function AnimatedHeroRating() {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  
  const [displayValue, setDisplayValue] = useState("0.0");
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 4.7, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(value.toFixed(1));
        }
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-3xl inline-flex flex-col items-center shadow-lg" ref={countRef}>
      <div className="flex gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
           <motion.div 
             key={i} 
             initial={{ opacity: 0, scale: 0 }}
             animate={isInView ? { opacity: 1, scale: 1 } : {}}
             transition={{ duration: 0.4, delay: i * 0.1, type: "spring", stiffness: 200 }}
           >
              <Star className={`w-8 h-8 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-100 text-slate-200'}`} />
           </motion.div>
        ))}
      </div>
      <div className="text-white font-bold text-lg flex items-center">
         <span className="text-4xl lg:text-5xl font-black text-yellow-400 mr-2 tabular-nums tracking-tight">
            {displayValue}/5
         </span> 
         <span className="opacity-90 tracking-wide uppercase text-sm mt-2">overall rating</span>
      </div>
      <p className="text-blue-100 text-sm mt-3 font-medium tracking-wide bg-black/10 px-4 py-1.5 rounded-full">Based on 120+ verified Google Reviews</p>
    </div>
  );
}


// --- Animated Progress Bars ---
export function AnimatedProgressBars() {
  const bars = [
    { stars: 5, pct: 80 },
    { stars: 4, pct: 20 },
    { stars: 3, pct: 7 },
    { stars: 2, pct: 2 },
    { stars: 1, pct: 1 },
  ];

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Small delay so CSS transition is seen even on immediate page load
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4 mb-8">
      {bars.map((bar, index) => (
        <div key={bar.stars} className="flex items-center gap-3">
           <span className="text-sm font-bold text-slate-600 w-4">{bar.stars}</span>
           <Star className="w-4 h-4 fill-slate-300 text-slate-300" />
           <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 rounded-full transition-all ease-out"
                style={{
                  width: animated ? `${bar.pct}%` : "0%",
                  transitionDuration: `${1000 + index * 150}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
              />
           </div>
           <span
             className="text-xs font-bold text-slate-400 w-8 text-right tabular-nums transition-opacity duration-500"
             style={{ opacity: animated ? 1 : 0, transitionDelay: `${400 + index * 100}ms` }}
           >
             {bar.pct}%
           </span>
        </div>
      ))}
    </div>
  );
}
