import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedHeading } from "@/components/shared/AnimatedHeading";
import { Showcase } from "@/components/sections/Showcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import hero from "@/assets/hero-villa.jpg";
import { Award, Users, Building2, TrendingUp, Heart, ShieldCheck, Lightbulb } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Families Served" },
  { icon: Award,     value: "10+",  label: "Years Experience" },
  { icon: Users,     value: "3",    label: "Premium Projects" },
  { icon: TrendingUp,value: "84+",  label: "Acres Developed" },
];

const values = [
  { icon: Heart,      title: "Customer First",    desc: "Every decision we make is guided by what's best for our buyers and investors." },
  { icon: ShieldCheck,title: "Integrity Always",  desc: "Transparent pricing, honest communication, and zero hidden charges — always." },
  { icon: Lightbulb,  title: "Innovation",        desc: "Modern architecture, smart homes, and sustainable construction practices." },
  { icon: TrendingUp, title: "Growth Mindset",    desc: "We invest in Nagpur's future, delivering projects in high-appreciation corridors." },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <main>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <motion.img
          src={hero}
          alt="About VIP VisionSquare"
          style={{ y: imgY }}
          className="absolute inset-0 h-[120%] w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0B0B0B]" />

        <motion.div
          style={{ y: textY }}
          className="relative flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]"
          >
            About Us
          </motion.span>

          <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">
            {["Building", "Dreams,", "Delivering", "Excellence"].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  className={`inline-block ${i === 1 || i === 3 ? "text-gradient-gold italic" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-5 max-w-xl text-white/55"
          >
            Nagpur's trusted real estate developer — delivering premium residential and commercial projects since 2014.
          </motion.p>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-white/3 p-7 text-center transition-all hover:border-[var(--gold)]/30 hover:bg-white/6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative mb-3 flex justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20">
                    <s.icon className="h-5 w-5 text-[var(--gold)]" />
                  </span>
                </div>
                <div className="relative font-display text-3xl text-gradient-gold md:text-4xl">{s.value}</div>
                <div className="relative mt-1 text-[11px] uppercase tracking-[0.2em] text-white/40">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
            <AnimatedHeading
              label="Our Story"
              title="A Decade of Premium Real Estate in Nagpur"
              accentWords={["Premium", "Nagpur"]}
              subtitle="Founded with a vision to transform Nagpur's skyline, VIP VisionSquare has grown from a single project to one of the city's most trusted real estate brands. We combine modern design with quality construction to deliver homes that stand the test of time."
            />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {[
                "We started in 2014 with a single residential project in MIHAN, Nagpur — and delivered it on time, within budget, with zero compromises on quality.",
                "Today, we manage 3 premium projects spanning 84+ acres, with 500+ families calling our developments home.",
                "Our focus remains the same: build homes that appreciate in value, stand out in design, and bring genuine joy to the people who live in them.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="text-white/60 leading-relaxed border-l-2 border-[var(--gold)]/30 pl-5"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-14 text-center">
            <AnimatedHeading
              label="Our Values"
              title="What Drives Us Every Day"
              accentWords={["Drives", "Every"]}
              center
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-white/3 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--gold)]/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-5">
                  <v.icon className="h-5 w-5 text-[var(--gold)]" />
                </span>
                <h3 className="relative font-display text-xl text-white">{v.title}</h3>
                <p className="relative mt-2 text-sm text-white/55 leading-relaxed">{v.desc}</p>
                <div className="relative mt-6 h-px bg-gradient-to-r from-[var(--gold)]/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Showcase />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
