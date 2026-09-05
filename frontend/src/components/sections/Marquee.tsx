const builders = [
  "MIHAN NAGPUR", "WARDHA ROAD", "BELTARODI", "MANISH NAGAR",
  "2BHK LUXURY", "3BHK PREMIUM", "RERA APPROVED", "HIGH ROI",
  "METRO CONNECTED", "PRIME LOCATION", "READY TO MOVE", "ONGOING PROJECTS",
];

export function Marquee() {
  const items = [...builders, ...builders];
  return (
    <section id="builders" className="relative border-y border-white/5 py-12 overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent" />
        <div className="flex w-max" style={{ animation: "marquee 40s linear infinite" }}>
          {items.map((b, i) => (
            <div key={i} className="mx-10 flex shrink-0 items-center gap-2 font-display text-2xl tracking-[0.25em] text-white/40 transition-colors hover:text-[var(--gold)]">
              {b}
              <span className="h-1 w-1 rounded-full bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
