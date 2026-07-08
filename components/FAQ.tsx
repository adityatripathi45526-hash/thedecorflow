"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Do you decorate destination weddings?",
    answer:
      "Yes! DecorFlow specializes in destination weddings across India. We handle complete décor planning, transportation, installation and execution.",
  },
  {
    question: "How early should I book my wedding decoration?",
    answer:
      "We recommend booking 2–6 months before your wedding to ensure venue visits, theme planning and flawless execution.",
  },
  {
    question: "Can you customize decorations according to my theme?",
    answer:
      "Absolutely! Every wedding is completely personalized based on your theme, colors, traditions, venue and budget.",
  },
  {
    question: "Do you provide floral decorations?",
    answer:
      "Yes. We provide premium fresh flower decorations including luxury mandaps, entrances, stages, reception setups and table arrangements.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "We primarily serve Delhi NCR, Noida, Ghaziabad, Gurugram and also undertake destination wedding projects across India.",
  },
];

export default function FAQ() {

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  return (

    <section
      className="relative py-32 bg-[#FAF7F2] overflow-hidden"
    >

      {/* Background */}

      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-[#A67C52]/10 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="text-center mb-20"
        >

          <span className="inline-block rounded-full bg-[#D4AF37]/15 px-5 py-2 text-sm tracking-[0.3em] uppercase font-semibold text-[#A67C52]">

            FAQ

          </span>

          <h2
            className="mt-8 text-5xl lg:text-6xl text-[#1E1E1E]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >

            Frequently Asked
            <span className="italic text-[#A67C52]">
              {" "}Questions
            </span>

          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9 max-w-3xl mx-auto">

            Everything you need to know before planning
            your dream wedding with DecorFlow.

          </p>

        </motion.div>

        <div className="space-y-6">
                    {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              className="overflow-hidden rounded-[28px] border border-white/40 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.08)]"
            >

              {/* Question */}

              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
                className="flex w-full items-center justify-between px-8 py-7 text-left transition hover:bg-[#FFFDF8]"
              >

                <div>

                  <span className="mr-5 text-[#D4AF37] font-bold text-lg">

                    0{index + 1}

                  </span>

                  <span
                    className="text-xl text-[#1E1E1E]"
                    style={{
                      fontFamily: "var(--font-heading)",
                    }}
                  >

                    {faq.question}

                  </span>

                </div>

                <motion.div
                  animate={{
                    rotate:
                      openIndex === index
                        ? 180
                        : 0,
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className="text-[#A67C52]"
                >

                  <FaChevronDown size={18} />

                </motion.div>

              </button>

              {/* Answer */}

              <motion.div
                initial={false}
                animate={{
                  height:
                    openIndex === index
                      ? "auto"
                      : 0,
                  opacity:
                    openIndex === index
                      ? 1
                      : 0,
                }}
                transition={{
                  duration: .35,
                }}
                className="overflow-hidden"
              >

                <div className="border-t border-[#D4AF37]/20 px-8 pb-8 pt-6">

                  <p className="text-gray-600 leading-8">

                    {faq.answer}

                  </p>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .3,
          }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-[#D4AF37] to-[#A67C52] p-12 text-center shadow-[0_25px_70px_rgba(166,124,82,.25)]"
        >

          <h2
            className="text-4xl lg:text-5xl text-white"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >

            Still Have Questions?

          </h2>

          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">

            Our wedding experts are always available to guide
            you in planning the perfect celebration.

          </p>

          <a
            href="#contact"
            className="inline-flex mt-10 rounded-full bg-white px-10 py-4 font-semibold text-[#A67C52] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >

            Contact Our Team

          </a>

        </motion.div>

      </div>

    </section>
  );
}