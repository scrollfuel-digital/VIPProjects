import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Eye,
  Clock,
  Heart,
  MessageCircle,
  Send,
  Play,
  MapPin,
  Building2,
  Maximize2,
  ShieldCheck,
  Car,
  Waves,
  Zap,
  Droplets,
  Leaf,
  Utensils,
  DoorOpen,
  Sun,
  Home,
} from "lucide-react";

import plot from "@/assets/prop-plot.jpg";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

/* =========================================================
   FEED / UPDATES
========================================================= */

const feeds = [
  {
    tag: "PROJECT",
    tagColor: "bg-blue-500",
    title: "SkyConnect 7 Crown",
    desc: "Explore premium residential homes designed with spacious layouts, modern specifications and thoughtful amenities.",
    views: "7 Crown",
    duration: "3 BHK",
    videoUrl: "",
  },
  {
    tag: "AMENITIES",
    tagColor: "bg-emerald-500",
    title: "Rooftop Garden & Lifestyle Amenities",
    desc: "Experience rooftop living with a garden, lift access, EV charging, solar-powered common areas and more.",
    views: "Premium",
    duration: "Amenities",
    videoUrl: "",
  },
  {
    tag: "LOCATION",
    tagColor: "bg-orange-500",
    title: "Connected to Nagpur",
    desc: "Located in Jaiprakash Nagar with access to metro stations, airport, hotels, retail destinations and everyday conveniences.",
    views: "Jaiprakash",
    duration: "Nagpur",
    videoUrl: "",
  },
];

/* =========================================================
   PROJECT HIGHLIGHTS
========================================================= */

const highlights = [
  {
    label: "Configuration",
    value: "3 BHK",
  },
  {
    label: "Project",
    value: "7 Crown",
  },
  {
    label: "Location",
    value: "Jaiprakash Nagar",
  },
  {
    label: "Parking",
    value: "Covered",
  },
];

/* =========================================================
   AMENITIES
   Based on brochure
========================================================= */

const amenities = [
  {
    icon: Leaf,
    title: "Rooftop Garden",
    description: "A dedicated rooftop garden for relaxing outdoor moments.",
  },
  {
    icon: Building2,
    title: "Lift Access",
    description: "Lift access extending to the rooftop.",
  },
  {
    icon: ShieldCheck,
    title: "24×7 CCTV Surveillance",
    description: "Round-the-clock CCTV surveillance for added security.",
  },
  {
    icon: Zap,
    title: "EV Charging",
    description: "Electric vehicle charging facility.",
  },
  {
    icon: Droplets,
    title: "24×7 Water Supply",
    description: "Continuous water supply for residential convenience.",
  },
  {
    icon: Waves,
    title: "Rainwater Harvesting",
    description: "Rainwater harvesting system integrated into the project.",
  },
  {
    icon: Home,
    title: "Premium POP Finish",
    description: "Premium POP finish for an enhanced interior appearance.",
  },
  {
    icon: Utensils,
    title: "Semi-Modular Kitchen",
    description: "Kitchen designed with a practical semi-modular setup.",
  },
  {
    icon: Car,
    title: "Individual Covered Parking",
    description: "Dedicated covered parking for residents.",
  },
  {
    icon: DoorOpen,
    title: "Smart Video Door Bell",
    description: "Smart video doorbell provision for enhanced entry security.",
  },
  {
    icon: MapPin,
    title: "Park-Facing Homes",
    description: "Selected homes designed with park-facing views.",
  },
  {
    icon: Sun,
    title: "Solar-Powered Common Areas",
    description: "Solar-powered solution for common areas.",
  },
];

/* =========================================================
   CONNECTIVITY
========================================================= */

const connectivity = [
  "Airport Metro Station",
  "Ujwal Nagar Metro Station",
  "Jaiprakash Nagar Metro Station",
  "Dr. Babasaheb Ambedkar International Airport",
  "Hotel Pride",
  "Ginger Hotel",
  "Trends",
  "Westside",
];

