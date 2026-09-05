import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { AnimatedHeading } from "@/components/shared/AnimatedHeading";

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-8">
        {/* Header */}
        <div className="mb-14">
          <AnimatedHeading
            label="Get In Touch"
            title="Contact Us"
            accentWords={["Us"]}
            subtitle="Our team is available 7 days a week. Book a free site visit or reach out directly."
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {[
              { icon: MapPin, label: "Address",  value: "Nagpur, Maharashtra, India" },
              { icon: Mail,   label: "Email",    value: "info@vipvisionsquare.com" },
              { icon: Phone,  label: "Phone",    value: "+91 77962 77602" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-[20px] border border-white/8 bg-white/3 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20">
                  <Icon className="h-4 w-4 text-[var(--gold)]" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
                  <div className="mt-1 text-sm text-white/80">{value}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917796277602"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full px-8 py-4 font-display text-base text-[#0B0B0B] shadow-[0_0_40px_-8px_rgba(212,175,55,0.5)] transition-shadow hover:shadow-[0_0_60px_-5px_rgba(212,175,55,0.7)]"
              style={{ background: "var(--gradient-gold)" }}
            >
              Chat on WhatsApp
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B0B0B]/20 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-[28px] border border-white/8 bg-white/3 p-8"
          >
            <h2 className="font-display text-2xl text-white">Send us a message</h2>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="glass w-full rounded-2xl border border-white/8 bg-white/4 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[var(--gold)]/40 focus:shadow-[0_0_0_1px_rgba(212,175,55,0.4)]"
              />
              <input
                type="email"
                placeholder="Email address"
                className="glass w-full rounded-2xl border border-white/8 bg-white/4 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[var(--gold)]/40 focus:shadow-[0_0_0_1px_rgba(212,175,55,0.4)]"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="glass w-full rounded-2xl border border-white/8 bg-white/4 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[var(--gold)]/40 focus:shadow-[0_0_0_1px_rgba(212,175,55,0.4)]"
              />
              <select className="glass w-full rounded-2xl border border-white/8 bg-[#111] px-5 py-3.5 text-sm text-white/70 outline-none transition focus:border-[var(--gold)]/40">
                <option value="">Interested In</option>
                <option>2BHK Apartment</option>
                <option>3BHK Apartment</option>
                <option>Commercial Space</option>
                <option>Plot</option>
              </select>
              <textarea
                rows={4}
                placeholder="Your message (optional)"
                className="glass w-full resize-none rounded-2xl border border-white/8 bg-white/4 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-[var(--gold)]/40 focus:shadow-[0_0_0_1px_rgba(212,175,55,0.4)]"
              />
              <button
                type="button"
                className="group flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-display text-base text-[#0B0B0B] shadow-[0_0_40px_-8px_rgba(212,175,55,0.4)] transition-shadow hover:shadow-[0_0_60px_-5px_rgba(212,175,55,0.6)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                Schedule a Site Visit
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
