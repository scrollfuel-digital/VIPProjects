import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Is investing in Nagpur a good option?", a: "Yes, Nagpur offers high growth potential with projects like MIHAN, Metro expansion, and affordable pricing compared to metro cities — ensuring strong future appreciation." },
  { q: "Do you provide home loan assistance?", a: "Yes, we assist you with easy home loan options from leading banks and NBFCs, making your property purchase smooth and hassle-free." },
  { q: "Are your projects RERA approved?", a: "Yes, all our projects are legally verified and RERA approved. We believe in complete transparency and compliance." },
  { q: "What configurations are available?", a: "We offer 2BHK and 3BHK luxury apartments starting at ₹45 Lakhs*, along with commercial spaces and plots in prime Nagpur locations." },
  { q: "Can I book a site visit?", a: "Absolutely! Contact us to schedule a free site visit at your convenience. Our team will guide you through the project and answer all your questions." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-8">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">FAQ</span>
          <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
            Questions, <span className="text-gradient-gold italic">answered</span>.
          </h2>
          <p className="mt-5 max-w-sm text-white/60">
            Have more questions? Reach out to our team for a free consultation.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[#0B0B0B]"
            style={{ background: "var(--gradient-gold)" }}
          >
            Get Free Consultation
          </a>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass rounded-[24px]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-9 w-9 place-items-center rounded-full glass-strong">
                    <Plus className="h-4 w-4 text-[var(--gold)]" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-white/65">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
