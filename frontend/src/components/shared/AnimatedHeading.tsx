import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  label?: string;
  title: string;
  accentWords?: string[];
  subtitle?: string;
  center?: boolean;
  delay?: number;
}

export function AnimatedHeading({ label, title, accentWords = [], subtitle, center = false, delay = 0 }: AnimatedHeadingProps) {
  const words = title.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className={center ? "text-center" : ""}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay }}
          className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]"
        >
          {label}
        </motion.span>
      )}

      <h1 className="mt-3 font-display text-5xl leading-tight md:text-7xl">
        {words.map((word, i) => {
          const isAccent = accentWords.includes(word.replace(/[.,!?]/g, ""));
          return (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
              <motion.span
                className={`inline-block ${isAccent ? "text-gradient-gold italic" : ""}`}
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + words.length * 0.07 + 0.1 }}
          className={`mt-5 text-white/50 ${center ? "mx-auto max-w-xl" : "max-w-xl"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
