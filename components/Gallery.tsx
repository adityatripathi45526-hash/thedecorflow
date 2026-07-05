"use client";

import { useState } from "react";
import Image from "next/image";

const gallery = [
  { image: "/images/gallery/1.png", title: "Royal Stage Decoration" },
  { image: "/images/gallery/2.png", title: "Luxury Mandap" },
  { image: "/images/gallery/3.png", title: "Floral Entrance" },
  { image: "/images/gallery/4.png", title: "Reception Setup" },
  { image: "/images/gallery/5.png", title: "Haldi Decoration" },
  { image: "/images/gallery/6.png", title: "Wedding Aisle" },
];

export default function Gallery() {
 const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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
  return (
    <section
      id="gallery"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-yellow-600 uppercase tracking-widest font-semibold">
            Our Gallery
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Some of Our Beautiful Decorations
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Every wedding tells a unique story. Explore some of our
            favorite decoration setups created with passion and elegance.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

         {gallery.map((item, index) => (
            <div
  key={item.title}
onClick={() => setSelectedIndex(index)}
  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
>
              <Image
  src={item.image}
  alt={item.title}
  width={500}
  height={600}
  quality={80}
  className="w-full h-80 object-cover"
/>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">

                <div className="p-6">

                  <h3 className="text-white text-2xl font-bold">
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
     {selectedIndex !== null && (
  <div
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
    onClick={() => setSelectedIndex(null)}
  >
    <div
      className="relative max-w-5xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
<button
  onClick={() => setSelectedIndex(null)}
  className="absolute -top-12 right-0 text-white text-4xl"
>
  ✕
</button>

{/* Previous Button */}
<button
  onClick={previousImage}
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-4xl w-14 h-14 rounded-full transition"
>
  ‹
</button>

{/* Next Button */}
<button
  onClick={nextImage}
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white text-4xl w-14 h-14 rounded-full transition"
>
  ›
</button>

<Image
  src={gallery[selectedIndex].image}
  alt={gallery[selectedIndex].title}
  width={1200}
  height={800}
  className="rounded-xl w-full h-auto"
/>

      <h3 className="text-white text-center mt-6 text-2xl font-bold">
        {gallery[selectedIndex].title}
      </h3>
    </div>
  </div>
)}
    </section>
  );
}