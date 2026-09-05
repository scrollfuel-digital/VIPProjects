import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp - desktop & mobile */}
      <a
        href="https://wa.me/000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 md:bottom-8 md:right-8"
        style={{ animation: "float 5s ease-in-out infinite" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
        <div className="glass-strong flex items-center justify-between gap-3 rounded-full p-2 pl-5">
          <span className="text-sm">
            <span className="font-display text-base">Book a Site Visit</span>
            <span className="ml-2 text-white/50">· Free</span>
          </span>
          <a
            href="tel:+910000000000"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-[#0B0B0B]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
        </div>
      </div>
    </>
  );
}
