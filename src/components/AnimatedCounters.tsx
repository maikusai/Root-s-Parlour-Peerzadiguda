"use client";

import { useEffect, useState, useRef } from "react";

interface CounterStat {
  value: number;
  label: string;
  suffix: string;
}

interface AnimatedCountersProps {
  stats: CounterStat[];
}

function Counter({ end, duration = 2000, suffix = "", label }: { end: number, duration?: number, suffix?: string, label: string }) {
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
    <div ref={countRef} className="flex flex-col items-center justify-center p-6 bg-transparent rounded-sm hover:-translate-y-1 transition-transform duration-300">
      <div className="text-4xl md:text-6xl font-heading text-salon-gold mb-3 drop-shadow-md">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs md:text-sm text-salon-cream uppercase tracking-widest text-center font-semibold">
        {label}
      </div>
    </div>
  );
}

export default function AnimatedCounters({ stats }: AnimatedCountersProps) {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-salon-gold/10">
      {stats.map((stat, idx) => (
        <div key={idx} className={idx > 1 ? "pt-8 md:pt-0" : ""}>
          <Counter end={stat.value} suffix={stat.suffix} label={stat.label} />
        </div>
      ))}
    </div>
  );
}
