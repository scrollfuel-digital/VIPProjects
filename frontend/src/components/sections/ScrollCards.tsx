import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollCard = {
  num: string;
  title: string;
  sub: string;
  accent: string;
};

const cards: ScrollCard[] = [
  { num: "01", title: "Discover", sub: "Browse premium plots, 2 & 3 BHK apartments across Nagpur's top corridors.", accent: "from-[var(--gold)] to-amber-600" },
  { num: "02", title: "Visit", sub: "Schedule a free site visit with our expert team — 7 days a week, no pressure.", accent: "from-emerald-500 to-teal-600" },
  { num: "03", title: "Invest", sub: "Transparent pricing, RERA-approved projects, and end-to-end documentation support.", accent: "from-violet-500 to-purple-700" },
  { num: "04", title: "Move In", sub: "Premium handover with quality checks, home loan assistance, and post-sale support.", accent: "from-rose-500 to-pink-700" },
];

function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export function ScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-55%"]);

  const headline = "Your Journey to Premium Living".split(" ");

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* ambient */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--gold)]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-8">
  
      </div>
    </section>
  );
}
