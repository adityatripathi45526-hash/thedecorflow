import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">
            DecorFlow
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            We transform weddings into unforgettable experiences through
            elegant décor, floral artistry, and luxury event styling.
          </p>

          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-yellow-500 transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-yellow-500 transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-yellow-500 transition flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-6 text-yellow-500">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>
              <a href="#" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-yellow-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-yellow-500 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-yellow-500 transition">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-xl font-semibold mb-6 text-yellow-500">
            Our Services
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li>Wedding Decoration</li>
            <li>Luxury Mandap</li>
            <li>Stage Decoration</li>
            <li>Floral Decoration</li>
            <li>Reception Setup</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-6 text-yellow-500">
            Contact
          </h3>

          <div className="space-y-5 text-gray-400">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              <span>Gandhidham Post Office (Sub Office)Kachchh, Gujarat, IndiaPin Code: 370201</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-500" />
              <span>+91 8780595775</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-500" />
              <span>thedecorflow@gmail.com</span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} DecorFlow. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Crafted with ❤️ for Beautiful Weddings
          </p>

        </div>

      </div>

    </footer>
  );
}