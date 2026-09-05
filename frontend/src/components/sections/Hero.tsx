import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Home, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import mapBg from "@/assets/map1.png";
import { propertiesByArea, type Property } from "@/data/properties";

const pins = [
  { x: "18%", y: "88%", label: "MIHAN" },
  { x: "52%", y: "28%", label: "Wardha Road" },
  { x: "75%", y: "28%", label: "Koradi" },
  { x: "45%", y: "75%", label: "Beltarodi" },
  { x: "40%", y: "65%", label: "Manish Nagar" },
  { x: "30%", y: "65%", label: "Ghogli – Pipla Road" },
  { x: "25%", y: "50%", label: "Besa" },
  { x: "12%", y: "35%", label: "Hingna" },
  { x: "56%", y: "45%", label: "Nagpur Area" },
  { x: "80%", y: "75%", label: "Umred Area" },
];

// Pins with y > 60% open upward to avoid going off-screen
function shouldDropUp(y: string) {
  return parseFloat(y) > 60;
}

function PropertyLink({ prop, onClose }: { prop: Property; onClose: () => void }) {
  return (
    <Link
      to={`/property/${prop.id}`}
      onClick={onClose}
      className="flex items-center justify-between rounded-xl px-3 py-2.5 transition hover:bg-white/8 group"
    >
      <div>
        <div className="text-sm text-white/90 group-hover:text-white leading-tight">{prop.title}</div>
        <div className="text-[11px] text-white/40 mt-0.5">{prop.size}</div>
      </div>
      <span className="text-xs font-semibold text-[var(--gold)] shrink-0 ml-2">{prop.price}</span>
    </Link>
  );
}

export function Hero() {
  const [activePin, setActivePin] = useState<string | null>(null);
  const [pinnedPin, setPinnedPin] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActivePin(null);
        setPinnedPin(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleMouseEnter(label: string) {
    setActivePin(label);
  }

  function handleMouseLeave(label: string) {
    if (pinnedPin !== label) setActivePin(null);
  }

  function togglePin(label: string) {
    setPinnedPin((prev) => {
      const next = prev === label ? null : label;
      setActivePin(next ?? null);
      return next;
    });
  }

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div ref={containerRef} className="relative h-[460px] overflow-visible md:h-[727px]">
        <img
          src={mapBg}
          alt="Nagpur map"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/80" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        {pins.map((p, i) => {
          const properties = propertiesByArea[p.label] ?? [];
          const plots = properties.filter((pr) => pr.type === "plot");
          const flats = properties.filter((pr) => pr.type === "flat");
          const isActive = activePin === p.label || pinnedPin === p.label;
          const dropUp = shouldDropUp(p.y);

          return (
            <motion.div
              key={p.label}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, type: "spring", damping: 14 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: p.x, top: p.y, zIndex: isActive ? 50 : 10 }}
            >
              <div className="relative">
                <span className="absolute inset-0 -m-3 animate-ping rounded-full bg-[var(--gold)]/30" />

                {/* Pin dot */}
                <div
                  onClick={() => togglePin(p.label)}
                  onMouseEnter={() => handleMouseEnter(p.label)}
                  onMouseLeave={() => handleMouseLeave(p.label)}
                  className="relative grid h-4 w-4 place-items-center rounded-full bg-[var(--gold)] shadow-[0_0_24px_var(--gold)] cursor-pointer transition-transform hover:scale-125"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0B0B0B]" />
                </div>

                {/* Label badge */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap glass-strong rounded-full px-3 py-1 text-[11px] pointer-events-none"
                  style={{ top: dropUp ? "auto" : "24px", bottom: dropUp ? "24px" : "auto" }}
                >
                  <span className="text-white">{p.label}</span>
                  <span className="ml-2 text-[var(--gold)]">{properties.length}</span>
                </div>

                {/* Dropdown */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: dropUp ? 8 : -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: dropUp ? 8 : -8, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      style={
                        dropUp
                          ? { bottom: "28px", top: "auto" }
                          : { top: "28px", bottom: "auto" }
                      }
                      onMouseEnter={() => handleMouseEnter(p.label)}
                      onMouseLeave={() => handleMouseLeave(p.label)}
                      className="absolute left-1/2 z-50 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#111]/95 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" />
                          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                            {p.label}
                          </span>
                        </div>
                      </div>

                      <div className="max-h-72 overflow-y-auto p-2">
                        {plots.length > 0 && (
                          <div className="mb-1">
                            <div className="flex items-center gap-1.5 px-2 py-1.5">
                              <Layers className="h-3 w-3 text-white/40" />
                              <span className="text-[10px] uppercase tracking-widest text-white/40">Plots</span>
                            </div>
                            {plots.map((prop) => (
                              <PropertyLink key={prop.id} prop={prop} onClose={() => { setActivePin(null); setPinnedPin(null); }} />
                            ))}
                          </div>
                        )}

                        {flats.length > 0 && (
                          <div>
                            <div className="flex items-center gap-1.5 px-2 py-1.5">
                              <Home className="h-3 w-3 text-white/40" />
                              <span className="text-[10px] uppercase tracking-widest text-white/40">Flats</span>
                            </div>
                            {flats.map((prop) => (
                              <PropertyLink key={prop.id} prop={prop} onClose={() => { setActivePin(null); setPinnedPin(null); }} />
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
