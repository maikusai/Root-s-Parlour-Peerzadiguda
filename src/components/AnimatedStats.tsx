"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({
  from = 0,
  to,
  suffix = "",
  decimals = 0,
  duration = 2.5,
}: {
  from?: number;
  to: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, decimals, suffix, isInView]);

  return <span ref={nodeRef}>{from.toFixed(decimals)}{suffix}</span>;
}

export default function AnimatedStats() {
  return (
    <div className="container mx-auto px-4 -mt-4 md:-mt-8 relative z-20 mb-12 md:mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-salon-surface border border-salon-gold/20 rounded-sm shadow-2xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 divide-y md:divide-y-0 md:divide-x divide-salon-gold/10"
      >
        <div className="flex flex-col items-center pt-4 md:pt-0 w-full">
          <span className="text-4xl font-heading text-salon-gold mb-1">
            <Counter from={0} to={1510} suffix="+" duration={2.5} />
          </span>
          <span className="text-salon-muted uppercase tracking-widest text-xs font-bold">
            Happy Clients
          </span>
        </div>
        
        <div className="flex flex-col items-center pt-8 md:pt-0 w-full">
          <span className="text-4xl font-heading text-salon-gold mb-1">
            <Counter from={0} to={4.8} suffix="/5" decimals={1} duration={2} />
          </span>
          <span className="text-salon-muted uppercase tracking-widest text-xs font-bold">
            Average Rating
          </span>
        </div>
        
        <div className="flex flex-col items-center pt-8 md:pt-0 w-full">
          <span className="text-4xl font-heading text-salon-gold mb-1">
            <Counter from={new Date().getFullYear()} to={2018} duration={2.5} />
          </span>
          <span className="text-salon-muted uppercase tracking-widest text-xs font-bold overflow-hidden flex">
            Established Since
          </span>
        </div>
      </motion.div>
    </div>
  );
}
