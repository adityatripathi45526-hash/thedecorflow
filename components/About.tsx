import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

       
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Side */}
            <div className="flex-1">
              <Image
                src="/images/about1.png"
                alt="Wedding Decoration"
                width={600}
                height={500}
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Right Side */}
            <div className="flex-1">

              <p className="text-rose-600 font-semibold uppercase tracking-widest">
                About DecorFlow
              </p>

              <h2 className="mt-4 text-5xl font-bold text-gray-900 leading-tight">
                Creating Magical Wedding Experiences
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                We specialize in designing elegant wedding decorations that
                transform every celebration into an unforgettable experience.
                From floral arrangements to grand stage designs, our team
                creates moments that last forever.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <span className="text-rose-600 text-xl">✔</span>
                  <p className="text-gray-700">
                    Premium Wedding Decoration
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-rose-600 text-xl">✔</span>
                  <p className="text-gray-700">
                    Experienced Design Team
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-rose-600 text-xl">✔</span>
                  <p className="text-gray-700">
                    Personalized Wedding Themes
                  </p>
                </div>

              </div>

              <div className="mt-10">

                <button className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition duration-300">
                  Learn More
                </button>
              
              </div>

            </div>

          </div>

       

      </div>
     
    </section>
  );
}