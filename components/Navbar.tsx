"use client";

import { useEffect, useState } from "react";

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
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className={`text-3xl font-extrabold tracking-wide transition-all duration-300 ${
            scrolled ? "text-yellow-600" : "text-white"
          }`}
        >
          Decor<span className="text-yellow-500">Flow</span>
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-10 font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative transition duration-300 hover:text-yellow-500
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-yellow-500
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center justify-center
          bg-yellow-500 hover:bg-yellow-600
          text-white
          px-6 py-3
          rounded-full
          font-semibold
          shadow-lg
          hover:shadow-yellow-300/40
          hover:scale-105
          transition-all duration-300"
        >
          Book Consultation
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl transition-colors ${
            scrolled ? "text-yellow-600" : "text-white"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white shadow-2xl">

          <ul className="flex flex-col items-center py-8 gap-6">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-yellow-600 text-lg transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Book Consultation
            </a>

          </ul>

        </div>
      </div>
    </nav>
  );
}