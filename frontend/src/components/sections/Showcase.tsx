import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import penthouse from "@/assets/prop-penthouse.jpg";

const features = [
  { k: "01", t: "Modern Design", d: "Spacious layouts with premium finishing and contemporary architecture." },
  { k: "02", t: "Prime Location", d: "Properties in MIHAN, Wardha Road, Beltarodi & Manish Nagar." },
  { k: "03", t: "Quality Construction", d: "Built with the finest materials ensuring durability and elegance." },
  { k: "04", t: "Smart Investment", d: "High appreciation potential with Nagpur's growing infrastructure." },
];

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section id="showcase" ref={ref} className="relative overflow-hidden py-14 md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div style={{ y }} className="relative h-[520px] overflow-hidden rounded-[36px] md:h-[680px]">
          <img src={penthouse} alt="Luxury penthouse" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute inset-0 rounded-[36px] ring-1 ring-inset ring-white/10" />
          <div className="absolute left-6 top-6 glass-strong rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em]">
            Premium Living
          </div>
          <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-[24px] p-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">VIP VisionSquare</div>
            <div className="mt-1 font-display text-2xl">Luxury Apartments · Nagpur</div>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">About Us</span>
          <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
            Trusted Real Estate Developers <span className="text-gradient-gold italic">in Nagpur</span>.
          </h2>
          <p className="mt-5 max-w-lg text-white/60">
            We are a leading real estate company in Nagpur, known for delivering premium residential and commercial projects.
            With a strong focus on quality construction, modern design, and customer satisfaction, we have helped hundreds of families find the perfect property.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.k}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass border-gradient-gold rounded-[20px] p-5"
              >
                <div className="font-display text-sm text-gradient-gold">{f.k}</div>
                <div className="mt-2 font-display text-lg">{f.t}</div>
                <div className="mt-1 text-sm text-white/55">{f.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
