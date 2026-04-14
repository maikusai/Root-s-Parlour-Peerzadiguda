"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PHONE = "919182637770";
const WA_MSG = encodeURIComponent("Hi! I'd like to book an appointment at Root's the Family Salon.");

// Radius of the orbit arc (px)
const R = 108;
// Scissors button is 56px → center is at (28, 28) within the relative wrapper
const CX = 28;
const CY = 28;
const ITEM = 48; // orbit circle diameter

function orbitPos(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: CX + Math.cos(rad) * R - ITEM / 2,
    top: CY - Math.sin(rad) * R - ITEM / 2,
  };
}

const ITEMS = [
  {
    id: "call",
    label: "Call Us",
    angle: 90,
    bg: "rgba(18,18,36,0.92)",
    border: "1.5px solid #C9A84C",
    color: "#C9A84C",
    href: "tel:+919182637770",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12
          a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7
          2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.56 6.56l.86-.86a2 2 0 0 1 2.11-.45
          c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    id: "book",
    label: "Book Now",
    angle: 132,
    bg: "#C9A84C",
    border: "none",
    color: "#0D0D1A",
    href: "/book",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    angle: 178,
    bg: "#25D366",
    border: "none",
    color: "#fff",
    href: `https://wa.me/${PHONE}?text=${WA_MSG}`,
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94
          1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059
          -.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371
          -.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01
          -.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198
          2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719
          2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87
          0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45
          4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45
          -4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0
          2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0
          11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export default function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollUp, setScrollUp] = useState(false); // scroll-to-top visibility

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    const onScroll = () => setScrollUp(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // 44px button + 10px gap + 24px base = 78px when scroll-top appears
  const scissorsBottom = scrollUp ? 78 : 24;

  return (
    <>
      {/* ── Backdrop ─────────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-[80]" onClick={() => setIsOpen(false)} />
      )}

      {/* ── Scroll-to-Top button (appears below scissors) ── */}
      <div
        className="fixed right-5 z-[85]"
        style={{
          bottom: "24px",
          transition: "opacity 0.35s ease, transform 0.35s ease",
          opacity: scrollUp ? 1 : 0,
          transform: scrollUp ? "translateY(0)" : "translateY(12px)",
          pointerEvents: scrollUp ? "auto" : "none",
        }}
      >
        <button
          onClick={goTop}
          aria-label="Scroll to top"
          style={{
            width: 44, height: 44,
            borderRadius: "50%",
            background: "rgba(13,13,26,0.8)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(201,168,76,0.45)",
            color: "#C9A84C",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5m-7 7 7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* ── Scissors FAB + Orbit ──────────────────────────── */}
      {/* The container slides up when scroll-to-top appears  */}
      <div
        className="fixed right-5 z-[90]"
        style={{
          bottom: `${scissorsBottom}px`,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease, bottom 0.4s cubic-bezier(0.34,1.20,0.64,1)",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        {/* Relative anchor — scissors lives here, orbit items burst out from this */}
        {/* NOTE: no overflow:hidden so items can escape the 56×56 box */}
        <div style={{ position: "relative", width: 44, height: 44 }}>

          {/* ── Orbit items ── */}
          {ITEMS.map((item, idx) => {
            const { left, top } = orbitPos(item.angle);
            const delay = isOpen ? `${idx * 60}ms` : "0ms";

            const circle = (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                {/* Icon bubble */}
                <div style={{
                  width: ITEM, height: ITEM,
                  borderRadius: "50%",
                  background: item.bg,
                  border: item.border,
                  color: item.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.45)",
                  transition: "transform 0.18s",
                }}>
                  {item.icon}
                </div>
                {/* Label */}
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#F5F0E8",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  padding: "2px 8px",
                  borderRadius: 20,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.05em",
                }}>
                  {item.label}
                </span>
              </div>
            );

            return (
              <div
                key={item.id}
                style={{
                  position: "absolute",
                  left: `${left}px`,
                  top: `${top}px`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "scale(1)" : "scale(0.25)",
                  transition: `opacity 0.28s ease ${delay}, transform 0.32s cubic-bezier(0.34,1.56,0.64,1) ${delay}`,
                  pointerEvents: isOpen ? "auto" : "none",
                }}
              >
                {item.external
                  ? <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>{circle}</a>
                  : <Link href={item.href} onClick={() => setIsOpen(false)}>{circle}</Link>
                }
              </div>
            );
          })}

          {/* ── Main scissors toggle ── */}
          <button
            onClick={() => setIsOpen(p => !p)}
            aria-label="Toggle quick actions"
            style={{
              position: "absolute",
              inset: 0,
              width: 44, height: 44,
              borderRadius: "50%",
              background: isOpen
                ? "rgba(201,168,76,0.12)"
                : "linear-gradient(135deg,#C9A84C 0%,#E8D5A3 100%)",
              backdropFilter: "blur(16px)",
              border: isOpen ? "2px solid rgba(201,168,76,0.7)" : "2px solid transparent",
              color: isOpen ? "#C9A84C" : "#0D0D1A",
              boxShadow: isOpen
                ? "0 0 20px rgba(201,168,76,0.5), 0 0 0 8px rgba(201,168,76,0.07)"
                : "0 8px 28px rgba(201,168,76,0.45)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ transition: "transform 0.35s ease", transform: isOpen ? "rotate(135deg)" : "rotate(0)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
                <line x1="20" x2="8.12" y1="4" y2="15.88" />
                <line x1="14.47" x2="20" y1="14.48" y2="20" />
                <line x1="8.12" x2="12" y1="8.12" y2="12" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

