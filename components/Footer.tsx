"use client";

import { motion } from "framer-motion";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="relative overflow-hidden bg-[#161514] text-white">

      {/* Background */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#A67C52]/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28">

        {/* Top */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

           <h2
  className="text-5xl text-white"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
             <span className="text-white">
  Decor
</span>

<span className="text-[#D4AF37]">
  Flow
</span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8">

              Creating timeless wedding experiences with
              luxury décor, elegant floral styling,
              breathtaking mandaps and unforgettable celebrations.

            </p>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              <a
                href="https://www.instagram.com/thedecorflow_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://wa.me/918780595775"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>

          </motion.div>

                  {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8, delay: .1 }}
          >

          <h3
  className="text-2xl mb-8 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h3>

            <ul className="space-y-5">

              {[
                ["Home","#"],
                ["About","#about"],
                ["Services","#services"],
                ["Gallery","#gallery"],
                ["Testimonials","#testimonials"],
                ["Contact","#contact"],
              ].map(([name,link])=>(

                <li key={name}>

                  <a
                    href={link}
                    className="group flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition"
                  >

                    <FaArrowRight
                      className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition"
                    />

                    {name}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8, delay: .2 }}
          >

            <h3
  className="text-2xl mb-8 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Services
            </h3>

            <ul className="space-y-5 text-gray-400">

              {[
                "Luxury Wedding Decoration",
                "Royal Mandap Design",
                "Stage Decoration",
                "Floral Styling",
                "Reception Setup",
                "Destination Weddings",
              ].map((service)=>(

                <li
                  key={service}
                  className="hover:text-[#D4AF37] transition"
                >
                  {service}
                </li>

              ))}

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8, delay: .3 }}
          >

            <h3
  className="text-2xl mb-8 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center text-black">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <p className="font-semibold">

                    Office

                  </p>

                  <p className="text-gray-400 mt-2 leading-7">

                    Gandhidham,
                    Kachchh,
                    Gujarat 370201

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center text-black">

                  <FaPhoneAlt />

                </div>

                <div>

                  <p className="font-semibold">

                    Phone

                  </p>

                  <a
                    href="tel:+918780595775"
                    className="text-gray-400 hover:text-[#D4AF37] mt-2 block"
                  >
                    +91 8780595775
                  </a>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center text-black">

                  <FaEnvelope />

                </div>

                <div>

                  <p className="font-semibold">

                    Email

                  </p>

                  <a
                    href="mailto:thedecorflow@gmail.com"
                    className="text-gray-400 hover:text-[#D4AF37] mt-2 block break-all"
                  >

                    thedecorflow@gmail.com

                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Divider */}

        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

        {/* Bottom */}

        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-6">

          <p className="text-gray-500">

            © {new Date().getFullYear()} DecorFlow.
            All Rights Reserved.

          </p>

          <p className="text-gray-500">

            Crafted with ❤️ for Luxury Weddings

          </p>

        </div>

      </div>

    </footer>

  );
}