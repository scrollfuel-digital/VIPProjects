import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { AnimatedHeading } from "@/components/shared/AnimatedHeading";

import hero from "@/assets/hero-villa.jpg";
import plot from "@/assets/prop-plot.jpg";
import villa from "@/assets/prop-villa.jpg";
import tower from "@/assets/prop-tower.jpg";
import penthouse from "@/assets/prop-penthouse.jpg";
import commercial from "@/assets/prop-commercial.jpg";

const images = [
  { src: hero,       label: "Hero Villa",        tag: "Residential", span: "md:col-span-2 md:row-span-2" },
  { src: penthouse,  label: "Luxury Penthouse",   tag: "Premium",     span: "" },
  { src: tower,      label: "Premium Tower",      tag: "Apartments",  span: "" },
  { src: villa,      label: "Villa Project",      tag: "Residential", span: "" },
  { src: plot,       label: "Waterfront Plot",    tag: "Plots",       span: "md:col-span-2" },
  { src: commercial, label: "Commercial Space",   tag: "Commercial",  span: "" },
];

const tagColors: Record<string, string> = {
  Residential: "bg-emerald-600",
  Premium:     "bg-[var(--gold)]/80",
  Apartments:  "bg-blue-600",
  Plots:       "bg-violet-600",
  Commercial:  "bg-rose-600",
};

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-8">
        {/* Header */}
        <div className="mb-14">
          <AnimatedHeading
            label="Visual Showcase"
            title="Project Gallery"
            accentWords={["Gallery"]}
            subtitle="A curated look at our premium residential and commercial developments across Nagpur."
          />
        </div>

        {/* Grid */}
        <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative cursor-pointer overflow-hidden rounded-[24px] ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <motion.img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* gold border on hover */}
              <div className="absolute inset-0 rounded-[24px] opacity-0 shadow-[inset_0_0_0_1.5px_rgba(212,175,55,0.5)] transition-opacity duration-300 group-hover:opacity-100" />

              {/* zoom icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="h-4 w-4 text-white" />
              </motion.div>

              {/* bottom info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="font-display text-sm text-white/90 group-hover:text-[var(--gold)] transition-colors">
                  {img.label}
                </span>
                <span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-white ${tagColors[img.tag]}`}>
                  {img.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Gallery preview"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[85vh] max-w-[90vw] rounded-[24px] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
