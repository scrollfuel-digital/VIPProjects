import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Handshake, BadgeCheck, Wifi, Dumbbell, Trees, Car } from "lucide-react";

const reasons = [
  { icon: BadgeCheck, t: "Verified & RERA Approved", d: "All our projects are legally verified and RERA approved for complete peace of mind." },
  { icon: TrendingUp, t: "High ROI Investment", d: "Nagpur's growing infrastructure ensures strong future appreciation and returns." },
  { icon: ShieldCheck, t: "Transparent Pricing", d: "No hidden charges. Clear, honest pricing with end-to-end documentation support." },
  { icon: Handshake, t: "End-to-End Support", d: "From site visit to registration, home loan assistance, and post-handover support." },
];

const amenities = [
  { icon: ShieldCheck, label: "24/7 Security & CCTV" },
  { icon: Dumbbell, label: "Swimming Pool & Gym" },
  { icon: Trees, label: "Landscaped Gardens" },
  { icon: Wifi, label: "High-Speed Elevators" },
  { icon: Car, label: "EV Charging Stations" },
  { icon: BadgeCheck, label: "Power Backup" },
];

export function WhyChooseUs() {
  return (
    <>
      <section id="why" className="relative py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-14 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Why Choose Us</span>
            <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
              Top Real Estate Company <span className="text-gradient-gold italic">in Nagpur</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              We are a leading real estate company in Nagpur, known for delivering premium residential and commercial projects
              with quality construction, modern design, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((I, i) => (
              <motion.div
                key={I.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="glass border-gradient-gold group rounded-[28px] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(212,175,55,0.25)]"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.2), rgba(212,175,55,0.05))" }}>
                  <I.icon className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="font-display text-xl">{I.t}</h3>
                <p className="mt-2 text-sm text-white/55">{I.d}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-[var(--gold)]/40 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
