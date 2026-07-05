const features = [
  {
    icon: "⭐",
    title: "Premium Quality",
    description: "Luxury wedding decorations crafted with attention to every detail."
  },
  {
    icon: "⏰",
    title: "On-Time Delivery",
    description: "We complete every decoration before your event begins."
  },
  {
    icon: "🎨",
    title: "Custom Themes",
    description: "Every wedding is unique, so every decoration is customized."
  },
  {
    icon: "❤️",
    title: "100% Client Satisfaction",
    description: "Our clients trust us to create unforgettable wedding experiences."
  }
];

export default function WhyChooseUs() {
  return (
    <section
  id="why-us"
  className="py-24 bg-white"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-rose-600 uppercase tracking-widest font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4">
            We Make Weddings Truly Memorable
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We combine creativity, elegance, and professionalism to
            transform your dream wedding into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="flex gap-6 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="text-5xl">
                {feature.icon}
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
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