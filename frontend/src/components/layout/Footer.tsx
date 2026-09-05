import { ArrowUpRight, Instagram, Linkedin, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/viplogo.png";
export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[80px] w-[1200px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.5), transparent)" }}
      />

      {/* <div id="contact" className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="glass-strong border-gradient-gold rounded-[36px] p-10 md:p-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Contact Us</span>
              <h3 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
                Book Your <span className="text-gradient-gold italic">Site Visit</span> Today.
              </h3>
              <p className="mt-5 max-w-md text-white/60">
                Looking to buy your dream home or invest in Nagpur? Our team is ready to help you find the perfect property.
              </p>
              <div className="mt-8 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                  <span>Nagpur, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[var(--gold)]" />
                  <span>info@vipvisionsquare.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[var(--gold)]" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>
            <form className="space-y-3">
              <input type="text" placeholder="Full name"
                className="glass w-full rounded-full bg-transparent px-5 py-3.5 text-sm placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]" />
              <input type="email" placeholder="Email"
                className="glass w-full rounded-full bg-transparent px-5 py-3.5 text-sm placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]" />
              <input type="tel" placeholder="Phone"
                className="glass w-full rounded-full bg-transparent px-5 py-3.5 text-sm placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-[var(--gold)]" />
              <select className="glass w-full rounded-full bg-transparent px-5 py-3.5 text-sm text-white/70 focus:outline-none focus:ring-1 focus:ring-[var(--gold)] [&>option]:bg-[#111]">
                <option>Interested In</option>
                <option>2BHK Apartment</option>
                <option>3BHK Apartment</option>
                <option>Commercial Space</option>
                <option>Plot</option>
              </select>
              <button type="button"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium text-[#0B0B0B] transition-transform hover:scale-[1.02]"
                style={{ background: "var(--gradient-gold)" }}>
                Schedule a Site Visit
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-10 px-6 pb-12 md:grid-cols-5 md:px-8">
        <div className="col-span-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="VIP VisionSquare"
              className="h-30 w-30 object-contain drop-shadow-lg"
            />
          </Link>
          <p className=" max-w-xs text-sm text-white/55">
            Premium residential & commercial real estate in Nagpur. RERA approved. Trusted by 500+
            families.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Linkedin, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                className="glass grid h-10 w-10 place-items-center rounded-full text-white/70 transition-colors hover:text-[var(--gold)]"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {[
          { h: "Projects", l: ["2BHK Apartments", "3BHK Apartments", "Commercial", "Plots"] },
          { h: "Locations", l: ["MIHAN", "Wardha Road", "Beltarodi", "Manish Nagar"] },
          { h: "Company", l: ["About Us", "Gallery", "Testimonials", "RERA Info"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-xs uppercase tracking-[0.25em] text-white/40">{c.h}</div>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {c.l.map((x) => (
                <li key={x}>
                  <a href="#" className="hover:text-[var(--gold)]">
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/40 md:flex-row md:px-8">
          <span>© 2026 VIP VisionSquare Infra Private Limited. All rights reserved.</span>
          <span>Premium Real Estate · Nagpur, India</span>
        </div>
      </div>
    </footer>
  );
}
