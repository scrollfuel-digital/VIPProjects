import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Maximize2, Building2, Waves, Bed, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

import tower from "@/assets/prop-tower.jpg";
import plot from "@/assets/prop-plot.jpg";
import penthouse from "@/assets/prop-penthouse.jpg";

type Card = {
  title: string;
  titleAccent: string;
  sub: string;
  location: string;
  tag: string;
  tagColor: string;
  img: string;
  meta: { icon: React.ElementType; text: string }[];
  href: string;
};

const cards: Card[] = [
  {
    title: "Nagpur",
    titleAccent: "Marina",
    sub: "India's first luxury waterfront plotted development — 918 premium plots across 78 acres.",
    location: "Mondha, Hingna, South Nagpur",
    tag: "Lodha · HOABL",
    tagColor: "from-blue-600 to-blue-400",
    img: plot,
    meta: [
      { icon: Maximize2, text: "918 Plots · 78 Acres" },
      { icon: Waves, text: "Waterfront Living" },
    ],
    href: "/projects/nagpur-marina",
  },
  {
    title: "Pyramid",
    titleAccent: "Amara",
    sub: "Premium gated township — 2 & 3 BHK apartments in 6 modern towers, 14–16 floors.",
    location: "Besa–Pipla Road, Nagpur",
    tag: "Pyramid Group",
    tagColor: "from-emerald-600 to-emerald-400",
    img: tower,
    meta: [
      { icon: Bed, text: "2 & 3 BHK" },
      { icon: Building2, text: "6 Towers · 14–16 Floors" },
    ],
    href: "/projects/pyramid-amara",
  },
  {
    title: "Sky",
    titleAccent: "Joy",
    sub: "Luxury waterfront plots in South Nagpur's fastest-growing investment corridor.",
    location: "South Nagpur",
    tag: "HOABL · MahaRERA",
    tagColor: "from-violet-600 to-violet-400",
    img: penthouse,
    meta: [
      { icon: Maximize2, text: "~78 Acres" },
      { icon: Waves, text: "Man-Made Beach & Wave Pool" },
    ],
    href: "/projects/sky-joy",
  },
];

/* ── Tilt card wrapper ── */
function TiltCard({ children, className, onClick }: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);
  const sx = useSpring(rotateX, { stiffness: 200, damping: 30 });
  const sy = useSpring(rotateY, { stiffness: 200, damping: 30 });

  function onMove(e: React.MouseEvent) {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: sx, rotateY: sy, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ c, i }: { c: Card; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={c.href} className="block">
      <TiltCard
        onClick={() => {}}
        className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[28px]"
      >
        <div
          className="relative h-full w-full"
          style={{ minHeight: "480px" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* ── Image with zoom ── */}
          <motion.img
            src={c.img}
            alt={c.title}
            loading="lazy"
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* ── Gradient overlays ── */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 via-transparent to-transparent"
          />

          {/* ── Gold border glow on hover ── */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-[28px] shadow-[inset_0_0_0_1.5px_rgba(212,175,55,0.5),0_0_80px_-10px_rgba(212,175,55,0.4)]"
          />
          <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]" />

          {/* ── TOP ROW ── */}
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
            {/* tag pill */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.3 }}
            >
              <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${c.tagColor} px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg`}>
                {c.tag}
              </span>
            </motion.div>

            {/* arrow button */}
            <motion.div
              animate={{
                rotate: hovered ? 45 : 0,
                backgroundColor: hovered ? "var(--gold)" : "rgba(255,255,255,0.08)",
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid h-10 w-10 place-items-center rounded-full backdrop-blur-md border border-white/15"
            >
              <motion.div animate={{ color: hovered ? "#0B0B0B" : "#ffffff" }} transition={{ duration: 0.3 }}>
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* ── BOTTOM CONTENT ── */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">

            {/* location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
              className="flex items-center gap-1.5 mb-3"
            >
              <MapPin className="h-3 w-3 text-[var(--gold)] shrink-0" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/50">{c.location}</span>
            </motion.div>

            {/* title — split with accent */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 + 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3
                  className="font-display text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.0] tracking-tight text-white"
                >
                  {c.title}{" "}
                  <span className="text-gradient-gold italic">{c.titleAccent}</span>
                </h3>
              </motion.div>
            </div>

            {/* subtitle — slides up on hover */}
            <div className="overflow-hidden mt-2">
              <motion.p
                animate={{ y: hovered ? 0 : "110%", opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm leading-relaxed text-white/55 max-w-sm"
              >
                {c.sub}
              </motion.p>
            </div>

            {/* divider line — expands on hover */}
            <motion.div
              animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
              initial={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 h-px origin-left bg-gradient-to-r from-[var(--gold)]/60 to-transparent"
            />

            {/* meta row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 + 0.4 }}
              className="mt-4 flex items-center justify-between gap-4"
            >
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {c.meta.map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1.5 text-[11px] text-white/55">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-[var(--gold)]" />
                    {text}
                  </span>
                ))}
              </div>

              {/* RERA badge */}
              <div className="shrink-0 flex items-center gap-1.5 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/8 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                <span className="text-[9px] uppercase tracking-widest text-[var(--gold)]">RERA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </TiltCard>
      </Link>
    </motion.div>
  );
}

const statItems = [
  { value: "3", label: "Premium Projects" },
  { value: "918+", label: "Total Plots" },
  { value: "84+", label: "Acres Developed" },
  { value: "RERA", label: "All Approved" },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-10 md:py-12 overflow-hidden">

      {/* ambient background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--gold)]/4 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">

        {/* ── HEADER ── */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--gold)]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]"> Our Projects</span>
            </div>
            <h2 className="font-display text-5xl leading-[1.0] md:text-7xl">
              Crafted for<br />
              <span className="text-gradient-gold italic">Exceptional Living</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm text-sm leading-relaxed text-white/45 md:text-right"
          >
            Premium plots, 2 & 3 BHK apartments, and waterfront developments in Nagpur's most sought-after corridors.
          </motion.p>
        </div>

        {/* ── STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {statItems.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-[18px] border border-white/8 bg-white/3 p-5 text-center transition-all hover:border-[var(--gold)]/30 hover:bg-white/6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative font-display text-2xl text-gradient-gold md:text-3xl">{s.value}</div>
              <div className="relative mt-1 text-[10px] uppercase tracking-[0.22em] text-white/40">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── EQUAL 3-COLUMN GRID ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <ProjectCard c={cards[0]} i={0} />
          <ProjectCard c={cards[1]} i={1} />
          <ProjectCard c={cards[2]} i={2} />
        </div>

        {/* ── BOTTOM CTA LINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex items-center justify-between border-t border-white/8 pt-8"
        >
          <p className="text-sm text-white/35">All projects are MahaRERA registered & verified.</p>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-sm text-[var(--gold)] transition hover:gap-3"
          >
            Enquire about any project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
