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
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-yellow-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Nothing speaks louder than the experiences of our happy couples.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

             <p className="mt-6 text-gray-600 italic">
  &quot;{item.review}&quot;
</p>

              <h3 className="mt-8 text-xl font-bold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}