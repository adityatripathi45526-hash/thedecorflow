"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[#FAF7F2] overflow-hidden"
    >
      {/* Background Decorations */}

      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#A67C52]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            {/* Gold Background Shape */}

            <div className="absolute -left-8 -top-8 w-full h-full rounded-[40px] bg-gradient-to-br from-[#D4AF37]/15 to-transparent" />

            {/* Main Image */}

            <Image
              src="/images/about2.jpg"
              alt="DecorFlow Wedding Decoration"
              width={650}
              height={700}
              className="relative rounded-[36px] shadow-[0_35px_80px_rgba(0,0,0,.18)] object-cover"
            />

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-10 -right-5 bg-white rounded-3xl shadow-2xl p-6 w-64"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center">

                  <FaAward className="text-white text-2xl" />

                </div>

                <div>

                  <h3 className="text-3xl font-bold text-[#A67C52]">
                    200+
                  </h3>

                  <p className="text-gray-600">
                    Weddings Decorated
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>
                    {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="inline-block rounded-full bg-[#D4AF37]/15 px-5 py-2 text-sm font-semibold tracking-[0.3em] uppercase text-[#A67C52]">
              About DecorFlow
            </span>

            <h2
              className="mt-8 text-5xl lg:text-6xl leading-tight text-[#1E1E1E]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Designing
              <span className="text-[#A67C52] italic">
                {" "}Luxury{" "}
              </span>
              Wedding Experiences
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              At DecorFlow, we believe every wedding deserves timeless beauty.
              Our team transforms ordinary venues into breathtaking celebrations
              with luxurious floral décor, premium stage designs, elegant
              mandaps and customized wedding styling that reflects your story.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-6">

              {[
                "Luxury Wedding Decoration",
                "Customized Floral Concepts",
                "Premium Stage & Mandap Design",
                "Experienced Creative Team",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 flex items-center justify-center">

                    <FaCheckCircle className="text-[#A67C52]" />

                  </div>

                  <p className="text-lg text-gray-700 font-medium">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Statistics */}

            <div className="mt-14 grid grid-cols-3 gap-6">

              <div>

                <h3 className="text-5xl font-bold text-[#A67C52]">
                  200+
                </h3>

                <p className="mt-2 text-gray-600">
                  Weddings
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-[#A67C52]">
                  4+
                </h3>

                <p className="mt-2 text-gray-600">
                  Years
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-[#A67C52]">
                  4.9★
                </h3>

                <p className="mt-2 text-gray-600">
                  Rating
                </p>

              </div>

            </div>

            {/* CTA */}

            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: .96,
              }}
              href="#contact"
              className="inline-flex mt-14 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A67C52] px-10 py-5 text-white text-lg font-semibold shadow-[0_20px_45px_rgba(166,124,82,.35)]"
            >
              Book Your Dream Wedding
            </motion.a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}