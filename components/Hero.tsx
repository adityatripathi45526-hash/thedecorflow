import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Wedding Decoration"
        fill
        loading="lazy"
        className="object-cover scale-105"
        quality={80}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40"></div>

      {/* Decorative Blur Circle */}
      <div className="absolute top-24 left-16 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>

      {/* Decorative Blur Circle */}
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
{/* Floating Rating Card */}
<div className="hidden lg:block">

  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl animate-pulse">

    <p className="text-yellow-400 text-3xl">
      ★★★★★
    </p>

    <h3 className="mt-4 text-3xl font-bold">
      4.9 Rating
    </h3>

    <p className="mt-2 text-gray-200">
      Trusted by hundreds of happy couples
    </p>

    <div className="mt-8 border-t border-white/20 pt-6">

      <h2 className="text-5xl font-bold text-yellow-400">
        200+
      </h2>

      <p className="mt-2 text-gray-200">
        Weddings Completed
      </p>

    </div>

  </div>

</div>
          <div className="max-w-3xl">

            {/* Small Heading */}
            <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold">
              Premium Wedding Decorators
            </p>

            {/* Main Heading */}
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-white">
              Turning Your
              <span className="text-yellow-400"> Dream Wedding </span>
              Into Reality
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8 max-w-2xl">
              From luxurious mandaps to breathtaking floral arrangements,
              DecorFlow creates unforgettable wedding experiences with elegance,
              creativity and perfection.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Book Consultation
              </a>

              <a
                href="#gallery"
                className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                View Gallery
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}