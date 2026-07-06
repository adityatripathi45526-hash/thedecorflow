const features = [
  {
    icon: "⭐",
    title: "Premium Quality",
    description:
      "Luxury wedding decorations crafted with attention to every detail.",
  },
  {
    icon: "⏰",
    title: "On-Time Delivery",
    description:
      "We complete every decoration before your event begins.",
  },
  {
    icon: "🎨",
    title: "Custom Themes",
    description:
      "Every wedding is unique, so every decoration is customized.",
  },
  {
    icon: "❤️",
    title: "100% Client Satisfaction",
    description:
      "Our clients trust us to create unforgettable wedding experiences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-16 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <p className="text-rose-600 uppercase tracking-widest font-semibold text-sm">
            Why Choose Us
          </p>

          <h2 className="text-black
          -3xl md:text-5xl font-bold mt-3 leading-tight">
            We Make Weddings
            <br className="md:hidden" />
            Truly Memorable
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-base md:text-lg">
            We combine creativity, elegance, and professionalism to transform
            your dream wedding into reality.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                p-6 md:p-8
                flex
                flex-col
                sm:flex-row
                items-center
                sm:items-start
                text-center
                sm:text-left
                gap-5
              "
            >

              <div className="text-4xl md:text-5xl flex-shrink-0">
                {feature.icon}
              </div>

              <div>

                <h3 className="text-xl md:text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  {feature.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}