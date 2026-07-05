const services = [
  {
    title: "Stage Decoration",
    description: "Elegant stage designs for unforgettable weddings.",
    icon: "💐",
  },
  {
    title: "Floral Decoration",
    description: "Fresh flowers crafted into stunning arrangements.",
    icon: "🌸",
  },
  {
    title: "Reception Decoration",
    description: "Luxury reception themes for your special day.",
    icon: "🎉",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-rose-600 font-semibold uppercase tracking-widest">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Making Every Celebration Extraordinary
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            We provide complete wedding decoration services tailored
            to your dream celebration.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              <div className="text-6xl transition-transform duration-500 group-hover:scale-125">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

              <a
  href="#contact"
  className="mt-6 inline-flex items-center gap-2 text-yellow-600 font-semibold hover:gap-3 transition-all duration-300"
>
  Book This Service →
</a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}