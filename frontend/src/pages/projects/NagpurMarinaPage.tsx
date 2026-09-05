import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, Eye, Clock, Heart, MessageCircle, Send,
  Play, MapPin, Building2, Maximize2, CalendarCheck, ShieldCheck, ExternalLink,
} from "lucide-react";
import plot from "@/assets/prop-plot.jpg";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

const feeds = [
  {
    tag: "DRONE", tagColor: "bg-orange-500",
    title: "MIHAN Corporate Hub Drone Flyover",
    desc: "Actual drone footage of Nagpur's rapid tech development. Skyward expansion near Infosys and TCS campus blocks.",
    views: "18.2K", duration: "0:25s",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    tag: "UPDATE", tagColor: "bg-blue-500",
    title: "AeroCity Site Modern Highways Gate Connect",
    desc: "Watch roads paving live! Connecting the Wardha Road multi-lane highway directly to plot gate pillars.",
    views: "24.5K", duration: "0:18s",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    tag: "GUIDE", tagColor: "bg-green-500",
    title: "Investment Roadmap: Nagpur Under 30 Lakhs",
    desc: "Senior advisor breaks down exactly which zones offer the highest 2026-2030 appreciation score.",
    views: "42.1K", duration: "0:42s",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const highlights = [
  { label: "Total Area", value: "~78 Acres" },
  { label: "Total Plots", value: "918" },
  { label: "Net Plot Area", value: "1,45,114 sq.m." },
  { label: "Possession", value: "Dec 2030" },
];

const amenities = [
  "~3-Acre Man-Made Beach & Wave Pool",
  "28,000 sq.ft Luxury Clubhouse",
  "40+ Lifestyle Amenities",
  "MIROS Hotels & Resorts Hospitality",
  "Concierge & Housekeeping Services",
  "Gourmet Dining & Entertainment",
  "Wellness & Recreation Zones",
  "Community Engagement Spaces",
];

const connectivity = [
  "MIHAN — International Airport Zone",
  "Butibori MIDC",
  "Samruddhi Mahamarg",
  "Metro Expansion Corridor",
  "Proposed IBFC (International Business & Finance Centre)",
];

export default function NagpurMarinaPage() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-white">

      {/* ── Hero ── */}
      <div className="relative h-[52vh] min-h-[340px] overflow-hidden">
        <img src={plot} alt="Nagpur Marina" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/50 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 md:px-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="mb-2 inline-block rounded-full border border-[var(--gold)]/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]">
              Lodha — MahaRERA Registered
            </span>
            <h1 className="font-display text-5xl leading-tight md:text-6xl">
              Nagpur <span className="text-gradient-gold italic">Marina</span>
            </h1>
            <p className="mt-1 text-white/60">Mondha, Hingna, South Nagpur</p>
          </motion.div>
        </div>
        <Link
          to="/projects"
          className="absolute left-6 top-6 z-[60] flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:text-white md:left-16"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </div>

      {/* ── Highlights bar ── */}
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="my-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass border-gradient-gold rounded-[20px] p-4 text-center">
              <div className="font-display text-2xl text-gradient-gold">{h.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60">{h.label}</div>
            </div>
          ))}
        </div>

        {/* ── Main two-column layout ── */}
        <div className="flex flex-col gap-8 pb-20 lg:flex-row lg:items-start lg:gap-10">

          {/* LEFT — feed cards */}
          <div className="flex-1">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/40">Active Updates &amp; Guides</p>
            <div className="flex flex-col gap-4">
              {feeds.map((f, i) => (
                <motion.button
                  key={f.title}
                  onClick={() => { setActive(i); setPlaying(false); }}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`flex items-start gap-4 rounded-[18px] border p-4 text-left transition-all duration-300 ${
                    active === i
                      ? "border-[var(--gold)]/50 bg-white/8 shadow-[0_0_30px_-8px_rgba(212,175,55,0.3)]"
                      : "border-white/8 bg-white/4 hover:border-white/20"
                  }`}
                >
                  <div className="relative h-[90px] w-[100px] shrink-0 overflow-hidden rounded-[12px] bg-white/10">
                    <img src={plot} alt={f.title} className="h-full w-full object-cover opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-5 w-5 fill-white text-white opacity-80" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className={`inline-block rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white ${f.tagColor}`}>
                      {f.tag}
                    </span>
                    <h3 className="mt-1.5 font-display text-base leading-snug text-white">{f.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/50">{f.desc}</p>
                    <div className="mt-2 flex items-center gap-4 text-[11px] text-white/40">
                      <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {f.views}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {f.duration}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT — phone mockup */}
          <div className="flex justify-center lg:sticky lg:top-10 lg:w-[520px] lg:shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-[300px]"
            >
              <div className="relative overflow-hidden rounded-[40px] border-[6px] border-white/10 bg-[#111] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between bg-[#0a0a0a] px-5 py-2 text-[10px] text-white/50">
                  <span className="truncate font-mono">{feeds[active].title.slice(0, 14)}…</span>
                  <span className="font-mono">Live Feed</span>
                </div>
                <div className="relative aspect-[2/3] w-full bg-black">
                  {playing ? (
                    <iframe
                      src={`${feeds[active].videoUrl}?autoplay=1&mute=1&controls=0&loop=1`}
                      className="h-full w-full"
                      allow="autoplay; fullscreen"
                      title={feeds[active].title}
                    />
                  ) : (
                    <>
                      <img src={plot} alt="preview" className="h-full w-full object-cover opacity-50" />
                      <button onClick={() => setPlaying(true)} className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition hover:bg-white/30">
                          <Play className="h-7 w-7 fill-white text-white" />
                        </span>
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-32 right-3 flex flex-col items-center gap-5">
                    <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[var(--gold)]">
                      <img src={plot} alt="avatar" className="h-full w-full object-cover" />
                    </div>
                    {[{ Icon: Heart, count: "24" }, { Icon: MessageCircle, count: "128" }, { Icon: Send, count: "Share" }].map(({ Icon, count }) => (
                      <div key={count} className="flex flex-col items-center gap-1">
                        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                          <Icon className="h-4 w-4 text-white" />
                        </button>
                        <span className="text-[10px] text-white/60">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#111] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-[9px] uppercase tracking-widest text-white/50">Live Progress Drone Feed</span>
                  </div>
                  <p className="mt-1 font-display text-sm text-white">{feeds[active].title}</p>
                  <p className="mt-0.5 line-clamp-2 text-[11px] text-white/50">{feeds[active].desc}</p>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[var(--gold)] to-yellow-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Project details ── */}
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 md:p-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Project Details</span>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              { icon: Building2, label: "Developer", value: "HOABL Impactum Land Pvt. Ltd." },
              { icon: MapPin, label: "Location", value: "Kh. No. 100, Mondha, Hingna, Nagpur" },
              { icon: Maximize2, label: "Net Plot Area", value: "1,45,114.84 sq.m." },
              { icon: CalendarCheck, label: "Registration Valid", value: "Jan 2026 – Dec 2030" },
              { icon: Building2, label: "Total Plots", value: "918 Planned Plots" },
              { icon: ShieldCheck, label: "RERA No.", value: "PP1190002502095" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
                  <div className="mt-0.5 text-sm text-white/80">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Amenities + Connectivity ── */}
        <div className="my-10 grid gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">World-Class Amenities</span>
            <ul className="mt-4 space-y-2">
              {amenities.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />{a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Connectivity</span>
            <ul className="mt-4 space-y-2">
              {connectivity.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[var(--gold)]" />{c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RERA ── */}
        <div className="mb-16 flex flex-col items-center gap-6">
          <div className="flex items-start gap-3 rounded-[16px] border border-[var(--gold)]/20 bg-white/5 p-4 w-full max-w-md">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
            <div>
              <div className="text-xs uppercase tracking-widest text-white/50">MahaRERA Registration</div>
              <div className="mt-0.5 font-mono text-sm text-white">PP1190002502095</div>
              <div className="mt-0.5 text-xs text-white/40">Valid: 16 Jan 2026 – 31 Dec 2030</div>
              <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--gold)] hover:underline">
                MahaRERA Official Website <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <EnquiryForm projectName="Nagpur Marina" whatsappNumber="917796277602" />
    </main>
  );
}
