
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/VISIONSQUARE infra.png";

const links = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Gallery", to: "/gallery" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 md:py-3" : "py-3 md:py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-8">
          <nav
            className={`flex min-h-[64px] items-center justify-between rounded-full px-4 sm:px-5 md:px-6 transition-all duration-500 ${
              scrolled
                ? "bg-white/95 backdrop-blur-lg shadow-md"
                : "bg-white backdrop-blur-lg shadow-none"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex min-w-0 items-center"
              aria-label="VisionSquare Infra Home"
            >
              <img
                src={logo}
                alt="VIP VisionSquare"
                className="
                  h-16
                  w-auto
                  max-w-[190px]
                  object-contain
                  sm:h-20
                  sm:max-w-[220px]
                  md:h-24
                  md:w-72
                  md:max-w-none
                  lg:h-28
                  lg:w-80
                "
              />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden items-center gap-1 md:flex">
              {links.map((l) => {
                const isActive = location.pathname === l.to;

                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`group relative inline-block rounded-full px-4 py-2 text-lg font-bold transition-colors ${
                        isActive
                          ? "text-[var(--gold)]"
                          : "text-black hover:text-[var(--gold)]"
                      }`}
                    >
                      {l.label}

                      <span
                        className={`absolute inset-x-4 -bottom-0.5 h-px bg-[var(--gold)] transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-[#0B0B0B] shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)] transition-transform hover:scale-[1.03]"
                style={{ background: "var(--gradient-gold)" }}
              >
                Book Site Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-black
                text-white
                shadow-md
                transition-all
                hover:scale-105
                active:scale-95
                md:hidden
              "
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 220,
              }}
              className="
                absolute
                right-0
                top-0
                flex
                h-full
                w-[85%]
                max-w-[380px]
                flex-col
                bg-white
                px-6
                pb-8
                pt-6
                shadow-2xl
              "
            >
              {/* Drawer Header */}
              <div className="mb-10 flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center"
                >
                  <img
                    src={logo}
                    alt="VIP VisionSquare"
                    className="h-14 w-auto max-w-[190px] object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-white
                    transition-transform
                    hover:scale-105
                    active:scale-95
                  "
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <ul className="space-y-2">
                {links.map((l) => {
                  const isActive = location.pathname === l.to;

                  return (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={`
                          block
                          rounded-2xl
                          px-4
                          py-4
                          font-display
                          text-2xl
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "bg-black text-[var(--gold)]"
                              : "text-black hover:bg-black/5"
                          }
                        `}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="
                  mt-8
                  block
                  rounded-full
                  py-4
                  text-center
                  font-bold
                  text-[#0B0B0B]
                  shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)]
                  transition-transform
                  hover:scale-[1.02]
                "
                style={{ background: "var(--gradient-gold)" }}
              >
                Book Site Visit
              </Link>

              {/* Bottom Branding */}
              <div className="mt-auto pt-10 text-center">
                <p className="text-xs tracking-[0.2em] text-black/40 uppercase">
                  VisionSquare Infra
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}