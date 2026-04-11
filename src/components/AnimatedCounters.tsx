"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

function Counter({ end, duration = 2000, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="text-4xl md:text-5xl font-bold text-medical-blue mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wide text-center">
        {label}
      </div>
    </div>
  );
}

export default function AnimatedCounters() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <Counter end={10000} suffix="+" label="Tests Done" />
      <Counter end={5000} suffix="+" label="Happy Patients" />
      <Counter end={15} suffix="+" label="Years Experience" />
      <Counter end={99} suffix="%" label="Report Accuracy" />
    </div>
  );
}
