import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Building2,
  Car,
  Check,
  ChevronRight,
  Droplets,
  Home,
  Leaf,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sun,
  Utensils,
  Waves,
  Zap,
} from "lucide-react";

import skyCrown from "@/assets/skyCrown.jpeg";
import { EnquiryForm } from "@/components/shared/EnquiryForm";

/* =========================================================
   DATA
========================================================= */

const highlights = [
  {
    number: "3",
    label: "BHK Premium Homes",
  },
  {
    number: "01",
    label: "Signature Address",
  },
  {
    number: "24×7",
    label: "Security & Water",
  },
  {
    number: "01",
    label: "Rooftop Garden",
  },
];

const amenities = [
  {
    icon: Leaf,
    title: "Rooftop Garden",
    text: "A calm elevated space designed for fresh air and everyday relaxation.",
  },
  {
    icon: ShieldCheck,
    title: "Smart Security",
    text: "24×7 CCTV surveillance with smart video doorbell provision.",
  },
  {
    icon: Zap,
    title: "EV Charging",
    text: "Dedicated electric vehicle charging facility for modern mobility.",
  },
  {
    icon: Droplets,
    title: "24×7 Water Supply",
    text: "Reliable water supply designed around everyday residential comfort.",
  },
  {
    icon: Waves,
    title: "Rainwater Harvesting",
    text: "Thoughtful water management through rainwater harvesting.",
  },
  {
    icon: Car,
    title: "Covered Parking",
    text: "Individual covered parking for convenient everyday access.",
  },
  {
    icon: Sun,
    title: "Solar Common Areas",
    text: "Solar-powered solution supporting common-area requirements.",
  },
  {
    icon: Utensils,
    title: "Semi-Modular Kitchen",
    text: "A practical kitchen setup designed for contemporary living.",
  },
];

const specifications = [
  ["Structure", "RCC Framed Structure"],
  ["Main Door", "Decorative Main Door"],
  ["Windows", "UPVC Sliding Windows"],
  ["Flooring", "Digital Tiles"],
  ["Kitchen", "Black Granite Platform + SS Sink"],
  ["Bathrooms", "Premium Sanitary Ware & Fittings"],
  ["Electrical", "Concealed Copper Wiring"],
  ["AC", "AC Provision"],
  ["Lift", "Lift with ARD System"],
];

const floorPlan = [
  ["Drawing & Dining", `25'-0" × 12'-8"`],
  ["Master Bedroom", `14'-6" × 10'-3"`],
  ["Bedroom 2", `11'-10" × 13'-7"`],
  ["Bedroom 3", `11'-4" × 10'-8"`],
  ["Kitchen", `12'-5" × 9'-4"`],
  ["Utility", `4'-11" × 9'-9"`],
  ["Lift", `5'-3" × 5'-3"`],
  ["Balcony", `16'-1" × 4'-3"`],
];

