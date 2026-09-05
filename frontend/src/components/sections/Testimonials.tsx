import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Rahul Sharma", role: "Home Buyer, Wardha Road", body: "Smooth buying experience and excellent support from the VIP VisionSquare team. They guided us through every step." },
  { name: "Priya & Amit Deshmukh", role: "Investors, MIHAN", body: "Best property investment decision in Nagpur. The ROI potential in MIHAN is exactly what they promised." },
  { name: "Suresh Patil", role: "Business Owner, Nagpur", body: "Highly professional and transparent team. No hidden charges, RERA approved, and delivered on time." },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Client Stories</span>
            <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
              Trusted by 500+ <span className="text-gradient-gold italic">Happy Clients</span>.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-strong flex h-full flex-col rounded-[28px] p-7"
            >
              <Quote className="h-7 w-7 text-[var(--gold)]" />
              <blockquote className="mt-5 font-display text-lg leading-snug text-white/90">
                "{r.body}"
              </blockquote>
              <figcaption className="mt-auto pt-8">
                <div className="flex items-center gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="mt-3 font-display text-base">{r.name}</div>
                <div className="text-xs text-white/50">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
