import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, MapPin, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";
import { propertiesByArea } from "@/data/properties";
import type { Property } from "@/types/property";
import logo from "@/assets/viplogo.png";
import plotImg from "@/assets/prop-plot.jpg";
import villaImg from "@/assets/prop-villa.jpg";
import towerImg from "@/assets/prop-tower.jpg";
import penthouseImg from "@/assets/prop-penthouse.jpg";
import commercialImg from "@/assets/prop-commercial.jpg";

export const Route = createFileRoute("/property/$id")({
  component: PropertyDetailPage,
});

const allProperties = Object.values(propertiesByArea).flat();
const propertyMap = Object.fromEntries(allProperties.map((p) => [p.id, p]));

function getImage(id: string, type: string) {
  if (id.includes("beltarodi") || id.includes("nagpur-flat")) return penthouseImg;
  if (id.includes("wardha") || id.includes("manish")) return towerImg;
  if (id.includes("besa") || id.includes("koradi")) return villaImg;
  if (id.includes("higna") || id.includes("umred")) return commercialImg;
  return type === "flat" ? towerImg : plotImg;
}

function MagneticBtn({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  function onMove(e: React.MouseEvent) {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  }
  function onLeave() { x.set(0); y.set(0); }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div style={{ x: sx, y: sy }}>{children}</motion.div>
    </div>
  );
}

function Ticker({ items }: { items: string[] }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/8 py-3">
      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {repeated.map((item, i) => (
          <span key={i} className="mx-6 text-[11px] uppercase tracking-[0.3em] text-white/30">
            {item} <span className="mx-3 text-[var(--gold)]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function AmenityPill({ label, i }: { label: string; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      className="cursor-default select-none rounded-full border border-white/10 bg-white/4 px-5 py-2.5 text-sm text-white/60 transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
    >
      {label}
    </motion.div>
  );
}

function PropertyDetailPage() {
  const { id } = Route.useParams();
  const property = propertyMap[id];
  const heroRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const move = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!property) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] text-white">
        <div className="text-center">
          <p className="font-display text-6xl text-white/10">404</p>
          <h1 className="mt-2 font-display text-2xl">Property not found</h1>
          <Link to="/" className="mt-6 inline-block text-sm text-[var(--gold)] hover:underline">← Back to Home</Link>
        </div>
      </main>
    );
  }

  const img = getImage(id, property.type);
  const accentImg = property.type === "flat" ? plotImg : penthouseImg;
  const tickerItems = [property.area, property.price, property.size, "RERA Approved", "VIP VisionSquare", property.type === "plot" ? "Premium Plot" : "Luxury Flat"];

  return (
    <main className="relative bg-[#0B0B0B] text-white overflow-x-hidden">

      

      {/* ── HERO ── */}
      <div
        ref={heroRef}
        className="relative h-screen overflow-hidden"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <img src={img} alt={property.title} className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/20 via-transparent to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-[#0B0B0B]/20 to-transparent" />

        {/* top nav */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-7 md:px-12">
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition group-hover:border-white/40 group-hover:bg-white/8">
              <ArrowLeft className="h-4 w-4" />
            </span>
            <span className="hidden md:inline">Back</span>
          </button>
          <img src={logo} alt="VIP VisionSquare" className="h-14 w-auto object-contain opacity-90" />
        </div>

        {/* hero text */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-12 md:pb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[var(--gold)]">
              {property.type === "plot" ? "Premium Plot" : "Luxury Flat"} · {property.area}
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.92] tracking-tight"
            >
              {property.title.split("—")[0].trim()}
            </motion.h1>
          </div>
          {property.title.includes("—") && (
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.92] tracking-tight text-gradient-gold italic"
              >
                — {property.title.split("—")[1].trim()}
              </motion.h1>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-7 flex flex-wrap items-center gap-6"
          >
            <span className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-[var(--gold)]" /> {property.location}
            </span>
            <span className="h-4 w-px bg-white/20" />
            <span className="font-display text-2xl text-white">{property.price}</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-sm text-white/50">{property.size}</span>
          </motion.div>
        </motion.div>

        {/* vertical label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
        >
          <div className="h-16 w-px bg-gradient-to-b from-transparent to-white/30" />
          <span className="[writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.4em] text-white/25">{property.area}</span>
          <div className="h-16 w-px bg-gradient-to-t from-transparent to-white/30" />
        </motion.div>
      </div>

      {/* ── TICKER ── */}
      <Ticker items={tickerItems} />

      {/* ── STATS ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {property.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-l-2 border-[var(--gold)]/40 pl-5 py-1"
            >
              <div className="font-display text-3xl text-white md:text-4xl">{h.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SPLIT SECTION ── */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-start">

          {/* left text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">The Property</span>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">
                Why <span className="text-gradient-gold italic">{property.area}</span><br />is the right choice.
              </h2>
              <p className="mt-6 text-base leading-[1.9] text-white/50 max-w-lg">{property.description}</p>
            </motion.div>

            <div className="mt-12">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.4em] text-white/30"
              >
                Included Features
              </motion.span>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {property.amenities.map((a, i) => <AmenityPill key={a} label={a} i={i} />)}
              </div>
            </div>
          </div>

          {/* right image */}
          <div className="relative lg:sticky lg:top-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[24px] border border-white/6 bg-white/3" />
              <div className="relative overflow-hidden rounded-[24px]">
                <img src={accentImg} alt={property.title} className="h-[480px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-2xl bg-[#0B0B0B]/80 backdrop-blur-xl border border-white/10 px-4 py-3">
                  <div className="text-[9px] uppercase tracking-widest text-white/40">Price</div>
                  <div className="mt-0.5 font-display text-xl text-[var(--gold)]">{property.price}</div>
                </div>
                <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-[#0B0B0B]/80 backdrop-blur-xl border border-[var(--gold)]/25 px-4 py-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[var(--gold)]" />
                  <span className="text-[10px] uppercase tracking-widest text-white/70">RERA Verified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={img} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/95 to-[#0B0B0B]/80" />
        </div>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]/6 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-12 md:py-36">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">Ready to invest?</p>
              <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
                Let's find your<br /><span className="text-gradient-gold italic">perfect space.</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm text-white/40">
                Our advisors are available 7 days a week. Book a free site visit or call us directly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <a
                href="/#contact"
                className="group flex items-center gap-3 rounded-full px-10 py-4 font-display text-lg text-[#0B0B0B] shadow-[0_0_60px_-10px_rgba(212,175,55,0.6)] transition-shadow hover:shadow-[0_0_80px_-5px_rgba(212,175,55,0.8)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                Book Site Visit
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B0B0B]/20 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="tel:+917796277602"
                className="flex items-center justify-center gap-2 rounded-full border border-white/12 px-10 py-4 text-sm text-white/50 transition hover:border-white/30 hover:text-white"
              >
                <Phone className="h-4 w-4" /> Call an Advisor
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* footer strip */}
      <div className="border-t border-white/6 px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <img src={logo} alt="VIP VisionSquare" className="h-10 w-auto object-contain opacity-60" />
          <Link to="/" className="text-xs text-white/30 transition hover:text-white/60">← All Properties</Link>
        </div>
      </div>
    </main>
  );
}