/* =========================================================
   HOME SPECIFICATIONS
   Based on brochure
========================================================= */

const specifications = [
  {
    title: "Structure",
    value: "RCC Framed Structure",
  },
  {
    title: "Internal Walls",
    value: "115mm Thick Red Brick Walls",
  },
  {
    title: "External Walls",
    value: "150mm Thick Red Brick Walls",
  },
  {
    title: "Main Door",
    value: "Decorative Main Door with Smart Biometric Lock Provision",
  },
  {
    title: "Doors",
    value: "Laminated Flush Doors with Plywood Frame",
  },
  {
    title: "Windows",
    value: "UPVC Sliding Windows with Mosquito Mesh Provision",
  },
  {
    title: "Bathrooms",
    value: "Anti-Skid Tiles with Premium Quality Fittings and Sanitary Ware",
  },
  {
    title: "Flooring",
    value: "Digital Tiles in Complete Flat",
  },
  {
    title: "Plumbing",
    value: "Concealed Branded Fittings & Fixtures",
  },
  {
    title: "Kitchen",
    value: "Black Granite Platform Top with Stainless Steel Sink and Dado",
  },
  {
    title: "Painting",
    value: "External Weather-Proof Paint with Internal Putty & Satin Paint",
  },
  {
    title: "Electrical",
    value: "Concealed Copper Wiring with Modular Switches",
  },
  {
    title: "AC",
    value: "AC Provision",
  },
  {
    title: "Parking",
    value: "Car & 2-Wheeler Parking with Allotted Parking Space",
  },
  {
    title: "Automation",
    value: "Lift with ARD System",
  },
];

/* =========================================================
   FLOOR PLAN
   Based on brochure
========================================================= */

