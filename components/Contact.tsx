"use client";

import { motion } from "framer-motion";

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
      className="relative py-32 bg-[#FAF7F2] overflow-hidden"
    >

      {/* Background */}

      <div className="absolute -top-32 left-0 w-[450px] h-[450px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#A67C52]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-24"
        >

          <span className="inline-block rounded-full bg-[#D4AF37]/15 px-5 py-2 text-sm tracking-[0.3em] uppercase font-semibold text-[#A67C52]">

            Contact DecorFlow

          </span>

          <h2
            className="mt-8 text-5xl lg:text-6xl text-[#1E1E1E]"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >

            Let us Create Your
            <span className="italic text-[#A67C52]">

              {" "}Dream Wedding

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-600">

            We do love to hear about your celebration.
            Share your vision with us and our wedding experts
            will contact you within 24 hours.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-14">

          {/* LEFT INFO */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="space-y-8"
          >

                  {/* Contact Cards */}

          {[
            {
              icon: <MapPin size={24} />,
              title: "Visit Us",
              text: "Gandhidham, Kachchh\nGujarat 370201",
            },
            {
              icon: <Phone size={24} />,
              title: "Call Us",
              text: "+91 8780595775",
            },
            {
              icon: <Mail size={24} />,
              title: "Email",
              text: "thedecorflow@gmail.com",
            },
            {
              icon: <Clock size={24} />,
              title: "Working Hours",
              text: "Mon - Sun\n9:00 AM - 9:00 PM",
            },
          ].map((item) => (

            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              transition={{ duration: .35 }}
              className="rounded-[28px] bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,.08)] p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#A67C52] flex items-center justify-center text-white shadow-xl">

                {item.icon}

              </div>

              <h3
                className="mt-6 text-2xl text-[#1E1E1E]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.title}
              </h3>

              <p className="mt-3 whitespace-pre-line text-gray-600 leading-8">

                {item.text}

              </p>

            </motion.div>

          ))}

          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="rounded-[40px] bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_30px_80px_rgba(0,0,0,.08)] p-10 lg:p-14"
          >

            <h3
              className="text-4xl text-[#1E1E1E]"
              style={{ fontFamily: "var(--font-heading)" }}
            >

              Book Free Consultation

            </h3>

            <p className="mt-4 text-gray-600 leading-8">

              Tell us about your wedding and we will prepare a personalized decoration proposal.

            </p>

            <form className="mt-10 space-y-7">

              <div className="grid md:grid-cols-2 gap-6">

                <Input icon={<User size={18} />} placeholder="Full Name" />

                <Input icon={<Mail size={18} />} placeholder="Email Address" type="email" />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <Input icon={<Phone size={18} />} placeholder="Phone Number" />

                <Input icon={<Calendar size={18} />} type="date" />

              </div>

              <SelectInput />

              <TextArea />

              <button
                className="w-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#A67C52] py-5 text-lg font-semibold text-white shadow-xl hover:scale-[1.02] transition"
              >

                Book Free Consultation →

              </button>

            </form>

          </motion.div>

        </div>

        {/* Google Map */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-24"
        >

          <div className="rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.12)] border border-white">

            <iframe
              src="https://www.google.com/maps?q=Gandhidham%20Post%20Office,%20Kachchh,%20Gujarat%20370201&output=embed"
              width="100%"
              height="520"
              loading="lazy"
              allowFullScreen
              className="border-0"
            />

          </div>

        </motion.div>

      </div>

    </section>

  );
}

/* ---------------- Components ---------------- */

import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
}

function Input({
  icon,
  ...props
}: InputProps) {

  return (

    <div className="relative">

      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A67C52]">

        {icon}

      </div>

      <input
        {...props}
        className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#FFFDF9] py-4 pl-14 pr-5 text-[#1E1E1E] outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
      />

    </div>

  );

}

function SelectInput() {

  return (

    <div className="relative">

      <IndianRupee
        size={18}
        className="absolute left-5 top-5 text-[#A67C52]"
      />

      <select
        className="w-full rounded-2xl border border-[#D4AF37]/20 bg-[#FFFDF9] py-4 pl-14 pr-5 outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
      >

        <option>Select Wedding Budget</option>
        <option>₹50,000 - ₹1,00,000</option>
        <option>₹1,00,000 - ₹3,00,000</option>
        <option>₹3,00,000 - ₹5,00,000</option>
        <option>₹5,00,000+</option>

      </select>

    </div>

  );

}

function TextArea() {

  return (

    <div className="relative">

      <MessageSquare
        size={18}
        className="absolute left-5 top-5 text-[#A67C52]"
      />

      <textarea
        rows={6}
        placeholder="Tell us about your dream wedding..."
        className="w-full resize-none rounded-2xl border border-[#D4AF37]/20 bg-[#FFFDF9] py-4 pl-14 pr-5 outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
      />

    </div>

  );

}