"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExpandArrowsAlt } from "react-icons/fa";

const gallery = [
  {
    image: "/images/gallery/stage44.jpg",
    title: "Royal Stage Decoration",
  },
  {
    image: "/images/gallery/mandap.jpg",
    title: "Luxury Mandap",
  },
  {
    image: "/images/gallery/Floral Entrance1.jpeg",
    title: "Floral Entrance",
  },
  {
    image: "/images/gallery/mehndi.jpg",
    title: "Mehndi Decoration",
  },
  {
    image: "/images/gallery/haldi2.jpg",
    title: "Haldi Decoration",
  },
  {
    image: "/images/gallery/aisle.jpg",
    title: "Wedding Aisle",
  },
];

export default function Gallery() {

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const closeGallery = () => setSelectedIndex(null);

  const previousImage = useCallback(() => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? gallery.length - 1
        : selectedIndex - 1
    );
  }, [selectedIndex]);

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === gallery.length - 1
        ? 0
        : selectedIndex + 1
    );
 }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {

      if (selectedIndex === null) return;

      if (e.key === "Escape") closeGallery();

      if (e.key === "ArrowLeft") previousImage();

      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

 }, [selectedIndex, previousImage, nextImage]);

  return (

    <section
      id="gallery"
      className="relative py-32 bg-[#FAF7F2] overflow-hidden"
    >

      {/* Background */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#A67C52]/10 blur-[140px]" />

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

            Our Portfolio

          </span>

          <h2
            className="mt-8 text-5xl lg:text-6xl leading-tight text-[#1E1E1E]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >

            Moments That
            <span className="text-[#A67C52] italic">
              {" "}Last Forever
            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-600">

            Every celebration we design reflects elegance,
            creativity and timeless beauty. Discover some of
            our most luxurious wedding decorations.

          </p>

        </motion.div>

        {/* Premium Gallery */}

        <div className="columns-1 md:columns-2 xl:columns-3 gap-8">

                 {gallery.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .08,
              }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative mb-8 cursor-pointer overflow-hidden rounded-[34px] shadow-[0_25px_70px_rgba(0,0,0,.12)]"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={1200}
                quality={75}
                className="w-full h-auto object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Expand */}

              <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-500">

                <FaExpandArrowsAlt />

              </div>

              {/* Title */}

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                <h3
                  className="text-white text-3xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-white/70">

                  Click to explore

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Premium Lightbox */}

      {selectedIndex !== null && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={closeGallery}
        >

          {/* Close */}

          <button
            onClick={closeGallery}
            className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl transition"
          >
            ×
          </button>

          {/* Prev */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 text-white text-4xl"
          >
            ‹
          </button>

          {/* Next */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 text-white text-4xl"
          >
            ›
          </button>

          {/* Image */}

          <motion.div
            initial={{
              scale: .92,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: .4,
            }}
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={gallery[selectedIndex].image}
              alt={gallery[selectedIndex].title}
              width={1800}
              height={1400}
              priority
              quality={75}
              className="rounded-[36px] w-full max-h-[80vh] object-contain shadow-[0_30px_90px_rgba(0,0,0,.6)]"
            />

            <div className="flex items-center justify-between mt-8">

              <div>

                <h2
                  className="text-white text-4xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {gallery[selectedIndex].title}
                </h2>

                <p className="mt-2 text-white/60">

                  DecorFlow Luxury Wedding Decoration

                </p>

              </div>

              <div className="text-white/70 text-xl font-semibold">

                {selectedIndex + 1} / {gallery.length}

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </section>
  );
}