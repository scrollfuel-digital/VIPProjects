import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, ShieldCheck, Building2, Maximize2, ArrowUpRight, ExternalLink, Waves } from "lucide-react";
import plot from "@/assets/prop-plot.jpg";
import penthouse from "@/assets/prop-penthouse.jpg";
import logo from "@/assets/viplogo.png";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

const highlights = [
  { label: "Total Area", value: "~78 Acres" },
  { label: "Total Plots", value: "918" },
  { label: "Clubhouse", value: "28,000 sq.ft" },
  { label: "Beach & Pool", value: "~3 Acres" },
];

const specs = [
  { icon: Building2, label: "Developer", value: "HOABL Impactum Land Pvt. Ltd." },
  { icon: MapPin, label: "Location", value: "Mondha, Hingna, South Nagpur" },
  { icon: Maximize2, label: "Net Plot Area", value: "1,45,114.84 sq.m." },
  { icon: Building2, label: "Total Plots", value: "918 Planned Plots" },
  { icon: ShieldCheck, label: "RERA No.", value: "PP1190002502095" },
  { icon: ShieldCheck, label: "Valid Until", value: "31 December 2030" },
];

const amenities = [
  "~3-Acre Man-Made Beach & Wave Pool", "28,000 sq.ft Luxury Clubhouse",
  "40+ Lifestyle Amenities", "MIROS Hotels & Resorts Hospitality",
  "Concierge & Housekeeping Services", "Gourmet Dining & Entertainment",
  "Wellness & Recreation Zones", "Community Engagement Spaces",
  "Jogging & Cycling Tracks", "Landscaped Waterfront Promenade",
];

const connectivity = [
  "MIHAN — International Airport Zone", "Butibori MIDC",
  "Samruddhi Mahamarg", "Metro Expansion Corridor",
  "Proposed IBFC (International Business & Finance Centre)",
];

const pillars = [
  { num: "01", title: "Waterfront Living", desc: "India's first luxury waterfront plotted development inspired by globally iconic marina lifestyles." },
  { num: "02", title: "Premium Hospitality", desc: "MIROS Hotels & Resorts manages concierge, housekeeping, wellness, and gourmet dining services." },
  { num: "03", title: "Master-Planned Community", desc: "918 premium plots within a 78-acre master-planned community with world-class infrastructure." },
  { num: "04", title: "Investment Corridor", desc: "Located in South Nagpur's fastest-growing zone with direct access to MIHAN and IBFC." },
];

