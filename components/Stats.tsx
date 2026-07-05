import AnimatedCounter from "@/components/AnimatedCounter";
export default function Stats() {
  return (
    <section className="-mt-20 relative z-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-4xl font-bold text-rose-600">
  <AnimatedCounter end={200} suffix="+" />
</h2>
            <p className="mt-2 text-gray-600">Weddings Decorated</p>
          </div>

          <div>
          <h2 className="text-4xl font-bold text-rose-600">
  <AnimatedCounter end={4} suffix="+" />
</h2>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>

          <div>
          <h2 className="text-4xl font-bold text-rose-600">
  <AnimatedCounter end={5} suffix="★" />
</h2>
            <p className="mt-2 text-gray-600">Customer Rating</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-rose-600">
  <AnimatedCounter end={98} suffix="%" />
</h2>
            <p className="mt-2 text-gray-600">Happy Clients</p>
          </div>

        </div>
      </div>
    </section>
  );
}