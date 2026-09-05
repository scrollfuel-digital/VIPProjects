import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { AnimatedHeading } from "@/components/shared/AnimatedHeading";

const posts = [
  {
    tag: "Investment",
    title: "Why Nagpur is the Next Big Real Estate Hub",
    desc: "With MIHAN, metro expansion, and the Samruddhi Mahamarg, Nagpur is rapidly becoming one of India's most promising investment destinations.",
    date: "Jan 2026",
    readTime: "4 min read",
    featured: true,
  },
  {
    tag: "Guide",
    title: "2BHK vs 3BHK — Which is Right for You?",
    desc: "A practical breakdown of configurations, pricing, and ROI potential to help you make the right choice for your family or investment portfolio.",
    date: "Dec 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    tag: "RERA",
    title: "Understanding MahaRERA — A Buyer's Guide",
    desc: "Everything you need to know about RERA registration, how to verify a project, and why it matters before you invest.",
    date: "Nov 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    tag: "Lifestyle",
    title: "Top 5 Localities to Buy Property in Nagpur (2026)",
    desc: "From MIHAN to Beltarodi — we rank the top areas based on appreciation potential, connectivity, and livability.",
    date: "Oct 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    tag: "Finance",
    title: "Home Loan Tips for First-Time Buyers in Nagpur",
    desc: "Step-by-step guidance on eligibility, documentation, and choosing the right lender for your property purchase.",
    date: "Sep 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    tag: "Market",
    title: "Nagpur Real Estate Market Report — Q4 2025",
    desc: "Key trends, price movements, and demand analysis across residential and commercial segments in Nagpur.",
    date: "Aug 2025",
    readTime: "8 min read",
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  Investment: "bg-blue-600",
  Guide:      "bg-emerald-600",
  RERA:       "bg-amber-600",
  Lifestyle:  "bg-violet-600",
  Finance:    "bg-orange-600",
  Market:     "bg-rose-600",
};

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-8">
        {/* Header */}
        <div className="mb-14">
          <AnimatedHeading
            label="Insights & Updates"
            title="Real Estate Blog"
            accentWords={["Blog"]}
            subtitle="Expert insights, market updates, and guides to help you make smarter property decisions in Nagpur."
          />
        </div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group mb-8 relative overflow-hidden rounded-[28px] border border-white/8 bg-white/3 p-8 md:p-10 transition-all hover:border-[var(--gold)]/30 hover:bg-white/5 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white ${tagColors[featured.tag]}`}>
                  {featured.tag}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--gold)]">Featured</span>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-3xl leading-snug text-white group-hover:text-[var(--gold)] transition-colors md:text-4xl"
                >
                  {featured.title}
                </motion.h2>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">{featured.desc}</p>
              <div className="mt-5 flex items-center gap-5 text-[11px] text-white/30">
                <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{featured.readTime}</span>
              </div>
            </div>
            <div className="shrink-0">
              <motion.div
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 45 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors group-hover:bg-[var(--gold)] group-hover:border-[var(--gold)]"
              >
                <ArrowUpRight className="h-5 w-5 text-white group-hover:text-[#0B0B0B]" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex cursor-pointer flex-col rounded-[24px] border border-white/8 bg-white/3 p-6 transition-all hover:border-[var(--gold)]/30 hover:bg-white/6 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-block rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white ${tagColors[p.tag] ?? "bg-white/20"}`}>
                  {p.tag}
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/20 transition-all group-hover:text-[var(--gold)] group-hover:rotate-45" />
              </div>

              <div className="overflow-hidden flex-1">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-xl leading-snug text-white group-hover:text-[var(--gold)] transition-colors"
                >
                  {p.title}
                </motion.h2>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/50">{p.desc}</p>

              <div className="mt-5 h-px bg-gradient-to-r from-[var(--gold)]/20 to-transparent" />

              <div className="mt-4 flex items-center gap-4 text-[11px] text-white/30">
                <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{p.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{p.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
