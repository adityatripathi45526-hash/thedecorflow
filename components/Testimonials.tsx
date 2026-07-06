const testimonials = [
  {
    name: "Priya & Rahul",
    review:
      "DecorFlow transformed our wedding into a fairy tale. Every guest was amazed by the decoration.",
  },
  {
    name: "Anjali & Karan",
    review:
      "Professional team, beautiful floral arrangements, and everything was completed on time.",
  },
  {
    name: "Sneha & Aman",
    review:
      "Highly recommended! Their creativity and attention to detail made our wedding unforgettable.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Heading */}

        <div className="text-center mb-12 md:mb-16">

          <p className="uppercase tracking-[4px] text-yellow-600 font-semibold text-sm">
            Testimonials
          </p>

          <h2 className="text-black md:text-5xl font-bold mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Nothing speaks louder than the experiences of our happy couples.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                p-8
                flex
                flex-col
                h-full
              "
            >

              {/* Quote */}

              <div className="text-5xl text-yellow-500 leading-none">
                ❝
              </div>
                          {/* Review */}

              <p className="mt-5 text-gray-600 italic leading-7">
  &ldquo;{item.review}&rdquo;
</p>


              {/* Stars */}

              <div className="mt-4 text-yellow-500 text-lg">
                ⭐⭐⭐⭐⭐
              </div>

  
              {/* Divider */}

              <div className="mt-6 border-t border-gray-200 pt-5">

                <h3 className="font-bold text-lg text-gray-900">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Happy Couple
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}