export default function SkyJoyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
          <img src={plot} alt="Sky Joy" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/20 via-transparent to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-[#0B0B0B]/20 to-transparent" />

        <div className="absolute inset-x-0 top-0 z-[60] flex items-center px-6 pt-24 md:px-14">
          <Link to="/projects" className="group flex items-center gap-2 text-sm text-white/80 transition hover:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm transition group-hover:border-white/50 group-hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" />
            </span>
            <span className="hidden md:inline">Back</span>
          </Link>
        </div>

        <motion.div style={{ y: textY, opacity: textOpacity }} className="absolute inset-x-0 bottom-0 z-10 px-6 pb-16 md:px-14 md:pb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[var(--gold)]">HOABL · MahaRERA PP1190002502095</span>
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-tight">Sky</motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }} className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-tight text-gradient-gold italic">Joy</motion.h1>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-7 flex flex-wrap items-center gap-5">
            <span className="flex items-center gap-2 text-sm text-white/50"><MapPin className="h-4 w-4 text-[var(--gold)]" /> Mondha, Hingna, South Nagpur</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="flex items-center gap-1.5 font-display text-xl text-white"><Waves className="h-5 w-5 text-[var(--gold)]" /> India's First Waterfront Plots</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── TICKER ── */}
      <div className="overflow-hidden border-y border-white/8 py-3">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} className="flex whitespace-nowrap">
          {["Sky Joy", "78 Acres", "918 Plots", "Waterfront Living", "RERA Approved", "South Nagpur",
            "Sky Joy", "78 Acres", "918 Plots", "Waterfront Living", "RERA Approved", "South Nagpur"].map((item, i) => (
            <span key={i} className="mx-6 text-[11px] uppercase tracking-[0.3em] text-white/30">
              {item} <span className="mx-3 text-[var(--gold)]">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── STATS ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div key={h.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className="border-l-2 border-[var(--gold)]/40 pl-5 py-1">
              <div className="font-display text-3xl text-white md:text-4xl">{h.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT + IMAGE ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-14">
        <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">About The Project</span>
              <h2 className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">Where luxury meets<br /><span className="text-gradient-gold italic">the waterfront.</span></h2>
              <p className="mt-6 text-base leading-[1.9] text-white/50 max-w-lg">
                HOABL Impactum Land Private Limited presents Sky Joy, India's first luxury waterfront plotted development. Spread across approximately 78 acres, featuring a ~3-acre man-made beach and wave pool, and a grand 28,000 sq. ft. clubhouse with 40+ world-class lifestyle amenities.
              </p>
            </motion.div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pillars.map((f, i) => (
                <motion.div key={f.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group rounded-[20px] border border-white/8 bg-white/3 p-5 transition-all hover:border-[var(--gold)]/30 hover:bg-white/6">
                  <div className="font-display text-sm text-gradient-gold">{f.num}</div>
                  <div className="mt-2 font-display text-lg text-white">{f.title}</div>
                  <div className="mt-1 text-sm text-white/50">{f.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative lg:sticky lg:top-10">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[24px] border border-white/6 bg-white/3" />
              <div className="relative overflow-hidden rounded-[24px]">
                <img src={penthouse} alt="Sky Joy" className="h-[500px] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-2xl bg-[#0B0B0B]/80 backdrop-blur-xl border border-white/10 px-4 py-3">
                  <div className="text-[9px] uppercase tracking-widest text-white/40">Total Area</div>
                  <div className="mt-0.5 font-display text-xl text-[var(--gold)]">~78 Acres</div>
                </div>
                <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-[#0B0B0B]/80 backdrop-blur-xl border border-[var(--gold)]/25 px-4 py-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-[var(--gold)]" />
                  <span className="text-[10px] uppercase tracking-widest text-white/70">MahaRERA Verified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-14">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">World-Class</span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Amenities & <span className="text-gradient-gold italic">Experiences</span></h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {amenities.map((a, i) => (
            <motion.div key={a} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} whileHover={{ scale: 1.05 }} className="cursor-default rounded-full border border-white/10 bg-white/4 px-5 py-2.5 text-sm text-white/60 transition-colors hover:border-[var(--gold)]/50 hover:text-[var(--gold)]">
              {a}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SPECS + CONNECTIVITY ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-14">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[28px] border border-white/8 bg-white/3 p-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">Project Details</span>
            <div className="mt-6 space-y-5">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20"><Icon className="h-3.5 w-3.5 text-[var(--gold)]" /></span>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/35">{label}</div>
                    <div className="mt-0.5 text-sm text-white/80">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-[28px] border border-white/8 bg-white/3 p-8">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">Connectivity</span>
            <div className="mt-6 space-y-4">
              {connectivity.map((c, i) => (
                <div key={c} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[10px] font-semibold text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-white/65">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/5 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">MahaRERA Registration</div>
                <div className="mt-0.5 font-mono text-sm text-white">PP1190002502095</div>
                <div className="mt-0.5 text-xs text-white/35">Valid: 16 Jan 2026 – 31 Dec 2030</div>
                <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--gold)] hover:underline">
                  MahaRERA Official Website <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={plot} alt="" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/95 to-[#0B0B0B]/85" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-14 md:py-36">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
            <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]">Own a piece of the waterfront</p>
              <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">Live where the<br /><span className="text-gradient-gold italic">water meets luxury.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }} className="flex flex-col gap-4">
              <a href="/#contact" className="group flex items-center gap-3 rounded-full px-10 py-4 font-display text-lg text-[#0B0B0B]" style={{ background: "var(--gradient-gold)" }}>
                Book Site Visit <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B0B0B]/20 transition-transform group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span>
              </a>
              <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-white/12 px-10 py-4 text-sm text-white/50 transition hover:border-white/30 hover:text-white">
                <ExternalLink className="h-4 w-4" /> MahaRERA Website
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <EnquiryForm projectName="Sky Joy" whatsappNumber="917796277602" />

      <div className="border-t border-white/6 px-6 py-6 md:px-14">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <img src={logo} alt="VIP VisionSquare" className="h-10 w-auto object-contain opacity-60" />
          <a href="/" className="text-xs text-white/30 transition hover:text-white/60">← All Projects</a>
        </div>
      </div>
    </main>
  );
}
