import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/VISIONSQUARE infra.png";

const links = [
  { label: "About",    to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Blog",     to: "/blog" },
  { label: "Gallery",  to: "/gallery" },

];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 overflow-visible ${
            scrolled ? "bg-white backdrop-blur-lg shadow-none" : "bg-white backdrop-blur-lg shadow-none"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="VIP VisionSquare"
              className="h-30 w-80 object-contain drop-shadow-lg"
              style={{ marginTop: "-28px", marginBottom: "-28px" }}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = location.pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`group relative inline-block rounded-full px-4 py-2 text-lg font-bold transition-colors ${
                      isActive ? "text-[var(--gold)]" : "text-black hover:text-[var(--gold)]"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px bg-[var(--gold)] transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-[#0B0B0B] shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-gold)" }}
            >
              Book Site Visit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white/90"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="absolute right-0 top-0 h-full w-[82%] glass-strong p-8"
          >
            <div className="mb-10 flex items-center justify-between">
              <img src={logo} alt="VIP VisionSquare" className="h-9 w-auto object-contain" />
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="space-y-2">
              {links.map((l) => {
                const isActive = location.pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`block rounded-2xl px-4 py-3 font-display text-2xl transition-colors ${
                        isActive
                          ? "text-[var(--gold)] bg-white/5"
                          : "text-white/90 hover:bg-white/5"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/contact"
              className="mt-8 block rounded-full py-3 text-center font-medium text-[#0B0B0B]"
              style={{ background: "var(--gradient-gold)" }}
            >
              Book Site Visit
            </Link>
          </motion.div>
        </div>
      )}
    </motion.header>
  );
}
