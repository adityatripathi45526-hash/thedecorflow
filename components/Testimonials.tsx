"use client";

import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Priya & Rahul",
    location: "Delhi NCR",
    review:
      "DecorFlow transformed our wedding into a royal celebration. Every guest appreciated the luxurious decoration and flawless execution.",
  },
  {
    name: "Anjali & Karan",
    location: "Noida",
    review:
      "The team was highly professional, punctual and incredibly creative. Every floral arrangement looked breathtaking.",
  },
  {
    name: "Sneha & Aman",
    location: "Ghaziabad",
    review:
      "From planning to execution everything exceeded our expectations. We couldn't have asked for a better decoration partner.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 bg-[#FAF7F2] overflow-hidden"
    >

      {/* Background */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

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

            Testimonials

          </span>

          <h2
            className="mt-8 text-5xl lg:text-6xl text-[#1E1E1E]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >

            Loved By
            <span className="italic text-[#A67C52]">
              {" "}Happy Couples
            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-600">

            Our greatest achievement is creating unforgettable
            memories for couples on one of the most important
            days of their lives.

          </p>

        </motion.div>

        {/* Premium Testimonial Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 backdrop-blur-xl p-10 shadow-[0_25px_70px_rgba(0,0,0,.08)]"
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#A67C52]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Decorative Number */}

              <span className="absolute top-8 right-8 text-6xl font-bold text-[#D4AF37]/10">

                0{index + 1}

              </span>

              {/* Quote Icon */}

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#A67C52] flex items-center justify-center text-white text-2xl shadow-xl">

                <FaQuoteLeft />

              </div>

              {/* Review */}

              <p className="relative z-10 mt-8 text-gray-600 leading-8 italic">

              </p>

              {/* Stars */}

              <div className="relative z-10 flex gap-1 mt-8 text-[#D4AF37]">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Divider */}

              <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

              {/* Client */}

              <div className="relative z-10 flex items-center justify-between mt-8">

                <div>

                  <h3
                    className="text-2xl text-[#1E1E1E]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {item.name}
                  </h3>

                  <p className="mt-1 text-gray-500">

                    {item.location}

                  </p>

                </div>

                <div className="text-right">

                  <span className="inline-block rounded-full bg-[#D4AF37]/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#A67C52]">

                    Verified

                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-[#D4AF37] to-[#A67C52] p-12 text-center shadow-[0_25px_70px_rgba(166,124,82,.25)]"
        >

          <h2
            className="text-4xl lg:text-5xl text-white"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            Ready To Create Your Dream Wedding?
          </h2>

          <p className="mt-5 text-white/90 text-lg max-w-2xl mx-auto">

            Join hundreds of happy couples who trusted DecorFlow
            to turn their dream wedding into reality.

          </p>

          <a
            href="#contact"
            className="inline-flex mt-10 rounded-full bg-white px-10 py-4 font-semibold text-[#A67C52] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >

            Book Your Consultation

          </a>

        </motion.div>

      </div>

    </section>
  );
}