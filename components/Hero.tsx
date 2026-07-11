"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#faf7f2]">

      {/* Background Image */}

      <Image
        src="/images/hero.jpg"
        alt="Luxury Wedding Decoration"
        fill
        priority
        quality={75}
        className="object-cover object-center"
      />

      {/* Luxury Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-[#141414]/65 to-[#141414]/25" />

      {/* Gold Glow */}

      <div className="absolute -top-20 left-0 w-[420px] h-[420px] rounded-full bg-[#D4AF37]/15 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#A67C52]/10 blur-[150px]" />

      {/* Decorative Ring */}

      <div className="hidden xl:block absolute right-24 top-40 w-52 h-52 rounded-full border border-white/10" />

      <div className="hidden xl:block absolute right-28 top-44 w-44 h-44 rounded-full border border-[#D4AF37]/30" />

      {/* Main Container */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            {/* Premium Badge */}

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl px-6 py-3"
            >

              <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />

              <span className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-[#F5D061]">

                Luxury Wedding Decorators

              </span>

            </motion.div> */}

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .4 }}
              className="mt-10 text-white leading-[0.95] text-5xl md:text-7xl xl:text-8xl"
            >

              Creating

              <br />

              <span className="italic text-[#D4AF37]">

                Timeless

              </span>

              <br />

              Wedding Stories

            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .7 }}
              className="mt-10 max-w-2xl text-lg md:text-xl leading-9 text-gray-200"
            >

              Every celebration deserves extraordinary décor.

              We design luxurious wedding experiences with elegant floral artistry,

              breathtaking mandaps and unforgettable venue styling that leave

              lifelong memories.

            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .9 }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <a
                href="#contact"
                className="rounded-full bg-[#A67C52] px-9 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#8D6943]"
              >

                Book Consultation

              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/40 backdrop-blur-md px-9 py-4 text-lg font-semibold text-white transition-all duration-500 hover:bg-white hover:text-black"
              >

                View Gallery

              </a>

            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-xl"
            >

              <div>

                <h2 className="text-4xl font-bold text-[#D4AF37]">

                  200+

                </h2>

                <p className="text-gray-300 mt-2">

                  Weddings

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#D4AF37]">

                  4+

                </h2>

                <p className="text-gray-300 mt-2">

                  Years

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#D4AF37]">

                  4.9★

                </h2>

                <p className="text-gray-300 mt-2">

                  Rating

                </p>

              </div>

            </motion.div>

          </motion.div>
                    {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex justify-center items-center"
          >

            {/* Main Image */}

            <div className="relative">

              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#D4AF37]/20 to-transparent blur-3xl" />

              <Image
                src="/images/hero.jpg"
                alt="Luxury Wedding Decoration"
                width={650}
                height={780}
                priority
                quality={75}
                className="relative rounded-[40px] object-cover shadow-[0_30px_80px_rgba(0,0,0,.45)]"
              />

            </div>

            {/* Rating Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute top-12 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
            >

              <p className="text-[#D4AF37] text-xl">

                ★★★★★

              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">

                4.9 Rating

              </h3>

              <p className="mt-2 text-gray-300">

                Trusted by Happy Couples

              </p>

            </motion.div>

            {/* Experience Card */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute bottom-10 -right-6 bg-white rounded-3xl shadow-2xl p-7"
            >

              <h2 className="text-5xl font-bold text-[#A67C52]">

                4+

              </h2>

              <p className="mt-2 font-semibold text-gray-800">

                Years Experience

              </p>

            </motion.div>

            {/* Luxury Badge */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute bottom-52 left-0 bg-[#A67C52] rounded-full px-8 py-4 shadow-2xl"
            >

              <p className="text-white font-semibold tracking-wide">

                Premium Wedding Styling

              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center"
      >

        <span className="text-white/80 text-sm tracking-[0.3em] uppercase">

          Scroll

        </span>

        <div className="mt-4 w-[2px] h-14 bg-white/30 relative overflow-hidden rounded-full">

          <div className="absolute top-0 left-0 w-full h-6 bg-[#D4AF37] animate-bounce rounded-full" />

        </div>

      </motion.div>

    </section>
  );
}