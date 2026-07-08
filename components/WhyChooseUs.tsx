"use client";

import { motion } from "framer-motion";
import {
  FaAward,
  FaClock,
  FaPalette,
  FaHeart,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Premium Quality",
    description:
      "Luxury wedding decorations crafted with exceptional attention to detail and premium materials.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Execution",
    description:
      "Every setup is completed before your event begins so your celebration starts stress-free.",
  },
  {
    icon: <FaPalette />,
    title: "Customized Themes",
    description:
      "Every wedding is unique. We create personalized décor concepts tailored to your vision.",
  },
  {
    icon: <FaHeart />,
    title: "Client Satisfaction",
    description:
      "Our biggest achievement is creating unforgettable memories for every couple we serve.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-32 bg-white overflow-hidden"
    >

      {/* Background */}

      <div className="absolute -top-32 left-0 w-[420px] h-[420px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#A67C52]/10 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >

          <span className="inline-block rounded-full bg-[#D4AF37]/15 px-5 py-2 text-sm tracking-[0.3em] uppercase font-semibold text-[#A67C52]">

            Why Choose DecorFlow

          </span>

          <h2
            className="mt-8 text-5xl lg:text-6xl leading-tight text-[#1E1E1E]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >

            Excellence In
            <span className="italic text-[#A67C52]">
              {" "}Every Detail
            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-600">

            We combine creativity, luxury and flawless execution
            to transform every wedding into an unforgettable
            celebration.

          </p>

        </motion.div>

        {/* Premium Cards */}

        <div className="grid lg:grid-cols-2 gap-8">
                    {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .12,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 backdrop-blur-xl p-10 shadow-[0_25px_60px_rgba(0,0,0,.08)]"
            >

              {/* Hover Gradient */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#A67C52]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Decorative Number */}

              <span className="absolute top-8 right-8 text-6xl font-bold text-[#D4AF37]/10">

                0{index + 1}

              </span>

              <div className="relative z-10 flex items-start gap-6">

                {/* Icon */}

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#D4AF37] to-[#A67C52] flex items-center justify-center text-white text-3xl shadow-xl group-hover:rotate-6 group-hover:scale-110 transition duration-500">

                  {feature.icon}

                </div>

                {/* Content */}

                <div>

                  <h3
                    className="text-3xl text-[#1E1E1E]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">

                    {feature.description}

                  </p>

                  <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-40 transition-all duration-500" />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-[#D4AF37] to-[#A67C52] p-12 shadow-[0_25px_70px_rgba(166,124,82,.25)]"
        >

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>

              <h2 className="text-5xl font-bold text-white">
                200+
              </h2>

              <p className="mt-3 text-white/80">
                Weddings Completed
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-white">
                4+
              </h2>

              <p className="mt-3 text-white/80">
                Years Experience
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-white">
                100%
              </h2>

              <p className="mt-3 text-white/80">
                Client Satisfaction
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-white">
                24/7
              </h2>

              <p className="mt-3 text-white/80">
                Customer Support
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}