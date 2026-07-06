"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const gallery = [
  {
    image: "/images/gallery/1.png",
    title: "Royal Stage Decoration",
  },
  {
    image: "/images/gallery/2.png",
    title: "Luxury Mandap",
  },
  {
    image: "/images/gallery/3.png",
    title: "Floral Entrance",
  },
  {
    image: "/images/gallery/4.png",
    title: "Reception Setup",
  },
  {
    image: "/images/gallery/5.png",
    title: "Haldi Decoration",
  },
  {
    image: "/images/gallery/6.png",
    title: "Wedding Aisle",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeGallery = () => setSelectedIndex(null);

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? gallery.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === gallery.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeGallery();

      if (e.key === "ArrowLeft") previousImage();

      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-yellow-600 font-semibold text-sm">
            Our Portfolio
          </p>

          <h2 className="text-4xl text-black md:text-5xl font-bold mt-4">
            Some of Our Beautiful Decorations
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
            Every wedding tells a unique story. Explore some of our
            finest decorations crafted with elegance, creativity and
            attention to every little detail.
          </p>

        </div>

        {/* Masonry Gallery */}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">

          {gallery.map((item, index) => (

            <div
              key={item.title}
              onClick={() => setSelectedIndex(index)}
              className="
                mb-6
                break-inside-avoid
                cursor-pointer
                group
                overflow-hidden
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              <div className="relative overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={1200}
                  quality={85}
                  className="
                    w-full
                    h-auto
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    flex
                    items-end
                  "
                >

                  <div className="p-6">

                    <h3 className="text-white text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-white/80 mt-2">
                      Click to View
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
            {/* Premium Lightbox */}

      {selectedIndex !== null && (

        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={closeGallery}
        >

          {/* Close */}

          <button
            onClick={closeGallery}
            className="
              absolute
              top-6
              right-6
              w-12
              h-12
              rounded-full
              bg-white/10
              hover:bg-white/20
              text-white
              text-3xl
              transition
            "
          >
            ✕
          </button>

          {/* Previous */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="
              absolute
              left-4
              md:left-8
              top-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-white/10
              hover:bg-white/20
              text-white
              text-4xl
              transition
            "
          >
            ‹
          </button>

          {/* Next */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="
              absolute
              right-4
              md:right-8
              top-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-white/10
              hover:bg-white/20
              text-white
              text-4xl
              transition
            "
          >
            ›
          </button>

          {/* Image */}

          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={gallery[selectedIndex].image}
              alt={gallery[selectedIndex].title}
              width={1600}
              height={1200}
              priority
              className="
                rounded-3xl
                w-full
                max-h-[80vh]
                object-contain
                shadow-2xl
              "
            />

            {/* Footer */}

            <div className="flex justify-between items-center mt-6">

              <div>

                <h3 className="text-white text-2xl font-bold">
                  {gallery[selectedIndex].title}
                </h3>

                <p className="text-white/70 mt-1">
                  DecorFlow Wedding Decoration
                </p>

              </div>

              <div className="text-white/70 font-medium text-lg">

                {selectedIndex + 1} / {gallery.length}

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}