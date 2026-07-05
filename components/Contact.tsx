export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let us Create Your Dream Wedding
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
            We do love to hear about your wedding plans. Fill out the form below
            and our team will contact you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">📍 Address</h3>
              <p className="text-gray-600">
                Gandhidham Post Office (Sub Office)Kachchh, Gujarat, IndiaPin Code: 370201
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">📞 Phone</h3>
              <p className="text-gray-600">
                +91 8780595775
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">📧 Email</h3>
              <p className="text-gray-600">
              thedecorflow@gmail.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2">🕒 Working Hours</h3>

              <p className="text-gray-600">
                Monday – Sunday
                <br />
                9:00 AM – 9:00 PM
              </p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <h3 className="text-3xl font-bold text-gray-900">
              Book a Free Consultation
            </h3>

            <p className="text-gray-600 mt-2 mb-8">
              Fill in your details and we will get back to you as soon as possible.
            </p>

            <form className="space-y-6">

              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 transition"
                  />
                </div>

              </div>

              {/* Phone & Date */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Wedding Date
                  </label>

                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 transition"
                  />
                </div>

              </div>

              {/* Budget */}
              <div>

                <label className="block mb-2 font-medium">
                  Estimated Budget
                </label>

                <select
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 transition"
                >
                  <option>Select Budget</option>
                  <option>₹50,000 - ₹1,00,000</option>
                  <option>₹1,00,000 - ₹3,00,000</option>
                  <option>₹3,00,000 - ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                </select>

              </div>

              {/* Message */}
              <div>

                <label className="block mb-2 font-medium">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your dream wedding..."
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 transition"
                ></textarea>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-xl text-lg font-semibold shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
      {/* Google Map */}

<div className="mt-20">

  <h3 className="text-3xl font-bold text-center mb-8">
    Find Us
  </h3>

  <div className="rounded-2xl overflow-hidden shadow-xl">

    <iframe
      src="https://www.google.com/maps?q=Gandhidham%20Post%20Office,%20Kachchh,%20Gujarat%20370201&output=embed"
      width="100%"
      height="450"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />

  </div>

</div>
    </section>
  );
}
