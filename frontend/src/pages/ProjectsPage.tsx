import { motion } from "framer-motion";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AnimatedHeading } from "@/components/shared/AnimatedHeading";
import { ScrollCards } from "@/components/sections/ScrollCards";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function ProjectsPage() {
  return (
    <main>
      {/* ── PAGE HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-10">
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--gold)]/6 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col items-center text-center">
            <AnimatedHeading
              label="Our Portfolio"
              title="Premium Projects Across Nagpur"
              accentWords={["Premium", "Nagpur"]}
              subtitle="RERA-approved residential and commercial developments in Nagpur's fastest-growing corridors — built for quality, designed for life."
              center
            />

            {/* scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="h-8 w-px bg-gradient-to-b from-[var(--gold)]/60 to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
  
      <WhyChooseUs />
    </main>
  );
}