const floorPlan = [
  {
    space: "Drawing & Dining Hall",
    size: "25'-0\" × 12'-8\"",
  },
  {
    space: "Master Bedroom",
    size: "14'-6\" × 10'-3\"",
  },
  {
    space: "Bedroom 2",
    size: "11'-10\" × 13'-7\"",
  },
  {
    space: "Bedroom 3",
    size: "11'-4\" × 10'-8\"",
  },
  {
    space: "Kitchen",
    size: "12'-5\" × 9'-4\"",
  },
  {
    space: "Utility",
    size: "4'-11\" × 9'-9\"",
  },
  {
    space: "Lift",
    size: "5'-3\" × 5'-3\"",
  },
  {
    space: "Balcony",
    size: "16'-1\" × 4'-3\"",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SkyConnect7CrownPage() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0B] text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative h-[62vh] min-h-[480px] overflow-hidden">
        <img
          src={plot}
          alt="SkyConnect 7 Crown"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/60 to-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]" />

        {/* Back button */}
        <Link
          to="/projects"
          className="absolute left-6 top-6 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:border-white/20 hover:text-white md:left-16"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        {/* Hero content */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-16 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-7xl"
          >
            <span className="mb-4 inline-flex rounded-full border border-[var(--gold)]/40 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] backdrop-blur-md">
              Premium Residential Project
            </span>

            <h1 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              SkyConnect{" "}
              <span className="text-gradient-gold italic">
                7 Crown
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-[var(--gold)]" />

              <span>
                Jaiprakash Nagar, Nagpur
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              Premium residential homes thoughtfully designed with spacious
              layouts, modern specifications, smart security and lifestyle
              amenities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="my-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="glass border-gradient-gold rounded-[20px] p-5 text-center"
            >
              <div className="font-display text-2xl text-gradient-gold md:text-3xl">
                {item.value}
              </div>

              <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Where Living Meets The Sky
            </span>

            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              A refined address for{" "}
              <span className="text-gradient-gold italic">
                modern living.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              SkyConnect 7 Crown brings together thoughtfully planned
              residential spaces, premium finishes, practical conveniences and
              lifestyle-focused amenities in Jaiprakash Nagar, Nagpur.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Spacious 3 BHK Homes
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Premium Specifications
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                Rooftop Garden
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/10">
                <MapPin className="h-5 w-5 text-[var(--gold)]" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Site Address
                </p>

                <h3 className="mt-2 font-display text-xl">
                  7 Crown
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Plot 30–31, Beside Hotel Trance,
                  Jaiprakash Nagar, Nagpur – 440025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECT FEED
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* LEFT */}
          <div className="flex-1">
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Explore 7 Crown
            </p>

            <div className="flex flex-col gap-4">
              {feeds.map((feed, index) => (
                <motion.button
                  key={feed.title}
                  onClick={() => {
                    setActive(index);
                    setPlaying(false);
                  }}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`flex items-start gap-4 rounded-[18px] border p-4 text-left transition-all duration-300 ${
                    active === index
                      ? "border-[var(--gold)]/50 bg-white/8 shadow-[0_0_30px_-8px_rgba(212,175,55,0.3)]"
                      : "border-white/8 bg-white/4 hover:border-white/20"
                  }`}
                >
                  <div className="relative h-[90px] w-[100px] shrink-0 overflow-hidden rounded-[12px] bg-white/10">
                    <img
                      src={plot}
                      alt={feed.title}
                      className="h-full w-full object-cover opacity-60"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-5 w-5 fill-white text-white opacity-80" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white ${feed.tagColor}`}
                    >
                      {feed.tag}
                    </span>

                    <h3 className="mt-1.5 font-display text-base leading-snug text-white">
                      {feed.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/50">
                      {feed.desc}
                    </p>

                    <div className="mt-2 flex items-center gap-4 text-[11px] text-white/40">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {feed.views}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {feed.duration}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:sticky lg:top-10 lg:w-[420px] lg:shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-[300px]"
            >
              <div className="relative overflow-hidden rounded-[40px] border-[6px] border-white/10 bg-[#111] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]">
                {/* Header */}
                <div className="flex items-center justify-between bg-[#0a0a0a] px-5 py-2 text-[10px] text-white/50">
                  <span className="truncate font-mono">
                    SkyConnect 7 Crown
                  </span>

                  <span className="font-mono">
                    Project
                  </span>
                </div>

                {/* Image */}
                <div className="relative aspect-[2/3] w-full bg-black">
                  <img
                    src={plot}
                    alt="SkyConnect 7 Crown preview"
                    className="h-full w-full object-cover opacity-70"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                  <div className="absolute inset-x-0 bottom-10 px-5">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--gold)]">
                      SkyConnect
                    </span>

                    <h3 className="mt-2 font-display text-2xl">
                      7 Crown
                    </h3>

                    <p className="mt-1 text-xs text-white/50">
                      Premium Residential Homes
                    </p>
                  </div>

                  {/* Social style buttons */}
                  <div className="absolute bottom-28 right-3 flex flex-col items-center gap-5">
                    <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-[var(--gold)]">
                      <img
                        src={plot}
                        alt="SkyConnect"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {[
                      {
                        Icon: Heart,
                        count: "Like",
                      },
                      {
                        Icon: MessageCircle,
                        count: "Info",
                      },
                      {
                        Icon: Send,
                        count: "Share",
                      },
                    ].map(({ Icon, count }) => (
                      <div
                        key={count}
                        className="flex flex-col items-center gap-1"
                      >
                        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                          <Icon className="h-4 w-4 text-white" />
                        </button>

                        <span className="text-[9px] text-white/60">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-[#111] px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400" />

                    <span className="text-[9px] uppercase tracking-widest text-white/50">
                      Premium Residence
                    </span>
                  </div>

                  <p className="mt-2 font-display text-sm text-white">
                    SkyConnect 7 Crown
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/50">
                    Jaiprakash Nagar, Nagpur
                  </p>

                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-[var(--gold)] to-yellow-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT DETAILS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-16">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 md:p-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            Project Details
          </span>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building2,
                label: "Project",
                value: "SkyConnect 7 Crown",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Jaiprakash Nagar, Nagpur",
              },
              {
                icon: Home,
                label: "Configuration",
                value: "3 BHK Residences",
              },
              {
                icon: Car,
                label: "Parking",
                value: "Individual Covered Parking",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />

                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">
                    {label}
                  </div>

                  <div className="mt-1 text-sm leading-6 text-white/80">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOOR PLAN
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Intro */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Residence Layout
            </span>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Spacious{" "}
              <span className="text-gradient-gold italic">
                3 BHK
              </span>{" "}
              living
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/50">
              The brochure floor plan includes a drawing and dining hall,
              master bedroom, two additional bedrooms, kitchen, utility area,
              balconies and lift access.
            </p>
          </div>

          {/* Floor plan data */}
          <div className="grid gap-3 sm:grid-cols-2">
            {floorPlan.map((item, index) => (
              <motion.div
                key={item.space}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[var(--gold)]/30"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {item.space}
                </div>

                <div className="mt-2 font-display text-lg text-[var(--gold)]">
                  {item.size}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PREMIUM AMENITIES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            Premium Amenities
          </span>

          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Designed for{" "}
            <span className="text-gradient-gold italic">
              everyday comfort
            </span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;

            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="group rounded-[20px] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-[var(--gold)]/30 hover:bg-white/[0.07]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/10 transition group-hover:bg-[var(--gold)]/20">
                  <Icon className="h-5 w-5 text-[var(--gold)]" />
                </div>

                <h3 className="mt-4 font-display text-lg">
                  {amenity.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 md:p-10">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Construction & Finishes
            </span>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Premium{" "}
              <span className="text-gradient-gold italic">
                specifications
              </span>
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
            {specifications.map((spec) => (
              <div
                key={spec.title}
                className="border-b border-white/8 pb-4"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  {spec.title}
                </div>

                <div className="mt-1 text-sm leading-6 text-white/70">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONNECTIVITY
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Location
            </span>

            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Connected to{" "}
              <span className="text-gradient-gold italic">
                what matters
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              SkyConnect 7 Crown is positioned in Jaiprakash Nagar with access
              to major transportation, hospitality, retail and city
              destinations highlighted in the project brochure.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {connectivity.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[var(--gold)]" />

                <span className="text-sm text-white/65">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT / SALES OFFICE
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] border border-[var(--gold)]/20 bg-[var(--gold)]/[0.04] p-6 md:p-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Visit / Enquire
            </span>

            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              SkyConnect{" "}
              <span className="text-gradient-gold italic">
                7 Crown
              </span>
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/35">
                    Site Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    7 Crown, Plot 30–31, Beside Hotel Trance,
                    Jaiprakash Nagar, Nagpur – 440025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" />

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/35">
                    Office Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/65">
                    2nd Floor, Slesha Apartment,
                    201, Near Airport, Karve Nagar,
                    Nagpur, Maharashtra – 440025
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-widest text-white/35">
                Contact
              </p>

              <div className="mt-3 space-y-2 text-sm text-white/70">
                <p>+91 8989-666-888</p>
                <p>+91 9404-070345</p>
                <p>+91 8989-832323</p>
                <p className="text-[var(--gold)]">
                  skyconnectinfra@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center rounded-[24px] border border-white/10 bg-white/5 p-6 md:p-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Make It Yours
            </span>

            <h2 className="mt-4 font-display text-4xl leading-tight">
              Discover your next{" "}
              <span className="text-gradient-gold italic">
                address.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/50">
              Get project details, availability and assistance from the
              SkyConnect team.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+918989666888"
                className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                Call Now
              </a>

              <a
                href="mailto:skyconnectinfra@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white transition hover:border-[var(--gold)]/40"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENQUIRY FORM
      ===================================================== */}

      <EnquiryForm
        projectName="SkyConnect 7 Crown"
        whatsappNumber="918989666888"
      />
    </main>
  );
}