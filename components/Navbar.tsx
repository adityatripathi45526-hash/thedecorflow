"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled
          ? "py-4"
          : "py-7"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-10 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,.12)] border border-white/30"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A67C52] flex items-center justify-center shadow-xl">

              <span className="text-white text-xl font-bold">
                D
              </span>

            </div>

            <div>

              <h2
                className={`text-3xl leading-none transition-colors duration-300 ${
                  scrolled
                    ? "text-[#1E1E1E]"
                    : "text-white"
                }`}
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                DecorFlow
              </h2>

              <p
                className={`text-xs tracking-[0.35em] uppercase transition-colors ${
                  scrolled
                    ? "text-[#A67C52]"
                    : "text-[#F5D061]"
                }`}
              >
                Luxury Weddings
              </p>

            </div>

          </motion.a>

                 {/* Desktop Navigation */}

          <ul
            className={`hidden lg:flex items-center gap-10 transition-all duration-300 ${
              scrolled ? "text-[#1E1E1E]" : "text-white"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">

                <a
                  href={link.href}
                  className="font-medium tracking-wide transition-colors duration-300 hover:text-[#D4AF37]"
                >
                  {link.name}
                </a>

                <span
                  className="absolute left-1/2 -bottom-2 h-[2px] w-0 -translate-x-1/2 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"
                />

              </li>
            ))}
          </ul>

          {/* Desktop CTA */}

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: .96,
            }}
            href="#contact"
            className="hidden lg:flex items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A67C52] px-7 py-3 text-white font-semibold shadow-xl transition-all"
          >
            Book Consultation
          </motion.a>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden text-3xl transition-colors ${
              scrolled
                ? "text-[#A67C52]"
                : "text-white"
            }`}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: .35,
            }}
            className="lg:hidden mt-4 px-6"
          >

            <div className="rounded-3xl bg-white shadow-2xl overflow-hidden">

              <div className="flex flex-col py-6">

                {navLinks.map((link) => (

                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-8 py-4 text-lg font-medium text-gray-700 hover:bg-[#FAF7F2] hover:text-[#A67C52] transition"
                  >
                    {link.name}
                  </a>

                ))}

                <div className="px-8 pt-6">

                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A67C52] py-4 text-white font-semibold shadow-xl"
                  >
                    Book Consultation
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}