const connectivity = [
  "Jaiprakash Nagar Metro Station",
  "Ujwal Nagar Metro Station",
  "Airport Metro Station",
  "Dr. Babasaheb Ambedkar International Airport",
  "Hotel Pride",
  "Ginger Hotel",
  "Trends",
  "Westside",
];

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SkyConnect7CrownPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden pt-60">

        {/* Background */}
        <img
          src={skyCrown}
          alt="SkyConnect 7 Crown premium residences"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />

        {/* Top navigation */}
        <div className="absolute left-0 right-0 top-40 z-30">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-16">

            <Link
              to="/projects"
              className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
              Projects
            </Link>

           
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[92vh] items-end">

          <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24 lg:px-16">

            <div className="max-w-4xl">

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 flex flex-wrap items-center gap-3"
              >
                <span className="rounded-full border border-[#D4AF37]/40 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#F5E27A] backdrop-blur-xl">
                  Premium Residences
                </span>

                <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/60 backdrop-blur-xl">
                  Jaiprakash Nagar · Nagpur
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="font-display text-[58px] font-medium leading-[0.86] tracking-[-0.04em] sm:text-[76px] md:text-[100px] lg:text-[128px]"
              >
                SkyConnect
                <br />

                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5E27A] to-[#B99024] bg-clip-text italic text-transparent">
                  7 Crown
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-7 max-w-2xl text-sm leading-7 text-white/65 md:text-lg md:leading-8"
              >
                A premium 3 BHK residential address designed around
                spacious living, refined finishes, smart security and
                contemporary lifestyle amenities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#enquire"
                  className="group flex items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-medium text-black transition hover:bg-[#F5E27A]"
                >
                  Explore 7 Crown
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+918989666888"
                  className="flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-6 py-3.5 text-sm text-white backdrop-blur-xl transition hover:border-[#D4AF37]/60"
                >
                  <Phone className="h-4 w-4 text-[#D4AF37]" />
                  Call Now
                </a>
              </motion.div>
            </div>

            {/* Hero bottom metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-14 grid max-w-3xl grid-cols-2 gap-y-5 border-t border-white/15 pt-6 md:grid-cols-4"
            >
              {highlights.map((item) => (
                <div key={item.label}>
                  <div className="font-display text-xl text-[#F5E27A] md:text-2xl">
                    {item.number}
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/45">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 right-6 z-20 hidden flex-col items-center gap-3 md:flex">
          <span className="rotate-90 text-[9px] uppercase tracking-[0.3em] text-white/40">
            Discover
          </span>

          <ArrowDown className="h-4 w-4 text-[#D4AF37] mt-3" />
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative bg-[#080808] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:items-end">

            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                The 7 Crown Experience
              </p>

              <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                More than a home.
                <br />

                <span className="text-white/35">
                  A signature way of living.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-sm leading-7 text-white/50 md:text-base md:leading-8">
                SkyConnect 7 Crown is designed for people who value
                space, privacy, connectivity and thoughtful details.
                Every element is planned to bring everyday comfort into
                a refined residential setting.
              </p>

              <div className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                <span className="h-px w-10 bg-[#D4AF37]" />
                Jaiprakash Nagar · Nagpur
              </div>
            </Reveal>

          </div>

          {/* Address card */}
          <Reveal delay={0.15} className="mt-16">
            <div className="grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] md:grid-cols-[0.7fr_1.3fr]">

              <div className="flex min-h-[260px] items-end bg-gradient-to-br from-[#15120b] to-[#0c0c0c] p-7 md:p-10">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                  </div>

                  <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-white/35">
                    Signature Address
                  </p>

                  <h3 className="mt-2 font-display text-3xl">
                    7 Crown
                  </h3>
                </div>
              </div>

              <div className="p-7 md:p-10">
                <p className="max-w-2xl text-lg leading-8 text-white/70 md:text-2xl md:leading-10">
                  Plot 30–31, Beside Hotel Trance,
                  <span className="text-white">
                    {" "}Jaiprakash Nagar, Nagpur – 440025
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "3 BHK",
                    "Covered Parking",
                    "Rooftop Garden",
                    "Smart Security",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-wider text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          WHY 7 CROWN
      ===================================================== */}

      <section className="bg-[#0d0d0d] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
              Why 7 Crown
            </p>

            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
                Designed around
                <br />
                <span className="italic text-[#D4AF37]">
                  the way you live.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-white/45">
                From the rooftop garden to covered parking and
                smart security, 7 Crown focuses on the details that
                make a residence feel complete.
              </p>

            </div>
          </Reveal>

          {/* Feature cards */}
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                no: "01",
                title: "Spacious 3 BHK",
                text: "Thoughtfully planned living, dining, bedrooms, kitchen, utility and balconies.",
              },
              {
                no: "02",
                title: "Rooftop Lifestyle",
                text: "A dedicated rooftop garden creates an elevated space to unwind.",
              },
              {
                no: "03",
                title: "Smart Security",
                text: "CCTV surveillance and smart video doorbell provision for added peace of mind.",
              },
              {
                no: "04",
                title: "Connected Address",
                text: "A Jaiprakash Nagar location with access to metro, airport, hospitality and retail.",
              },
            ].map((item, index) => (
              <Reveal key={item.no} delay={index * 0.06}>
                <div className="group relative min-h-[250px] overflow-hidden rounded-[24px] border border-white/10 bg-[#111] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/30">

                  <span className="font-mono text-[10px] text-[#D4AF37]/60">
                    {item.no}
                  </span>

                  <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-[#D4AF37]" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-white/40">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          AMENITIES
      ===================================================== */}

      <section className="bg-[#080808] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                Amenities
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
                Everything
                <br />
                <span className="italic text-white/35">
                  thoughtfully placed.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                Practical features meet modern lifestyle requirements
                across the home and common spaces.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs text-white/40">
                <span className="h-px w-12 bg-[#D4AF37]" />
                7 CROWN AMENITIES
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">

              {amenities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.04}>
                    <div className="group rounded-[20px] border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.035]">

                      <div className="flex items-start justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                          <Icon className="h-5 w-5 text-[#D4AF37]" />
                        </div>

                        <ChevronRight className="h-4 w-4 text-white/20 transition group-hover:translate-x-1 group-hover:text-[#D4AF37]" />

                      </div>

                      <h3 className="mt-6 font-display text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-white/40">
                        {item.text}
                      </p>

                    </div>
                  </Reveal>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOOR PLAN
      ===================================================== */}

      <section className="bg-[#0d0d0d] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                  Residence
                </p>

                <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
                  Space that
                  <span className="italic text-[#D4AF37]">
                    {" "}feels right.
                  </span>
                </h2>
              </div>

              <div className="rounded-full border border-white/10 px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
                Spacious 3 BHK
              </div>

            </div>
          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {floorPlan.map(([room, size], index) => (
              <Reveal key={room} delay={index * 0.04}>

                <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#111] p-6">

                  <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#D4AF37]/5 transition group-hover:bg-[#D4AF37]/10" />

                  <p className="relative text-[9px] uppercase tracking-[0.2em] text-white/35">
                    {room}
                  </p>

                  <p className="relative mt-5 font-display text-xl text-[#F5E27A]">
                    {size}
                  </p>

                  <div className="mt-5 h-px w-full bg-white/8" />

                  <div className="mt-3 flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/25">
                    <MaximizeIcon />
                    Dimensions
                  </div>

                </div>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      <section className="bg-[#080808] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
              Specifications
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl">
              Crafted with
              <br />
              <span className="italic text-white/35">
                considered details.
              </span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">

            {specifications.map(([label, value], index) => (
              <Reveal key={label} delay={index * 0.03}>

                <div className="border-b border-white/10 py-6">

                  <div className="flex items-start justify-between gap-4">

                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                      {label}
                    </div>

                    <Check className="h-4 w-4 shrink-0 text-[#D4AF37]" />

                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {value}
                  </p>

                </div>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-24 md:px-10 lg:px-16 lg:py-32">

        <div className="absolute right-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
                Location
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
                At the centre
                <br />
                of{" "}
                <span className="italic text-[#D4AF37]">
                  connection.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                Located in Jaiprakash Nagar, 7 Crown places everyday
                destinations and city connectivity within reach.
              </p>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                    Project Address
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Plot 30–31, Beside Hotel Trance,
                    Jaiprakash Nagar, Nagpur – 440025
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">

              {connectivity.map((place, index) => (
                <Reveal key={place} delay={index * 0.04}>

                  <div className="flex min-h-[100px] items-center gap-4 rounded-2xl border border-white/10 bg-[#111] p-5 transition hover:border-[#D4AF37]/30">

                    <span className="font-mono text-[10px] text-[#D4AF37]/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-white/60">
                      {place}
                    </p>

                  </div>

                </Reveal>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        id="enquire"
        className="relative overflow-hidden bg-[#080808] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <div className="text-center">

              <p className="text-[20px] uppercase tracking-[0.14em] text-[#D4AF37]">
                SkyConnect 7 Crown
              </p>


              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                Discover the spaces, specifications and lifestyle
                behind SkyConnect 7 Crown.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">

                <a
                  href="tel:+918989666888"
                  className="flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-medium text-black transition hover:bg-[#F5E27A]"
                >
                  <Phone className="h-4 w-4" />
                  +91 8989 666 888
                </a>

                <a
                  href="mailto:skyconnectinfra@gmail.com"
                  className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm text-white transition hover:border-[#D4AF37]/50"
                >
                  Enquire by Email
                  <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
                </a>

              </div>

            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={0.15} className="mt-16">
         
              <EnquiryForm
                projectName="SkyConnect 7 Crown"
                whatsappNumber="918989666888"
              />

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          MOBILE CTA
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#080808]/95 p-3 backdrop-blur-xl md:hidden">

        <div className="flex gap-2">

          <a
            href="tel:+918989666888"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-xs text-white"
          >
            <Phone className="h-4 w-4 text-[#D4AF37]" />
            Call
          </a>

          <a
            href="#enquire"
            className="flex flex-[1.5] items-center justify-center gap-2 rounded-full bg-[#D4AF37] py-3 text-xs font-medium text-black"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>
      </div>

    </main>
  );
}

/* =========================================================
   SMALL ICON
========================================================= */

function MaximizeIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}