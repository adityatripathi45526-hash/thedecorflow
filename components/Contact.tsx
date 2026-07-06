"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Calendar,
  IndianRupee,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-yellow-600 font-semibold">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-900">
            Let's Create Your Dream Wedding
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            We'd love to hear about your wedding plans. Fill in the form and
            our team will contact you within 24 hours.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT */}

          <div className="space-y-6">

            {/* Address */}

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">

                  <MapPin className="text-yellow-600" size={28} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Address
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Gandhidham Post Office (Sub Office)
                    <br />
                    Kachchh, Gujarat
                    <br />
                    India – 370201
                  </p>

                </div>

              </div>

            </div>

            {/* Phone */}

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">

                  <Phone className="text-yellow-600" size={26} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Phone
                  </h3>

                  <p className="mt-2 text-gray-600">
                    +91 8780595775
                  </p>

                </div>

              </div>

            </div>

            {/* Email */}

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">

                  <Mail className="text-yellow-600" size={26} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Email
                  </h3>

                  <p className="mt-2 text-gray-600 break-all">
                    thedecorflow@gmail.com
                  </p>

                </div>

              </div>

            </div>

            {/* Working Hours */}

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">

                  <Clock className="text-yellow-600" size={26} />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Working Hours
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Monday – Sunday
                    <br />
                    9:00 AM – 9:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-[32px] shadow-2xl p-8 md:p-10">

            <h3 className="text-3xl font-bold text-gray-900">
              Book Free Consultation
            </h3>

            <p className="text-gray-600 mt-3 mb-8">
              Fill in your details and we'll contact you shortly.
            </p>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                {/* Full Name */}

                <div className="relative">

                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 text-black placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                  />

                </div>

                {/* Email */}

                <div className="relative">

                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 text-black placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                  />

                </div>

              </div>
                            <div className="grid md:grid-cols-2 gap-6">

                {/* Phone */}

                <div className="relative">

                  <Phone
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 text-black placeholder:text-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                  />

                </div>

                {/* Wedding Date */}

                <div className="relative">

                  <Calendar
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 text-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                  />

                </div>

              </div>

              {/* Budget */}

              <div className="relative">

                <IndianRupee
                  size={20}
                  className="absolute left-4 top-5 text-gray-400"
                />

                <select
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 text-black focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition appearance-none"
                >
                  <option>Select Estimated Budget</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹3,00,000</option>
                  <option>₹3,00,000 – ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                </select>

              </div>

              {/* Message */}

              <div className="relative">

                <MessageSquare
                  size={20}
                  className="absolute left-4 top-5 text-gray-400"
                />

                <textarea
                  rows={6}
                  placeholder="Tell us about your dream wedding..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 text-black placeholder:text-gray-400 resize-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
                />

              </div>

              {/* Button */}

              <button
                type="submit"
                className="
                  w-full
                  bg-yellow-500
                  hover:bg-yellow-600
                  text-white
                  py-4
                  rounded-2xl
                  text-lg
                  font-semibold
                  shadow-xl
                  hover:shadow-yellow-300/40
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                Book Free Consultation →
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}

        <div className="mt-20">

          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Find Us
          </h3>

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Gandhidham%20Post%20Office,%20Kachchh,%20Gujarat%20370201&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />

          </div>

        </div>

      </div>

    </section>
  );
}