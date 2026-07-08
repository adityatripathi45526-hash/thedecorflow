"use client";

import { motion } from "framer-motion";
import {
  FaGlassCheers,
  FaLeaf,
  FaRing,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Luxury Stage Decoration",
    description:
      "Grand stage concepts designed with premium floral arrangements and elegant lighting.",
    icon: <FaGlassCheers />,
  },
  {
    title: "Floral Decoration",
    description:
      "Fresh floral styling crafted to create timeless and luxurious wedding experiences.",
    icon: <FaLeaf />,
  },
  {
    title: "Reception Decoration",
    description:
      "Luxury reception décor with customized themes, lighting and premium detailing.",
    icon: <FaRing />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-[#FAF7F2] overflow-hidden"
    >

      {/* Background Decoration */}

      <div className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#A67C52]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <span className="inline-block rounded-full bg-[#D4AF37]/15 px-5 py-2 text-sm font-semibold tracking-[0.3em] uppercase text-[#A67C52]">

            Our Services

          </span>

          <h2
            className="mt-8 text-5xl lg:text-6xl text-[#1E1E1E] leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >

            Crafting
            <span className="italic text-[#A67C52]">
              {" "}Luxury{" "}
            </span>

            Wedding Experiences

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-600">

            From breathtaking floral décor to grand wedding stages,
            DecorFlow creates unforgettable celebrations with elegance,
            creativity and premium craftsmanship.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/30 bg-white/70 backdrop-blur-xl p-10 shadow-[0_25px_60px_rgba(0,0,0,.08)] transition-all duration-500"
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#A67C52]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Number */}

              <span className="absolute top-8 right-8 text-6xl font-bold text-[#D4AF37]/10">

                0{index + 1}

              </span>

              {/* Icon */}

              <div className="relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#D4AF37] to-[#A67C52] flex items-center justify-center text-white text-3xl shadow-xl group-hover:rotate-6 group-hover:scale-110 transition duration-500">

                {service.icon}

              </div>

              {/* Title */}

              <h3
                className="relative z-10 mt-8 text-3xl text-[#1E1E1E]"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >

                {service.title}

              </h3>

              {/* Description */}

              <p className="relative z-10 mt-6 text-gray-600 leading-8">

                {service.description}

              </p>

              {/* Divider */}

              <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

              {/* CTA */}

              <a
                href="#contact"
                className="relative z-10 mt-8 inline-flex items-center gap-3 font-semibold text-[#A67C52] transition-all duration-300 group-hover:gap-5"
              >

                Book This Service

                <FaArrowRight />

              </a>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}